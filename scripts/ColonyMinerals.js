import { getColonyMinerals } from "./database.js";

import { getMinerals } from "./database.js";




document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "governorDropDown") {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)




export const ColonyMinerals = () => {
    const colonyMinerals = getColonyMinerals()
    const minerals = getMinerals()
    const userSelection = document.getElementById("governorDropDown")

    if (userSelection === null) {
        return ""
    } else {
        const currentOptionValue = parseInt(userSelection.options[userSelection.selectedIndex].value)
        let html = "<ul>"
        for (const colonyMineral of colonyMinerals) {
            if (colonyMineral.colonyId === currentOptionValue) {
                const foundMineral = minerals.find(mineral => mineral.id === colonyMineral.mineralId)
                html += `<li>${colonyMineral.quantity} ${foundMineral.name}</li>`
            }
        }
        html += "</ul>"

        return html
    }
}
