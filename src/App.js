import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/character';
import CharacterName from './components/character-name';
import CharacterImage from './components/character-image';
import CharacterDescription from './components/character-description';
import CharacterPlaceholder from './components/character-placeholder';
import API from './components/api';

const api = new API();

function App() {
	const [character, setCharacter] = useState({});
	// efecto secundario
	// recibe 2 pareametros,una funcion y un array con elementos que determinaran cuando actualizar el useEfect
	useEffect(() => {
		// podria no usar esta funcion y poner el async en el useEfect pero es una mala practicaa
		const getCharacterInfo = async () => {
			const characterSelection = await api.getCharacter(2);
			const characterInfo = characterSelection[0];
			setCharacter(characterInfo);
		};
		getCharacterInfo();
	}, []);
	return (
		<>
			<div className="placeholder">
				<CharacterPlaceholder name={character.name}></CharacterPlaceholder>
				<div className="navigation navigation-name">
					<div className="asset top">
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="line"></span>
						<span className="navigation-text navigation-text-name">NAME</span>
					</div>
				</div>
				<div className="navigation navigation-about">
					<div className="asset top">
						<span className="navigation-text navigation-text-about">about</span>
						<span className="line"></span>
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
				</div>
			</div>
			<div className="container">
				<header className="header">
					<img className="header-logo" src="img/logo.png" alt="" />
					<a href="pages/grid.html">
						<img className="arrow-img" src="img/grid.svg" alt="" />
					</a>
				</header>
				<main>
					<section className="info-container">
						<div className="character-labels-container">
							<div className="character-name-arrows-container">
								<CharacterName name={character.name}></CharacterName>
								<div className="arrows-container">
									<img
										id="prev-btn"
										className="arrow-img"
										src="img/left-arrow.svg"
										alt=""
									/>
									<img
										id="next-btn"
										className="arrow-img"
										src="img/right-arrow.svg"
										alt=""
									/>
								</div>
							</div>
							<CharacterDescription
								portrayed={character.portrayed}
								occupation={character.occupation}
								status={character.status}
							></CharacterDescription>
						</div>
						<div className="character-image-container">
							<CharacterImage
								image={character.img}
								name={character.name}
							></CharacterImage>
						</div>
					</section>
				</main>
				<footer className="footer">
					<a
						href="https://github.com/brandonporcel"
						target="_blank"
						rel="noopener"
					>
						<img className="arrow-img" src="img/github.svg" alt="" />
					</a>
					<a
						href="https://instagram.com/brandonporcel"
						target="_blank"
						rel="noopener"
					>
						<img className="arrow-img" src="img/instagram.svg" alt="" />
					</a>
				</footer>
			</div>
		</>
	);
}

export default App;
