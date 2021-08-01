import * as React from "react";

import { calculateTotalCharacters } from "../../../utils/text-area/calculateTotalCharacters";
import { limitTextAreaCharacters } from "../../../utils/text-area/limitTextAreaCharacters";

import { TextAreaStyle } from "./TextAreaStyle";

const TextArea = ({ textAreaNodesArray, charactersLimit }) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleExpandSpanOnClick = () => {
		setIsExpanded((prevState) => !prevState);
	};

	const totalTextAreaCharacters = calculateTotalCharacters(textAreaNodesArray);

	const nodesArray =
		!charactersLimit || isExpanded
			? textAreaNodesArray
			: limitTextAreaCharacters(
					textAreaNodesArray,
					charactersLimit,
					totalTextAreaCharacters
			  );

	return (
		<TextAreaStyle>
			<React.Fragment>
				{nodesArray.map((node, idx) => {
					if (
						node.nodeType === "BR" ||
						node.node_type === "BR" ||
						node.nodeType === "br" ||
						node.node_type === "br"
					) {
						return (
							<div key={`${node.nodeType || node.node_type}__${idx}`}>
								<br />
							</div>
						);
					} else {
						return (
							<p key={`${node.nodeType || node.node_type}__${idx}`}>
								{node.nodeValue || node.node_value}
							</p>
						);
					}
				})}
			</React.Fragment>

			{totalTextAreaCharacters > charactersLimit && (
				<span onClick={handleExpandSpanOnClick}>
					{isExpanded ? "...less" : "...more"}
				</span>
			)}
		</TextAreaStyle>
	);
};

export default TextArea;
