const database = {
    fish: [
        {
            name: "Larry",
            species: "Blue Tang",
            length: "1 foot",
            diet: "herbivore",
            harvested: "Indonesia",
        },

        {
            name: "Fancy",
            species: "Flame Angelfish",
            length: "4 inches",
            diet: "omnivore",
            harvested: "Marshall Islands"
        },

        {
            name: "Sassy",
            species: "Flame Angelfish",
            length: "4 inches",
            diet: "omnivore",
            harvested: "Marshall Islands"
        },

        {
            name: "Hulk",
            species: "Green Mandarin",
            length: "3 inches",
            diet: "canivore",
            harvested: "Philippines"
        },

        {
            name: "Goldie",
            species: "Midas Blenny",
            length: "6 inches",
            diet: "omnivore",
            harvested: "Africa"
        },

        {
            name: "Ned",
            species: "Royal Gamma Basslet",
            length: "3 inches",
            diet: "carnivore",
            harvested: "Caribbean"
        }


    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}