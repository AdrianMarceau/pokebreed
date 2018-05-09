/*
    * GLOBAL POKEMON INDEX DATA (HOENN / GEN 3)
    * This data was collected from Zarel for Pokemon Showdown
    * via: https://github.com/Zarel/Pokemon-Showdown/blob/master/data/pokedex.js
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration(3);
    thisIndex.setRegion('hoenn');

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

        'zigzagoon': {
            order: indexOrder++,
            token: 'zigzagoon',
            name: 'Zigzagoon',
            number: 263,
            types: ['normal'],
            baseStats: {hp: 38, phAttack: 30, phDefense: 41, spAttack: 30, spDefense: 41, speed: 60},
            abilities: {0: 'pickup', 1: 'gluttony', hidden: 'quick-feet'},
            height: 0.4,
            weight: 17.5,
            colors: ['brown', 'white', 'black'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'linoone',
                method: 'level-up',
                value: 20
                }]
            },
        'linoone': {
            order: indexOrder++,
            token: 'linoone',
            name: 'Linoone',
            number: 264,
            types: ['normal'],
            baseStats: {hp: 78, phAttack: 70, phDefense: 61, spAttack: 50, spDefense: 61, speed: 100},
            abilities: {0: 'pickup', 1: 'gluttony', hidden: 'quick-feet'},
            height: 0.5,
            weight: 32.5,
            colors: ['white', 'brown'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'zigzagoon'
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

        'taillow': {
            order: indexOrder++,
            token: 'taillow',
            name: 'Taillow',
            number: 276,
            types: ['normal', 'flying'],
            baseStats: {hp: 40, phAttack: 55, phDefense: 30, spAttack: 30, spDefense: 30, speed: 85},
            abilities: {0: 'guts', hidden: 'scrappy'},
            height: 0.3,
            weight: 2.3,
            colors: ['blue', 'red', 'white'],
            eggCycles: 15,
            eggGroups: ['flying'],
            nextEvolutions: [{
                species: 'swellow',
                method: 'level-up',
                value: 22
                }]
            },
        'swellow': {
            order: indexOrder++,
            token: 'swellow',
            name: 'Swellow',
            number: 277,
            types: ['normal', 'flying'],
            baseStats: {hp: 60, phAttack: 85, phDefense: 60, spAttack: 75, spDefense: 50, speed: 125},
            abilities: {0: 'guts', hidden: 'scrappy'},
            height: 0.7,
            weight: 19.8,
            colors: ['blue', 'red', 'white'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'taillow'
            },

        'wingull': {
            order: indexOrder++,
            token: 'wingull',
            name: 'Wingull',
            number: 278,
            types: ['water', 'flying'],
            baseStats: {hp: 40, phAttack: 30, phDefense: 30, spAttack: 55, spDefense: 30, speed: 85},
            abilities: {0: 'keen-eye', 1: 'hydration', hidden: 'rain-dish'},
            height: 0.6,
            weight: 9.5,
            colors: ['white', 'blue', 'yellow'],
            eggCycles: 20,
            eggGroups: ['water-1', 'flying'],
            nextEvolutions: [{
                species: 'pelipper',
                method: 'level-up',
                value: 25
                }]
            },
        'pelipper': {
            order: indexOrder++,
            token: 'pelipper',
            name: 'Pelipper',
            number: 279,
            types: ['water', 'flying'],
            baseStats: {hp: 60, phAttack: 50, phDefense: 100, spAttack: 95, spDefense: 70, speed: 65},
            abilities: {0: 'keen-eye', 1: 'drizzle', hidden: 'rain-dish'},
            height: 1.2,
            weight: 28,
            colors: ['yellow', 'white', 'blue'],
            eggCycles: 20,
            eggGroups: ['water-1', 'flying'],
            prevEvolution: 'wingull'
            },

        'ralts': {
            order: indexOrder++,
            token: 'ralts',
            name: 'Ralts',
            number: 280,
            types: ['psychic', 'fairy'],
            baseStats: {hp: 28, phAttack: 25, phDefense: 25, spAttack: 45, spDefense: 35, speed: 40},
            abilities: {0: 'synchronize', 1: 'trace', hidden: 'telepathy'},
            height: 0.4,
            weight: 6.6,
            colors: ['red', 'green', 'white'],
            evos: ['kirlia'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'kirlia',
                method: 'level-up',
                value: 20
                }]
            },
        'kirlia': {
            order: indexOrder++,
            token: 'kirlia',
            name: 'Kirlia',
            number: 281,
            types: ['psychic', 'fairy'],
            baseStats: {hp: 38, phAttack: 35, phDefense: 35, spAttack: 65, spDefense: 55, speed: 50},
            abilities: {0: 'synchronize', 1: 'trace', hidden: 'telepathy'},
            height: 0.8,
            weight: 20.2,
            colors: ['green', 'white', 'red'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'ralts',
            nextEvolutions: [{
                species: 'gardevoir',
                method: 'level-up',
                value: 30
                }]
            },
        'gardevoir': {
            order: indexOrder++,
            token: 'gardevoir',
            name: 'Gardevoir',
            number: 282,
            types: ['psychic', 'fairy'],
            baseStats: {hp: 68, phAttack: 65, phDefense: 65, spAttack: 125, spDefense: 115, speed: 80},
            abilities: {0: 'synchronize', 1: 'trace', hidden: 'telepathy'},
            height: 1.6,
            weight: 48.4,
            colors: ['white', 'green', 'red'],
            prevo: 'kirlia',
            evoLevel: 30,
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'kirlia'
            },

        'surskit': {
            order: indexOrder++,
            token: 'surskit',
            name: 'Surskit',
            number: 283,
            types: ['bug', 'water'],
            baseStats: {hp: 40, phAttack: 30, phDefense: 32, spAttack: 50, spDefense: 52, speed: 65},
            abilities: {0: 'swift-swim', hidden: 'rain-dish'},
            height: 0.5,
            weight: 1.7,
            colors: ['blue', 'yellow', 'pink'],
            eggCycles: 15,
            eggGroups: ['water-1', 'bug'],
            nextEvolutions: [{
                species: 'masquerain',
                method: 'level-up',
                value: 22
                }]
            },
        'masquerain': {
            order: indexOrder++,
            token: 'masquerain',
            name: 'Masquerain',
            number: 284,
            types: ['bug', 'flying'],
            baseStats: {hp: 70, phAttack: 60, phDefense: 62, spAttack: 100, spDefense: 82, speed: 80},
            abilities: {0: 'intimidate', hidden: 'unnerve'},
            height: 0.8,
            weight: 3.6,
            colors: ['blue', 'pink', 'white', 'purple'],
            eggCycles: 15,
            eggGroups: ['water-1', 'bug'],
            prevEvolution: 'surskit'
            },

        'shroomish': {
            order: indexOrder++,
            token: 'shroomish',
            name: 'Shroomish',
            number: 285,
            types: ['grass'],
            baseStats: {hp: 60, phAttack: 40, phDefense: 60, spAttack: 40, spDefense: 60, speed: 35},
            abilities: {0: 'effect-spore', 1: 'poison-heal', hidden: 'quick-feet'},
            height: 0.4,
            weight: 4.5,
            colors: ['brown', 'green'],
            eggCycles: 15,
            eggGroups: ['fairy', 'grass'],
            nextEvolutions: [{
                species: 'breloom',
                method: 'level-up',
                value: 23
                }]
            },
        'breloom': {
            order: indexOrder++,
            token: 'breloom',
            name: 'Breloom',
            number: 286,
            types: ['grass', 'fighting'],
            baseStats: {hp: 60, phAttack: 130, phDefense: 80, spAttack: 60, spDefense: 60, speed: 70},
            abilities: {0: 'effect-spore', 1: 'poison-heal', hidden: 'quick-feet'},
            height: 1.2,
            weight: 39.2,
            colors: ['brown', 'green', 'red'],
            eggCycles: 15,
            eggGroups: ['fairy', 'grass'],
            prevEvolution: 'shroomish'
            },

        'slakoth': {
            order: indexOrder++,
            token: 'slakoth',
            name: 'Slakoth',
            number: 287,
            types: ['normal'],
            baseStats: {hp: 60, phAttack: 60, phDefense: 60, spAttack: 35, spDefense: 35, speed: 30},
            abilities: {0: 'truant'},
            height: 0.8,
            weight: 24,
            colors: ['brown', 'pink', 'white'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'vigoroth',
                method: 'level-up',
                value: 18
                }]
            },
        'vigoroth': {
            order: indexOrder++,
            token: 'vigoroth',
            name: 'Vigoroth',
            number: 288,
            types: ['normal'],
            baseStats: {hp: 80, phAttack: 80, phDefense: 80, spAttack: 55, spDefense: 55, speed: 90},
            abilities: {0: 'vital-spirit'},
            height: 1.4,
            weight: 46.5,
            colors: ['white', 'brown', 'red'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'slakoth',
            nextEvolutions: [{
                species: 'slaking',
                method: 'level-up',
                value: 36
                }]
            },
        'slaking': {
            order: indexOrder++,
            token: 'slaking',
            name: 'Slaking',
            number: 289,
            types: ['normal'],
            baseStats: {hp: 150, phAttack: 160, phDefense: 100, spAttack: 95, spDefense: 65, speed: 100},
            abilities: {0: 'truant'},
            height: 2,
            weight: 130.5,
            colors: ['brown', 'white', 'pink'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'vigoroth'
            },

        'nincada': {
            order: indexOrder++,
            token: 'nincada',
            name: 'Nincada',
            number: 290,
            types: ['bug', 'ground'],
            baseStats: {hp: 31, phAttack: 45, phDefense: 90, spAttack: 30, spDefense: 30, speed: 40},
            abilities: {0: 'compound-eyes', hidden: 'run-away'},
            height: 0.5,
            weight: 5.5,
            colors: ['gray', 'brown', 'green'],
            eggCycles: 15,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'ninjask',
                method: 'level-up',
                value: 20,
                castoff: 'shedinja'
                }]
            },
        'ninjask': {
            order: indexOrder++,
            token: 'ninjask',
            name: 'Ninjask',
            number: 291,
            types: ['bug', 'flying'],
            baseStats: {hp: 61, phAttack: 90, phDefense: 45, spAttack: 50, spDefense: 50, speed: 160},
            abilities: {0: 'speed-boost', hidden: 'infiltrator'},
            height: 0.8,
            weight: 12,
            colors: ['yellow', 'white', 'black', 'red', 'gray'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'nincada'
            },
        'shedinja': {
            order: indexOrder++,
            token: 'shedinja',
            name: 'Shedinja',
            number: 292,
            types: ['bug', 'ghost'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 1, phAttack: 90, phDefense: 45, spAttack: 30, spDefense: 30, speed: 40},
            maxHP: 1,
            abilities: {0: 'wonder-guard'},
            height: 0.8,
            weight: 1.2,
            colors: ['brown', 'gray', 'white'],
            eggCycles: 15,
            eggGroups: ['mineral'],
            prevEvolution: 'nincada'
            },

        'whismur': {
            order: indexOrder++,
            token: 'whismur',
            name: 'Whismur',
            number: 293,
            types: ['normal'],
            baseStats: {hp: 64, phAttack: 51, phDefense: 23, spAttack: 51, spDefense: 23, speed: 28},
            abilities: {0: 'soundproof', hidden: 'rattled'},
            height: 0.6,
            weight: 16.3,
            colors: ['pink', 'yellow'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            nextEvolutions: [{
                species: 'loudred',
                method: 'level-up',
                value: 20
                }]
            },
        'loudred': {
            order: indexOrder++,
            token: 'loudred',
            name: 'Loudred',
            number: 294,
            types: ['normal'],
            baseStats: {hp: 84, phAttack: 71, phDefense: 43, spAttack: 71, spDefense: 43, speed: 48},
            abilities: {0: 'soundproof', hidden: 'scrappy'},
            height: 1,
            weight: 40.5,
            colors: ['purple', 'yellow', 'pink'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            prevEvolution: 'whismur',
            nextEvolutions: [{
                species: 'exploud',
                method: 'level-up',
                value: 40
                }]
            },
        'exploud': {
            order: indexOrder++,
            token: 'exploud',
            name: 'Exploud',
            number: 295,
            types: ['normal'],
            baseStats: {hp: 104, phAttack: 91, phDefense: 63, spAttack: 91, spDefense: 73, speed: 68},
            abilities: {0: 'soundproof', hidden: 'scrappy'},
            height: 1.5,
            weight: 84,
            colors: ['purple', 'yellow', 'red', 'pink'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            prevEvolution: 'loudred'
            },

        'makuhita': {
            order: indexOrder++,
            token: 'makuhita',
            name: 'Makuhita',
            number: 296,
            types: ['fighting'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 72, phAttack: 60, phDefense: 30, spAttack: 20, spDefense: 30, speed: 25},
            abilities: {0: 'thick-fat', 1: 'guts', hidden: 'sheer-force'},
            height: 1,
            weight: 86.4,
            colors: ['yellow', 'brown', 'red'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            nextEvolutions: [{
                species: 'hariyama',
                method: 'level-up',
                value: 24
                }]
            },
        'hariyama': {
            order: indexOrder++,
            token: 'hariyama',
            name: 'Hariyama',
            number: 297,
            types: ['fighting'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 144, phAttack: 120, phDefense: 60, spAttack: 40, spDefense: 60, speed: 50},
            abilities: {0: 'thick-fat', 1: 'guts', hidden: 'sheer-force'},
            height: 2.3,
            weight: 253.8,
            colors: ['orange', 'black', 'yellow', 'brown'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'makuhita'
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

        'nosepass': {
            order: indexOrder++,
            token: 'nosepass',
            name: 'Nosepass',
            number: 299,
            types: ['rock'],
            baseStats: {hp: 30, phAttack: 45, phDefense: 135, spAttack: 45, spDefense: 90, speed: 30},
            abilities: {0: 'sturdy', 1: 'magnet-pull', hidden: 'sand-force'},
            height: 1,
            weight: 97,
            colors: ['gray', 'red', 'black'],
            eggCycles: 20,
            eggGroups: ['mineral']
            },

        'skitty': {
            order: indexOrder++,
            token: 'skitty',
            name: 'Skitty',
            number: 300,
            types: ['normal'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 50, phAttack: 45, phDefense: 45, spAttack: 35, spDefense: 35, speed: 50},
            abilities: {0: 'cute-charm', 1: 'normalize', hidden: 'wonder-skin'},
            height: 0.6,
            weight: 11,
            colors: ['pink', 'yellow'],
            eggCycles: 15,
            eggGroups: ['field', 'fairy'],
            nextEvolutions: [{
                species: 'delcatty',
                method: 'evolution-stone',
                value: 'moon-stone',
                method2: 'type-appeal',
                value2: 'normal'
                }]
            },
        'delcatty': {
            order: indexOrder++,
            token: 'delcatty',
            name: 'Delcatty',
            number: 301,
            types: ['normal'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 70, phAttack: 65, phDefense: 65, spAttack: 55, spDefense: 55, speed: 90},
            abilities: {0: 'cute-charm', 1: 'normalize', hidden: 'wonder-skin'},
            height: 1.1,
            weight: 32.6,
            colors: ['purple', 'yellow'],
            eggCycles: 15,
            eggGroups: ['field', 'fairy'],
            prevEvolution: 'skitty'
            },

        'sableye': {
            order: indexOrder++,
            token: 'sableye',
            name: 'Sableye',
            number: 302,
            types: ['dark', 'ghost'],
            baseStats: {hp: 50, phAttack: 75, phDefense: 75, spAttack: 65, spDefense: 65, speed: 50},
            abilities: {0: 'keen-eye', 1: 'stall', hidden: 'prankster'},
            height: 0.5,
            weight: 11,
            colors: ['purple', 'blue', 'red'],
            eggCycles: 25,
            eggGroups: ['human-like']
            },

        'mawile': {
            order: indexOrder++,
            token: 'mawile',
            name: 'Mawile',
            number: 303,
            types: ['steel', 'fairy'],
            baseStats: {hp: 50, phAttack: 85, phDefense: 85, spAttack: 55, spDefense: 55, speed: 50},
            abilities: {0: 'hyper-cutter', 1: 'intimidate', hidden: 'sheer-force'},
            height: 0.6,
            weight: 11.5,
            colors: ['black', 'yellow', 'pink', 'white', 'red'],
            eggCycles: 20,
            eggGroups: ['field', 'fairy']
            },

        'aron': {
            order: indexOrder++,
            token: 'aron',
            name: 'Aron',
            number: 304,
            types: ['steel', 'rock'],
            baseStats: {hp: 50, phAttack: 70, phDefense: 100, spAttack: 40, spDefense: 40, speed: 30},
            abilities: {0: 'sturdy', 1: 'rock-head', hidden: 'heavy-metal'},
            height: 0.4,
            weight: 60,
            colors: ['gray', 'black', 'blue'],
            eggCycles: 35,
            eggGroups: ['monster'],
            nextEvolutions: [{
                species: 'lairon',
                method: 'level-up',
                value: 32
                }]
            },
        'lairon': {
            order: indexOrder++,
            token: 'lairon',
            name: 'Lairon',
            number: 305,
            types: ['steel', 'rock'],
            baseStats: {hp: 60, phAttack: 90, phDefense: 140, spAttack: 50, spDefense: 50, speed: 40},
            abilities: {0: 'sturdy', 1: 'rock-head', hidden: 'heavy-metal'},
            height: 0.9,
            weight: 120,
            colors: ['gray', 'black', 'blue'],
            eggCycles: 35,
            eggGroups: ['monster'],
            prevEvolution: 'aron',
            nextEvolutions: [{
                species: 'aggron',
                method: 'level-up',
                value: 42
                }]
            },
        'aggron': {
            order: indexOrder++,
            token: 'aggron',
            name: 'Aggron',
            number: 306,
            types: ['steel', 'rock'],
            baseStats: {hp: 70, phAttack: 110, phDefense: 180, spAttack: 60, spDefense: 60, speed: 50},
            abilities: {0: 'sturdy', 1: 'rock-head', hidden: 'heavy-metal'},
            height: 2.1,
            weight: 360,
            colors: ['gray', 'black', 'blue'],
            eggCycles: 35,
            eggGroups: ['monster'],
            prevEvolution: 'lairon'
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

        'luvdisc': {
            order: indexOrder++,
            token: 'luvdisc',
            name: 'Luvdisc',
            number: 370,
            types: ['water'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 43, phAttack: 30, phDefense: 55, spAttack: 40, spDefense: 65, speed: 97},
            abilities: {0: 'swift-swim', hidden: 'hydration'},
            height: 0.6,
            weight: 8.7,
            colors: ['pink', 'blue'],
            eggCycles: 20,
            eggGroups: ['water-2']
            },

        'regirock': {
            order: indexOrder++,
            token: 'regirock',
            name: 'Regirock',
            class: 'legendary',
            number: 377,
            types: ['rock'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 80, phAttack: 100, phDefense: 200, spAttack: 50, spDefense: 100, speed: 50},
            abilities: {0: 'clear-body', hidden: 'sturdy'},
            height: 1.7,
            weight: 230,
            colors: ['brown', 'gray', 'orange'],
            eggCycles: 80,
            eggGroups: ['undiscovered']
            },
        'regice': {
            order: indexOrder++,
            token: 'regice',
            name: 'Regice',
            class: 'legendary',
            number: 378,
            types: ['ice'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 80, phAttack: 50, phDefense: 100, spAttack: 100, spDefense: 200, speed: 50},
            abilities: {0: 'clear-body', hidden: 'ice-body'},
            height: 1.8,
            weight: 175,
            colors: ['blue', 'yelow'],
            eggCycles: 80,
            eggGroups: ['undiscovered']
            },
        'registeel': {
            order: indexOrder++,
            token: 'registeel',
            name: 'Registeel',
            class: 'legendary',
            number: 379,
            types: ['steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 80, phAttack: 75, phDefense: 150, spAttack: 75, spDefense: 150, speed: 50},
            abilities: {0: 'clear-body', hidden: 'light-metal'},
            height: 1.9,
            weight: 205,
            colors: ['gray', 'black', 'red'],
            eggCycles: 80,
            eggGroups: ['undiscovered']
            },

        'latias': {
            order: indexOrder++,
            token: 'latias',
            name: 'Latias',
            class: 'legendary',
            number: 380,
            types: ['dragon', 'psychic'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 80, phAttack: 80, phDefense: 90, spAttack: 110, spDefense: 130, speed: 110},
            abilities: {0: 'levitate'},
            height: 1.4,
            weight: 40,
            colors: ['red', 'white', 'blue', 'yellow'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },
        'latios': {
            order: indexOrder++,
            token: 'latios',
            name: 'Latios',
            class: 'legendary',
            number: 381,
            types: ['dragon', 'psychic'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 80, phAttack: 90, phDefense: 80, spAttack: 130, spDefense: 110, speed: 110},
            abilities: {0: 'levitate'},
            height: 2,
            weight: 60,
            colors: ['blue', 'white', 'red'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },

        'kyogre': {
            order: indexOrder++,
            token: 'kyogre',
            name: 'Kyogre',
            class: 'legendary',
            number: 382,
            types: ['water'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 100, phDefense: 90, spAttack: 150, spDefense: 140, speed: 90},
            abilities: {0: 'drizzle'},
            height: 4.5,
            weight: 352,
            colors: ['blue', 'white', 'red', 'black'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },
        'groudon': {
            order: indexOrder++,
            token: 'groudon',
            name: 'Groudon',
            class: 'legendary',
            number: 383,
            types: ['ground'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 150, phDefense: 140, spAttack: 100, spDefense: 90, speed: 90},
            abilities: {0: 'drought'},
            height: 3.5,
            weight: 950,
            colors: ['red', 'white', 'black', 'yellow'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },
        'rayquaza': {
            order: indexOrder++,
            token: 'rayquaza',
            name: 'Rayquaza',
            class: 'legendary',
            number: 384,
            types: ['dragon', 'flying'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 105, phAttack: 150, phDefense: 90, spAttack: 150, spDefense: 90, speed: 95},
            abilities: {0: 'air-lock'},
            height: 7,
            weight: 206.5,
            colors: ['green', 'yellow', 'red', 'black'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },

        'jirachi': {
            order: indexOrder++,
            token: 'jirachi',
            name: 'Jirachi',
            class: 'mythical',
            number: 385,
            types: ['steel', 'psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 100, phDefense: 100, spAttack: 100, spDefense: 100, speed: 100},
            abilities: {0: 'serene-grace'},
            height: 0.3,
            weight: 1.1,
            colors: ['yellow', 'white', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },

        'deoxys': {
            order: indexOrder++,
            token: 'deoxys',
            name: 'Deoxys',
            class: 'mythical',
            number: 386,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 50, phAttack: 150, phDefense: 50, spAttack: 150, spDefense: 50, speed: 150},
            abilities: {0: 'pressure'},
            height: 1.7,
            weight: 60.8,
            colors: ['red', 'green', 'brown', 'purple'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
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