import { getColonyMinerals, getGovernors, getTransientState } from "./database.js";

import { getMinerals } from "./database.js";
<<<<<<< HEAD



=======
import {setGovernor} from "./database.js"
import {getColonies} from "./database.js"



document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governorDropDown") {
            //add governor id to transient state and re-render HTML
            setGovernor(parseInt(event.target.value))
        }
    }
)
>>>>>>> main

export const ColonyMinerals = () => {
    const colonyMinerals = getColonyMinerals()
    const minerals = getMinerals()
    const transientState = getTransientState()

    if (!transientState.selectedGovernor) {
        return ""
    } else {

        let html = "<ul>"

        for (const colonyMineral of colonyMinerals) {
            if (colonyMineral.colonyId === transientState.selectedGovernor) {
                const selectedMineral = minerals.find(mineral => mineral.id === colonyMineral.selectedMineral)
                html += `<li>${colonyMineral.quantity} ${selectedMineral.name}</li>`
            }
        }
    html += "</ul>"

    return html
    }
}
// /defining export function that dynamically changes the title based on governor selection
export const colonyTitle = () => {
    const foundGovernors = getGovernors()
    const tempState = getTransientState()
    const colonies = getColonies()
// if a governor has not been selected then display "Colony Minerals" 
    if (!tempState.selectedGovernor) {
        return "Colony Minerals"
    } else {

        
//iterate through our copy of the governor data from our database 
        //then check if the governor's id matches the selected governor 
        for (const governor of foundGovernors) {
            if (governor.id === tempState.selectedGovernor) {
                const foundColony = colonies.find(colony => colony.id === governor.colonyId)
                return `<h2>${foundColony.name} Minerals<h2>`
            }
        } 
    }
}








