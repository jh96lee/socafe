import * as React from "react";

import { TextAreaStyle } from "./TextAreaStyle";

const TextArea = ({ textAreaNodesArray }) => {
	return (
		<TextAreaStyle>
			{textAreaNodesArray.map(({ nodeType, nodeValue }, idx) => {
				if (nodeValue === "<br>") {
					return (
						<p key={`${nodeType}__${idx}`}>
							<br />
						</p>
					);
				} else {
					return <p key={`${nodeType}__${idx}`}>{nodeValue}</p>;
				}
			})}
		</TextAreaStyle>
	);
};

export default TextArea;
