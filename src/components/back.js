import React, { useContext } from 'react';
import styled from 'styled-components';
import CharacterContext from './character-context';

import NProgress from 'nprogress';
import api from './api';
const CharacterStyled = styled.img``;

function CharacterImage({ backImg, nextImgAlt }) {
	const context = useContext(CharacterContext);
	const nothing = () => {};
	async function handleClick() {
		NProgress.start();
		let currentCharacter = context.character.char_id - 1;
		// el nothing() It's because of Nprogress, which doesn't stop loading
		context.character.char_id <= 1 ? (currentCharacter = 57) : nothing();
		const characterSelection = await api.getCharacter(currentCharacter);
		const characterInfo = characterSelection[0];
		context.setCharacter(characterInfo);
		NProgress.done();
	}
	return (
		<CharacterStyled
			id="back-btn"
			className="small-img"
			src={backImg}
			alt={nextImgAlt}
			onClick={handleClick}
		></CharacterStyled>
	);
}
export default CharacterImage;
