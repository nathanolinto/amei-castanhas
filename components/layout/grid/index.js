import Image from 'next/image'
function Index({itens}){
    

    //Separa os itens em linhas e colunas
    const separadosItensArray = function(array, row, col){
        var retorno = []
        var temp = []
        
        for(var i=0; i<(row*col); i+=row){
            for(var j = i; j < i+row; j++){
                temp.push(array[j])
            }
            retorno.push(temp)
            temp=[]
        }    
        return retorno
    }
    const arryaItensSeparados = separadosItensArray(itens, 3, 5)

    const gerarMedia = function(item){
        if(item.media_type == 'IMAGE'){
            return(
                <Image
                    src={item.media_url}
                    alt={item.caption}
                    width={160}
                    height={200}
                />
            )
        }
        if(item.media_type == 'VIDEO'){
            return(
                <video height="100%" autoPlay muted loop>
                    <source
                    src={item.media_url}
                    type="video/mp4" />
                </video>
            )
        }
    }

    
    return(
        <div className="grid-container">
            <div className="grid">
                    {arryaItensSeparados.map((column)=>(
                        <div key={column[0].id} className="column">
                            {column.map((item)=>(
                                <div key={item.id} className="item">
                                    {gerarMedia(item)}
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Index;