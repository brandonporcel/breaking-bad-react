import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.img`
	height: 200px;
	width: 200px;
	position: relative;

	&::after {
		content: '';
		display: block;
		height: 15px;
		border-radius: 50%;
		width: 250px;
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		bottom: -20px;
		left: -25px;
	}
`;

function CharacterImage({ image, name }) {
	return (
		<CharacterStyled
			className="character-image"
			src={image}
			alt={name}
		></CharacterStyled>
	);
}
export default CharacterImage;
