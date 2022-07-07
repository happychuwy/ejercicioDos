async function consultaAPI(pokemonID)
{
    fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonID)
        .then(response => response.json())
        .then(data => {return data});
}