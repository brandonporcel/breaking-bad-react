import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.footer`
	text-align: center;
	.margin {
		margin: 5px;
	}
`;

function Social({ github, instagram }) {
	return (
		<CharacterStyled className="footer">
			<a
				href="https://github.com/brandonporcel"
				target="_blank"
				rel="noreferrer"
			>
				<img className="small-img margin" src={github} alt="" />
			</a>
			<a
				href="https://instagram.com/brandonporcel"
				target="_blank"
				rel="noreferrer"
			>
				<img className="small-img margin" src={instagram} alt="" />
			</a>
		</CharacterStyled>
	);
}
export default Social;
