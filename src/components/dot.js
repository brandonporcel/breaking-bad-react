import React from 'react';
import styled from 'styled-components';

const DotStyled = styled.span`
	width: 10px;
	height: 10px;
	background: black;
	border-radius: 50%;
	display: inline-flex;
`;

function Dot() {
	return <DotStyled />;
}

export default Dot;
