
import { ColonyMinerals, colonyTitle } from "./ColonyMinerals.js"
import { Facility } from "./Facilities.js"
import { Governors } from "./Governors.js"
<<<<<<< HEAD
import { purchaseMineral } from "./database.js"
import { FacilityMinerals } from "./FacilityMinerals.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "cart__button") {
            purchaseMineral()
        }
    }
)


=======
import { FacilityMinerals, facilityMineralTitle } from "./FacilityMinerals.js"
>>>>>>> main

export const Exomine = () => {
    return `
    <article class="upper">
        <section class="userSelections">
            <div class="userSelections__governor">
                <p><b>Choose Governor:</b></p>
                ${Governors()}
            </div>
            <div class="userSelections__facility">
                <p><b>Choose Facility:</b></p>
                ${Facility()}
            </div>
        </section>
        <aside class="colonyMinerals">
            <h2 class="colonyMinerals__title">${colonyTitle()}</h2>
            <div class="colonyMinerals__list">
            ${ColonyMinerals()}
            </div>
        </aside>
    </article>
    <article class="lower">
        <section class="facilityMinerals">
            <h2 class="facilityMinerals__title">${facilityMineralTitle()}</h2>
            <div class="facilityMinerals__list">
                ${FacilityMinerals()}
            </div>
        </section>
        <aside class="cart">
        <h2 class="space_cart">Space Cart</h2>
            <div class="cart__list">
                <p>1 ton of Iron for Ganymede</p>
            </div>
            <button id="cart__button">Purchase Mineral</button>
        </aside>
    </article>
    `
}