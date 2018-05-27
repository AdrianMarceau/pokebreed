/*
    * GLOBAL POKEMON INDEX DATA (UNOVA / GEN 5)
    * This data was collected from Zarel for Pokemon Showdown
    * via: https://github.com/Zarel/Pokemon-Showdown/blob/master/data/pokedex.js
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration(5);
    thisIndex.setRegion('unova');

    // Add the generation's list of base species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Base Pokedex

        'snivy': {
            order: indexOrder++,
            token: 'snivy',
            name: 'Snivy',
            number: 495,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 45, phAttack: 45, phDefense: 55, spAttack: 45, spDefense: 55, speed: 63},
            abilities: {0: 'overgrow', hidden: 'contrary'},
            height: 0.6,
            weight: 8.1,
            colors: ['green', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field', 'grass'],
            nextEvolutions: [{
                species: 'servine',
                method: 'level-up',
                value: 17
                }]
            },
        'servine': {
            order: indexOrder++,
            token: 'servine',
            name: 'Servine',
            number: 496,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 60, phAttack: 60, phDefense: 75, spAttack: 60, spDefense: 75, speed: 83},
            abilities: {0: 'overgrow', hidden: 'contrary'},
            height: 0.8,
            weight: 16,
            colors: ['green', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field', 'grass'],
            prevEvolution: 'snivy',
            nextEvolutions: [{
                species: 'serperior',
                method: 'level-up',
                value: 36
                }]
            },
        'serperior': {
            order: indexOrder++,
            token: 'serperior',
            name: 'Serperior',
            number: 497,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 75, phAttack: 75, phDefense: 95, spAttack: 75, spDefense: 95, speed: 113},
            abilities: {0: 'overgrow', hidden: 'contrary'},
            height: 3.3,
            weight: 63,
            colors: ['green', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field', 'grass'],
            prevEvolution: 'servine'
            },

        'tepig': {
            order: indexOrder++,
            token: 'tepig',
            name: 'Tepig',
            number: 498,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 65, phAttack: 63, phDefense: 45, spAttack: 45, spDefense: 45, speed: 45},
            abilities: {0: 'blaze', hidden: 'thick-fat'},
            height: 0.5,
            weight: 9.9,
            colors: ['orange', 'brown', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'pignite',
                method: 'level-up',
                value: 17
                }]
            },
        'pignite': {
            order: indexOrder++,
            token: 'pignite',
            name: 'Pignite',
            number: 499,
            types: ['fire', 'fighting'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 90, phAttack: 93, phDefense: 55, spAttack: 70, spDefense: 55, speed: 55},
            abilities: {0: 'blaze', hidden: 'thick-fat'},
            height: 1,
            weight: 55.5,
            colors: ['orange', 'brown', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'tepig',
            nextEvolutions: [{
                species: 'emboar',
                method: 'level-up',
                value: 36
                }]
            },
        'emboar': {
            order: indexOrder++,
            token: 'emboar',
            name: 'Emboar',
            number: 500,
            types: ['fire', 'fighting'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 110, phAttack: 123, phDefense: 65, spAttack: 100, spDefense: 65, speed: 65},
            abilities: {0: 'blaze', hidden: 'reckless'},
            height: 1.6,
            weight: 150,
            colors: ['orange', 'black', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'pignite'
            },

        'oshawott': {
            order: indexOrder++,
            token: 'oshawott',
            name: 'Oshawott',
            number: 501,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 55, phAttack: 55, phDefense: 45, spAttack: 63, spDefense: 45, speed: 45},
            abilities: {0: 'torrent', hidden: 'shell-armor'},
            height: 0.5,
            weight: 5.9,
            colors: ['blue', 'white', 'orange'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'dewott',
                method: 'level-up',
                value: 17
                }]
            },
        'dewott': {
            order: indexOrder++,
            token: 'dewott',
            name: 'Dewott',
            number: 502,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 75, phAttack: 75, phDefense: 60, spAttack: 83, spDefense: 60, speed: 60},
            abilities: {0: 'torrent', hidden: 'shell-armor'},
            height: 0.8,
            weight: 24.5,
            colors: ['blue', 'black', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'oshawott',
            nextEvolutions: [{
                species: 'samurott',
                method: 'level-up',
                value: 36
                }]
            },
        'samurott': {
            order: indexOrder++,
            token: 'samurott',
            name: 'Samurott',
            number: 503,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 95, phAttack: 100, phDefense: 85, spAttack: 108, spDefense: 70, speed: 70},
            abilities: {0: 'torrent', hidden: 'shell-armor'},
            height: 1.5,
            weight: 94.6,
            colors: ['blue', 'yellow', 'white', 'black'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'dewott'
            },

        'pidove': {
            order: indexOrder++,
            token: 'pidove',
            name: 'Pidove',
            number: 519,
            types: ['normal', 'flying'],
            baseStats: {hp: 50, phAttack: 55, phDefense: 50, spAttack: 36, spDefense: 30, speed: 43},
            abilities: {0: 'big-pecks', 1: 'super-luck', hidden: 'rivalry'},
            height: 0.3,
            weight: 2.1,
            colors: ['gray', 'black', 'white', 'pink', 'yellow'],
            eggCycles: 15,
            eggGroups: ['flying'],
            nextEvolutions: [{
                species: 'tranquill',
                method: 'level-up',
                value: 21
                }]
            },
        'tranquill': {
            order: indexOrder++,
            token: 'tranquill',
            name: 'Tranquill',
            number: 520,
            types: ['normal', 'flying'],
            baseStats: {hp: 62, phAttack: 77, phDefense: 62, spAttack: 50, spDefense: 42, speed: 65},
            abilities: {0: 'big-pecks', 1: 'super-luck', hidden: 'rivalry'},
            height: 0.6,
            weight: 15,
            colors: ['gray', 'black', 'white', 'pink', 'yellow'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'pidove',
            nextEvolutions: [{
                species: 'unfezant-m',
                method: 'level-up',
                value: 32,
                method2: 'chance',
                value2: 50
                }, {
                species: 'unfezant-f',
                method: 'level-up',
                value: 32,
                method2: 'chance',
                value2: 50
                }]
            },
        'unfezant-m': {
            order: indexOrder++,
            token: 'unfezant-m',
            name: 'Unfezant \u2642',
            formClass: 'gender-variant',
            formToken: 'male',
            number: 521,
            types: ['normal', 'flying'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 80, phAttack: 115, phDefense: 80, spAttack: 65, spDefense: 55, speed: 93},
            abilities: {0: 'big-pecks', 1: 'super-luck', hidden: 'rivalry'},
            height: 1.2,
            weight: 29,
            colors: ['gray', 'black', 'green', 'pink', 'yellow'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'tranquill'
            },
        'unfezant-f': {
            order: indexOrder++,
            token: 'unfezant-f',
            name: 'Unfezant \u2640',
            formClass: 'gender-variant',
            formToken: 'female',
            number: 521,
            types: ['normal', 'flying'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 80, phAttack: 115, phDefense: 80, spAttack: 65, spDefense: 55, speed: 93},
            abilities: {0: 'big-pecks', 1: 'super-luck', hidden: 'rivalry'},
            height: 1.2,
            weight: 29,
            colors: ['gray', 'black', 'brown', 'yellow'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'tranquill'
            },

        'trubbish': {
            order: indexOrder++,
            token: 'trubbish',
            name: 'Trubbish',
            number: 568,
            types: ['poison'],
            baseStats: {hp: 50, phAttack: 50, phDefense: 62, spAttack: 40, spDefense: 62, speed: 65},
            abilities: {0: 'stench', 1: 'sticky-hold', hidden: 'aftermath'},
            height: 0.6,
            weight: 31,
            colors: ['green', 'brown'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'garbodor',
                method: 'level-up',
                value: 36
                }]
            },
        'garbodor': {
            order: indexOrder++,
            token: 'garbodor',
            name: 'Garbodor',
            number: 569,
            types: ['poison'],
            baseStats: {hp: 80, phAttack: 95, phDefense: 82, spAttack: 60, spDefense: 82, speed: 75},
            abilities: {0: 'stench', 1: 'weak-armor', hidden: 'aftermath'},
            height: 1.9,
            weight: 107.3,
            colors: ['green', 'brown', 'pink'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'trubbish'
            },

        'vanillite': {
            order: indexOrder++,
            token: 'vanillite',
            name: 'Vanillite',
            number: 582,
            types: ['ice'],
            baseStats: {hp: 36, phAttack: 50, phDefense: 50, spAttack: 65, spDefense: 60, speed: 44},
            abilities: {0: 'ice-body', 1: 'snow-cloak', hidden: 'weak-armor'},
            height: 0.4,
            weight: 5.7,
            colors: ['white', 'blue'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'vanillish',
                method: 'level-up',
                value: 35
                }]
            },
        'vanillish': {
            order: indexOrder++,
            token: 'vanillish',
            name: 'Vanillish',
            number: 583,
            types: ['ice'],
            baseStats: {hp: 51, phAttack: 65, phDefense: 65, spAttack: 80, spDefense: 75, speed: 59},
            abilities: {0: 'ice-body', 1: 'snow-cloak', hidden: 'weak-armor'},
            height: 1.1,
            weight: 41,
            colors: ['white', 'blue'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'vanillite',
            nextEvolutions: [{
                species: 'vanilluxe',
                method: 'level-up',
                value: 47
                }]
            },
        'vanilluxe': {
            order: indexOrder++,
            token: 'vanilluxe',
            name: 'Vanilluxe',
            number: 584,
            types: ['ice'],
            baseStats: {hp: 71, phAttack: 95, phDefense: 85, spAttack: 110, spDefense: 95, speed: 79},
            abilities: {0: 'ice-body', 1: 'snow-warning', hidden: 'weak-armor'},
            height: 1.3,
            weight: 57.5,
            colors: ['white', 'blue', 'purple'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'vanillish'
            },

        'emolga': {
            order: indexOrder++,
            token: 'emolga',
            name: 'Emolga',
            number: 587,
            types: ['electric', 'flying'],
            baseStats: {hp: 55, phAttack: 75, phDefense: 60, spAttack: 75, spDefense: 60, speed: 103},
            abilities: {0: 'static', hidden: 'motor-drive'},
            height: 0.4,
            weight: 5,
            colors: ['white', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field']
            },

        'frillish-m': {
            order: indexOrder++,
            token: 'frillish-m',
            name: 'Frillish \u2642',
            formClass: 'gender-variant',
            formToken: 'male',
            number: 592,
            types: ['water', 'ghost'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 55, phAttack: 40, phDefense: 50, spAttack: 65, spDefense: 85, speed: 40},
            abilities: {0: 'water-absorb', 1: 'cursed-body', hidden: 'damp'},
            height: 1.2,
            weight: 33,
            colors: ['white', 'blue'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            eggPartner: 'frillish-f',
            nextEvolutions: [{
                species: 'jellicent-m',
                method: 'level-up',
                value: 40
                }],
            altBaseEvolutions: [{
                'species': 'frillish-f',
                'method': 'chance',
                'value': 50
                }]
            },
        'jellicent-m': {
            order: indexOrder++,
            token: 'jellicent-m',
            name: 'Jellicent \u2642',
            formClass: 'gender-variant',
            formToken: 'male',
            number: 593,
            types: ['water', 'ghost'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 100, phAttack: 60, phDefense: 70, spAttack: 85, spDefense: 105, speed: 60},
            abilities: {0: 'water-absorb', 1: 'cursed-body', hidden: 'damp'},
            height: 2.2,
            weight: 135,
            colors: ['white', 'blue'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            eggPartner: 'jellicent-f',
            prevEvolution: 'frillish-m'
            },

        'frillish-f': {
            order: indexOrder++,
            token: 'frillish-f',
            name: 'Frillish \u2640',
            formClass: 'gender-variant',
            formToken: 'female',
            number: 592,
            subNumber: 2,
            types: ['water', 'ghost'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 55, phAttack: 40, phDefense: 50, spAttack: 65, spDefense: 85, speed: 40},
            abilities: {0: 'water-absorb', 1: 'cursed-body', hidden: 'damp'},
            height: 1.2,
            weight: 33,
            colors: ['white', 'pink'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            eggPartner: 'frillish-m',
            nextEvolutions: [{
                species: 'jellicent-f',
                method: 'level-up',
                value: 40
                }],
            altBaseEvolutions: [{
                'species': 'frillish-m',
                'method': 'chance',
                'value': 50
                }]
            },
        'jellicent-f': {
            order: indexOrder++,
            token: 'jellicent-f',
            name: 'Jellicent \u2640',
            formClass: 'gender-variant',
            formToken: 'female',
            number: 593,
            subNumber: 2,
            types: ['water', 'ghost'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 100, phAttack: 60, phDefense: 70, spAttack: 85, spDefense: 105, speed: 60},
            abilities: {0: 'water-absorb', 1: 'cursed-body', hidden: 'damp'},
            height: 2.2,
            weight: 135,
            colors: ['white', 'pink'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            eggPartner: 'jellicent-m',
            prevEvolution: 'frillish-f'
            },

        'alomomola': {
            order: indexOrder++,
            token: 'alomomola',
            name: 'Alomomola',
            number: 594,
            types: ['water'],
            baseStats: {hp: 165, phAttack: 75, phDefense: 80, spAttack: 40, spDefense: 45, speed: 65},
            abilities: {0: 'healer', 1: 'hydration', hidden: 'regenerator'},
            height: 1.2,
            weight: 31.6,
            colors: ['pink', 'yellow'],
            eggCycles: 40,
            eggGroups: ['water-1', 'water-2']
            },

        'joltik': {
            order: indexOrder++,
            token: 'joltik',
            name: 'Joltik',
            number: 595,
            types: ['bug', 'electric'],
            baseStats: {hp: 50, phAttack: 47, phDefense: 50, spAttack: 57, spDefense: 50, speed: 65},
            abilities: {0: 'compound-eyes', 1: 'unnerve', hidden: 'swarm'},
            height: 0.1,
            weight: 0.6,
            colors: ['yellow', 'blue'],
            eggCycles: 20,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'galvantula',
                method: 'level-up',
                value: 36
                }],
            },
        'galvantula': {
            order: indexOrder++,
            token: 'galvantula',
            name: 'Galvantula',
            number: 596,
            types: ['bug', 'electric'],
            baseStats: {hp: 70, phAttack: 77, phDefense: 60, spAttack: 97, spDefense: 60, speed: 108},
            abilities: {0: 'compound-eyes', 1: 'unnerve', hidden: 'swarm'},
            height: 0.8,
            weight: 14.3,
            colors: ['yellow', 'purple', 'blue'],
            eggCycles: 20,
            eggGroups: ['bug'],
            prevEvolution: 'joltik'
            },

        'ferroseed': {
            order: indexOrder++,
            token: 'ferroseed',
            name: 'Ferroseed',
            number: 597,
            types: ['grass', 'steel'],
            baseStats: {hp: 44, phAttack: 50, phDefense: 91, spAttack: 24, spDefense: 86, speed: 10},
            abilities: {0: 'iron-barbs'},
            height: 0.6,
            weight: 18.8,
            colors: ['gray', 'green', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['grass', 'mineral'],
            nextEvolutions: [{
                species: 'ferrothorn',
                method: 'level-up',
                value: 40
                }],
            },
        'ferrothorn': {
            order: indexOrder++,
            token: 'ferrothorn',
            name: 'Ferrothorn',
            number: 598,
            types: ['grass', 'steel'],
            baseStats: {hp: 74, phAttack: 94, phDefense: 131, spAttack: 54, spDefense: 116, speed: 20},
            abilities: {0: 'iron-barbs', hidden: 'anticipation'},
            height: 1,
            weight: 110,
            colors: ['gray', 'green', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['grass', 'mineral'],
            prevEvolution: 'ferroseed'
            },

        'klink': {
            order: indexOrder++,
            token: 'klink',
            name: 'Klink',
            number: 599,
            types: ['steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 40, phAttack: 55, phDefense: 70, spAttack: 45, spDefense: 60, speed: 30},
            abilities: {0: 'plus', 1: 'minus', hidden: 'clear-body'},
            height: 0.3,
            weight: 21,
            colors: ['gray'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'klang',
                method: 'level-up',
                value: 38
                }]
            },
        'klang': {
            order: indexOrder++,
            token: 'klang',
            name: 'Klang',
            number: 600,
            types: ['steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 60, phAttack: 80, phDefense: 95, spAttack: 70, spDefense: 85, speed: 50},
            abilities: {0: 'plus', 1: 'minus', hidden: 'clear-body'},
            height: 0.6,
            weight: 51,
            colors: ['gray', 'blue'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'klink',
            nextEvolutions: [{
                species: 'klinklang',
                method: 'level-up',
                value: 49
                }]
            },
        'klinklang': {
            order: indexOrder++,
            token: 'klinklang',
            name: 'Klinklang',
            number: 601,
            types: ['steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 60, phAttack: 100, phDefense: 115, spAttack: 70, spDefense: 85, speed: 90},
            abilities: {0: 'plus', 1: 'minus', hidden: 'clear-body'},
            height: 0.6,
            weight: 81,
            colors: ['gray', 'blue', 'red'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'klang'
            },

        'tynamo': {
            order: indexOrder++,
            token: 'tynamo',
            name: 'Tynamo',
            number: 602,
            types: ['electric'],
            baseStats: {hp: 35, phAttack: 55, phDefense: 40, spAttack: 45, spDefense: 40, speed: 60},
            abilities: {0: 'levitate'},
            height: 0.2,
            weight: 0.3,
            colors: ['white', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'eelektrik',
                method: 'level-up',
                value: 39
                }]
            },
        'eelektrik': {
            order: indexOrder++,
            token: 'eelektrik',
            name: 'Eelektrik',
            number: 603,
            types: ['electric'],
            baseStats: {hp: 65, phAttack: 85, phDefense: 70, spAttack: 75, spDefense: 70, speed: 40},
            abilities: {0: 'levitate'},
            height: 1.2,
            weight: 22,
            colors: ['blue', 'red', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'tynamo',
            nextEvolutions: [{
                species: 'eelektross',
                method: 'evolution-stone',
                value: 'thunder-stone',
                method2: 'type-surge',
                value2: 'electric'
                }]
            },
        'eelektross': {
            order: indexOrder++,
            token: 'eelektross',
            name: 'Eelektross',
            number: 604,
            types: ['electric'],
            baseStats: {hp: 85, phAttack: 115, phDefense: 80, spAttack: 105, spDefense: 80, speed: 50},
            abilities: {0: 'levitate'},
            height: 2.1,
            weight: 80.5,
            colors: ['blue', 'red', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'eelektrik'
            },

        'elgyem': {
            order: indexOrder++,
            token: 'elgyem',
            name: 'Elgyem',
            number: 605,
            types: ['psychic'],
            baseStats: {hp: 55, phAttack: 55, phDefense: 55, spAttack: 85, spDefense: 55, speed: 30},
            abilities: {0: 'Telepathy', 1: 'Synchronize', hidden: 'Analytic'},
            height: 0.5,
            weight: 9,
            colors: ['blue', 'black', 'green', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            nextEvolutions: [{
                species: 'beheeyem',
                method: 'level-up',
                value: 42
                }]
            },
        'beheeyem': {
            order: indexOrder++,
            token: 'beheeyem',
            name: 'Beheeyem',
            number: 606,
            types: ['psychic'],
            baseStats: {hp: 75, phAttack: 75, phDefense: 75, spAttack: 125, spDefense: 95, speed: 40},
            abilities: {0: 'Telepathy', 1: 'Synchronize', hidden: 'Analytic'},
            height: 1,
            weight: 34.5,
            colors: ['brown', 'black', 'green', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'elgyem'
            },

        'litwick': {
            order: indexOrder++,
            token: 'litwick',
            name: 'Litwick',
            number: 607,
            types: ['ghost', 'fire'],
            baseStats: {hp: 50, phAttack: 30, phDefense: 55, spAttack: 65, spDefense: 55, speed: 20},
            abilities: {0: 'flash-fire', 1: 'flame-body', hidden: 'infiltrator'},
            height: 0.3,
            weight: 3.1,
            colors: ['white', 'purple', 'yellow'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'lampent',
                method: 'level-up',
                value: 41
                }]
            },
        'lampent': {
            order: indexOrder++,
            token: 'lampent',
            name: 'Lampent',
            number: 608,
            types: ['ghost', 'fire'],
            baseStats: {hp: 60, phAttack: 40, phDefense: 60, spAttack: 95, spDefense: 60, speed: 55},
            abilities: {0: 'flash-fire', 1: 'flame-body', hidden: 'infiltrator'},
            height: 0.6,
            weight: 13,
            colors: ['black', 'purple', 'yellow'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'litwick',
            nextEvolutions: [{
                species: 'chandelure',
                method: 'evolution-stone',
                value: 'dusk-stone',
                method2: 'type-surge',
                value2: ['ghost', 'fire']
                }]
            },
        'chandelure': {
            order: indexOrder++,
            token: 'chandelure',
            name: 'Chandelure',
            number: 609,
            types: ['ghost', 'fire'],
            baseStats: {hp: 60, phAttack: 55, phDefense: 90, spAttack: 145, spDefense: 90, speed: 80},
            abilities: {0: 'flash-fire', 1: 'flame-body', hidden: 'infiltrator'},
            height: 1,
            weight: 34.3,
            colors: ['purple', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'lampent'
            },

        'axew': {
            order: indexOrder++,
            token: 'axew',
            name: 'Axew',
            number: 610,
            types: ['dragon'],
            baseStats: {hp: 46, phAttack: 87, phDefense: 60, spAttack: 30, spDefense: 40, speed: 57},
            abilities: {0: 'rivalry', 1: 'mold-breaker', hidden: 'unnerve'},
            height: 0.6,
            weight: 18,
            colors: ['green', 'red'],
            eggCycles: 40,
            eggGroups: ['monster', 'dragon'],
            nextEvolutions: [{
                species: 'fraxure',
                method: 'level-up',
                value: 38
                }]
            },
        'fraxure': {
            order: indexOrder++,
            token: 'fraxure',
            name: 'Fraxure',
            number: 611,
            types: ['dragon'],
            baseStats: {hp: 66, phAttack: 117, phDefense: 70, spAttack: 40, spDefense: 50, speed: 67},
            abilities: {0: 'rivalry', 1: 'mold-breaker', hidden: 'unnerve'},
            height: 1,
            weight: 36,
            colors: ['green', 'gray', 'red'],
            eggCycles: 40,
            eggGroups: ['monster', 'dragon'],
            prevEvolution: 'axew',
            nextEvolutions: [{
                species: 'haxorus',
                method: 'level-up',
                value: 48
                }]
            },
        'haxorus': {
            order: indexOrder++,
            token: 'haxorus',
            name: 'Haxorus',
            number: 612,
            types: ['dragon'],
            baseStats: {hp: 76, phAttack: 147, phDefense: 90, spAttack: 60, spDefense: 70, speed: 97},
            abilities: {0: 'rivalry', 1: 'mold-breaker', hidden: 'unnerve'},
            height: 1.8,
            weight: 105.5,
            colors: ['yellow', 'gray', 'red'],
            eggCycles: 40,
            eggGroups: ['monster', 'dragon'],
            prevEvolution: 'fraxure'
            },

        'stunfisk': {
            order: indexOrder++,
            token: 'stunfisk',
            name: 'Stunfisk',
            number: 618,
            types: ['ground', 'electric'],
            baseStats: {hp: 109, phAttack: 66, phDefense: 84, spAttack: 81, spDefense: 99, speed: 32},
            abilities: {0: 'static', 1: 'limber', hidden: 'sand-veil'},
            height: 0.7,
            weight: 11,
            colors: ['brown', 'yellow'],
            eggCycles: 20,
            eggGroups: ['water-1', 'amorphous']
            },

        'golett': {
            order: indexOrder++,
            token: 'golett',
            name: 'Golett',
            number: 622,
            types: ['ground', 'ghost'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 59, phAttack: 74, phDefense: 50, spAttack: 35, spDefense: 50, speed: 35},
            abilities: {0: 'iron-fist', 1: 'klutz', hidden: 'no-guard'},
            height: 1,
            weight: 92,
            colors: ['blue', 'green', 'brown', 'yellow'],
            eggCycles: 25,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'golurk',
                method: 'level-up',
                value: 43
                }]
            },
        'golurk': {
            order: indexOrder++,
            token: 'golurk',
            name: 'Golurk',
            number: 623,
            types: ['ground', 'ghost'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 89, phAttack: 124, phDefense: 80, spAttack: 55, spDefense: 80, speed: 55},
            abilities: {0: 'iron-fist', 1: 'klutz', hidden: 'no-guard'},
            height: 2.8,
            weight: 330,
            colors: ['blue', 'green', 'brown', 'yellow'],
            eggCycles: 25,
            eggGroups: ['mineral'],
            prevEvolution: 'golett'
            },

        'pawniard': {
            order: indexOrder++,
            token: 'pawniard',
            name: 'Pawniard',
            number: 624,
            types: ['dark', 'steel'],
            baseStats: {hp: 45, phAttack: 85, phDefense: 70, spAttack: 40, spDefense: 40, speed: 60},
            abilities: {0: 'defiant', 1: 'inner-focus', hidden: 'pressure'},
            height: 0.5,
            weight: 10.2,
            colors: ['red', 'black', 'gray', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            nextEvolutions: [{
                species: 'bisharp',
                method: 'level-up',
                value: 52
                }]
            },
        'bisharp': {
            order: indexOrder++,
            token: 'bisharp',
            name: 'Bisharp',
            number: 625,
            types: ['dark', 'steel'],
            baseStats: {hp: 65, phAttack: 125, phDefense: 100, spAttack: 60, spDefense: 70, speed: 70},
            abilities: {0: 'defiant', 1: 'inner-focus', hidden: 'pressure'},
            height: 1.6,
            weight: 70,
            colors: ['red', 'black', 'gray', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'pawniard'
            },

        'deino': {
            order: indexOrder++,
            token: 'deino',
            name: 'Deino',
            number: 633,
            types: ['dark', 'dragon'],
            baseStats: {hp: 52, phAttack: 65, phDefense: 50, spAttack: 45, spDefense: 50, speed: 38},
            abilities: {0: 'hustle'},
            height: 0.8,
            weight: 17.3,
            colors: ['black', 'blue'],
            eggCycles: 40,
            eggGroups: ['dragon'],
            nextEvolutions: [{
                species: 'zweilous',
                method: 'level-up',
                value: 50
                }]
            },
        'zweilous': {
            order: indexOrder++,
            token: 'zweilous',
            name: 'Zweilous',
            number: 634,
            types: ['dark', 'dragon'],
            baseStats: {hp: 72, phAttack: 85, phDefense: 70, spAttack: 65, spDefense: 70, speed: 58},
            abilities: {0: 'hustle'},
            height: 1.4,
            weight: 50,
            colors: ['black', 'blue'],
            eggCycles: 40,
            eggGroups: ['dragon'],
            nextEvolutions: [{
                species: 'hydreigon',
                method: 'level-up',
                value: 64
                }],
            prevEvolution: 'deino'
            },
        'hydreigon': {
            order: indexOrder++,
            token: 'hydreigon',
            name: 'Hydreigon',
            number: 635,
            types: ['dark', 'dragon'],
            baseStats: {hp: 92, phAttack: 105, phDefense: 90, spAttack: 125, spDefense: 90, speed: 98},
            abilities: {0: 'levitate'},
            height: 1.8,
            weight: 160,
            colors: ['black', 'blue'],
            eggCycles: 40,
            eggGroups: ['dragon'],
            prevEvolution: 'zweilous'
            },

        'larvesta': {
            order: indexOrder++,
            token: 'larvesta',
            name: 'Larvesta',
            number: 636,
            types: ['bug', 'fire'],
            baseStats: {hp: 55, phAttack: 85, phDefense: 55, spAttack: 50, spDefense: 55, speed: 60},
            abilities: {0: 'flame-body', hidden: 'swarm'},
            height: 1.1,
            weight: 28.8,
            colors: ['white', 'red', 'brown'],
            eggCycles: 40,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'volcarona',
                method: 'level-up',
                value: 59
                }]
            },
        'volcarona': {
            order: indexOrder++,
            token: 'volcarona',
            name: 'Volcarona',
            number: 637,
            types: ['bug', 'fire'],
            baseStats: {hp: 85, phAttack: 60, phDefense: 65, spAttack: 135, spDefense: 105, speed: 100},
            abilities: {0: 'flame-body', hidden: 'swarm'},
            height: 1.6,
            weight: 46,
            colors: ['white', 'red', 'brown'],
            eggCycles: 40,
            eggGroups: ['bug'],
            prevEvolution: 'larvesta'
            },

        });
    thisIndex.indexOrder = indexOrder;

})();