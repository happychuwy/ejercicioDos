const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

try 
{
    fetch(baseUrl+"?limit=10&offset=30")
        .then(response => 
        {
            const responseJson = response.json()
            return responseJson
        })
        .then(data => {
            const pokemons = data.results
            pokemons.forEach(pokemon => {
            document.getElementById('pokemones').insertAdjacentHTML('beforeend', `<div class='divPokemon' onclick='detallesPokemon("${pokemon.url}")'>${pokemon.name}</div>`)
            })
        })
        .catch(error => {
            console.error(error)
        })
} catch (error) {
    console.error(error)
}

detallesPokemon = (url) => {
    try {
      fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            //console.log(pokemon);
            document.getElementById('detallesPokemon').innerHTML = ''
            document.getElementById('detallesPokemon').insertAdjacentHTML('beforeend', 
              `
                <h1>${pokemon.name}</h1>
                <img src="${pokemon.sprites.front_default}" />
                <div><b>Altura</b>: ${((pokemon.height)/10).toFixed(2)} m</div>
                <div><b>Peso</b>: ${((pokemon.weight)/10).toFixed(2)} kg</div>
              `
            )
            pokemon.stats.forEach(function(stat)
            {
                document.getElementById('detallesPokemon').insertAdjacentHTML('beforeend', 
                `
                    <div><b>${stat.stat.name}</b>: ${stat.base_stat}</div>
                `
                )
            })
        })
        .catch(error => {
          console.error(error)
        })
    } catch (error) {
      console.error(error)
    }
}