const pool = require("../pool");

class CommentRepo {
	static async insertComment(
		userID,
		postID,
		parentCommentID,
		repliedCommentID
	) {
		const { rows } = await pool.queryToDatabase(
			`
			INSERT INTO comments
		    (user_id, post_id, parent_comment_id, replied_comment_id)
		    VALUES ($1, $2, $3, $4)
		    RETURNING id, created_at, user_id, post_id, parent_comment_id, replied_comment_id;
			`,
			[userID, postID, parentCommentID, repliedCommentID]
		);

		return rows[0];
	}

	static async insertCommentNode(
		commentID,
		revisedNodeType,
		nodeValue,
		mentionType
	) {
		const { rows } = await pool.queryToDatabase(
			`
            INSERT INTO comment_contents
            (comment_id, node_type, node_value, mention_type)
            VALUES
            ($1, $2, $3, $4)
            RETURNING id, comment_id, node_type, node_value, mention_type;
            `,
			[commentID, revisedNodeType, nodeValue, mentionType]
		);

		return rows[0];
	}

	static async insertCommentLike(userID, commentID) {
		const { rows } = await pool.queryToDatabase(
			`
			INSERT INTO comment_likes (user_id, comment_id)
			VALUES ($1, $2)
            RETURNING id;
			`,
			[userID, commentID]
		);

		return rows[0].id;
	}

	static async deleteCommentLike(userID, commentID) {
		await pool.queryToDatabase(
			`
			DELETE 
			FROM comment_likes 
			WHERE user_id=$1 AND comment_id=$2;
			`,
			[userID, commentID]
		);
	}

	static async getCommentNodesArray(commentID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            node_type, 
            node_value
            FROM comment_contents
            WHERE comment_id=$1;
            `,
			[commentID]
		);

		return rows;
	}

	static async getCommentTotalReplies(commentID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT 
            COUNT(*)::INT
            FROM comments
            WHERE parent_comment_id=$1;
            `,
			[commentID]
		);

