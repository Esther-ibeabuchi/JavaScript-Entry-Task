const containerEl = document.querySelector(".container")
const popupEl = document.querySelector(".popup")
const btnEl = document.querySelector(".btn")
const closeEl = document.querySelector(".close")

btnEl.addEventListener("click", ()=> {
    containerEl.classList.add("active")
    popupEl.classList.remove("active")
})
closeEl.addEventListener("click", ()=> {
    containerEl.classList.remove("active")
    popupEl.classList.add("active")

})

