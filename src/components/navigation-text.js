import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.span`
	margin-top: 15px;
	margin-bottom: 15px;
`;

function navigationName({ item }) {
	return <CharacterStyled className="navigation-text ">{item}</CharacterStyled>;
}
export default navigationName;
