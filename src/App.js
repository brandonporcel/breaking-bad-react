import React, { useEffect, useState } from 'react';
import './App.css';
import './nprogress.css';
// import Character from './components/character';
import CharacterName from './components/character-name';
import CharacterImage from './components/character-image';
import CharacterDescription from './components/character-description';
import CharacterPlaceholder from './components/character-placeholder';
import Next from './components/next';
import Back from './components/back';
import api from './components/api';
import Layout from './components/layout';
import img from './img';
import CharacterContext from './components/character-context';

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
		<CharacterContext.Provider
			value={{
				character,
				setCharacter,
			}}
		>
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
			<Layout
				next={<Next nextImg={img.rightArrow} nextImgAlt="next arrow" />}
				back={<Back backImg={img.leftArrow} backImgAlt="back arrow" />}
				name={<CharacterName name={character.name} />}
				description={
					<CharacterDescription
						portrayed={character.portrayed}
						occupation={character.occupation}
						status={character.status}
					/>
				}
				image={<CharacterImage image={character.img} />}
			/>
		</CharacterContext.Provider>
	);
}

export default App;
