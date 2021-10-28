import { getColonyMinerals, getGovernors, getTransientState, getColonies, getMinerals, getFacilities, getFacilityMinerals } from "./database.js";

export const ColonyMinerals = () => {
    const colonyMinerals = getColonyMinerals()
    const minerals = getMinerals()
    const transientState = getTransientState()
    const facilityMinerals = getFacilityMinerals()

    if (!transientState.colonyId) {
        return ""
    } else {

        let html = "<ul>"

        for (const colonyMineral of colonyMinerals) {
            const foundFacilityMineral = facilityMinerals.find(facilityMineral => colonyMineral.selectedFacilityMineral === facilityMineral.id)
            const foundMineral = minerals.find(mineral => mineral.id === foundFacilityMineral.mineralId)
            html += `<li>${colonyMineral.quantity} ${foundMineral.name}</li>`
        }

        html += "</ul>"

        return html
    }
}
// /defining export function that dynamically changes the title based on governor selection
export const colonyTitle = () => {
    const tempState = getTransientState()
    const colonies = getColonies()
    // if a governor has not been selected then display "Colony Minerals" 
    if (!tempState.colonyId) {
        return "<h2 class='colonyMinerals__title'> Colony Minerals</h2>"
    } else {
        //iterate through our copy of the governor data from our database 
        //then check if the governor's id matches the selected governor 
        for (const colony of colonies) {
            if (colony.id === tempState.colonyId) {
                return `<h2 class="colonyMinerals__title">${colony.name} Minerals</h2>`
            }
        }
    }
}








