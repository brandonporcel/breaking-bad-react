class API {
	async getCharacter(characterId) {
		const URL = 'https://breakingbadapi.com/api/characters';
		const respuesta = await fetch(`${URL}/${characterId}`);
		const answerJson = await respuesta.json();
		return answerJson;
	}
}
export default API;
