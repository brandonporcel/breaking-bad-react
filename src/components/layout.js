import React from 'react';
import styled from 'styled-components';
import img from '../img';
import Social from './social';
import Logo from './logo';

const CharacterStyled = styled.div`
	padding: 50px;
	position: relative;
	z-index: 22;
	height: 100vh;
	/* HEADER--------------------------------------------------------------- */
	.header {
		/* background-color: blue; */
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0 100px;
	}
	/* a ---------------------------------------------------------------*/
	.info-container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 50px;
	}
	.character-labels-container {
		width: 50%;
	}

	.character-name-arrows-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 70%;
	}

	@media screen and (max-width: 900px) {
		.header {
			justify-content: center;
		}
		.info-container {
			flex-direction: column;
		}
		.character-labels-container {
			order: 1;
			width: 100%;
		}
		.character-name-arrows-container {
			justify-content: center;
			width: 100%;
		}
	}
`;

function Layout({ name, description, image, next, back }) {
	return (
		<CharacterStyled>
			<header className="header">
				<Logo img={img.logo}></Logo>
			</header>
			<section className="info-container">
				<div className="character-labels-container">
					<div className="character-name-arrows-container">
						{name}
						<div className="arrows-container">
							{back}
							{next}
						</div>
					</div>
					{description}
				</div>
				<div className="character-image-container">{image}</div>
			</section>
			<Social github={img.github} instagram={img.instagram} />
		</CharacterStyled>
	);
}
export default Layout;
