const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const getPostComments = async (req, res) => {
	const userID = parseInt(req.params.userID);
	const postID = parseInt(req.params.postID);

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	const postCommentsArray = [];

	try {
		const postCommentsArrayData = await pool.queryToDatabase(
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
                *,
                ROW_NUMBER() OVER (ORDER BY post_id) AS index
                FROM (
                    SELECT
                    comments.id,
                    comments.created_at, 
                    comments.user_id,
                    comments.post_id,
                    comments.parent_comment_id,
                    comment_total_likes
                    FROM comments
                    JOIN (
                        SELECT
                        comments.id AS comment_id,
                        comments.created_at,
                        COUNT(comment_likes.user_id)::INT AS comment_total_likes
                        FROM comments
                        LEFT JOIN comment_likes
                        ON comments.id=comment_likes.comment_id
                        GROUP BY comments.id
                        ORDER BY created_at
                    ) AS l
                    ON comments.id=l.comment_id
                    WHERE user_id=$1 AND post_id=$2 AND parent_comment_id IS NULL
                    UNION ALL
                    SELECT
                    comments.id,
                    comments.created_at, 
                    comments.user_id,
                    comments.post_id,
                    comments.parent_comment_id,
                    comment_total_likes
                    FROM comments
                    JOIN (
                        SELECT
                        comments.id AS comment_id,
                        comments.created_at,
                        COUNT(comment_likes.user_id)::INT AS comment_total_likes
                        FROM comments
                        LEFT JOIN comment_likes
                        ON comments.id=comment_likes.comment_id
                        GROUP BY comments.id
                        ORDER BY comment_total_likes
                    ) AS l
                    ON comments.id=l.comment_id
                    WHERE user_id!=$3 AND post_id=$4 AND parent_comment_id IS NULL
                ) AS f
            ) AS a
            WHERE index BETWEEN $5 AND $6;
			`,
			[userID, postID, userID, postID, betweenFront, betweenBack]
		);

		const nextPostCommentData = await pool.queryToDatabase(
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
                *,
                ROW_NUMBER() OVER (ORDER BY post_id) AS index
                FROM (
                    SELECT
                    comments.id,
                    comments.created_at, 
                    comments.user_id,
                    comments.post_id,
                    comments.parent_comment_id,
                    comment_total_likes
                    FROM comments
                    JOIN (
                        SELECT
                        comments.id AS comment_id,
                        comments.created_at,
                        COUNT(comment_likes.user_id)::INT AS comment_total_likes
                        FROM comments
                        LEFT JOIN comment_likes
                        ON comments.id=comment_likes.comment_id
                        GROUP BY comments.id
                        ORDER BY created_at
                    ) AS l
                    ON comments.id=l.comment_id
                    WHERE user_id=$1 AND post_id=$2 AND parent_comment_id IS NULL
                    UNION ALL
                    SELECT
                    comments.id,
                    comments.created_at, 
                    comments.user_id,
                    comments.post_id,
                    comments.parent_comment_id,
                    comment_total_likes
                    FROM comments
                    JOIN (
                        SELECT
                        comments.id AS comment_id,
                        comments.created_at,
                        COUNT(comment_likes.user_id)::INT AS comment_total_likes
                        FROM comments
                        LEFT JOIN comment_likes
                        ON comments.id=comment_likes.comment_id
                        GROUP BY comments.id
                        ORDER BY comment_total_likes
                    ) AS l
                    ON comments.id=l.comment_id
                    WHERE user_id!=$3 AND post_id=$4 AND parent_comment_id IS NULL
                ) AS f
            ) AS a
            WHERE index > $5
            LIMIT 1;
			`,
			[userID, postID, userID, postID, betweenBack]
		);

		const nextAPIEndpoint = nextPostCommentData.rows[0]
			? `/comment/parent/${postID}/${userID}?page=${page + 1}&size=${size}`
			: null;

		for (let postComment of postCommentsArrayData.rows) {
			const { id, user_id } = postComment;

			const postCommentUserData = await UserRepo.getUserByID(user_id);

			const postCommentNodesArrayData = await pool.queryToDatabase(
				`
                SELECT
                node_type, 
                node_value
                FROM comment_contents
                WHERE comment_id=$1;
                `,
				[id]
			);

			const postCommentTotalRepliesData = await pool.queryToDatabase(
				`
                SELECT 
                COUNT(*)::INT
                FROM comments
                WHERE parent_comment_id=$1;
                `,
				[id]
			);

			const postCommentIsLikedData = await pool.queryToDatabase(
				`
                SELECT
                id
                FROM comment_likes
                WHERE user_id=$1 AND comment_id=$2;
                `,
				[userID, id]
			);

			postCommentsArray.push({
				...postComment,
				comment_user: postCommentUserData,
				comment_nodes_array: postCommentNodesArrayData.rows,
				comment_total_replies: postCommentTotalRepliesData.rows[0].count,
				comment_is_liked: postCommentIsLikedData.rows[0] ? true : false,
			});
		}

		res.send({ contents: postCommentsArray, next: nextAPIEndpoint });
	} catch (error) {
		res.send({
			error: {
				catch:
					"There has been an error while fetching for comments of this post",
			},
		});
	}
};

module.exports = getPostComments;
