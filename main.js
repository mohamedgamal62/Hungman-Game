let letters = "abcdefghijklmnopqrstuvwxyz"; 
let lettersArr = Array.from(letters)
let lettersContainer = document.querySelector(".letters")

let catogryname = document.querySelector(".catogry span")
let letterGuess = document.querySelector(".letter-guess")


lettersArr.forEach (letter => {
    let span = document.createElement("span")
    span.appendChild(document.createTextNode(letter))
    span.className = "letter-box"
    lettersContainer.appendChild(span)
})

const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let keys = Object.keys(words)
let random = Math.floor(Math.random() * keys.length)
let randomkey = keys[random]
let randomkeyvalue = words[randomkey]
let randomvalue = Math.floor(Math.random() * randomkeyvalue.length)
let value = randomkeyvalue[randomvalue]
catogryname.innerHTML = randomkey

let valueArr = Array.from(value)

valueArr.forEach(letter => {
    let spans = document.createElement("span")
    if (letter === " "){
        spans.className = "space"
    }
    letterGuess.append(spans)
})

let guessSpans  = document.querySelectorAll(".letter-guess span")
let wrongnum = 0
let corect = 0
let draw = document.querySelector(".draw")
let start = document.querySelector(".start")
let good = document.querySelector(".good")
let bad = document.querySelector(".bad")




document.addEventListener("click" , (el) => {
    let state =false
    if (el.target.className === "letter-box" ){
        el.target.classList.add("clicked")
        let word = el.target.innerHTML.toLowerCase()
        let chosenletter = Array.from(value.toLowerCase());
        chosenletter.forEach((wordLetter , wordIndex) => {
            if (word === wordLetter) {
                state =true
                guessSpans.forEach((span , spanindex) => {
                    if (wordIndex === spanindex) {
                        span.innerHTML = word
                    }
                })
            }
        })
    if (state === false) {
        wrongnum++
        bad.play()
        draw.classList.add(`worng-${wrongnum}`)
        if (wrongnum === 8) {
            endgame()
            lettersContainer.classList.add("finish")
        }
    }else {
        good.play()
        corect++ 
        if (corect === value.length ){
            win()
        }
    }
    
    }
})



function endgame () {
    let div = document.createElement("div")
    div.appendChild(document.createTextNode(`Game Over , The Word Is ${value}`))
    div.className = "rere"
    document.body.appendChild(div)
}


function win () {
    let win = document.createElement("div")
    win.appendChild(document.createTextNode(`Your are Winner , You have ${wrongnum} Wrong`))
    win.className = "coco"
    document.body.appendChild(win)
}

console.log(value)
console.log(value.length)
console.log(corect)