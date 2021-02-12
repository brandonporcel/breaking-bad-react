import React from 'react';
import styled from 'styled-components';
import img from '../img';
import Social from './social';
import Logo from './logo';
import GridPage from './grid-page';
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
`;

function Layout({ name, description, image, next, back }) {
	return (
		<CharacterStyled>
			<header className="header">
				<Logo img={img.logo}></Logo>
				<GridPage img={img.grid}></GridPage>
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
