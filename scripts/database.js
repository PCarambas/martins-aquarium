const database = {
    fish: [
        {
            name: "Larry",
            species: "Blue Tang",
            length: "1 foot",
            diet: "herbivore",
            harvested: "Indonesia",
            image: "https://www.liveaquaria.com/images/categories/thumbs/th_73746_Blue_Tang.jpg"
        },

        {
            name: "Fancy",
            species: "Flame Angelfish",
            length: "4 inches",
            diet: "omnivore",
            harvested: "Marshall Islands",
            image: "https://www.liveaquaria.com/images/categories/thumbs/th_66284_Flame_Angelfish.jpg"
        },

        {
            name: "Sassy",
            species: "Flame Angelfish",
            length: "4 inches",
            diet: "omnivore",
            harvested: "Marshall Islands",
            image: "https://www.liveaquaria.com/images/categories/thumbs/th_66284_Flame_Angelfish.jpg"
        },

        {
            name: "Hulk",
            species: "Green Mandarin",
            length: "3 inches",
            diet: "canivore",
            harvested: "Philippines",
            image: "https://www.liveaquaria.com/images/categories/thumbs/th_71302_Green_Mandarin.jpg"
        },

        {
            name: "Goldie",
            species: "Midas Blenny",
            length: "6 inches",
            diet: "omnivore",
            harvested: "Africa",
            image: "https://www.liveaquaria.com/images/categories/thumbs/th71783MidasBlenny.jpg"
        },

        {
            name: "Ned",
            species: "Royal Gamma Basslet",
            length: "3 inches",
            diet: "carnivore",
            harvested: "Caribbean",
            image: "https://www.liveaquaria.com/images/categories/thumbs/th_72329_Royal_Gramma_Basslet.jpg"
        }


    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}