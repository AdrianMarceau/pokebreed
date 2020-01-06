/*
    * GLOBAL POKEMON INDEX DATA (CUSTOM / GEN 8)
    * This data was collected from --------
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration(8);
    thisIndex.setRegion('galar');

    // Add the generation's list of regional variants to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Galarian Variants

        'galarian-meowth': {
            order: thisIndex.afterOrder('persian', 5),
            token: 'galarian-meowth',
            name: 'Galarian Meowth',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'meowth',
            number: 52,
            types: ['steel'],
            baseStats: {hp: 50, phAttack: 65, phDefense: 55, spAttack: 40, spDefense: 40, speed: 40},
            abilities: {0: 'pickup', 1: 'tough-claws', hidden: 'unnerve'},
            height: 0.4,
            weight: 7.5,
            colors: ['brown', 'black', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'perrserker',
                method: 'level-up',
                value: 28
                }],
            altBaseEvolutions: [{
                species: 'meowth',
                method: 'type-warning',
                value: 'steel',
                method2: 'type-warning',
                value2: 'dark'
                },{
                species: 'alolan-meowth',
                method: 'type-warning',
                value: 'steel',
                method2: 'type-warning',
                value2: 'normal'
                },{
                species: 'meowth',
                method: 'type-appeal',
                value: 'normal'
                },{
                species: 'alolan-meowth',
                method: 'type-appeal',
                value: 'dark'
                }]
            },

        'galarian-ponyta': {
            order: thisIndex.afterOrder('rapidash', 1),
            token: 'galarian-ponyta',
            name: 'Galarian Ponyta',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'ponyta',
            number: 77,
            types: ['psychic'],
            baseStats: {hp: 50, phAttack: 85, phDefense: 55, spAttack: 65, spDefense: 65, speed: 90},
            abilities: {0: 'run-away', 1: 'pastel-veil', hidden: 'anticipation'},
            height: 0.8,
            weight: 24.0,
            colors: ['white', 'pink', 'blue'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'galarian-rapidash',
                method: 'level-up',
                value: 40
                }],
            altBaseEvolutions: [{
                species: 'ponyta',
                method: 'type-warning',
                value: 'psychic'
                }]
            },
        'galarian-rapidash': {
            order: thisIndex.afterOrder('rapidash', 2),
            token: 'galarian-rapidash',
            name: 'Galarian Rapidash',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'rapidash',
            number: 78,
            types: ['psychic', 'fairy'],
            baseStats: {hp: 65, phAttack: 100, phDefense: 70, spAttack: 80, spDefense: 80, speed: 105},
            abilities: {0: 'run-away', 1: 'pastel-veil', hidden: 'anticipation'},
            height: 1.7,
            weight: 80.0,
            colors: ['white', 'pink', 'blue', 'black'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'galarian-ponyta'
            },

        'galarian-farfetchd': {
            order: thisIndex.afterOrder('farfetchd', 1),
            token: 'galarian-farfetchd',
            name: 'Galarian Farfetch\'d',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'farfetchd',
            number: 83,
            types: ['fighting'],
            baseStats: {hp: 52, phAttack: 95, phDefense: 55, spAttack: 58, spDefense: 62, speed: 55},
            abilities: {0: 'steadfast', hidden: 'scrappy'},
            height: 0.8,
            weight: 42.0,
            colors: ['brown', 'white', 'green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['flying', 'field'],
            nextEvolutions: [{
                species: 'sirfetchd',
                method: 'level-up',
                value: 33,
                method2: 'royal-ascension',
                value2: 33
                }],
            altBaseEvolutions: [{
                species: 'farfetchd',
                method: 'type-warning',
                value: 'fighting'
                },{
                species: 'farfetchd',
                method: 'type-appeal',
                value: 'normal'
                },{
                species: 'farfetchd',
                method: 'type-crisis',
                value: 'grass'
                }]
            },

        'galarian-weezing': {
            order: thisIndex.afterOrder('weezing', 1),
            token: 'galarian-weezing',
            name: 'Galarian Weezing',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'weezing',
            number: 110,
            types: ['poison', 'fairy'],
            baseStats: {hp: 65, phAttack: 90, phDefense: 120, spAttack: 85, spDefense: 70, speed: 60},
            abilities: {0: 'levitate', 1: 'neutralizing-gas', 'hidden': 'misty-surge'},
            height: 3.0,
            weight: 16.0,
            colors: ['gray', 'green', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'koffing'
            },

        'galarian-mr-mime': {
            order: thisIndex.afterOrder('mr-mime', 1),
            token: 'galarian-mr-mime',
            name: 'Galarian Mr. Mime',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'mr-mime',
            baseGameGeneration: 1,
            number: 122,
            displayNumber: 122.1,
            dexNumber: 122.1,
            types: ['ice', 'psychic'],
            baseStats: {hp: 50, phAttack: 65, phDefense: 65, spAttack: 90, spDefense: 90, speed: 100},
            abilities: {0: 'vital-spirit', 1: 'screen-cleaner', hidden: 'ice-body'},
            height: 1.4,
            weight: 56.8,
            colors: ['blue', 'white', 'black'],
            eggCycles: 25,
            eggGroups: ['human-like'],
            prevEvolution: 'mime-jr',
            nextEvolutions: [{
                species: 'mr-rime',
                method: 'level-up',
                value: 42
                }],
            altBaseEvolutions: [{
                species: 'mr-mime',
                method: 'type-warning',
                value: 'ice'
                },{
                species: 'farfetchd',
                method: 'type-appeal',
                value: 'fairy'
                }]
            },

        'galarian-corsola': {
            order: thisIndex.afterOrder('corsola', 1),
            token: 'galarian-corsola',
            name: 'Galarian Corsola',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'corsola',
            baseGameGeneration: 2,
            number: 222,
            types: ['ghost'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 60, phAttack: 55, phDefense: 100, spAttack: 65, spDefense: 100, speed: 30},
            abilities: {0: 'weak-armor', hidden: 'cursed-body'},
            height: 0.6,
            weight: 0.5,
            colors: ['gray', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'water-3'],
            nextEvolutions: [{
                species: 'cursola',
                method: 'level-up',
                value: 38
                }],
            altBaseEvolutions: [{
                species: 'corsola',
                method: 'type-surge',
                value: 'water',
                method: 'inverse-type-value',
                value: 'fire'
                }]
            },

        'galarian-zigzagoon': {
            order: thisIndex.afterOrder('linoone', 1),
            token: 'galarian-zigzagoon',
            name: 'Galarian Zigzagoon',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'zigzagoon',
            baseGameGeneration: 3,
            number: 263,
            types: ['dark', 'normal'],
            baseStats: {hp: 38, phAttack: 30, phDefense: 41, spAttack: 30, spDefense: 41, speed: 60},
            abilities: {0: 'pickup', 1: 'gluttony', hidden: 'quick-feet'},
            height: 0.4,
            weight: 17.5,
            colors: ['white', 'black', 'red'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'galarian-linoone',
                method: 'level-up',
                value: 20
                }],
            altBaseEvolutions: [{
                species: 'zigzagoon',
                method: 'type-warning',
                value: 'dark'
                }]
            },
        'galarian-linoone': {
            order: thisIndex.afterOrder('linoone', 2),
            token: 'galarian-linoone',
            name: 'Galarian Linoone',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'linoone',
            baseGameGeneration: 3,
            number: 264,
            types: ['dark', 'normal'],
            baseStats: {hp: 78, phAttack: 70, phDefense: 61, spAttack: 50, spDefense: 61, speed: 100},
            abilities: {0: 'pickup', 1: 'gluttony', hidden: 'quick-feet'},
            height: 0.5,
            weight: 32.5,
            colors: ['black', 'white', 'red'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'galarian-zigzagoon',
            nextEvolutions: [{
                species: 'obstagoon',
                method: 'type-appeal',
                value: 'dark',
                method2: 'level-up',
                value2: 35
                }]
            },

        'galarian-darumaka': {
            order: thisIndex.afterOrder('zen-darmanitan', 1),
            token: 'galarian-darumaka',
            name: 'Galarian Darumaka',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'darumaka',
            baseGameGeneration: 5,
            number: 554,
            types: ['ice'],
            baseStats: {hp: 70, phAttack: 90, phDefense: 45, spAttack: 15, spDefense: 45, speed: 50},
            abilities: {0: 'hustle', hidden: 'inner-focus'},
            height: 0.7,
            weight: 40.0,
            colors: ['white', 'blue'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'galarian-darmanitan',
                method: 'type-appeal',
                value: 'ice',
                method2: 'level-up',
                value2: 20
                }],
            altBaseEvolutions: [{
                species: 'darumaka',
                method: 'type-warning',
                value: 'ice',
                method2: 'type-value',
                value2: 'fire'
                }, {
                species: 'darumaka',
                method: 'type-surge',
                value: 'fire',
                method2: 'type-vs-type',
                value2: ['fire', 'water']
                }]
            },
        'galarian-darmanitan': {
            order: thisIndex.afterOrder('zen-darmanitan', 2),
            token: 'galarian-darmanitan',
            name: 'Galarian Darmanitan',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'darmanitan',
            baseGameGeneration: 5,
            number: 555,
            types: ['ice'],
            baseStats: {hp: 105, phAttack: 140, phDefense: 55, spAttack: 30, spDefense: 55, speed: 95},
            abilities: {0: 'gorilla-tactics', hidden: 'zen-mode'},
            height: 1.7,
            weight: 120.0,
            colors: ['white', 'blue'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'galarian-darumaka',
            nextEvolutions: [{
                species: 'galarian-zen-darmanitan',
                method: 'burst-evolution',
                value: 'zen-mode'
                }]
            },
        'galarian-zen-darmanitan': {
            order: thisIndex.afterOrder('zen-darmanitan', 3),
            token: 'galarian-zen-darmanitan',
            name: 'Zen Galarian Darmanitan',
            formClass: 'burst-evolution',
            formClass2: 'regional-variant',
            formToken: 'galarian-zen',
            baseSpecies: 'zen-darmanitan',
            baseGameGeneration: 5,
            number: 555,
            types: ['ice', 'fire'],
            baseStats: {hp: 105, phAttack: 160, phDefense: 55, spAttack: 30, spDefense: 55, speed: 135},
            abilities: {0: 'zen-mode'},
            height: 1.3,
            weight: 92.9,
            colors: ['white', 'orange', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'galarian-darmanitan'
            },

        'galarian-yamask': {
            order: thisIndex.afterOrder('cofagrigus', 1),
            token: 'galarian-yamask',
            name: 'Galarian Yamask',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'yamask',
            baseGameGeneration: 5,
            number: 562,
            types: ['ground', 'ghost'],
            baseStats: {hp: 38, phAttack: 55, phDefense: 85, spAttack: 30, spDefense: 65, speed: 30},
            abilities: {0: 'wandering-spirit'},
            height: 0.5,
            weight: 1.5,
            colors: ['black', 'white', 'purple', 'red'],
            eggCycles: 25,
            eggGroups: ['mineral', 'amorphous'],
            nextEvolutions: [{
                species: 'runerigus',
                method: 'level-up',
                value: 34,
                method2: 'type-surge',
                value2: 'ground'
                }],
            altBaseEvolutions: [{
                species: 'yamask',
                method: 'type-warning',
                value: 'ground'
                }]
            },

        'galarian-stunfisk': {
            order: thisIndex.afterOrder('stunfisk', 1),
            token: 'galarian-stunfisk',
            name: 'Galarian Stunfisk',
            formClass: 'regional-variant',
            formToken: 'galarian',
            baseSpecies: 'stunfisk',
            baseGameGeneration: 5,
            number: 618,
            types: ['ground', 'steel'],
            baseStats: {hp: 109, phAttack: 66, phDefense: 84, spAttack: 81, spDefense: 99, speed: 32},
            abilities: {0: 'mimicry'},
            height: 0.7,
            weight: 20.5,
            colors: ['gray', 'black', 'green', 'red', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'amorphous'],
            altBaseEvolutions: [{
                species: 'galarian-stunfisk',
                method: 'type-value',
                value: 'steel',
                method2: 'type-value',
                value2: 'ground'
                },{
                species: 'stunfisk',
                method: 'type-warning',
                value: 'steel',
                method2: 'type-value',
                value2: 'electric',
                method3: 'type-value',
                value3: 'ground'
                }]
            },

    });
    thisIndex.indexOrder = indexOrder;

    // Add the generation's list of base species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Base Pokedex

        'grookey': {
            order: indexOrder++,
            token: 'grookey',
            name: 'Grookey',
            isStarterPokemon: true,
            number: 810,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 50, phAttack: 65, phDefense: 50, spAttack: 40, spDefense: 40, speed: 65},
            abilities: {0: 'overgrow', hidden: 'grassy-surge'},
            height: 0.3,
            weight: 5.0,
            colors: ['green', 'yellow', 'brown', 'orange'],
            eggCycles: 20,
            eggGroups: ['field', 'grass'],
            nextEvolutions: [{
                species: 'thwackey',
                method: 'level-up',
                value: 16
                }]
            },
        'thwackey': {
            order: indexOrder++,
            token: 'thwackey',
            name: 'Thwackey',
            isStarterPokemon: true,
            number: 811,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 70, phAttack: 85, phDefense: 70, spAttack: 55, spDefense: 60, speed: 80},
            abilities: {0: 'overgrow', hidden: 'grassy-surge'},
            height: 0.7,
            weight: 14.0,
            colors: ['green', 'brown', 'orange', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field', 'grass'],
            prevEvolution: 'grookey',
            nextEvolutions: [{
                species: 'rillaboom',
                method: 'level-up',
                value: 35
                }]
            },
        'rillaboom': {
            order: indexOrder++,
            token: 'rillaboom',
            name: 'Rillaboom',
            isStarterPokemon: true,
            number: 812,
            types: ['grass'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 100, phAttack: 125, phDefense: 90, spAttack: 60, spDefense: 70, speed: 85},
            abilities: {0: 'overgrow', hidden: 'grassy-surge'},
            height: 2.1,
            weight: 90.0,
            colors: ['brown', 'green', 'gray', 'orange'],
            eggCycles: 20,
            eggGroups: ['field', 'grass'],
            prevEvolution: 'thwackey'
            },

        'scorbunny': {
            order: indexOrder++,
            token: 'scorbunny',
            name: 'Scorbunny',
            isStarterPokemon: true,
            number: 813,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 50, phAttack: 65, phDefense: 50, spAttack: 40, spDefense: 40, speed: 65},
            abilities: {0: 'blaze', hidden: 'libero'},
            height: 0.3,
            weight: 4.5,
            colors: ['white', 'orange', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field', 'human-like'],
            nextEvolutions: [{
                species: 'raboot',
                method: 'level-up',
                value: 16
                }]
            },
        'raboot': {
            order: indexOrder++,
            token: 'raboot',
            name: 'Raboot',
            isStarterPokemon: true,
            number: 814,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 65, phAttack: 86, phDefense: 60, spAttack: 55, spDefense: 60, speed: 94},
            abilities: {0: 'blaze', hidden: 'libero'},
            height: 0.6,
            weight: 9.0,
            colors: ['gray', 'black', 'red', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field', 'human-like'],
            prevEvolution: 'scorbunny',
            nextEvolutions: [{
                species: 'cinderace',
                method: 'level-up',
                value: 35
                }]
            },
        'cinderace': {
            order: indexOrder++,
            token: 'cinderace',
            name: 'Cinderace',
            isStarterPokemon: true,
            number: 815,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 80, phAttack: 116, phDefense: 75, spAttack: 65, spDefense: 75, speed: 119},
            abilities: {0: 'blaze', hidden: 'libero'},
            height: 1.4,
            weight: 33.0,
            colors: ['white', 'red', 'yellow', 'black'],
            eggCycles: 20,
            eggGroups: ['field', 'human-like'],
            prevEvolution: 'raboot'
            },

        'sobble': {
            order: indexOrder++,
            token: 'sobble',
            name: 'Sobble',
            isStarterPokemon: true,
            number: 816,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 50, phAttack: 40, phDefense: 40, spAttack: 70, spDefense: 40, speed: 70},
            abilities: {0: 'torrent', hidden: 'sniper'},
            height: 0.3,
            weight: 4.0,
            colors: ['blue', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            nextEvolutions: [{
                species: 'drizzile',
                method: 'level-up',
                value: 16
                }]
            },
        'drizzile': {
            order: indexOrder++,
            token: 'drizzile',
            name: 'Drizzile',
            isStarterPokemon: true,
            number: 817,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 65, phAttack: 60, phDefense: 55, spAttack: 95, spDefense: 55, speed: 90},
            abilities: {0: 'torrent', hidden: 'sniper'},
            height: 0.7,
            weight: 11.5,
            colors: ['blue', 'green', 'purple', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'sobble',
            nextEvolutions: [{
                species: 'inteleon',
                method: 'level-up',
                value: 35
                }]
            },
        'inteleon': {
            order: indexOrder++,
            token: 'inteleon',
            name: 'Inteleon',
            isStarterPokemon: true,
            number: 818,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 70, phAttack: 85, phDefense: 65, spAttack: 125, spDefense: 65, speed: 120},
            abilities: {0: 'torrent', hidden: 'sniper'},
            height: 1.9,
            weight: 45.2,
            colors: ['blue', 'black', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'drizzile'
            },

        'perrserker': {
            order: thisIndex.afterOrder('persian', 6),
            token: 'perrserker',
            name: 'Perrserker',
            number: 863,
            baseGameGeneration: 1,
            types: ['steel'],
            baseStats: {hp: 70, phAttack: 110, phDefense: 100, spAttack: 50, spDefense: 60, speed: 50},
            abilities: {0: 'battle-armor', 1: 'tough-claws', hidden: 'steely-spirit'},
            height: 0.8,
            weight: 28.0,
            colors: ['gray', 'brown', 'black', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'galarian-meowth'
            },

        'sirfetchd': {
            order: thisIndex.afterOrder('farfetchd', 2),
            token: 'sirfetchd',
            name: 'Sirfetch\'d',
            number: 865,
            baseGameGeneration: 1,
            types: ['fighting'],
            baseStats: {hp: 62, phAttack: 135, phDefense: 95, spAttack: 68, spDefense: 82, speed: 65},
            abilities: {0: 'steadfast', hidden: 'scrappy'},
            height: 0.8,
            weight: 117.0,
            colors: ['white', 'green', 'yellow', 'black'],
            eggCycles: 20,
            eggGroups: ['flying', 'field'],
            prevEvolution: 'galarian-farfetchd'
            },

        'mr-rime': {
            order: thisIndex.afterOrder('mr-mime', 2),
            token: 'mr-rime',
            name: 'Mr. Rime',
            number: 866,
            displayNumber: 122.2,
            dexNumber: 122.2,
            baseGameGeneration: 1,
            types: ['ice', 'psychic'],
            baseStats: {hp: 62, phAttack: 135, phDefense: 95, spAttack: 68, spDefense: 82, speed: 65},
            abilities: {0: 'tangled-feet', 1: 'screen-cleaner', hidden: 'ice-body'},
            height: 1.5,
            weight: 58.2,
            colors: ['black', 'blue', 'white', 'red', 'yellow'],
            eggCycles: 25,
            eggGroups: ['human-like'],
            prevEvolution: 'galarian-mr-mime'
            },

        'cursola': {
            order: thisIndex.afterOrder('corsola', 2),
            token: 'cursola',
            name: 'Cursola',
            number: 864,
            baseGameGeneration: 2,
            types: ['ghost'],
            baseStats: {hp: 60, phAttack: 95, phDefense: 50, spAttack: 145, spDefense: 130, speed: 30},
            abilities: {0: 'weak-armor', hidden: 'perish-body'},
            height: 1.0,
            weight: 0.4,
            colors: ['white', 'gray', 'pink'],
            eggCycles: 20,
            eggGroups: ['water-1', 'water-3'],
            prevEvolution: 'galarian-corsola'
            },

        'obstagoon': {
            order: thisIndex.afterOrder('linoone', 3),
            token: 'obstagoon',
            name: 'Obstagoon',
            baseGameGeneration: 3,
            number: 862,
            types: ['dark', 'normal'],
            baseStats: {hp: 93, phAttack: 90, phDefense: 101, spAttack: 60, spDefense: 81, speed: 95},
            abilities: {0: 'reckless', 1: 'guts', hidden: 'defiant'},
            height: 1.6,
            weight: 46.0,
            colors: ['black', 'gray', 'white', 'red'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'galarian-linoone'
            },

        'runerigus': {
            order: thisIndex.afterOrder('cofagrigus', 2),
            token: 'runerigus',
            name: 'Runerigus',
            baseGameGeneration: 5,
            number: 867,
            types: ['ground', 'ghost'],
            baseStats: {hp: 58, phAttack: 95, phDefense: 145, spAttack: 50, spDefense: 105, speed: 30},
            abilities: {0: 'wandering-spirit'},
            height: 1.6,
            weight: 66.6,
            colors: ['white', 'black', 'red', 'purple'],
            eggCycles: 25,
            eggGroups: ['mineral', 'amorphous'],
            prevEvolution: 'galarian-yamask'
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Add the generation's list of burst/mega/gmax evolutions to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Gigantamax Forms

        'gmax-charizard': {
            order: thisIndex.afterOrder('mega-charizard-x'),
            token: 'gmax-charizard',
            name: 'Gigantamax Charizard',
            class: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'charizard',
            isStarterPokemon: true,
            number: 6,
            types: ['fire', 'flying'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 780, phAttack: 84, phDefense: 78, spAttack: 109, spDefense: 85, speed: 100},
            abilities: {0: 'blaze', hidden: 'solar-power'},
            height: 28.0,
            weight: -1,
            colors: ['orange', 'yellow', 'red', 'white'],
            eggCycles: 20,
            eggGroups: ['monster', 'dragon'],
            prevEvolution: 'charizard',
            hasBigSprite: true
            },
        'gmax-butterfree': {
            order: thisIndex.afterOrder('butterfree'),
            token: 'gmax-butterfree',
            name: 'Gigantamax Butterfree',
            class: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'butterfree',
            number: 12,
            types: ['bug', 'flying'],
            baseStats: {hp: 600, phAttack: 45, phDefense: 50, spAttack: 90, spDefense: 80, speed: 70},
            abilities: {0: 'compound-eyes', hidden: 'tinted-lens'},
            height: 17.0,
            weight: -1,
            colors: ['green', 'purple', 'white', 'red', 'blue', 'black'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'butterfree',
            hasBigSprite: true
            },
        'gmax-pikachu': {
            order: thisIndex.afterOrder('pikachu'),
            token: 'gmax-pikachu',
            name: 'Gigantamax Pikachu',
            class: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'pikachu',
            number: 25,
            types: ['electric'],
            baseStats: {hp: 350, phAttack: 55, phDefense: 40, spAttack: 50, spDefense: 50, speed: 90},
            abilities: {0: 'static', hidden: 'lightning-rod'},
            height: 21.0,
            weight: -1,
            colors: ['white', 'yellow', 'black', 'red', 'brown'],
            eggCycles: 10,
            eggGroups: ['field', 'fairy'],
            prevEvolution: 'pikachu',
            hasBigSprite: true
            },
        'gmax-meowth': {
            order: thisIndex.afterOrder('meowth'),
            token: 'gmax-meowth',
            name: 'Gigantamax Meowth',
            class: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'meowth',
            number: 52,
            types: ['normal'],
            baseStats: {hp: 400, phAttack: 45, phDefense: 35, spAttack: 40, spDefense: 40, speed: 90},
            abilities: {0: 'pickup', 1: 'technician', hidden: 'unnerve'},
            height: 33.0,
            weight: -1,
            colors: ['white', 'yellow', 'black', 'brown'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'meowth',
            hasBigSprite: true
            },
        'gmax-machamp': {
            order: thisIndex.afterOrder('machamp', 2),
            token: 'gmax-machamp',
            name: 'Gigantamax Machamp',
            class: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'machamp',
            number: 68,
            types: ['fighting'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 900, phAttack: 130, phDefense: 80, spAttack: 65, spDefense: 85, speed: 55},
            abilities: {0: 'guts', 1: 'no-guard', hidden: 'steadfast'},
            height: 1.6,
            weight: 130,
            colors: ['gray', 'yellow', 'red', 'white'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'machamp',
            hasBigSprite: true
            },
        'gmax-gengar': {
            order: thisIndex.afterOrder('gengar', 2),
            token: 'gmax-gengar',
            name: 'Gigantamax Gengar',
            class: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'gengar',
            number: 94,
            types: ['ghost', 'poison'],
            baseStats: {hp: 600, phAttack: 65, phDefense: 60, spAttack: 130, spDefense: 75, speed: 110},
            abilities: {0: 'cursed-body'},
            height: 20.0,
            weight: -1,
            colors: ['purple', 'red', 'pink', 'white'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'gengar',
            hasBigSprite: true
            },
        'gmax-kingler': {
            order: thisIndex.afterOrder('kingler'),
            token: 'gmax-kingler',
            name: 'Gigantamax Kingler',
            class: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'kingler',
            number: 99,
            types: ['water'],
            baseStats: {hp: 550, phAttack: 130, phDefense: 115, spAttack: 50, spDefense: 50, speed: 75},
            abilities: {0: 'hyper-cutter', 1: 'shell-armor', hidden: 'sheer-force'},
            height: 19.0,
            weight: -1,
            colors: ['red', 'white'],
            eggCycles: 20,
            eggGroups: ['water-3'],
            prevEvolution: 'kingler',
            hasBigSprite: true
            },
        'gmax-lapras': {
            order: thisIndex.afterOrder('lapras'),
            token: 'gmax-lapras',
            name: 'Gigantamax Lapras',
            class: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'lapras',
            number: 131,
            types: ['water', 'ice'],
            baseStats: {hp: 1300, phAttack: 85, phDefense: 80, spAttack: 85, spDefense: 95, speed: 60},
            abilities: {0: 'water-absorb', 1: 'shell-armor', hidden: 'hydration'},
            height: 24.0,
            weight: -1,
            colors: ['blue', 'white'],
            eggCycles: 40,
            eggGroups: ['monster', 'water-1'],
            prevEvolution: 'lapras',
            hasBigSprite: true
            },
        'gmax-eevee': {
            order: thisIndex.afterOrder('eevee', 1),
            token: 'gmax-eevee',
            name: 'Gigantamax Eevee',
            class: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'eevee',
            number: 133,
            types: ['normal'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 550, phAttack: 55, phDefense: 50, spAttack: 45, spDefense: 65, speed: 55},
            abilities: {0: 'run-away', 1: 'adaptability', hidden: 'anticipation'},
            height: 0.3,
            weight: 6.5,
            colors: ['brown', 'white'],
            eggCycles: 35,
            eggGroups: ['field'],
            prevEvolution: 'eevee',
            hasBigSprite: true
            },
        'gmax-snorlax': {
            order: thisIndex.afterOrder('snorlax'),
            token: 'gmax-snorlax',
            name: 'Gigantamax Snorlax',
            class: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'snorlax',
            number: 143,
            types: ['normal'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 1600, phAttack: 110, phDefense: 65, spAttack: 65, spDefense: 110, speed: 30},
            abilities: {0: 'immunity', 1: 'thick-fat', hidden: 'gluttony'},
            height: 35.0,
            weight: -1,
            colors: ['green', 'brown', 'black', 'yellow'],
            eggCycles: 40,
            eggGroups: ['monster'],
            prevEvolution: 'snorlax',
            hasBigSprite: true
            },
        'gmax-garbodor': {
            order: thisIndex.afterOrder('garbodor'),
            token: 'gmax-garbodor',
            name: 'Gigantamax Garbodor',
            class: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'garbodor',
            number: 569,
            types: ['poison'],
            baseStats: {hp: 800, phAttack: 95, phDefense: 82, spAttack: 60, spDefense: 82, speed: 75},
            abilities: {0: 'stench', 1: 'weak-armor', hidden: 'aftermath'},
            height: 21.0,
            weight: -1,
            colors: ['green', 'brown', 'white', 'pink'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'garbodor',
            hasBigSprite: true
            },
        'gmax-melmetal': {
            order: thisIndex.afterOrder('melmetal'),
            token: 'gmax-melmetal',
            name: 'Gigantamax Melmetal',
            class: 'mythical',
            class2: 'gigantamax',
            formClass: 'burst-evolution',
            formClass2: 'gigantamax-form',
            formToken: 'gmax',
            baseSpecies: 'melmetal',
            number: 809,
            types: ['steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 1200, phAttack: 120, phDefense: 120, spAttack: 120, spDefense: 120, speed: 120},
            abilities: {0: 'static'},
            height: 25.0,
            weight: -1,
            colors: ['gray', 'yellow', 'black', 'red'],
            eggCycles: 60,
            eggGroups: ['undiscovered'],
            prevEvolution: 'melmetal',
            hasBigSprite: true
            },

    });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([

        // Regional Evolutions

        {base: 'koffing', species: 'weezing', method: 'level-up', value: 35, method2: 'type-value', value2: 'poison', replace: true}, // level-up
        {base: 'koffing', species: 'galarian-weezing', method: 'level-up', value: 35, method2: 'type-value', value2: 'fairy'}, // level-up + galar-region

        {base: 'mime-jr', species: 'mr-mime', method: 'affection', value: 'high', method2: 'level-up', value2: 25, method3: 'type-value', value3: 'fairy', replace: true}, // affection + level-up
        {base: 'mime-jr', species: 'galarian-mr-mime', method: 'affection', value: 'high', method2: 'level-up', value2: 25, method3: 'type-value', value3: 'ice'}, // affection + level-up + galar-region

        // Gigantamax Forms

        {base: 'charizard', species: 'gmax-charizard', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'butterfree', species: 'gmax-butterfree', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'pikachu', species: 'gmax-pikachu', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'meowth', species: 'gmax-meowth', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'machamp', species: 'gmax-machamp', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'gengar', species: 'gmax-gengar', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'kingler', species: 'gmax-kingler', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'lapras', species: 'gmax-lapras', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'eevee', species: 'gmax-eevee', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'snorlax', species: 'gmax-snorlax', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'garbodor', species: 'gmax-garbodor', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'melmetal', species: 'gmax-melmetal', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},

        ]);

    // Update previous gen pokemon with alt base evolution data
    thisIndex.addAltBaseEvolutions([

        // Regional Forms

        {base: 'meowth', clear: true}, // replace-all
            {base: 'meowth', species: 'meowth', method: 'type-value', value: 'normal'},
            {base: 'alolan-meowth', species: 'alolan-meowth', method: 'type-value', value: 'dark'},
            {base: 'galarian-meowth', species: 'galarian-meowth', method: 'type-value', value: 'steel'},
            {base: 'alolan-meowth', species: 'meowth', method: 'type-warning', value: 'dark', method2: 'type-value', value2: 'normal'},
            {base: 'galarian-meowth', species: 'meowth', method: 'type-warning', value: 'steel', method2: 'type-value', value2: 'normal'},
            {base: 'meowth', species: 'alolan-meowth', method: 'type-warning', value: 'normal', method2: 'type-value', value2: 'dark'},
            {base: 'galarian-meowth', species: 'alolan-meowth', method: 'type-warning', value: 'steel', method2: 'type-value', value2: 'dark'},
            {base: 'meowth', species: 'galarian-meowth', method: 'type-warning', value: 'normal', method2: 'type-value', value2: 'steel'},
            {base: 'alolan-meowth', species: 'galarian-meowth', method: 'type-warning', value: 'dark', method2: 'type-value', value2: 'steel'},

        {base: 'ponyta', species: 'galarian-ponyta', method: 'type-warning', value: 'fire', method2: 'type-appeal', value2: 'psychic'},
        {base: 'ponyta', species: 'galarian-ponyta', method: 'type-warning', value: 'fire', method2: 'type-surge', value2: 'poison'},

        {base: 'farfetchd', species: 'galarian-farfetchd', method: 'type-warning', value: 'normal', method2: 'type-appeal', value2: 'fighting'},
        {base: 'farfetchd', species: 'galarian-farfetchd', method: 'type-warning', value: 'normal', method2: 'type-surge', value2: 'grass'},

        {base: 'corsola', species: 'galarian-corsola', method: 'type-warning', value: 'water', method2: 'type-value', value2: 'ghost'},
        {base: 'corsola', species: 'galarian-corsola', method: 'type-surge', value: 'fire', method2: 'type-vs-type', value2: ['fire', 'water']},

        {base: 'zigzagoon', species: 'galarian-zigzagoon', method: 'type-warning', value: 'normal', method2: 'type-appeal', value2: 'dark'},
        {base: 'zigzagoon', species: 'galarian-zigzagoon', method: 'type-surge', value: 'dark'},

        {base: 'darumaka', species: 'galarian-darumaka', method: 'type-warning', value: 'fire', method2: 'type-value', value2: 'ice'},
        {base: 'darumaka', species: 'galarian-darumaka', method: 'type-surge', value: 'water', method2: 'type-vs-type', value2: ['water', 'fire']},

        {base: 'yamask', species: 'galarian-yamask', method: 'type-surge', value: 'ground'},

        {base: 'stunfisk', species: 'stunfisk', method: 'type-value', value: 'electric', method2: 'type-value', value2: 'ground'},
        {base: 'stunfisk', species: 'galarian-stunfisk', method: 'type-warning', value: 'electric', method2: 'type-value', value2: 'steel', method3: 'type-value', value3: 'ground'},


        ]);

})();
