import { getFacilityMinerals, getMinerals } from "./database.js"

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "facilityDropdown") {
            //render HTML when facility dropdown is clicked
            document.dispatchEvent( new CustomEvent("stateChanged") )
        }            
    }
)

export const FacilityMinerals = () => {
    const facilityMinerals = getFacilityMinerals()
    const minerals = getMinerals()
    const userSelection = document.getElementById("facilityDropdown");

    //if the facility dropdown has not yet been created (Facility() has not been run), then the list should be blank
    if (userSelection === null) {
        return ""
    } else {
        //if the facility dropdown has been rendered, grab the value of the currently selected option
        const currentOptionValue = parseInt(userSelection.options[userSelection.selectedIndex].value)

        let html = "<ul>"
        //iterate facilityMinerals array to access each object
        for (const facilityMineral of facilityMinerals) {
            //if the facilityId is the same as the value of the selected option (the facility.id) then...
            if (facilityMineral.facilityId === currentOptionValue) {
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

// const findFacilityMinerals = () => {
//     for (facilityMineral of facilityMinerals) {
//         if (facilityMineral.id === objId) {
//             const foundMineral = minerals.find(mineral => mineral.id === facilityMineral.mineralId)
//             html += minerals.map(mineral =>`${facilityMineral.quantity} ${foundMineral.name}`).join("")
//         }
//     }
// }