import styled from 'styled-components';

export const Button = styled.button`
	background-color: transparent;
	border: 1px solid white;
	color: #fff;
	transition: all 0.3s;
	font-size: 18px;
	padding: 7px 15px;
	margin: 10px;
	&:disabled{
		opacity: .65;
		cursor:not-allowed;
	}
	&:focus{
		outline:none
	}
	&:hover {
		background-color: #fff;
		color: #000;
	}
	&.userBtn {
		background-color: rgb(40, 40, 40);
		color: #fff;
		border: 1px solid #fff;
		padding: 0.25em 0.5em;
		margin:0 5px;
		transition: all 0.5s;
		font-size: 17px;
		&:hover {
			color: rgb(40, 40, 40);
			background-color: #fff;
			border: ${(props) => props.theme.borderButton};
		}
	}
`;

export const ButtonToggleTheme = styled.button`
	border: none;
	background-color: transparent;
	color: ${props => props.theme.color};
	margin:25px;
	&:focus {
		outline: none;
	}
`;
