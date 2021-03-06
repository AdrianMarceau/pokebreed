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
            isStarterPokemon: true,
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
            isStarterPokemon: true,
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
            isStarterPokemon: true,
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
            isStarterPokemon: true,
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
            isStarterPokemon: true,
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
            isStarterPokemon: true,
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
            isStarterPokemon: true,
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
            isStarterPokemon: true,
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
            isStarterPokemon: true,
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
            colors: ['gray', 'black'],
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
            colors: ['green', 'blue', 'yellow'],
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
            colors: ['green', 'blue', 'red'],
            eggCycles: 15,
            eggGroups: ['water-1', 'grass'],
            prevEvolution: 'lotad',
            nextEvolutions: [{
                species: 'ludicolo', // water-stone
                method: 'type-appeal',
                value: ['water', 'grass'],
                method2: 'level-up',
                value2: 34
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
            colors: ['green', 'yellow', 'brown'],
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
            colors: ['brown', 'black', 'yellow'],
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
            colors: ['brown', 'green', 'white'],
            eggCycles: 15,
            eggGroups: ['field', 'grass'],
            prevEvolution: 'seedot',
            nextEvolutions: [{
                species: 'shiftry', // leaf-stone
                method: 'type-appeal',
                value: ['grass', 'dark'],
                method2: 'level-up',
                value2: 34
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
            colors: ['brown', 'white', 'green'],
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
                value: 'high',
                method2: 'level-up',
                value2: 15
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
                species: 'delcatty', // moon-stone
                method: 'type-appeal',
                value: 'normal',
                method2: 'level-up',
                value2: 20
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

        'meditite': {
            order: indexOrder++,
            token: 'meditite',
            name: 'Meditite',
            number: 307,
            types: ['fighting', 'psychic'],
            baseStats: {hp: 30, phAttack: 40, phDefense: 55, spAttack: 40, spDefense: 55, speed: 60},
            abilities: {0: 'pure-power', hidden: 'telepathy'},
            height: 0.6,
            weight: 11.2,
            colors: ['blue', 'gray'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            nextEvolutions: [{
                species: 'medicham',
                method: 'level-up',
                value: 37
                }]
            },
        'medicham': {
            order: indexOrder++,
            token: 'medicham',
            name: 'Medicham',
            number: 308,
            types: ['fighting', 'psychic'],
            baseStats: {hp: 60, phAttack: 60, phDefense: 75, spAttack: 60, spDefense: 75, speed: 80},
            abilities: {0: 'pure-power', hidden: 'telepathy'},
            height: 1.3,
            weight: 31.5,
            colors: ['red', 'gray', 'yellow'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'meditite'
            },

        'electrike': {
            order: indexOrder++,
            token: 'electrike',
            name: 'Electrike',
            number: 309,
            types: ['electric'],
            baseStats: {hp: 40, phAttack: 45, phDefense: 40, spAttack: 65, spDefense: 40, speed: 65},
            abilities: {0: 'static', 1: 'lightning-rod', hidden: 'minus'},
            height: 0.6,
            weight: 15.2,
            colors: ['green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'manectric',
                method: 'level-up',
                value: 26
                }]
            },
        'manectric': {
            order: indexOrder++,
            token: 'manectric',
            name: 'Manectric',
            number: 310,
            types: ['electric'],
            baseStats: {hp: 70, phAttack: 75, phDefense: 60, spAttack: 105, spDefense: 60, speed: 105},
            abilities: {0: 'static', 1: 'lightning-rod', hidden: 'minus'},
            height: 1.5,
            weight: 40.2,
            colors: ['yellow', 'blue'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'electrike'
            },

        'plusle': {
            order: indexOrder++,
            token: 'plusle',
            name: 'Plusle',
            number: 311,
            types: ['electric'],
            baseStats: {hp: 60, phAttack: 50, phDefense: 40, spAttack: 85, spDefense: 75, speed: 95},
            abilities: {0: 'plus', hidden: 'lightning-rod'},
            height: 0.4,
            weight: 4.2,
            colors: ['yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['fairy']
            },
        'minun': {
            order: indexOrder++,
            token: 'minun',
            name: 'Minun',
            number: 312,
            types: ['electric'],
            baseStats: {hp: 60, phAttack: 40, phDefense: 50, spAttack: 75, spDefense: 85, speed: 95},
            abilities: {0: 'minus', hidden: 'volt-absorb'},
            height: 0.4,
            weight: 4.2,
            colors: ['yellow', 'blue'],
            eggCycles: 20,
            eggGroups: ['fairy']
            },

        'volbeat': {
            order: indexOrder++,
            token: 'volbeat',
            name: 'Volbeat',
            number: 313,
            types: ['bug'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 65, phAttack: 73, phDefense: 75, spAttack: 47, spDefense: 85, speed: 85},
            abilities: {0: 'illuminate', 1: 'swarm', hidden: 'prankster'},
            height: 0.7,
            weight: 17.7,
            colors: ['gray', 'red', 'yellow'],
            eggCycles: 15,
            eggGroups: ['bug', 'human-like'],
            eggPartner: 'illumise',
            altBaseEvolutions: [{
                'species': 'illumise',
                'method': 'chance',
                'value': 60
                }]
            },
        'illumise': {
            order: indexOrder++,
            token: 'illumise',
            name: 'Illumise',
            number: 314,
            types: ['bug'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 65, phAttack: 47, phDefense: 75, spAttack: 73, spDefense: 85, speed: 85},
            abilities: {0: 'oblivious', 1: 'tinted-lens', hidden: 'prankster'},
            height: 0.6,
            weight: 17.7,
            colors: ['gray', 'purple', 'yellow'],
            eggCycles: 15,
            eggGroups: ['bug', 'human-like'],
            eggPartner: 'volbeat',
            altBaseEvolutions: [{
                'species': 'volbeat',
                'method': 'chance',
                'value': 40
                }]
            },

        'roselia': {
            order: indexOrder++,
            token: 'roselia',
            name: 'Roselia',
            number: 315,
            types: ['grass', 'poison'],
            baseStats: {hp: 50, phAttack: 60, phDefense: 45, spAttack: 100, spDefense: 80, speed: 65},
            abilities: {0: 'natural-cure', 1: 'poison-point', hidden: 'leaf-guard'},
            height: 0.3,
            weight: 2,
            colors: ['green', 'red', 'blue', 'yellow'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass']
            },

        'gulpin': {
            order: indexOrder++,
            token: 'gulpin',
            name: 'Gulpin',
            number: 316,
            types: ['poison'],
            baseStats: {hp: 70, phAttack: 43, phDefense: 53, spAttack: 43, spDefense: 53, speed: 40},
            abilities: {0: 'liquid-ooze', 1: 'sticky-hold', hidden: 'gluttony'},
            height: 0.4,
            weight: 10.3,
            colors: ['green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'swalot',
                method: 'level-up',
                value: 26
                }]
            },
        'swalot': {
            order: indexOrder++,
            token: 'swalot',
            name: 'Swalot',
            number: 317,
            types: ['poison'],
            baseStats: {hp: 100, phAttack: 73, phDefense: 83, spAttack: 73, spDefense: 83, speed: 55},
            abilities: {0: 'liquid-ooze', 1: 'sticky-hold', hidden: 'gluttony'},
            height: 1.7,
            weight: 80,
            colors: ['purple', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'gulpin'
            },

        'carvanha': {
            order: indexOrder++,
            token: 'carvanha',
            name: 'Carvanha',
            number: 318,
            types: ['water', 'dark'],
            baseStats: {hp: 45, phAttack: 90, phDefense: 20, spAttack: 65, spDefense: 20, speed: 65},
            abilities: {0: 'rough-skin', hidden: 'speed-boost'},
            height: 0.8,
            weight: 20.8,
            colors: ['yellow', 'red', 'blue', 'black'],
            evos: ['sharpedo'],
            eggCycles: 20,
            eggGroups: ['water-2'],
            nextEvolutions: [{
                species: 'sharpedo',
                method: 'level-up',
                value: 30
                }]
            },
        'sharpedo': {
            order: indexOrder++,
            token: 'sharpedo',
            name: 'Sharpedo',
            number: 319,
            types: ['water', 'dark'],
            baseStats: {hp: 70, phAttack: 120, phDefense: 40, spAttack: 95, spDefense: 40, speed: 95},
            abilities: {0: 'rough-skin', hidden: 'speed-boost'},
            height: 1.8,
            weight: 88.8,
            colors: ['blue', 'white', 'pink', 'yellow', 'black', 'red'],
            eggCycles: 20,
            eggGroups: ['water-2'],
            prevEvolution: 'carvanha'
            },

        'wailmer': {
            order: indexOrder++,
            token: 'wailmer',
            name: 'Wailmer',
            number: 320,
            types: ['water'],
            baseStats: {hp: 130, phAttack: 70, phDefense: 35, spAttack: 70, spDefense: 35, speed: 60},
            abilities: {0: 'water-veil', 1: 'oblivious', hidden: 'pressure'},
            height: 2,
            weight: 130,
            colors: ['blue', 'yellow'],
            eggCycles: 40,
            eggGroups: ['field', 'water-2'],
            nextEvolutions: [{
                species: 'wailord',
                method: 'level-up',
                value: 40
                }]
            },
        'wailord': {
            order: indexOrder++,
            token: 'wailord',
            name: 'Wailord',
            number: 321,
            types: ['water'],
            baseStats: {hp: 170, phAttack: 90, phDefense: 45, spAttack: 90, spDefense: 45, speed: 60},
            abilities: {0: 'water-veil', 1: 'oblivious', hidden: 'pressure'},
            height: 14.5,
            weight: 398,
            colors: ['blue', 'white'],
            eggCycles: 40,
            eggGroups: ['field', 'water-2'],
            prevEvolution: 'wailmer'
            },

        'numel': {
            order: indexOrder++,
            token: 'numel',
            name: 'Numel',
            number: 322,
            types: ['fire', 'ground'],
            baseStats: {hp: 60, phAttack: 60, phDefense: 40, spAttack: 65, spDefense: 45, speed: 35},
            abilities: {0: 'oblivious', 1: 'simple', hidden: 'own-tempo'},
            height: 0.7,
            weight: 24,
            colors: ['yellow', 'green', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'camerupt',
                method: 'level-up',
                value: 33
                }]
            },
        'camerupt': {
            order: indexOrder++,
            token: 'camerupt',
            name: 'Camerupt',
            number: 323,
            types: ['fire', 'ground'],
            baseStats: {hp: 70, phAttack: 100, phDefense: 70, spAttack: 105, spDefense: 75, speed: 40},
            abilities: {0: 'magma-armor', 1: 'solid-rock', hidden: 'anger-point'},
            height: 1.9,
            weight: 220,
            colors: ['red', 'brown', 'blue', 'black'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'numel'
            },

        'torkoal': {
            order: indexOrder++,
            token: 'torkoal',
            name: 'Torkoal',
            number: 324,
            types: ['fire'],
            baseStats: {hp: 70, phAttack: 85, phDefense: 140, spAttack: 85, spDefense: 70, speed: 20},
            abilities: {0: 'white-smoke', 1: 'drought', hidden: 'shell-armor'},
            height: 0.5,
            weight: 80.4,
            colors: ['black', 'orange', 'red'],
            eggCycles: 20,
            eggGroups: ['field'],
            },

        'spoink': {
            order: indexOrder++,
            token: 'spoink',
            name: 'Spoink',
            number: 325,
            types: ['psychic'],
            baseStats: {hp: 60, phAttack: 25, phDefense: 35, spAttack: 70, spDefense: 80, speed: 60},
            abilities: {0: 'thick-fat', 1: 'own-tempo', hidden: 'gluttony'},
            height: 0.7,
            weight: 30.6,
            colors: ['gray', 'pink'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'grumpig',
                method: 'level-up',
                value: 32
                }]
            },
        'grumpig': {
            order: indexOrder++,
            token: 'grumpig',
            name: 'Grumpig',
            number: 326,
            types: ['psychic'],
            baseStats: {hp: 80, phAttack: 45, phDefense: 65, spAttack: 90, spDefense: 110, speed: 80},
            abilities: {0: 'thick-fat', 1: 'own-tempo', hidden: 'gluttony'},
            height: 0.9,
            weight: 71.5,
            colors: ['purple', 'black', 'pink'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'spoink'
            },

        'spinda': {
            order: indexOrder++,
            token: 'spinda',
            name: 'Spinda',
            number: 327,
            formClass: 'random-variant',
            possibleForms: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'],
            randomizeForms: true,
            baseForm: 'p1',
            types: ['normal'],
            baseStats: {hp: 60, phAttack: 60, phDefense: 60, spAttack: 60, spDefense: 60, speed: 60},
            abilities: {0: 'own-tempo', 1: 'tangled-feet', hidden: 'contrary'},
            height: 1.1,
            weight: 5,
            colors: ['brown', 'red'],
            eggCycles: 15,
            eggGroups: ['field', 'human-like']
            },

        'trapinch': {
            order: indexOrder++,
            token: 'trapinch',
            name: 'Trapinch',
            number: 328,
            types: ['ground'],
            baseStats: {hp: 45, phAttack: 100, phDefense: 45, spAttack: 45, spDefense: 45, speed: 10},
            abilities: {0: 'hyper-cutter', 1: 'arena-trap', hidden: 'sheer-force'},
            height: 0.7,
            weight: 15,
            colors: ['orange', 'white'],
            eggCycles: 20,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'vibrava',
                method: 'level-up',
                value: 35
                }]
            },
        'vibrava': {
            order: indexOrder++,
            token: 'vibrava',
            name: 'Vibrava',
            number: 329,
            types: ['ground', 'dragon'],
            baseStats: {hp: 50, phAttack: 70, phDefense: 50, spAttack: 50, spDefense: 50, speed: 70},
            abilities: {0: 'levitate'},
            height: 1.1,
            weight: 15.3,
            colors: ['green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['bug'],
            prevEvolution: 'trapinch',
            nextEvolutions: [{
                species: 'flygon',
                method: 'level-up',
                value: 45
                }]
            },
        'flygon': {
            order: indexOrder++,
            token: 'flygon',
            name: 'Flygon',
            number: 330,
            types: ['ground', 'dragon'],
            baseStats: {hp: 80, phAttack: 100, phDefense: 80, spAttack: 80, spDefense: 80, speed: 100},
            abilities: {0: 'levitate'},
            height: 2,
            weight: 82,
            colors: ['green', 'red'],
            eggCycles: 20,
            eggGroups: ['bug'],
            prevEvolution: 'vibrava'
            },

        'cacnea': {
            order: indexOrder++,
            token: 'cacnea',
            name: 'Cacnea',
            number: 331,
            types: ['grass'],
            baseStats: {hp: 50, phAttack: 85, phDefense: 40, spAttack: 85, spDefense: 40, speed: 35},
            abilities: {0: 'sand-veil', hidden: 'water-absorb'},
            height: 0.4,
            weight: 51.3,
            colors: ['green', 'yellow', 'black'],
            eggCycles: 20,
            eggGroups: ['grass', 'human-like'],
            nextEvolutions: [{
                species: 'cacturne',
                method: 'level-up',
                value: 32
                }]
            },
        'cacturne': {
            order: indexOrder++,
            token: 'cacturne',
            name: 'Cacturne',
            number: 332,
            types: ['grass', 'dark'],
            baseStats: {hp: 70, phAttack: 115, phDefense: 60, spAttack: 115, spDefense: 60, speed: 55},
            abilities: {0: 'sand-veil', hidden: 'water-absorb'},
            height: 1.3,
            weight: 77.4,
            colors: ['green', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['grass', 'human-like'],
            prevEvolution: 'cacnea'
            },

        'swablu': {
            order: indexOrder++,
            token: 'swablu',
            name: 'Swablu',
            number: 333,
            types: ['normal', 'flying'],
            baseStats: {hp: 45, phAttack: 40, phDefense: 60, spAttack: 40, spDefense: 75, speed: 50},
            abilities: {0: 'natural-cure', hidden: 'cloud-nine'},
            height: 0.4,
            weight: 1.2,
            colors: ['blue', 'white'],
            evos: ['altaria'],
            eggCycles: 20,
            eggGroups: ['flying', 'dragon'],
            nextEvolutions: [{
                species: 'altaria',
                method: 'level-up',
                value: 35
                }]
            },
        'altaria': {
            order: indexOrder++,
            token: 'altaria',
            name: 'Altaria',
            number: 334,
            types: ['dragon', 'flying'],
            baseStats: {hp: 75, phAttack: 70, phDefense: 90, spAttack: 70, spDefense: 105, speed: 80},
            abilities: {0: 'natural-cure', hidden: 'cloud-nine'},
            height: 1.1,
            weight: 20.6,
            colors: ['white', 'blue'],
            eggCycles: 20,
            eggGroups: ['flying', 'dragon'],
            prevEvolution: 'swablu'
            },

        'zangoose': {
            order: indexOrder++,
            token: 'zangoose',
            name: 'Zangoose',
            number: 335,
            types: ['normal'],
            baseStats: {hp: 73, phAttack: 115, phDefense: 60, spAttack: 60, spDefense: 60, speed: 90},
            abilities: {0: 'immunity', hidden: 'toxic-boost'},
            height: 1.3,
            weight: 40.3,
            colors: ['white', 'red', 'black'],
            eggCycles: 20,
            eggGroups: ['field']
            },
        'seviper': {
            order: indexOrder++,
            token: 'seviper',
            name: 'Seviper',
            number: 336,
            types: ['poison'],
            baseStats: {hp: 73, phAttack: 100, phDefense: 60, spAttack: 100, spDefense: 60, speed: 65},
            abilities: {0: 'shed-skin', hidden: 'infiltrator'},
            height: 2.7,
            weight: 52.5,
            colors: ['black', 'yellow', 'purple', 'red'],
            eggCycles: 20,
            eggGroups: ['field', 'dragon']
            },

        'lunatone': {
            order: indexOrder++,
            token: 'lunatone',
            name: 'Lunatone',
            number: 337,
            types: ['rock', 'psychic'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 90, phAttack: 55, phDefense: 65, spAttack: 95, spDefense: 85, speed: 70},
            abilities: {0: 'levitate'},
            height: 1,
            weight: 168,
            colors: ['yellow', 'black', 'red'],
            eggCycles: 25,
            eggGroups: ['mineral']
            },
        'solrock': {
            order: indexOrder++,
            token: 'solrock',
            name: 'Solrock',
            number: 338,
            types: ['rock', 'psychic'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 90, phAttack: 95, phDefense: 85, spAttack: 55, spDefense: 65, speed: 70},
            abilities: {0: 'levitate'},
            height: 1.2,
            weight: 154,
            colors: ['orange', 'yellow', 'black', 'red'],
            eggCycles: 25,
            eggGroups: ['mineral']
            },

        'barboach': {
            order: indexOrder++,
            token: 'barboach',
            name: 'Barboach',
            number: 339,
            types: ['water', 'ground'],
            baseStats: {hp: 50, phAttack: 48, phDefense: 43, spAttack: 46, spDefense: 41, speed: 60},
            abilities: {0: 'oblivious', 1: 'anticipation', hidden: 'hydration'},
            height: 0.4,
            weight: 1.9,
            colors: ['gray', 'blue', 'black'],
            eggCycles: 20,
            eggGroups: ['water-2'],
            nextEvolutions: [{
                species: 'whiscash',
                method: 'level-up',
                value: 30
                }]
            },
        'whiscash': {
            order: indexOrder++,
            token: 'whiscash',
            name: 'Whiscash',
            number: 340,
            types: ['water', 'ground'],
            baseStats: {hp: 110, phAttack: 78, phDefense: 73, spAttack: 76, spDefense: 71, speed: 60},
            abilities: {0: 'oblivious', 1: 'anticipation', hidden: 'hydration'},
            height: 0.9,
            weight: 23.6,
            colors: ['blue', 'yellow', 'black'],
            eggCycles: 20,
            eggGroups: ['water-2'],
            prevEvolution: 'barboach'
            },

        'corphish': {
            order: indexOrder++,
            token: 'corphish',
            name: 'Corphish',
            number: 341,
            types: ['water'],
            baseStats: {hp: 43, phAttack: 80, phDefense: 65, spAttack: 50, spDefense: 35, speed: 35},
            abilities: {0: 'hyper-cutter', 1: 'shell-armor', hidden: 'adaptability'},
            height: 0.6,
            weight: 11.5,
            colors: ['red', 'white'],
            eggCycles: 15,
            eggGroups: ['water-1', 'water-3'],
            nextEvolutions: [{
                species: 'crawdaunt',
                method: 'level-up',
                value: 30
                }]
            },
        'crawdaunt': {
            order: indexOrder++,
            token: 'crawdaunt',
            name: 'Crawdaunt',
            number: 342,
            types: ['water', 'dark'],
            baseStats: {hp: 63, phAttack: 120, phDefense: 85, spAttack: 90, spDefense: 55, speed: 55},
            abilities: {0: 'hyper-cutter', 1: 'shell-armor', hidden: 'adaptability'},
            height: 1.1,
            weight: 32.8,
            colors: ['red', 'white', 'yellow', 'blue', 'black'],
            eggCycles: 15,
            eggGroups: ['water-1', 'water-3'],
            prevEvolution: 'corphish'
            },

        'baltoy': {
            order: indexOrder++,
            token: 'baltoy',
            name: 'Baltoy',
            number: 343,
            types: ['ground', 'psychic'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 40, phAttack: 40, phDefense: 55, spAttack: 40, spDefense: 70, speed: 55},
            abilities: {0: 'levitate'},
            height: 0.5,
            weight: 21.5,
            colors: ['brown', 'red'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'claydol',
                method: 'level-up',
                value: 36
                }]
            },
        'claydol': {
            order: indexOrder++,
            token: 'claydol',
            name: 'Claydol',
            number: 344,
            types: ['ground', 'psychic'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 60, phAttack: 70, phDefense: 105, spAttack: 70, spDefense: 120, speed: 75},
            abilities: {0: 'levitate'},
            height: 1.5,
            weight: 108,
            colors: ['black', 'red', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'baltoy'
            },

        'lileep': {
            order: indexOrder++,
            token: 'lileep',
            name: 'Lileep',
            isFossilPokemon: true,
            number: 345,
            types: ['rock', 'grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 66, phAttack: 41, phDefense: 77, spAttack: 61, spDefense: 87, speed: 23},
            abilities: {0: 'suction-cups', hidden: 'storm-drain'},
            height: 1,
            weight: 23.8,
            colors: ['purple', 'pink', 'yellow', 'black'],
            eggCycles: 30,
            eggGroups: ['water-3'],
            nextEvolutions: [{
                species: 'cradily',
                method: 'level-up',
                value: 40
                }]
            },
        'cradily': {
            order: indexOrder++,
            token: 'cradily',
            name: 'Cradily',
            isFossilPokemon: true,
            number: 346,
            types: ['rock', 'grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 86, phAttack: 81, phDefense: 97, spAttack: 81, spDefense: 107, speed: 43},
            abilities: {0: 'suction-cups', hidden: 'storm-drain'},
            height: 1.5,
            weight: 60.4,
            colors: ['green', 'pink', 'yellow', 'black'],
            eggCycles: 30,
            eggGroups: ['water-3'],
            prevEvolution: 'lileep'
            },

        'anorith': {
            order: indexOrder++,
            token: 'anorith',
            name: 'Anorith',
            isFossilPokemon: true,
            number: 347,
            types: ['rock', 'bug'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 45, phAttack: 95, phDefense: 50, spAttack: 40, spDefense: 50, speed: 75},
            abilities: {0: 'battle-armor', hidden: 'swift-swim'},
            height: 0.7,
            weight: 12.5,
            colors: ['green', 'gray', 'black', 'white', 'red'],
            eggCycles: 30,
            eggGroups: ['water-3'],
            nextEvolutions: [{
                species: 'armaldo',
                method: 'level-up',
                value: 40
                }]
            },
        'armaldo': {
            order: indexOrder++,
            token: 'armaldo',
            name: 'Armaldo',
            isFossilPokemon: true,
            number: 348,
            types: ['rock', 'bug'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 75, phAttack: 125, phDefense: 100, spAttack: 70, spDefense: 80, speed: 45},
            abilities: {0: 'battle-armor', hidden: 'swift-swim'},
            height: 1.5,
            weight: 68.2,
            colors: ['blue', 'gray', 'yellow', 'white', 'red'],
            eggCycles: 30,
            eggGroups: ['water-3'],
            prevEvolution: 'anorith'
            },

        'feebas': {
            order: indexOrder++,
            token: 'feebas',
            name: 'Feebas',
            number: 349,
            types: ['water'],
            baseStats: {hp: 20, phAttack: 15, phDefense: 20, spAttack: 10, spDefense: 55, speed: 80},
            abilities: {0: 'swift-wwim', 1: 'oblivious', hidden: 'adaptability'},
            height: 0.6,
            weight: 7.4,
            colors: ['brown', 'blue'],
            eggCycles: 20,
            eggGroups: ['water-1', 'dragon'],
            nextEvolutions: [{
                species: 'milotic',
                method: 'level-up',
                value: 30,
                method2: 'type-surge',
                value2: 'water',
                method3: 'affection',
                value3: 'max'
                }]
            },
        'milotic': {
            order: indexOrder++,
            token: 'milotic',
            name: 'Milotic',
            number: 350,
            types: ['water'],
            baseStats: {hp: 95, phAttack: 60, phDefense: 79, spAttack: 100, spDefense: 125, speed: 81},
            abilities: {0: 'marvel-scale', 1: 'competitive', hidden: 'cute-charm'},
            height: 6.2,
            weight: 162,
            colors: ['yellow', 'pink', 'blue'],
            eggCycles: 20,
            eggGroups: ['water-1', 'dragon'],
            prevEvolution: 'feebas'
            },

        'castform': {  // TODO: Add addition form for sandstorm weather
            order: indexOrder++,
            token: 'castform',
            name: 'Castform',
            number: 351,
            types: ['normal'],
            baseStats: {hp: 70, phAttack: 70, phDefense: 70, spAttack: 70, spDefense: 70, speed: 70},
            abilities: {0: 'forecast'},
            height: 0.3,
            weight: 0.8,
            colors: ['gray', 'white', 'black'],
            eggCycles: 25,
            eggGroups: ['fairy', 'amorphous'],
            nextEvolutions: [{
                species: 'sunny-castform',
                method: 'type-appeal',
                value: 'fire',
                method2: 'level-up',
                value2: 10
                }, {
                species: 'rainy-castform',
                method: 'type-appeal',
                value: 'water',
                method2: 'level-up',
                value2: 10
                }, {
                species: 'snowy-castform',
                method: 'type-appeal',
                value: 'ice',
                method2: 'level-up',
                value2: 10
                }]
            },
        'sunny-castform': {
            order: indexOrder++,
            token: 'sunny-castform',
            name: 'Sunny Castform',
            formClass: 'weather-variant',
            formToken: 'sunny',
            baseForm: 'castform',
            number: 351,
            types: ['fire'],
            baseStats: {hp: 70, phAttack: 70, phDefense: 70, spAttack: 70, spDefense: 70, speed: 70},
            abilities: {0: 'forecast'},
            height: 0.3,
            weight: 0.8,
            colors: ['red', 'orange', 'yellow', 'white', 'black'],
            eggCycles: 25,
            eggGroups: ['fairy', 'amorphous'],
            prevEvolution: 'castform',
            cloneEvolutions: 'castform'
            },
        'rainy-castform': {
            order: indexOrder++,
            token: 'rainy-castform',
            name: 'Rainy Castform',
            formClass: 'weather-variant',
            formToken: 'rainy',
            baseForm: 'castform',
            number: 351,
            types: ['water'],
            baseStats: {hp: 70, phAttack: 70, phDefense: 70, spAttack: 70, spDefense: 70, speed: 70},
            abilities: {0: 'forecast'},
            height: 0.3,
            weight: 0.8,
            colors: ['blue', 'gray', 'black'],
            eggCycles: 25,
            eggGroups: ['fairy', 'amorphous'],
            prevEvolution: 'castform',
            cloneEvolutions: 'castform'
            },
        'snowy-castform': {
            order: indexOrder++,
            token: 'snowy-castform',
            name: 'Snowy Castform',
            formClass: 'weather-variant',
            formToken: 'snowy',
            baseForm: 'castform',
            number: 351,
            types: ['ice'],
            baseStats: {hp: 70, phAttack: 70, phDefense: 70, spAttack: 70, spDefense: 70, speed: 70},
            abilities: {0: 'forecast'},
            height: 0.3,
            weight: 0.8,
            colors: ['purple', 'green', 'black'],
            eggCycles: 25,
            eggGroups: ['fairy', 'amorphous'],
            prevEvolution: 'castform',
            cloneEvolutions: 'castform'
            },

        'kecleon': {
            order: indexOrder++,
            token: 'kecleon',
            name: 'Kecleon',
            number: 352,
            formClass: 'color-variant',
            dynamicForms: true,
            colorizedForms: true,
            excludeFromColorStats: true,
            possibleForms: ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'grey', 'black', 'white', 'brown', 'pink'],
            baseForm: 'green',
            types: ['normal'],
            baseStats: {hp: 60, phAttack: 90, phDefense: 70, spAttack: 60, spDefense: 120, speed: 40},
            abilities: {0: 'color-change', hidden: 'protean'},
            height: 1,
            weight: 22,
            colors: ['green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field']
            },

        'shuppet': {
            order: indexOrder++,
            token: 'shuppet',
            name: 'Shuppet',
            number: 353,
            types: ['ghost'],
            baseStats: {hp: 44, phAttack: 75, phDefense: 35, spAttack: 63, spDefense: 33, speed: 45},
            abilities: {0: 'insomnia', 1: 'frisk', hidden: 'cursed-body'},
            height: 0.6,
            weight: 2.3,
            colors: ['gray', 'black', 'blue', 'yellow'],
            eggCycles: 25,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'banette',
                method: 'level-up',
                value: 37
                }]
            },
        'banette': {
            order: indexOrder++,
            token: 'banette',
            name: 'Banette',
            number: 354,
            types: ['ghost'],
            baseStats: {hp: 64, phAttack: 115, phDefense: 65, spAttack: 83, spDefense: 63, speed: 65},
            abilities: {0: 'insomnia', 1: 'frisk', hidden: 'cursed-body'},
            height: 1.1,
            weight: 12.5,
            colors: ['gray', 'yellow', 'red'],
            eggCycles: 25,
            eggGroups: ['amorphous'],
            prevEvolution: 'shuppet'
            },

        'duskull': {
            order: indexOrder++,
            token: 'duskull',
            name: 'Duskull',
            number: 355,
            types: ['ghost'],
            baseStats: {hp: 20, phAttack: 40, phDefense: 90, spAttack: 30, spDefense: 90, speed: 25},
            abilities: {0: 'levitate', hidden: 'frisk'},
            height: 0.8,
            weight: 15,
            colors: ['black', 'white', 'red'],
            eggCycles: 25,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'dusclops',
                method: 'level-up',
                value: 37
                }]
            },
        'dusclops': {
            order: indexOrder++,
            token: 'dusclops',
            name: 'Dusclops',
            number: 356,
            types: ['ghost'],
            baseStats: {hp: 40, phAttack: 70, phDefense: 130, spAttack: 60, spDefense: 130, speed: 25},
            abilities: {0: 'pressure', hidden: 'frisk'},
            height: 1.6,
            weight: 30.6,
            colors: ['gray', 'white', 'red'],
            eggCycles: 25,
            eggGroups: ['amorphous'],
            prevEvolution: 'duskull'
            },

        'tropius': {  // TODO: Make the Nanab Berries ripen over time
            order: indexOrder++,
            token: 'tropius',
            name: 'Tropius',
            number: 357,
            types: ['grass', 'flying'],
            baseStats: {hp: 99, phAttack: 68, phDefense: 83, spAttack: 72, spDefense: 87, speed: 51},
            abilities: {0: 'chlorophyll', 1: 'solar-power', hidden: 'harvest'},
            height: 2,
            weight: 100,
            colors: ['green', 'brown', 'yellow'],
            eggCycles: 25,
            eggGroups: ['monster', 'grass']
            },

        'chimecho': {
            order: indexOrder++,
            token: 'chimecho',
            name: 'Chimecho',
            number: 358,
            types: ['psychic'],
            baseStats: {hp: 75, phAttack: 50, phDefense: 80, spAttack: 95, spDefense: 90, speed: 65},
            abilities: {0: 'levitate'},
            height: 0.6,
            weight: 1,
            colors: ['white', 'blue', 'red', 'yellow'],
            eggCycles: 25,
            eggGroups: ['amorphous']
            },

        'absol': {
            order: indexOrder++,
            token: 'absol',
            name: 'Absol',
            number: 359,
            types: ['dark'],
            baseStats: {hp: 65, phAttack: 130, phDefense: 60, spAttack: 75, spDefense: 60, speed: 75},
            abilities: {0: 'pressure', 1: 'super-luck', hidden: 'justified'},
            height: 1.2,
            weight: 47,
            colors: ['white', 'black', 'red'],
            eggCycles: 25,
            eggGroups: ['field']
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

        'snorunt': {
            order: indexOrder++,
            token: 'snorunt',
            name: 'Snorunt',
            number: 361,
            types: ['ice'],
            baseStats: {hp: 50, phAttack: 50, phDefense: 50, spAttack: 50, spDefense: 50, speed: 50},
            abilities: {0: 'inner-focus', 1: 'ice-body', hidden: 'moody'},
            height: 0.7,
            weight: 16.8,
            colors: ['yellow', 'black', 'orange', 'blue'],
            eggCycles: 20,
            eggGroups: ['fairy', 'mineral'],
            nextEvolutions: [{
                species: 'glalie',
                method: 'level-up',
                value: 42
                }]
            },
        'glalie': {
            order: indexOrder++,
            token: 'glalie',
            name: 'Glalie',
            number: 362,
            types: ['ice'],
            baseStats: {hp: 80, phAttack: 80, phDefense: 80, spAttack: 80, spDefense: 80, speed: 80},
            abilities: {0: 'inner-focus', 1: 'ice-body', hidden: 'moody'},
            height: 1.5,
            weight: 256.5,
            colors: ['gray', 'black', 'blue', 'white'],
            eggCycles: 20,
            eggGroups: ['fairy', 'mineral'],
            prevEvolution: 'snorunt'
            },

        'spheal': {
            order: indexOrder++,
            token: 'spheal',
            name: 'Spheal',
            number: 363,
            types: ['ice', 'water'],
            baseStats: {hp: 70, phAttack: 40, phDefense: 50, spAttack: 55, spDefense: 50, speed: 25},
            abilities: {0: 'thick-fat', 1: 'ice-body', hidden: 'oblivious'},
            height: 0.8,
            weight: 39.5,
            colors: ['blue', 'yellow', 'white', 'black'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            nextEvolutions: [{
                species: 'sealeo',
                method: 'level-up',
                value: 32
                }]
            },
        'sealeo': {
            order: indexOrder++,
            token: 'sealeo',
            name: 'Sealeo',
            number: 364,
            types: ['ice', 'water'],
            baseStats: {hp: 90, phAttack: 60, phDefense: 70, spAttack: 75, spDefense: 70, speed: 45},
            abilities: {0: 'thick-fat', 1: 'ice-body', hidden: 'oblivious'},
            height: 1.1,
            weight: 87.6,
            colors: ['blue', 'yellow', 'white', 'black'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'spheal',
            nextEvolutions: [{
                species: 'walrein',
                method: 'level-up',
                value: 44
                }]
            },
        'walrein': {
            order: indexOrder++,
            token: 'walrein',
            name: 'Walrein',
            number: 365,
            types: ['ice', 'water'],
            baseStats: {hp: 110, phAttack: 80, phDefense: 90, spAttack: 95, spDefense: 90, speed: 65},
            abilities: {0: 'thick-fat', 1: 'ice-body', hidden: 'oblivious'},
            height: 1.4,
            weight: 150.6,
            colors: ['blue', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'sealeo'
            },

        'clamperl': {
            order: indexOrder++,
            token: 'clamperl',
            name: 'Clamperl',
            number: 366,
            types: ['water'],
            baseStats: {hp: 35, phAttack: 64, phDefense: 85, spAttack: 74, spDefense: 55, speed: 32},
            abilities: {0: 'shell-armor', hidden: 'rattled'},
            height: 0.4,
            weight: 52.5,
            colors: ['blue', 'pink'],
            eggCycles: 20,
            eggGroups: ['water-1'],
            nextEvolutions: [{
                species: 'huntail',
                method: 'stat-appeal',
                value: 'phAttack',
                method2: 'level-up',
                value2: 30
                }, {
                species: 'gorebyss',
                method: 'stat-appeal',
                value: 'spAttack',
                method2: 'level-up',
                value2: 30
                }]
            },
        'huntail': {
            order: indexOrder++,
            token: 'huntail',
            name: 'Huntail',
            number: 367,
            types: ['water'],
            baseStats: {hp: 55, phAttack: 104, phDefense: 105, spAttack: 94, spDefense: 75, speed: 52},
            abilities: {0: 'swift-swim', hidden: 'water-veil'},
            height: 1.7,
            weight: 27,
            colors: ['blue', 'orange', 'white', 'pink'],
            eggCycles: 20,
            eggGroups: ['water-1'],
            prevEvolution: 'clamperl'
            },
        'gorebyss': {
            order: indexOrder++,
            token: 'gorebyss',
            name: 'Gorebyss',
            number: 368,
            types: ['water'],
            baseStats: {hp: 55, phAttack: 84, phDefense: 105, spAttack: 114, spDefense: 75, speed: 52},
            abilities: {0: 'swift-swim', hidden: 'hydration'},
            height: 1.8,
            weight: 22.6,
            colors: ['pink', 'purple', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1'],
            prevEvolution: 'clamperl'
            },

        'relicanth': {
            order: indexOrder++,
            token: 'relicanth',
            name: 'Relicanth',
            number: 369,
            types: ['water', 'rock'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 100, phAttack: 90, phDefense: 130, spAttack: 45, spDefense: 65, speed: 55},
            abilities: {0: 'swift Swim', 1: 'rock-head', hidden: 'sturdy'},
            height: 1,
            weight: 23.4,
            colors: ['gray', 'brown', 'red'],
            eggCycles: 40,
            eggGroups: ['water-1', 'water-2']
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

        'bagon': {
            order: indexOrder++,
            token: 'bagon',
            name: 'Bagon',
            number: 371,
            types: ['dragon'],
            baseStats: {hp: 45, phAttack: 75, phDefense: 60, spAttack: 40, spDefense: 30, speed: 50},
            abilities: {0: 'rock-head', hidden: 'sheer-force'},
            height: 0.6,
            weight: 42.1,
            colors: ['blue', 'gray', 'yellow'],
            eggCycles: 40,
            eggGroups: ['dragon'],
            nextEvolutions: [{
                species: 'shelgon',
                method: 'level-up',
                value: 30
                }]
            },
        'shelgon': {
            order: indexOrder++,
            token: 'shelgon',
            name: 'Shelgon',
            number: 372,
            types: ['dragon'],
            baseStats: {hp: 65, phAttack: 95, phDefense: 100, spAttack: 60, spDefense: 50, speed: 50},
            abilities: {0: 'rock-head', hidden: 'overcoat'},
            height: 1.1,
            weight: 110.5,
            colors: ['white', 'gray'],
            eggCycles: 40,
            eggGroups: ['dragon'],
            prevEvolution: 'bagon',
            nextEvolutions: [{
                species: 'salamence',
                method: 'level-up',
                value: 50
                }]
            },
        'salamence': {
            order: indexOrder++,
            token: 'salamence',
            name: 'Salamence',
            number: 373,
            types: ['dragon', 'flying'],
            baseStats: {hp: 95, phAttack: 135, phDefense: 80, spAttack: 110, spDefense: 80, speed: 100},
            abilities: {0: 'intimidate', hidden: 'moxie'},
            height: 1.5,
            weight: 102.6,
            colors: ['blue', 'red', 'white'],
            eggCycles: 40,
            eggGroups: ['dragon'],
            prevEvolution: 'shelgon'
            },

        'beldum': {
            order: indexOrder++,
            token: 'beldum',
            name: 'Beldum',
            number: 374,
            types: ['steel', 'psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 40, phAttack: 55, phDefense: 80, spAttack: 35, spDefense: 60, speed: 30},
            abilities: {0: 'clear-body', hidden: 'light-metal'},
            height: 0.6,
            weight: 95.2,
            colors: ['blue', 'red'],
            eggCycles: 40,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'metang',
                method: 'level-up',
                value: 20
                }]
            },
        'metang': {
            order: indexOrder++,
            token: 'metang',
            name: 'Metang',
            number: 375,
            types: ['steel', 'psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 60, phAttack: 75, phDefense: 100, spAttack: 55, spDefense: 80, speed: 50},
            abilities: {0: 'clear-body', hidden: 'light-metal'},
            height: 1.2,
            weight: 202.5,
            colors: ['blue', 'gray', 'red'],
            eggCycles: 40,
            eggGroups: ['mineral'],
            prevEvolution: 'beldum',
            nextEvolutions: [{
                species: 'metagross',
                method: 'level-up',
                value: 45
                }]
            },
        'metagross': {
            order: indexOrder++,
            token: 'metagross',
            name: 'Metagross',
            number: 376,
            types: ['steel', 'psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 80, phAttack: 135, phDefense: 130, spAttack: 95, spDefense: 90, speed: 70},
            abilities: {0: 'clear-body', hidden: 'light-metal'},
            height: 1.6,
            weight: 550,
            colors: ['blue', 'gray', 'red'],
            eggCycles: 40,
            eggGroups: ['mineral'],
            prevEvolution: 'metang'
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
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'attack-deoxys',
                method: 'burst-evolution',
                value: 'attack-surge',
                method2: 'stat-appeal',
                value2: 'phAttack'
                }, {
                species: 'defense-deoxys',
                method: 'burst-evolution',
                value: 'defense-surge',
                method2: 'stat-appeal',
                value2: 'phDefense'
                }, {
                species: 'speed-deoxys',
                method: 'burst-evolution',
                value: 'speed-surge',
                method2: 'stat-appeal',
                value2: 'speed'
                }]
            },
        'attack-deoxys': {
            order: indexOrder++,
            token: 'attack-deoxys',
            name: 'Attack Deoxys',
            class: 'mythical',
            formClass: 'burst-evolution',
            formToken: 'attack',
            baseSpecies: 'deoxys',
            number: 386,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 50, phAttack: 180, phDefense: 20, spAttack: 180, spDefense: 20, speed: 150},
            abilities: {0: 'pressure'},
            height: 1.7,
            weight: 60.8,
            colors: ['red', 'green', 'brown', 'purple'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'deoxys'
            },
        'defense-deoxys': {
            order: indexOrder++,
            token: 'defense-deoxys',
            name: 'Defense Deoxys',
            class: 'mythical',
            formClass: 'burst-evolution',
            formToken: 'defense',
            baseSpecies: 'deoxys',
            number: 386,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 50, phAttack: 70, phDefense: 160, spAttack: 70, spDefense: 160, speed: 90},
            abilities: {0: 'pressure'},
            height: 1.7,
            weight: 60.8,
            colors: ['red', 'green', 'brown', 'purple'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'deoxys'
            },
        'speed-deoxys': {
            order: indexOrder++,
            token: 'speed-deoxys',
            name: 'Speed Deoxys',
            class: 'mythical',
            formClass: 'burst-evolution',
            formToken: 'speed',
            baseSpecies: 'deoxys',
            number: 386,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 50, phAttack: 95, phDefense: 90, spAttack: 95, spDefense: 90, speed: 180},
            abilities: {0: 'pressure'},
            height: 1.7,
            weight: 60.8,
            colors: ['red', 'green', 'brown', 'purple'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'deoxys'
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

    // Update previous gen pokemon with known species appeal data
    thisIndex.addSpeciesAppealValues([

        // Predator/prey relationships
        {base: 'taillow', species: 'wurmple'},
        {base: 'swellow', species: 'wurmple'},
        {base: 'scyther', species: 'wurmple'},

        // Symbiotic relationships
        {base: 'luvdisc', species: 'corsola'},
        {base: 'plusle', species: 'minun'},
        {base: 'minun', species: 'plusle'},
        {base: 'solrock', species: 'lunatone'},
        {base: 'lunatone', species: 'solrock'},

        // Rival relationships
        {base: 'zangoose', species: 'seviper'},
        {base: 'seviper', species: 'zangoose'},

        // Romantic relationships
        {base: 'volbeat', species: 'illumise'},

        // Feeding/pollination relationships
        {base: 'beautifly', species: 'victreebel'},
        {base: 'beautifly', species: 'lilligant'},
        {base: 'dustox', species: 'gloom'},
        {base: 'yanma', species: 'cacnea'},

        // One-sided (theft) relationships
        {base: 'spoink', species: 'clamperl'},

        // Mistaken identify relationships
        {base: 'illumise', species: 'lanturn'},

        // Legendary trigger relationships
        {base: 'regirock', species: 'relicanth'},
        {base: 'regice', species: 'relicanth'},
        {base: 'registeel', species: 'relicanth'},
        {base: 'rayquaza', species: 'deoxys'},
        {base: 'deoxys', species: 'rayquaza'},
        {base: 'deoxys', species: 'mega-rayquaza'},

        // Miscellaneous appeal
        {base: 'porygon2', species: 'deoxys'},

        ]);

    // Add each of this region's starter pokemon to the global reward index
    PokeBoxAPI.addStarterRewardToIndex({region: 'hoenn', gen: 3, count: 251, 'species': ['treecko', 'torchic', 'mudkip']});


})();
