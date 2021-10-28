
import { ColonyMinerals, colonyTitle } from "./ColonyMinerals.js"
import { Facility } from "./Facilities.js"
import { Governors } from "./Governors.js"
import { purchaseMineral } from "./database.js"
import { FacilityMinerals, facilityMineralTitle } from "./FacilityMinerals.js"
import { Cart } from "./Cart.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "cart__button") {
            purchaseMineral()
        }
    }
)

export const Exomine = () => {
    return `
    <article class="upper">
        <section class="userSelections">
            <div class="userSelections__governor">
                <p><b>Choose Governor: </b></p>
                ${Governors()}
            </div>
            <div class="userSelections__facility">
                <p><b>Choose Facility: </b></p>
                ${Facility()}
            </div>
        </section>
        <aside class="colonyMinerals">
            ${colonyTitle()}
            <div class="colonyMinerals__list">
                ${ColonyMinerals()}
            </div>
        </aside>
    </article>
    <article class="lower">
        <section class="facilityMinerals">
            ${facilityMineralTitle()}
            <div class="facilityMinerals__list">
                ${FacilityMinerals()}
            </div>
        </section>
        <aside class="cart">
            <h2 class="cart__title">Space Cart</h2>
            <div class="cart__list">
                ${Cart()}
            </div>
            <button id="cart__button">Purchase Mineral</button>
        </aside>
    </article>
    `
}