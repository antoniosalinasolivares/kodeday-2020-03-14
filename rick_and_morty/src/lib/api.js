const getAllCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/');
  const parsedJson = await response.json();
  return parsedJson.results;
}

const getSingleCharacter = async (id) => {
  const response = await fetch('https://rickandmortyapi.com/api/character/'+id);
  console.log('https://rickandmortyapi.com/api/character/'+id);
  return(await response.json().results);
}

export default {
  getAllCharacters,
  getSingleCharacter
}
