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

        'turtwig': {
            order: indexOrder++,
            token: 'turtwig',
            name: 'Turtwig',
            number: 387,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 55, phAttack: 68, phDefense: 64, spAttack: 45, spDefense: 55, speed: 31},
            abilities: {0: 'overgrow', hidden: 'shell-armor'},
            height: 0.4,
            weight: 10.2,
            colors: ['green', 'yellow', 'brown', 'black'],
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            nextEvolutions: [{
                species: 'grotle',
                method: 'level-up',
                value: 18
                }]
            },
        'grotle': {
            order: indexOrder++,
            token: 'grotle',
            name: 'Grotle',
            number: 388,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 75, phAttack: 89, phDefense: 85, spAttack: 55, spDefense: 65, speed: 36},
            abilities: {0: 'overgrow', hidden: 'shell-armor'},
            height: 1.1,
            weight: 97,
            colors: ['green', 'yellow', 'brown'],
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            prevEvolution: 'turtwig',
            nextEvolutions: [{
                species: 'torterra',
                method: 'level-up',
                value: 32
                }]
            },
        'torterra': {
            order: indexOrder++,
            token: 'torterra',
            name: 'Torterra',
            number: 389,
            types: ['grass', 'ground'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 95, phAttack: 109, phDefense: 105, spAttack: 75, spDefense: 85, speed: 56},
            abilities: {0: 'overgrow', hidden: 'shell-armor'},
            height: 2.2,
            weight: 310,
            colors: ['green', 'gray', 'brown'],
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            prevEvolution: 'grotle'
            },

        'chimchar': {
            order: indexOrder++,
            token: 'chimchar',
            name: 'Chimchar',
            number: 390,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 44, phAttack: 58, phDefense: 44, spAttack: 58, spDefense: 44, speed: 61},
            abilities: {0: 'blaze', hidden: 'iron-fist'},
            height: 0.5,
            weight: 6.2,
            colors: ['orange', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field', 'human-like'],
            nextEvolutions: [{
                species: 'monferno',
                method: 'level-up',
                value: 14
                }]
            },
        'monferno': {
            order: indexOrder++,
            token: 'monferno',
            name: 'Monferno',
            number: 391,
            types: ['fire', 'fighting'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 64, phAttack: 78, phDefense: 52, spAttack: 78, spDefense: 52, speed: 81},
            abilities: {0: 'blaze', hidden: 'iron-fist'},
            height: 0.9,
            weight: 22,
            colors: ['orange', 'blue', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field', 'human-like'],
            prevEvolution: 'chimchar',
            nextEvolutions: [{
                species: 'infernape',
                method: 'level-up',
                value: 36
                }]
            },
        'infernape': {
            order: indexOrder++,
            token: 'infernape',
            name: 'Infernape',
            number: 392,
            types: ['fire', 'fighting'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 76, phAttack: 104, phDefense: 71, spAttack: 104, spDefense: 71, speed: 108},
            abilities: {0: 'blaze', hidden: 'iron-fist'},
            height: 1.2,
            weight: 55,
            colors: ['orange', 'white', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field', 'human-like'],
            prevEvolution: 'monferno'
            },

        'piplup': {
            order: indexOrder++,
            token: 'piplup',
            name: 'Piplup',
            number: 393,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 53, phAttack: 51, phDefense: 53, spAttack: 61, spDefense: 56, speed: 40},
            abilities: {0: 'torrent', hidden: 'defiant'},
            height: 0.4,
            weight: 5.2,
            colors: ['blue', 'white', 'yellow'],
            evos: ['prinplup'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            nextEvolutions: [{
                species: 'prinplup',
                method: 'level-up',
                value: 16
                }]
            },
        'prinplup': {
            order: indexOrder++,
            token: 'prinplup',
            name: 'Prinplup',
            number: 394,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 64, phAttack: 66, phDefense: 68, spAttack: 81, spDefense: 76, speed: 50},
            abilities: {0: 'torrent', hidden: 'defiant'},
            height: 0.8,
            weight: 23,
            colors: ['blue', 'yellow', 'white'],
            prevo: 'piplup',
            evos: ['empoleon'],
            evoLevel: 16,
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'piplup',
            nextEvolutions: [{
                species: 'empoleon',
                method: 'level-up',
                value: 36
                }]
            },
        'empoleon': {
            order: indexOrder++,
            token: 'empoleon',
            name: 'Empoleon',
            number: 395,
            types: ['water', 'steel'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 84, phAttack: 86, phDefense: 88, spAttack: 111, spDefense: 101, speed: 60},
            abilities: {0: 'torrent', hidden: 'defiant'},
            height: 1.7,
            weight: 84.5,
            colors: ['blue', 'yellow', 'black', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'prinplup'
            },

        'ambipom': {
            order: thisIndex.afterOrder('aipom'),
            token: 'ambipom',
            name: 'Ambipom',
            number: 424,
            types: ['normal'],
            baseStats: {hp: 75, phAttack: 100, phDefense: 66, spAttack: 60, spDefense: 66, speed: 115},
            abilities: {0: 'technician', 1: 'pickup', hidden: 'skill-link'},
            height: 1.2,
            weight: 20.3,
            colors: ['purple', 'brown', 'pink'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'aipom'
            },

        'mismagius': {
            order: thisIndex.afterOrder('misdreavus'),
            token: 'mismagius',
            name: 'Mismagius',
            number: 429,
            types: ['ghost'],
            baseStats: {hp: 60, phAttack: 60, phDefense: 60, spAttack: 105, spDefense: 105, speed: 105},
            abilities: {0: 'levitate'},
            height: 0.9,
            weight: 4.4,
            colors: ['purple', 'red', 'yellow'],
            eggCycles: 25,
            eggGroups: ['amorphous'],
            prevEvolution: 'misdreavus'
            },
        'honchkrow': {
            order: thisIndex.afterOrder('murkrow'),
            token: 'honchkrow',
            name: 'Honchkrow',
            number: 430,
            types: ['dark', 'flying'],
            baseStats: {hp: 100, phAttack: 125, phDefense: 52, spAttack: 105, spDefense: 52, speed: 71},
            abilities: {0: 'insomnia', 1: 'super-luck', hidden: 'moxie'},
            height: 0.9,
            weight: 27.3,
            colors: ['black', 'white', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['flying'],
            prevEvolution: 'murkrow'
            },

        'bonsly': {
            order: thisIndex.beforeOrder('sudowoodo'),
            token: 'bonsly',
            name: 'Bonsly',
            class: 'baby',
            number: 438,
            types: ['rock'],
            baseStats: {hp: 50, phAttack: 80, phDefense: 95, spAttack: 10, spDefense: 45, speed: 10},
            abilities: {0: 'sturdy', 1: 'rock-head', hidden: 'rattled'},
            height: 0.5,
            weight: 15,
            colors: ['brown', 'green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'sudowoodo',
                method: 'evolution-move',
                value: 'mimic',
                method2: 'happiness',
                value2: 'high'
                }]
            },

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

        'weavile': {
            order: thisIndex.afterOrder('sneasel'),
            token: 'weavile',
            name: 'Weavile',
            number: 461,
            types: ['dark', 'ice'],
            baseStats: {hp: 70, phAttack: 120, phDefense: 65, spAttack: 45, spDefense: 85, speed: 125},
            abilities: {0: 'pressure', hidden: 'pickpocket'},
            height: 1.1,
            weight: 34,
            colors: ['black', 'gray', 'red'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'sneasel'
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

        'yanmega': {
            order: thisIndex.afterOrder('yanma'),
            token: 'yanmega',
            name: 'Yanmega',
            number: 469,
            types: ['bug', 'flying'],
            baseStats: {hp: 86, phAttack: 76, phDefense: 86, spAttack: 116, spDefense: 56, speed: 95},
            abilities: {0: 'speed-boost', 1: 'compound-eyes', hidden: 'frisk'},
            height: 1.9,
            weight: 51.5,
            colors: ['green', 'red', 'black', 'white'],
            eggCycles: 20,
            eggGroups: ['bug'],
            prevEvolution: 'yanma'
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

        'gliscor': {
            order: thisIndex.afterOrder('gligar'),
            token: 'gliscor',
            name: 'Gliscor',
            number: 472,
            types: ['ground', 'flying'],
            baseStats: {hp: 75, phAttack: 95, phDefense: 125, spAttack: 45, spDefense: 75, speed: 95},
            abilities: {0: 'hyper-cutter', 1: 'sand-veil', hidden: 'poison-heal'},
            height: 2,
            weight: 42.5,
            colors: ['purple', 'black', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['bug'],
            prevEvolution: 'gligar'
            },

        'mamoswine': {
            order: thisIndex.afterOrder('piloswine'),
            token: 'mamoswine',
            name: 'Mamoswine',
            number: 473,
            types: ['ice', 'ground'],
            baseStats: {hp: 110, phAttack: 130, phDefense: 80, spAttack: 70, spDefense: 60, speed: 80},
            abilities: {0: 'oblivious', 1: 'snow-cloak', hidden: 'thick-fat'},
            height: 2.5,
            weight: 291,
            colors: ['brown', 'white', 'blue', 'pink'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'piloswine'
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
        {base: 'sudowoodo', species: 'bonsly'},
        {base: 'mr-mime', species: 'mime-jr'},
        {base: 'chansey', species: 'happiny'},
        {base: 'snorlax', species: 'munchlax'},
        ]);

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([
        {base: 'aipom', species: 'ambipom', method: 'evolution-move', value: 'double-hit', method2: 'type-surge', value2: 'normal'},
        {base: 'misdreavus', species: 'mismagius', method: 'evolution-stone', value: 'dusk-stone', method2: 'type-appeal', value2: ['ghost']},
        {base: 'murkrow', species: 'honchkrow', method: 'evolution-stone', value: 'dusk-stone', method2: 'type-appeal', value2: ['dark', 'flying']},
        {base: 'sneasel', species: 'weavile', method: 'evolution-item', value: 'razor-claw', method2: 'type-surge', value2: ['dark', 'ice']},
        {base: 'magneton', species: 'magnezone', method: 'evolution-location', value: 'magnetic-field', method2: 'type-surge', value2: ['electric', 'steel']},
        {base: 'lickitung', species: 'lickilicky', method: 'evolution-move', value: 'rollout', method2: 'type-surge', value2: ['normal', 'rock']},
        {base: 'rhydon', species: 'rhyperior', method: 'evolution-item', value: 'protector', method2: 'type-surge', value2: ['rock', 'ground']},
        {base: 'tangela', species: 'tangrowth', method: 'evolution-move', value: 'ancient-power', method2: 'type-surge', value2: ['grass', 'rock']},
        {base: 'electabuzz', species: 'electivire', method: 'evolution-item', value: 'electirizer', method2: 'type-surge', value2: 'electric'},
        {base: 'magmar', species: 'magmortar', method: 'evolution-item', value: 'magmarizer', method2: 'type-surge', value2: 'fire'},
        {base: 'togetic', species: 'togekiss', method: 'evolution-stone', value: 'shiny-stone', method2: 'type-surge', value2: ['fairy', 'flying']},
        {base: 'yanma', species: 'yanmega', method: 'evolution-move', value: 'ancient-power', method2: 'type-surge', value2: ['bug', 'rock']},
        {base: 'eevee', species: 'leafeon', method: 'evolution-location', value: 'moss-rock', method2: 'type-appeal', value2: 'grass'},
        {base: 'eevee', species: 'glaceon', method: 'evolution-location', value: 'icy-rock', method2: 'type-appeal', value2: 'ice'},
        {base: 'gligar', species: 'gliscor', method: 'evolution-item', value: 'razor-fang', method2: 'type-surge', value2: ['ground', 'flying']},
        {base: 'piloswine', species: 'mamoswine', method: 'evolution-move', value: 'ancient-power', method2: 'type-surge', value2: ['ice', 'ground', 'rock']},
        {base: 'porygon2', species: 'porygon-z', method: 'evolution-item', value: 'dubious-disc', method2: 'type-appeal', value2: ['fire', 'ice', 'electric']},
        ]);

})();