import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
		word-break: keep-all;
	}

	.hidden {
		position: absolute;
		top: -999999px;
		overflow: hidden;
	}

	body {
		background-color: #f5f5f7;
		font-family: 'NotoSansKR', 'Malgun Gothic', Arial, sans-serif;
		white-space: nowrap;
		color: #1d1d1f;
		position: relative;
	}

	a {
		text-decoration: none;
		color: #1d1d1f;
	}

	/* IE의 경우 */
	input::-ms-clear,
	input::-ms-reveal{
		display:none;
	}
	
	/* 크롬의 경우 */
	input::-webkit-search-decoration,
	input::-webkit-search-cancel-button,
	input::-webkit-search-results-button,
	input::-webkit-search-results-decoration{
		display:none;
	}

	button {
		cursor: pointer;
		border: none;
		outline: none;
		background: transparent;
	}

	ul, ol, li {
		list-style: none;
	}

	table, tbody, thead, tr, td, th {
		border-collapse: separate;
		border-spacing: 0px;
	}
`;

export default GlobalStyle;
