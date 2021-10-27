import { Exomine } from "./Exomine.js";

const mainContainer = document.querySelector(".container")

//function to render our html 

const renderHTML = () => {
    mainContainer.innerHTML = Exomine()
}
renderHTML()


//statechange event listener to listen for change event and rerender html

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderHTML()
})