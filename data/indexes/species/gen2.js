/*
    * GLOBAL POKEMON INDEX DATA (JOHTO / GEN 2)
    * This data was collected from Zarel for Pokemon Showdown
    * via: https://github.com/Zarel/Pokemon-Showdown/blob/master/data/pokedex.js
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration(2);
    thisIndex.setRegion('johto');

    // Add the generation's list of base species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Base Pokedex

        'chikorita': {
            order: indexOrder++,
            token: 'chikorita',
            name: 'Chikorita',
            isStarterPokemon: true,
            number: 152,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 45, phAttack: 49, phDefense: 65, spAttack: 49, spDefense: 65, speed: 45},
            abilities: {0: 'overgrow', hidden: 'leaf-guard'},
            height: 0.9,
            weight: 6.4,
            colors: ['green', 'red'],
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            nextEvolutions: [{
                species: 'bayleef',
                method: 'level-up',
                value: 16
                }]
            },
        'bayleef': {
            order: indexOrder++,
            token: 'bayleef',
            name: 'Bayleef',
            isStarterPokemon: true,
            number: 153,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 60, phAttack: 62, phDefense: 80, spAttack: 63, spDefense: 80, speed: 60},
            abilities: {0: 'overgrow', hidden: 'leaf-guard'},
            height: 1.2,
            weight: 15.8,
            colors: ['yellow', 'green', 'red'],
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            prevEvolution: 'chikorita',
            nextEvolutions: [{
                species: 'meganium',
                method: 'level-up',
                value: 32
                }]
            },
        'meganium': {
            order: indexOrder++,
            token: 'meganium',
            name: 'Meganium',
            isStarterPokemon: true,
            number: 154,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 80, phAttack: 82, phDefense: 100, spAttack: 83, spDefense: 100, speed: 80},
            abilities: {0: 'overgrow', hidden: 'leaf-guard'},
            height: 1.8,
            weight: 100.5,
            colors: ['green', 'pink', 'yellow'],
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            prevEvolution: 'bayleef'
            },

        'cyndaquil': {
            order: indexOrder++,
            token: 'cyndaquil',
            name: 'Cyndaquil',
            isStarterPokemon: true,
            number: 155,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 39, phAttack: 52, phDefense: 43, spAttack: 60, spDefense: 50, speed: 65},
            abilities: {0: 'blaze', hidden: 'flash-fire'},
            height: 0.5,
            weight: 7.9,
            colors: ['yellow', 'black', 'red'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'quilava',
                method: 'level-up',
                value: 14
                }]
            },
        'quilava': {
            order: indexOrder++,
            token: 'quilava',
            name: 'Quilava',
            isStarterPokemon: true,
            number: 156,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 58, phAttack: 64, phDefense: 58, spAttack: 80, spDefense: 65, speed: 80},
            abilities: {0: 'blaze', hidden: 'flash-fire'},
            height: 0.9,
            weight: 19,
            colors: ['yellow', 'black', 'orange'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'cyndaquil',
            nextEvolutions: [{
                species: 'typhlosion',
                method: 'level-up',
                value: 36
                }]
            },
        'typhlosion': {
            order: indexOrder++,
            token: 'typhlosion',
            name: 'Typhlosion',
            isStarterPokemon: true,
            number: 157,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 78, phAttack: 84, phDefense: 78, spAttack: 109, spDefense: 85, speed: 100},
            abilities: {0: 'blaze', hidden: 'flash-fire'},
            height: 1.7,
            weight: 79.5,
            colors: ['yellow', 'black', 'orange', 'red'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'quilava'
            },

        'totodile': {
            order: indexOrder++,
            token: 'totodile',
            name: 'Totodile',
            isStarterPokemon: true,
            number: 158,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 50, phAttack: 65, phDefense: 64, spAttack: 44, spDefense: 48, speed: 43},
            abilities: {0: 'torrent', hidden: 'sheer-force'},
            height: 0.6,
            weight: 9.5,
            colors: ['blue', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            nextEvolutions: [{
                species: 'croconaw',
                method: 'level-up',
                value: 18
                }]
            },
        'croconaw': {
            order: indexOrder++,
            token: 'croconaw',
            name: 'Croconaw',
            isStarterPokemon: true,
            number: 159,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 65, phAttack: 80, phDefense: 80, spAttack: 59, spDefense: 63, speed: 58},
            abilities: {0: 'torrent', hidden: 'sheer-force'},
            height: 1.1,
            weight: 25,
            colors: ['yellow', 'blue', 'red'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            prevEvolution: 'totodile',
            nextEvolutions: [{
                species: 'feraligatr',
                method: 'level-up',
                value: 30
                }]
            },
        'feraligatr': {
            order: indexOrder++,
            token: 'feraligatr',
            name: 'Feraligatr',
            isStarterPokemon: true,
            number: 160,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 85, phAttack: 105, phDefense: 100, spAttack: 79, spDefense: 83, speed: 78},
            abilities: {0: 'torrent', hidden: 'sheer-force'},
            height: 2.3,
            weight: 88.8,
            colors: ['blue', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            prevEvolution: 'croconaw'
            },

        'sentret': {
            order: indexOrder++,
            token: 'sentret',
            name: 'Sentret',
            number: 161,
            types: ['normal'],
            baseStats: {hp: 35, phAttack: 46, phDefense: 34, spAttack: 35, spDefense: 45, speed: 20},
            abilities: {0: 'run-away', 1: 'keen-eye', hidden: 'frisk'},
            height: 0.8,
            weight: 6,
            colors: ['brown', 'black', 'white'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'furret',
                method: 'level-up',
                value: 15
                }]
            },
        'furret': {
            order: indexOrder++,
            token: 'furret',
            name: 'Furret',
            number: 162,
            types: ['normal'],
            baseStats: {hp: 85, phAttack: 76, phDefense: 64, spAttack: 45, spDefense: 55, speed: 90},
            abilities: {0: 'run-away', 1: 'keen-eye', hidden: 'frisk'},
            height: 1.8,
            weight: 32.5,
            colors: ['brown', 'yellow'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'sentret'
            },

        'hoothoot': {
            order: indexOrder++,
            token: 'hoothoot',
            name: 'Hoothoot',
            number: 163,
            types: ['normal', 'flying'],
            baseStats: {hp: 60, phAttack: 30, phDefense: 30, spAttack: 36, spDefense: 56, speed: 50},
            abilities: {0: 'insomnia', 1: 'keen-eye', hidden: 'tinted-lens'},
            height: 0.7,
            weight: 21.2,
            colors: ['brown', 'black', 'red'],
            eggCycles: 15,
            eggGroups: ['flying'],
            nextEvolutions: [{
                species: 'noctowl',
                method: 'level-up',
                value: 20
                }]
            },
        'noctowl': {
            order: indexOrder++,
            token: 'noctowl',
            name: 'Noctowl',
            number: 164,
            types: ['normal', 'flying'],
            baseStats: {hp: 100, phAttack: 50, phDefense: 50, spAttack: 86, spDefense: 96, speed: 70},
            abilities: {0: 'insomnia', 1: 'keen-eye', hidden: 'tinted-lens'},
            height: 1.6,
            weight: 40.8,
            colors: ['brown', 'yellow'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'hoothoot'
            },

        'ledyba': {
            order: indexOrder++,
            token: 'ledyba',
            name: 'Ledyba',
            number: 165,
            types: ['bug', 'flying'],
            baseStats: {hp: 40, phAttack: 20, phDefense: 30, spAttack: 40, spDefense: 80, speed: 55},
            abilities: {0: 'swarm', 1: 'early-bird', hidden: 'rattled'},
            height: 1,
            weight: 10.8,
            colors: ['red', 'black', 'yellow', 'white'],
            eggCycles: 15,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'ledian',
                method: 'level-up',
                value: 18
                }]
            },
        'ledian': {
            order: indexOrder++,
            token: 'ledian',
            name: 'Ledian',
            number: 166,
            types: ['bug', 'flying'],
            baseStats: {hp: 55, phAttack: 35, phDefense: 50, spAttack: 55, spDefense: 110, speed: 85},
            abilities: {0: 'swarm', 1: 'early-bird', hidden: 'iron-fist'},
            height: 1.4,
            weight: 35.6,
            colors: ['red', 'yellow', 'black', 'white'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'ledyba'
            },

        'spinarak': {
            order: indexOrder++,
            token: 'spinarak',
            name: 'Spinarak',
            number: 167,
            types: ['bug', 'poison'],
            baseStats: {hp: 40, phAttack: 60, phDefense: 40, spAttack: 40, spDefense: 40, speed: 30},
            abilities: {0: 'swarm', 1: 'insomnia', hidden: 'sniper'},
            height: 0.5,
            weight: 8.5,
            colors: ['green', 'black', 'yellow', 'white', 'white'],
            eggCycles: 15,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'ariados',
                method: 'level-up',
                value: 22
                }]
            },
        'ariados': {
            order: indexOrder++,
            token: 'ariados',
            name: 'Ariados',
            number: 168,
            types: ['bug', 'poison'],
            baseStats: {hp: 70, phAttack: 90, phDefense: 70, spAttack: 60, spDefense: 70, speed: 40},
            abilities: {0: 'swarm', 1: 'insomnia', hidden: 'sniper'},
            height: 1.1,
            weight: 33.5,
            colors: ['red', 'yellow', 'black', 'purple', 'white'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'spinarak'
            },

        'crobat': {
            order: thisIndex.afterOrder('golbat'),
            token: 'crobat',
            name: 'Crobat',
            number: 169,
            types: ['poison', 'flying'],
            baseStats: {hp: 85, phAttack: 90, phDefense: 80, spAttack: 70, spDefense: 80, speed: 130},
            abilities: {0: 'inner-focus', hidden: 'infiltrator'},
            height: 1.8,
            weight: 75,
            colors: ['purple', 'blue', 'yellow', 'red'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'golbat'
            },

        'chinchou': {
            order: indexOrder++,
            token: 'chinchou',
            name: 'Chinchou',
            number: 170,
            types: ['water', 'electric'],
            baseStats: {hp: 75, phAttack: 38, phDefense: 38, spAttack: 56, spDefense: 56, speed: 67},
            abilities: {0: 'volt-absorb', 1: 'illuminate', hidden: 'water-absorb'},
            height: 0.5,
            weight: 12,
            colors: ['blue', 'yellow'],
            eggCycles: 20,
            eggGroups: ['water-2'],
            nextEvolutions: [{
                species: 'lanturn',
                method: 'level-up',
                value: 27
                }]
            },
        'lanturn': {
            order: indexOrder++,
            token: 'lanturn',
            name: 'Lanturn',
            number: 171,
            types: ['water', 'electric'],
            baseStats: {hp: 125, phAttack: 58, phDefense: 58, spAttack: 76, spDefense: 76, speed: 67},
            abilities: {0: 'volt-absorb', 1: 'illuminate', hidden: 'water-absorb'},
            height: 1.2,
            weight: 22.5,
            colors: ['blue', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['water-2'],
            prevEvolution: 'chinchou'
            },

        pichu: {
            order: thisIndex.beforeOrder('pikachu'),
            token: 'pichu',
            name: 'Pichu',
            class: 'baby',
            number: 172,
            types: ['electric'],
            baseStats: {hp: 20, phAttack: 40, phDefense: 15, spAttack: 35, spDefense: 35, speed: 60},
            abilities: {0: 'static', hidden: 'lightning-rod'},
            height: 0.3,
            weight: 2,
            colors: ['yellow', 'black', 'red'],
            eggCycles: 10,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'pikachu',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 15
                }]
            },

        'cleffa': {
            order: thisIndex.beforeOrder('clefairy'),
            token: 'cleffa',
            name: 'Cleffa',
            class: 'baby',
            number: 173,
            types: ['fairy'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 50, phAttack: 25, phDefense: 28, spAttack: 45, spDefense: 55, speed: 15},
            abilities: {0: 'cute-charm', 1: 'magic-guard', hidden: 'friend-guard'},
            height: 0.3,
            weight: 3,
            colors: ['pink', 'brown'],
            eggCycles: 10,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'clefairy',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 15
                }]
            },

        'igglybuff': {
            order: thisIndex.beforeOrder('jigglypuff'),
            token: 'igglybuff',
            name: 'Igglybuff',
            class: 'baby',
            number: 174,
            types: ['normal', 'fairy'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 90, phAttack: 30, phDefense: 15, spAttack: 40, spDefense: 20, speed: 15},
            abilities: {0: 'cute-charm', 1: 'magic-guard', hidden: 'friend-guard'},
            height: 0.3,
            weight: 1,
            colors: ['pink', 'red'],
            eggCycles: 10,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'jigglypuff',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 15
                }]
            },

        'togepi': {
            order: indexOrder++,
            token: 'togepi',
            name: 'Togepi',
            class: 'baby',
            hasAncientPower: true,
            number: 175,
            types: ['fairy'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 35, phAttack: 20, phDefense: 65, spAttack: 40, spDefense: 65, speed: 20},
            abilities: {0: 'hustle', 1: 'serene-grace', hidden: 'super-luck'},
            height: 0.3,
            weight: 1.5,
            colors: ['white', 'red', 'blue'],
            eggCycles: 10,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'togetic',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 15
                }]
            },
        'togetic': {
            order: indexOrder++,
            token: 'togetic',
            name: 'Togetic',
            hasAncientPower: true,
            number: 176,
            types: ['fairy', 'flying'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 55, phAttack: 40, phDefense: 85, spAttack: 80, spDefense: 105, speed: 40},
            abilities: {0: 'hustle', 1: 'serene-grace', hidden: 'super-luck'},
            height: 0.6,
            weight: 3.2,
            colors: ['white', 'red', 'blue'],
            eggCycles: 10,
            eggGroups: ['flying', 'fairy'],
            prevEvolution: 'togepi'
            },

        'natu': {
            order: indexOrder++,
            token: 'natu',
            name: 'Natu',
            number: 177,
            types: ['psychic', 'flying'],
            baseStats: {hp: 40, phAttack: 50, phDefense: 45, spAttack: 70, spDefense: 45, speed: 70},
            abilities: {0: 'synchronize', 1: 'early-bird', hidden: 'magic-bounce'},
            height: 0.2,
            weight: 2,
            colors: ['green', 'red', 'yellow', 'black'],
            eggCycles: 20,
            eggGroups: ['flying'],
            nextEvolutions: [{
                species: 'xatu',
                method: 'level-up',
                value: 25
                }]
            },
        'xatu': {
            order: indexOrder++,
            token: 'xatu',
            name: 'Xatu',
            number: 178,
            types: ['psychic', 'flying'],
            baseStats: {hp: 65, phAttack: 75, phDefense: 70, spAttack: 95, spDefense: 70, speed: 95},
            abilities: {0: 'synchronize', 1: 'early-bird', hidden: 'magic-bounce'},
            height: 1.5,
            weight: 15,
            colors: ['green', 'white', 'red', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['flying'],
            prevEvolution: 'natu'
            },

        'mareep': {
            order: indexOrder++,
            token: 'mareep',
            name: 'Mareep',
            number: 179,
            types: ['electric'],
            baseStats: {hp: 55, phAttack: 40, phDefense: 40, spAttack: 65, spDefense: 45, speed: 35},
            abilities: {0: 'static', hidden: 'plus'},
            height: 0.6,
            weight: 7.8,
            colors: ['white', 'blue', 'yellow', 'black', 'orange'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            nextEvolutions: [{
                species: 'flaaffy',
                method: 'level-up',
                value: 15
                }]
            },
        'flaaffy': {
            order: indexOrder++,
            token: 'flaaffy',
            name: 'Flaaffy',
            number: 180,
            types: ['electric'],
            baseStats: {hp: 70, phAttack: 55, phDefense: 55, spAttack: 80, spDefense: 60, speed: 45},
            abilities: {0: 'static', hidden: 'plus'},
            height: 0.8,
            weight: 13.3,
            colors: ['pink', 'white', 'black', 'blue'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            prevEvolution: 'mareep',
            nextEvolutions: [{
                species: 'ampharos',
                method: 'level-up',
                value: 30
                }]
            },
        'ampharos': {
            order: indexOrder++,
            token: 'ampharos',
            name: 'Ampharos',
            number: 181,
            types: ['electric'],
            baseStats: {hp: 90, phAttack: 75, phDefense: 85, spAttack: 115, spDefense: 90, speed: 55},
            abilities: {0: 'static', hidden: 'plus'},
            height: 1.4,
            weight: 61.5,
            colors: ['yellow', 'white', 'black', 'red'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            prevEvolution: 'flaaffy'
            },

        'bellossom': {
            order: thisIndex.afterOrder('vileplume'),
            token: 'bellossom',
            name: 'Bellossom',
            number: 182,
            types: ['grass'],
            baseStats: {hp: 75, phAttack: 80, phDefense: 95, spAttack: 90, spDefense: 100, speed: 50},
            abilities: {0: 'chlorophyll', hidden: 'healer'},
            height: 0.4,
            weight: 5.8,
            colors: ['green', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'gloom'
            },

        'marill': {
            order: indexOrder++,
            token: 'marill',
            name: 'Marill',
            number: 183,
            types: ['water', 'fairy'],
            baseStats: {hp: 70, phAttack: 20, phDefense: 50, spAttack: 20, spDefense: 50, speed: 40},
            abilities: {0: 'thick-fat', 1: 'huge-power', hidden: 'sap-sipper'},
            height: 0.4,
            weight: 8.5,
            colors: ['blue', 'white', 'red'],
            eggCycles: 10,
            eggGroups: ['water-1', 'fairy'],
            nextEvolutions: [{
                species: 'azumarill',
                method: 'level-up',
                value: 18
                }]
            },
        'azumarill': {
            order: indexOrder++,
            token: 'azumarill',
            name: 'Azumarill',
            number: 184,
            types: ['water', 'fairy'],
            baseStats: {hp: 100, phAttack: 50, phDefense: 80, spAttack: 60, spDefense: 80, speed: 50},
            abilities: {0: 'thick-fat', 1: 'huge-power', hidden: 'sap-sipper'},
            height: 0.8,
            weight: 28.5,
            colors: ['blue', 'white', 'pink'],
            eggCycles: 10,
            eggGroups: ['water-1', 'fairy'],
            prevEvolution: 'marill'
            },

        'sudowoodo': {
            order: indexOrder++,
            token: 'sudowoodo',
            name: 'Sudowoodo',
            number: 185,
            types: ['rock'],
            baseStats: {hp: 70, phAttack: 100, phDefense: 115, spAttack: 30, spDefense: 65, speed: 30},
            abilities: {0: 'sturdy', 1: 'rock-head', hidden: 'rattled'},
            height: 1.2,
            weight: 38,
            colors: ['brown', 'green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            },

        'politoed': {
            order: thisIndex.afterOrder('poliwrath'),
            token: 'politoed',
            name: 'Politoed',
            number: 186,
            types: ['water'],
            baseStats: {hp: 90, phAttack: 75, phDefense: 75, spAttack: 90, spDefense: 100, speed: 70},
            abilities: {0: 'water-absorb', 1: 'damp', hidden: 'drizzle'},
            height: 1.1,
            weight: 33.9,
            colors: ['green', 'yellow', 'pink'],
            eggCycles: 20,
            eggGroups: ['water-1'],
            prevEvolution: 'poliwhirl'
            },

        'hoppip': {
            order: indexOrder++,
            token: 'hoppip',
            name: 'Hoppip',
            number: 187,
            types: ['grass', 'flying'],
            baseStats: {hp: 35, phAttack: 35, phDefense: 40, spAttack: 35, spDefense: 55, speed: 50},
            abilities: {0: 'chlorophyll', 1: 'leaf-guard', hidden: 'infiltrator'},
            height: 0.4,
            weight: 0.5,
            colors: ['pink', 'green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            nextEvolutions: [{
                species: 'skiploom',
                method: 'level-up',
                value: 18
                }]
            },
        'skiploom': {
            order: indexOrder++,
            token: 'skiploom',
            name: 'Skiploom',
            number: 188,
            types: ['grass', 'flying'],
            baseStats: {hp: 55, phAttack: 45, phDefense: 50, spAttack: 45, spDefense: 65, speed: 80},
            abilities: {0: 'chlorophyll', 1: 'leaf-guard', hidden: 'infiltrator'},
            height: 0.6,
            weight: 1,
            colors: ['green', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            prevEvolution: 'hoppip',
            nextEvolutions: [{
                species: 'jumpluff',
                method: 'level-up',
                value: 27
                }]
            },
        'jumpluff': {
            order: indexOrder++,
            token: 'jumpluff',
            name: 'Jumpluff',
            number: 189,
            types: ['grass', 'flying'],
            baseStats: {hp: 75, phAttack: 55, phDefense: 70, spAttack: 55, spDefense: 95, speed: 110},
            abilities: {0: 'chlorophyll', 1: 'leaf-guard', hidden: 'infiltrator'},
            height: 0.8,
            weight: 3,
            colors: ['blue', 'white', 'green', 'red'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            prevEvolution: 'skiploom'
            },

        'aipom': {
            order: indexOrder++,
            token: 'aipom',
            name: 'Aipom',
            number: 190,
            types: ['normal'],
            baseStats: {hp: 55, phAttack: 70, phDefense: 55, spAttack: 40, spDefense: 55, speed: 85},
            abilities: {0: 'run-away', 1: 'pickup', hidden: 'skill-link'},
            height: 0.8,
            weight: 11.5,
            colors: ['purple', 'brown'],
            eggCycles: 20,
            eggGroups: ['field']
            },

        'sunkern': {
            order: indexOrder++,
            token: 'sunkern',
            name: 'Sunkern',
            number: 191,
            types: ['grass'],
            baseStats: {hp: 30, phAttack: 30, phDefense: 30, spAttack: 30, spDefense: 30, speed: 30},
            abilities: {0: 'chlorophyll', 1: 'solar-power', hidden: 'early-bird'},
            height: 0.3,
            weight: 1.8,
            colors: ['yellow', 'brown', 'green', 'black'],
            eggCycles: 20,
            eggGroups: ['grass'],
            nextEvolutions: [{
                species: 'sunflora', // sun-stone
                method: 'type-appeal',
                value: 'grass',
                method2: 'level-up',
                value2: 20
                }]
            },
        'sunflora': {
            order: indexOrder++,
            token: 'sunflora',
            name: 'Sunflora',
            number: 192,
            types: ['grass'],
            baseStats: {hp: 75, phAttack: 75, phDefense: 55, spAttack: 105, spDefense: 85, speed: 30},
            abilities: {0: 'chlorophyll', 1: 'solar-power', hidden: 'early-bird'},
            height: 0.8,
            weight: 8.5,
            colors: ['yellow', 'green'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'sunkern'
            },

        'yanma': {
            order: indexOrder++,
            token: 'yanma',
            name: 'Yanma',
            hasAncientPower: true,
            number: 193,
            types: ['bug', 'flying'],
            baseStats: {hp: 65, phAttack: 65, phDefense: 45, spAttack: 75, spDefense: 45, speed: 95},
            abilities: {0: 'speed-boost', 1: 'compound-eyes', hidden: 'frisk'},
            height: 1.2,
            weight: 38,
            colors: ['red', 'green', 'white', 'orange'],
            eggCycles: 20,
            eggGroups: ['bug'],
            },

        'wooper': {
            order: indexOrder++,
            token: 'wooper',
            name: 'Wooper',
            number: 194,
            types: ['water', 'ground'],
            baseStats: {hp: 55, phAttack: 45, phDefense: 45, spAttack: 25, spDefense: 25, speed: 15},
            abilities: {0: 'damp', 1: 'water-absorb', hidden: 'unaware'},
            height: 0.4,
            weight: 8.5,
            colors: ['blue', 'purple'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            nextEvolutions: [{
                species: 'quagsire',
                method: 'level-up',
                value: 20
                }]
            },
        'quagsire': {
            order: indexOrder++,
            token: 'quagsire',
            name: 'Quagsire',
            number: 195,
            types: ['water', 'ground'],
            baseStats: {hp: 95, phAttack: 85, phDefense: 85, spAttack: 65, spDefense: 65, speed: 35},
            abilities: {0: 'damp', 1: 'water-absorb', hidden: 'unaware'},
            height: 1.4,
            weight: 75,
            colors: ['blue', 'purple'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'wooper'
            },

        'espeon': {
            order: thisIndex.afterOrder('flareon', 1),
            token: 'espeon',
            name: 'Espeon',
            number: 196,
            types: ['psychic'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 65, phAttack: 65, phDefense: 60, spAttack: 130, spDefense: 95, speed: 110},
            abilities: {0: 'synchronize', hidden: 'magic-bounce'},
            height: 0.9,
            weight: 26.5,
            colors: ['purple', 'red'],
            eggCycles: 35,
            eggGroups: ['field'],
            prevEvolution: 'eevee'
            },
        'umbreon': {
            order: thisIndex.afterOrder('flareon', 2),
            token: 'umbreon',
            name: 'Umbreon',
            number: 197,
            types: ['dark'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 95, phAttack: 65, phDefense: 110, spAttack: 60, spDefense: 130, speed: 65},
            abilities: {0: 'synchronize', hidden: 'inner-focus'},
            height: 1,
            weight: 27,
            colors: ['black', 'yellow'],
            eggCycles: 35,
            eggGroups: ['field'],
            prevEvolution: 'eevee'
            },

        'murkrow': {
            order: indexOrder++,
            token: 'murkrow',
            name: 'Murkrow',
            number: 198,
            types: ['dark', 'flying'],
            baseStats: {hp: 60, phAttack: 85, phDefense: 42, spAttack: 85, spDefense: 42, speed: 91},
            abilities: {0: 'insomnia', 1: 'super-luck', hidden: 'prankster'},
            height: 0.5,
            weight: 2.1,
            colors: ['black', 'yellow', 'red'],
            evos: ['honchkrow'],
            eggCycles: 20,
            eggGroups: ['flying'],
            },

        'slowking': {
            order: thisIndex.afterOrder('slowbro', 2),
            token: 'slowking',
            name: 'Slowking',
            number: 199,
            types: ['water', 'psychic'],
            baseStats: {hp: 95, phAttack: 75, phDefense: 80, spAttack: 100, spDefense: 110, speed: 30},
            abilities: {0: 'oblivious', 1: 'own-tempo', hidden: 'regenerator'},
            height: 2,
            weight: 79.5,
            colors: ['pink', 'yellow', 'gray', 'white'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            prevEvolution: 'slowpoke'
            },

        'misdreavus': {
            order: indexOrder++,
            token: 'misdreavus',
            name: 'Misdreavus',
            number: 200,
            types: ['ghost'],
            baseStats: {hp: 60, phAttack: 60, phDefense: 60, spAttack: 85, spDefense: 85, speed: 85},
            abilities: {0: 'levitate'},
            height: 0.7,
            weight: 1,
            colors: ['blue', 'red', 'purple', 'yellow'],
            eggCycles: 25,
            eggGroups: ['amorphous'],
            },

        'unown': {
            order: indexOrder++,
            token: 'unown',
            name: 'Unown',
            number: 201,
            formClass: 'random-variant',
            possibleForms: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
            randomizeForms: true,
            baseForm: 'a',
            types: ['psychic'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 48, phAttack: 72, phDefense: 48, spAttack: 72, spDefense: 48, speed: 48},
            abilities: {0: 'levitate'},
            height: 0.5,
            weight: 5,
            colors: ['black', 'white'],
            eggCycles: 40,
            eggGroups: ['undiscovered']
            },

        'wobbuffet': {
            order: indexOrder++,
            token: 'wobbuffet',
            name: 'Wobbuffet',
            number: 202,
            types: ['psychic'],
            baseStats: {hp: 190, phAttack: 33, phDefense: 58, spAttack: 33, spDefense: 58, speed: 33},
            abilities: {0: 'shadow-tag', hidden: 'telepathy'},
            height: 1.3,
            weight: 28.5,
            colors: ['blue', 'black', 'pink', 'white'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            },

        'girafarig': {
            order: indexOrder++,
            token: 'girafarig',
            name: 'Girafarig',
            number: 203,
            types: ['normal', 'psychic'],
            baseStats: {hp: 70, phAttack: 80, phDefense: 65, spAttack: 90, spDefense: 65, speed: 85},
            abilities: {0: 'inner-focus', 1: 'early-bird', hidden: 'sap-sipper'},
            height: 1.5,
            weight: 41.5,
            colors: ['yellow', 'black', 'white', 'pink'],
            eggCycles: 20,
            eggGroups: ['field'],
            },

        'pineco': {
            order: indexOrder++,
            token: 'pineco',
            name: 'Pineco',
            number: 204,
            types: ['bug'],
            baseStats: {hp: 50, phAttack: 65, phDefense: 90, spAttack: 35, spDefense: 35, speed: 15},
            abilities: {0: 'sturdy', hidden: 'overcoat'},
            height: 0.6,
            weight: 7.2,
            colors: ['gray'],
            eggCycles: 20,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'forretress',
                method: 'level-up',
                value: 31
                }]
            },
        'forretress': {
            order: indexOrder++,
            token: 'forretress',
            name: 'Forretress',
            number: 205,
            types: ['bug', 'steel'],
            baseStats: {hp: 75, phAttack: 90, phDefense: 140, spAttack: 60, spDefense: 60, speed: 40},
            abilities: {0: 'sturdy', hidden: 'overcoat'},
            height: 1.2,
            weight: 125.8,
            colors: ['gray', 'red'],
            eggCycles: 20,
            eggGroups: ['bug'],
            prevEvolution: 'pineco'
            },

        'dunsparce': {
            order: indexOrder++,
            token: 'dunsparce',
            name: 'Dunsparce',
            hasAncientPower: true,
            number: 206,
            types: ['normal'],
            baseStats: {hp: 100, phAttack: 70, phDefense: 70, spAttack: 65, spDefense: 65, speed: 45},
            abilities: {0: 'serene-grace', 1: 'run-away', hidden: 'rattled'},
            height: 1.5,
            weight: 14,
            colors: ['yellow', 'blue', 'white'],
            eggCycles: 20,
            eggGroups: ['field']
            },

        'gligar': {
            order: indexOrder++,
            token: 'gligar',
            name: 'Gligar',
            number: 207,
            types: ['ground', 'flying'],
            baseStats: {hp: 65, phAttack: 75, phDefense: 105, spAttack: 35, spDefense: 65, speed: 85},
            abilities: {0: 'hyper-cutter', 1: 'sand-veil', hidden: 'immunity'},
            height: 1.1,
            weight: 64.8,
            colors: ['purple', 'blue', 'pink'],
            eggCycles: 20,
            eggGroups: ['bug'],
            },

        'steelix': {
            order: thisIndex.afterOrder('onix'),
            token: 'steelix',
            name: 'Steelix',
            number: 208,
            types: ['steel', 'ground'],
            baseStats: {hp: 75, phAttack: 85, phDefense: 200, spAttack: 55, spDefense: 65, speed: 30},
            abilities: {0: 'rock-head', 1: 'sturdy', hidden: 'sheer-force'},
            height: 9.2,
            weight: 400,
            colors: ['gray'],
            eggCycles: 25,
            eggGroups: ['mineral'],
            prevEvolution: 'onix'
            },

        'snubbull': {
            order: indexOrder++,
            token: 'snubbull',
            name: 'Snubbull',
            number: 209,
            types: ['fairy'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 60, phAttack: 80, phDefense: 50, spAttack: 40, spDefense: 40, speed: 30},
            abilities: {0: 'intimidate', 1: 'run-away', hidden: 'rattled'},
            height: 0.6,
            weight: 7.8,
            colors: ['pink', 'black', 'blue', 'brown'],
            eggCycles: 20,
            eggGroups: ['field', 'fairy'],
            nextEvolutions: [{
                species: 'granbull',
                method: 'level-up',
                value: 23
                }]
            },
        'granbull': {
            order: indexOrder++,
            token: 'granbull',
            name: 'Granbull',
            number: 210,
            types: ['fairy'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 90, phAttack: 120, phDefense: 75, spAttack: 60, spDefense: 60, speed: 45},
            abilities: {0: 'intimidate', 1: 'quick-feet', hidden: 'rattled'},
            height: 1.4,
            weight: 48.7,
            colors: ['purple', 'black', 'pink'],
            eggCycles: 20,
            eggGroups: ['field', 'fairy'],
            prevEvolution: 'snubbull'
            },

        'qwilfish': {
            order: indexOrder++,
            token: 'qwilfish',
            name: 'Qwilfish',
            number: 211,
            types: ['water', 'poison'],
            baseStats: {hp: 65, phAttack: 95, phDefense: 85, spAttack: 55, spDefense: 55, speed: 85},
            abilities: {0: 'poison-point', 1: 'swift-swim', hidden: 'intimidate'},
            height: 0.5,
            weight: 3.9,
            colors: ['green', 'yellow', 'pink'],
            eggCycles: 20,
            eggGroups: ['water-2']
            },

        'scizor': {
            order: thisIndex.afterOrder('scyther'),
            token: 'scizor',
            name: 'Scizor',
            number: 212,
            types: ['bug', 'steel'],
            baseStats: {hp: 70, phAttack: 130, phDefense: 100, spAttack: 55, spDefense: 80, speed: 65},
            abilities: {0: 'swarm', 1: 'technician', hidden: 'light-metal'},
            height: 1.8,
            weight: 118,
            colors: ['red', 'white', 'black'],
            eggCycles: 25,
            eggGroups: ['bug'],
            prevEvolution: 'scyther'
            },

        'shuckle': {
            order: indexOrder++,
            token: 'shuckle',
            name: 'Shuckle',
            number: 213,
            types: ['bug', 'rock'],
            baseStats: {hp: 20, phAttack: 10, phDefense: 230, spAttack: 10, spDefense: 230, speed: 5},
            abilities: {0: 'sturdy', 1: 'gluttony', hidden: 'contrary'},
            height: 0.6,
            weight: 20.5,
            colors: ['yellow', 'red', 'white'],
            eggCycles: 20,
            eggGroups: ['bug']
            },

        'heracross': {
            order: indexOrder++,
            token: 'heracross',
            name: 'Heracross',
            number: 214,
            types: ['bug', 'fighting'],
            baseStats: {hp: 80, phAttack: 125, phDefense: 75, spAttack: 40, spDefense: 95, speed: 85},
            abilities: {0: 'swarm', 1: 'guts', hidden: 'moxie'},
            height: 1.5,
            weight: 54,
            colors: ['blue', 'yellow'],
            eggCycles: 25,
            eggGroups: ['bug']
            },

        'sneasel': {
            order: indexOrder++,
            token: 'sneasel',
            name: 'Sneasel',
            number: 215,
            types: ['dark', 'ice'],
            baseStats: {hp: 55, phAttack: 95, phDefense: 55, spAttack: 35, spDefense: 75, speed: 115},
            abilities: {0: 'inner-focus', 1: 'keen-eye', hidden: 'pickpocket'},
            height: 0.9,
            weight: 28,
            colors: ['black', 'blue', 'red'],
            eggCycles: 20,
            eggGroups: ['field']
            },

        'teddiursa': {
            order: indexOrder++,
            token: 'teddiursa',
            name: 'Teddiursa',
            number: 216,
            types: ['normal'],
            baseStats: {hp: 60, phAttack: 80, phDefense: 50, spAttack: 50, spDefense: 50, speed: 40},
            abilities: {0: 'pickup', 1: 'quick-feet', hidden: 'honey-gather'},
            height: 0.6,
            weight: 8.8,
            colors: ['brown', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'ursaring',
                method: 'level-up',
                value: 30
                }]
            },
        'ursaring': {
            order: indexOrder++,
            token: 'ursaring',
            name: 'Ursaring',
            number: 217,
            types: ['normal'],
            baseStats: {hp: 90, phAttack: 130, phDefense: 75, spAttack: 75, spDefense: 75, speed: 55},
            abilities: {0: 'guts', 1: 'quick-feet', hidden: 'unnerve'},
            height: 1.8,
            weight: 125.8,
            colors: ['brown', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'teddiursa'
            },

        'slugma': {
            order: indexOrder++,
            token: 'slugma',
            name: 'Slugma',
            hasAncientPower: true,
            number: 218,
            types: ['fire'],
            baseStats: {hp: 40, phAttack: 40, phDefense: 40, spAttack: 70, spDefense: 40, speed: 20},
            abilities: {0: 'magma-armor', 1: 'flame-body', hidden: 'weak-armor'},
            height: 0.7,
            weight: 35,
            colors: ['red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'magcargo',
                method: 'level-up',
                value: 38
                }]
            },
        'magcargo': {
            order: indexOrder++,
            token: 'magcargo',
            name: 'Magcargo',
            hasAncientPower: true,
            number: 219,
            types: ['fire', 'rock'],
            baseStats: {hp: 60, phAttack: 50, phDefense: 120, spAttack: 90, spDefense: 80, speed: 30},
            abilities: {0: 'magma-armor', 1: 'flame-body', hidden: 'weak-armor'},
            height: 0.8,
            weight: 55,
            colors: ['red', 'gray', 'yellow', 'orange'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'slugma'
            },

        'swinub': {
            order: indexOrder++,
            token: 'swinub',
            name: 'Swinub',
            number: 220,
            types: ['ice', 'ground'],
            baseStats: {hp: 50, phAttack: 50, phDefense: 40, spAttack: 30, spDefense: 30, speed: 50},
            abilities: {0: 'oblivious', 1: 'snow-cloak', hidden: 'thick-fat'},
            height: 0.4,
            weight: 6.5,
            colors: ['brown', 'pink'],
            evos: ['piloswine'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'piloswine',
                method: 'level-up',
                value: 33
                }]
            },
        'piloswine': {
            order: indexOrder++,
            token: 'piloswine',
            name: 'Piloswine',
            hasAncientPower: true,
            number: 221,
            types: ['ice', 'ground'],
            baseStats: {hp: 100, phAttack: 100, phDefense: 80, spAttack: 60, spDefense: 60, speed: 50},
            abilities: {0: 'oblivious', 1: 'snow-cloak', hidden: 'thick-fat'},
            height: 1.1,
            weight: 55.8,
            colors: ['brown', 'white', 'pink'],
            prevo: 'swinub',
            evos: ['mamoswine'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'swinub'
            },

        'corsola': {
            order: indexOrder++,
            token: 'corsola',
            name: 'Corsola',
            hasAncientPower: true,
            number: 222,
            types: ['water', 'rock'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 65, phAttack: 55, phDefense: 95, spAttack: 65, spDefense: 95, speed: 35},
            abilities: {0: 'hustle', 1: 'natural-cure', hidden: 'regenerator'},
            height: 0.6,
            weight: 5,
            colors: ['pink', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'water-3']
            },

        'remoraid': {
            order: indexOrder++,
            token: 'remoraid',
            name: 'Remoraid',
            number: 223,
            types: ['water'],
            baseStats: {hp: 35, phAttack: 65, phDefense: 35, spAttack: 65, spDefense: 35, speed: 65},
            abilities: {0: 'hustle', 1: 'sniper', hidden: 'moody'},
            height: 0.6,
            weight: 12,
            colors: ['gray', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'water-2'],
            nextEvolutions: [{
                species: 'octillery',
                method: 'level-up',
                value: 25
                }]
            },
        'octillery': {
            order: indexOrder++,
            token: 'octillery',
            name: 'Octillery',
            number: 224,
            types: ['water'],
            baseStats: {hp: 75, phAttack: 105, phDefense: 75, spAttack: 105, spDefense: 75, speed: 45},
            abilities: {0: 'suction-cups', 1: 'sniper', hidden: 'moody'},
            height: 0.9,
            weight: 28.5,
            colors: ['red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['water-1', 'water-2'],
            prevEvolution: 'remoraid'
            },

        'delibird': {
            order: indexOrder++,
            token: 'delibird',
            name: 'Delibird',
            number: 225,
            types: ['ice', 'flying'],
            baseStats: {hp: 45, phAttack: 55, phDefense: 45, spAttack: 65, spDefense: 45, speed: 75},
            abilities: {0: 'vital-spirit', 1: 'hustle', hidden: 'insomnia'},
            height: 0.9,
            weight: 16,
            colors: ['red', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field']
            },

        'mantine': {
            order: indexOrder++,
            token: 'mantine',
            name: 'Mantine',
            number: 226,
            types: ['water', 'flying'],
            baseStats: {hp: 85, phAttack: 40, phDefense: 70, spAttack: 80, spDefense: 140, speed: 70},
            abilities: {0: 'swift-swim', 1: 'water-absorb', hidden: 'water-veil'},
            height: 2.1,
            weight: 220,
            colors: ['blue', 'gray', 'white'],
            eggCycles: 25,
            eggGroups: ['water-1']
            },

        'skarmory': {
            order: indexOrder++,
            token: 'skarmory',
            name: 'Skarmory',
            number: 227,
            types: ['steel', 'flying'],
            baseStats: {hp: 65, phAttack: 80, phDefense: 140, spAttack: 40, spDefense: 70, speed: 70},
            abilities: {0: 'keen-eye', 1: 'sturdy', hidden: 'weak-armor'},
            height: 1.7,
            weight: 50.5,
            colors: ['gray'],
            eggCycles: 25,
            eggGroups: ['flying']
            },

        'houndour': {
            order: indexOrder++,
            token: 'houndour',
            name: 'Houndour',
            number: 228,
            types: ['dark', 'fire'],
            baseStats: {hp: 45, phAttack: 60, phDefense: 30, spAttack: 80, spDefense: 50, speed: 65},
            abilities: {0: 'early-bird', 1: 'flash-fire', hidden: 'unnerve'},
            height: 0.6,
            weight: 10.8,
            colors: ['black', 'white', 'orange'],
            evos: ['houndoom'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'houndoom',
                method: 'level-up',
                value: 24
                }]
            },
        'houndoom': {
            order: indexOrder++,
            token: 'houndoom',
            name: 'Houndoom',
            number: 229,
            types: ['dark', 'fire'],
            baseStats: {hp: 75, phAttack: 90, phDefense: 50, spAttack: 110, spDefense: 80, speed: 95},
            abilities: {0: 'early-bird', 1: 'flash-fire', hidden: 'unnerve'},
            height: 1.4,
            weight: 35,
            colors: ['black', 'white', 'orange'],
            evoLevel: 24,
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'houndour'
            },

        'kingdra': {
            order: thisIndex.afterOrder('seadra'),
            token: 'kingdra',
            name: 'Kingdra',
            number: 230,
            types: ['water', 'dragon'],
            baseStats: {hp: 75, phAttack: 95, phDefense: 95, spAttack: 95, spDefense: 95, speed: 85},
            abilities: {0: 'swift-swim', 1: 'sniper', hidden: 'damp'},
            height: 1.8,
            weight: 152,
            colors: ['blue', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'dragon'],
            prevEvolution: 'seadra'
            },

        'phanpy': {
            order: indexOrder++,
            token: 'phanpy',
            name: 'Phanpy',
            number: 231,
            types: ['ground'],
            baseStats: {hp: 90, phAttack: 60, phDefense: 60, spAttack: 40, spDefense: 40, speed: 40},
            abilities: {0: 'pickup', hidden: 'sand-veil'},
            height: 0.5,
            weight: 33.5,
            colors: ['blue', 'red'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'donphan',
                method: 'level-up',
                value: 25
                }]
            },
        'donphan': {
            order: indexOrder++,
            token: 'donphan',
            name: 'Donphan',
            number: 232,
            types: ['ground'],
            baseStats: {hp: 90, phAttack: 120, phDefense: 120, spAttack: 60, spDefense: 60, speed: 50},
            abilities: {0: 'sturdy', hidden: 'sand-veil'},
            height: 1.1,
            weight: 120,
            colors: ['black', 'gray', 'white'],
            prevo: 'phanpy',
            evoLevel: 25,
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'phanpy'
            },

        'porygon2': {
            order: thisIndex.afterOrder('porygon'),
            token: 'porygon2',
            name: 'Porygon2',
            number: 233,
            types: ['normal'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 85, phAttack: 80, phDefense: 90, spAttack: 105, spDefense: 95, speed: 60},
            abilities: {0: 'trace', 1: 'download', hidden: 'analytic'},
            height: 0.6,
            weight: 32.5,
            colors: ['red', 'blue'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'porygon',
            },

        'stantler': {
            order: indexOrder++,
            token: 'stantler',
            name: 'Stantler',
            number: 234,
            types: ['normal'],
            baseStats: {hp: 73, phAttack: 95, phDefense: 62, spAttack: 85, spDefense: 65, speed: 85},
            abilities: {0: 'intimidate', 1: 'frisk', hidden: 'sap-sipper'},
            height: 1.4,
            weight: 71.2,
            colors: ['brown', 'yellow', 'black'],
            eggCycles: 20,
            eggGroups: ['field']
            },

        'smeargle': {
            order: indexOrder++,
            token: 'smeargle',
            name: 'Smeargle',
            number: 235,
            types: ['normal'],
            baseStats: {hp: 55, phAttack: 20, phDefense: 35, spAttack: 20, spDefense: 45, speed: 75},
            abilities: {0: 'own-tempo', 1: 'technician', hidden: 'moody'},
            height: 1.2,
            weight: 58,
            colors: ['white', 'brown', 'green'],
            eggCycles: 20,
            eggGroups: ['field']
            },

        'tyrogue': {
            order: thisIndex.beforeOrder('hitmonlee'),
            token: 'tyrogue',
            name: 'Tyrogue',
            class: 'baby',
            number: 236,
            displayNumber: 105.9,
            dexNumber: 105.9,
            types: ['fighting'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 35, phAttack: 35, phDefense: 35, spAttack: 35, spDefense: 35, speed: 35},
            abilities: {0: 'guts', 1: 'steadfast', hidden: 'vital-spirit'},
            height: 0.7,
            weight: 21,
            colors: ['purple', 'brown'],
            eggCycles: 25,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'hitmonlee',
                method: 'stat-appeal',
                value: 'phAttack',
                method2: 'level-up',
                value2: 20
                }, {
                species: 'hitmonchan',
                method: 'stat-appeal',
                value: 'phDefense',
                method2: 'level-up',
                value2: 20
                }, {
                species: 'hitmontop',
                method: 'stat-appeal',
                value: 'speed',
                method2: 'level-up',
                value2: 20
                }]
            },

        'hitmontop': {
            order: thisIndex.afterOrder('hitmonchan'),
            token: 'hitmontop',
            name: 'Hitmontop',
            number: 237,
            displayNumber: 107.1,
            dexNumber: 107.1,
            types: ['fighting'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 50, phAttack: 95, phDefense: 95, spAttack: 35, spDefense: 110, speed: 70},
            abilities: {0: 'intimidate', 1: 'technician', hidden: 'steadfast'},
            height: 1.4,
            weight: 48,
            colors: ['brown', 'blue'],
            eggCycles: 25,
            eggGroups: ['human-like'],
            prevEvolution: 'tyrogue'
            },

        'smoochum': {
            order: thisIndex.beforeOrder('jynx'),
            token: 'smoochum',
            name: 'Smoochum',
            class: 'baby',
            number: 238,
            types: ['ice', 'psychic'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 45, phAttack: 30, phDefense: 15, spAttack: 85, spDefense: 65, speed: 65},
            abilities: {0: 'oblivious', 1: 'forewarn', hidden: 'dry-skin'},
            height: 0.4,
            weight: 6,
            colors: ['yellow', 'pink'],
            eggCycles: 25,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'jynx',
                method: 'level-up',
                value: 30
                }]
            },

        'elekid': {
            order: thisIndex.beforeOrder('electabuzz'),
            token: 'elekid',
            name: 'Elekid',
            class: 'baby',
            number: 239,
            types: ['electric'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 45, phAttack: 63, phDefense: 37, spAttack: 65, spDefense: 55, speed: 95},
            abilities: {0: 'static', hidden: 'vital-spirit'},
            height: 0.6,
            weight: 23.5,
            colors: ['yellow', 'black'],
            eggCycles: 25,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'electabuzz',
                method: 'level-up',
                value: 30
                }]
            },

        'magby': {
            order: thisIndex.beforeOrder('magmar'),
            token: 'magby',
            name: 'Magby',
            class: 'baby',
            number: 240,
            types: ['fire'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 45, phAttack: 75, phDefense: 37, spAttack: 70, spDefense: 55, speed: 83},
            abilities: {0: 'flame-body', hidden: 'vital-spirit'},
            height: 0.7,
            weight: 21.4,
            colors: ['red', 'yellow'],
            eggCycles: 25,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'magmar',
                method: 'level-up',
                value: 30
                }]
            },

        'miltank': {
            order: thisIndex.afterOrder('tauros'),
            token: 'miltank',
            name: 'Miltank',
            number: 241,
            displayNumber: 128.1,
            dexNumber: 128.1,
            baseGameGeneration: 1,
            types: ['normal'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 95, phAttack: 80, phDefense: 105, spAttack: 40, spDefense: 70, speed: 100},
            abilities: {0: 'thick-fat', 1: 'scrappy', hidden: 'sap-sipper'},
            height: 1.2,
            weight: 75.5,
            colors: ['pink', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            eggPartner: 'tauros'
            },

        'blissey': {
            order: thisIndex.afterOrder('chansey'),
            token: 'blissey',
            name: 'Blissey',
            number: 242,
            types: ['normal'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 255, phAttack: 10, phDefense: 10, spAttack: 75, spDefense: 135, speed: 55},
            abilities: {0: 'natural-cure', 1: 'serene-grace', hidden: 'healer'},
            height: 1.5,
            weight: 46.8,
            colors: ['pink', 'white'],
            eggCycles: 40,
            eggGroups: ['fairy'],
            prevEvolution: 'chansey'
            },

        'raikou': {
            order: indexOrder++,
            token: 'raikou',
            name: 'Raikou',
            class: 'legendary',
            number: 243,
            types: ['electric'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 90, phAttack: 85, phDefense: 75, spAttack: 115, spDefense: 100, speed: 115},
            abilities: {0: 'pressure', hidden: 'inner-focus'},
            height: 1.9,
            weight: 178,
            colors: ['yellow', 'purple', 'white', 'black', 'gray'],
            eggCycles: 80,
            eggGroups: ['undiscovered']
            },
        'entei': {
            order: indexOrder++,
            token: 'entei',
            name: 'Entei',
            class: 'legendary',
            number: 244,
            types: ['fire'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 115, phAttack: 115, phDefense: 85, spAttack: 90, spDefense: 75, speed: 100},
            abilities: {0: 'pressure', hidden: 'inner-focus'},
            height: 2.1,
            weight: 198,
            colors: ['brown', 'gray', 'red', 'yellow', 'black'],
            eggCycles: 80,
            eggGroups: ['undiscovered']
            },
        'suicune': {
            order: indexOrder++,
            token: 'suicune',
            name: 'Suicune',
            class: 'legendary',
            number: 245,
            types: ['water'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 75, phDefense: 115, spAttack: 90, spDefense: 115, speed: 85},
            abilities: {0: 'pressure', hidden: 'inner-focus'},
            height: 2,
            weight: 187,
            colors: ['blue', 'purple', 'white'],
            eggCycles: 80,
            eggGroups: ['undiscovered']
            },

        'larvitar': {
            order: indexOrder++,
            token: 'larvitar',
            name: 'Larvitar',
            number: 246,
            types: ['rock', 'ground'],
            baseStats: {hp: 50, phAttack: 64, phDefense: 50, spAttack: 45, spDefense: 50, speed: 41},
            abilities: {0: 'guts', hidden: 'sand-veil'},
            height: 0.6,
            weight: 72,
            colors: ['green', 'red', 'black'],
            eggCycles: 40,
            eggGroups: ['monster'],
            nextEvolutions: [{
                species: 'pupitar',
                method: 'level-up',
                value: 30
                }]
            },
        'pupitar': {
            order: indexOrder++,
            token: 'pupitar',
            name: 'Pupitar',
            number: 247,
            types: ['rock', 'ground'],
            baseStats: {hp: 70, phAttack: 84, phDefense: 70, spAttack: 65, spDefense: 70, speed: 51},
            abilities: {0: 'shed-skin'},
            height: 1.2,
            weight: 152,
            colors: ['gray', 'black'],
            eggCycles: 40,
            eggGroups: ['monster'],
            prevEvolution: 'larvitar',
            nextEvolutions: [{
                species: 'tyranitar',
                method: 'level-up',
                value: 55
                }]
            },
        'tyranitar': {
            order: indexOrder++,
            token: 'tyranitar',
            name: 'Tyranitar',
            number: 248,
            types: ['rock', 'dark'],
            baseStats: {hp: 100, phAttack: 134, phDefense: 110, spAttack: 95, spDefense: 100, speed: 61},
            abilities: {0: 'sand-stream', hidden: 'unnerve'},
            height: 2,
            weight: 202,
            colors: ['green', 'gray', 'black'],
            eggCycles: 40,
            eggGroups: ['monster'],
            otherFormes: ['tyranitarmega'],
            prevEvolution: 'pupitar'
            },

        'lugia': {
            order: indexOrder++,
            token: 'lugia',
            name: 'Lugia',
            class: 'legendary',
            hasAncientPower: true,
            number: 249,
            types: ['psychic', 'flying'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 106, phAttack: 90, phDefense: 130, spAttack: 90, spDefense: 154, speed: 110},
            abilities: {0: 'pressure', hidden: 'multiscale'},
            height: 5.2,
            weight: 216,
            colors: ['white', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },
        'ho-oh': {
            order: indexOrder++,
            token: 'ho-oh',
            name: 'Ho-Oh',
            class: 'legendary',
            hasAncientPower: true,
            number: 250,
            types: ['fire', 'flying'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 106, phAttack: 130, phDefense: 90, spAttack: 110, spDefense: 154, speed: 90},
            abilities: {0: 'pressure', hidden: 'regenerator'},
            height: 3.8,
            weight: 199,
            colors: ['orange', 'white', 'yellow', 'green'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },

        'celebi': {
            order: indexOrder++,
            token: 'celebi',
            name: 'Celebi',
            class: 'mythical',
            hasAncientPower: true,
            number: 251,
            types: ['psychic', 'grass'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 100, phDefense: 100, spAttack: 100, spDefense: 100, speed: 100},
            abilities: {0: 'natural-cure'},
            height: 0.6,
            weight: 5,
            colors: ['green', 'white', 'black'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with new prev evolution data
    thisIndex.addPrevEvolutions([
        {base: 'pikachu', species: 'pichu'},
        {base: 'clefairy', species: 'cleffa'},
        {base: 'jigglypuff', species: 'igglybuff'},
        {base: 'jynx', species: 'smoochum'},
        {base: 'electabuzz', species: 'elekid'},
        {base: 'magmar', species: 'magby'},
        {base: 'hitmonlee', species: 'tyrogue'},
        {base: 'hitmonchan', species: 'tyrogue'},
        ]);

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([

        {base: 'seadra', species: 'kingdra', method: 'type-appeal', value: 'dragon', method2: 'level-up', value2: 42}, // dragon-scale

        {base: 'eevee', species: 'espeon', method: 'type-appeal', value: 'psychic', method2: 'level-up', value2: 20}, // happiness + morning
        {base: 'eevee', species: 'umbreon', method: 'type-appeal', value: 'dark', method2: 'level-up', value2: 20}, // happiness + night

        {base: 'slowpoke', species: 'slowbro', method: 'type-appeal', value: 'water', method2: 'level-up', value2: 37, replace: true}, // level-up
        {base: 'slowpoke', species: 'slowking', method: 'type-appeal', value: 'psychic', method2: 'level-up', value2: 37}, // kings-rock

        {base: 'poliwhirl', species: 'poliwrath', method: 'type-appeal', value: 'fighting', method2: 'level-up', value2: 45, replace: true}, // trade
        {base: 'poliwhirl', species: 'politoed', method: 'type-appeal', value: 'water', method2: 'level-up', value2: 45}, // kings-rock

        {base: 'gloom', species: 'vileplume', method: 'type-appeal', value: 'poison', method2: 'level-up', value2: 41, replace: true}, // leaf-stone
        {base: 'gloom', species: 'bellossom', method: 'type-appeal', value: 'grass', method2: 'level-up', value2: 41}, // sun-stone

        {base: 'onix', species: 'steelix', method: 'type-appeal', value: 'steel', method2: 'level-up', value2: 30}, // metal-coat
        {base: 'scyther', species: 'scizor', method: 'type-appeal', value: 'steel', method2: 'level-up', value2: 30}, // metal-coat

        {base: 'porygon', species: 'porygon2', method: 'type-appeal', value: ['fire', 'ice', 'electric'], method2: 'level-up', value2: 27}, // upgrade

        {base: 'golbat', species: 'crobat', method: 'happiness', value: 'max', method2: 'level-up', value2: 42}, // happiness
        {base: 'chansey', species: 'blissey', method: 'happiness', value: 'max', method2: 'level-up', value2: 45}, // happiness

        ]);

    // Update previous gen pokemon with new egg partner data
    thisIndex.addEggPartners([
        {base: 'tauros', species: 'miltank'},
        ]);

    // Update previous gen pokemon with known species appeal data
    thisIndex.addSpeciesAppealValues([

        // Predator/prey relationships
        // ---

        // Symbiotic relationships
        {base: 'heracross', species: 'pinsir'},
        {base: 'pinsir', species: 'heracross'},

        // Rival relationships
        // ---

        // Romantic relationships
        {base: 'tauros', species: 'miltank'},

        // Feeding/pollination relationships
        {base: 'butterfree', species: 'meganium'},
        {base: 'beedrill', species: 'bayleef'},
        {base: 'ledyba', species: 'sunflora'},

        // One-sided (theft) relationships
        {base: 'heracross', species: 'bulbasaur'},

        // Mistaken identify relationships
        // ---

        // Legendary trigger relationships
        // ---

        ]);

})();