		return rows[0].count;
	}

	static async getCommentIsLiked(userID, commentID) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            id
            FROM comment_likes
            WHERE user_id=$1 AND comment_id=$2;
            `,
			[userID, commentID]
		);

		return rows[0] ? true : false;
	}

	static async getParentComments(userID, postID, betweenFront, betweenBack) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            id,
            created_at,
            user_id,
            post_id,
            parent_comment_id,
            comment_total_likes::INT
            FROM (
                SELECT 
                *, 
                ROW_NUMBER() OVER (ORDER BY post_id) AS index 
                FROM (
                    SELECT
                    *
                    FROM (
                        SELECT
                        comments.id,
                        comments.created_at,
                        comments.user_id,
                        comments.post_id,
                        comments.parent_comment_id,
                        l.comment_total_likes
                        FROM comments
                        JOIN (
                            SELECT 
                            comments.id,
                            COUNT(comment_likes.user_id) AS comment_total_likes
                            FROM comments
                            LEFT JOIN comment_likes
                            ON comments.id=comment_likes.comment_id
                            GROUP BY comments.id
                            ORDER BY comments.created_at DESC
                        ) AS l
                        ON comments.id=l.id
                        WHERE user_id=$1 AND post_id=$2 AND parent_comment_id IS NULL
                        UNION ALL
                        SELECT
                        comments.id,
                        comments.created_at,
                        comments.user_id,
                        comments.post_id,
                        comments.parent_comment_id,
                        l.comment_total_likes
                        FROM comments
                        JOIN (
                            SELECT 
                            comments.id,
                            COUNT(comment_likes.user_id) AS comment_total_likes
                            FROM comments
                            LEFT JOIN comment_likes
                            ON comments.id=comment_likes.comment_id
                            GROUP BY comments.id
                        ) AS l
                        ON comments.id=l.id
                        WHERE user_id!=$1 AND post_id=$2 AND parent_comment_id IS NULL
                    ) AS r
                    ORDER BY
                    CASE WHEN user_id=$1 THEN created_at END,
                    CASE WHEN user_id!=$1 THEN comment_total_likes END DESC
                ) AS f
            ) AS z
            WHERE index BETWEEN $3 AND $4;
			`,
			[userID, postID, betweenFront, betweenBack]
		);

		return rows;
	}

	static async getNextParentComment(userID, postID, betweenBack) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            id,
            created_at,
            user_id,
            post_id,
            parent_comment_id,
            comment_total_likes::INT
            FROM (
                SELECT 
                *, 
                ROW_NUMBER() OVER (ORDER BY post_id) AS index 
                FROM (
                    SELECT
                    *
                    FROM (
                        SELECT
                        comments.id,
                        comments.created_at,
                        comments.user_id,
                        comments.post_id,
                        comments.parent_comment_id,
                        l.comment_total_likes
                        FROM comments
                        JOIN (
                            SELECT 
                            comments.id,
                            COUNT(comment_likes.user_id) AS comment_total_likes
                            FROM comments
                            LEFT JOIN comment_likes
                            ON comments.id=comment_likes.comment_id
                            GROUP BY comments.id
                            ORDER BY comments.created_at DESC
                        ) AS l
                        ON comments.id=l.id
                        WHERE user_id=$1 AND post_id=$2 AND parent_comment_id IS NULL
                        UNION ALL
                        SELECT
                        comments.id,
                        comments.created_at,
                        comments.user_id,
                        comments.post_id,
                        comments.parent_comment_id,
                        l.comment_total_likes
                        FROM comments
                        JOIN (
                            SELECT 
                            comments.id,
                            COUNT(comment_likes.user_id) AS comment_total_likes
                            FROM comments
                            LEFT JOIN comment_likes
                            ON comments.id=comment_likes.comment_id
                            GROUP BY comments.id
                        ) AS l
                        ON comments.id=l.id
                        WHERE user_id!=$1 AND post_id=$2 AND parent_comment_id IS NULL
                    ) AS r
                    ORDER BY
                    CASE WHEN user_id=$1 THEN created_at END,
                    CASE WHEN user_id!=$1 THEN comment_total_likes END DESC
                ) AS f
            ) AS z
            WHERE index > $3
            LIMIT 1;
			`,
			[userID, postID, betweenBack]
		);

		return rows[0];
	}

	static async getCommentReplies(parentCommentID, betweenFront, betweenBack) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            id,
            created_at,
            user_id,
            parent_comment_id,
            post_id,
            comment_total_likes
            FROM (
                SELECT 
                comments.id,
                comments.created_at,
                comments.user_id,
                comments.post_id,
                comments.parent_comment_id,
                comment_total_likes,
                ROW_NUMBER() OVER (ORDER BY created_at DESC) AS index
                FROM comments
                JOIN (
                    SELECT
                    comments.id,
                    COUNT(comment_likes.user_id)::INT AS comment_total_likes
                    FROM comments
                    LEFT JOIN comment_likes
                    ON comments.id=comment_likes.comment_id
                    GROUP BY comments.id
                    HAVING parent_comment_id=$1
                ) AS r
                ON comments.id=r.id
            ) AS f
            WHERE index BETWEEN $2 AND $3
            ORDER BY created_at;
            `,
			[parentCommentID, betweenFront, betweenBack]
		);

		return rows;
	}

	static async getNextCommentReply(parentCommentID, betweenBack) {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            id,
            created_at,
            user_id,
            parent_comment_id,
            post_id,
            comment_total_likes
            FROM (
                SELECT 
                comments.id,
                comments.created_at,
                comments.user_id,
                comments.post_id,
                comments.parent_comment_id,
                comment_total_likes,
                ROW_NUMBER() OVER (ORDER BY created_at DESC) AS index
                FROM comments
                JOIN (
                    SELECT
                    comments.id,
                    COUNT(comment_likes.user_id)::INT AS comment_total_likes
                    FROM comments
                    LEFT JOIN comment_likes
                    ON comments.id=comment_likes.comment_id
                    GROUP BY comments.id
                    HAVING parent_comment_id=$1
                ) AS r
                ON comments.id=r.id
            ) AS f
            WHERE index > $2
            ORDER BY created_at
            LIMIT 1;
            `,
			[parentCommentID, betweenBack]
		);

		return rows[0];
	}
}

module.exports = CommentRepo;
