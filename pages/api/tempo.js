import data from '../../public/imgsMotivacionais.json'

async function tempo(request, response){
    //const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();
    

    /*const pokemonResponse = await fetch('/imgsMotivacionais.json');    
    const pokemonResponseJson = await pokemonResponse.json();
    console.log(pokemonResponseJson)*/

    
    //response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidade' );

    response.json({
        date: dynamicDate.toGMTString(),
        pokemon: data
    })
}

export default tempo;