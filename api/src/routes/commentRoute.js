const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");

const pool = require("../pool");

const commentRouter = express.Router();

// TODO: upload comment
commentRouter.post(
	"/upload/post/comment",
	authenticateToken,
	async (req, res) => {
		const userID = parseInt(res.locals.userID);

		const {
			postID,
			parentCommentID,
			repliedCommentOwnerID,
			commentNodesArray,
		} = req.body;

		try {
			// REVIEW: insert data into comments table
			const { rows } = await pool.queryToDatabase(
				`
                INSERT INTO comments
                (user_id, post_id, parent_comment_id, replied_comment_owner_id)
                VALUES ($1, $2, $3, $4)
                RETURNING id;
                `,
				[userID, postID, parentCommentID, repliedCommentOwnerID]
			);

			// REVIEW: retrieve the id of the comment that has just been inserted
			const commentID = rows[0].id;

			// REVIEW: insert the nodes values into comment_contents table
			for (let node of commentNodesArray) {
				await pool.queryToDatabase(
					`
                    INSERT INTO comment_contents
                    (comment_id, node_type, node_value)
                    VALUES ($1, $2, $3);
                    `,
					[commentID, node.nodeType, node.nodeValue]
				);
			}

			// REVIEW: data of comment's owner
			const commentOwnerData = await pool.queryToDatabase(
				`
				SELECT 
				id AS user_id,  
				username,
				avatar_url
				FROM users
				WHERE id=$1;
				`,
				[userID]
			);

			const repliedCommentOwnerUsernameData = await pool.queryToDatabase(
				`
                SELECT
                username
                FROM users
                WHERE id=$1
                `,
				[repliedCommentOwnerID]
			);

			const postCommentChildNodesArrayData = await pool.queryToDatabase(
				`
                SELECT
                node_type, 
                node_value
                FROM comment_contents
                WHERE comment_id=$1;
                `,
				[commentID]
			);

			res.send({
				...commentOwnerData.rows[0],
				post_id: postID,
				comment_id: commentID,
				parent_comment_id: parentCommentID,
				replied_comment_owner_username: repliedCommentOwnerUsernameData.rows[0]
					? repliedCommentOwnerUsernameData.rows[0]
					: null,
				post_comment_child_nodes_array: postCommentChildNodesArrayData.rows,
				success: "Success",
			});
		} catch (error) {
			res.send({
				error: { catch: "There has been an error while posting your comment" },
			});
		}
	}
);

// TODO: fetch my parent comments
commentRouter.get("/comment/my/:userID/:postID", async (req, res) => {
	const userID = parseInt(req.params.userID);
	const postID = parseInt(req.params.postID);

	const myCommentsArray = [];

	const myParentCommentsArrayData = await pool.queryToDatabase(
		`
        SELECT 
        id,
        parent_comment_id,
        replied_comment_owner_id,
        user_id
        FROM comments
        WHERE user_id=$1 AND post_id=$2 AND parent_comment_id IS NULL;
        `,
		[userID, postID]
	);

	for (let myComment of myParentCommentsArrayData.rows) {
		const { id, parent_comment_id, replied_comment_owner_id, user_id } =
			myComment;

		const commentOwnerData = await pool.queryToDatabase(
			`
            SELECT 
            id AS user_id,  
            avatar_url,
            username
            FROM users
            WHERE id=$1;
            `,
			[user_id]
		);

		const repliedCommentOwnerUsernameData = await pool.queryToDatabase(
			`
            SELECT
            username
            FROM users
            WHERE id=$1
            `,
			[replied_comment_owner_id]
		);

		const postCommentChildNodesArrayData = await pool.queryToDatabase(
			`
	        SELECT
	        node_type,
	        node_value
	        FROM comment_contents
	        WHERE comment_id=$1;
	        `,
			[id]
		);

		myCommentsArray.push({
			...commentOwnerData.rows[0],
			post_id: postID,
			comment_id: id,
			parent_comment_id,
			replied_comment_owner_username: repliedCommentOwnerUsernameData.rows[0]
				? repliedCommentOwnerUsernameData.rows[0]
				: null,
			post_comment_child_nodes_array: postCommentChildNodesArrayData.rows,
		});
	}

	res.send(myCommentsArray);
});

