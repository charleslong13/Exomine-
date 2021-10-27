import { getFacilityMinerals, getMinerals, getTransientState, setFacility } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "facilityDropdown") {
            //adds the selected facility to the transient state and re-renders HTML
            setFacility(parseInt(event.target.value))
        }            
    }
)

export const FacilityMinerals = () => {
    const facilityMinerals = getFacilityMinerals()
    const transientState = getTransientState()
    const minerals = getMinerals()

    // if the facility has not yet been selected, then the list should be blank
    if (!transientState.selectedFacility) {
        return ""
    } else {
        //if the facility has been selected, and the facility id in the transient state...
        let html = "<ul>"
        //iterate facilityMinerals array to access each object
        for (const facilityMineral of facilityMinerals) {
            //if the facilityId is the same as the value of the selected option (the facility id) then...
            if (facilityMineral.facilityId === transientState.selectedFacility) {
                //find the mineral where the id matched the mineralid on the facilitymineral object, in order to grab the name from the correct mineral object
                const foundMineral = minerals.find(mineral => mineral.id === facilityMineral.mineralId)
                //add html list items
                html += `<li>${facilityMineral.quantity} ${foundMineral.name}</li>`
            }
        }

        html += "</ul>"

        return html
    }
}
