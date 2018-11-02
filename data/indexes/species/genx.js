/*
    * GLOBAL POKEMON INDEX DATA (CUSTOM / GEN X)
    * This data was collected from various sources and heavily edited.
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
            order: thisIndex.beforeOrder('alolan-vulpix'),
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

        'rhydoll': {
            order: thisIndex.beforeOrder('rhyhorn'),
            token: 'rhydoll',
            legacyToken: 'baby-rhydoll',
            name: 'Rhydoll',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 111,
            dexNumber: 1011.1111,
            types: ['ground', 'rock'],
            baseStats: {hp: 40, phAttack: 42, phDefense: 48, spAttack: 15, spDefense: 15, speed: 13},
            abilities: {0: 'lightning-rod', 1: 'rock-head', hidden: 'reckless'},
            height: 0.4,
            weight: 95,
            colors: ['gray'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'rhyhorn',
                method: 'level-up',
                value: 21
                }]
            },

        'pterabite': {
            order: thisIndex.beforeOrder('aerodactyl'),
            token: 'pterabite',
            legacyToken: 'baby-aerodactyl',
            name: 'Pterabite',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            isFossilPokemon: true,
            number: 142,
            dexNumber: 1011.2222,
            types: ['rock', 'flying'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 40, phAttack: 53, phDefense: 33, spAttack: 30, spDefense: 38, speed: 65},
            abilities: {0: 'rock-head', 1: 'pressure', hidden: 'unnerve'},
            height: 1.2,
            weight: 42,
            colors: ['gray', 'green', 'purple'],
            eggCycles: 35,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'aerodactyl',
                method: 'level-up',
                value: 20
                }]
            },

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

        'tanglet': {
            order: thisIndex.beforeOrder('tangela'),
            token: 'tanglet',
            legacyToken: 'baby-tangela',
            name: 'Tanglet',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 114,
            dexNumber: 1014,
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

        'tungzel': {
            order: thisIndex.beforeOrder('lickitung'),
            token: 'tungzel',
            legacyToken: 'baby-lickitung',
            name: 'Tungzel',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 108,
            dexNumber: 1016,
            types: ['normal'],
            baseStats: {hp: 45, phAttack: 28, phDefense: 38, spAttack: 30, spDefense: 38, speed: 15},
            abilities: {0: 'own-tempo', 1: 'oblivious', hidden: 'cloud-nine'},
            height: 0.9,
            weight: 45.1,
            colors: ['pink', 'yellow'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'lickitung',
                method: 'level-up',
                value: 17
                }]
            },

        // Cross-gen Prev-Evolutions AND Next-Evolutions

        'twintied': {
            order: thisIndex.beforeOrder('girafarig'),
            token: 'twintied',
            name: 'Twintied',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 203,
            dexNumber: 1020,
            types: ['ghost', 'psychic'],
            baseStats: {hp: 35, phAttack: 40, phDefense: 65, spAttack: 32, spDefense: 32, speed: 42},
            abilities: {0: 'levitate'},
            height: 1.4,
            weight: 1.2,
            colors: ['black', 'pink', 'white'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'girafarig',
                method: 'level-up',
                value: 22
                }]
            },
        'mega-girafarig': {
            order: thisIndex.afterOrder('girafarig'),
            token: 'mega-girafarig',
            name: 'Mega Girafarig',
            formClass: 'mega-evolution',
            formToken: 'mega',
            baseSpecies: 'girafarig',
            number: 203,
            dexNumber: 1021,
            baseGameGeneration: 2,
            types: ['ghost', 'normal'],
            baseStats: {hp: 95, phAttack: 100, phDefense: 60, spAttack: 140, spDefense: 85, speed: 80},
            abilities: {0: 'insomnia'},
            height: 1.7,
            weight: 42.6,
            colors: ['black', 'white', 'pink', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'girafarig'
            },

        // Cross-gen Next-Evolutions

        'meandrabel': {
            order: thisIndex.afterOrder('victreebel'),
            token: 'meandrabel',
            name: 'Meandrabel',
            formClass: 'next-evolution',
            formToken: 'evo',
            number: 70,
            dexNumber: 1022,
            types: ['poison', 'grass'],
            baseStats: {hp: 75, phAttack: 100, phDefense: 65, spAttack: 105, spDefense: 70, speed: 75},
            abilities: {0: 'poison-heal', hidden: 'unaware'},
            height: 1.6,
            weight: 14.5,
            colors: ['yellow', 'green', 'brown', 'pink'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'weepinbell'
            },

        'ms-mime': {
            order: thisIndex.afterOrder('mr-mime'),
            token: 'ms-mime',
            name: 'Ms. Mime',
            formClass: 'gender-variant',
            formToken: 'female',
            number: 122,
            dexNumber: 1024,
            types: ['fairy', 'psychic'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 50, phAttack: 45, phDefense: 55, spAttack: 110, spDefense: 100, speed: 100},
            abilities: {0: 'soundproof', 1: 'filter', hidden: 'technician'},
            height: 1.3,
            weight: 54.5,
            colors: ['blue', 'pink', 'white', 'red'],
            eggCycles: 25,
            eggPartner: 'mr-mime',
            eggGroups: ['human-like'],
            prevEvolution: 'mime-jr'
            },

        'buzzqwill': {
            order: thisIndex.afterOrder('qwilfish'),
            token: 'buzzqwill',
            name: 'Buzzqwill',
            formClass: 'next-evolution',
            formToken: 'evo',
            number: 211,
            dexNumber: 1026,
            types: ['electric', 'poison'],
            baseStats: {hp: 95, phAttack: 100, phDefense: 95, spAttack: 60, spDefense: 75, speed: 85},
            abilities: {0: 'static', 1: 'aquatic', hidden: 'aftermath'},
            height: 0.5,
            weight: 3.9,
            colors: ['purple', 'yellow', 'pink'],
            eggCycles: 20,
            eggGroups: ['water-2'],
            prevEvolution: 'qwilfish'
            },

        // Cross-gen Mega-Evolutions

        'mega-politoed': {
            order: thisIndex.afterOrder('politoed'),
            token: 'mega-politoed',
            name: 'Mega Politoed',
            formClass: 'mega-evolution',
            formToken: 'mega',
            baseSpecies: 'politoed',
            number: 186,
            dexNumber: 1026.1111,
            types: ['water'],
            baseStats: {hp: 90, phAttack: 115, phDefense: 80, spAttack: 130, spDefense: 105, speed: 80},
            abilities: {0: 'water-absorb', 1: 'damp', hidden: 'drizzle'},
            height: 1.1,
            weight: 33.9,
            colors: ['green', 'yellow', 'blue', 'pink'],
            eggCycles: 20,
            eggLimit: 5,
            eggGroups: ['water-1'],
            prevEvolution: 'politoed'
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Add the generation's list of cross-gen evos/forms to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Ancient Variants (Proto Forms)

        'proto-aipom': {
            order: thisIndex.afterOrder('ambipom', 1),
            token: 'proto-aipom',
            name: 'Proto Aipom',
            formClass: 'ancient-variant',
            formToken: 'proto',
            baseSpecies: 'aipom',
            number: 190,
            dexNumber: 1029,
            types: ['dark'],
            baseStats: {hp: 55, phAttack: 85, phDefense: 55, spAttack: 40, spDefense: 55, speed: 70},
            abilities: {0: 'run-away', 1: 'pickup', hidden: 'skill-link'},
            height: 0.8,
            weight: 11.4,
            colors: ['black', 'brown'],
            eggCycles: 20,
            eggGroups: ['field'],
            altBaseEvolutions: [{
                species: 'aipom',
                method: 'type-warning',
                value: 'dark'
                }],
            nextEvolutions: [{
                species: 'proto-ambipom',
                method: 'type-surge',
                value: ['dark', 'fighting'],
                method2: 'level-up',
                value2: 22
                }]
            },
        'proto-ambipom': {
            order: thisIndex.afterOrder('ambipom', 2),
            token: 'proto-ambipom',
            name: 'Proto Ambipom',
            formClass: 'ancient-variant',
            formToken: 'proto',
            baseSpecies: 'ambipom',
            number: 424,
            dexNumber: 1030,
            types: ['dark', 'fighting'],
            baseStats: {hp: 75, phAttack: 115, phDefense: 66, spAttack: 60, spDefense: 66, speed: 100},
            abilities: {0: 'technician', 1: 'pickup', hidden: 'skill-link'},
            height: 1.1,
            weight: 20.2,
            colors: ['black', 'gray', 'brown'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'proto-aipom'
            },

        'proto-sneasel': {
            order: thisIndex.afterOrder('weavile', 1),
            token: 'proto-sneasel',
            name: 'Proto Sneasel',
            formClass: 'ancient-variant',
            formToken: 'proto',
            baseSpecies: 'sneasel',
            number: 215,
            dexNumber: 1031,
            types: ['normal', 'ice'],
            baseStats: {hp: 55, phAttack: 95, phDefense: 75, spAttack: 35, spDefense: 60, speed: 110},
            abilities: {0: 'inner-focus', 1: 'keen-eye', hidden: 'pickpocket'},
            height: 0.9,
            weight: 28,
            colors: ['white', 'brown', 'blue'],
            eggCycles: 20,
            eggGroups: ['field'],
            altBaseEvolutions: [{
                species: 'sneasel',
                method: 'type-warning',
                value: 'normal'
                }],
            nextEvolutions: [{
                species: 'proto-weavile',
                method: 'type-surge',
                value: ['normal', 'ice'],
                method2: 'level-up',
                value2: 30
                }]
            },
        'proto-weavile': {
            order: thisIndex.afterOrder('weavile', 2),
            token: 'proto-weavile',
            name: 'Proto Weavile',
            formClass: 'ancient-variant',
            formToken: 'proto',
            baseSpecies: 'weavile',
            number: 461,
            dexNumber: 1032,
            types: ['normal', 'ice'],
            baseStats: {hp: 70, phAttack: 120, phDefense: 85, spAttack: 45, spDefense: 70, speed: 120},
            abilities: {0: 'pressure', hidden: 'pickpocket'},
            height: 1.1,
            weight: 34,
            colors: ['white', 'brown', 'blue'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'proto-sneasel'
            },

        'proto-remoraid': {
            order: thisIndex.afterOrder('octillery', 1),
            token: 'proto-remoraid',
            name: 'Proto Remoraid',
            formClass: 'ancient-variant',
            formToken: 'proto',
            baseSpecies: 'remoraid',
            number: 223,
            dexNumber: 1033,
            types: ['water', 'steel'],
            baseStats: {hp: 35, phAttack: 35, phDefense: 65, spAttack: 35, spDefense: 65, speed: 65},
            abilities: {0: 'hustle', 1: 'sniper', hidden: 'moody'},
            height: 0.6,
            weight: 12,
            colors: ['gray', 'brown', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'water-2'],
            altBaseEvolutions: [{
                species: 'remoraid',
                method: 'type-warning',
                value: 'steel'
                }],
            nextEvolutions: [{
                species: 'proto-octillery',
                method: 'level-up',
                value: 25
                }]
            },
        'proto-octillery': {
            order: thisIndex.afterOrder('octillery', 2),
            token: 'proto-octillery',
            name: 'Proto Octillery',
            formClass: 'ancient-variant',
            formToken: 'proto',
            baseSpecies: 'octillery',
            number: 224,
            dexNumber: 1034,
            types: ['water', 'steel'],
            baseStats: {hp: 75, phAttack: 75, phDefense: 105, spAttack: 75, spDefense: 105, speed: 45},
            abilities: {0: 'suction-cups', 1: 'sniper', hidden: 'moody'},
            height: 0.9,
            weight: 28.5,
            colors: ['red', 'brown', 'yellow'],
            eggCycles: 20,
            eggGroups: ['water-1', 'water-2'],
            prevEvolution: 'proto-remoraid'
            },

        'proto-hoppip': {
            order: thisIndex.afterOrder('jumpluff', 1),
            token: 'proto-hoppip',
            name: 'Proto Hoppip',
            formClass: 'ancient-variant',
            formToken: 'proto',
            baseSpecies: 'hoppip',
            number: 187,
            dexNumber: 1035,
            types: ['grass'],
            baseStats: {hp: 35, phAttack: 35, phDefense: 50, spAttack: 35, spDefense: 55, speed: 40},
            abilities: {0: 'leaf-guard', 1: 'sap-sipper', hidden: 'levitate'},
            height: 0.4,
            weight: 0.5,
            colors: ['black', 'green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            altBaseEvolutions: [{
                species: 'hoppip',
                method: 'type-surge',
                value: 'flying'
                }],
            nextEvolutions: [{
                species: 'proto-skiploom',
                method: 'level-up',
                value: 18
                }]
            },
        'proto-skiploom': {
            order: thisIndex.afterOrder('jumpluff', 2),
            token: 'proto-skiploom',
            name: 'Proto Skiploom',
            formClass: 'ancient-variant',
            formToken: 'proto',
            baseSpecies: 'skiploom',
            number: 188,
            dexNumber: 1036,
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
                }]
            },
        'proto-jumpluff': {
            order: thisIndex.afterOrder('jumpluff', 3),
            token: 'proto-jumpluff',
            name: 'Proto Jumpluff',
            formClass: 'ancient-variant',
            formToken: 'proto',
            baseSpecies: 'jumpluff',
            number: 189,
            dexNumber: 1037,
            types: ['grass'],
            baseStats: {hp: 75, phAttack: 55, phDefense: 110, spAttack: 55, spDefense: 95, speed: 70},
            abilities: {0: 'leaf-guard', 1: 'sap-sipper', hidden: 'levitate'},
            height: 0.8,
            weight: 3,
            colors: ['pink', 'green', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            prevEvolution: 'proto-skiploom'
            },

        // Box Variants (Beta Forms)

        'beta-ekans': {
            order: thisIndex.afterOrder('arbok', 1),
            token: 'beta-ekans',
            name: 'Beta Ekans',
            formClass: 'box-variant',
            formToken: 'beta',
            baseSpecies: 'ekans',
            number: 23,
            dexNumber: 1037.111,
            types: ['water', 'poison'],
            baseStats: {hp: 35, phAttack: 55, phDefense: 34, spAttack: 40, spDefense: 54, speed: 70},
            abilities: {0: 'swift-swim', 1: 'shed-skin', hidden: 'poison-touch'},
            height: 2.4,
            weight: 6.5,
            colors: ['blue', 'white', 'gray', 'purple', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field', 'dragon'],
            altBaseEvolutions: [{
                species: 'ekans',
                method: 'type-warning',
                value: 'water'
                }],
            nextEvolutions: [{
                species: 'beta-arbok',
                method: 'level-up',
                value: 22
                }]
            },
        'beta-arbok': {
            order: thisIndex.afterOrder('arbok', 2),
            token: 'beta-arbok',
            name: 'Beta Arbok',
            formClass: 'box-variant',
            formToken: 'beta',
            baseSpecies: 'arbok',
            number: 24,
            dexNumber: 1037.222,
            types: ['water', 'poison'],
            baseStats: {hp: 60, phAttack: 80, phDefense: 59, spAttack: 65, spDefense: 79, speed: 105},
            abilities: {0: 'swift-swim', 1: 'shed-skin', hidden: 'poison-touch'},
            height: 3.7,
            weight: 64.6,
            colors: ['blue', 'white', 'gray', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field', 'dragon'],
            prevEvolution: 'beta-ekans'
            },

        'beta-munchlax': {
            order: thisIndex.afterOrder('snorlax', 1),
            token: 'beta-munchlax',
            name: 'Beta Munchlax',
            class: 'baby',
            formClass: 'box-variant',
            formToken: 'beta',
            baseSpecies: 'munchlax',
            number: 446,
            dexNumber: 1037.333,
            types: ['ice', 'normal'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 135, phAttack: 65, phDefense: 60, spAttack: 40, spDefense: 85, speed: 5},
            abilities: {0: 'snow-cloak', 1: 'thick-fat', hidden: 'white-smoke'},
            height: 0.6,
            weight: 105,
            colors: ['white', 'blue'],
            eggCycles: 40,
            eggGroups: ['undiscovered'],
            altBaseEvolutions: [{
                species: 'munchlax',
                method: 'type-warning',
                value: 'ice'
                }],
            nextEvolutions: [{
                species: 'beta-snorlax',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 25
                }]
            },
        'beta-snorlax': {
            order: thisIndex.afterOrder('snorlax', 2),
            token: 'beta-snorlax',
            name: 'Beta Snorlax',
            formClass: 'box-variant',
            formToken: 'beta',
            baseSpecies: 'snorlax',
            dexNumber: 1037.444,
            number: 143,
            types: ['ice', 'normal'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 160, phAttack: 90, phDefense: 85, spAttack: 65, spDefense: 110, speed: 30},
            abilities: {0: 'snow-warning', 1: 'thick-fat', hidden: 'white-smoke'},
            height: 2.1,
            weight: 460,
            colors: ['white', 'blue', 'gray'],
            eggCycles: 40,
            eggGroups: ['monster'],
            prevEvolution: 'beta-munchlax'
            },

        // Newly Discovered Forms

        'rocky-castform': {
            order: thisIndex.afterOrder('snowy-castform', 1),
            token: 'rocky-castform',
            name: 'Rocky Castform',
            formClass: 'weather-variant',
            formToken: 'rocky',
            baseForm: 'castform',
            number: 351,
            dexNumber: 1037.555,
            types: ['rock'],
            baseStats: {hp: 70, phAttack: 70, phDefense: 70, spAttack: 70, spDefense: 70, speed: 70},
            abilities: {0: 'forecast'},
            height: 0.3,
            weight: 0.8,
            colors: ['brown', 'gray', 'white', 'black'],
            eggCycles: 25,
            eggGroups: ['fairy', 'amorphous'],
            prevEvolution: 'castform',
            cloneEvolutions: 'castform'
            },

        'cloudy-castform': {
            order: thisIndex.afterOrder('snowy-castform', 2),
            token: 'cloudy-castform',
            name: 'Cloudy Castform',
            formClass: 'weather-variant',
            formToken: 'cloudy',
            baseForm: 'castform',
            number: 351,
            dexNumber: 1037.667,
            types: ['flying'],
            baseStats: {hp: 70, phAttack: 70, phDefense: 70, spAttack: 70, spDefense: 70, speed: 70},
            abilities: {0: 'forecast'},
            height: 0.3,
            weight: 0.8,
            colors: ['white', 'gray', 'purple', 'black'],
            eggCycles: 25,
            eggGroups: ['fairy', 'amorphous'],
            prevEvolution: 'castform',
            cloneEvolutions: 'castform'
            },

        'snow-wormadam': {
            order: thisIndex.afterOrder('trash-wormadam', 1),
            token: 'snow-wormadam',
            name: 'Snow Wormadam',
            formClass: 'field-variant',
            formToken: 'snow',
            number: 413,
            dexNumber: 1040,
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
            dexNumber: 1041,
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

        // Burst Evolutions

        'super-ditto': {
            order: thisIndex.afterOrder('ditto'),
            token: 'super-ditto',
            name: 'Super Ditto',
            formClass: 'burst-evolution',
            formToken: 'super',
            number: 132,
            dexNumber: 1042,
            types: ['normal'],
            genderRatio: {none: 1.000},
            lifePoints: -1,
            baseStats: {hp: 48, phAttack: 48, phDefense: 48, spAttack: 48, spDefense: 48, speed: 48},
            abilities: {0: 'limber'}, // hidden: 'imposter' [removed]
            height: 0.3,
            weight: 4,
            colors: ['purple'],
            eggCycles: 20,
            eggGroups: ['ditto'],
            prevEvolution: 'ditto'
            },

        'estrus-nidoqueen': {
            order: thisIndex.afterOrder('nidoqueen'),
            token: 'estrus-nidoqueen',
            name: 'Estrus Nidoqueen',
            formClass: 'burst-evolution',
            formToken: 'estrus',
            baseSpecies: 'nidoqueen',
            number: 31,
            dexNumber: 1044,
            types: ['poison', 'ground'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 90, phAttack: 117, phDefense: 87, spAttack: 100, spDefense: 85, speed: 126},
            abilities: {0: 'sheer-force'},
            height: 1.4,
            weight: 60,
            colors: ['blue', 'pink'],
            eggCycles: 20,
            eggLimit: 4,
            eggPartner: 'primed-nidoking',
            eggGroups: ['monster', 'field'],
            prevEvolution: 'nidoqueen'
            },
        'primed-nidoking': {
            order: thisIndex.afterOrder('nidoking'),
            token: 'primed-nidoking',
            name: 'Primed Nidoking',
            formClass: 'burst-evolution',
            formToken: 'primed',
            baseSpecies: 'nidoking',
            number: 34,
            dexNumber: 1044.111,
            types: ['poison', 'ground'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 81, phAttack: 127, phDefense: 77, spAttack: 110, spDefense: 75, speed: 135},
            abilities: {0: 'sheer-force'},
            height: 1.3,
            weight: 62,
            colors: ['purple', 'white', 'green'],
            eggCycles: 20,
            eggLimit: 4,
            eggPartner: 'estrus-nidoqueen',
            eggGroups: ['monster', 'field'],
            prevEvolution: 'nidoking'
            },

        'burst-machamp': {
            order: thisIndex.afterOrder('machamp'),
            token: 'burst-machamp',
            name: 'Burst Machamp',
            formClass: 'burst-evolution',
            formToken: 'burst',
            baseSpecies: 'machamp',
            number: 68,
            dexNumber: 1046,
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
            dexNumber: 1048,
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
            dexNumber: 1049,
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

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with alt base evolution data
    thisIndex.addAltBaseEvolutions([

        // Baby / Pre Evolutions
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
        {base: 'tangela', species: 'tanglet', method: 'type-surge', value: 'grass'},
        {base: 'lickitung', species: 'tungzel', method: 'type-surge', value: 'normal'},
        {base: 'goldeen', species: 'heirfry', method: 'type-surge', value: 'water'},
        {base: 'maractus', species: 'succulite', method: 'type-surge', value: 'grass'},
        {base: 'girafarig', species: 'twintied', method: 'type-surge', value: 'ghost'},
        {base: 'tauros', species: 'kalfling', method: 'type-surge', value: 'normal'},
        {base: 'miltank', species: 'kalfling', method: 'type-surge', value: 'normal'},
        {base: 'pansage', species: 'elemonk', method: 'type-warning', value: 'grass'},
        {base: 'pansear', species: 'elemonk', method: 'type-warning', value: 'fire'},
        {base: 'panpour', species: 'elemonk', method: 'type-warning', value: 'water'},
        {base: 'rhyhorn', species: 'rhydoll', method: 'type-surge', value: 'ground'},
        {base: 'aerodactyl', species: 'pterabite', method: 'type-surge', value: 'rock'},

        // Altered / Box Forms
        {base: 'ekans', species: 'beta-ekans', method: 'type-surge', value: 'water'},
        {base: 'munchlax', species: 'beta-munchlax', method: 'type-surge', value: 'ice'},

        // Proto / Ancient Forms
        {base: 'aipom', species: 'proto-aipom', method: 'type-surge', value: 'dark'},
        {base: 'sneasel', species: 'proto-sneasel', method: 'type-surge', value: 'normal'},
        {base: 'remoraid', species: 'proto-remoraid', method: 'type-surge', value: 'steel'},
        {base: 'hoppip', species: 'proto-hoppip', method: 'type-warning', value: 'flying'},

        ]);

    // Update previous gen pokemon with new prev evolution data
    thisIndex.addPrevEvolutions([

        {base: 'kangaskhan', species: 'kangaby'},

        ]);

    // Update previous gen pokemon with new possible form data
    thisIndex.addPossibleForms([

        {base: 'burmy', form: 'snow', triggers: ['tundra', 'sky'], colors: ['white', 'black', 'blue', 'yellow']},
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

        {base: 'girafarig', species: 'mega-girafarig', method: 'mega-evolution', value: 'girafarigite'},

        {base: 'mime-jr', species: 'mr-mime', method: 'affection', value: 'high', method2: 'gender', value2: 'male', method3: 'level-up', value3: 25, replace: true},
        {base: 'mime-jr', species: 'ms-mime', method: 'affection', value: 'high', method2: 'gender', value2: 'female', method3: 'level-up', value3: 25},

        {base: 'weepinbell', species: 'meandrabel', method: 'type-surge', value: 'poison', method2: 'type-warning', value2: 'grass', method3: 'level-up', value3: 41},

        {base: 'qwilfish', species: 'buzzqwill', method: 'type-surge', value: 'electric', method2: 'level-up', value2: 30},

        {base: 'politoed', species: 'mega-politoed', method: 'mega-evolution', value: 'politoedite'},

        {base: 'castform', species: 'rocky-castform', method: 'type-appeal', value: ['rock', 'ground'], method2: 'level-up', value2: 10},
        {base: 'castform', species: 'cloudy-castform', method: 'type-appeal', value: 'flying', method2: 'level-up', value2: 10},

        {base: 'burmy', species: 'snow-wormadam', method: 'level-up', value: 20, method2: 'gender', value2: 'female', method3: 'form', value3: 'snow'},
        {base: 'burmy', species: 'bubble-wormadam', method: 'level-up', value: 20, method2: 'gender', value2: 'female', method3: 'form', value3: 'bubble'},

        {base: 'dialga', species: 'primal-dialga', method: 'primal-reversion', value: 'adamant-orb'},
        {base: 'palkia', species: 'primal-palkia', method: 'primal-reversion', value: 'lustrous-orb'},

        {base: 'nidoqueen', species: 'estrus-nidoqueen', method: 'burst-evolution', value: 'burning-passion', method2: 'type-surge', value2: 'poison'},
        {base: 'nidoking', species: 'primed-nidoking', method: 'burst-evolution', value: 'burning-passion', method2: 'type-surge', value2: 'poison'},
        {base: 'machamp', species: 'burst-machamp', method: 'burst-evolution', value: 'fighting-spirit', method2: 'type-surge', value2: 'fighting'},

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

})();
