import * as React from "react";
import styled from "styled-components";
import axios from "axios";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/react-quill-custom-style.css";

const CaptionStyle = styled.div`
	color: var(--primary-text-color);

	& h2 {
		margin-bottom: 1rem;
	}
`;

const Caption = () => {
	const reactQuillRef = React.useRef();

	const handleOnClick = () => {
		const reactQuillChildNodesArray = Array.from(
			reactQuillRef.current.editor.root.childNodes
		);

		const reactQuillInnerHTMLArray = reactQuillChildNodesArray.map((node) => {
			return node.innerHTML;
		});
	};

	return (
		<CaptionStyle>
			<h2>Caption</h2>

			<ReactQuill ref={reactQuillRef} />

			<button onClick={handleOnClick}>CLICK</button>
		</CaptionStyle>
	);
};

export default Caption;
