import * as React from "react";

import {
	calculateTotalCharacters,
	limitTextAreaCharacters,
} from "../../../utils";

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
			{nodesArray.map((node, idx) => {
				return (
					<p key={`${node.nodeType || node.node_type}__${idx}`}>
						{node.nodeType === "BR" || node.node_type === "BR" ? (
							<br />
						) : (
							node.nodeValue || node.node_value
						)}

						{totalTextAreaCharacters > charactersLimit &&
						idx === nodesArray.length - 1 ? (
							<span onClick={handleExpandSpanOnClick}>
								{isExpanded ? "...less" : "...more"}
							</span>
						) : null}
					</p>
				);
			})}
		</TextAreaStyle>
	);
};

export default TextArea;
