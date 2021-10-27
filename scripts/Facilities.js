import {getFacilities} from './database.js'

const facilities = getFacilities()




//function to disable the dropdown box untill a govorner is selected
// const disableFacility =



// function to render the facility dropdown box
export const Facility = () => {
    // disableFacility()
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