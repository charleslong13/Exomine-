import { getGovernors, getTransientState, setGovernor } from "./database.js"

const governors = getGovernors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governorDropDown") {
            setGovernor(parseInt(event.target.value))
        }
    }
)

//defined a function that creates a governor dropdown menu 

export const Governors = () => {
    const transientState = getTransientState()

    let html = ""
    html += '<select name="governors" id="governorDropDown">'
    html += '<option value="0">Select a Governor</option>'
    //assigning selection options for the dropdown menu 
    const arrayOfGovernors = governors.map((governor) => {
         //retain selection on re-render
        if(transientState.selectedGovernor === governor.id){
            return `<option value="${governor.id}" selected>${governor.name}</option>`
        } else {
            return `<option value="${governor.id}">${governor.name}</option>`
        }
    }
    )
    html += arrayOfGovernors.join("")
    html += "</select>"
    return html
}

