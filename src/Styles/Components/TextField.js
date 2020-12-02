import styled from 'styled-components';

export const TextField = styled.form`
	width: 80%;
	height: 65px;
	margin: 20px auto;
	position: relative;
	/* overflow: hidden; */
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;
	color: #fff;
	padding-top: 10px;
	border: none;
	outline: none;
	background: transparent;
	&:focus + .input-label .input-content,
	&:valid + .input-label .input-content {
		transform: translateY(-100%);
		font-size: 14px;
		color: white;
	}

	&:focus + .input-label:after,
	&:valid + .input-label:after {
		transform: translateX(0%);
	}
`;
export const Select = styled.select`
	width: 100%;
	height: 100%;
	color: #fff;
	padding-top: 10px;
	border: none;
	outline: none;
	background: transparent;
	&:focus + .input-label .input-content,
	&:valid + .input-label .input-content {
		transform: translateY(-100%);
		font-size: 14px;
		color: white;
	}

	&:focus + .input-label:after,
	&:valid + .input-label:after {
		transform: translateX(0%);
	}
`;

export const Label = styled.label`
	position: absolute;
	bottom: 8px;
	left: 0%;
	width: 100%;
	height: 100%;
	background: transparent;
	pointer-events: none;
	border-bottom: 1px solid grey;
	overflow: hidden;
	&::after {
		content: '';
		position: absolute;
		left: 0px;
		bottom: -1px;
		height: 100%;
		width: 100%;
		border-bottom: 2px solid #fff;
		transform: translateX(-100%);
		transition: transform 0.3s ease;
	}
`;

export const Span = styled.span`
	position: absolute;
	bottom: 5px;
	left: 0px;
	transition: all 0.3s ease;
`;

export const ErrorMessage =styled.div`
	width: 100%;
    opacity: .8;
    font-size: 10px;
	font-weight: bold;
	position: absolute;
	top:50px;
	left:0;
`;