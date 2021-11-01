import { getFacilities, getFacilityMinerals, getMinerals, getTransientState } from "./database.js"

export const Cart = () => {
    const transientState = getTransientState()
    const minerals = getMinerals()
    const facilities = getFacilities()
    const facilityMinerals = getFacilityMinerals()

    if (!transientState.selectedFacilityMineral) {
        return ""
    } else {
        const foundFacilityMineral = facilityMinerals.find(facilityMineral => transientState.selectedFacilityMineral === facilityMineral.id)
        const foundMineral = minerals.find(mineral => mineral.id === foundFacilityMineral.mineralId)
        const foundFacility = facilities.find(facility => facility.id === transientState.selectedFacility)
        return `
        1 ton of ${foundMineral.name} from ${foundFacility.name}.`
    }
}