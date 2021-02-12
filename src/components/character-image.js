import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.div`
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
	.character-image {
		border-radius: 50%;
		height: inherit;
		width: inherit;
		position: absolute;
		object-fit: cover;
		object-position: 50% 0;
	}
	@media screen and (max-width: 900px) {
		order: 0;
		&::after {
			display: none;
		}
	}
`;

function CharacterImage({ image, name }) {
	return (
		<CharacterStyled>
			<img className="character-image" src={image} alt={name}></img>
		</CharacterStyled>
	);
}
export default CharacterImage;
