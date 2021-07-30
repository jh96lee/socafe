import * as React from "react";

import { TextAreaStyle } from "./TextAreaStyle";

const TextArea = ({ textAreaNodesArray }) => {
	return (
		<TextAreaStyle>
			{textAreaNodesArray.map((node, idx) => {
				if (node.nodeType === "BR" || node.node_type === "BR") {
					return (
						<p key={`${node.nodeType || node.node_type}__${idx}`}>
							<br />
						</p>
					);
				} else {
					return (
						<p key={`${node.nodeType || node.node_type}__${idx}`}>
							{node.nodeValue || node.node_value}
						</p>
					);
				}
			})}
		</TextAreaStyle>
	);
};

export default TextArea;
