const pool = require("../../pool");
const PostRepo = require("../../repos/post-repo");
const UserRepo = require("../../repos/user-repo");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const getExplorePosts = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const topicID = parseInt(req.query.topic);

	const topicsSQLQuery = topicID
		? "$1"
		: `
        SELECT
        topic_id
        FROM topics_users
        WHERE user_id=$1
        UNION
        SELECT
        DISTINCT topic_id
        FROM topics_posts
        JOIN (
            SELECT
            post_id
            FROM post_likes
            WHERE user_id=$1
        ) AS l
        ON topics_posts.post_id=l.post_id
        LIMIT 10
        `;

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	try {
		const explorePostsData = await pool.queryToDatabase(
			`
		    SELECT
		    id AS post_id
		    FROM (
		        SELECT
		        *,
		        ROW_NUMBER() OVER (ORDER BY total_likes DESC) AS index
		        FROM (
		            SELECT
		            t.id,
		            COUNT(post_id) AS total_likes
		            FROM post_likes
		            RIGHT JOIN (
		                SELECT
		                DISTINCT posts.id
		                FROM posts
		                JOIN topics_posts
		                ON posts.id=topics_posts.post_id
		                WHERE topic_id IN (
		                    ${topicsSQLQuery}
		                )
		            ) AS t
		            ON post_likes.post_id=t.id
		            GROUP BY t.id
		        ) AS o
		    ) AS f
		    WHERE index BETWEEN $2 AND $3;
		    `,
			[topicID ? topicID : userID, betweenFront, betweenBack]
		);

		const nextExplorePostsData = await pool.queryToDatabase(
			`
            SELECT
            id AS post_id
            FROM (
                SELECT
                *,
                ROW_NUMBER() OVER (ORDER BY total_likes DESC) AS index
                FROM (
                    SELECT
                    t.id,
                    COUNT(post_id) AS total_likes
                    FROM post_likes
                    RIGHT JOIN (
                        SELECT
                        DISTINCT posts.id
                        FROM posts
                        JOIN topics_posts
                        ON posts.id=topics_posts.post_id
                        WHERE topic_id IN (
                            ${topicsSQLQuery}
                        )
                    ) AS t
                    ON post_likes.post_id=t.id
                    GROUP BY t.id
                ) AS o
            ) AS f
            WHERE index > $2
            LIMIT 1;
			`,
			[topicID ? topicID : userID, betweenBack]
		);

		const nextAPIEndpoint = nextExplorePostsData.rows[0]
			? `/post/explore?page=${page + 1}&size=${size}`
			: null;

		const explorePostsArray = [];

		for (let explorePostID of explorePostsData.rows) {
			const postID = explorePostID.post_id;

			const postOwnerData = await pool.queryToDatabase(
				`
                SELECT
                user_id
                FROM posts
                WHERE id=$1
                `,
				[postID]
			);

			const postOwner = await UserRepo.getUserByID(
				postOwnerData.rows[0].user_id
			);

			const postImages = await PostRepo.getPostImages(postID);

			const postTotalLikes = await PostRepo.getPostTotalLikes(postID);

			const postTotalComments = await PostRepo.getPostTotalComments(postID);

			const postIsLiked = await PostRepo.getPostIsLiked(userID, postID);

			const postTopics = await PostRepo.getPostTopics(postID);

			explorePostsArray.push({
				post_id: postID,
				post_owner: postOwner,
				post_images: postImages,
				post_topics: postTopics,
				post_total_likes: postTotalLikes,
				post_total_comments: postTotalComments,
				post_is_liked: postIsLiked,
			});
		}

		res.send({
			contents: explorePostsArray,
			next: nextAPIEndpoint,
		});
	} catch (error) {
		console.log(error);
		res.send({
			error: {
				catch: "There has been an error while fetching explore related posts",
			},
		});
	}
};

module.exports = getExplorePosts;
