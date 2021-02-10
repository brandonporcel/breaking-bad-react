import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import API from './api';
const api = new API();
const CharacterStyled = styled.div``;
function Character() {
	// en useState() recibe el valor por defecto =>ejem  useState(false),useState({}),useState('aaa)
	// en el array, el 1er parametro es un valor,el 2do,un metodo
	// en el valor(1) va lo que va lo que vale el estado en el momento
	// el 2do es una funcion para cambiar ese valor. por lo general se pone `set${elNombreDelValor}` =>ej   [checked,setChecked]
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

	return <CharacterStyled> {character.name} </CharacterStyled>;
}
export default Character;
