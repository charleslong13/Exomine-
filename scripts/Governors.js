import { getGovernors } from "./database.js"

const governors = getGovernors()

//defined a function that creates a governor dropdown menu 

export const Governors = () => {
    let html = ""
    html += '<select name="governors" id="governorDropDown">'
    html += '<option value="0">Select a Governor</option>'
    //assigning selection options for the dropdown menu 
    const arrayOfGovernors = governors.map((governor) => {
        return `<option value="${governor.id}">${governor.name}</option>`
    }
    )
    html += arrayOfGovernors.join("")
    html += "</select>"
    return html
}
