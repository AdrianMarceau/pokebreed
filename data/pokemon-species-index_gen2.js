/*
    * GLOBAL POKEMON INDEX DATA (JOHTO / GEN 2)
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

        'chikorita': {
            order: indexOrder++,
            token: 'chikorita',
            name: 'Chikorita',
            number: 152,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 45, phAttack: 49, phDefense: 65, spAttack: 49, spDefense: 65, speed: 45},
            abilities: {0: 'overgrow', hidden: 'leaf-guard'},
            height: 0.9,
            weight: 6.4,
            color: 'green',
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
            number: 153,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 60, phAttack: 62, phDefense: 80, spAttack: 63, spDefense: 80, speed: 60},
            abilities: {0: 'overgrow', hidden: 'leaf-guard'},
            height: 1.2,
            weight: 15.8,
            color: 'green',
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
            number: 154,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 80, phAttack: 82, phDefense: 100, spAttack: 83, spDefense: 100, speed: 80},
            abilities: {0: 'overgrow', hidden: 'leaf-guard'},
            height: 1.8,
            weight: 100.5,
            color: 'green',
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            prevEvolution: 'bayleef',
            },

        'cyndaquil': {
            order: indexOrder++,
            token: 'cyndaquil',
            name: 'Cyndaquil',
            number: 155,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 39, phAttack: 52, phDefense: 43, spAttack: 60, spDefense: 50, speed: 65},
            abilities: {0: 'blaze', hidden: 'flash-fire'},
            height: 0.5,
            weight: 7.9,
            color: 'yellow',
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
            number: 156,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 58, phAttack: 64, phDefense: 58, spAttack: 80, spDefense: 65, speed: 80},
            abilities: {0: 'blaze', hidden: 'flash-fire'},
            height: 0.9,
            weight: 19,
            color: 'yellow',
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
            number: 157,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 78, phAttack: 84, phDefense: 78, spAttack: 109, spDefense: 85, speed: 100},
            abilities: {0: 'blaze', hidden: 'flash-fire'},
            height: 1.7,
            weight: 79.5,
            color: 'yellow',
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'quilava',
            },

        'totodile': {
            order: indexOrder++,
            token: 'totodile',
            name: 'Totodile',
            number: 158,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 50, phAttack: 65, phDefense: 64, spAttack: 44, spDefense: 48, speed: 43},
            abilities: {0: 'torrent', hidden: 'sheer-force'},
            height: 0.6,
            weight: 9.5,
            color: 'blue',
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
            number: 159,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 65, phAttack: 80, phDefense: 80, spAttack: 59, spDefense: 63, speed: 58},
            abilities: {0: 'torrent', hidden: 'sheer-force'},
            height: 1.1,
            weight: 25,
            color: 'blue',
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
            number: 160,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 85, phAttack: 105, phDefense: 100, spAttack: 79, spDefense: 83, speed: 78},
            abilities: {0: 'torrent', hidden: 'sheer-force'},
            height: 2.3,
            weight: 88.8,
            color: 'blue',
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            prevEvolution: 'croconaw',
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
            color: 'purple',
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'golbat',
            },

        pichu: {
            order: thisIndex.beforeOrder('pikachu'),
            token: 'pichu',
            name: 'Pichu',
            class: 'baby',
            number: 172,
            types: ['electric'],
            baseStats: {hp: 20, phAttack: 40, phDefense: 15, spAttack: 35, spDefense: 35, speed: 60},
            abilities: {0: 'Static', H: 'Lightning-Rod'},
            height: 0.3,
            weight: 2,
            color: 'yellow',
            eggCycles: 10,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'pikachu',
                method: 'happiness',
                value: 'high'
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
            abilities: {0: 'Cute Charm', 1: 'Magic Guard', hidden: 'Friend Guard'},
            height: 0.3,
            weight: 3,
            color: 'pink',
            eggCycles: 10,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'clefairy',
                method: 'happiness',
                value: 'high'
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
            abilities: {0: 'Cute Charm', 1: 'Competitive', hidden: 'Friend Guard'},
            height: 0.3,
            weight: 1,
            color: 'pink',
            eggCycles: 10,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'jigglypuff',
                method: 'happiness',
                value: 'high'
                }]
            },

        'togepi': {
            order: indexOrder++,
            token: 'Togepi',
            name: 'Togepi',
            class: 'baby',
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
                value: 'high'
                }]
            },
        'togetic': {
            order: indexOrder++,
            token: 'togetic',
            name: 'Togetic',
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
            color: 'green',
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'gloom'
            },

        'politoed': {
            order: thisIndex.afterOrder('poliwhirl'),
            token: 'politoed',
            name: 'Politoed',
            number: 186,
            types: ['water'],
            baseStats: {hp: 90, phAttack: 75, phDefense: 75, spAttack: 90, spDefense: 100, speed: 70},
            abilities: {0: 'water-absorb', 1: 'damp', hidden: 'drizzle'},
            height: 1.1,
            weight: 33.9,
            color: 'green',
            eggCycles: 20,
            eggGroups: ['water-1'],
            prevEvolution: 'poliwhirl'
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
            color: 'purple',
            eggCycles: 35,
            eggGroups: ['field'],
            prevEvolution: 'eevee',
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
            color: 'black',
            eggCycles: 35,
            eggGroups: ['field'],
            prevEvolution: 'eevee',
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
            color: 'pink',
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            prevEvolution: 'slowpoke'
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

        'tyrogue': {
            order: thisIndex.beforeOrder('hitmonlee'),
            token: 'tyrogue',
            name: 'Tyrogue',
            class: 'baby',
            number: 236,
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
                method: 'level-up',
                value: 20,
                method2: 'chance',
                value2: 33
                }, {
                species: 'hitmonchan',
                method: 'level-up',
                value: 20,
                method2: 'chance',
                value2: 33
                }, {
                species: 'hitmontop',
                method: 'level-up',
                value: 20,
                method2: 'chance',
                value2: 33
                }]
            },
        'hitmontop': {
            order: thisIndex.afterOrder('hitmonchan'),
            token: 'hitmontop',
            name: 'Hitmontop',
            number: 237,
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
            token: 'Elekid',
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
            token: 'Magby',
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
            types: ['normal'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 95, phAttack: 80, phDefense: 105, spAttack: 40, spDefense: 70, speed: 100},
            abilities: {0: 'thick-fat', 1: 'scrappy', hidden: 'sap-sipper'},
            height: 1.2,
            weight: 75.5,
            colors: ['pink', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            eggPartner: 'tauros',
            altBaseEvolutions: [{
                'species': 'tauros',
                'method': 'chance',
                'value': 50
                }]
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

        'lugia': {
            order: indexOrder++,
            token: 'lugia',
            name: 'Lugia',
            class: 'legendary',
            number: 249,
            types: ['psychic', 'flying'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 106, phAttack: 90, phDefense: 130, spAttack: 90, spDefense: 154, speed: 110},
            abilities: {0: 'pressure', hidden: 'multiscale'},
            height: 5.2,
            weight: 216,
            color: 'white',
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },
        'ho-oh': {
            order: indexOrder++,
            token: 'ho-oh',
            name: 'Ho-Oh',
            class: 'legendary',
            number: 250,
            types: ['fire', 'flying'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 106, phAttack: 130, phDefense: 90, spAttack: 110, spDefense: 154, speed: 90},
            abilities: {0: 'pressure', hidden: 'regenerator'},
            height: 3.8,
            weight: 199,
            color: 'red',
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },

        'celebi': {
            order: indexOrder++,
            token: 'celebi',
            name: 'Celebi',
            class: 'mythical',
            number: 251,
            types: ['psychic', 'grass'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 100, phDefense: 100, spAttack: 100, spDefense: 100, speed: 100},
            abilities: {0: 'natural-cure'},
            height: 0.6,
            weight: 5,
            color: 'green',
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
        {base: 'golbat', species: 'crobat', method: 'happiness', value: 'max'},
        {base: 'poliwhirl', species: 'politoed', method: 'evolution-item', value: 'kings-rock', method2: 'type-surge', value2: 'water'},
        {base: 'slowpoke', species: 'slowking', method: 'evolution-item', value: 'kings-rock', method2: 'type-surge', value2: 'psychic'},
        {base: 'onix', species: 'steelix', method: 'evolution-item', value: 'metal-coat', method2: 'type-appeal', value2: 'steel'},
        {base: 'seadra', species: 'kingdra', method: 'evolution-item', value: 'dragon-scale', method2: 'type-appeal', value2: 'dragon'},
        {base: 'porygon', species: 'porygon2', method: 'evolution-item', value: 'upgrade', method2: 'type-appeal', value2: 'normal'},
        {base: 'eevee', species: 'espeon', method: 'happiness', value: 'high', method2: 'type-appeal', value2: 'psychic'},
        {base: 'eevee', species: 'umbreon', method: 'happiness', value: 'high', method2: 'type-appeal', value2: 'dark'},
        {base: 'gloom', species: 'bellossom', method: 'evolution-stone', value: 'sun-stone', method2: 'type-warning', value2: 'poison'},
        {base: 'chansey', species: 'blissey', method: 'happiness', value: 'max'},
        {base: 'scyther', species: 'scizor', method: 'evolution-item', value: 'metal-coat', method2: 'type-appeal', value2: 'steel'},
        ]);

    // Update previous gen pokemon with new egg partner data
    thisIndex.addEggPartners([
        {base: 'tauros', species: 'miltank'},
        ]);

    // Update previous gen pokemon with alt base evolution data
    thisIndex.addAltBaseEvolutions([
        {base: 'tauros', species: 'miltank', 'method': 'chance', 'value': 50},
        ]);

})();