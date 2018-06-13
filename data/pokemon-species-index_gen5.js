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

        'victini': {
            order: indexOrder++,
            token: 'victini',
            name: 'Victini',
            class: 'mythical',
            number: 494,
            types: ['psychic', 'fire'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 100, phDefense: 100, spAttack: 100, spDefense: 100, speed: 100},
            abilities: {0: 'victory-star'},
            height: 0.4,
            weight: 4,
            colors: ['yellow', 'orange', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },

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

        'patrat': {
            order: indexOrder++,
            token: 'patrat',
            name: 'Patrat',
            number: 504,
            types: ['normal'],
            baseStats: {hp: 45, phAttack: 55, phDefense: 39, spAttack: 35, spDefense: 39, speed: 42},
            abilities: {0: 'run-away', 1: 'keen-eye', hidden: 'analytic'},
            height: 0.5,
            weight: 11.6,
            colors: ['brown', 'white', 'red', 'yellow'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'watchog',
                method: 'level-up',
                value: 20
                }]
            },
        'watchog': {
            order: indexOrder++,
            token: 'watchog',
            name: 'Watchog',
            number: 505,
            types: ['normal'],
            baseStats: {hp: 60, phAttack: 85, phDefense: 69, spAttack: 60, spDefense: 69, speed: 77},
            abilities: {0: 'illuminate', 1: 'keen-eye', hidden: 'analytic'},
            height: 1.1,
            weight: 27,
            colors: ['brown', 'yellow', 'red', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'patrat'
            },

        'lillipup': {
            order: indexOrder++,
            token: 'lillipup',
            name: 'Lillipup',
            number: 506,
            types: ['normal'],
            baseStats: {hp: 45, phAttack: 60, phDefense: 45, spAttack: 25, spDefense: 45, speed: 55},
            abilities: {0: 'vital-spirit', 1: 'pickup', hidden: 'run-away'},
            height: 0.4,
            weight: 4.1,
            colors: ['white', 'brown', 'black', 'pink'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'herdier',
                method: 'level-up',
                value: 16
                }]
            },
        'herdier': {
            order: indexOrder++,
            token: 'herdier',
            name: 'Herdier',
            number: 507,
            types: ['normal'],
            baseStats: {hp: 65, phAttack: 80, phDefense: 65, spAttack: 35, spDefense: 65, speed: 60},
            abilities: {0: 'intimidate', 1: 'sand-rush', hidden: 'scrappy'},
            height: 0.9,
            weight: 14.7,
            colors: ['black', 'brown', 'white'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'lillipup',
            nextEvolutions: [{
                species: 'stoutland',
                method: 'level-up',
                value: 32
                }]
            },
        'stoutland': {
            order: indexOrder++,
            token: 'stoutland',
            name: 'Stoutland',
            number: 508,
            types: ['normal'],
            baseStats: {hp: 85, phAttack: 110, phDefense: 90, spAttack: 45, spDefense: 90, speed: 80},
            abilities: {0: 'intimidate', 1: 'sand-rush', hidden: 'scrappy'},
            height: 1.2,
            weight: 61,
            colors: ['white', 'black', 'gray', 'brown'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'herdier',
            },

        'purrloin': {
            order: indexOrder++,
            token: 'purrloin',
            name: 'Purrloin',
            number: 509,
            types: ['dark'],
            baseStats: {hp: 41, phAttack: 50, phDefense: 37, spAttack: 50, spDefense: 37, speed: 66},
            abilities: {0: 'limber', 1: 'unburden', hidden: 'prankster'},
            height: 0.4,
            weight: 10.1,
            colors: ['purple', 'white', 'pink', 'green'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'liepard',
                method: 'level-up',
                value: 20
                }]
            },
        'liepard': {
            order: indexOrder++,
            token: 'liepard',
            name: 'Liepard',
            number: 510,
            types: ['dark'],
            baseStats: {hp: 64, phAttack: 88, phDefense: 50, spAttack: 88, spDefense: 50, speed: 106},
            abilities: {0: 'limber', 1: 'unburden', hidden: 'prankster'},
            height: 1.1,
            weight: 37.5,
            colors: ['purple', 'yellow', 'pink', 'green'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'purrloin'
            },

        'pansage': {
            order: indexOrder++,
            token: 'pansage',
            name: 'Pansage',
            number: 511,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 50, phAttack: 53, phDefense: 48, spAttack: 53, spDefense: 48, speed: 64},
            abilities: {0: 'gluttony', hidden: 'overgrow'},
            height: 0.6,
            weight: 10.5,
            colors: ['green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'simisage', // leaf-stone
                method: 'type-appeal',
                value: 'grass',
                method2: 'level-up',
                value2: 20
                }]
            },
        'simisage': {
            order: indexOrder++,
            token: 'simisage',
            name: 'Simisage',
            number: 512,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 75, phAttack: 98, phDefense: 63, spAttack: 98, spDefense: 63, speed: 101},
            abilities: {0: 'gluttony', hidden: 'overgrow'},
            height: 1.1,
            weight: 30.5,
            colors: ['green', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'pansage'
            },

        'pansear': {
            order: indexOrder++,
            token: 'pansear',
            name: 'Pansear',
            number: 513,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 50, phAttack: 53, phDefense: 48, spAttack: 53, spDefense: 48, speed: 64},
            abilities: {0: 'gluttony', hidden: 'blaze'},
            height: 0.6,
            weight: 11,
            colors: ['red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'simisear', // fire-stone
                method: 'type-appeal',
                value: 'fire',
                method2: 'level-up',
                value2: 20
                }]
            },
        'simisear': {
            order: indexOrder++,
            token: 'simisear',
            name: 'Simisear',
            number: 514,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 75, phAttack: 98, phDefense: 63, spAttack: 98, spDefense: 63, speed: 101},
            abilities: {0: 'gluttony', hidden: 'blaze'},
            height: 1,
            weight: 28,
            colors: ['red', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'pansear'
            },

        'panpour': {
            order: indexOrder++,
            token: 'panpour',
            name: 'Panpour',
            number: 515,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 50, phAttack: 53, phDefense: 48, spAttack: 53, spDefense: 48, speed: 64},
            abilities: {0: 'gluttony', hidden: 'torrent'},
            height: 0.6,
            weight: 13.5,
            colors: ['blue', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'simipour', // water-stone
                method: 'type-appeal',
                value: 'water',
                method2: 'level-up',
                value2: 20
                }]
            },
        'simipour': {
            order: indexOrder++,
            token: 'simipour',
            name: 'Simipour',
            number: 516,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 75, phAttack: 98, phDefense: 63, spAttack: 98, spDefense: 63, speed: 101},
            abilities: {0: 'gluttony', hidden: 'torrent'},
            height: 1,
            weight: 29,
            colors: ['blue', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'panpour'
            },

        'munna': {
            order: indexOrder++,
            token: 'munna',
            name: 'Munna',
            number: 517,
            types: ['psychic'],
            baseStats: {hp: 76, phAttack: 25, phDefense: 45, spAttack: 67, spDefense: 55, speed: 24},
            abilities: {0: 'forewarn', 1: 'synchronize', hidden: 'telepathy'},
            height: 0.6,
            weight: 23.3,
            colors: ['pink', 'purple', 'red'],
            eggCycles: 10,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'musharna', // moon-stone
                method: 'type-appeal',
                value: 'psychic',
                method2: 'level-up',
                value2: 20
                }]
            },
        'musharna': {
            order: indexOrder++,
            token: 'musharna',
            name: 'Musharna',
            number: 518,
            types: ['psychic'],
            baseStats: {hp: 116, phAttack: 55, phDefense: 85, spAttack: 107, spDefense: 95, speed: 29},
            abilities: {0: 'forewarn', 1: 'synchronize', hidden: 'telepathy'},
            height: 1.1,
            weight: 60.5,
            colors: ['pink', 'purple'],
            eggCycles: 10,
            eggGroups: ['field'],
            prevEvolution: 'munna'
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
                method2: 'gender',
                value2: 'male'
                }, {
                species: 'unfezant-f',
                method: 'level-up',
                value: 32,
                method2: 'gender',
                value2: 'female'
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

        'blitzle': {
            order: indexOrder++,
            token: 'blitzle',
            name: 'Blitzle',
            number: 522,
            types: ['electric'],
            baseStats: {hp: 45, phAttack: 60, phDefense: 32, spAttack: 50, spDefense: 32, speed: 76},
            abilities: {0: 'lightning-rod', 1: 'motor-drive', hidden: 'sap-sipper'},
            height: 0.8,
            weight: 29.8,
            colors: ['black', 'white', 'blue', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'zebstrika',
                method: 'level-up',
                value: 27
                }]
            },
        'zebstrika': {
            order: indexOrder++,
            token: 'zebstrika',
            name: 'Zebstrika',
            number: 523,
            types: ['electric'],
            baseStats: {hp: 75, phAttack: 100, phDefense: 63, spAttack: 80, spDefense: 63, speed: 116},
            abilities: {0: 'lightning-rod', 1: 'motor-drive', hidden: 'sap-sipper'},
            height: 1.6,
            weight: 79.5,
            colors: ['black', 'white', 'blue', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'blitzle'
            },

        'woobat': {
            order: indexOrder++,
            token: 'woobat',
            name: 'Woobat',
            number: 527,
            types: ['psychic', 'flying'],
            baseStats: {hp: 65, phAttack: 45, phDefense: 43, spAttack: 55, spDefense: 43, speed: 72},
            abilities: {0: 'unaware', 1: 'klutz', hidden: 'simple'},
            height: 0.4,
            weight: 2.1,
            colors: ['blue', 'black', 'pink'],
            eggCycles: 15,
            eggGroups: ['flying', 'field'],
            nextEvolutions: [{
                species: 'swoobat',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 25
                }]
            },
        'swoobat': {
            order: indexOrder++,
            token: 'swoobat',
            name: 'Swoobat',
            number: 528,
            types: ['psychic', 'flying'],
            baseStats: {hp: 67, phAttack: 57, phDefense: 55, spAttack: 77, spDefense: 55, speed: 114},
            abilities: {0: 'unaware', 1: 'klutz', hidden: 'simple'},
            height: 0.9,
            weight: 10.5,
            colors: ['blue', 'pink', 'black'],
            eggCycles: 15,
            eggGroups: ['flying', 'field'],
            prevEvolution: 'woobat'
            },

        'drilbur': {
            order: indexOrder++,
            token: 'drilbur',
            name: 'Drilbur',
            number: 529,
            types: ['ground'],
            baseStats: {hp: 60, phAttack: 85, phDefense: 40, spAttack: 30, spDefense: 45, speed: 68},
            abilities: {0: 'sand-rush', 1: 'sand-force', hidden: 'mold-breaker'},
            height: 0.3,
            weight: 8.5,
            colorss: ['black', 'blue', 'white', 'pink'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'excadrill',
                method: 'level-up',
                value: 31
                }]
            },
        'excadrill': {
            order: indexOrder++,
            token: 'excadrill',
            name: 'Excadrill',
            number: 530,
            types: ['ground', 'steel'],
            baseStats: {hp: 110, phAttack: 135, phDefense: 60, spAttack: 50, spDefense: 65, speed: 88},
            abilities: {0: 'sand-rush', 1: 'sand-force', hidden: 'mold-breaker'},
            height: 0.7,
            weight: 40.4,
            colorss: ['brown', 'red', 'gray', 'white', 'pink'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'drilbur'
            },

        'timburr': {
            order: indexOrder++,
            token: 'timburr',
            name: 'Timburr',
            number: 532,
            types: ['fighting'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 75, phAttack: 80, phDefense: 55, spAttack: 25, spDefense: 35, speed: 35},
            abilities: {0: 'guts', 1: 'sheer-force', hidden: 'iron-fist'},
            height: 0.6,
            weight: 12.5,
            colors: ['gray', 'pink', 'brown', 'black'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            nextEvolutions: [{
                species: 'gurdurr',
                method: 'level-up',
                value: 25
                }]
            },
        'gurdurr': {
            order: indexOrder++,
            token: 'gurdurr',
            name: 'Gurdurr',
            number: 533,
            types: ['fighting'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 85, phAttack: 105, phDefense: 85, spAttack: 40, spDefense: 50, speed: 40},
            abilities: {0: 'guts', 1: 'sheer-force', hidden: 'iron-fist'},
            height: 1.2,
            weight: 40,
            colors: ['gray', 'pink', 'red'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'timburr',
            nextEvolutions: [{
                species: 'conkeldurr',
                method: 'trade-partner',
                value: 'auto',
                method2: 'level-up',
                value2: 45
                }]
            },
        'conkeldurr': {
            order: indexOrder++,
            token: 'conkeldurr',
            name: 'Conkeldurr',
            number: 534,
            types: ['fighting'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 105, phAttack: 140, phDefense: 95, spAttack: 55, spDefense: 65, speed: 45},
            abilities: {0: 'guts', 1: 'sheer-force', hidden: 'iron-fist'},
            height: 1.4,
            weight: 87,
            colors: ['brown', 'pink', 'gray', 'red', 'black'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'gurdurr'
            },

        'sewaddle': {
            order: indexOrder++,
            token: 'sewaddle',
            name: 'Sewaddle',
            number: 540,
            types: ['bug', 'grass'],
            baseStats: {hp: 45, phAttack: 53, phDefense: 70, spAttack: 40, spDefense: 60, speed: 42},
            abilities: {0: 'swarm', 1: 'chlorophyll', hidden: 'overcoat'},
            height: 0.3,
            weight: 2.5,
            colors: ['yellow', 'green', 'orange'],
            eggCycles: 15,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'swadloon',
                method: 'level-up',
                value: 20
                }]
            },
        'swadloon': {
            order: indexOrder++,
            token: 'swadloon',
            name: 'Swadloon',
            number: 541,
            types: ['bug', 'grass'],
            baseStats: {hp: 55, phAttack: 63, phDefense: 90, spAttack: 50, spDefense: 80, speed: 42},
            abilities: {0: 'leaf-guard', 1: 'chlorophyll', hidden: 'overcoat'},
            height: 0.5,
            weight: 7.3,
            colors: ['green', 'yellow'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'sewaddle',
            nextEvolutions: [{
                species: 'leavanny',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 40
                }]
            },
        'leavanny': {
            order: indexOrder++,
            token: 'leavanny',
            name: 'Leavanny',
            number: 542,
            types: ['bug', 'grass'],
            baseStats: {hp: 75, phAttack: 103, phDefense: 80, spAttack: 70, spDefense: 80, speed: 92},
            abilities: {0: 'swarm', 1: 'chlorophyll', hidden: 'overcoat'},
            height: 1.2,
            weight: 20.5,
            colors: ['yellow', 'green', 'red'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'swadloon'
            },

        'sandile': {
            order: indexOrder++,
            token: 'sandile',
            name: 'Sandile',
            number: 551,
            types: ['ground', 'dark'],
            baseStats: {hp: 50, phAttack: 72, phDefense: 35, spAttack: 35, spDefense: 35, speed: 65},
            abilities: {0: 'intimidate', 1: 'moxie', hidden: 'anger-point'},
            height: 0.7,
            weight: 15.2,
            colors: ['brown', 'black', 'pink'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'krokorok',
                method: 'level-up',
                value: 29
                }]
            },
        'krokorok': {
            order: indexOrder++,
            token: 'krokorok',
            name: 'Krokorok',
            number: 552,
            types: ['ground', 'dark'],
            baseStats: {hp: 60, phAttack: 82, phDefense: 45, spAttack: 45, spDefense: 45, speed: 74},
            abilities: {0: 'intimidate', 1: 'moxie', hidden: 'anger-point'},
            height: 1,
            weight: 33.4,
            colors: ['brown', 'pink', 'black'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'sandile',
            nextEvolutions: [{
                species: 'krookodile',
                method: 'level-up',
                value: 40
                }]
            },
        'krookodile': {
            order: indexOrder++,
            token: 'krookodile',
            name: 'Krookodile',
            number: 553,
            types: ['ground', 'dark'],
            baseStats: {hp: 95, phAttack: 117, phDefense: 80, spAttack: 65, spDefense: 70, speed: 92},
            abilities: {0: 'intimidate', 1: 'moxie', hidden: 'anger-point'},
            height: 1.5,
            weight: 96.3,
            colors: ['red', 'white', 'black'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'krokorok'
            },

        'darumaka': {
            order: indexOrder++,
            token: 'darumaka',
            name: 'Darumaka',
            number: 554,
            types: ['fire'],
            baseStats: {hp: 70, phAttack: 90, phDefense: 45, spAttack: 15, spDefense: 45, speed: 50},
            abilities: {0: 'hustle', hidden: 'inner-focus'},
            height: 0.6,
            weight: 37.5,
            colors: ['red', 'yellow', 'orange', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'darmanitan',
                method: 'level-up',
                value: 35
                }]
            },
        'darmanitan': {
            order: indexOrder++,
            token: 'darmanitan',
            name: 'Darmanitan',
            number: 555,
            types: ['fire'],
            baseStats: {hp: 105, phAttack: 140, phDefense: 55, spAttack: 30, spDefense: 55, speed: 95},
            abilities: {0: 'sheer-force', hidden: 'zen-mode'},
            height: 1.3,
            weight: 92.9,
            colors: ['red', 'orange', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'darumaka',
            nextEvolutions: [{
                species: 'zen-darmanitan',
                method: 'burst-evolution',
                value: 'zen-mode'
                }]
            },
        'zen-darmanitan': {
            order: indexOrder++,
            token: 'zen-darmanitan',
            name: 'Zen Darmanitan',
            formClass: 'burst-evolution',
            formToken: 'zen',
            number: 555,
            types: ['fire', 'psychic'],
            baseStats: {hp: 105, phAttack: 30, phDefense: 105, spAttack: 140, spDefense: 105, speed: 55},
            abilities: {0: 'zen-mode'},
            height: 1.3,
            weight: 92.9,
            colors: ['blue', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'darmanitan'
            },

        'dwebble': {
            order: indexOrder++,
            token: 'dwebble',
            name: 'Dwebble',
            number: 557,
            types: ['bug', 'rock'],
            baseStats: {hp: 50, phAttack: 65, phDefense: 85, spAttack: 35, spDefense: 35, speed: 55},
            abilities: {0: 'sturdy', 1: 'shell-armor', hidden: 'weak-armor'},
            height: 0.3,
            weight: 14.5,
            colors: ['orange', 'gray', 'black'],
            eggCycles: 20,
            eggGroups: ['bug', 'mineral'],
            nextEvolutions: [{
                species: 'crustle',
                method: 'level-up',
                value: 34
                }]
            },
        'crustle': {
            order: indexOrder++,
            token: 'crustle',
            name: 'Crustle',
            number: 558,
            types: ['bug', 'rock'],
            baseStats: {hp: 70, phAttack: 105, phDefense: 125, spAttack: 65, spDefense: 75, speed: 45},
            abilities: {0: 'sturdy', 1: 'shell-armor', hidden: 'weak-armor'},
            height: 1.4,
            weight: 200,
            colors: ['brown', 'red', 'gray', 'yellow'],
            eggCycles: 20,
            eggGroups: ['bug', 'mineral'],
            prevEvolution: 'dwebble'
            },

        'scraggy': {
            order: indexOrder++,
            token: 'scraggy',
            name: 'Scraggy',
            number: 559,
            types: ['dark', 'fighting'],
            baseStats: {hp: 50, phAttack: 75, phDefense: 70, spAttack: 35, spDefense: 70, speed: 48},
            abilities: {0: 'shed-skin', 1: 'moxie', hidden: 'intimidate'},
            height: 0.6,
            weight: 11.8,
            colors: ['yellow', 'red', 'white'],
            eggCycles: 15,
            eggGroups: ['field', 'dragon'],
            nextEvolutions: [{
                species: 'scrafty',
                method: 'level-up',
                value: 39
                }]
            },
        'scrafty': {
            order: indexOrder++,
            token: 'scrafty',
            name: 'Scrafty',
            number: 560,
            types: ['dark', 'fighting'],
            baseStats: {hp: 65, phAttack: 90, phDefense: 115, spAttack: 45, spDefense: 115, speed: 58},
            abilities: {0: 'shed-skin', 1: 'moxie', hidden: 'intimidate'},
            height: 1.1,
            weight: 30,
            colors: ['orange', 'yellow', 'red', 'gray', 'white'],
            eggCycles: 15,
            eggGroups: ['field', 'dragon'],
            prevEvolution: 'scraggy'
            },

        'yamask': {
            order: indexOrder++,
            token: 'yamask',
            name: 'Yamask',
            number: 562,
            types: ['ghost'],
            baseStats: {hp: 38, phAttack: 30, phDefense: 85, spAttack: 55, spDefense: 65, speed: 30},
            abilities: {0: 'mummy'},
            height: 0.5,
            weight: 1.5,
            colors: ['black', 'yellow', 'red'],
            eggCycles: 25,
            eggGroups: ['mineral', 'amorphous'],
            nextEvolutions: [{
                species: 'cofagrigus',
                method: 'level-up',
                value: 34
                }]
            },
        'cofagrigus': {
            order: indexOrder++,
            token: 'cofagrigus',
            name: 'Cofagrigus',
            number: 563,
            types: ['ghost'],
            baseStats: {hp: 58, phAttack: 50, phDefense: 145, spAttack: 95, spDefense: 105, speed: 30},
            abilities: {0: 'mummy'},
            height: 1.7,
            weight: 76.5,
            colors: ['yellow' , 'blue', 'black', 'red'],
            eggCycles: 25,
            eggGroups: ['mineral', 'amorphous'],
            prevEvolution: 'yamask'
            },

        'tirtouga': {
            order: indexOrder++,
            token: 'tirtouga',
            name: 'Tirtouga',
            number: 564,
            types: ['water', 'rock'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 54, phAttack: 78, phDefense: 103, spAttack: 53, spDefense: 45, speed: 22},
            abilities: {0: 'solid-rock', 1: 'sturdy', hidden: 'swift-swim'},
            height: 0.7,
            weight: 16.5,
            colors: ['blue', 'gray'],
            eggCycles: 30,
            eggGroups: ['water-1', 'water-3'],
            nextEvolutions: [{
                species: 'carracosta',
                method: 'level-up',
                value: 37
                }]
            },
        'carracosta': {
            order: indexOrder++,
            token: 'carracosta',
            name: 'Carracosta',
            number: 565,
            types: ['water', 'rock'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 74, phAttack: 108, phDefense: 133, spAttack: 83, spDefense: 65, speed: 32},
            abilities: {0: 'solid-rock', 1: 'sturdy', hidden: 'swift-swim'},
            height: 1.2,
            weight: 81,
            colors: ['blue', 'gray'],
            eggCycles: 30,
            eggGroups: ['water-1', 'water-3'],
            prevEvolution: 'tirtouga'
            },

        'archen': {
            order: indexOrder++,
            token: 'archen',
            name: 'Archen',
            number: 566,
            types: ['rock', 'flying'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 55, phAttack: 112, phDefense: 45, spAttack: 74, spDefense: 45, speed: 70},
            abilities: {0: 'defeatist'},
            height: 0.5,
            weight: 9.5,
            colors: ['yellow', 'red', 'blue'],
            eggCycles: 30,
            eggGroups: ['flying', 'water-3'],
            nextEvolutions: [{
                species: 'archeops',
                method: 'level-up',
                value: 37
                }]
            },
        'archeops': {
            order: indexOrder++,
            token: 'archeops',
            name: 'Archeops',
            number: 567,
            types: ['rock', 'flying'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 75, phAttack: 140, phDefense: 65, spAttack: 112, spDefense: 65, speed: 110},
            abilities: {0: 'defeatist'},
            height: 1.4,
            weight: 32,
            colors: ['yellow', 'blue', 'red', 'green'],
            eggCycles: 30,
            eggGroups: ['flying', 'water-3'],
            prevEvolution: 'archen'
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

        'solosis': {
            order: indexOrder++,
            token: 'solosis',
            name: 'Solosis',
            number: 577,
            types: ['psychic'],
            baseStats: {hp: 45, phAttack: 30, phDefense: 40, spAttack: 105, spDefense: 50, speed: 20},
            abilities: {0: 'overcoat', 1: 'magic-guard', hidden: 'regenerator'},
            height: 0.3,
            weight: 1,
            colors: ['green', 'red', 'yellow', 'black'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'duosion',
                method: 'level-up',
                value: 32
                }]
            },
        'duosion': {
            order: indexOrder++,
            token: 'duosion',
            name: 'Duosion',
            number: 578,
            types: ['psychic'],
            baseStats: {hp: 65, phAttack: 40, phDefense: 50, spAttack: 125, spDefense: 60, speed: 30},
            abilities: {0: 'overcoat', 1: 'magic-guard', hidden: 'regenerator'},
            height: 0.6,
            weight: 8,
            colors: ['green', 'red', 'black'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'solosis',
            nextEvolutions: [{
                species: 'reuniclus',
                method: 'level-up',
                value: 41
                }]
            },
        'reuniclus': {
            order: indexOrder++,
            token: 'reuniclus',
            name: 'Reuniclus',
            number: 579,
            types: ['psychic'],
            baseStats: {hp: 110, phAttack: 65, phDefense: 75, spAttack: 125, spDefense: 85, speed: 30},
            abilities: {0: 'overcoat', 1: 'magic-guard', hidden: 'regenerator'},
            height: 1,
            weight: 20.1,
            colors: ['green', 'red', 'yellow', 'black'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'duosion'
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

        'deerling': {
            order: indexOrder++,
            token: 'deerling',
            name: 'Deerling',
            number: 585,
            formClass: 'seasonal-variant',
            dynamicForms: true,
            seasonalForms: true,
            possibleForms: ['spring', 'summer', 'autumn', 'winter'],
            possibleFormsColors: {
                'spring': ['pink', 'white', 'yellow'],
                'summer': ['green', 'white', 'yellow'],
                'autumn': ['orange', 'white', 'yellow'],
                'winter': ['brown', 'white', 'yellow']
                },
            baseForm: 'spring',
            types: ['normal', 'grass'],
            baseStats: {hp: 60, phAttack: 60, phDefense: 50, spAttack: 40, spDefense: 50, speed: 75},
            abilities: {0: 'chlorophyll', 1: 'sap-sipper', hidden: 'serene-grace'},
            height: 0.6,
            weight: 19.5,
            colors: ['pink', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'spring-sawsbuck',
                method: 'level-up',
                value: 34,
                method2: 'form',
                value2: 'spring'
                },{
                species: 'summer-sawsbuck',
                method: 'level-up',
                value: 34,
                method2: 'form',
                value2: 'summer'
                },{
                species: 'autumn-sawsbuck',
                method: 'level-up',
                value: 34,
                method2: 'form',
                value2: 'autumn'
                },{
                species: 'winter-sawsbuck',
                method: 'level-up',
                value: 34,
                method2: 'form',
                value2: 'winter'
                }]
            },
        'spring-sawsbuck': {
            order: indexOrder++,
            token: 'spring-sawsbuck',
            name: 'Spring Sawsbuck',
            formClass: 'seasonal-variant',
            formToken: 'spring',
            number: 586,
            types: ['normal', 'grass'],
            baseStats: {hp: 80, phAttack: 100, phDefense: 70, spAttack: 60, spDefense: 70, speed: 95},
            abilities: {0: 'chlorophyll', 1: 'sap-sipper', hidden: 'serene-grace'},
            height: 1.9,
            weight: 92.5,
            colors: ['brown', 'yellow', 'pink'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'deerling'
            },
        'summer-sawsbuck': {
            order: indexOrder++,
            token: 'summer-sawsbuck',
            name: 'Summer Sawsbuck',
            formClass: 'seasonal-variant',
            formToken: 'summer',
            number: 586,
            types: ['normal', 'grass'],
            baseStats: {hp: 80, phAttack: 100, phDefense: 70, spAttack: 60, spDefense: 70, speed: 95},
            abilities: {0: 'chlorophyll', 1: 'sap-sipper', hidden: 'serene-grace'},
            height: 1.9,
            weight: 92.5,
            colors: ['brown', 'green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'deerling'
            },
        'autumn-sawsbuck': {
            order: indexOrder++,
            token: 'autumn-sawsbuck',
            name: 'Autumn Sawsbuck',
            formClass: 'seasonal-variant',
            formToken: 'autumn',
            number: 586,
            types: ['normal', 'grass'],
            baseStats: {hp: 80, phAttack: 100, phDefense: 70, spAttack: 60, spDefense: 70, speed: 95},
            abilities: {0: 'chlorophyll', 1: 'sap-sipper', hidden: 'serene-grace'},
            height: 1.9,
            weight: 92.5,
            colors: ['brown', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'deerling'
            },
        'winter-sawsbuck': {
            order: indexOrder++,
            token: 'winter-sawsbuck',
            name: 'Winter Sawsbuck',
            formClass: 'seasonal-variant',
            formToken: 'winter',
            number: 586,
            types: ['normal', 'grass'],
            baseStats: {hp: 80, phAttack: 100, phDefense: 70, spAttack: 60, spDefense: 70, speed: 95},
            abilities: {0: 'chlorophyll', 1: 'sap-sipper', hidden: 'serene-grace'},
            height: 1.9,
            weight: 92.5,
            colors: ['brown', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'deerling'
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

        'foongus': {
            order: indexOrder++,
            token: 'foongus',
            name: 'Foongus',
            number: 590,
            types: ['grass', 'poison'],
            baseStats: {hp: 69, phAttack: 55, phDefense: 45, spAttack: 55, spDefense: 55, speed: 15},
            abilities: {0: 'effect-spore', hidden: 'regenerator'},
            height: 0.2,
            weight: 1,
            colors: ['white', 'red', 'black', 'pink'],
            eggCycles: 20,
            eggGroups: ['grass'],
            nextEvolutions: [{
                species: 'amoonguss',
                method: 'level-up',
                value: 39
                }]
            },
        'amoonguss': {
            order: indexOrder++,
            token: 'amoonguss',
            name: 'Amoonguss',
            number: 591,
            types: ['grass', 'poison'],
            baseStats: {hp: 114, phAttack: 85, phDefense: 70, spAttack: 85, spDefense: 80, speed: 30},
            abilities: {0: 'effect-spore', hidden: 'regenerator'},
            height: 0.6,
            weight: 10.5,
            colors: ['gray', 'pink', 'black', 'white'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'foongus'
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
                species: 'eelektross', // thunder-stone
                method: 'type-surge',
                value: 'electric',
                method2: 'level-up',
                value2: 59
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
            abilities: {0: 'telepathy', 1: 'synchronize', hidden: 'analytic'},
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
            abilities: {0: 'telepathy', 1: 'synchronize', hidden: 'analytic'},
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
                species: 'chandelure', // dusk-stone
                method: 'type-surge',
                value: ['ghost', 'fire'],
                method2: 'level-up',
                value2: 61
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

        'cryogonal': {
            order: indexOrder++,
            token: 'cryogonal',
            name: 'Cryogonal',
            number: 615,
            types: ['ice'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 80, phAttack: 50, phDefense: 50, spAttack: 95, spDefense: 135, speed: 105},
            abilities: {0: 'levitate'},
            height: 1.1,
            weight: 148,
            colors: ['blue', 'white'],
            eggCycles: 25,
            eggGroups: ['mineral'],
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

        'reshiram': {
            order: indexOrder++,
            token: 'reshiram',
            name: 'Reshiram',
            class: 'legendary',
            number: 643,
            types: ['dragon', 'fire'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 120, phDefense: 100, spAttack: 150, spDefense: 120, speed: 90},
            abilities: {0: 'turboblaze'},
            height: 3.2,
            weight: 330,
            colors: ['white', 'white', 'red', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },
        'zekrom': {
            order: indexOrder++,
            token: 'zekrom',
            name: 'Zekrom',
            class: 'legendary',
            number: 644,
            types: ['dragon', 'electric'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 150, phDefense: 120, spAttack: 120, spDefense: 100, speed: 90},
            abilities: {0: 'teravolt'},
            height: 2.9,
            weight: 345,
            colors: ['black', 'black', 'blue', 'red'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with known species appeal data
    thisIndex.addSpeciesAppealValues([

        // Predator/prey relationships
        {base: 'archeops', species: 'omanyte'},
        {base: 'mandibuzz', species: 'cubone'},
        {base: 'heatmor', species: 'durant'},
        {base: 'pineco', species: 'dwebble'},

        // Symbiotic relationships
        {base: 'dusknoir', species: 'yamask'},
        {base: 'alomomola', species: 'luvdisc'},
        {base: 'karrablast', species: 'shelmet'},
        {base: 'shelmet', species: 'karrablast'},

        // Rival relationships
        {base: 'carvanha', species: 'basculin'},

        // Romantic relationships
        // ---

        // Feeding/pollination relationships
        {base: 'beautifly', species: 'lilligant'},
        {base: 'vibrava', species: 'maractus'},

        // One-sided (theft) relationships
        // --

        // Mistaken identify relationships
        // ---

        // Legendary trigger relationships
        // ---

        // Miscellaneous appeal
        {base: 'porygon2', species: 'elgyem'},
        {base: 'porygon2', species: 'beheeyem'},

        ]);

})();