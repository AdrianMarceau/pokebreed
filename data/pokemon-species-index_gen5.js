/*
    * GLOBAL POKEMON INDEX DATA (UNOVA / GEN 5)
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