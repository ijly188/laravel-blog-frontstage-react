import React from 'react';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
// 使用react-spinners做loading效果 https://www.npmjs.com/package/react-spinners
const override = css`
	display: block;
	margin: 0 auto;
`;

const LoadingEffect = ({
	// state
	isLoading
}) => {
	return (
		<div>
			<ClipLoader loading={isLoading} css={override} size={150} />
		</div>
	);
}

export default LoadingEffect;