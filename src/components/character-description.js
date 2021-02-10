import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.div`
	.character-label {
		background: var(--partner-color);
		padding: 20px;
		color: var(--white-color);
		border-radius: 10px;
		text-align: left;
		font-size: 18px;
		font-weight: 400;
		width: 70%;
	}
	@media screen and (max-width: 900px) {
		.character-label {
			width: 100%;
		}
	}
`;

function CharacterDescription({ portrayed, occupation, status }) {
	return (
		<CharacterStyled>
			<div>
				<h3 className="character-label">Portrayed: {portrayed}</h3>
				<h3 className="character-label">Occupation: {occupation}</h3>
				<h3 className="character-label">Status: {status}</h3>
			</div>
		</CharacterStyled>
	);
}
export default CharacterDescription;
