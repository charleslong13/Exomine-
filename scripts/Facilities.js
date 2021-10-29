import { getFacilities, getTransientState, setFacility } from './database.js'

const facilities = getFacilities()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === 'facilityDropdown') {
            //add facility id to transient state and re-render HTML
            setFacility(parseInt(event.target.value))
        }
    }
)

// function to render the facility dropdown box
export const Facility = () => {
    const transientState = getTransientState()
    let html = ""

    if (transientState.colonyId) {
        html += "<select id='facilityDropdown'>"
    } else {
        html += "<select id ='facilityDropdown' disabled>"
    }

    html += '<option name="facility" value="0">Select a Facility</option>'

    const arrayOfFacilities = facilities.map((facility) => {
        if (facility.active === true) {
            //retain selection on re-render
            if (transientState.selectedFacility === facility.id) {
                return `<option value="${facility.id}" selected>${facility.name}</option>`
            } else {
                return `<option value="${facility.id}">${facility.name}</option>`
            }
        }
    })


    html += arrayOfFacilities.join("")
    html += "</select>"
    return html

}