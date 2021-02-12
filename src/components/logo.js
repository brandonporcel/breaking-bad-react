import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.img`
	width: 150px;
	margin: 0 auto;
	display: block;
`;

function Logo({ img }) {
	return <CharacterStyled src={img} alt="breaking bad logo" />;
}
export default Logo;
