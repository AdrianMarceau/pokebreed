/*
    * GLOBAL POKEMON INDEX DATA (HOENN / GEN 3)
    * This data was collected from Zarel for Pokemon Showdown
    * via: https://github.com/Zarel/Pokemon-Showdown/blob/master/data/pokedex.js
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;

    // Add the generation's list of base species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Base Pokedex

        'treecko': {
            order: indexOrder++,
            token: 'treecko',
            name: 'Treecko',
            number: 252,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 40, phAttack: 45, phDefense: 35, spAttack: 65, spDefense: 55, speed: 70},
            abilities: {0: 'overgrow', hidden: 'unburden'},
            height: 0.5,
            weight: 5,
            colors: ['green', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['monster', 'dragon'],
            nextEvolutions: [{
                species: 'grovyle',
                method: 'level-up',
                value: 16
                }]
            },
        'grovyle': {
            order: indexOrder++,
            token: 'grovyle',
            name: 'Grovyle',
            number: 253,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 50, phAttack: 65, phDefense: 45, spAttack: 85, spDefense: 65, speed: 95},
            abilities: {0: 'overgrow', hidden: 'unburden'},
            height: 0.9,
            weight: 21.6,
            colors: ['green', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['monster', 'dragon'],
            prevEvolution: 'treecko',
            nextEvolutions: [{
                species: 'sceptile',
                method: 'level-up',
                value: 36
                }]
            },
        'sceptile': {
            order: indexOrder++,
            token: 'sceptile',
            name: 'Sceptile',
            number: 254,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 70, phAttack: 85, phDefense: 65, spAttack: 105, spDefense: 85, speed: 120},
            abilities: {0: 'overgrow', hidden: 'unburden'},
            height: 1.7,
            weight: 52.2,
            colors: ['green', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['monster', 'dragon'],
            prevEvolution: 'grovyle'
            },

        'torchic': {
            order: indexOrder++,
            token: 'torchic',
            name: 'Torchic',
            number: 255,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 45, phAttack: 60, phDefense: 40, spAttack: 70, spDefense: 50, speed: 45},
            abilities: {0: 'blaze', hidden: 'speed-boost'},
            height: 0.4,
            weight: 2.5,
            colors: ['orange', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'combusken',
                method: 'level-up',
                value: 16
                }]
            },
        'combusken': {
            order: indexOrder++,
            token: 'combusken',
            name: 'Combusken',
            number: 256,
            types: ['fire', 'fighting'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 60, phAttack: 85, phDefense: 60, spAttack: 85, spDefense: 60, speed: 55},
            abilities: {0: 'blaze', hidden: 'speed-boost'},
            height: 0.9,
            weight: 19.5,
            colors: ['orange', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'torchic',
            nextEvolutions: [{
                species: 'blaziken',
                method: 'level-up',
                value: 36
                }]
            },
        'blaziken': {
            order: indexOrder++,
            token: 'blaziken',
            name: 'Blaziken',
            number: 257,
            types: ['fire', 'fighting'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 80, phAttack: 120, phDefense: 70, spAttack: 110, spDefense: 70, speed: 80},
            abilities: {0: 'blaze', hidden: 'speed-boost'},
            height: 1.9,
            weight: 52,
            colors: ['red', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'combusken'
            },

        'mudkip': {
            order: indexOrder++,
            token: 'mudkip',
            name: 'Mudkip',
            number: 258,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 50, phAttack: 70, phDefense: 50, spAttack: 50, spDefense: 50, speed: 40},
            abilities: {0: 'torrent', hidden: 'damp'},
            height: 0.4,
            weight: 7.6,
            colors: ['blue', 'orange', 'white'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            nextEvolutions: [{
                species: 'marshtomp',
                method: 'level-up',
                value: 16
                }]
            },
        'marshtomp': {
            order: indexOrder++,
            token: 'marshtomp',
            name: 'Marshtomp',
            number: 259,
            types: ['water', 'ground'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 70, phAttack: 85, phDefense: 70, spAttack: 60, spDefense: 70, speed: 50},
            abilities: {0: 'torrent', hidden: 'damp'},
            height: 0.7,
            weight: 28,
            colors: ['blue', 'orange', 'gray'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            prevEvolution: 'mudkip',
            nextEvolutions: [{
                species: 'swampert',
                method: 'level-up',
                value: 36
                }]
            },
        'swampert': {
            order: indexOrder++,
            token: 'swampert',
            name: 'Swampert',
            number: 260,
            types: ['water', 'ground'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 100, phAttack: 110, phDefense: 90, spAttack: 85, spDefense: 90, speed: 60},
            abilities: {0: 'torrent', hidden: 'damp'},
            height: 1.5,
            weight: 81.9,
            colors: ['blue', 'orange', 'gray', 'white'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            prevEvolution: 'marshtomp'
            },

        'poochyena': {
            order: indexOrder++,
            token: 'poochyena',
            name: 'Poochyena',
            number: 261,
            types: ['dark'],
            baseStats: {hp: 35, phAttack: 55, phDefense: 35, spAttack: 30, spDefense: 30, speed: 35},
            abilities: {0: 'run-away', 1: 'quick-feet', hidden: 'rattled'},
            height: 0.5,
            weight: 13.6,
            colors: ['gray', 'black'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'mightyena',
                method: 'level-up',
                value: 18
                }]
            },
        'mightyena': {
            order: indexOrder++,
            token: 'mightyena',
            name: 'Mightyena',
            number: 262,
            types: ['dark'],
            baseStats: {hp: 70, phAttack: 90, phDefense: 70, spAttack: 60, spDefense: 60, speed: 70},
            abilities: {0: 'intimidate', 1: 'quick-feet', hidden: 'moxie'},
            height: 1,
            weight: 37,
            color: ['gray', 'black'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'poochyena'
            },

        'wurmple': {
            order: indexOrder++,
            token: 'wurmple',
            name: 'Wurmple',
            number: 265,
            types: ['bug'],
            baseStats: {hp: 45, phAttack: 45, phDefense: 35, spAttack: 20, spDefense: 30, speed: 20},
            abilities: {0: 'shield-dust', hidden: 'run-away'},
            height: 0.3,
            weight: 3.6,
            colors: ['red', 'white'],
            eggCycles: 15,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'silcoon',
                method: 'level-up',
                value: 7,
                method2: 'chance',
                value2: 50
                }, {
                species: 'cascoon',
                method: 'level-up',
                value: 7,
                method2: 'chance',
                value2: 50
                }]
            },
        'silcoon': {
            order: indexOrder++,
            token: 'silcoon',
            name: 'Silcoon',
            number: 266,
            types: ['bug'],
            baseStats: {hp: 50, phAttack: 35, phDefense: 55, spAttack: 25, spDefense: 25, speed: 15},
            abilities: {0: 'shed-skin'},
            height: 0.6,
            weight: 10,
            colors: ['white', 'red'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'wurmple',
            nextEvolutions: [{
                species: 'beautifly',
                method: 'level-up',
                value: 10
                }]
            },
        'cascoon': {
            order: indexOrder++,
            token: 'cascoon',
            name: 'Cascoon',
            number: 268,
            types: ['bug'],
            baseStats: {hp: 50, phAttack: 35, phDefense: 55, spAttack: 25, spDefense: 25, speed: 15},
            abilities: {0: 'shed-skin'},
            height: 0.7,
            weight: 11.5,
            colors: ['purple', 'red'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'wurmple',
            nextEvolutions: [{
                species: 'dustox',
                method: 'level-up',
                value: 10
                }]
            },
        'beautifly': {
            order: indexOrder++,
            token: 'beautifly',
            name: 'Beautifly',
            number: 267,
            types: ['bug', 'flying'],
            baseStats: {hp: 60, phAttack: 70, phDefense: 50, spAttack: 100, spDefense: 50, speed: 65},
            abilities: {0: 'swarm', hidden: 'rivalry'},
            height: 1,
            weight: 28.4,
            colors: ['yellow', 'white', 'black', 'red'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'silcoon'
            },
        'dustox': {
            order: indexOrder++,
            token: 'dustox',
            name: 'Dustox',
            number: 269,
            types: ['bug', 'poison'],
            baseStats: {hp: 60, phAttack: 50, phDefense: 70, spAttack: 50, spDefense: 90, speed: 65},
            abilities: {0: 'shield-dust', hidden: 'compound-eyes'},
            height: 1.2,
            weight: 31.6,
            colors: ['purple', 'green', 'yellow', 'red'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'cascoon'
            },

        'lotad': {
            order: indexOrder++,
            token: 'lotad',
            name: 'Lotad',
            number: 270,
            types: ['water', 'grass'],
            baseStats: {hp: 40, phAttack: 30, phDefense: 30, spAttack: 40, spDefense: 50, speed: 30},
            abilities: {0: 'swift-swim', 1: 'rain-dish', hidden: 'own-tempo'},
            height: 0.5,
            weight: 2.6,
            color: ['green', 'blue', 'yellow'],
            eggCycles: 15,
            eggGroups: ['water-1', 'grass'],
            nextEvolutions: [{
                species: 'lombre',
                method: 'level-up',
                value: 14
                }]
            },
        'lombre': {
            order: indexOrder++,
            token: 'lombre',
            name: 'Lombre',
            number: 271,
            types: ['water', 'grass'],
            baseStats: {hp: 60, phAttack: 50, phDefense: 50, spAttack: 60, spDefense: 70, speed: 50},
            abilities: {0: 'swift-swim', 1: 'rain-dish', hidden: 'own-tempo'},
            height: 1.2,
            weight: 32.5,
            color: ['green', 'blue', 'red'],
            eggCycles: 15,
            eggGroups: ['water-1', 'grass'],
            prevEvolution: 'lotad',
            nextEvolutions: [{
                species: 'ludicolo',
                method: 'evolution-stone',
                value: 'water-stone',
                method2: 'type-appeal',
                value2: ['water', 'grass']
                }]
            },
        'ludicolo': {
            order: indexOrder++,
            token: 'ludicolo',
            name: 'Ludicolo',
            number: 272,
            types: ['water', 'grass'],
            baseStats: {hp: 80, phAttack: 70, phDefense: 70, spAttack: 90, spDefense: 100, speed: 70},
            abilities: {0: 'swift-swim', 1: 'rain-dish', hidden: 'own-tempo'},
            height: 1.5,
            weight: 55,
            color: ['green', 'yellow', 'brown'],
            eggCycles: 15,
            eggGroups: ['water-1', 'grass'],
            prevEvolution: 'lombre'
            },

        'seedot': {
            order: indexOrder++,
            token: 'seedot',
            name: 'Seedot',
            number: 273,
            types: ['grass'],
            baseStats: {hp: 40, phAttack: 40, phDefense: 50, spAttack: 30, spDefense: 30, speed: 30},
            abilities: {0: 'chlorophyll', 1: 'early-bird', hidden: 'pickpocket'},
            height: 0.5,
            weight: 4,
            color: ['brown', 'black', 'yellow'],
            eggCycles: 15,
            eggGroups: ['field', 'grass'],
            nextEvolutions: [{
                species: 'nuzleaf',
                method: 'level-up',
                value: 14
                }]
            },
        'nuzleaf': {
            order: indexOrder++,
            token: 'nuzleaf',
            name: 'Nuzleaf',
            number: 274,
            types: ['grass', 'dark'],
            baseStats: {hp: 70, phAttack: 70, phDefense: 40, spAttack: 60, spDefense: 40, speed: 60},
            abilities: {0: 'chlorophyll', 1: 'early-bird', hidden: 'pickpocket'},
            height: 1,
            weight: 28,
            color: ['brown', 'green', 'white'],
            eggCycles: 15,
            eggGroups: ['field', 'grass'],
            prevEvolution: 'seedot',
            nextEvolutions: [{
                species: 'shiftry',
                method: 'evolution-stone',
                value: 'leaf-stone',
                method2: 'type-appeal',
                value2: ['grass', 'dark']
                }]
            },
        'shiftry': {
            order: indexOrder++,
            token: 'shiftry',
            name: 'Shiftry',
            number: 275,
            types: ['grass', 'dark'],
            baseStats: {hp: 90, phAttack: 100, phDefense: 60, spAttack: 90, spDefense: 60, speed: 80},
            abilities: {0: 'chlorophyll', 1: 'early-bird', hidden: 'pickpocket'},
            height: 1.3,
            weight: 59.6,
            color: ['brown', 'white', 'green'],
            eggCycles: 15,
            eggGroups: ['field', 'grass'],
            prevEvolution: 'nuzleaf'
            },

        'azurill': {
            order: thisIndex.beforeOrder('marill'),
            token: 'azurill',
            name: 'Azurill',
            class: 'baby',
            number: 298,
            types: ['normal', 'fairy'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 50, phAttack: 20, phDefense: 40, spAttack: 20, spDefense: 40, speed: 20},
            abilities: {0: 'thick-fat', 1: 'huge-power', hidden: 'sap-sipper'},
            height: 0.2,
            weight: 2,
            colors: ['blue', 'pink', 'white'],
            eggCycles: 10,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'marill',
                method: 'happiness',
                value: 'high'
                }]
            },

        'wynaut': {
            order: thisIndex.beforeOrder('wobbuffet'),
            token: 'wynaut',
            name: 'Wynaut',
            class: 'baby',
            number: 360,
            types: ['psychic'],
            baseStats: {hp: 95, phAttack: 23, phDefense: 48, spAttack: 23, spDefense: 48, speed: 23},
            abilities: {0: 'shadow-tag', hidden: 'telepathy'},
            height: 0.6,
            weight: 14,
            colors: ['blue', 'black', 'pink', 'white'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'wobbuffet',
                method: 'level-up',
                value: 15
                }]
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with new possible form data
    thisIndex.addPossibleForms([
        {base: 'unown', form: 'exclamation'},
        {base: 'unown', form: 'question'},
        ]);

    // Update previous gen pokemon with new prev evolution data
    thisIndex.addPrevEvolutions([
        {base: 'marill', species: 'azurill'},
        {base: 'wobbuffet', species: 'wynaut'},
        ]);

})();