import { getColonyMinerals, getGovernors, getTransientState } from "./database.js";

import { getMinerals } from "./database.js";
import {setGovernor} from "./database.js"
import {getColonies} from "./database.js"



document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governorDropDown") {
            setGovernor(parseInt(event.target.value))
        }
    }
)

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
                const foundMineral = minerals.find(mineral => mineral.id === colonyMineral.mineralId)
                html += `<li>${colonyMineral.quantity} ${foundMineral.name}</li>`
            }
        }
    html += "</ul>"

    return html
    }
}

export const colonyTitle = () => {
    const foundGovernors = getGovernors()
    const tempState = getTransientState()
    const colonies = getColonies()

    if (!tempState.selectedGovernor) {
        return "Colony Minerals"
    } else {

        let html = "<ul>"

        for (const governor of foundGovernors) {
            if (governor.colonyId === colonies.id) {
                const foundColony = colonies.find(colony => colony.id === governor.colonyId)
                html += `${foundColony} Minerals`
            }
        }
        html += "</ul>"

        return html 
    }
}








