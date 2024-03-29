/*
  * GLOBAL POKEMON INDEX DATA (KANTO / GEN 1)
  * This data was collected from Zarel for Pokemon Showdown
  * via: https://github.com/Zarel/Pokemon-Showdown/blob/master/data/pokedex.js
  * Modifications have been made to the data based on personal preference
  */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration(1);
    thisIndex.setRegion('kanto');

    // Add the generation's list of base species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Base Pokedex

        'bulbasaur': {
            order: indexOrder++,
            token: 'bulbasaur',
            name: 'Bulbasaur',
            isStarterPokemon: true,
            number: 1,
            types: ['grass', 'poison'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 45, phAttack: 49, phDefense: 49, spAttack: 65, spDefense: 65, speed: 45},
            abilities: {0: 'overgrow', hidden: 'chlorophyll'},
            height: 0.7,
            weight: 6.9,
            colors: ['green', 'blue'],
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            nextEvolutions: [{
                species: 'ivysaur',
                method: 'level-up',
                value: 16
                }]
            },
        'ivysaur': {
            order: indexOrder++,
            token: 'ivysaur',
            name: 'Ivysaur',
            isStarterPokemon: true,
            number: 2,
            types: ['grass', 'poison'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 60, phAttack: 62, phDefense: 63, spAttack: 80, spDefense: 80, speed: 60},
            abilities: {0: 'overgrow', hidden: 'chlorophyll'},
            height: 1,
            weight: 13,
            colors: ['green', 'blue', 'pink'],
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            prevEvolution: 'bulbasaur',
            nextEvolutions: [{
                species: 'venusaur',
                method: 'level-up',
                value: 32
                }]
            },
        'venusaur': {
            order: indexOrder++,
            token: 'venusaur',
            name: 'Venusaur',
            isStarterPokemon: true,
            number: 3,
            types: ['grass', 'poison'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 80, phAttack: 82, phDefense: 83, spAttack: 100, spDefense: 100, speed: 80},
            abilities: {0: 'overgrow', hidden: 'chlorophyll'},
            height: 2,
            weight: 100,
            colors: ['green', 'blue', 'pink'],
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            prevEvolution: 'ivysaur'
            },

        'charmander': {
            order: indexOrder++,
            token: 'charmander',
            name: 'Charmander',
            isStarterPokemon: true,
            number: 4,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 39, phAttack: 52, phDefense: 43, spAttack: 60, spDefense: 50, speed: 65},
            abilities: {0: 'blaze', hidden: 'solar-power'},
            height: 0.6,
            weight: 8.5,
            colors: ['orange', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['monster', 'dragon'],
            nextEvolutions: [{
                species: 'charmeleon',
                method: 'level-up',
                value: 16
                }]
            },
        'charmeleon': {
            order: indexOrder++,
            token: 'charmeleon',
            name: 'Charmeleon',
            isStarterPokemon: true,
            number: 5,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 58, phAttack: 64, phDefense: 58, spAttack: 80, spDefense: 65, speed: 80},
            abilities: {0: 'blaze', hidden: 'solar-power'},
            height: 1.1,
            weight: 19,
            colors: ['red', 'white', 'orange', 'yellow'],
            eggCycles: 20,
            eggGroups: ['monster', 'dragon'],
            prevEvolution: 'charmander',
            nextEvolutions: [{
                species: 'charizard',
                method: 'level-up',
                value: 36
                }]
            },
        'charizard': {
            order: indexOrder++,
            token: 'charizard',
            name: 'Charizard',
            isStarterPokemon: true,
            number: 6,
            types: ['fire', 'flying'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 78, phAttack: 84, phDefense: 78, spAttack: 109, spDefense: 85, speed: 100},
            abilities: {0: 'blaze', hidden: 'solar-power'},
            height: 1.7,
            weight: 90.5,
            colors: ['orange', 'yellow', 'green', 'red'],
            eggCycles: 20,
            eggGroups: ['monster', 'dragon'],
            prevEvolution: 'charmeleon'
            },

        'squirtle': {
            order: indexOrder++,
            token: 'squirtle',
            name: 'Squirtle',
            isStarterPokemon: true,
            number: 7,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 44, phAttack: 48, phDefense: 65, spAttack: 50, spDefense: 64, speed: 43},
            abilities: {0: 'torrent', hidden: 'rain-dish'},
            height: 0.5,
            weight: 9,
            colors: ['blue', 'brown', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            nextEvolutions: [{
                species: 'wartortle',
                method: 'level-up',
                value: 16
                }]
            },
        'wartortle': {
            order: indexOrder++,
            token: 'wartortle',
            name: 'Wartortle',
            isStarterPokemon: true,
            number: 8,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 59, phAttack: 63, phDefense: 80, spAttack: 65, spDefense: 80, speed: 58},
            abilities: {0: 'torrent', hidden: 'rain-dish'},
            height: 1,
            weight: 22.5,
            colors: ['blue', 'brown', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            prevEvolution: 'squirtle',
            nextEvolutions: [{
                species: 'blastoise',
                method: 'level-up',
                value: 36
                }]
            },
        'blastoise': {
            order: indexOrder++,
            token: 'blastoise',
            name: 'Blastoise',
            isStarterPokemon: true,
            number: 9,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 79, phAttack: 83, phDefense: 100, spAttack: 85, spDefense: 105, speed: 78},
            abilities: {0: 'torrent', hidden: 'rain-dish'},
            height: 1.6,
            weight: 85.5,
            colors: ['blue', 'brown', 'yellow', 'white', 'gray'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            prevEvolution: 'wartortle'
          },

        'caterpie': {
            order: indexOrder++,
            token: 'caterpie',
            name: 'Caterpie',
            number: 10,
            types: ['bug'],
            baseStats: {hp: 45, phAttack: 30, phDefense: 35, spAttack: 20, spDefense: 20, speed: 45},
            abilities: {0: 'shield-dust', hidden: 'run-away'},
            height: 0.3,
            weight: 2.9,
            colors: ['green', 'yellow', 'red'],
            eggCycles: 15,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'metapod',
                method: 'level-up',
                value: 7
                }]
            },
        'metapod': {
            order: indexOrder++,
            token: 'metapod',
            name: 'Metapod',
            number: 11,
            types: ['bug'],
            baseStats: {hp: 50, phAttack: 20, phDefense: 55, spAttack: 25, spDefense: 25, speed: 30},
            abilities: {0: 'shed-skin'},
            height: 0.7,
            weight: 9.9,
            colors: ['green'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'caterpie',
            nextEvolutions: [{
                species: 'butterfree',
                method: 'level-up',
                value: 10
                }]
            },
        'butterfree': {
            order: indexOrder++,
            token: 'butterfree',
            name: 'Butterfree',
            number: 12,
            types: ['bug', 'flying'],
            baseStats: {hp: 60, phAttack: 45, phDefense: 50, spAttack: 90, spDefense: 80, speed: 70},
            abilities: {0: 'compound-eyes', hidden: 'tinted-lens'},
            height: 1.1,
            weight: 32,
            colors: ['purple', 'white', 'red', 'blue', 'black'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'metapod'
            },

        'weedle': {
            order: indexOrder++,
            token: 'weedle',
            name: 'Weedle',
            number: 13,
            types: ['bug', 'poison'],
            baseStats: {hp: 40, phAttack: 35, phDefense: 30, spAttack: 20, spDefense: 20, speed: 50},
            abilities: {0: 'shield-dust', hidden: 'run-away'},
            height: 0.3,
            weight: 3.2,
            colors: ['brown', 'red', 'gray'],
            eggCycles: 15,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'kakuna',
                method: 'level-up',
                value: 7
                }]
            },
        'kakuna': {
            order: indexOrder++,
            token: 'kakuna',
            name: 'Kakuna',
            number: 14,
            types: ['bug', 'poison'],
            baseStats: {hp: 45, phAttack: 25, phDefense: 50, spAttack: 25, spDefense: 25, speed: 35},
            abilities: {0: 'shed-skin'},
            height: 0.6,
            weight: 10,
            colors: ['yellow'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'weedle',
            nextEvolutions: [{
                species: 'beedrill',
                method: 'level-up',
                value: 10
                }]
            },
        'beedrill': {
            order: indexOrder++,
            token: 'beedrill',
            name: 'Beedrill',
            number: 15,
            types: ['bug', 'poison'],
            baseStats: {hp: 65, phAttack: 90, phDefense: 40, spAttack: 45, spDefense: 80, speed: 75},
            abilities: {0: 'swarm', hidden: 'sniper'},
            height: 1,
            weight: 29.5,
            colors: ['yellow', 'black', 'white', 'red'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'kakuna'
            },

        'pidgey': {
            order: indexOrder++,
            token: 'pidgey',
            name: 'Pidgey',
            number: 16,
            types: ['normal', 'flying'],
            baseStats: {hp: 40, phAttack: 45, phDefense: 40, spAttack: 35, spDefense: 35, speed: 56},
            abilities: {0: 'keen-eye', 1: 'tangled-feet', hidden: 'big-pecks'},
            height: 0.3,
            weight: 1.8,
            colors: ['brown', 'white'],
            eggCycles: 15,
            eggGroups: ['flying'],
            nextEvolutions: [{
                species: 'pidgeotto',
                method: 'level-up',
                value: 18
                }]
            },
        'pidgeotto': {
            order: indexOrder++,
            token: 'pidgeotto',
            name: 'Pidgeotto',
            number: 17,
            types: ['normal', 'flying'],
            baseStats: {hp: 63, phAttack: 60, phDefense: 55, spAttack: 50, spDefense: 50, speed: 71},
            abilities: {0: 'keen-eye', 1: 'tangled-feet', hidden: 'big-pecks'},
            height: 1.1,
            weight: 30,
            colors: ['brown', 'white', 'red'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'pidgey',
            nextEvolutions: [{
                species: 'pidgeot',
                method: 'level-up',
                value: 36
                }]
            },
        'pidgeot': {
            order: indexOrder++,
            token: 'pidgeot',
            name: 'Pidgeot',
            number: 18,
            types: ['normal', 'flying'],
            baseStats: {hp: 83, phAttack: 80, phDefense: 75, spAttack: 70, spDefense: 70, speed: 101},
            abilities: {0: 'keen-eye', 1: 'tangled-feet', hidden: 'big-pecks'},
            height: 1.5,
            weight: 39.5,
            colors: ['brown', 'white', 'red', 'yellow'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'pidgeotto'
            },

        'rattata': {
            order: indexOrder++,
            token: 'rattata',
            name: 'Rattata',
            number: 19,
            types: ['normal'],
            baseStats: {hp: 30, phAttack: 56, phDefense: 35, spAttack: 25, spDefense: 35, speed: 72},
            abilities: {0: 'run-away', 1: 'guts', hidden: 'hustle'},
            height: 0.3,
            weight: 3.5,
            colors: ['purple', 'white'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'raticate',
                method: 'level-up',
                value: 20
                }]
            },
        'raticate': {
            order: indexOrder++,
            token: 'raticate',
            name: 'Raticate',
            number: 20,
            types: ['normal'],
            baseStats: {hp: 55, phAttack: 81, phDefense: 60, spAttack: 50, spDefense: 70, speed: 97},
            abilities: {0: 'run-away', 1: 'guts', hidden: 'hustle'},
            height: 0.7,
            weight: 18.5,
            colors: ['brown', 'white'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'rattata'
            },

        'spearow': {
            order: indexOrder++,
            token: 'spearow',
            name: 'Spearow',
            number: 21,
            types: ['normal', 'flying'],
            baseStats: {hp: 40, phAttack: 60, phDefense: 30, spAttack: 31, spDefense: 31, speed: 70},
            abilities: {0: 'keen-eye', hidden: 'sniper'},
            height: 0.3,
            weight: 2,
            colors: ['brown', 'red', 'black', 'white'],
            eggCycles: 15,
            eggGroups: ['flying'],
            nextEvolutions: [{
                species: 'fearow',
                method: 'level-up',
                value: 20
                }]
            },
        'fearow': {
            order: indexOrder++,
            token: 'fearow',
            name: 'Fearow',
            number: 22,
            types: ['normal', 'flying'],
            baseStats: {hp: 65, phAttack: 90, phDefense: 65, spAttack: 61, spDefense: 61, speed: 100},
            abilities: {0: 'keen-eye', hidden: 'sniper'},
            height: 1.2,
            weight: 38,
            colors: ['brown', 'yellow', 'red', 'white'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'spearow'
            },

        'ekans': {
            order: indexOrder++,
            token: 'ekans',
            name: 'Ekans',
            number: 23,
            types: ['poison'],
            baseStats: {hp: 35, phAttack: 60, phDefense: 44, spAttack: 40, spDefense: 54, speed: 55},
            abilities: {0: 'intimidate', 1: 'shed-skin', hidden: 'unnerve'},
            height: 2,
            weight: 6.9,
            colors: ['purple', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field', 'dragon'],
            nextEvolutions: [{
                species: 'arbok',
                method: 'level-up',
                value: 22
                }]
            },
        'arbok': {
            order: indexOrder++,
            token: 'arbok',
            name: 'Arbok',
            number: 24,
            types: ['poison'],
            baseStats: {hp: 60, phAttack: 95, phDefense: 69, spAttack: 65, spDefense: 79, speed: 80},
            abilities: {0: 'intimidate', 1: 'shed-skin', hidden: 'unnerve'},
            height: 3.5,
            weight: 65,
            colors: ['purple', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field', 'dragon'],
            prevEvolution: 'ekans'
            },

        'pikachu': {
            order: indexOrder++,
            token: 'pikachu',
            name: 'Pikachu',
            number: 25,
            types: ['electric'],
            baseStats: {hp: 35, phAttack: 55, phDefense: 40, spAttack: 50, spDefense: 50, speed: 90},
            abilities: {0: 'static', hidden: 'lightning-rod'},
            height: 0.4,
            weight: 6,
            colors: ['yellow', 'black', 'red', 'brown'],
            eggCycles: 10,
            eggGroups: ['field', 'fairy'],
            nextEvolutions: [{
                species: 'raichu', // thunder-stone,
                method: 'type-appeal',
                value: 'electric',
                method2: 'level-up',
                value2: 25
                }]
            },
        'raichu': {
            order: indexOrder++,
            token: 'raichu',
            name: 'Raichu',
            number: 26,
            types: ['electric'],
            baseStats: {hp: 60, phAttack: 90, phDefense: 55, spAttack: 90, spDefense: 80, speed: 110},
            abilities: {0: 'static', hidden: 'lightning-rod'},
            height: 0.8,
            weight: 30,
            colors: ['orange', 'yellow', 'brown', 'white'],
            eggCycles: 10,
            eggGroups: ['field', 'fairy'],
            prevEvolution: 'pikachu'
          },

        'sandshrew': {
            order: indexOrder++,
            token: 'sandshrew',
            name: 'Sandshrew',
            number: 27,
            types: ['ground'],
            baseStats: {hp: 50, phAttack: 75, phDefense: 85, spAttack: 20, spDefense: 30, speed: 40},
            abilities: {0: 'sand-veil', hidden: 'sand-rush'},
            height: 0.6,
            weight: 12,
            colors: ['yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'sandslash',
                method: 'level-up',
                value: 22
                }]
            },
        'sandslash': {
            order: indexOrder++,
            token: 'sandslash',
            name: 'Sandslash',
            number: 28,
            types: ['ground'],
            baseStats: {hp: 75, phAttack: 100, phDefense: 110, spAttack: 45, spDefense: 55, speed: 65},
            abilities: {0: 'sand-veil', hidden: 'sand-rush'},
            height: 1,
            weight: 29.5,
            colors: ['yellow', 'white', 'brown'],
            prevo: 'sandshrew',
            evoLevel: 22,
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'sandshrew'
            },


        'nidoran-f': {
            order: indexOrder++,
            token: 'nidoran-f',
            name: 'Nidoran \u2640',
            number: 29,
            types: ['poison'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 55, phAttack: 47, phDefense: 52, spAttack: 40, spDefense: 40, speed: 41},
            abilities: {0: 'poison-point', 1: 'rivalry', hidden: 'hustle'},
            height: 0.4,
            weight: 7,
            colors: ['blue', 'purple'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            eggPartner: 'nidoran-m',
            nextEvolutions: [{
                species: 'nidorina',
                method: 'level-up',
                value: 16
                }],
            altBaseEvolutions: [{
                species: 'nidoran-m',
                method: 'chance',
                value: 60
                }]
            },
        'nidorina': {
            order: indexOrder++,
            token: 'nidorina',
            name: 'Nidorina',
            number: 30,
            types: ['poison'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 70, phAttack: 62, phDefense: 67, spAttack: 55, spDefense: 55, speed: 56},
            abilities: {0: 'poison-point', 1: 'rivalry', hidden: 'hustle'},
            height: 0.8,
            weight: 20,
            colors: ['blue', 'white'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            prevEvolution: 'nidoran-f',
            nextEvolutions: [{
                species: 'nidoqueen', // moon-stone
                method: 'type-appeal',
                value: ['poison', 'ground'],
                method2: 'level-up',
                value2: 36
                }]
            },
        'nidoqueen': {
            order: indexOrder++,
            token: 'nidoqueen',
            name: 'Nidoqueen',
            number: 31,
            types: ['poison', 'ground'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 90, phAttack: 92, phDefense: 87, spAttack: 75, spDefense: 85, speed: 76},
            abilities: {0: 'poison-point', 1: 'rivalry', hidden: 'sheer-force'},
            height: 1.3,
            weight: 60,
            colors: ['blue', 'white', 'brown'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            prevEvolution: 'nidorina'
            },

        'nidoran-m': {
            order: indexOrder++,
            token: 'nidoran-m',
            name: 'Nidoran \u2642',
            number: 32,
            types: ['poison'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 46, phAttack: 57, phDefense: 40, spAttack: 40, spDefense: 40, speed: 50},
            abilities: {0: 'poison-point', 1: 'rivalry', hidden: 'hustle'},
            height: 0.5,
            weight: 9,
            colors: ['purple', 'pink'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            eggPartner: 'nidoran-f',
            nextEvolutions: [{
                species: 'nidorino',
                method: 'level-up',
                value: 16
                }],
            altBaseEvolutions: [{
                species: 'nidoran-f',
                method: 'chance',
                value: 40
                }]
            },
        'nidorino': {
            order: indexOrder++,
            token: 'nidorino',
            name: 'Nidorino',
            number: 33,
            types: ['poison'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 61, phAttack: 72, phDefense: 57, spAttack: 55, spDefense: 55, speed: 65},
            abilities: {0: 'poison-point', 1: 'rivalry', hidden: 'hustle'},
            height: 0.9,
            weight: 19.5,
            colors: ['purple', 'green'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            eggPartner: 'nidoran-f',
            prevEvolution: 'nidoran-m',
            nextEvolutions: [{
                species: 'nidoking', // moon-stone
                method: 'type-appeal',
                value: ['poison', 'ground'],
                method2: 'level-up',
                value2: 36
                }]
            },
        'nidoking': {
            order: indexOrder++,
            token: 'nidoking',
            name: 'Nidoking',
            number: 34,
            types: ['poison', 'ground'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 81, phAttack: 102, phDefense: 77, spAttack: 85, spDefense: 75, speed: 85},
            abilities: {0: 'poison-point', 1: 'rivalry', hidden: 'sheer-force'},
            height: 1.4,
            weight: 62,
            colors: ['purple', 'white', 'green'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            eggPartner: 'nidoran-f',
            prevEvolution: 'nidorino'
            },

        'clefairy': {
            order: indexOrder++,
            token: 'clefairy',
            name: 'Clefairy',
            number: 35,
            types: ['fairy'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 70, phAttack: 45, phDefense: 48, spAttack: 60, spDefense: 65, speed: 35},
            abilities: {0: 'cute-charm', 1: 'magic-guard', hidden: 'friend-guard'},
            height: 0.6,
            weight: 7.5,
            colors: ['pink', 'brown'],
            eggCycles: 10,
            eggGroups: ['fairy'],
            nextEvolutions: [{
                species: 'clefable', // moon-stone
                method: 'type-appeal',
                value: 'fairy',
                method2: 'level-up',
                value2: 25
                }]
            },
        'clefable': {
            order: indexOrder++,
            token: 'clefable',
            name: 'Clefable',
            number: 36,
            types: ['fairy'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 95, phAttack: 70, phDefense: 73, spAttack: 95, spDefense: 90, speed: 60},
            abilities: {0: 'cute-charm', 1: 'magic-guard', hidden: 'unaware'},
            height: 1.3,
            weight: 40,
            colors: ['pink', 'black'],
            eggCycles: 10,
            eggGroups: ['fairy'],
            prevEvolution: 'clefairy'
            },

        'vulpix': {
            order: indexOrder++,
            token: 'vulpix',
            name: 'Vulpix',
            number: 37,
            types: ['fire'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 38, phAttack: 41, phDefense: 40, spAttack: 50, spDefense: 65, speed: 65},
            abilities: {0: 'flash-fire', hidden: 'drought'},
            height: 0.6,
            weight: 9.9,
            colors: ['brown', 'orange'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'ninetales', // fire-stone
                method: 'type-appeal',
                value: 'fire',
                method2: 'level-up',
                value2: 20
                }]
            },
        'ninetales': {
            order: indexOrder++,
            token: 'ninetales',
            name: 'Ninetales',
            number: 38,
            types: ['fire'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 73, phAttack: 76, phDefense: 75, spAttack: 81, spDefense: 100, speed: 100},
            abilities: {0: 'flash-fire', hidden: 'drought'},
            height: 1.1,
            weight: 19.9,
            colors: ['yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'vulpix'
            },

        'jigglypuff': {
            order: indexOrder++,
            token: 'jigglypuff',
            name: 'Jigglypuff',
            number: 39,
            types: ['normal', 'fairy'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 115, phAttack: 45, phDefense: 20, spAttack: 45, spDefense: 25, speed: 20},
            abilities: {0: 'cute-charm', 1: 'competitive', hidden: 'friend-guard'},
            height: 0.5,
            weight: 5.5,
            colors: ['pink', 'green'],
            eggCycles: 10,
            eggGroups: ['fairy'],
            nextEvolutions: [{
                species: 'wigglytuff', // moon-stone
                method: 'type-appeal',
                value: ['normal', 'fairy'],
                method2: 'level-up',
                value2: 25
                }]
            },
        'wigglytuff': {
            order: indexOrder++,
            token: 'wigglytuff',
            name: 'Wigglytuff',
            number: 40,
            types: ['normal', 'fairy'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 140, phAttack: 70, phDefense: 45, spAttack: 85, spDefense: 50, speed: 45},
            abilities: {0: 'cute-charm', 1: 'competitive', hidden: 'frisk'},
            height: 1,
            weight: 12,
            colors: ['pink', 'white', 'green'],
            eggCycles: 10,
            eggGroups: ['fairy'],
            prevEvolution: 'jigglypuff'
            },

        'zubat': {
            order: indexOrder++,
            token: 'zubat',
            name: 'Zubat',
            number: 41,
            types: ['poison', 'flying'],
            baseStats: {hp: 40, phAttack: 45, phDefense: 35, spAttack: 30, spDefense: 40, speed: 55},
            abilities: {0: 'inner-focus', hidden: 'infiltrator'},
            height: 0.8,
            weight: 7.5,
            colors: ['blue', 'purple'],
            eggCycles: 15,
            eggGroups: ['flying'],
            nextEvolutions: [{
                species: 'golbat',
                method: 'level-up',
                value: 22
                }]
            },
        'golbat': {
            order: indexOrder++,
            token: 'golbat',
            name: 'Golbat',
            number: 42,
            types: ['poison', 'flying'],
            baseStats: {hp: 75, phAttack: 80, phDefense: 70, spAttack: 65, spDefense: 75, speed: 90},
            abilities: {0: 'inner-focus', hidden: 'infiltrator'},
            height: 1.6,
            weight: 55,
            colors: ['blue', 'purple'],
            evoLevel: 22,
            eggCycles: 15,
            prevEvolution: 'zubat',
            eggGroups: ['flying'],
            },

        'oddish': {
            order: indexOrder++,
            token: 'oddish',
            name: 'Oddish',
            number: 43,
            types: ['grass', 'poison'],
            baseStats: {hp: 45, phAttack: 50, phDefense: 55, spAttack: 75, spDefense: 65, speed: 30},
            abilities: {0: 'chlorophyll', hidden: 'run-away'},
            height: 0.5,
            weight: 5.4,
            colors: ['blue', 'green'],
            eggCycles: 20,
            eggGroups: ['grass'],
            nextEvolutions: [{
                species: 'gloom',
                method: 'level-up',
                value: 21
                }]
            },
        'gloom': {
            order: indexOrder++,
            token: 'gloom',
            name: 'Gloom',
            number: 44,
            types: ['grass', 'poison'],
            baseStats: {hp: 60, phAttack: 65, phDefense: 70, spAttack: 85, spDefense: 75, speed: 40},
            abilities: {0: 'chlorophyll', hidden: 'stench'},
            height: 0.8,
            weight: 8.6,
            colors: ['blue', 'red', 'orange'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'oddish',
            nextEvolutions: [{
                species: 'vileplume', // leaf-stone
                method: 'type-appeal',
                value: ['grass', 'poison'],
                method2: 'level-up',
                value2: 41
                }]
            },
        'vileplume': {
            order: indexOrder++,
            token: 'vileplume',
            name: 'Vileplume',
            number: 45,
            types: ['grass', 'poison'],
            baseStats: {hp: 75, phAttack: 80, phDefense: 85, spAttack: 110, spDefense: 90, speed: 50},
            abilities: {0: 'chlorophyll', hidden: 'effect-spore'},
            height: 1.2,
            weight: 18.6,
            colors: ['blue', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'gloom',
            },

        'paras': {
            order: indexOrder++,
            token: 'paras',
            name: 'Paras',
            number: 46,
            types: ['bug', 'grass'],
            baseStats: {hp: 35, phAttack: 70, phDefense: 55, spAttack: 45, spDefense: 55, speed: 25},
            abilities: {0: 'effect-spore', 1: 'dry-skin', hidden: 'damp'},
            height: 0.3,
            weight: 5.4,
            colors: ['orange', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['bug', 'grass'],
            nextEvolutions: [{
                species: 'parasect',
                method: 'level-up',
                value: 24
                }]
            },
        'parasect': {
            order: indexOrder++,
            token: 'parasect',
            name: 'Parasect',
            number: 47,
            types: ['bug', 'grass'],
            baseStats: {hp: 60, phAttack: 95, phDefense: 80, spAttack: 60, spDefense: 80, speed: 30},
            abilities: {0: 'effect-spore', 1: 'dry-skin', hidden: 'damp'},
            height: 1,
            weight: 29.5,
            colors: ['red', 'yellow', 'orange'],
            eggCycles: 20,
            eggGroups: ['bug', 'grass'],
            prevEvolution: 'paras'
            },

        'venonat': {
            order: indexOrder++,
            token: 'venonat',
            name: 'Venonat',
            number: 48,
            types: ['bug', 'poison'],
            baseStats: {hp: 60, phAttack: 55, phDefense: 50, spAttack: 40, spDefense: 55, speed: 45},
            abilities: {0: 'compound-eyes', 1: 'tinted-lens', hidden: 'run-away'},
            height: 1,
            weight: 30,
            colors: ['purple', 'red', 'white'],
            eggCycles: 20,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'venomoth',
                method: 'level-up',
                value: 31
                }]
            },
        'venomoth': {
            order: indexOrder++,
            token: 'venomoth',
            name: 'Venomoth',
            number: 49,
            types: ['bug', 'poison'],
            baseStats: {hp: 70, phAttack: 65, phDefense: 60, spAttack: 90, spDefense: 75, speed: 90},
            abilities: {0: 'shield-dust', 1: 'tinted-lens', hidden: 'wonder-skin'},
            height: 1.5,
            weight: 12.5,
            colors: ['purple', 'white', 'pink'],
            prevo: 'venonat',
            evoLevel: 31,
            eggCycles: 20,
            eggGroups: ['bug'],
            prevEvolution: 'venonat'
            },

        'diglett': {
            order: indexOrder++,
            token: 'diglett',
            name: 'Diglett',
            number: 50,
            types: ['ground'],
            baseStats: {hp: 10, phAttack: 55, phDefense: 25, spAttack: 35, spDefense: 45, speed: 95},
            abilities: {0: 'sand-veil', 1: 'arena-trap', hidden: 'sand-force'},
            height: 0.2,
            weight: 0.8,
            colors: ['brown', 'red', 'gray'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'dugtrio',
                method: 'level-up',
                value: 26
                }]
            },
        'dugtrio': {
            order: indexOrder++,
            token: 'dugtrio',
            name: 'Dugtrio',
            number: 51,
            types: ['ground'],
            baseStats: {hp: 35, phAttack: 100, phDefense: 50, spAttack: 50, spDefense: 70, speed: 120},
            abilities: {0: 'sand-veil', 1: 'arena-trap', hidden: 'sand-force'},
            height: 0.7,
            weight: 33.3,
            colors: ['brown', 'red', 'gray'],
            prevo: 'diglett',
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'diglett'
            },

        'meowth': {
            order: indexOrder++,
            token: 'meowth',
            name: 'Meowth',
            number: 52,
            types: ['normal'],
            baseStats: {hp: 40, phAttack: 45, phDefense: 35, spAttack: 40, spDefense: 40, speed: 90},
            abilities: {0: 'pickup', 1: 'technician', hidden: 'unnerve'},
            height: 0.4,
            weight: 4.2,
            colors: ['white', 'yellow', 'black', 'brown'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'persian',
                method: 'level-up',
                value: 28
                }]
            },
        'persian': {
            order: indexOrder++,
            token: 'persian',
            name: 'Persian',
            number: 53,
            types: ['normal'],
            baseStats: {hp: 65, phAttack: 70, phDefense: 60, spAttack: 65, spDefense: 65, speed: 115},
            abilities: {0: 'pickup', 1: 'technician', hidden: 'unnerve'},
            height: 1,
            weight: 32,
            colors: ['white', 'yellow', 'black', 'red'],
            prevo: 'meowth',
            evoLevel: 28,
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'meowth'
            },

        'psyduck': {
            order: indexOrder++,
            token: 'psyduck',
            name: 'Psyduck',
            number: 54,
            types: ['water'],
            baseStats: {hp: 50, phAttack: 52, phDefense: 48, spAttack: 65, spDefense: 50, speed: 55},
            abilities: {0: 'damp', 1: 'cloud-nine', hidden: 'swift-swim'},
            height: 0.8,
            weight: 19.6,
            colors: ['yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            nextEvolutions: [{
                species: 'golduck',
                method: 'level-up',
                value: 33
                }]
            },
        'golduck': {
            order: indexOrder++,
            token: 'golduck',
            name: 'Golduck',
            number: 55,
            types: ['water'],
            baseStats: {hp: 80, phAttack: 82, phDefense: 78, spAttack: 95, spDefense: 80, speed: 85},
            abilities: {0: 'damp', 1: 'cloud-nine', hidden: 'swift-swim'},
            height: 1.7,
            weight: 76.6,
            colors: ['blue', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'psyduck'
            },

        'mankey': {
            order: indexOrder++,
            token: 'mankey',
            name: 'Mankey',
            number: 56,
            types: ['fighting'],
            baseStats: {hp: 40, phAttack: 80, phDefense: 35, spAttack: 35, spDefense: 45, speed: 70},
            abilities: {0: 'vital-spirit', 1: 'anger-point', hidden: 'defiant'},
            height: 0.5,
            weight: 28,
            colors: ['white', 'brown', 'red'],
            evos: ['primeape'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'primeape',
                method: 'level-up',
                value: 28
                }]
            },
        'primeape': {
            order: indexOrder++,
            token: 'primeape',
            name: 'Primeape',
            number: 57,
            types: ['fighting'],
            baseStats: {hp: 65, phAttack: 105, phDefense: 60, spAttack: 60, spDefense: 70, speed: 95},
            abilities: {0: 'vital-spirit', 1: 'anger-point', hidden: 'defiant'},
            height: 1,
            weight: 32,
            colors: ['white', 'brown', 'red', 'gray'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'mankey'
            },

        'growlithe': {
            order: indexOrder++,
            token: 'growlithe',
            name: 'Growlithe',
            number: 58,
            types: ['fire'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 55, phAttack: 70, phDefense: 45, spAttack: 70, spDefense: 50, speed: 60},
            abilities: {0: 'intimidate', 1: 'flash-fire', hidden: 'justified'},
            height: 0.7,
            weight: 19,
            colors: ['orange', 'black', 'brown'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'arcanine', // fire-stone
                method: 'type-appeal',
                value: 'fire',
                method2: 'level-up',
                value2: 20
                }]
            },
        'arcanine': {
            order: indexOrder++,
            token: 'arcanine',
            name: 'Arcanine',
            number: 59,
            types: ['fire'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 90, phAttack: 110, phDefense: 80, spAttack: 100, spDefense: 80, speed: 95},
            abilities: {0: 'intimidate', 1: 'flash-fire', hidden: 'justified'},
            height: 1.9,
            weight: 155,
            colors: ['orange', 'black', 'brown'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'growlithe'
            },

        'poliwag': {
            order: indexOrder++,
            token: 'poliwag',
            name: 'Poliwag',
            number: 60,
            types: ['water'],
            baseStats: {hp: 40, phAttack: 50, phDefense: 40, spAttack: 40, spDefense: 40, speed: 90},
            abilities: {0: 'water-absorb', 1: 'damp', hidden: 'swift-wwim'},
            height: 0.6,
            weight: 12.4,
            colors: ['blue', 'white', 'black'],
            eggCycles: 20,
            eggGroups: ['water-1'],
            nextEvolutions: [{
                species: 'poliwhirl',
                method: 'level-up',
                value: 25
                }]
            },
        'poliwhirl': {
            order: indexOrder++,
            token: 'poliwhirl',
            name: 'Poliwhirl',
            number: 61,
            types: ['water'],
            baseStats: {hp: 65, phAttack: 65, phDefense: 65, spAttack: 50, spDefense: 50, speed: 90},
            abilities: {0: 'water-absorb', 1: 'damp', hidden: 'swift-swim'},
            height: 1,
            weight: 20,
            colors: ['blue', 'white', 'black'],
            eggCycles: 20,
            eggGroups: ['water-1'],
            prevEvolution: 'poliwag',
            nextEvolutions: [{
                species: 'poliwrath', // water-stone
                method: 'type-appeal',
                value: ['water', 'fighting'],
                method2: 'level-up',
                value2: 45
                }]
            },
        'poliwrath': {
            order: indexOrder++,
            token: 'poliwrath',
            name: 'Poliwrath',
            number: 62,
            types: ['water', 'fighting'],
            baseStats: {hp: 90, phAttack: 95, phDefense: 95, spAttack: 70, spDefense: 90, speed: 70},
            abilities: {0: 'water-absorb', 1: 'damp', hidden: 'swift-swim'},
            height: 1.3,
            weight: 54,
            colors: ['blue', 'white', 'black'],
            eggCycles: 20,
            eggGroups: ['water-1'],
            prevEvolution: 'poliwhirl'
            },

        'abra': {
            order: indexOrder++,
            token: 'abra',
            name: 'Abra',
            number: 63,
            types: ['psychic'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 25, phAttack: 20, phDefense: 15, spAttack: 105, spDefense: 55, speed: 90},
            abilities: {0: 'synchronize', 1: 'inner-focus', hidden: 'magic-guard'},
            height: 0.9,
            weight: 19.5,
            colors: ['yellow', 'brown'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            nextEvolutions: [{
                species: 'kadabra',
                method: 'level-up',
                value: 16
                }]
            },
        'kadabra': {
            order: indexOrder++,
            token: 'kadabra',
            name: 'Kadabra',
            number: 64,
            types: ['psychic'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 40, phAttack: 35, phDefense: 30, spAttack: 120, spDefense: 70, speed: 105},
            abilities: {0: 'synchronize', 1: 'inner-focus', hidden: 'magic-guard'},
            height: 1.3,
            weight: 56.5,
            colors: ['yellow', 'brown', 'red'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'abra',
            nextEvolutions: [{
                species: 'alakazam',
                method: 'trade-partner',
                value: 'auto',
                method2: 'level-up',
                value2: 36
                }]
            },
        'alakazam': {
            order: indexOrder++,
            token: 'alakazam',
            name: 'Alakazam',
            number: 65,
            types: ['psychic'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 55, phAttack: 50, phDefense: 45, spAttack: 135, spDefense: 95, speed: 120},
            abilities: {0: 'synchronize', 1: 'inner-focus', hidden: 'magic-guard'},
            height: 1.5,
            weight: 48,
            colors: ['yellow', 'brown', 'gray'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'kadabra'
            },

        'machop': {
            order: indexOrder++,
            token: 'machop',
            name: 'Machop',
            number: 66,
            types: ['fighting'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 70, phAttack: 80, phDefense: 50, spAttack: 35, spDefense: 35, speed: 35},
            abilities: {0: 'guts', 1: 'no-guard', hidden: 'steadfast'},
            height: 0.8,
            weight: 19.5,
            colors: ['gray', 'yellow'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            nextEvolutions: [{
                species: 'machoke',
                method: 'level-up',
                value: 28
                }]
            },
        'machoke': {
            order: indexOrder++,
            token: 'machoke',
            name: 'Machoke',
            number: 67,
            types: ['fighting'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 80, phAttack: 100, phDefense: 70, spAttack: 50, spDefense: 60, speed: 45},
            abilities: {0: 'guts', 1: 'no-guard', hidden: 'steadfast'},
            height: 1.5,
            weight: 70.5,
            colors: ['gray', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'machop',
            nextEvolutions: [{
                species: 'machamp',
                method: 'trade-partner',
                value: 'auto',
                method2: 'level-up',
                value2: 48
                }]
            },
        'machamp': {
            order: indexOrder++,
            token: 'machamp',
            name: 'Machamp',
            number: 68,
            types: ['fighting'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 90, phAttack: 130, phDefense: 80, spAttack: 65, spDefense: 85, speed: 55},
            abilities: {0: 'guts', 1: 'no-guard', hidden: 'steadfast'},
            height: 1.6,
            weight: 130,
            colors: ['gray', 'yellow', 'red', 'white'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'machoke'
            },

        'bellsprout': {
            order: indexOrder++,
            token: 'bellsprout',
            name: 'Bellsprout',
            number: 69,
            types: ['grass', 'poison'],
            baseStats: {hp: 50, phAttack: 75, phDefense: 35, spAttack: 70, spDefense: 30, speed: 40},
            abilities: {0: 'chlorophyll', hidden: 'gluttony'},
            height: 0.7,
            weight: 4,
            colors: ['yellow', 'green', 'pink'],
            eggCycles: 20,
            eggGroups: ['grass'],
            nextEvolutions: [{
                species: 'weepinbell',
                method: 'level-up',
                value: 21
                }]
            },
        'weepinbell': {
            order: indexOrder++,
            token: 'weepinbell',
            name: 'Weepinbell',
            number: 70,
            types: ['grass', 'poison'],
            baseStats: {hp: 65, phAttack: 90, phDefense: 50, spAttack: 85, spDefense: 45, speed: 55},
            abilities: {0: 'chlorophyll', hidden: 'gluttony'},
            height: 1,
            weight: 6.4,
            colors: ['yellow', 'green', 'pink'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'bellsprout',
            nextEvolutions: [{
                species: 'victreebel', // leaf-stone
                method: 'type-appeal',
                value: ['grass', 'poison'],
                method2: 'level-up',
                value2: 41
                }]
            },
        'victreebel': {
            order: indexOrder++,
            token: 'victreebel',
            name: 'Victreebel',
            number: 71,
            types: ['grass', 'poison'],
            baseStats: {hp: 80, phAttack: 105, phDefense: 65, spAttack: 100, spDefense: 70, speed: 70},
            abilities: {0: 'chlorophyll', hidden: 'gluttony'},
            height: 1.7,
            weight: 15.5,
            colors: ['yellow', 'green', 'pink'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'weepinbell'
            },

        'tentacool': {
            order: indexOrder++,
            token: 'tentacool',
            name: 'Tentacool',
            number: 72,
            types: ['water', 'poison'],
            baseStats: {hp: 40, phAttack: 40, phDefense: 35, spAttack: 50, spDefense: 100, speed: 70},
            abilities: {0: 'clear-body', 1: 'liquid-ooze', hidden: 'rain-dish'},
            height: 0.9,
            weight: 45.5,
            colors: ['blue', 'red', 'gray'],
            eggCycles: 20,
            eggGroups: ['water-3'],
            nextEvolutions: [{
                species: 'tentacruel',
                method: 'level-up',
                value: 30
                }]
            },
        'tentacruel': {
            order: indexOrder++,
            token: 'tentacruel',
            name: 'Tentacruel',
            number: 73,
            types: ['water', 'poison'],
            baseStats: {hp: 80, phAttack: 70, phDefense: 65, spAttack: 80, spDefense: 120, speed: 100},
            abilities: {0: 'clear-body', 1: 'liquid-ooze', hidden: 'rain-dish'},
            height: 1.6,
            weight: 55,
            colors: ['blue', 'red', 'gray'],
            eggCycles: 20,
            eggGroups: ['water-3'],
            prevEvolution: 'tentacool'
            },

        'geodude': {
            order: indexOrder++,
            token: 'geodude',
            name: 'Geodude',
            number: 74,
            types: ['rock', 'ground'],
            baseStats: {hp: 40, phAttack: 80, phDefense: 100, spAttack: 30, spDefense: 30, speed: 20},
            abilities: {0: 'rock-head', 1: 'sturdy', hidden: 'sand-veil'},
            height: 0.4,
            weight: 20,
            colors: ['brown', 'gray'],
            eggCycles: 15,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'graveler',
                method: 'level-up',
                value: 25
                }]
            },
        'graveler': {
            order: indexOrder++,
            token: 'graveler',
            name: 'Graveler',
            number: 75,
            types: ['rock', 'ground'],
            baseStats: {hp: 55, phAttack: 95, phDefense: 115, spAttack: 45, spDefense: 45, speed: 35},
            abilities: {0: 'rock-head', 1: 'sturdy', hidden: 'sand-veil'},
            height: 1,
            weight: 105,
            colors: ['brown', 'gray'],
            eggCycles: 15,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'golem',
                method: 'trade-partner',
                value: 'auto',
                method2: 'level-up',
                value2: 45
                }],
            prevEvolution: 'geodude'
            },
        'golem': {
            order: indexOrder++,
            token: 'golem',
            name: 'Golem',
            number: 76,
            types: ['rock', 'ground'],
            baseStats: {hp: 80, phAttack: 120, phDefense: 130, spAttack: 55, spDefense: 65, speed: 45},
            abilities: {0: 'rock-head', 1: 'sturdy', hidden: 'sand-veil'},
            height: 1.4,
            weight: 300,
            colors: ['brown', 'gray'],
            eggCycles: 15,
            eggGroups: ['mineral'],
            prevEvolution: 'graveler'
            },

        'ponyta': {
            order: indexOrder++,
            token: 'ponyta',
            name: 'Ponyta',
            number: 77,
            types: ['fire'],
            baseStats: {hp: 50, phAttack: 85, phDefense: 55, spAttack: 65, spDefense: 65, speed: 90},
            abilities: {0: 'run-away', 1: 'flash-fire', hidden: 'flame-body'},
            height: 1,
            weight: 30,
            colors: ['white', 'orange', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'rapidash',
                method: 'level-up',
                value: 40
                }]
            },
        'rapidash': {
            order: indexOrder++,
            token: 'rapidash',
            name: 'Rapidash',
            number: 78,
            types: ['fire'],
            baseStats: {hp: 65, phAttack: 100, phDefense: 70, spAttack: 80, spDefense: 80, speed: 105},
            abilities: {0: 'run-away', 1: 'flash-fire', hidden: 'flame-body'},
            height: 1.7,
            weight: 95,
            colors: ['white', 'orange', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'ponyta'
            },

        'slowpoke': {
            order: indexOrder++,
            token: 'slowpoke',
            name: 'Slowpoke',
            number: 79,
            types: ['water', 'psychic'],
            baseStats: {hp: 90, phAttack: 65, phDefense: 65, spAttack: 40, spDefense: 40, speed: 15},
            abilities: {0: 'oblivious', 1: 'own-tempo', hidden: 'regenerator'},
            height: 1.2,
            weight: 36,
            colors: ['pink', 'brown'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            nextEvolutions: [{
                species: 'slowbro',
                method: 'level-up',
                value: 37
                }]
            },
        'slowbro': {
            order: indexOrder++,
            token: 'slowbro',
            name: 'Slowbro',
            number: 80,
            types: ['water', 'psychic'],
            baseStats: {hp: 95, phAttack: 75, phDefense: 110, spAttack: 100, spDefense: 80, speed: 30},
            abilities: {0: 'oblivious', 1: 'own-tempo', hidden: 'regenerator'},
            height: 1.6,
            weight: 78.5,
            colors: ['pink', 'brown', 'gray'],
            eggCycles: 20,
            eggGroups: ['monster', 'water-1'],
            prevEvolution: 'slowpoke'
            },

        'magnemite': {
            order: indexOrder++,
            token: 'magnemite',
            name: 'Magnemite',
            number: 81,
            types: ['electric', 'steel'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 25, phAttack: 35, phDefense: 70, spAttack: 95, spDefense: 55, speed: 45},
            abilities: {0: 'magnet-pull', 1: 'sturdy', hidden: 'analytic'},
            height: 0.3,
            weight: 6,
            colors: ['gray', 'black', 'red', 'blue'],
            evos: ['magneton'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'magneton',
                method: 'level-up',
                value: 30
                }]
            },
        'magneton': {
            order: indexOrder++,
            token: 'magneton',
            name: 'Magneton',
            number: 82,
            types: ['electric', 'steel'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 50, phAttack: 60, phDefense: 95, spAttack: 120, spDefense: 70, speed: 70},
            abilities: {0: 'magnet-pull', 1: 'sturdy', hidden: 'analytic'},
            height: 1,
            weight: 60,
            colors: ['gray', 'black', 'red', 'blue'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'magnemite'
            },

        'farfetchd': {
            order: indexOrder++,
            token: 'farfetchd',
            name: 'Farfetch\'d',
            number: 83,
            types: ['normal', 'flying'],
            baseStats: {hp: 52, phAttack: 90, phDefense: 55, spAttack: 58, spDefense: 62, speed: 60},
            abilities: {0: 'keen-eye', 1: 'inner-focus', hidden: 'defiant'},
            height: 0.8,
            weight: 15,
            colors: ['brown', 'white', 'yellow', 'green'],
            eggCycles: 20,
            eggGroups: ['flying', 'field'],
            },

        'doduo': {
            order: indexOrder++,
            token: 'doduo',
            name: 'Doduo',
            number: 84,
            types: ['normal', 'flying'],
            baseStats: {hp: 35, phAttack: 85, phDefense: 45, spAttack: 35, spDefense: 35, speed: 75},
            abilities: {0: 'run-away', 1: 'early-bird', hidden: 'tangled-feet'},
            height: 1.4,
            weight: 39.2,
            colors: ['brown', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['flying'],
            nextEvolutions: [{
                species: 'dodrio',
                method: 'level-up',
                value: 31
                }]
            },
        'dodrio': {
            order: indexOrder++,
            token: 'dodrio',
            name: 'Dodrio',
            number: 85,
            types: ['normal', 'flying'],
            baseStats: {hp: 60, phAttack: 110, phDefense: 70, spAttack: 60, spDefense: 60, speed: 110},
            abilities: {0: 'run-away', 1: 'early-bird', hidden: 'tangled-feet'},
            height: 1.8,
            weight: 85.2,
            colors: ['brown', 'white', 'yellow', 'black', 'red'],
            eggCycles: 20,
            eggGroups: ['flying'],
            prevEvolution: 'doduo'
            },

        'seel': {
            order: indexOrder++,
            token: 'seel',
            name: 'Seel',
            number: 86,
            types: ['water'],
            baseStats: {hp: 65, phAttack: 45, phDefense: 55, spAttack: 45, spDefense: 70, speed: 45},
            abilities: {0: 'thick-fat', 1: 'hydration', hidden: 'ice-body'},
            height: 1.1,
            weight: 90,
            colors: ['white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            nextEvolutions: [{
                species: 'dewgong',
                method: 'level-up',
                value: 34
                }]
            },
        'dewgong': {
            order: indexOrder++,
            token: 'dewgong',
            name: 'Dewgong',
            number: 87,
            types: ['water', 'ice'],
            baseStats: {hp: 90, phAttack: 70, phDefense: 80, spAttack: 70, spDefense: 95, speed: 70},
            abilities: {0: 'thick-fat', 1: 'hydration', hidden: 'ice-body'},
            height: 1.7,
            weight: 120,
            colors: ['white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'seel'
            },

        'grimer': {
            order: indexOrder++,
            token: 'grimer',
            name: 'Grimer',
            number: 88,
            types: ['poison'],
            baseStats: {hp: 80, phAttack: 80, phDefense: 50, spAttack: 40, spDefense: 50, speed: 25},
            abilities: {0: 'stench', 1: 'sticky-hold', hidden: 'poison-touch'},
            height: 0.9,
            weight: 30,
            colors: ['purple'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'muk',
                method: 'level-up',
                value: 38
                }]
            },
        'muk': {
            order: indexOrder++,
            token: 'muk',
            name: 'Muk',
            number: 89,
            types: ['poison'],
            baseStats: {hp: 105, phAttack: 105, phDefense: 75, spAttack: 65, spDefense: 100, speed: 50},
            abilities: {0: 'stench', 1: 'sticky-hold', hidden: 'poison-touch'},
            height: 1.2,
            weight: 30,
            colors: ['purple'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'grimer'
            },

        'shellder': {
            order: indexOrder++,
            token: 'shellder',
            name: 'Shellder',
            number: 90,
            types: ['water'],
            baseStats: {hp: 30, phAttack: 65, phDefense: 100, spAttack: 45, spDefense: 25, speed: 40},
            abilities: {0: 'shell-armor', 1: 'skill-link', hidden: 'overcoat'},
            height: 0.3,
            weight: 4,
            colors: ['purple', 'black'],
            eggCycles: 20,
            eggGroups: ['water-3'],
            nextEvolutions: [{
                species: 'cloyster', // water-stone
                method: 'type-appeal',
                value: ['water', 'ice'],
                method2: 'level-up',
                value2: 20
                }]
            },
        'cloyster': {
            order: indexOrder++,
            token: 'cloyster',
            name: 'Cloyster',
            number: 91,
            types: ['water', 'ice'],
            baseStats: {hp: 50, phAttack: 95, phDefense: 180, spAttack: 85, spDefense: 45, speed: 70},
            abilities: {0: 'shell-armor', 1: 'skill-link', hidden: 'overcoat'},
            height: 1.5,
            weight: 132.5,
            colors: ['purple', 'black'],
            eggCycles: 20,
            eggGroups: ['water-3'],
            prevEvolution: 'shellder'
            },

        'gastly': {
            order: indexOrder++,
            token: 'gastly',
            name: 'Gastly',
            number: 92,
            types: ['ghost', 'poison'],
            baseStats: {hp: 30, phAttack: 35, phDefense: 30, spAttack: 100, spDefense: 35, speed: 80},
            abilities: {0: 'levitate'},
            height: 1.3,
            weight: 0.1,
            colors: ['black', 'purple', 'white'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'haunter',
                method: 'level-up',
                value: 25
                }]
            },
        'haunter': {
            order: indexOrder++,
            token: 'haunter',
            name: 'Haunter',
            number: 93,
            types: ['ghost', 'poison'],
            baseStats: {hp: 45, phAttack: 50, phDefense: 45, spAttack: 115, spDefense: 55, speed: 95},
            abilities: {0: 'levitate'},
            height: 1.6,
            weight: 0.1,
            colors: ['purple', 'red', 'white'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'gengar',
                method: 'trade-partner',
                value: 'auto',
                method2: 'level-up',
                value2: 45
                }],
            prevEvolution: 'gastly'
            },
        'gengar': {
            order: indexOrder++,
            token: 'gengar',
            name: 'Gengar',
            number: 94,
            types: ['ghost', 'poison'],
            baseStats: {hp: 60, phAttack: 65, phDefense: 60, spAttack: 130, spDefense: 75, speed: 110},
            abilities: {0: 'cursed-body'},
            height: 1.5,
            weight: 40.5,
            colors: ['purple', 'red', 'white'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'haunter'
            },

        'onix': {
            order: indexOrder++,
            token: 'onix',
            name: 'Onix',
            number: 95,
            types: ['rock', 'ground'],
            baseStats: {hp: 35, phAttack: 45, phDefense: 160, spAttack: 30, spDefense: 45, speed: 70},
            abilities: {0: 'rock-head', 1: 'sturdy', hidden: 'weak-armor'},
            height: 8.8,
            weight: 210,
            colors: ['gray'],
            eggCycles: 25,
            eggGroups: ['mineral'],
            },

        'drowzee': {
            order: indexOrder++,
            token: 'drowzee',
            name: 'Drowzee',
            number: 96,
            types: ['psychic'],
            baseStats: {hp: 60, phAttack: 48, phDefense: 45, spAttack: 43, spDefense: 90, speed: 42},
            abilities: {0: 'insomnia', 1: 'forewarn', hidden: 'inner-focus'},
            height: 1,
            weight: 32.4,
            colors: ['yellow', 'brown'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            nextEvolutions: [{
                species: 'hypno',
                method: 'level-up',
                value: 26
                }]
            },
        'hypno': {
            order: indexOrder++,
            token: 'hypno',
            name: 'Hypno',
            number: 97,
            types: ['psychic'],
            baseStats: {hp: 85, phAttack: 73, phDefense: 70, spAttack: 73, spDefense: 115, speed: 67},
            abilities: {0: 'insomnia', 1: 'forewarn', hidden: 'inner-focus'},
            height: 1.6,
            weight: 75.6,
            colors: ['yellow'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'drowzee'
            },

        'krabby': {
            order: indexOrder++,
            token: 'krabby',
            name: 'Krabby',
            number: 98,
            types: ['water'],
            baseStats: {hp: 30, phAttack: 105, phDefense: 90, spAttack: 25, spDefense: 25, speed: 50},
            abilities: {0: 'hyper-cutter', 1: 'shell-armor', hidden: 'sheer-force'},
            height: 0.4,
            weight: 6.5,
            colors: ['red', 'white'],
            eggCycles: 20,
            eggGroups: ['water-3'],
            nextEvolutions: [{
                species: 'kingler',
                method: 'level-up',
                value: 28
                }]
            },
        'kingler': {
            order: indexOrder++,
            token: 'kingler',
            name: 'Kingler',
            number: 99,
            types: ['water'],
            baseStats: {hp: 55, phAttack: 130, phDefense: 115, spAttack: 50, spDefense: 50, speed: 75},
            abilities: {0: 'hyper-cutter', 1: 'shell-armor', hidden: 'sheer-force'},
            height: 1.3,
            weight: 60,
            colors: ['red', 'white'],
            eggCycles: 20,
            eggGroups: ['water-3'],
            prevEvolution: 'krabby'
            },

        'voltorb': {
            order: indexOrder++,
            token: 'voltorb',
            name: 'Voltorb',
            number: 100,
            types: ['electric'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 40, phAttack: 30, phDefense: 50, spAttack: 55, spDefense: 55, speed: 100},
            abilities: {0: 'soundproof', 1: 'static', hidden: 'aftermath'},
            height: 0.5,
            weight: 10.4,
            colors: ['red', 'white'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'electrode',
                method: 'level-up',
                value: 30
                }]
            },
        'electrode': {
            order: indexOrder++,
            token: 'electrode',
            name: 'Electrode',
            number: 101,
            types: ['electric'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 60, phAttack: 50, phDefense: 70, spAttack: 80, spDefense: 80, speed: 150},
            abilities: {0: 'soundproof', 1: 'static', hidden: 'aftermath'},
            height: 1.2,
            weight: 66.6,
            colors: ['white', 'red'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'voltorb'
            },

        'exeggcute': {
            order: indexOrder++,
            token: 'exeggcute',
            name: 'Exeggcute',
            number: 102,
            types: ['grass', 'psychic'],
            baseStats: {hp: 60, phAttack: 40, phDefense: 80, spAttack: 60, spDefense: 45, speed: 40},
            abilities: {0: 'chlorophyll', hidden: 'harvest'},
            height: 0.4,
            weight: 2.5,
            colors: ['pink', 'yellow'],
            eggCycles: 20,
            eggGroups: ['grass'],
            nextEvolutions: [{
                species: 'exeggutor', // leaf-stone
                method: 'type-appeal',
                value: ['grass', 'psychic'],
                method2: 'level-up',
                value2: 20
                }]
            },
        'exeggutor': {
            order: indexOrder++,
            token: 'exeggutor',
            name: 'Exeggutor',
            number: 103,
            types: ['grass', 'psychic'],
            baseStats: {hp: 95, phAttack: 95, phDefense: 85, spAttack: 125, spDefense: 75, speed: 55},
            abilities: {0: 'chlorophyll', hidden: 'harvest'},
            height: 2,
            weight: 120,
            colors: ['yellow', 'green', 'brown'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'exeggcute'
            },

        'cubone': {
            order: indexOrder++,
            token: 'cubone',
            name: 'Cubone',
            number: 104,
            types: ['ground'],
            baseStats: {hp: 50, phAttack: 50, phDefense: 95, spAttack: 40, spDefense: 50, speed: 35},
            abilities: {0: 'rock-head', 1: 'lightning-rod', hidden: 'battle-armor'},
            height: 0.4,
            weight: 6.5,
            colors: ['brown', 'white'],
            eggCycles: 20,
            eggGroups: ['monster'],
            nextEvolutions: [{
                species: 'marowak',
                method: 'level-up',
                value: 28
                }]
            },
        'marowak': {
            order: indexOrder++,
            token: 'marowak',
            name: 'Marowak',
            number: 105,
            types: ['ground'],
            baseStats: {hp: 60, phAttack: 80, phDefense: 110, spAttack: 50, spDefense: 80, speed: 45},
            abilities: {0: 'rock-head', 1: 'lightning-rod', hidden: 'battle-armor'},
            height: 1,
            weight: 45,
            colors: ['brown', 'white'],
            eggCycles: 20,
            eggGroups: ['monster'],
            prevEvolution: 'cubone'
            },

        'hitmonlee': {
            order: indexOrder++,
            token: 'hitmonlee',
            name: 'Hitmonlee',
            number: 106,
            types: ['fighting'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 50, phAttack: 120, phDefense: 53, spAttack: 35, spDefense: 110, speed: 87},
            abilities: {0: 'limber', 1: 'reckless', hidden: 'unburden'},
            height: 1.5,
            weight: 49.8,
            colors: ['brown', 'black'],
            eggCycles: 25,
            eggGroups: ['human-like'],
            },
        'hitmonchan': {
            order: indexOrder++,
            token: 'hitmonchan',
            name: 'Hitmonchan',
            number: 107,
            types: ['fighting'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 50, phAttack: 105, phDefense: 79, spAttack: 35, spDefense: 110, speed: 76},
            abilities: {0: 'keen-eye', 1: 'iron-fist', hidden: 'inner-focus'},
            height: 1.4,
            weight: 50.2,
            colors: ['brown', 'pink'],
            eggCycles: 25,
            eggGroups: ['human-like'],
            },

        'lickitung': {
            order: indexOrder++,
            token: 'lickitung',
            name: 'Lickitung',
            number: 108,
            types: ['normal'],
            baseStats: {hp: 90, phAttack: 55, phDefense: 75, spAttack: 60, spDefense: 75, speed: 30},
            abilities: {0: 'own-tempo', 1: 'oblivious', hidden: 'cloud-nine'},
            height: 1.2,
            weight: 65.5,
            colors: ['pink', 'yellow'],
            eggCycles: 20,
            eggGroups: ['monster'],
            },

        'koffing': {
            order: indexOrder++,
            token: 'koffing',
            name: 'Koffing',
            number: 109,
            types: ['poison'],
            baseStats: {hp: 40, phAttack: 65, phDefense: 95, spAttack: 60, spDefense: 45, speed: 35},
            abilities: {0: 'levitate'},
            height: 0.6,
            weight: 1,
            colors: ['purple', 'yellow'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'weezing',
                method: 'level-up',
                value: 35
                }]
            },
        'weezing': {
            order: indexOrder++,
            token: 'weezing',
            name: 'Weezing',
            number: 110,
            types: ['poison'],
            baseStats: {hp: 65, phAttack: 90, phDefense: 120, spAttack: 85, spDefense: 70, speed: 60},
            abilities: {0: 'levitate'},
            height: 1.2,
            weight: 9.5,
            colors: ['purple', 'yellow'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'koffing'
            },

        'rhyhorn': {
            order: indexOrder++,
            token: 'rhyhorn',
            name: 'Rhyhorn',
            number: 111,
            types: ['ground', 'rock'],
            baseStats: {hp: 80, phAttack: 85, phDefense: 95, spAttack: 30, spDefense: 30, speed: 25},
            abilities: {0: 'lightning-rod', 1: 'rock-head', hidden: 'reckless'},
            height: 1,
            weight: 115,
            colors: ['gray'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            nextEvolutions: [{
                species: 'rhydon',
                method: 'level-up',
                value: 42
                }]
            },
        'rhydon': {
            order: indexOrder++,
            token: 'rhydon',
            name: 'Rhydon',
            number: 112,
            types: ['ground', 'rock'],
            baseStats: {hp: 105, phAttack: 130, phDefense: 120, spAttack: 45, spDefense: 45, speed: 40},
            abilities: {0: 'lightning-rod', 1: 'rock-head', hidden: 'reckless'},
            height: 1.9,
            weight: 120,
            colors: ['gray', 'yellow'],
            prevo: 'rhyhorn',
            evos: ['rhyperior'],
            eggCycles: 20,
            eggGroups: ['monster', 'field'],
            prevEvolution: 'rhyhorn',
            },

        'chansey': {
            order: indexOrder++,
            token: 'chansey',
            name: 'Chansey',
            number: 113,
            types: ['normal'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 250, phAttack: 5, phDefense: 5, spAttack: 35, spDefense: 105, speed: 50},
            abilities: {0: 'natural-cure', 1: 'serene-grace', hidden: 'healer'},
            height: 1.1,
            weight: 34.6,
            colors: ['pink', 'white'],
            eggCycles: 40,
            eggGroups: ['fairy'],
            },

        'tangela': {
            order: indexOrder++,
            token: 'tangela',
            name: 'Tangela',
            number: 114,
            types: ['grass'],
            baseStats: {hp: 65, phAttack: 55, phDefense: 115, spAttack: 100, spDefense: 40, speed: 60},
            abilities: {0: 'chlorophyll', 1: 'leaf-guard', hidden: 'regenerator'},
            height: 1,
            weight: 35,
            colors: ['blue', 'red', 'black'],
            eggCycles: 20,
            eggGroups: ['grass'],
            },

        'kangaskhan': {
            order: indexOrder++,
            token: 'kangaskhan',
            name: 'Kangaskhan',
            number: 115,
            types: ['normal'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 105, phAttack: 95, phDefense: 80, spAttack: 40, spDefense: 80, speed: 90},
            abilities: {0: 'early-bird', 1: 'scrappy', hidden: 'inner-focus'},
            height: 2.2,
            weight: 80,
            colors: ['brown', 'gray', 'yellow'],
            eggCycles: 20,
            eggGroups: ['monster'],
            },

        'horsea': {
            order: indexOrder++,
            token: 'horsea',
            name: 'Horsea',
            number: 116,
            types: ['water'],
            baseStats: {hp: 30, phAttack: 40, phDefense: 70, spAttack: 70, spDefense: 25, speed: 60},
            abilities: {0: 'swift-swim', 1: 'sniper', hidden: 'damp'},
            height: 0.4,
            weight: 8,
            colors: ['blue', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'dragon'],
            nextEvolutions: [{
                species: 'seadra',
                method: 'level-up',
                value: 32
                }]
            },
        'seadra': {
            order: indexOrder++,
            token: 'seadra',
            name: 'Seadra',
            number: 117,
            types: ['water'],
            baseStats: {hp: 55, phAttack: 65, phDefense: 95, spAttack: 95, spDefense: 45, speed: 85},
            abilities: {0: 'poison-point', 1: 'sniper', hidden: 'damp'},
            height: 1.2,
            weight: 25,
            colors: ['blue', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'dragon'],
            prevEvolution: 'horsea'
            },

        'goldeen': {
            order: indexOrder++,
            token: 'goldeen',
            name: 'Goldeen',
            number: 118,
            types: ['water'],
            baseStats: {hp: 45, phAttack: 67, phDefense: 60, spAttack: 35, spDefense: 50, speed: 63},
            abilities: {0: 'swift-swim', 1: 'water-veil', hidden: 'lightning-rod'},
            height: 0.6,
            weight: 15,
            colors: ['orange', 'white'],
            eggCycles: 20,
            eggGroups: ['water-2'],
            nextEvolutions: [{
                species: 'seaking',
                method: 'level-up',
                value: 33
                }]
            },
        'seaking': {
            order: indexOrder++,
            token: 'seaking',
            name: 'Seaking',
            number: 119,
            types: ['water'],
            baseStats: {hp: 80, phAttack: 92, phDefense: 65, spAttack: 65, spDefense: 80, speed: 68},
            abilities: {0: 'swift-swim', 1: 'water-veil', hidden: 'lightning-rod'},
            height: 1.3,
            weight: 39,
            colors: ['orange', 'black', 'white'],
            eggCycles: 20,
            eggGroups: ['water-2'],
            prevEvolution: 'goldeen'
            },

        'staryu': {
            order: indexOrder++,
            token: 'staryu',
            name: 'Staryu',
            number: 120,
            types: ['water'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 30, phAttack: 45, phDefense: 55, spAttack: 70, spDefense: 55, speed: 85},
            abilities: {0: 'illuminate', 1: 'natural-cure', hidden: 'analytic'},
            height: 0.8,
            weight: 34.5,
            colors: ['brown', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['water-3'],
            nextEvolutions: [{
                species: 'starmie', // water-stone
                method: 'type-appeal',
                value: ['water', 'psychic'],
                method2: 'level-up',
                value2: 20
                }]
            },
        'starmie': {
            order: indexOrder++,
            token: 'starmie',
            name: 'Starmie',
            number: 121,
            types: ['water', 'psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 60, phAttack: 75, phDefense: 85, spAttack: 100, spDefense: 85, speed: 115},
            abilities: {0: 'illuminate', 1: 'natural-cure', hidden: 'analytic'},
            height: 1.1,
            weight: 80,
            colors: ['purple', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['water-3'],
            prevEvolution: 'staryu'
            },

        'mr-mime': {
            order: indexOrder++,
            token: 'mr-mime',
            name: 'Mr. Mime',
            number: 122,
            types: ['psychic', 'fairy'],
            baseStats: {hp: 40, phAttack: 45, phDefense: 65, spAttack: 100, spDefense: 120, speed: 90},
            abilities: {0: 'soundproof', 1: 'filter', hidden: 'technician'},
            height: 1.3,
            weight: 54.5,
            colors: ['red', 'pink', 'white', 'blue'],
            eggCycles: 25,
            eggGroups: ['human-like'],
            },

        'scyther': {
            order: indexOrder++,
            token: 'scyther',
            name: 'Scyther',
            number: 123,
            types: ['bug', 'flying'],
            baseStats: {hp: 70, phAttack: 110, phDefense: 80, spAttack: 55, spDefense: 80, speed: 105},
            abilities: {0: 'swarm', 1: 'technician', hidden: 'steadfast'},
            height: 1.5,
            weight: 56,
            colors: ['green', 'white'],
            eggCycles: 25,
            eggGroups: ['bug'],
            },

        'jynx': {
            order: indexOrder++,
            token: 'jynx',
            name: 'Jynx',
            number: 124,
            types: ['ice', 'psychic'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 65, phAttack: 50, phDefense: 35, spAttack: 115, spDefense: 95, speed: 95},
            abilities: {0: 'oblivious', 1: 'forewarn', hidden: 'dry-skin'},
            height: 1.4,
            weight: 40.6,
            colors: ['red', 'yellow', 'purple'],
            eggCycles: 25,
            eggGroups: ['human-like'],
            },

        'electabuzz': {
            order: indexOrder++,
            token: 'electabuzz',
            name: 'Electabuzz',
            number: 125,
            types: ['electric'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 65, phAttack: 83, phDefense: 57, spAttack: 95, spDefense: 85, speed: 105},
            abilities: {0: 'static', hidden: 'vital-spirit'},
            height: 1.1,
            weight: 30,
            colors: ['yellow', 'black'],
            eggCycles: 25,
            eggGroups: ['human-like']
            },

        'magmar': {
            order: indexOrder++,
            token: 'magmar',
            name: 'Magmar',
            number: 126,
            types: ['fire'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 65, phAttack: 95, phDefense: 57, spAttack: 100, spDefense: 85, speed: 93},
            abilities: {0: 'flame-body', hidden: 'vital-spirit'},
            height: 1.3,
            weight: 44.5,
            colors: ['red', 'yellow'],
            eggCycles: 25,
            eggGroups: ['human-like']
            },

        'pinsir': {
            order: indexOrder++,
            token: 'pinsir',
            name: 'Pinsir',
            number: 127,
            types: ['bug'],
            baseStats: {hp: 65, phAttack: 125, phDefense: 100, spAttack: 55, spDefense: 70, speed: 85},
            abilities: {0: 'hyper-cutter', 1: 'mold-breaker', hidden: 'moxie'},
            height: 1.5,
            weight: 55,
            colors: ['brown', 'white'],
            eggCycles: 25,
            eggGroups: ['bug']
            },

        'tauros': {
            order: indexOrder++,
            token: 'tauros',
            name: 'Tauros',
            number: 128,
            types: ['normal'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 75, phAttack: 100, phDefense: 95, spAttack: 40, spDefense: 70, speed: 110},
            abilities: {0: 'intimidate', 1: 'anger-point', hidden: 'sheer-force'},
            height: 1.4,
            weight: 88.4,
            colors: ['brown', 'white', 'gray'],
            eggCycles: 20,
            eggGroups: ['field']
            },

        'magikarp': {
            order: indexOrder++,
            token: 'magikarp',
            name: 'Magikarp',
            number: 129,
            types: ['water'],
            baseStats: {hp: 20, phAttack: 10, phDefense: 55, spAttack: 15, spDefense: 20, speed: 80},
            abilities: {0: 'swift-swim', hidden: 'rattled'},
            height: 0.9,
            weight: 10,
            colors: ['orange', 'yellow', 'white'],
            eggCycles: 5,
            eggGroups: ['water-2', 'dragon'],
            nextEvolutions: [{
                species: 'gyarados',
                method: 'level-up',
                value: 20
                }]
            },
        'gyarados': {
            order: indexOrder++,
            token: 'gyarados',
            name: 'Gyarados',
            number: 130,
            types: ['water', 'flying'],
            baseStats: {hp: 95, phAttack: 125, phDefense: 79, spAttack: 60, spDefense: 100, speed: 81},
            abilities: {0: 'intimidate', hidden: 'moxie'},
            height: 6.5,
            weight: 235,
            colors: ['blue', 'white', 'red'],
            prevo: 'magikarp',
            eggCycles: 5,
            eggGroups: ['water-2', 'dragon'],
            prevEvolution: 'magikarp'
            },

        'lapras': {
            order: indexOrder++,
            token: 'lapras',
            name: 'Lapras',
            number: 131,
            types: ['water', 'ice'],
            baseStats: {hp: 130, phAttack: 85, phDefense: 80, spAttack: 85, spDefense: 95, speed: 60},
            abilities: {0: 'water-absorb', 1: 'shell-armor', hidden: 'hydration'},
            height: 2.5,
            weight: 220,
            colors: ['blue', 'white'],
            eggCycles: 40,
            eggGroups: ['monster', 'water-1'],
            },

        'ditto': {
            order: indexOrder++,
            token: 'ditto',
            name: 'Ditto',
            number: 132,
            types: ['normal'],
            genderRatio: {none: 1.000},
            lifePoints: 365,
            baseStats: {hp: 48, phAttack: 48, phDefense: 48, spAttack: 48, spDefense: 48, speed: 48},
            abilities: {0: 'limber', hidden: 'imposter'},
            height: 0.3,
            weight: 4,
            colors: ['purple'],
            eggCycles: 20,
            eggGroups: ['ditto']
            },

        'eevee': {
            order: indexOrder++,
            token: 'eevee',
            name: 'Eevee',
            number: 133,
            types: ['normal'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 55, phAttack: 55, phDefense: 50, spAttack: 45, spDefense: 65, speed: 55},
            abilities: {0: 'run-away', 1: 'adaptability', hidden: 'anticipation'},
            height: 0.3,
            weight: 6.5,
            colors: ['brown', 'white'],
            eggCycles: 35,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'vaporeon', // water-stone
                method: 'type-appeal',
                value: 'water',
                method2: 'level-up',
                value2: 20
                }, {
                species: 'jolteon', // thunder-stone
                method: 'type-appeal',
                value: 'electric',
                method2: 'level-up',
                value2: 20
                }, {
                species: 'flareon', // fire-stone
                method: 'type-appeal',
                value: 'fire',
                method2: 'level-up',
                value2: 20
                }],
            },
        'vaporeon': {
            order: indexOrder++,
            token: 'vaporeon',
            name: 'Vaporeon',
            number: 134,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 130, phAttack: 65, phDefense: 60, spAttack: 110, spDefense: 95, speed: 65},
            abilities: {0: 'water-absorb', hidden: 'hydration'},
            height: 1,
            weight: 29,
            colors: ['blue', 'white'],
            prevo: 'eevee',
            eggCycles: 35,
            eggGroups: ['field'],
            prevEvolution: 'eevee',
            },
        'jolteon': {
            order: indexOrder++,
            token: 'jolteon',
            name: 'Jolteon',
            number: 135,
            types: ['electric'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 65, phAttack: 65, phDefense: 60, spAttack: 110, spDefense: 95, speed: 130},
            abilities: {0: 'volt-absorb', hidden: 'quick-feet'},
            height: 0.8,
            weight: 24.5,
            colors: ['yellow', 'white'],
            eggCycles: 35,
            eggGroups: ['field'],
            prevEvolution: 'eevee',
            },
        'flareon': {
            order: indexOrder++,
            token: 'flareon',
            name: 'Flareon',
            number: 136,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 65, phAttack: 130, phDefense: 60, spAttack: 95, spDefense: 110, speed: 65},
            abilities: {0: 'flash-fire', hidden: 'guts'},
            height: 0.9,
            weight: 25,
            colors: ['orange', 'yellow'],
            prevo: 'eevee',
            eggCycles: 35,
            eggGroups: ['field'],
            prevEvolution: 'eevee',
            },

        'porygon': {
            order: indexOrder++,
            token: 'porygon',
            name: 'Porygon',
            number: 137,
            types: ['normal'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 65, phAttack: 60, phDefense: 70, spAttack: 85, spDefense: 75, speed: 40},
            abilities: {0: 'trace', 1: 'download', hidden: 'analytic'},
            height: 0.8,
            weight: 36.5,
            colors: ['pink', 'blue'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            },

        'omanyte': {
            order: indexOrder++,
            token: 'omanyte',
            name: 'Omanyte',
            isFossilPokemon: true,
            number: 138,
            types: ['rock', 'water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 35, phAttack: 40, phDefense: 100, spAttack: 90, spDefense: 55, speed: 35},
            abilities: {0: 'swift-swim', 1: 'shell-armor', hidden: 'weak-armor'},
            height: 0.4,
            weight: 7.5,
            colors: ['blue', 'white'],
            evos: ['omastar'],
            eggCycles: 30,
            eggGroups: ['water-1', 'water-3'],
            nextEvolutions: [{
                species: 'omastar',
                method: 'level-up',
                value: 40
                }]
            },
        'omastar': {
            order: indexOrder++,
            token: 'omastar',
            name: 'Omastar',
            isFossilPokemon: true,
            number: 139,
            types: ['rock', 'water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 70, phAttack: 60, phDefense: 125, spAttack: 115, spDefense: 70, speed: 55},
            abilities: {0: 'swift-swim', 1: 'shell-armor', hidden: 'weak-armor'},
            height: 1,
            weight: 35,
            colors: ['blue', 'white'],
            eggCycles: 30,
            eggGroups: ['water-1', 'water-3'],
            prevEvolution: 'omanyte'
            },

        'kabuto': {
            order: indexOrder++,
            token: 'kabuto',
            name: 'Kabuto',
            isFossilPokemon: true,
            number: 140,
            types: ['rock', 'water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 30, phAttack: 80, phDefense: 90, spAttack: 55, spDefense: 45, speed: 55},
            abilities: {0: 'swift-swim', 1: 'battle-armor', hidden: 'weak-armor'},
            height: 0.5,
            weight: 11.5,
            colors: ['brown', 'yellow'],
            evos: ['kabutops'],
            eggCycles: 30,
            eggGroups: ['water-1', 'water-3'],
            nextEvolutions: [{
                species: 'kabutops',
                method: 'level-up',
                value: 40
                }]
            },
        'kabutops': {
            order: indexOrder++,
            token: 'kabutops',
            name: 'Kabutops',
            isFossilPokemon: true,
            number: 141,
            types: ['rock', 'water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 60, phAttack: 115, phDefense: 105, spAttack: 65, spDefense: 70, speed: 80},
            abilities: {0: 'swift-swim', 1: 'Battle Armor', hidden: 'weak-armor'},
            height: 1.3,
            weight: 40.5,
            colors: ['brown', 'white'],
            eggCycles: 30,
            eggGroups: ['water-1', 'water-3'],
            prevEvolution: 'kabuto'
            },

        'aerodactyl': {
            order: indexOrder++,
            token: 'aerodactyl',
            name: 'Aerodactyl',
            isFossilPokemon: true,
            number: 142,
            types: ['rock', 'flying'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 80, phAttack: 105, phDefense: 65, spAttack: 60, spDefense: 75, speed: 130},
            abilities: {0: 'rock-head', 1: 'pressure', hidden: 'unnerve'},
            height: 1.8,
            weight: 59,
            colors: ['gray', 'purple', 'green'],
            eggCycles: 35,
            eggGroups: ['flying'],
            },

        'snorlax': {
            order: indexOrder++,
            token: 'snorlax',
            name: 'Snorlax',
            number: 143,
            types: ['normal'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 160, phAttack: 110, phDefense: 65, spAttack: 65, spDefense: 110, speed: 30},
            abilities: {0: 'immunity', 1: 'thick-fat', hidden: 'gluttony'},
            height: 2.1,
            weight: 460,
            colors: ['black', 'yellow'],
            eggCycles: 40,
            eggGroups: ['monster'],
            },

        'articuno': {
            order: indexOrder++,
            token: 'articuno',
            name: 'Articuno',
            class: 'legendary',
            number: 144,
            types: ['ice', 'flying'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 90, phAttack: 85, phDefense: 100, spAttack: 95, spDefense: 125, speed: 85},
            abilities: {0: 'pressure', hidden: 'snow-cloak'},
            height: 1.7,
            weight: 55.4,
            colors: ['blue', 'white'],
            eggCycles: 80,
            eggGroups: ['undiscovered'],
            },
        'zapdos': {
            order: indexOrder++,
            token: 'zapdos',
            name: 'Zapdos',
            class: 'legendary',
            number: 145,
            types: ['electric', 'flying'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 90, phAttack: 90, phDefense: 85, spAttack: 125, spDefense: 90, speed: 100},
            abilities: {0: 'pressure', H: 'static'},
            height: 1.6,
            weight: 52.6,
            colors: ['yellow', 'black'],
            eggCycles: 80,
            eggGroups: ['undiscovered'],
            },
        'moltres': {
            order: indexOrder++,
            token: 'moltres',
            name: 'Moltres',
            class: 'legendary',
            number: 146,
            types: ['fire', 'flying'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 90, phAttack: 100, phDefense: 90, spAttack: 125, spDefense: 85, speed: 90},
            abilities: {0: 'pressure', hidden: 'flame-body'},
            height: 2,
            weight: 60,
            colors: ['yellow', 'orange', 'red'],
            eggCycles: 80,
            eggGroups: ['undiscovered'],
            },

        'dratini': {
            order: indexOrder++,
            token: 'dratini',
            name: 'Dratini',
            number: 147,
            types: ['dragon'],
            baseStats: {hp: 41, phAttack: 64, phDefense: 45, spAttack: 50, spDefense: 50, speed: 50},
            abilities: {0: 'shed-skin', hidden: 'marvel-scale'},
            height: 1.8,
            weight: 3.3,
            colors: ['blue', 'white'],
            eggCycles: 40,
            eggGroups: ['water-1', 'dragon'],
            nextEvolutions: [{
                species: 'dragonair',
                method: 'level-up',
                value: 30
                }]
            },
        'dragonair': {
            order: indexOrder++,
            token: 'dragonair',
            name: 'Dragonair',
            number: 148,
            types: ['dragon'],
            baseStats: {hp: 61, phAttack: 84, phDefense: 65, spAttack: 70, spDefense: 70, speed: 70},
            abilities: {0: 'shed-skin', hidden: 'marvel-scale'},
            height: 4,
            weight: 16.5,
            colors: ['blue', 'white'],
            eggCycles: 40,
            eggGroups: ['water-1', 'dragon'],
            prevEvolution: 'dratini',
            nextEvolutions: [{
                species: 'dragonite',
                method: 'level-up',
                value: 55
                }]
            },
        'dragonite': {
            order: indexOrder++,
            token: 'dragonite',
            name: 'Dragonite',
            number: 149,
            types: ['dragon', 'flying'],
            baseStats: {hp: 91, phAttack: 134, phDefense: 95, spAttack: 100, spDefense: 100, speed: 80},
            abilities: {0: 'inner-focus', hidden: 'multiscale'},
            height: 2.2,
            weight: 210,
            colors: ['orange', 'yellow', 'green'],
            eggCycles: 40,
            eggGroups: ['water-1', 'dragon'],
            prevEvolution: 'dragonair'
            },

        'mewtwo': {
            order: indexOrder++,
            token: 'mewtwo',
            name: 'Mewtwo',
            class: 'legendary',
            number: 150,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 106, phAttack: 110, phDefense: 90, spAttack: 154, spDefense: 90, speed: 130},
            abilities: {0: 'pressure', hidden: 'unnerve'},
            height: 2,
            weight: 122,
            colors: ['purple', 'white'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },

        'mew': {
            order: indexOrder++,
            token: 'mew',
            name: 'Mew',
            class: 'mythical',
            number: 151,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 100, phDefense: 100, spAttack: 100, spDefense: 100, speed: 100},
            abilities: {0: 'synchronize'},
            height: 0.4,
            weight: 4,
            colors: ['pink'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with known species appeal data
    thisIndex.addSpeciesAppealValues([

        // Predator/prey relationships
        {base: 'pidgeotto', species: 'exeggcute'},
        {base: 'pidgeot', species: 'magikarp'},
        {base: 'ekans', species: 'pidgey'},
        {base: 'ekans', species: 'spearow'},
        {base: 'kingler', species: 'cloyster'},
        {base: 'omastar', species: 'shellder'},

        // Symbiotic relationships
        {base: 'shellder', species: 'slowpoke'},

        // Rival relationships
        // ---

        // Romantic relationships
        // ---

        // Feeding/pollination relationships
        {base: 'butterfree', species: 'venusaur'},
        {base: 'venomoth', species: 'vileplume'},

        // One-sided (theft) relationships
        // ---

        // Mistaken identify relationships
        // ---

        // Legendary trigger relationships
        {base: 'mew', species: 'mewtwo'},

        ]);

    // Add each of this region's starter pokemon to the global reward index
    PokeBoxAPI.addStarterRewardToIndex({region: 'kanto', gen: 1, count: 0, 'species': ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'eevee']});

})();