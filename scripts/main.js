import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

import { fishList } from './FishList.js'

const parentHTMLElement = document.querySelector(".owned-fish-list")

parentHTMLElement.innerHTML = fishList()
