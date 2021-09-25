import * as React from "react";

import { WrapperMessageStyle } from "./WrapperMessageStyle";

const WrapperMessage = ({ children }) => {
	return <WrapperMessageStyle>{children}</WrapperMessageStyle>;
};

export default WrapperMessage;
