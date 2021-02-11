import React from 'react';
import styled from 'styled-components';
import img from '../img';
const CharacterStyled = styled.div``;

function Layout({ name, description, image, next, back }) {
	return (
		<CharacterStyled>
			<div className="container">
				<header className="header">
					<img className="header-logo" src={img.logo} alt="breaking bad logo" />
					<a href="pages/grid.html">
						<img className="small-img" src={img.grid} alt="" />
					</a>
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
				<footer className="footer">
					<a
						href="https://github.com/brandonporcel"
						target="_blank"
						rel="noreferrer"
					>
						<img className="small-img" src={img.github} alt="" />
					</a>
					<a
						href="https://instagram.com/brandonporcel"
						target="_blank"
						rel="noopener"
					>
						<img className="small-img" src={img.instagram} alt="" />
					</a>
				</footer>
			</div>
		</CharacterStyled>
	);
}
export default Layout;
