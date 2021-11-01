import { getColonyMinerals, getTransientState, getColonies, getMinerals } from "./database.js";

export const ColonyMinerals = () => {
    const colonyMinerals = getColonyMinerals()
    const minerals = getMinerals()
    const transientState = getTransientState()

    let foundColonyMineralArray = []

    if (!transientState.colonyId) {
        return ""
    } else {
        for (const colonyMineral of colonyMinerals) {
            //as we iterate the array, we need to access the transient state to get the colonyId
            if (colonyMineral.colonyId === transientState.colonyId) {
                //compare the transient state's colonyId to colonyMineral's colonyId, if those are equal, then we need that colonyMineral object
                foundColonyMineralArray.push(colonyMineral)
                //push that object to an array (set empty array at beginning)
            }
        }
        let html = "<ul>"

        for (const foundColonyMineral of foundColonyMineralArray) {
            const foundMineral = minerals.find(mineral => foundColonyMineral.mineralId === mineral.id)
            html += `<li>${foundColonyMineral.quantity} ${foundMineral.name}</li>`
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








