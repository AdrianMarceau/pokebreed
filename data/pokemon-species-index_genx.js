/*
    * GLOBAL POKEMON INDEX DATA (CUSTOM / GEN X)
    * This data was collected from Zarel for Pokemon Showdown
    * via: https://github.com/Zarel/Pokemon-Showdown/blob/master/data/pokedex.js
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration(8);
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
            name: 'Baby Paras',
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

        'baby-meowth': {
            order: thisIndex.beforeOrder('meowth'),
            token: 'baby-meowth',
            name: 'Baby Meowth',
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
            name: 'Baby Alolan Meowth',
            class: 'baby',
            formClass: 'baby-evolution',
            formClass2: 'regional-variant',
            formToken: 'baby-alolan',
            baseSpecies: 'meowth',
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
            name: 'Baby Growlithe',
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
            name: 'Baby Ponyta',
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

        'baby-grimer': {
            order: thisIndex.beforeOrder('grimer'),
            token: 'baby-grimer',
            name: 'Baby Grimer',
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
            name: 'Baby Alolan Grimer',
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
            name: 'Baby Tangela',
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
            prevEvolution: 'mime-jr'
            },

        'shiny-ditto': {
            order: thisIndex.afterOrder('ditto'),
            token: 'shiny-ditto',
            name: 'Shiny Ditto',
            formClass: 'shiny-variant',
            formToken: 'shiny',
            number: 132,
            types: ['normal'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 189, phAttack: 1, phDefense: 48, spAttack: 1, spDefense: 48, speed: 1},
            abilities: {0: 'limber', hidden: 'imposter'},
            height: 0.3,
            weight: 4,
            colors: ['blue'],
            eggCycles: 20,
            eggGroups: ['ditto'],
            gameGeneration: 1
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with alt base evolution data
    thisIndex.addAltBaseEvolutions([
        {base: 'paras', species: 'baby-paras', method: 'type-surge', value: 'bug'},
        {base: 'meowth', species: 'baby-meowth', method: 'type-surge', value: 'normal'},
        {base: 'alolan-meowth', species: 'baby-alolan-meowth', method: 'type-surge', value: 'dark'},
        {base: 'growlithe', species: 'baby-growlithe', method: 'type-surge', value: 'fire'},
        {base: 'ponyta', species: 'baby-ponyta', method: 'type-surge', value: 'fire'},
        {base: 'grimer', species: 'baby-grimer', method: 'type-surge', value: 'poison'},
        {base: 'alolan-grimer', species: 'baby-alolan-grimer', method: 'type-surge', value: 'poison'},
        {base: 'tangela', species: 'baby-tangela', method: 'type-surge', value: 'grass'},
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

        {base: 'mime-jr', species: 'mr-mime', method: 'affection', value: 'high', method2: 'gender', value2: 'male', replace: true},
        {base: 'mime-jr', species: 'ms-mime', method: 'affection', value: 'high', method2: 'gender', value2: 'female'},

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
