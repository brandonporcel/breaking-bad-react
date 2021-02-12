import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.h1`
	color: rgba(0, 0, 0, 0.1);
	font-size: 600px;
	text-transform: uppercase;
	justify-content: center;
	display: flex;
	align-items: center;
	z-index: 11;
	white-space: nowrap;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	user-select: none;
	margin: 0;
`;

function CharacterPlaceholder({ name }) {
	return <CharacterStyled>{name}</CharacterStyled>;
}
export default CharacterPlaceholder;
