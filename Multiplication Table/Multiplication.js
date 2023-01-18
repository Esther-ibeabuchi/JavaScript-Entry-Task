const formEl = document.getElementById("form")
const scoreEl = document.getElementById("score")
const headerEl = document.getElementById("head")
const inputEl = document.getElementById("input")

// change the header to have a random number

// let num1 = Math.ceil(Math.random() * 10)
// let num2 = Math.ceil(Math.random() * 10)

// //initialize the correct number
// headerEl.innerText = `what is ${num1} multiplied by ${num2}?`
// correctAns = num1 * num2

// //update your score sheet

// let score = JSON.parse(localStorage.getItem("score"))
// if (!score) {
//     score = 0
// }

// scoreEl.innerText = `score: ${score}`

// // add event listener

// formEl.addEventListener("submit", ()=> {
//     const userEl = +inputEl.value

//     if (userEl === correctAns) {
//         score++
//         updateLocalStorage()
//     }else {
//         score--
//         updateLocalStorage()
//     }
// })

// // store the answer in local storage

// function updateLocalStorage() {
//     localStorage.setItem("score", JSON.stringify(score))
// }


let num1 = Math.ceil(Math.random() * 10)
let num2 = Math.ceil(Math.random() * 10)

headerEl.innerText = `what is ${num1} multiplied by ${num2}?`
correctAns = num1 * num2

let score = JSON.parse(localStorage.getItem("score"))

if (!score) {
    score = 0
}
const updateLocalStorage = () => {
    localStorage.setItem("score", JSON.stringify(score))
}

formEl.addEventListener("submit", ()=> {
    const userEl = +inputEl.value

    if (correctAns === userEl) {
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }

})
