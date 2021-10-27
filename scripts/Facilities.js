import { getFacilities,getTransientState,setFacility } from './database.js'

const facilities = getFacilities()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === 'facilityDropdown') {
            setFacility(parseInt(event.target.value))
        }
    }
)

const disableDropbox = () => {
    const state = getTransientState()
    const facilityElement = document.getElementById("facilityDropdown")
    if (state.governorId !== "0") {
        return facilityElement.removeAttribute("disabled", "")
    } 
}

// function to render the facility dropdown box
export const Facility = () => {
    // disableDropbox()
    const transientState = getTransientState()

    let html = "<select id='facilityDropdown'>"
    
    html += '<option name="facility" value="0">Select a Facility</option>'
    
    const arrayOfFacilities = facilities.map((facility) => {
        //retain selection on re-render
        if(transientState.selectedFacility === facility.id){
            return `<option value="${facility.id}" selected>${facility.name}</option>`
        } else {
            return `<option value="${facility.id}">${facility.name}</option>`
        }
    }
    )
    
    html += arrayOfFacilities.join("")
    html += "</select>"
    return html
}
// use transient state to render.