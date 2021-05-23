import * as React from "react";

import { MessageStyle } from "./MessageStyle";

const Message = ({ successMessage, errorMessage, messageWidth }) => {
	return successMessage || errorMessage ? (
		<MessageStyle
			success={successMessage}
			error={errorMessage}
			messageWidth={messageWidth}
		>
			{successMessage || errorMessage}
		</MessageStyle>
	) : null;
};

export default Message;
