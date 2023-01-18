const textareaEl = document.getElementById("textarea")
const totalcounterEl = document.getElementById("total-counter")
const remaincounterEl = document.getElementById("remain-counter")

//Add event listener to the text area
textareaEl.addEventListener("keyup", ()=>{
updateCounter()
})


// create a function for the characters
const updateCounter=()=> {
    totalcounterEl.innerText = textareaEl.value.length
    remaincounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length
}

updateCounter()