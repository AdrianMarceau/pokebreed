/*
    * GLOBAL POKEMON INDEX DATA (CUSTOM / GEN X)
    * This data was collected from Zarel for Pokemon Showdown
    * via: https://github.com/Zarel/Pokemon-Showdown/blob/master/data/pokedex.js
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration('x');
    thisIndex.setRegion('custom');

    // Add the generation's list of base species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Cross-gen Prev-Evolutions

        'paramite': {
            order: thisIndex.beforeOrder('paras'),
            token: 'paramite',
            legacyToken: 'baby-paras',
            name: 'Paramite',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 46,
            dexNumber: 1012,
            types: ['bug'],
            baseStats: {hp: 17, phAttack: 35, phDefense: 27, spAttack: 22, spDefense: 27, speed: 12},
            abilities: {0: 'effect-spore', 1: 'dry-skin', hidden: 'damp'},
            height: 0.3,
            weight: 5.4,
            colors: ['orange', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'paras',
                method: 'level-up',
                value: 12
                }]
            },

        'kittri': {
            order: thisIndex.beforeOrder('vulpix'),
            token: 'kittri',
            legacyToken: 'baby-vulpix',
            name: 'Kittri',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 37,
            dexNumber: 1003,
            types: ['fire'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 19, phAttack: 21, phDefense: 20, spAttack: 25, spDefense: 33, speed: 33},
            abilities: {0: 'flash-fire', hidden: 'drought'},
            height: 0.6,
            weight: 9.9,
            colors: ['brown', 'orange'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'vulpix',
                method: 'level-up',
                value: 10
                }]
            },
        'alolan-kittri': {
            order: thisIndex.afterOrder('ninetales', 1),
            token: 'alolan-kittri',
            legacyToken: 'baby-alolan-vulpix',
            name: 'Alolan Kittri', // [???]
            class: 'baby',
            formClass: 'baby-evolution',
            formClass2: 'regional-variant',
            formToken: 'baby-alolan',
            baseSpecies: 'kittri',
            number: 37,
            dexNumber: 1003.1,
            types: ['ice'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 19, phAttack: 21, phDefense: 20, spAttack: 25, spDefense: 33, speed: 33},
            abilities: {0: 'snow-cloak', hidden: 'snow-warning'},
            height: 0.6,
            weight: 9.9,
            colors: ['white', 'blue'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'alolan-vulpix',
                method: 'level-up',
                value: 10
                }]
            },

        'meowzy': {
            order: thisIndex.beforeOrder('meowth'),
            token: 'meowzy',
            legacyToken: 'baby-meowth',
            name: 'Meowzy',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 52,
            dexNumber: 1002,
            types: ['normal'],
            baseStats: {hp: 20, phAttack: 22, phDefense: 17, spAttack: 20, spDefense: 20, speed: 45},
            abilities: {0: 'pickup', 1: 'technician', hidden: 'unnerve'},
            height: 0.4,
            weight: 4.2,
            colors: ['white', 'yellow', 'black', 'brown'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'meowth',
                method: 'level-up',
                value: 14
                }]
            },
        'alolan-meowzy': {
            order: thisIndex.afterOrder('persian', 1),
            token: 'alolan-meowzy',
            legacyToken: 'baby-alolan-meowth',
            name: 'Alolan Meowzy',
            class: 'baby',
            formClass: 'baby-evolution',
            formClass2: 'regional-variant',
            formToken: 'baby-alolan',
            baseSpecies: 'meowzy',
            number: 52,
            dexNumber: 1002.1,
            types: ['dark'],
            baseStats: {hp: 20, phAttack: 17, phDefense: 17, spAttack: 25, spDefense: 20, speed: 45},
            abilities: {0: 'pickup', 1: 'technician', hidden: 'rattled'},
            height: 0.4,
            weight: 4.2,
            colors: ['gray', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'alolan-meowth',
                method: 'level-up',
                value: 14
                }]
            },

        'embark': {
            order: thisIndex.beforeOrder('growlithe'),
            token: 'embark',
            legacyToken: 'baby-growlithe',
            name: 'Embark',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 58,
            dexNumber: 1010,
            types: ['fire'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 27, phAttack: 35, phDefense: 22, spAttack: 35, spDefense: 25, speed: 30},
            abilities: {0: 'intimidate', 1: 'flash-fire', hidden: 'justified'},
            height: 0.7,
            weight: 19,
            colors: ['orange', 'black', 'brown'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'growlithe',
                method: 'level-up',
                value: 10
                }]
            },

        'unicolt': {
            order: thisIndex.beforeOrder('ponyta'),
            token: 'unicolt',
            legacyToken: 'baby-ponyta',
            name: 'Unicolt',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 77,
            dexNumber: 1011,
            types: ['fire'],
            baseStats: {hp: 25, phAttack: 42, phDefense: 27, spAttack: 32, spDefense: 32, speed: 45},
            abilities: {0: 'run-away', 1: 'flash-fire', hidden: 'flame-body'},
            height: 1,
            weight: 30,
            colors: ['white', 'orange', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'ponyta',
                method: 'level-up',
                value: 20
                }]
            },

        'dododo': {
            order: thisIndex.beforeOrder('doduo'),
            token: 'dododo',
            legacyToken: 'baby-doduo',
            name: 'Dododo',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 84,
            dexNumber: 1005,
            types: ['normal'],
            baseStats: {hp: 18, phAttack: 43, phDefense: 23, spAttack: 18, spDefense: 18, speed: 37},
            abilities: {0: 'run-away', 1: 'early-bird', hidden: 'tangled-feet'},
            height: 1.4,
            weight: 39.2,
            colors: ['brown', 'white'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'doduo',
                method: 'level-up',
                value: 16
                }]
            },

        'oozby': {
            order: thisIndex.beforeOrder('grimer'),
            token: 'oozby',
            legacyToken: 'baby-grimer',
            name: 'Oozby',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 88,
            dexNumber: 1004,
            types: ['poison'],
            baseStats: {hp: 40, phAttack: 40, phDefense: 25, spAttack: 20, spDefense: 25, speed: 12},
            abilities: {0: 'stench', 1: 'sticky-hold', hidden: 'poison-touch'},
            height: 0.9,
            weight: 30,
            colors: ['purple'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'grimer',
                method: 'level-up',
                value: 19
                }]
            },
        'alolan-oozby': {
            order: thisIndex.afterOrder('muk', 1),
            token: 'alolan-oozby',
            legacyToken: 'baby-alolan-grimer',
            name: 'Alolan Oozby',
            class: 'baby',
            formClass: 'baby-evolution',
            formClass2: 'regional-variant',
            formToken: 'baby-alolan',
            baseSpecies: 'oozby',
            number: 88,
            dexNumber: 1004.1,
            types: ['poison'],
            baseStats: {hp: 40, phAttack: 40, phDefense: 25, spAttack: 20, spDefense: 25, speed: 12},
            abilities: {0: 'poison-touch', 1: 'gluttony', hidden: 'power-of-alchemy'},
            height: 0.7,
            weight: 42,
            colors: ['green'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'alolan-grimer',
                method: 'level-up',
                value: 19
                }]
            },

        'tanglet': {
            order: thisIndex.beforeOrder('tangela'),
            token: 'tanglet',
            legacyToken: 'baby-tangela',
            name: 'Tanglet',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 114,
            dexNumber: 1015,
            types: ['grass'],
            baseStats: {hp: 32, phAttack: 27, phDefense: 57, spAttack: 50, spDefense: 20, speed: 30},
            abilities: {0: 'chlorophyll', 1: 'leaf-guard', hidden: 'regenerator'},
            height: 1,
            weight: 35,
            colors: ['blue', 'red', 'black'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'tangela',
                method: 'level-up',
                value: 17
                }]
            },

        'kangaby': {
            order: thisIndex.beforeOrder('kangaskhan'),
            token: 'kangaby',
            legacyToken: 'baby-kangaskhan',
            name: 'Kangaby',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 115,
            dexNumber: 1001,
            types: ['normal'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 26, phAttack: 24, phDefense: 20, spAttack: 10, spDefense: 20, speed: 23},
            abilities: {0: 'early-bird', 1: 'scrappy', hidden: 'inner-focus'},
            height: 0.55,
            weight: 20,
            colors: ['gray', 'yellow', 'brown'],
            eggCycles: 20,
            eggParent: 'kangaskhan',
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'kangaskhan',
                method: 'happiness',
                value: 'high',
                method2: 'affection',
                value2: 'high'
                }, {
                species: 'cubone',
                method: 'extinction',
                value: true
                }]
            },

        'heirfry': {
            order: thisIndex.beforeOrder('goldeen'),
            token: 'heirfry',
            legacyToken: 'baby-goldeen',
            name: 'Heirfry',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 118,
            dexNumber: 1008,
            types: ['water'],
            baseStats: {hp: 23, phAttack: 34, phDefense: 30, spAttack: 18, spDefense: 25, speed: 32},
            abilities: {0: 'swift-swim', 1: 'water-veil', hidden: 'lightning-rod'},
            height: 0.6,
            weight: 15,
            colors: ['red', 'orange', 'white'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'goldeen',
                method: 'level-up',
                value: 17
                }]
            },

        'kalfling': {
            order: thisIndex.beforeOrder('tauros'),
            token: 'kalfling',
            legacyToken: 'baby-tauros',
            name: 'Kalfling',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 128,
            dexNumber: 1006,
            types: ['normal'],
            baseStats: {hp: 42, phAttack: 45, phDefense: 50, spAttack: 20, spDefense: 35, speed: 52},
            abilities: {0: 'intimidate', 1: 'anger-point', hidden: 'sheer-force'},
            height: 0.7,
            weight: 40.9,
            colors: ['brown', 'white', 'gray', 'pink'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'tauros',
                method: 'level-up',
                value: 11,
                method2: 'gender',
                value2: 'male'
                }, {
                species: 'miltank',
                method: 'level-up',
                value: 9,
                method2: 'gender',
                value2: 'female'
                }]
            },

        'succulite': {
            order: thisIndex.beforeOrder('maractus'),
            token: 'succulite',
            legacyToken: 'baby-maractus',
            name: 'Succulite',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 556,
            dexNumber: 1013,
            types: ['grass'],
            baseStats: {hp: 38, phAttack: 43, phDefense: 34, spAttack: 53, spDefense: 34, speed: 30},
            abilities: {0: 'water-absorb', 1: 'chlorophyll', hidden: 'storm-drain'},
            height: 1,
            weight: 28,
            colors: ['green', 'pink', 'yellow'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'maractus',
                method: 'level-up',
                value: 10
                }]
            },

        'elemonk': {
            order: thisIndex.beforeOrder('pansage'),
            token: 'elemonk',
            name: 'Elemonk',
            class: 'baby',
            formClass: 'baby-evolution',
            formClass2: 'type-variant',
            dynamicForms: true,
            typeForms: true,
            syncTypeToForm: false,
            possibleForms: ['baby', 'baby-grass', 'baby-fire', 'baby-water'],
            possibleFormsTriggers: {'baby': 'normal', 'baby-grass': 'grass', 'baby-fire': 'fire', 'baby-water': 'water'},
            baseForm: 'base',
            formToken: 'baby',
            number: 511,
            dexNumber: 1007,
            types: ['normal'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 25, phAttack: 26, phDefense: 24, spAttack: 26, spDefense: 24, speed: 32},
            abilities: {0: 'gluttony', hidden: 'overgrow'},
            height: 0.4,
            weight: 7.1,
            colors: ['gray', 'white', 'yellow'],
            possibleFormColors: {
                'baby': ['gray', 'white', 'yellow'],
                'baby-grass': ['gray', 'white', 'yellow', 'green'],
                'baby-fire': ['gray', 'white', 'yellow', 'red'],
                'baby-water': ['gray', 'white', 'yellow', 'blue']
                },
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'pansage',
                method: 'form',
                value: 'baby-grass',
                method2: 'level-up',
                value2: 10
                }, {
                species: 'pansear',
                method: 'form',
                value: 'baby-fire',
                method2: 'level-up',
                value2: 10
                }, {
                species: 'panpour',
                method: 'form',
                value: 'baby-water',
                method2: 'level-up',
                value2: 10
                }]
            },

        // Cross-gen Next-Evolutions

        'ms-mime': {
            order: thisIndex.afterOrder('mr-mime'),
            token: 'ms-mime',
            name: 'Ms. Mime',
            formClass: 'gender-variant',
            formToken: 'female',
            number: 122,
            dexNumber: 1023,
            types: ['psychic', 'fairy'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 40, phAttack: 45, phDefense: 65, spAttack: 100, spDefense: 120, speed: 90},
            abilities: {0: 'soundproof', 1: 'filter', hidden: 'technician'},
            height: 1.3,
            weight: 54.5,
            colors: ['blue', 'pink', 'white', 'red'],
            eggCycles: 25,
            eggPartner: 'mr-mime',
            eggGroups: ['human-like'],
            prevEvolution: 'mime-jr',
            buttonGeneration: 1
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Add the generation's list of cross-gen evos/forms to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Newly Discovered Forms

        'snow-wormadam': {
            order: thisIndex.afterOrder('trash-wormadam', 1),
            token: 'snow-wormadam',
            name: 'Snow Wormadam',
            formClass: 'field-variant',
            formToken: 'snow',
            number: 413,
            types: ['bug', 'ice'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 60, phAttack: 69, phDefense: 95, spAttack: 69, spDefense: 95, speed: 36},
            abilities: {0: 'anticipation', hidden: 'overcoat'},
            height: 0.5,
            weight: 6.5,
            colors: ['white', 'blue', 'black'],
            eggPartner: 'mothim',
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'burmy'
            },
        'bubble-wormadam': {
            order: thisIndex.afterOrder('trash-wormadam', 2),
            token: 'bubble-wormadam',
            name: 'Bubble Wormadam',
            formClass: 'field-variant',
            formToken: 'bubble',
            number: 413,
            types: ['bug', 'water'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 60, phAttack: 69, phDefense: 95, spAttack: 69, spDefense: 95, speed: 36},
            abilities: {0: 'anticipation', hidden: 'overcoat'},
            height: 0.5,
            weight: 6.5,
            colors: ['blue', 'yellow', 'purple', 'black'],
            eggPartner: 'mothim',
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'burmy'
            },

        // Regional Variants (via Proto Space)

        'proto-hoppip': {
            order: thisIndex.afterOrder('jumpluff', 1),
            token: 'proto-hoppip',
            name: 'Proto Hoppip',
            formClass: 'regional-variant',
            formToken: 'proto',
            baseSpecies: 'hoppip',
            number: 187,
            types: ['grass'],
            baseStats: {hp: 35, phAttack: 35, phDefense: 50, spAttack: 35, spDefense: 55, speed: 40},
            abilities: {0: 'leaf-guard', 1: 'sap-sipper', hidden: 'levitate'},
            height: 0.4,
            weight: 0.5,
            colors: ['black', 'green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            nextEvolutions: [{
                species: 'proto-skiploom',
                method: 'level-up',
                value: 18
                }],
            altBaseEvolutions: [{
                species: 'hoppip',
                method: 'type-appeal',
                value: 'flying'
                }],
            buttonGeneration: 2
            },
        'proto-skiploom': {
            order: thisIndex.afterOrder('jumpluff', 2),
            token: 'proto-skiploom',
            name: 'Proto Skiploom',
            formClass: 'regional-variant',
            formToken: 'proto',
            baseSpecies: 'skiploom',
            number: 188,
            types: ['grass'],
            baseStats: {hp: 55, phAttack: 45, phDefense: 80, spAttack: 45, spDefense: 65, speed: 50},
            abilities: {0: 'leaf-guard', 1: 'sap-sipper', hidden: 'levitate'},
            height: 0.6,
            weight: 1,
            colors: ['green', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            prevEvolution: 'proto-hoppip',
            nextEvolutions: [{
                species: 'proto-jumpluff',
                method: 'level-up',
                value: 27
                }],
            buttonGeneration: 2
            },
        'proto-jumpluff': {
            order: thisIndex.afterOrder('jumpluff', 3),
            token: 'proto-jumpluff',
            name: 'Proto Jumpluff',
            formClass: 'regional-variant',
            formToken: 'proto',
            baseSpecies: 'jumpluff',
            number: 189,
            types: ['grass'],
            baseStats: {hp: 75, phAttack: 55, phDefense: 110, spAttack: 55, spDefense: 95, speed: 70},
            abilities: {0: 'leaf-guard', 1: 'sap-sipper', hidden: 'levitate'},
            height: 0.8,
            weight: 3,
            colors: ['pink', 'green', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            prevEvolution: 'proto-skiploom',
            buttonGeneration: 2
            },

        // Primal Evolutions

        'primal-dialga': {
            order: thisIndex.afterOrder('dialga'),
            token: 'primal-dialga',
            name: 'Primal Dialga',
            class: 'legendary',
            formClass: 'primal-reversion',
            formToken: 'primal',
            baseSpecies: 'dialga',
            number: 483,
            dexNumber: 1037,
            types: ['steel', 'dragon'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 140, phDefense: 140, spAttack: 170, spDefense: 120, speed: 110},
            abilities: {0: 'telepathy'},
            height: 5.9,
            weight: 1025,
            colors: ['white', 'blue', 'gray'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'dialga'
            },

        'primal-palkia': {
            order: thisIndex.afterOrder('palkia'),
            token: 'primal-palkia',
            name: 'Primal Palkia',
            class: 'legendary',
            formClass: 'primal-reversion',
            formToken: 'primal',
            baseSpecies: 'palkia',
            number: 484,
            dexNumber: 1038,
            types: ['water', 'dragon'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 90, phAttack: 140, phDefense: 120, spAttack: 170, spDefense: 140, speed: 120},
            abilities: {0: 'telepathy'},
            height: 4.6,
            weight: 504,
            colors: ['purple', 'white', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'palkia'
            },

        // Burst Evolutions

        'estrus-nidoqueen': {
            order: thisIndex.afterOrder('nidoqueen'),
            token: 'estrus-nidoqueen',
            name: 'Estrus Nidoqueen',
            formClass: 'burst-evolution',
            formToken: 'estrus',
            baseSpecies: 'nidoqueen',
            number: 31,
            dexNumber: 1030,
            types: ['poison', 'ground'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 90, phAttack: 117, phDefense: 87, spAttack: 100, spDefense: 85, speed: 126},
            abilities: {0: 'poison-point', 1: 'rivalry', hidden: 'sheer-force'},
            height: 0.2,
            weight: 0.9,
            colors: ['blue', 'pink'],
            eggCycles: 20,
            eggPartner: 'nidoking',
            eggGroups: ['monster', 'field'],
            prevEvolution: 'nidoqueen'
            },

        'burst-machamp': {
            order: thisIndex.afterOrder('machamp'),
            token: 'burst-machamp',
            name: 'Burst Machamp',
            formClass: 'burst-evolution',
            formToken: 'burst',
            baseSpecies: 'machamp',
            number: 68,
            dexNumber: 1032,
            types: ['fighting'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 90, phAttack: 130, phDefense: 80, spAttack: 65, spDefense: 85, speed: 55},
            abilities: {0: 'guts', 1: 'no-guard', hidden: 'steadfast'},
            height: 1.6,
            weight: 130,
            colors: ['red', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'machamp'
            },

        'super-ditto': {
            order: thisIndex.afterOrder('ditto'),
            token: 'super-ditto',
            name: 'Super Ditto',
            formClass: 'burst-evolution',
            formToken: 'super',
            number: 132,
            dexNumber: 1028,
            types: ['normal'],
            genderRatio: {none: 1.000},
            lifePoints: 360,
            baseStats: {hp: 48, phAttack: 48, phDefense: 48, spAttack: 48, spDefense: 48, speed: 48},
            abilities: {0: 'limber'}, // hidden: 'imposter' [removed]
            height: 0.3,
            weight: 4,
            colors: ['purple'],
            eggCycles: 20,
            eggGroups: ['ditto'],
            prevEvolution: 'ditto'
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with alt base evolution data
    thisIndex.addAltBaseEvolutions([

        {base: 'paras', species: 'paramite', method: 'type-surge', value: 'bug'},
        {base: 'vulpix', species: 'kittri', method: 'type-surge', value: 'fire'},
        {base: 'alolan-vulpix', species: 'alolan-kittri', method: 'type-surge', value: 'ice'},
        {base: 'meowth', species: 'meowzy', method: 'type-surge', value: 'normal'},
        {base: 'alolan-meowth', species: 'alolan-meowzy', method: 'type-surge', value: 'dark'},
        {base: 'growlithe', species: 'embark', method: 'type-surge', value: 'fire'},
        {base: 'ponyta', species: 'unicolt', method: 'type-surge', value: 'fire'},
        {base: 'doduo', species: 'dododo', method: 'type-surge', value: 'normal'},
        {base: 'grimer', species: 'oozby', method: 'type-surge', value: 'poison'},
        {base: 'alolan-grimer', species: 'alolan-oozby', method: 'type-surge', value: 'dark'},
        {base: 'tangela', species: 'tangelet', method: 'type-surge', value: 'grass'},
        {base: 'goldeen', species: 'heirfry', method: 'type-surge', value: 'water'},
        {base: 'maractus', species: 'succulite', method: 'type-surge', value: 'grass'},
        {base: 'tauros', species: 'kalfling', method: 'type-surge', value: 'normal'},
        {base: 'miltank', species: 'kalfling', method: 'type-surge', value: 'normal'},
        {base: 'pansage', species: 'elemonk', method: 'type-warning', value: 'grass'},
        {base: 'pansear', species: 'elemonk', method: 'type-warning', value: 'fire'},
        {base: 'panpour', species: 'elemonk', method: 'type-warning', value: 'water'},

        {base: 'hoppip', species: 'proto-hoppip', method: 'type-warning', value: 'flying'},

        ]);

    // Update previous gen pokemon with new prev evolution data
    thisIndex.addPrevEvolutions([

        {base: 'kangaskhan', species: 'kangaby'},

        ]);

    // Update previous gen pokemon with new possible form data
    thisIndex.addPossibleForms([

        {base: 'burmy', form: 'snow', triggers: ['snow', 'sky'], colors: ['white', 'black', 'blue', 'yellow']},
        {base: 'burmy', form: 'bubble', triggers: ['river', 'seafloor'], colors: ['blue', 'black', 'purple', 'yellow']},

        ]);

    // Update previous gen pokemon with new gender ratio data
    thisIndex.addGenderRatios([
        {base: 'mr-mime', ratio: {male: 1.0000}},
        ]);

    // Update previous gen pokemon with new gender ratio data
    thisIndex.addEggPartners([
        {base: 'mr-mime', species: 'ms-mime'},
        ]);

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([

        {base: 'mime-jr', species: 'mr-mime', method: 'affection', value: 'high', method2: 'gender', value2: 'male', method3: 'level-up', value3: 25, replace: true},
        {base: 'mime-jr', species: 'ms-mime', method: 'affection', value: 'high', method2: 'gender', value2: 'female', method3: 'level-up', value3: 25},

        {base: 'burmy', species: 'snow-wormadam', method: 'level-up', value: 20, method2: 'gender', value2: 'female', method3: 'form', value3: 'snow'},
        {base: 'burmy', species: 'bubble-wormadam', method: 'level-up', value: 20, method2: 'gender', value2: 'female', method3: 'form', value3: 'bubble'},

        {base: 'dialga', species: 'primal-dialga', method: 'primal-reversion', value: 'adamant-orb'},
        {base: 'palkia', species: 'primal-palkia', method: 'primal-reversion', value: 'lustrous-orb'},

        {base: 'machamp', species: 'burst-machamp', method: 'burst-evolution', value: 'fighting-spirit', method2: 'type-surge', value2: 'fighting'},
        {base: 'nidoqueen', species: 'estrus-nidoqueen', method: 'burst-evolution', value: 'burning-passion', method2: 'type-surge', value2: 'poison'},

        {base: 'ditto', species: 'super-ditto', method: 'level-up', value: 10, method2: 'fusion-species', value2: 'ditto', switch: 'and'},

        ]);

    // Update previous gen pokemon with known species appeal data
    thisIndex.addSpeciesAppealValues([

        // Predator/prey relationships
        // ---

        // Symbiotic relationships
        // ---

        // Rival relationships
        // ---

        // Romantic relationships
        // ---

        // Feeding/pollination relationships
        // ---

        // One-sided (theft) relationships
        // ---

        // Mistaken identify relationships
        // ---

        // Legendary trigger relationships
        // ---

        ]);


    // ---------------------- //


    // Add the generation's list of hidden species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Shadow Pokemon

        'shadow-mewtwo': {
            order: indexOrder++,
            token: 'shadow-mewtwo',
            name: 'Shadow Mewtwo',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            //baseSpecies: 'mewtwo',
            number: 150,
            dexNumber: 1039,
            displayNumber: 1039,
            dexGeneration: 'x',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 106, phAttack: 110, phDefense: 90, spAttack: 154, spDefense: 90, speed: 130},
            abilities: {0: 'pressure'},
            height: 2,
            weight: 122,
            colors: ['gray', 'yellow', 'black'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its dark aura repels any and all visitors.',
            speciesEffects: ['repelAllVisitors'],
            hiddenPokemon: true,
            nextEvolutions: [{
                species: 'shadow-mega-mewtwo',
                method: 'level-up',
                value: 360
                }]
            },
        'shadow-mega-mewtwo': {
            order: indexOrder++,
            token: 'shadow-mega-mewtwo',
            name: 'Shadow Mega Mewtwo',
            class: 'legendary',
            formClass: 'shadow-variant',
            formClass2: 'mega-evolution',
            formClass3: 'seasonal-variant',
            formToken: 'shadow-mega-x',
            baseSpecies: 'shadow-mewtwo',
            dynamicForms: true,
            seasonalForms: true,
            possibleForms: ['shadow-mega-x', 'shadow-mega-y'],
            possibleFormsTriggers: {
                'winter': 'shadow-mega-x',
                'spring': 'shadow-mega-y',
                'summer': 'shadow-mega-x',
                'autumn': 'shadow-mega-y',
                },
            baseForm: 'shadow-mega-x',
            number: 150,
            dexNumber: 1039.5,
            displayNumber: 1039.5,
            dexGeneration: 'x',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 106, phAttack: 170, phDefense: 85, spAttack: 174, spDefense: 110, speed: 85},
            abilities: {0: 'pressure'},
            height: 2.3,
            weight: 127,
            colors: ['gray', 'yellow', 'black'],
            possibleFormColors: {
                'shadow-mega-x': ['gray', 'yellow', 'black', 'blue'],
                'shadow-mega-y': ['gray', 'yellow', 'black', 'red']
                },
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'shadow-mewtwo',
            buttonQuote: 'Its dark aura repels any and all visitors.',
            speciesEffects: ['repelAllVisitors'],
            hiddenPokemon: true
            },

        'shadow-lugia': {
            order: indexOrder++,
            token: 'shadow-lugia',
            name: 'Shadow Lugia',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            //baseSpecies: 'lugia',
            number: 249,
            dexNumber: 1040,
            displayNumber: 1040,
            dexGeneration: 'x',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 106, phAttack: 90, phDefense: 130, spAttack: 90, spDefense: 154, speed: 110},
            abilities: {0: 'pressure'},
            height: 5.2,
            weight: 216,
            colors: ['purple', 'blue', 'white', 'red'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its dark aura reverses elemental type appeal.',
            speciesEffects: ['reverseTypeAppeal'],
            hiddenPokemon: true
            },

        'shadow-entei': {
            order: indexOrder++,
            token: 'shadow-entei',
            name: 'Shadow Entei',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            //baseSpecies: 'entei',
            number: 244,
            dexNumber: 1041,
            displayNumber: 1041,
            dexGeneration: 'x',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 115, phAttack: 115, phDefense: 85, spAttack: 90, spDefense: 75, speed: 100},
            abilities: {0: 'pressure'},
            height: 2.1,
            weight: 198,
            colors: ['gray', 'black', 'blue', 'white', 'red'],
            eggCycles: 80,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its dark aura prohibits all forms of breeding.',
            speciesEffects: ['preventAllBreeding'],
            hiddenPokemon: true
            },

        'shadow-celebi': {
            order: indexOrder++,
            token: 'shadow-celebi',
            name: 'Shadow Celebi',
            class: 'mythical',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            //baseSpecies: 'celebi',
            number: 251,
            dexNumber: 1042,
            displayNumber: 1042,
            dexGeneration: 'x',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 100, phAttack: 100, phDefense: 100, spAttack: 100, spDefense: 100, speed: 100},
            abilities: {0: 'natural-cure'},
            height: 0.6,
            weight: 5,
            colors: ['gray', 'purple', 'red'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its dark aura suppresses all kinds of evolution.',
            speciesEffects: ['preventAllEvolution'],
            hiddenPokemon: true
            },

        'shadow-latios': {
            order: indexOrder++,
            token: 'shadow-latios',
            name: 'Shadow Latios',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            //baseSpecies: 'latios',
            number: 381,
            dexNumber: 1043,
            displayNumber: 1043,
            dexGeneration: 'x',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 80, phAttack: 90, phDefense: 80, spAttack: 130, spDefense: 110, speed: 110},
            abilities: {0: 'levitate'},
            height: 2,
            weight: 60,
            colors: ['purple', 'blue', 'white', 'yellow'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its dark aura nullifies inter-species appeal.',
            speciesEffects: ['ignoreSpeciesAppeal'],
            hiddenPokemon: true
            },

        // Shining Evolutions

        'gold-ho-oh': {
            order: indexOrder++,
            token: 'gold-ho-oh',
            name: 'Gold Ho-Oh',
            class: 'legendary',
            formClass: 'shining-variant',
            formToken: 'gold',
            //baseSpecies: 'ho-oh',
            number: 250,
            dexNumber: 1044,
            displayNumber: 1044,
            dexGeneration: 'x',
            excludeFromZoneStats: true,
            types: ['shining'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 106, phAttack: 130, phDefense: 90, spAttack: 110, spDefense: 154, speed: 90},
            abilities: {0: 'regenerator'},
            height: 3.8,
            weight: 199,
            colors: ['gold'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its rainbow feathers inspire Pokémon to show their true colours.',
            speciesEffects: ['increaseColourVariations'],
            hiddenPokemon: true
            },

        'silver-suicune': {
            order: indexOrder++,
            token: 'silver-suicune',
            name: 'Silver Suicune',
            class: 'legendary',
            formClass: 'shining-variant',
            formToken: 'silver',
            //baseSpecies: 'suicune',
            number: 245,
            dexNumber: 1045,
            displayNumber: 1045,
            types: ['shining'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 100, phAttack: 75, phDefense: 115, spAttack: 90, spDefense: 115, speed: 85},
            abilities: {0: 'pressure'},
            height: 2,
            weight: 187,
            colors: ['silver'],
            eggCycles: 80,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its shimmering coat inspires Pokémon to resist legendary influence.',
            speciesEffects: ['repelSpecialVisitors'],
            hiddenPokemon: true
            },

        'crystal-onix': {
            order: indexOrder++,
            token: 'crystal-onix',
            name: 'Crystal Onix',
            class: 'legendary',
            formClass: 'shining-variant',
            formToken: 'crystal',
            //baseSpecies: 'onix',
            number: 95,
            dexNumber: 1046,
            displayNumber: 1046,
            types: ['shining'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 35, phAttack: 45, phDefense: 160, spAttack: 30, spDefense: 45, speed: 70},
            abilities: {0: 'pressure'},
            height: 8.8,
            weight: 210,
            colors: ['crystal'],
            eggCycles: 25,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its unbreakable body inspires Pokémon to discard their weaknesses.',
            speciesEffects: ['ignoreTypeWeaknesses'],
            hiddenPokemon: true
            },

        });
    thisIndex.indexOrder = indexOrder;

})();
