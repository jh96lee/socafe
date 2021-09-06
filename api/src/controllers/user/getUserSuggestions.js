const pool = require("../../pool");

const UserRepo = require("../../repos/user-repo");

const getUserSuggestions = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const userSuggestionsArray = [];

	try {
		const suggestedUserIDsData = await pool.queryToDatabase(
			`
            SELECT
            user_id,
            COUNT(user_id) AS total_topic_of_interests_posts
            FROM posts
            JOIN (
            SELECT 
            post_id
            FROM posts
            JOIN (
                SELECT 
                * 
                FROM topics_posts
                WHERE topic_id IN (
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
                    )
                ) AS t
                ON t.post_id=posts.id
                GROUP BY post_id
            ) AS p
            ON posts.id=p.post_id
            GROUP BY user_id
            HAVING user_id NOT IN (
                SELECT
                leader_id
                FROM following
                WHERE follower_id=$1
            )
            ORDER BY total_topic_of_interests_posts DESC
            LIMIT 10;
            `,
			[userID]
		);

		const suggestedUserIDsArray = suggestedUserIDsData.rows.map(
			(element) => element.user_id
		);

		for (let suggestedUserID of suggestedUserIDsArray) {
			const suggestedUser = await UserRepo.getUserByID(suggestedUserID);

			// REVIEW: double checking
			const isUserFollowingSuggestedUser = await UserRepo.getProfileIsFollowing(
				suggestedUser.id,
				userID
			);

			userSuggestionsArray.push({
				...suggestedUser,
				// FIX: change key name
				profile_is_following: isUserFollowingSuggestedUser,
			});
		}

		res.send(userSuggestionsArray);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching user suggestions data",
			},
		});
	}
};

module.exports = getUserSuggestions;
