const itens = document.querySelectorAll('.item');
for(const item of itens){
    item.addEventListener('click', function(event){        
        item.classList.toggle('heart')
    })
}

const headings = document.querySelectorAll('.heading .wrapper .text')

function enterScreen(index) {
    const heading = headings[index]
    heading.classList.remove('animate-before', 'animate-after')
}
function exitScreen(index, exitDelay) {
    const heading = headings[index]

    heading.classList.add('animate-after')
}

function setupAnimationCycle({ timePerScreen, exitDelay }) {
    const cycleTime = timePerScreen + exitDelay
    let nextIndex = 0

    function nextCycle() {
        const currentIndex = nextIndex

        enterScreen(currentIndex)

        setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen)

        nextIndex = nextIndex >= headings.length - 1 ? 0 : nextIndex + 1
    }

    nextCycle()

    setInterval(nextCycle, cycleTime)
}

setupAnimationCycle({
    timePerScreen: 3000, // ms
    exitDelay: 300 * 3 // ms
})







  //tokens insta
  //const instaToken = "IGQVJYOFdTc2JvNjkxdnVEX2c4bVBzWTRNR0NzeDJMbzRwN2JsN2hPdzhlWm0tenJkRUU2Qlc5NEZAVVXBRU1hkZAmkxZA2hVTTRfZAjZAFRWNrOVZALQkh0LVJxQ21YVjM2ZAF9ERnZAXbVJrSHJTdHprOTZAPTQZDZD"
  // insta app id
  //const instaAppId = "293952232090382"
  //const redirectUri = "http://localhost:5000"
  //url exempla
  //const instaUrl = `https://api.instagram.com/oauth/authorize?client_id=${instaAppId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`


  