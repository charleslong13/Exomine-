import { getGovernors, getTransientState, setColony, setGovernor } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governorDropDown") {
            const governors = getGovernors()
            const governorId = (parseInt(event.target.value))
            const foundGovernor = governors.find(governor => governor.id === governorId)
            if (!foundGovernor) {
                return
            } else {
                setColony(foundGovernor.colonyId)
                setGovernor(governorId)
            }

        }
    }
)

//defined a function that creates a governor dropdown menu 

export const Governors = () => {
    const transientState = getTransientState()
    const governors = getGovernors()

    let html = ""
    html += '<select name="governors" id="governorDropDown">'
    html += '<option value="0">Select a Governor</option>'
    //assigning selection options for the dropdown menu 
    const arrayOfGovernors = governors.map((governor) => {
        if (governor.active === true) {
            //retain selection on re-render
            if (transientState.selectedGovernor === governor.id) {
                return `<option value="${governor.id}" selected>${governor.name}</option>`
            } else {
                return `<option value="${governor.id}">${governor.name}</option>`
            }
        }
    }
    )
    html += arrayOfGovernors.join("")
    html += "</select>"
    return html
}

