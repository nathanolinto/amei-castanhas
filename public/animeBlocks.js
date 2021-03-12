const animeBlocks = {
    cloud: document.querySelector('.cloud'),
    init(itens) {
        //console.log('animeBlocks - init')
        animeBlocks.create(itens)
        animeBlocks.animate()
    },
    create(itens) {
        //console.log('animeBlocks - create')
        const imgs = animeBlocks.shuffle(itens)
        for (var i = 0; i < imgs.length; i++) { //imgs.length
            const blocks = document.createElement('div')
            blocks.classList.add('block')
            const img = document.createElement('img')
            img.src = imgs[i]
            blocks.appendChild(img)
            animeBlocks.cloud.appendChild(blocks)
        }
    },
    shuffle(array){
        //console.log('animeBlocks - shuffle')
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    },
    animate(){
        //console.log('animeBlocks - animate')
        anime({
            targets: '.block',
            translateX: function () {
                return anime.random(-700, 700)
            },
            translateY: function () {
                return anime.random(-500, 500)
            },
            scale: function () {
                return anime.random(1, 5)
            },
            easing: 'linear',
            duration: 3000,
            delay: anime.stagger(80),
            complete: animeBlocks.animate
        })
    }
  }
  
export { animeBlocks }