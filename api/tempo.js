async function tempo(request, response){
    //const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const pokemonResponse = awai fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    const pokemonResponseJson = await pokemonResponse.json();
    const pokemon = pokemonResponseJson.name;
    
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidade' )

    response.json({
        date: dynamicDate.toGMTString(),
        pokemon: pokemon
    })
}

export default tempo;