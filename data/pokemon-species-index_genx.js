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

        // Base Pokedex

        'estrus-nidoqueen': {
            order: thisIndex.afterOrder('nidoqueen'),
            token: 'estrus-nidoqueen',
            name: 'Estrus Nidoqueen',
            formClass: 'burst-evolution',
            formToken: 'estrus',
            baseSpecies: 'nidoqueen',
            number: 31,
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

        'baby-paras': {
            order: thisIndex.beforeOrder('paras'),
            token: 'baby-paras',
            name: 'Baby Paras',  // Para / Parababy / [Paramite]
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 46,
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

        'baby-vulpix': {
            order: thisIndex.beforeOrder('vulpix'),
            token: 'baby-vulpix', // [???]
            name: 'Baby Vulpix',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 37,
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
        'baby-alolan-vulpix': {
            order: thisIndex.afterOrder('ninetales', 1),
            token: 'baby-alolan-vulpix',
            name: 'Baby Alolan Vulpix', // [???]
            class: 'baby',
            formClass: 'baby-evolution',
            formClass2: 'regional-variant',
            formToken: 'baby-alolan',
            baseSpecies: 'baby-vulpix',
            number: 37,
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

        'baby-meowth': {
            order: thisIndex.beforeOrder('meowth'),
            token: 'baby-meowth',
            name: 'Baby Meowth',  // Meowzy / Meowny / Purrchance / [Purrzy]
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 52,
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
        'baby-alolan-meowth': {
            order: thisIndex.afterOrder('persian', 1),
            token: 'baby-alolan-meowth',
            name: 'Baby Alolan Meowth',  // Alolan Meowzy / Meowny / Purrchance / [Purrzy]
            class: 'baby',
            formClass: 'baby-evolution',
            formClass2: 'regional-variant',
            formToken: 'baby-alolan',
            baseSpecies: 'baby-meowth',
            number: 52,
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

        'baby-growlithe': {
            order: thisIndex.beforeOrder('growlithe'),
            token: 'baby-growlithe',
            name: 'Baby Growlithe',  // Puchie / Puppers / Barkindle / [Embark]
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 58,
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

        'baby-ponyta': {
            order: thisIndex.beforeOrder('ponyta'),
            token: 'baby-ponyta',
            name: 'Baby Ponyta',  // Coalt / Minicorn / [Unicolt]
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 77,
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

        'baby-doduo': {
            order: thisIndex.beforeOrder('doduo'),
            token: 'baby-doduo',
            name: 'Baby Doduo',  // Chix / Doduno / [Dododo]
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 84,
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

        'baby-grimer': {
            order: thisIndex.beforeOrder('grimer'),
            token: 'baby-grimer',
            name: 'Baby Grimer',  // Gunky / Sludgby / Oozy / [Oozby]
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 88,
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
        'baby-alolan-grimer': {
            order: thisIndex.afterOrder('muk', 1),
            token: 'baby-alolan-grimer',
            name: 'Baby Alolan Grimer',  // Alolan Gunky / Sludgby / Oozy / [Oozby]
            class: 'baby',
            formClass: 'baby-evolution',
            formClass2: 'regional-variant',
            formToken: 'baby-alolan',
            baseSpecies: 'grimer',
            number: 88,
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

        'baby-tangela': {
            order: thisIndex.beforeOrder('tangela'),
            token: 'baby-tangela',
            name: 'Baby Tangela',  // Tangroll / Cutangle / Tendrella / Curlivine / [Tanglet]
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 114,
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

        'baby-kangaskhan': {
            order: thisIndex.beforeOrder('kangaskhan'),
            token: 'baby-kangaskhan',
            name: 'Baby Kangaskhan',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 115,
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

        'baby-goldeen': {
            order: thisIndex.beforeOrder('goldeen'),
            token: 'baby-goldeen',
            name: 'Baby Goldeen',  // Guppi / Dignify / [Heirfry]
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 118,
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

        'ms-mime': {
            order: thisIndex.afterOrder('mr-mime'),
            token: 'ms-mime',
            name: 'Ms. Mime',
            formClass: 'gender-variant',
            formToken: 'female',
            number: 122,
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

        'super-ditto': {
            order: thisIndex.afterOrder('ditto'),
            token: 'super-ditto',
            name: 'Super Ditto',
            formClass: 'super-evolution',
            formToken: 'super',
            number: 132,
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

        'primal-dialga': {
            order: thisIndex.afterOrder('dialga'),
            token: 'primal-dialga',
            name: 'Primal Dialga',
            class: 'legendary',
            formClass: 'primal-reversion',
            formToken: 'primal',
            baseSpecies: 'dialga',
            number: 483,
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

        'baby-maractus': {
            order: thisIndex.beforeOrder('maractus'),
            token: 'baby-maractus',
            name: 'Baby Maractus',  //  Succulite / Marakid / [Cactini]
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 556,
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

        'shadow-mewtwo': {
            order: thisIndex.afterOrder('mewtwo', 3),
            token: 'shadow-mewtwo',
            name: 'Shadow Mewtwo',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            baseSpecies: 'mewtwo',
            number: 150,
            //dexNumber: 1000,
            displayNumber: 1000,
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 106, phAttack: 110, phDefense: 90, spAttack: 154, spDefense: 90, speed: 130},
            abilities: {0: 'pressure', hidden: 'unnerve'},
            height: 2,
            weight: 122,
            colors: ['gray', 'yellow', 'black'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'shadow-mega-mewtwo-x',
                method: 'mega-evolution',
                value: 'mewtwonite-x',
                method2: 'type-appeal',
                value2: 'fighting'
                }, {
                species: 'shadow-mega-mewtwo-y',
                method: 'mega-evolution',
                value: 'mewtwonite-y',
                method2: 'type-appeal',
                value2: 'psychic'
                }]
            },
        'shadow-mega-mewtwo-x': {
            order: thisIndex.afterOrder('mewtwo', 4),
            token: 'shadow-mega-mewtwo-x',
            name: 'Shadow Mega Mewtwo X',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow-mega-x',
            baseSpecies: 'mega-mewtwo-x',
            number: 150,
            //dexNumber: 1001,
            displayNumber: 1001,
            types: ['shadow', 'fighting'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 106, phAttack: 190, phDefense: 100, spAttack: 154, spDefense: 100, speed: 130},
            abilities: {0: 'steadfast'},
            height: 2.3,
            weight: 127,
            colors: ['white', 'purple', 'red'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'shadow-mewtwo'
            },
        'shadow-mega-mewtwo-y': {
            order: thisIndex.afterOrder('mewtwo', 5),
            token: 'shadow-mega-mewtwo-y',
            name: 'Shadow Mega Mewtwo Y',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow-mega-y',
            baseSpecies: 'mega-mewtwo-y',
            number: 150,
            //dexNumber: 1002,
            displayNumber: 1002,
            types: ['shadow', 'psychic'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 106, phAttack: 150, phDefense: 70, spAttack: 194, spDefense: 120, speed: 140},
            abilities: {0: 'insomnia'},
            height: 1.5,
            weight: 33,
            colors: ['purple', 'white', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'shadow-mewtwo'
            },

        'shadow-lugia': {
            order: indexOrder++,
            token: 'shadow-lugia',
            name: 'Shadow Lugia',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            baseSpecies: 'lugia',
            number: 249,
            dexNumber: 1003,
            displayNumber: 1003,
            types: ['shadow', 'flying'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 106, phAttack: 90, phDefense: 130, spAttack: 90, spDefense: 154, speed: 110},
            abilities: {0: 'pressure', hidden: 'multiscale'},
            height: 5.2,
            weight: 216,
            colors: ['purple', 'blue', 'white', 'red'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },

        'shadow-entei': {
            order: indexOrder++,
            token: 'shadow-entei',
            name: 'Shadow Entei',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            baseSpecies: 'entei',
            number: 244,
            dexNumber: 1004,
            displayNumber: 1004,
            types: ['shadow', 'fire'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 115, phAttack: 115, phDefense: 85, spAttack: 90, spDefense: 75, speed: 100},
            abilities: {0: 'pressure', hidden: 'inner-focus'},
            height: 2.1,
            weight: 198,
            colors: ['gray', 'black', 'blue', 'white', 'red'],
            eggCycles: 80,
            eggGroups: ['undiscovered']
            },

        'shadow-celebi': {
            order: indexOrder++,
            token: 'shadow-celebi',
            name: 'Shadow Celebi',
            class: 'mythical',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            baseSpecies: 'celebi',
            number: 251,
            dexNumber: 1005,
            displayNumber: 1005,
            types: ['shadow', 'grass'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 100, phDefense: 100, spAttack: 100, spDefense: 100, speed: 100},
            abilities: {0: 'natural-cure'},
            height: 0.6,
            weight: 5,
            colors: ['gray', 'purple', 'red'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with alt base evolution data
    thisIndex.addAltBaseEvolutions([
        {base: 'paras', species: 'baby-paras', method: 'type-surge', value: 'bug'},
        {base: 'vulpix', species: 'baby-vulpix', method: 'type-surge', value: 'fire'},
        {base: 'alolan-vulpix', species: 'baby-alolan-vulpix', method: 'type-surge', value: 'ice'},
        {base: 'meowth', species: 'baby-meowth', method: 'type-surge', value: 'normal'},
        {base: 'alolan-meowth', species: 'baby-alolan-meowth', method: 'type-surge', value: 'dark'},
        {base: 'growlithe', species: 'baby-growlithe', method: 'type-surge', value: 'fire'},
        {base: 'ponyta', species: 'baby-ponyta', method: 'type-surge', value: 'fire'},
        {base: 'doduo', species: 'baby-doduo', method: 'type-surge', value: 'normal'},
        {base: 'grimer', species: 'baby-grimer', method: 'type-surge', value: 'poison'},
        {base: 'alolan-grimer', species: 'baby-alolan-grimer', method: 'type-surge', value: 'poison'},
        {base: 'tangela', species: 'baby-tangela', method: 'type-surge', value: 'grass'},
        {base: 'goldeen', species: 'baby-goldeen', method: 'type-surge', value: 'water'},
        {base: 'maractus', species: 'baby-maractus', method: 'type-surge', value: 'grass'},
        ]);

    // Update previous gen pokemon with new prev evolution data
    thisIndex.addPrevEvolutions([
        {base: 'kangaskhan', species: 'baby-kangaskhan'},
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

        {base: 'machamp', species: 'burst-machamp', method: 'burst-evolution', value: 'fighting-spirit', method2: 'type-surge', value2: 'fighting'},
        {base: 'nidoqueen', species: 'estrus-nidoqueen', method: 'burst-evolution', value: 'burning-passion', method2: 'type-surge', value2: 'poison'},

        {base: 'mime-jr', species: 'mr-mime', method: 'affection', value: 'high', method2: 'gender', value2: 'male', method3: 'level-up', value3: 25, replace: true},
        {base: 'mime-jr', species: 'ms-mime', method: 'affection', value: 'high', method2: 'gender', value2: 'female', method3: 'level-up', value3: 25},

        {base: 'ditto', species: 'super-ditto', method: 'level-up', value: 10, method2: 'fusion-species', value2: 'ditto', switch: 'and'},

        {base: 'dialga', species: 'primal-dialga', method: 'primal-reversion', value: 'adamant-orb'},
        {base: 'palkia', species: 'primal-palkia', method: 'primal-reversion', value: 'lustrous-orb'},

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
