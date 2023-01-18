const containerEl = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    const colorEl = document.createElement("div")
    colorEl.classList.add("color")
    containerEl.appendChild(colorEl)  
}


const randomNumber = () => {
    const charset = "0123456789abcdef"
    const colorLength = 6
    let colorCode = ""
    for (let index = 0; index < colorLength; index++) {
       let random = Math.floor(Math.random() * charset.length)
       colorCode += charset.substring(random, random + 1)
    }
   return colorCode
}


const colorEls = document.querySelectorAll(".color")


const generateColor = () => {
colorEls.forEach((colorEl)=>{
    const newCode = randomNumber()
    colorEl.style.backgroundColor = "#" + newCode
    colorEl.innerText = "#" + newCode
})
}

generateColor()

