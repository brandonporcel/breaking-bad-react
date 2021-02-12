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
`;

function Layout({ name, description, image, next, back }) {
	return (
		<CharacterStyled>
			<header className="header">
				<Logo img={img.logo}></Logo>
				<GridPage img={img.grid}></GridPage>
			</header>
			<main>
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
			</main>
			<Social github={img.github} instagram={img.instagram} />
		</CharacterStyled>
	);
}
export default Layout;
