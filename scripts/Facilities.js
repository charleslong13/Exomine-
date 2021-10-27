import { getFacilities,setFacility } from './database.js'

const facilities = getFacilities()






const disableDropbox = () => {
    const governorsElement = document.getElementById("governorDropDown")
    const facilityElement = document.getElementById("facilityDropdown")
    if (governorsElement !== null) {
        facilityElement.removeAttribute("disabled")
    }
}


// function to render the facility dropdown box
export const Facility = () => {
    disableDropbox()
    let html = "<select id=“facilityDropdown” >"
    // disableDropbox()
    let html = "<select id='facilityDropdown'>"
    
    html += '<option name="facility" value="0">Select a Facility</option>'
    
    const arrayOfFacilities = facilities.map((facility) => {
        return `<option value="${facility.id}">${facility.name}</option>`
    }
    )
    
    html += arrayOfFacilities.join("")
    html += "</select>"
    return html
}
// use transient state to render.