const getMedia = {
    url: 'https://graph.instagram.com/me/media?fields=caption,media_url,media_type,permalink,timestamp,username&access_token=IGQVJXeGZAFbEx0bmYzYXM3bXZAMMHd3dVc4by1mNEwwVndNUWhpcGxZARWlHeHBKRlIycEtZAM05jSVZADZAllQcUJGVEVfR2VidWJKeHhyLXhJTm5aR0hZAUDdQTWEwQ2N5dFhkTWJkQkFQNWx1eUgzb2xEWAZDZD',
    async init () {
        //console.log('getMedia -> Init')
        return await this.getImages()
    },
    async getImages () {
        //console.log('getMedia -> getImages')
        if (!(JSON.parse(window.localStorage.getItem('ameiImgs'))) || getMedia.contarTempo()) {
            await getMedia.filterMedia()
        }
        return JSON.parse(window.localStorage.getItem('ameiImgs'))
        //localStorage.setItem('ameiImgs', "'1.jpg', '2.jpg', '3.jpg'")

        //return (['1.jpg', '2.jpg', '3.jpg'])
    },
    async getExternalMedia () {
        //console.log('getMedia -> getExternalMedia')
        const response = await axios.get(getMedia.url);
        return response.data
    },
    contarTempo (tempoLimite = 10) {
        //console.log('getMedia -> contarTempo')
        const tempo = new Date(window.localStorage.getItem('ameiTempo'))
        const atual = new (Date);
        var diferenca = atual - tempo
        var _segundo = 1000;
        var _minuto = _segundo * 60;
        var _hora = _minuto * 60;
        var _dia = _hora * 24;
        var dias = Math.floor(diferenca / _dia);
        var horas = Math.floor((diferenca % _dia) / _hora);
        //var minutos = Math.floor((diferenca % _hora) / _minuto);
        //var segundos = Math.floor((diferenca % _minuto) / _segundo);
        return (horas >= tempoLimite) ? true : false
    },
    async filterMedia () {
        //console.log('getMedia -> filterMedia')
        const arrayData = []
        //retorna a primeira requisição ao servidor
        var data = await getMedia.getExternalMedia(getMedia.url)
        var temUrl = data.paging.next

        //colocando resultado no array
        arrayData.push(data)

        //enquanto tiver elementos vindo do serviror
        /*do {
            if (temUrl !== undefined) {
                data = await getMedia.getExternalMedia(temUrl)
                if(temUrl !== data.paging.next){
                    temUrl = data.paging.next
                }
                arrayData.push(data)
            }
        } while (temUrl != undefined)*/

        //console.log('Fui no Servidor!')

        //arrays portipo
        const imgs = []
        const videos = []

        //rodando todos os elementos do arrays e separando por tipo
        for (var i = 0; i < arrayData.length; i++) {
            for (var j = 0; j < arrayData[i].data.length; j++) {
                if (arrayData[i].data[j].media_type == "IMAGE") {
                    imgs.push(arrayData[i].data[j].media_url)
                }
                if (arrayData[i].data[j].media_type == "VIDEO") {
                    videos.push(arrayData[i].data[j].media_url)
                }
            }
        }

        window.localStorage.setItem('ameiTempo', new (Date))
        window.localStorage.setItem('ameiImgs', JSON.stringify(imgs))
        window.localStorage.setItem('ameiVideos', JSON.stringify(videos))

        return { imgs, videos }
    }

}

export { getMedia }