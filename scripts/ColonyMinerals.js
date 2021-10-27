import { getColonyMinerals } from "./database.js";

import { getMinerals } from "./database.js";




document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "governorDropDown") {
            //render HTML when governor dropdown is clicked 
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
        //if the governor dropdown has been rendered and selection made, grab the value of the selection
        const currentOptionValue = parseInt(userSelection.options[userSelection.selectedIndex].value)
        let html = "<ul>"
        //iterate through colonyMinerals array to access colonyMineral objects
        for (const colonyMineral of colonyMinerals) {
            //if the colonyMineral colonyId is the same as the selected governor option 
            if (colonyMineral.colonyId === currentOptionValue) {
                //find the mineral whose id matched the colonyMineral's mineral id
                const foundMineral = minerals.find(mineral => mineral.id === colonyMineral.mineralId)
                //add html list items 
                html += `<li>${colonyMineral.quantity} ${foundMineral.name}</li>`
            }
        }
        html += "</ul>"

        return html
    }
}
