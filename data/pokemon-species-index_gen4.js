/*
    * GLOBAL POKEMON INDEX DATA (SINNOH / GEN 4)
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

        'mime-jr': {
            order: thisIndex.beforeOrder('mr-mime'),
            token: 'mime-jr',
            name: 'Mime Jr.',
            class: 'baby',
            number: 439,
            types: ['psychic', 'fairy'],
            baseStats: {hp: 20, phAttack: 25, phDefense: 45, spAttack: 70, spDefense: 90, speed: 60},
            abilities: {0: 'soundproof', 1: 'filter', hidden: 'technician'},
            height: 0.6,
            weight: 13,
            colors: ['pink', 'blue'],
            eggCycles: 25,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'mr-mime',
                method: 'evolution-move',
                value: 'mimic',
                method2: 'affection',
                value2: 'high'
                }]
            },

        'happiny': {
            order: thisIndex.beforeOrder('chansey'),
            token: 'happiny',
            name: 'Happiny',
            class: 'baby',
            number: 440,
            types: ['normal'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 100, phAttack: 5, phDefense: 5, spAttack: 15, spDefense: 65, speed: 30},
            abilities: {0: 'natural-cure', 1: 'serene-grace', hidden: 'friend-guard'},
            height: 0.6,
            weight: 24.4,
            colors: ['pink', 'white'],
            eggCycles: 40,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'chansey',
                method: 'evolution-item',
                value: 'oval-stone',
                method2: 'affection',
                value2: 'high'
                }]
            },

        'munchlax': {
            order: thisIndex.beforeOrder('snorlax'),
            token: 'munchlax',
            name: 'Munchlax',
            class: 'baby',
            number: 446,
            types: ['normal'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 135, phAttack: 85, phDefense: 40, spAttack: 40, spDefense: 85, speed: 5},
            abilities: {0: 'pickup', 1: 'thick-fat', hidden: 'gluttony'},
            height: 0.6,
            weight: 105,
            color: ['black', 'yellow'],
            eggCycles: 40,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'snorlax',
                method: 'happiness',
                value: 'high'
                }]
            },

        'magnezone': {
            order: thisIndex.afterOrder('magneton'),
            token: 'magnezone',
            name: 'Magnezone',
            number: 462,
            types: ['electric', 'steel'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 70, phAttack: 70, phDefense: 115, spAttack: 130, spDefense: 90, speed: 60},
            abilities: {0: 'magnet-pull', 1: 'sturdy', hidden: 'analytic'},
            height: 1.2,
            weight: 180,
            colors: ['gray', 'black', 'yellow', 'red', 'blue'],
            genderRatio: {none: 1.000},
            eggGroups: ['mineral'],
            prevEvolution: 'magneton'
            },

        'lickilicky': {
            order: thisIndex.afterOrder('lickitung'),
            token: 'lickilicky',
            name: 'Lickilicky',
            number: 463,
            types: ['normal'],
            baseStats: {hp: 110, phAttack: 85, phDefense: 95, spAttack: 80, spDefense: 95, speed: 50},
            abilities: {0: 'own-tempo', 1: 'oblivious', hidden: 'cloud-nine'},
            height: 1.7,
            weight: 140,
            colors: ['pink', 'white', 'yellow'],
            prevo: 'lickitung',
            eggCycles: 20,
            eggGroups: ['monster'],
            prevEvolution: 'lickitung'
            },

        'rhyperior': {
            order: thisIndex.afterOrder('rhydon'),
            token: 'rhyperior',
            name: 'Rhyperior',
            number: 464,
            types: ['ground', 'rock'],
            baseStats: {hp: 115, phAttack: 140, phDefense: 130, spAttack: 55, spDefense: 55, speed: 40},
            abilities: {0: 'lightning-rod', 1: 'solid-rock', hidden: 'reckless'},
            height: 2.4,
            weight: 282.8,
            colors: ['gray', 'orange'],
            prevo: 'rhydon',
            evoLevel: 42,
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            prevEvolution: 'rhydon',
            },

        'tangrowth': {
            order: thisIndex.afterOrder('tangela'),
            token: 'tangrowth',
            name: 'Tangrowth',
            number: 465,
            types: ['grass'],
            baseStats: {hp: 100, phAttack: 100, phDefense: 125, spAttack: 110, spDefense: 50, speed: 50},
            abilities: {0: 'chlorophyll', 1: 'leaf-guard', hidden: 'regenerator'},
            height: 2,
            weight: 128.6,
            color: ['blue', 'red', 'black'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'tangela'
            },

        'electivire': {
            order: thisIndex.afterOrder('electabuzz'),
            token: 'electivire',
            name: 'Electivire',
            number: 466,
            types: ['electric'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 75, phAttack: 123, phDefense: 67, spAttack: 95, spDefense: 85, speed: 95},
            abilities: {0: 'motor-drive', hidden: 'vital-spirit'},
            height: 1.8,
            weight: 138.6,
            colors: ['yellow', 'black'],
            eggCycles: 25,
            eggGroups: ['human-like'],
            prevEvolution: 'electabuzz'
            },

        'magmortar': {
            order: thisIndex.afterOrder('magmar'),
            token: 'magmortar',
            name: 'Magmortar',
            number: 467,
            types: ['fire'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 75, phAttack: 95, phDefense: 67, spAttack: 125, spDefense: 95, speed: 83},
            abilities: {0: 'flame-body', hidden: 'vital-spirit'},
            height: 1.6,
            weight: 68,
            colors: ['red', 'yellow'],
            eggCycles: 25,
            eggGroups: ['human-like'],
            prevEvolution: 'magmar'
            },

        'togekiss': {
            order: thisIndex.afterOrder('togetic'),
            token: 'togekiss',
            name: 'Togekiss',
            number: 468,
            types: ['fairy', 'flying'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 85, phAttack: 50, phDefense: 95, spAttack: 120, spDefense: 115, speed: 80},
            abilities: {0: 'hustle', 1: 'serene-grace', hidden: 'super-luck'},
            height: 1.5,
            weight: 38,
            colors: ['white', 'red', 'blue'],
            eggCycles: 10,
            eggGroups: ['flying', 'fairy'],
            prevEvolution: 'togetic'
            },

        'leafeon': {
            order: thisIndex.afterOrder('umbreon', 1),
            token: 'leafeon',
            name: 'Leafeon',
            number: 470,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 65, phAttack: 110, phDefense: 130, spAttack: 60, spDefense: 65, speed: 95},
            abilities: {0: 'leaf-guard', hidden: 'chlorophyll'},
            height: 1,
            weight: 25.5,
            colors: ['green', 'yellow'],
            eggCycles: 35,
            eggGroups: ['field'],
            prevEvolution: 'eevee'
            },
        'glaceon': {
            order: thisIndex.afterOrder('umbreon', 2),
            token: 'glaceon',
            name: 'Glaceon',
            number: 471,
            types: ['ice'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 65, phAttack: 60, phDefense: 110, spAttack: 130, spDefense: 95, speed: 65},
            abilities: {0: 'snow-cloak', hidden: 'ice-body'},
            height: 0.8,
            weight: 25.9,
            colors: ['blue', 'white'],
            eggCycles: 35,
            eggGroups: ['field'],
            prevEvolution: 'eevee'
            },

        'porygon-z': {
            order: thisIndex.afterOrder('porygon2'),
            token: 'porygon-z',
            name: 'Porygon-Z',
            number: 474,
            types: ['normal'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 85, phAttack: 80, phDefense: 70, spAttack: 135, spDefense: 75, speed: 90},
            abilities: {0: 'adaptability', 1: 'download', hidden: 'analytic'},
            height: 0.9,
            weight: 34,
            colors: ['red', 'blue', 'yellow'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'porygon2',
            },

        'phione': {
            order: indexOrder++,
            token: 'phione',
            name: 'Phione',
            class: 'mythical',
            number: 489,
            types: ['water'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 80, phAttack: 80, phDefense: 80, spAttack: 80, spDefense: 80, speed: 80},
            abilities: {0: 'hydration'},
            height: 0.4,
            weight: 3.1,
            colors: ['blue'],
            eggCycles: 40,
            eggGroups: ['water-1', 'fairy'],
            eggParent: 'manaphy',
            },
        'manaphy': {
            order: indexOrder++,
            token: 'manaphy',
            name: 'Manaphy',
            class: 'mythical',
            number: 490,
            types: ['water'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 100, phDefense: 100, spAttack: 100, spDefense: 100, speed: 100},
            abilities: {0: 'hydration'},
            height: 0.3,
            weight: 1.4,
            colors: ['blue', 'yellow'],
            eggCycles: 10,
            eggGroups: ['water-1', 'fairy'],
            eggSpecies: 'phione',
            altBaseEvolutions: [{
                'species': 'phione',
                'method': 'always',
                'value': true
                }]

            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with new prev evolution data
    thisIndex.addPrevEvolutions([
        {base: 'mr-mime', species: 'mime-jr'},
        {base: 'chansey', species: 'happiny'},
        {base: 'snorlax', species: 'munchlax'},
        ]);

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([
        {base: 'magneton', species: 'magnezone', method: 'evolution-location', value: 'magnetic-field', method2: 'type-surge', value2: ['electric', 'steel']},
        {base: 'lickitung', species: 'lickilicky', method: 'evolution-move', value: 'rollout', method2: 'type-surge', value2: ['normal', 'rock']},
        {base: 'rhydon', species: 'rhyperior', method: 'evolution-item', value: 'protector', method2: 'type-surge', value2: ['rock', 'ground']},
        {base: 'tangela', species: 'tangrowth', method: 'evolution-move', value: 'ancient-power', method2: 'type-surge', value2: ['grass', 'rock']},
        {base: 'electabuzz', species: 'electivire', method: 'evolution-item', value: 'electirizer', method2: 'type-surge', value2: 'electric'},
        {base: 'magmar', species: 'magmortar', method: 'evolution-item', value: 'magmarizer', method2: 'type-surge', value2: 'fire'},
        {base: 'togetic', species: 'togekiss', method: 'evolution-stone', value: 'shiny-stone', method2: 'type-surge', value2: ['fairy', 'flying']},
        {base: 'eevee', species: 'leafeon', method: 'evolution-location', value: 'moss-rock', method2: 'type-appeal', value2: 'grass'},
        {base: 'eevee', species: 'glaceon', method: 'evolution-location', value: 'icy-rock', method2: 'type-appeal', value2: 'ice'},
        {base: 'porygon2', species: 'porygon-z', method: 'evolution-item', value: 'dubious-disc', method2: 'type-appeal', value2: ['fire', 'ice', 'electric']},
        ]);

})();