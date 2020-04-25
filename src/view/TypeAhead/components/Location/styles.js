import styled from "styled-components";
export const Container = styled.div`
	position: relative;
`;
export const Input = styled.input`
	display         : block;
	border          : none;
	background-color: transparent;
	border-bottom   : 1px solid blue;

	&:focus {
		outline: none;
	}
`;
export const Options = styled.div`
	background-color: #fff;
	position: absolute;
	z-index: 100;
	max-height: 200px;
	overflow: scroll;
	width: 220px;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	margin-top: -5px;
	z-index: 2;
`;
export const Option = styled.div`
	padding: 10px;
	cursor: pointer;
	&:hover {
		background-color: #1e82f6;
		color: #fff;
	}
`;
