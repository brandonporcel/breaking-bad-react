import React, { useContext } from 'react';
import styled from 'styled-components';
import CharacterContext from './character-context';

import api from './api';
import NProgress from 'nprogress';
const CharacterStyled = styled.img``;

function Next({ nextImg, nextImgAlt }) {
	const context = useContext(CharacterContext);
	const nothing = () => {};
	async function handleClick() {
		NProgress.start();
		let currentCharacter = context.character.char_id + 1;
		// el nothing() It's because of Nprogress, which doesn't stop loading

		context.character.char_id >= 57 ? (currentCharacter = 1) : nothing();
		const characterSelection = await api.getCharacter(currentCharacter);

		const characterInfo = characterSelection[0];
		context.setCharacter(characterInfo);
		NProgress.done();
	}
	return (
		<CharacterStyled
			onClick={handleClick}
			id="next-btn"
			className="small-img"
			src={nextImg}
			alt={nextImgAlt}
		></CharacterStyled>
	);
}
export default Next;
