import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.img``;

function CharacterImage({ backImg, nextImgAlt }) {
	return (
		<CharacterStyled
			id="back-btn"
			className="small-img"
			src={backImg}
			alt={nextImgAlt}
		></CharacterStyled>
	);
}
export default CharacterImage;
