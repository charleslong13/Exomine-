
import { getTransientState } from "./database.js"
import { getFacilityMinerals } from "./database.js"
import { getColonyMinerals } from "./database.js"

const facilityMinerals = getFacilityMinerals()
const colonyMinerals = getColonyMinerals() 
const transientState = getTransientState()

// need to subtract minerals from the mineral total after clicking the button.
if ( transientState. facilityMinerals.mineralId )
let newFacilityMinerals = facilityMinerals.quantity --

// need to add minerals to the colony total after clicking the button.
let newColonylMinerals = colonyMinerals.quantity ++

// after minerals are added and subtracted reset the carts state.











