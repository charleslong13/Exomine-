import { getFacilityMinerals, getMinerals, getTransientState, setMineral, getGovernors, getColonies } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.name === "mineralChoice") {
            //add mineral id to transient state and re-render HTML
            setMineral(parseInt(clickEvent.target.value))
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
                //add html list items with radio buttons, if there is a mineral chosen, mark the correct one as checked.
                if (transientState.selectedMineral=== facilityMineral.mineralId) {
                    html += `<li> <input type="radio" name="mineralChoice" value=${foundMineral.id} checked>${facilityMineral.quantity} ${foundMineral.name}</li>`
                } else {
                    html += `<li> <input type="radio" name="mineralChoice" value=${foundMineral.id}>${facilityMineral.quantity} ${foundMineral.name}</li>`
                }

            }
        }

        html += "</ul>"

        return html
    }
}

//defining export function that dynamically changes the title based on governor selection

export const facilityMineralTitle = () => {
    const foundGovernors = getGovernors()
    const tempState = getTransientState()
    const colonies = getColonies()
// if a governor has not been selected then display "Colony Minerals" 
    if (!tempState.selectedGovernor) {
        return "Facility Minerals"
    } else {
        //iterate through our copy of the governor data from our database 
        //then check if the governor's id matches the selected governor 
        for (const governor of foundGovernors) {
            if (governor.id === tempState.selectedGovernor) {
                //find the colony id that matches the governor's colonyId
                const foundColony = colonies.find(colony => colony.id === governor.colonyId)
                //render dynamic title in html 
                return `<h2>Facility Minerals for ${foundColony.name}</h2>`
            }
        }
    }
}