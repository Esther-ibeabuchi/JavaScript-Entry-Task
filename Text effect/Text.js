const containerEl = document.querySelector(".container")


const careers = ["Youtuber", "Web Developer", "Freelancer", "Instructor"]

let careerIndex = 0
let character = 0

const updateText = () => {
    character++

    containerEl.innerHTML = `<h1>I am 
    ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, character)}</h1>`
    
    if(character === careers[careerIndex].length) {
        careerIndex++
        character = 0
    }

    if (careerIndex === careers.length) {
        careerIndex = 0
    }
    setTimeout(updateText, 400)
}

updateText()


