
import { ColonyMinerals } from "./ColonyMinerals.js"
import { getTransientState } from "./database.js"
import { getFacilityMinerals } from "./database.js"
import { getColonyMinerals } from "./database.js"

const facilityMinerals = getFacilityMinerals()
const colonyMinerals = getColonyMinerals() 
const transientState = getTransientState()


// after minerals are added and subtracted reset the carts state.











