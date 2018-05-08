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
            color: 'white',
            color2: 'blue',
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
            color: 'white',
            color2: 'blue',
            eggCycles: 20,
            eggGroups: ['amorphous'],
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
            color: 'white',
            color2: 'pink',
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
            color: 'white',
            color2: 'pink',
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'frillish-f'
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