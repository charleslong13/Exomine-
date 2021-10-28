import { getColonies, getFacilities, getMinerals, getTransientState } from "./database.js"

export const Cart = () => {
    const transientState = getTransientState()
    const minerals = getMinerals()
    const facilities = getFacilities()

    const foundMineral = minerals.find(mineral => mineral.id === transientState.selectedMineral)
    const foundFacility = facilities.find(facility => facility.id === transientState.selectedFacility)

    if (!foundMineral || !foundFacility) {
        return ""
    } else {
        return `
        1 ton of ${foundMineral.name} from ${foundFacility.name}.`
    }
}