// TODO: fetch my parent comments
commentRouter.get("/comment/other/:userID/:postID", async (req, res) => {
	const userID = parseInt(req.params.userID);
	const postID = parseInt(req.params.postID);

	const otherUsersCommentsArray = [];

	const otherUsersCommentsArrayData = await pool.queryToDatabase(
		`
        SELECT 
        id,
        parent_comment_id,
        replied_comment_owner_id,
        user_id
        FROM comments
        WHERE user_id!=$1 AND post_id=$2 AND parent_comment_id IS NULL;
        `,
		[userID, postID]
	);

	for (let otherUserComment of otherUsersCommentsArrayData.rows) {
		const { id, parent_comment_id, replied_comment_owner_id, user_id } =
			otherUserComment;

		const commentOwnerData = await pool.queryToDatabase(
			`
            SELECT 
            id AS user_id,  
            avatar_url,
            username
            FROM users
            WHERE id=$1;
            `,
			[user_id]
		);

		const repliedCommentOwnerUsernameData = await pool.queryToDatabase(
			`
            SELECT
            username
            FROM users
            WHERE id=$1
            `,
			[replied_comment_owner_id]
		);

		const postCommentChildNodesArrayData = await pool.queryToDatabase(
			`
	        SELECT
	        node_type,
	        node_value
	        FROM comment_contents
	        WHERE comment_id=$1;
	        `,
			[id]
		);

		otherUsersCommentsArray.push({
			...commentOwnerData.rows[0],
			post_id: postID,
			comment_id: id,
			parent_comment_id,
			replied_comment_owner_username: repliedCommentOwnerUsernameData.rows[0]
				? repliedCommentOwnerUsernameData.rows[0]
				: null,
			post_comment_child_nodes_array: postCommentChildNodesArrayData.rows,
		});
	}

	res.send(otherUsersCommentsArray);
});

// TODO: fetch my parent comment's replies
commentRouter.get("/comment/reply/:parentCommentID", async (req, res) => {
	const parentCommentID = parseInt(req.params.parentCommentID);

	const parentCommentRepliesArray = [];

	const parentCommentRepliesArrayData = await pool.queryToDatabase(
		`
        SELECT 
        id,
        parent_comment_id,
        replied_comment_owner_id,
        user_id,
		post_id
        FROM comments
        WHERE parent_comment_id=$1;
        `,
		[parentCommentID]
	);

	for (let parentCommentReply of parentCommentRepliesArrayData.rows) {
		const {
			id,
			parent_comment_id,
			replied_comment_owner_id,
			user_id,
			post_id,
		} = parentCommentReply;

		const commentOwnerData = await pool.queryToDatabase(
			`
            SELECT 
            id AS user_id,  
            avatar_url,
            username
            FROM users
            WHERE id=$1;
            `,
			[user_id]
		);

		const repliedCommentOwnerUsernameData = await pool.queryToDatabase(
			`
            SELECT
            username
            FROM users
            WHERE id=$1
            `,
			[replied_comment_owner_id]
		);

		const postCommentChildNodesArrayData = await pool.queryToDatabase(
			`
	        SELECT
	        node_type,
	        node_value
	        FROM comment_contents
	        WHERE comment_id=$1;
	        `,
			[id]
		);

		parentCommentRepliesArray.push({
			...commentOwnerData.rows[0],
			post_id,
			comment_id: id,
			parent_comment_id,
			replied_comment_owner_username: repliedCommentOwnerUsernameData.rows[0]
				? repliedCommentOwnerUsernameData.rows[0]
				: null,
			post_comment_child_nodes_array: postCommentChildNodesArrayData.rows,
		});
	}

	res.send(parentCommentRepliesArray);
});

module.exports = commentRouter;
