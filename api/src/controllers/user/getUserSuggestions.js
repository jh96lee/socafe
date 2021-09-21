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
            COUNT(*)
            FROM posts
            JOIN topics_posts
            ON posts.id=topics_posts.post_id
            WHERE topic_id IN (
                SELECT
                topic_id
                FROM topics_users
                WHERE user_id=$1
                UNION 
                SELECT
                DISTINCT topic_id
                FROM posts
                JOIN post_likes
                ON posts.id=post_likes.post_id
                JOIN topics_posts
                ON posts.id=topics_posts.post_id
                WHERE post_likes.user_id=$1
                LIMIT 10
            )
            GROUP BY user_id
            HAVING user_id NOT IN (
                SELECT
                leader_id
                FROM following
                WHERE follower_id=$1
            ) AND user_id!=$1
            ORDER BY count DESC
            LIMIT 5;
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
