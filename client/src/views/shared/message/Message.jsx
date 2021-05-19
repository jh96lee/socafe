import * as React from "react";

import { MessageStyle } from "./MessageStyle";

const Message = ({ successMessage, errorMessage }) => {
	return message ? (
		<MessageStyle success={successMessage} error={errorMessage}>
			{message}
		</MessageStyle>
	) : null;
};

export default Message;
