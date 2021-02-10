import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.h2`
	font-weight: 900;
	font-size: 34px;
	white-space: nowrap;
`;

function CharacterName({ name }) {
	return <CharacterStyled>{name}</CharacterStyled>;
}
export default CharacterName;
