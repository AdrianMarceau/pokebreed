/*
    * GLOBAL POKEMON INDEX DATA (ALOLA / GEN 7)
    * This data was collected from Zarel for Pokemon Showdown
    * via: https://github.com/Zarel/Pokemon-Showdown/blob/master/data/pokedex.js
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration(7);
    thisIndex.setRegion('alola');

    // Add the generation's list of base species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Base Pokedex

        'rowlet': {
            order: indexOrder++,
            token: 'rowlet',
            name: 'Rowlet',
            number: 722,
            types: ['grass', 'flying'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 68, phAttack: 55, phDefense: 55, spAttack: 50, spDefense: 50, speed: 42},
            abilities: {0: 'overgrow', hidden: 'long-reach'},
            height: 0.3,
            weight: 1.5,
            colors: ['brown', 'white', 'green', 'orange'],
            eggCycles: 15,
            eggGroups: ['flying'],
            nextEvolutions: [{
                species: 'dartrix',
                method: 'level-up',
                value: 17
                }]
            },
        'dartrix': {
            order: indexOrder++,
            token: 'dartrix',
            name: 'Dartrix',
            number: 723,
            types: ['grass', 'flying'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 78, phAttack: 75, phDefense: 75, spAttack: 70, spDefense: 70, speed: 52},
            abilities: {0: 'overgrow', hidden: 'long-reach'},
            height: 0.7,
            weight: 16,
            colors: ['green', 'brown', 'white', 'orange'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'rowlet',
            nextEvolutions: [{
                species: 'decidueye',
                method: 'level-up',
                value: 34
                }]
            },
        'decidueye': {
            order: indexOrder++,
            token: 'decidueye',
            name: 'Decidueye',
            number: 724,
            types: ['grass', 'ghost'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 78, phAttack: 107, phDefense: 75, spAttack: 100, spDefense: 100, speed: 70},
            abilities: {0: 'overgrow', hidden: 'long-reach'},
            height: 1.6,
            weight: 36.6,
            colors: ['green', 'brown', 'orange', 'white'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'dartrix'
            },


        'litten': {
            order: indexOrder++,
            token: 'litten',
            name: 'Litten',
            number: 725,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 45, phAttack: 65, phDefense: 40, spAttack: 60, spDefense: 40, speed: 70},
            abilities: {0: 'blaze', hidden: 'intimidate'},
            height: 0.4,
            weight: 4.3,
            colors: ['black', 'red', 'yellow'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'torracat',
                method: 'level-up',
                value: 17
                }]
            },
        'torracat': {
            order: indexOrder++,
            token: 'torracat',
            name: 'Torracat',
            number: 726,
            types: ['fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 65, phAttack: 85, phDefense: 50, spAttack: 80, spDefense: 50, speed: 90},
            abilities: {0: 'blaze', hidden: 'intimidate'},
            height: 0.7,
            weight: 25,
            colors: ['red', 'black', 'yellow'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'litten',
            nextEvolutions: [{
                species: 'incineroar',
                method: 'level-up',
                value: 34
                }]
            },
        'incineroar': {
            order: indexOrder++,
            token: 'incineroar',
            name: 'Incineroar',
            number: 727,
            types: ['fire', 'dark'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 95, phAttack: 115, phDefense: 90, spAttack: 80, spDefense: 90, speed: 60},
            abilities: {0: 'blaze', hidden: 'intimidate'},
            height: 1.8,
            weight: 83,
            colors: ['red', 'black', 'gray', 'yellow'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'torracat'
            },

        'popplio': {
            order: indexOrder++,
            token: 'popplio',
            name: 'Popplio',
            number: 728,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 50, phAttack: 54, phDefense: 54, spAttack: 66, spDefense: 56, speed: 40},
            abilities: {0: 'torrent', hidden: 'liquid-voice'},
            height: 0.4,
            weight: 7.5,
            colors: ['blue', 'white', 'pink'],
            eggCycles: 15,
            eggGroups: ['water-1', 'field'],
            nextEvolutions: [{
                species: 'brionne',
                method: 'level-up',
                value: 17
                }]
            },
        'brionne': {
            order: indexOrder++,
            token: 'brionne',
            name: 'Brionne',
            number: 729,
            types: ['water'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 60, phAttack: 69, phDefense: 69, spAttack: 91, spDefense: 81, speed: 50},
            abilities: {0: 'torrent', hidden: 'liquid-voice'},
            height: 0.6,
            weight: 17.5,
            colors: ['blue', 'white', 'pink'],
            eggCycles: 15,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'popplio',
            nextEvolutions: [{
                species: 'primarina',
                method: 'level-up',
                value: 34
                }]
            },
        'primarina': {
            order: indexOrder++,
            token: 'primarina',
            name: 'Primarina',
            number: 730,
            types: ['water', 'fairy'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 80, phAttack: 74, phDefense: 74, spAttack: 126, spDefense: 116, speed: 60},
            abilities: {0: 'torrent', hidden: 'liquid-voice'},
            height: 1.8,
            weight: 44,
            colors: ['white', 'blue', 'pink'],
            eggCycles: 15,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'brionne'
            },

        'pikipek': {
            order: indexOrder++,
            token: 'pikipek',
            name: 'Pikipek',
            number: 731,
            types: ['normal', 'flying'],
            baseStats: {hp: 35, phAttack: 75, phDefense: 30, spAttack: 30, spDefense: 30, speed: 65},
            abilities: {0: 'keen-eye', 1: 'skill-link', hidden: 'pickup'},
            height: 0.3,
            weight: 1.2,
            colors: ['black', 'white', 'red', 'gray', 'blue'],
            eggCycles: 15,
            eggGroups: ['flying'],
            nextEvolutions: [{
                species: 'trumbeak',
                method: 'level-up',
                value: 14
                }]
            },
        'trumbeak': {
            order: indexOrder++,
            token: 'trumbeak',
            name: 'Trumbeak',
            number: 732,
            types: ['normal', 'flying'],
            baseStats: {hp: 55, phAttack: 85, phDefense: 50, spAttack: 40, spDefense: 50, speed: 75},
            abilities: {0: 'keen-eye', 1: 'skill-link', hidden: 'pickup'},
            height: 0.6,
            weight: 14.8,
            colors: ['black', 'white', 'red', 'orange', 'blue'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'pikipek',
            nextEvolutions: [{
                species: 'toucannon',
                method: 'level-up',
                value: 28
                }]
            },
        'toucannon': {
            order: indexOrder++,
            token: 'toucannon',
            name: 'Toucannon',
            number: 733,
            types: ['normal', 'flying'],
            baseStats: {hp: 80, phAttack: 120, phDefense: 75, spAttack: 75, spDefense: 75, speed: 60},
            abilities: {0: 'keen-eye', 1: 'skill-link', hidden: 'sheer-force'},
            height: 1.1,
            weight: 26,
            colors: ['black', 'white', 'red', 'orange', 'yellow', 'blue'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'trumbeak'
            },

        'yungoos': {
            order: indexOrder++,
            token: 'yungoos',
            name: 'Yungoos',
            number: 734,
            types: ['normal'],
            baseStats: {hp: 48, phAttack: 70, phDefense: 30, spAttack: 30, spDefense: 30, speed: 45},
            abilities: {0: 'stakeout', 1: 'strong-jaw', hidden: 'adaptability'},
            height: 0.4,
            weight: 6,
            colors: ['brown', 'yellow'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'gumshoos',
                method: 'level-up',
                value: 20
                }]
            },
        'gumshoos': {
            order: indexOrder++,
            token: 'gumshoos',
            name: 'Gumshoos',
            number: 735,
            types: ['normal'],
            baseStats: {hp: 88, phAttack: 110, phDefense: 60, spAttack: 55, spDefense: 60, speed: 45},
            abilities: {0: 'stakeout', 1: 'strong-jaw', hidden: 'adaptability'},
            height: 0.7,
            weight: 14.2,
            colors: ['yellow', 'brown'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'yungoos'
            },

        'grubbin': {
            order: indexOrder++,
            token: 'grubbin',
            name: 'Grubbin',
            number: 736,
            types: ['bug'],
            baseStats: {hp: 47, phAttack: 62, phDefense: 45, spAttack: 55, spDefense: 45, speed: 46},
            abilities: {0: 'swarm'},
            height: 0.4,
            weight: 4.4,
            colors: ['white', 'yellow', 'orange', 'brown'],
            eggCycles: 15,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'charjabug',
                method: 'level-up',
                value: 20
                }]
            },
        'charjabug': {
            order: indexOrder++,
            token: 'charjabug',
            name: 'Charjabug',
            number: 737,
            types: ['bug', 'electric'],
            baseStats: {hp: 57, phAttack: 82, phDefense: 95, spAttack: 55, spDefense: 75, speed: 36},
            abilities: {0: 'battery'},
            height: 0.5,
            weight: 10.5,
            colors: ['green', 'gray', 'blue', 'yellow'],
            prevo: 'grubbin',
            evos: ['vikavolt'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'grubbin',
            nextEvolutions: [{
                species: 'vikavolt', // magnetic-laugh
                method: 'type-surge',
                value: 'electric',
                method2: 'level-up',
                value2: 40
                }]
            },
        'vikavolt': {
            order: indexOrder++,
            token: 'vikavolt',
            name: 'Vikavolt',
            number: 738,
            types: ['bug', 'electric'],
            baseStats: {hp: 77, phAttack: 70, phDefense: 90, spAttack: 145, spDefense: 75, speed: 43},
            abilities: {0: 'levitate'},
            height: 1.5,
            weight: 45,
            colors: ['blue', 'yellow', 'black'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'charjabug'
            },

        'crabrawler': {
            order: indexOrder++,
            token: 'crabrawler',
            name: 'Crabrawler',
            number: 739,
            types: ['fighting'],
            baseStats: {hp: 47, phAttack: 82, phDefense: 57, spAttack: 42, spDefense: 47, speed: 63},
            abilities: {0: 'hyper-cutter', 1: 'iron-fist', hidden: 'anger-point'},
            height: 0.6,
            weight: 7,
            colors: ['purple', 'blue', 'yellow'],
            eggCycles: 20,
            eggGroups: ['water-3'],
            nextEvolutions: [{
                species: 'crabominable', // icy-rock
                method: 'type-appeal',
                value: 'ice',
                method2: 'level-up',
                value2: 30
                }]
            },
        'crabominable': {
            order: indexOrder++,
            token: 'crabominable',
            name: 'Crabominable',
            number: 740,
            types: ['fighting', 'ice'],
            baseStats: {hp: 97, phAttack: 132, phDefense: 77, spAttack: 62, spDefense: 67, speed: 43},
            abilities: {0: 'hyper-cutter', 1: 'iron-fist', hidden: 'anger-point'},
            height: 1.7,
            weight: 180,
            colors: ['white', 'purple', 'blue', 'yellow'],
            evoLevel: 2,
            eggCycles: 20,
            eggGroups: ['water-3'],
            prevEvolution: 'crabrawler'
            },

        'cutiefly': {
            order: indexOrder++,
            token: 'cutiefly',
            name: 'Cutiefly',
            number: 742,
            types: ['bug', 'fairy'],
            baseStats: {hp: 40, phAttack: 45, phDefense: 40, spAttack: 55, spDefense: 40, speed: 84},
            abilities: {0: 'honey-gather', 1: 'shield-dust', hidden: 'sweet-veil'},
            height: 0.1,
            weight: 0.2,
            colors: ['yellow', 'white', 'black', 'brown'],
            eggCycles: 20,
            eggGroups: ['bug', 'fairy'],
            nextEvolutions: [{
                species: 'ribombee',
                method: 'level-up',
                value: 25
                }]
            },
        'ribombee': {
            order: indexOrder++,
            token: 'ribombee',
            name: 'Ribombee',
            number: 743,
            types: ['bug', 'fairy'],
            baseStats: {hp: 60, phAttack: 55, phDefense: 60, spAttack: 95, spDefense: 70, speed: 124},
            abilities: {0: 'honey-gather', 1: 'shield-dust', hidden: 'sweet-veil'},
            height: 0.2,
            weight: 0.5,
            colors: ['yellow', 'white', 'brown', 'black'],
            eggCycles: 20,
            eggGroups: ['bug', 'fairy'],
            prevEvolution: 'cutiefly'
            },

        'mareanie': {
            order: indexOrder++,
            token: 'mareanie',
            name: 'Mareanie',
            number: 747,
            types: ['poison', 'water'],
            baseStats: {hp: 50, phAttack: 53, phDefense: 62, spAttack: 43, spDefense: 52, speed: 45},
            abilities: {0: 'merciless', 1: 'limber', hidden: 'regenerator'},
            height: 0.4,
            weight: 8,
            colors: ['blue', 'purple', 'yellow'],
            eggCycles: 20,
            eggGroups: ['water-1'],
            nextEvolutions: [{
                species: 'toxapex',
                method: 'level-up',
                value: 38
                }]
            },
        'toxapex': {
            order: indexOrder++,
            token: 'toxapex',
            name: 'Toxapex',
            number: 748,
            types: ['poison', 'water'],
            baseStats: {hp: 50, phAttack: 63, phDefense: 152, spAttack: 53, spDefense: 142, speed: 35},
            abilities: {0: 'merciless', 1: 'limber', hidden: 'regenerator'},
            height: 0.7,
            weight: 14.5,
            colors: ['blue', 'purple', 'pink', 'yellow'],
            eggCycles: 20,
            eggGroups: ['water-1'],
            prevEvolution: 'mareanie'
            },

        'dewpider': {
            order: indexOrder++,
            token: 'dewpider',
            name: 'Dewpider',
            number: 751,
            types: ['water', 'bug'],
            baseStats: {hp: 38, phAttack: 40, phDefense: 52, spAttack: 40, spDefense: 72, speed: 27},
            abilities: {0: 'water-bubble', hidden: 'water-absorb'},
            height: 0.3,
            weight: 4,
            colors: ['green', 'blue', 'black'],
            eggCycles: 15,
            eggGroups: ['water-1', 'bug'],
            nextEvolutions: [{
                species: 'araquanid',
                method: 'level-up',
                value: 22
                }]
            },
        'araquanid': {
            order: indexOrder++,
            token: 'araquanid',
            name: 'Araquanid',
            number: 752,
            types: ['water', 'bug'],
            baseStats: {hp: 68, phAttack: 70, phDefense: 92, spAttack: 50, spDefense: 132, speed: 42},
            abilities: {0: 'water-bubble', hidden: 'water-absorb'},
            height: 1.8,
            weight: 82,
            colors: ['green', 'blue', 'black', 'brown'],
            eggCycles: 15,
            eggGroups: ['water-1', 'bug'],
            prevEvolution: 'dewpider'
            },

        'morelull': {
            order: indexOrder++,
            token: 'morelull',
            name: 'Morelull',
            number: 755,
            types: ['grass', 'fairy'],
            baseStats: {hp: 40, phAttack: 35, phDefense: 55, spAttack: 65, spDefense: 75, speed: 15},
            abilities: {0: 'illuminate', 1: 'effect-spore', hidden: 'rain-dish'},
            height: 0.2,
            weight: 1.5,
            colors: ['pink', 'purple', 'white'],
            eggCycles: 20,
            eggGroups: ['grass'],
            nextEvolutions: [{
                species: 'shiinotic',
                method: 'level-up',
                value: 24
                }]
            },
        'shiinotic': {
            order: indexOrder++,
            token: 'shiinotic',
            name: 'Shiinotic',
            number: 756,
            types: ['grass', 'fairy'],
            baseStats: {hp: 60, phAttack: 45, phDefense: 80, spAttack: 90, spDefense: 100, speed: 30},
            abilities: {0: 'illuminate', 1: 'effect-spore', hidden: 'rain-dish'},
            height: 1,
            weight: 11.5,
            colors: ['purple', 'pink', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'morelull'
            },

        'salandit': {
            order: indexOrder++,
            token: 'salandit',
            name: 'Salandit',
            number: 757,
            types: ['poison', 'fire'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 48, phAttack: 44, phDefense: 40, spAttack: 71, spDefense: 40, speed: 77},
            abilities: {0: 'corrosion', hidden: 'oblivious'},
            height: 0.6,
            weight: 4.8,
            colors: ['black', 'gray', 'red', 'purple'],
            eggCycles: 20,
            eggGroups: ['monster', 'dragon'],
            nextEvolutions: [{
                species: 'salazzle',
                method: 'level-up',
                value: 33,
                method2: 'gender',
                value2: 'female'
                }]
            },
        'salazzle': {
            order: indexOrder++,
            token: 'salazzle',
            name: 'Salazzle',
            number: 758,
            types: ['poison', 'fire'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 68, phAttack: 64, phDefense: 60, spAttack: 111, spDefense: 60, speed: 117},
            abilities: {0: 'corrosion', hidden: 'oblivious'},
            height: 1.2,
            weight: 22.2,
            colors: ['gray', 'purple', 'pink'],
            eggCycles: 20,
            eggPartner: 'salandit',
            eggGroups: ['monster', 'dragon'],
            prevEvolution: 'salandit'
            },

        'stufful': {
            order: indexOrder++,
            token: 'stufful',
            name: 'Stufful',
            number: 759,
            types: ['normal', 'fighting'],
            baseStats: {hp: 70, phAttack: 75, phDefense: 50, spAttack: 45, spDefense: 50, speed: 50},
            abilities: {0: 'fluffy', 1: 'klutz', hidden: 'cute-charm'},
            height: 0.5,
            weight: 6.8,
            colors: ['pink', 'brown', 'white'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'bewear',
                method: 'level-up',
                value: 27
                }]
            },
        'bewear': {
            order: indexOrder++,
            token: 'bewear',
            name: 'Bewear',
            number: 760,
            types: ['normal', 'fighting'],
            baseStats: {hp: 120, phAttack: 125, phDefense: 80, spAttack: 55, spDefense: 60, speed: 60},
            abilities: {0: 'fluffy', 1: 'klutz', hidden: 'unnerve'},
            height: 2.1,
            weight: 135,
            colors: ['pink', 'black', 'white'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'stufful'
            },

        'comfey': {
            order: indexOrder++,
            token: 'comfey',
            name: 'Comfey',
            number: 764,
            types: ['fairy'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 51, phAttack: 52, phDefense: 90, spAttack: 82, spDefense: 110, speed: 100},
            abilities: {0: 'flower-veil', 1: 'triage', hidden: 'natural-cure'},
            height: 0.1,
            weight: 0.3,
            colors: ['green', 'yellow', 'red', 'pink', 'orange', 'white'],
            eggCycles: 20,
            eggGroups: ['grass']
            },

        'sandygast': {
            order: indexOrder++,
            token: 'sandygast',
            name: 'Sandygast',
            number: 769,
            types: ['ghost', 'ground'],
            baseStats: {hp: 55, phAttack: 55, phDefense: 80, spAttack: 70, spDefense: 45, speed: 15},
            abilities: {0: 'water-compaction', hidden: 'sand-veil'},
            height: 0.5,
            weight: 70,
            colors: ['brown', 'red', 'white'],
            eggCycles: 15,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'palossand',
                method: 'level-up',
                value: 42
                }]
            },
        'palossand': {
            order: indexOrder++,
            token: 'palossand',
            name: 'Palossand',
            number: 770,
            types: ['ghost', 'ground'],
            baseStats: {hp: 85, phAttack: 75, phDefense: 110, spAttack: 100, spDefense: 75, speed: 35},
            abilities: {0: 'water-compaction', hidden: 'sand-veil'},
            height: 1.3,
            weight: 250,
            colors: ['brown', 'red', 'pink', 'blue'],
            eggCycles: 15,
            eggGroups: ['amorphous'],
            prevEvolution: 'sandygast'
            },

        'pyukumuku': {
            order: indexOrder++,
            token: 'pyukumuku',
            name: 'Pyukumuku',
            number: 771,
            types: ['water'],
            baseStats: {hp: 55, phAttack: 60, phDefense: 130, spAttack: 30, spDefense: 130, speed: 5},
            abilities: {0: 'innards-out', hidden: 'unaware'},
            height: 0.3,
            weight: 1.2,
            colors: ['black', 'pink', 'white'],
            eggCycles: 15,
            eggGroups: ['water-1']
            },

        'minior': {
            order: indexOrder++,
            token: 'minior',
            name: 'Minior',
            number: 774,
            types: ['rock', 'flying'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 60, phAttack: 60, phDefense: 100, spAttack: 60, spDefense: 100, speed: 60},
            abilities: {0: 'shields-down'},
            height: 0.3,
            weight: 0.3,
            colors: ['brown', 'black', 'gray'],
            eggCycles: 25,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'meteor-minior',
                method: 'burst-evolution',
                value: 'shields-down'
                }]
            },
        'meteor-minior': {
            order: indexOrder++,
            token: 'meteor-minior',
            name: 'Meteor Minior',
            number: 774,
            formClass: 'burst-evolution',
            formClass2: 'random-variant',
            possibleForms: ['orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
            randomizeForms: true,
            baseForm: 'orange',
            types: ['rock', 'flying'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 60, phAttack: 100, phDefense: 60, spAttack: 100, spDefense: 60, speed: 120},
            abilities: {0: 'shields-down'},
            height: 0.3,
            weight: 40,
            colors: ['white'],
            eggGroups: ['mineral'],
            prevEvolution: 'minior'
            },

        'komala': {
            order: indexOrder++,
            token: 'komala',
            name: 'Komala',
            number: 775,
            types: ['normal'],
            baseStats: {hp: 65, phAttack: 115, phDefense: 65, spAttack: 75, spDefense: 95, speed: 65},
            abilities: {0: 'comatose'},
            height: 0.4,
            weight: 19.9,
            colors: ['blue', 'gray', 'brown', 'black', 'white'],
            eggCycles: 20,
            eggGroups: ['field']
            },

        'turtonator': {
            order: indexOrder++,
            token: 'turtonator',
            name: 'Turtonator',
            number: 776,
            types: ['fire', 'dragon'],
            baseStats: {hp: 60, phAttack: 78, phDefense: 135, spAttack: 91, spDefense: 85, speed: 36},
            abilities: {0: 'shell-armor'},
            height: 2,
            weight: 212,
            colors: ['red', 'yellow', 'gray'],
            eggCycles: 20,
            eggGroups: ['monster', 'dragon']
            },

        'togedemaru': {
            order: indexOrder++,
            token: 'togedemaru',
            name: 'Togedemaru',
            number: 777,
            types: ['electric', 'steel'],
            baseStats: {hp: 65, phAttack: 98, phDefense: 63, spAttack: 40, spDefense: 73, speed: 96},
            abilities: {0: 'iron-barbs', 1: 'lightning-rod', hidden: 'sturdy'},
            height: 0.3,
            weight: 3.3,
            colors: ['gray', 'white', 'yellow'],
            eggCycles: 10,
            eggGroups: ['field', 'fairy']
            },

        'mimikyu': { // TODO: Add busted form as a non-burst end-of-life form change
            order: indexOrder++,
            token: 'mimikyu',
            name: 'Mimikyu',
            number: 778,
            types: ['ghost', 'fairy'],
            baseStats: {hp: 55, phAttack: 90, phDefense: 80, spAttack: 50, spDefense: 105, speed: 96},
            abilities: {0: 'disguise'},
            height: 0.2,
            weight: 0.7,
            colors: ['yellow', 'black', 'brown'],
            eggCycles: 20,
            eggGroups: ['amorphous']
            },

        'bruxish': {
            order: indexOrder++,
            token: 'bruxish',
            name: 'Bruxish',
            number: 779,
            types: ['water', 'psychic'],
            baseStats: {hp: 68, phAttack: 105, phDefense: 70, spAttack: 70, spDefense: 70, speed: 92},
            abilities: {0: 'dazzling', 1: 'strong-jaw', hidden: 'wonder-skin'},
            height: 0.9,
            weight: 19,
            colors: ['pink', 'yellow', 'purple', 'blue', 'white'],
            eggCycles: 15,
            eggGroups: ['water-2']
            },

        'drampa': {
            order: indexOrder++,
            token: 'drampa',
            name: 'Drampa',
            number: 780,
            types: ['normal', 'dragon'],
            baseStats: {hp: 78, phAttack: 60, phDefense: 85, spAttack: 135, spDefense: 91, speed: 36},
            abilities: {0: 'berserk', 1: 'sap-sipper', hidden: 'cloud-nine'},
            height: 3,
            weight: 185,
            colors: ['white', 'green', 'yellow', 'pink'],
            eggCycles: 20,
            eggGroups: ['monster', 'dragon']
            },

        'jangmo-o': {
            order: indexOrder++,
            token: 'jangmo-o',
            name: 'Jangmo-o',
            number: 782,
            types: ['dragon'],
            baseStats: {hp: 45, phAttack: 55, phDefense: 65, spAttack: 45, spDefense: 45, speed: 45},
            abilities: {0: 'bulletproof', 1: 'soundproof', hidden: 'overcoat'},
            height: 0.6,
            weight: 29.7,
            colors: ['gray', 'yellow', 'black'],
            eggCycles: 40,
            eggGroups: ['dragon'],
            nextEvolutions: [{
                species: 'hakamo-o',
                method: 'level-up',
                value: 35
                }]
            },
        'hakamo-o': {
            order: indexOrder++,
            token: 'hakamo-o',
            name: 'Hakamo-o',
            number: 783,
            types: ['dragon', 'fighting'],
            baseStats: {hp: 55, phAttack: 75, phDefense: 90, spAttack: 65, spDefense: 70, speed: 65},
            abilities: {0: 'bulletproof', 1: 'soundproof', hidden: 'overcoat'},
            height: 1.2,
            weight: 47,
            colors: ['gray', 'yellow', 'black', 'red'],
            eggCycles: 40,
            eggGroups: ['dragon'],
            prevEvolution: 'jangmo-o',
            nextEvolutions: [{
                species: 'kommo-o',
                method: 'level-up',
                value: 45
                }]
            },
        'kommo-o': {
            order: indexOrder++,
            token: 'kommo-o',
            name: 'Kommo-o',
            number: 784,
            types: ['dragon', 'fighting'],
            baseStats: {hp: 75, phAttack: 110, phDefense: 125, spAttack: 100, spDefense: 105, speed: 85},
            abilities: {0: 'bulletproof', 1: 'soundproof', hidden: 'overcoat'},
            height: 1.6,
            weight: 78.2,
            colors: ['gray', 'yellow', 'red', 'white', 'black'],
            eggCycles: 40,
            eggGroups: ['dragon'],
            prevEvolution: 'hakamo-o',
            },

        'zeraora': {
            order: indexOrder++,
            token: 'zeraora',
            name: 'Zeraora',
            class: 'mythical',
            number: 807,
            types: ['electric'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 88, phAttack: 112, phDefense: 75, spAttack: 102, spDefense: 80, speed: 143},
            abilities: {0: 'volt-absorb'},
            height: 1.5,
            weight: 44.5,
            colors: ['yellow', 'black', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },

        // Alolan Variants

        'alolan-rattata': {
            order: thisIndex.afterOrder('raticate', 1),
            token: 'alolan-rattata',
            name: 'Alolan Rattata',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'rattata',
            number: 19,
            forme: 'Alola',
            formeLetter: 'A',
            types: ['dark', 'normal'],
            baseStats: {hp: 30, phAttack: 56, phDefense: 35, spAttack: 25, spDefense: 35, speed: 72},
            abilities: {0: 'gluttony', 1: 'hustle', hidden: 'thick Fat'},
            height: 0.3,
            weight: 3.8,
            colors: ['black', 'white'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'alolan-raticate',
                method: 'level-up',
                value: 20
                }],
            altBaseEvolutions: [{
                species: 'rattata',
                method: 'type-warning',
                value: 'dark'
                }]
            },
        'alolan-raticate': {
            order: thisIndex.afterOrder('raticate', 2),
            token: 'alolan-raticate',
            name: 'Alolan Raticate',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'raticate',
            number: 20,
            forme: 'Alola',
            formeLetter: 'A',
            types: ['dark', 'normal'],
            baseStats: {hp: 75, phAttack: 71, phDefense: 70, spAttack: 40, spDefense: 80, speed: 77},
            abilities: {0: 'gluttony', 1: 'hustle', hidden: 'thick Fat'},
            height: 0.7,
            weight: 25.5,
            colors: ['black', 'white'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'alolan-rattata'
            },

        'alolan-raichu': {
            order: thisIndex.afterOrder('raichu'),
            token: 'alolan-raichu',
            name: 'Alolan Raichu',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'raichu',
            number: 26,
            types: ['electric', 'psychic'],
            baseStats: {hp: 60, phAttack: 85, phDefense: 50, spAttack: 95, spDefense: 85, speed: 110},
            abilities: {0: 'surge-surfer'},
            height: 0.7,
            weight: 21,
            colors: ['orange', 'yellow', 'white', 'blue'],
            eggCycles: 10,
            eggGroups: ['field', 'fairy'],
            prevEvolution: 'pikachu'
            },

        'alolan-sandshrew': {
            order: thisIndex.afterOrder('sandslash', 1),
            token: 'alolan-sandshrew',
            name: 'Alolan Sandshrew',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'sandshrew',
            number: 27,
            types: ['ice', 'steel'],
            baseStats: {hp: 50, phAttack: 75, phDefense: 90, spAttack: 10, spDefense: 35, speed: 40},
            abilities: {0: 'snow-cloak', hidden: 'slush-rush'},
            height: 0.7,
            weight: 40,
            colors: ['white', 'blue', 'black'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'alolan-sandslash', // ice-stone
                method: 'type-appeal',
                value: ['ice', 'steel'],
                method2: 'level-up',
                value2: 20
                }],
            altBaseEvolutions: [{
                species: 'sandshrew',
                method: 'type-warning',
                value: 'ice'
                },{
                species: 'sandshrew',
                method: 'type-warning',
                value: 'steel'
                },{
                species: 'sandshrew',
                method: 'type-appeal',
                value: 'ground'
                }]
            },
        'alolan-sandslash': {
            order: thisIndex.afterOrder('sandslash', 2),
            token: 'alolan-sandslash',
            name: 'Alolan Sandslash',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'sandslash',
            number: 28,
            types: ['ice', 'steel'],
            baseStats: {hp: 75, phAttack: 100, phDefense: 120, spAttack: 25, spDefense: 65, speed: 65},
            abilities: {0: 'snow-cloak', hidden: 'slush-rush'},
            height: 1.2,
            weight: 55,
            colors: ['white', 'blue', 'gray', 'black'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'alolan-sandshrew'
            },

        'alolan-vulpix': {
            order: thisIndex.afterOrder('ninetales', 1),
            token: 'alolan-vulpix',
            name: 'Alolan Vulpix',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'vulpix',
            number: 37,
            types: ['ice'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 38, phAttack: 41, phDefense: 40, spAttack: 50, spDefense: 65, speed: 65},
            abilities: {0: 'snow-cloak', hidden: 'snow-warning'},
            height: 0.6,
            weight: 9.9,
            colors: ['white', 'blue'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'alolan-ninetales', // ice-stone
                method: 'type-appeal',
                value: ['ice', 'fairy'],
                method2: 'level-up',
                value2: 20
                }],
            altBaseEvolutions: [{
                species: 'vulpix',
                method: 'type-warning',
                value: 'ice'
                },{
                species: 'vulpix',
                method: 'type-appeal',
                value: 'fire'
                }]
            },
        'alolan-ninetales': {
            order: thisIndex.afterOrder('ninetales', 2),
            token: 'alolan-ninetales',
            name: 'Alolan Ninetales',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'ninetales',
            number: 38,
            types: ['ice', 'fairy'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 73, phAttack: 67, phDefense: 75, spAttack: 81, spDefense: 100, speed: 109},
            abilities: {0: 'snow-cloak', hidden: 'snow-warning'},
            height: 1.1,
            weight: 19.9,
            colors: ['white', 'blue'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'alolan-vulpix'
            },

        'alolan-diglett': {
            order: thisIndex.afterOrder('dugtrio', 1),
            token: 'alolan-diglett',
            name: 'Alolan Diglett',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'diglett',
            number: 50,
            types: ['ground', 'steel'],
            baseStats: {hp: 10, phAttack: 55, phDefense: 30, spAttack: 35, spDefense: 45, speed: 90},
            abilities: {0: 'sand-veil', 1: 'tangling-hair', hidden: 'sand-force'},
            height: 0.2,
            weight: 1,
            colors: ['brown', 'pink', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'alolan-dugtrio',
                method: 'level-up',
                value: 26
                }],
            altBaseEvolutions: [{
                species: 'diglett',
                method: 'type-warning',
                value: 'steel'
                }]
            },
        'alolan-dugtrio': {
            order: thisIndex.afterOrder('dugtrio', 2),
            token: 'alolan-dugtrio',
            name: 'Alolan Dugtrio',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'dugtrio',
            number: 51,
            types: ['ground', 'steel'],
            baseStats: {hp: 35, phAttack: 100, phDefense: 60, spAttack: 50, spDefense: 70, speed: 110},
            abilities: {0: 'sand-veil', 1: 'tangling-hair', hidden: 'sand-force'},
            height: 0.7,
            weight: 66.6,
            colors: ['yellow', 'brown', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'alolan-diglett'
            },

        'alolan-meowth': {
            order: thisIndex.afterOrder('persian', 1),
            token: 'alolan-meowth',
            name: 'Alolan Meowth',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'meowth',
            number: 52,
            forme: 'Alola',
            formeLetter: 'A',
            types: ['dark'],
            baseStats: {hp: 40, phAttack: 35, phDefense: 35, spAttack: 50, spDefense: 40, speed: 90},
            abilities: {0: 'pickup', 1: 'technician', hidden: 'rattled'},
            height: 0.4,
            weight: 4.2,
            colors: ['gray', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'alolan-persian',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 28
                }],
            altBaseEvolutions: [{
                species: 'meowth',
                method: 'type-warning',
                value: 'dark'
                },{
                species: 'meowth',
                method: 'type-appeal',
                value: 'normal'
                }]
            },
        'alolan-persian': {
            order: thisIndex.afterOrder('persian', 2),
            token: 'alolan-persian',
            name: 'Alolan Persian',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'persian',
            number: 53,
            types: ['dark'],
            baseStats: {hp: 65, phAttack: 60, phDefense: 60, spAttack: 75, spDefense: 65, speed: 115},
            abilities: {0: 'pickup', 1: 'technician', hidden: 'rattled'},
            height: 1.1,
            weight: 33,
            colors: ['gray', 'black', 'blue'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'alolan-meowth'
            },

        'alolan-geodude': {
            order: thisIndex.afterOrder('golem', 1),
            token: 'alolan-geodude',
            name: 'Alolan Geodude',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'geodude',
            number: 74,
            types: ['rock', 'electric'],
            baseStats: {hp: 40, phAttack: 80, phDefense: 100, spAttack: 30, spDefense: 30, speed: 20},
            abilities: {0: 'magnet-pull', 1: 'sturdy', hidden: 'galvanize'},
            height: 0.4,
            weight: 20.3,
            colors: ['gray', 'black'],
            eggCycles: 15,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'alolan-graveler',
                method: 'level-up',
                value: 25
                }],
            altBaseEvolutions: [{
                species: 'geodude',
                method: 'type-warning',
                value: 'electric'
                },{
                species: 'geodude',
                method: 'type-appeal',
                value: 'ground'
                }]
            },
        'alolan-graveler': {
            order: thisIndex.afterOrder('golem', 2),
            token: 'alolan-graveler',
            name: 'Alolan Graveler',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'graveler',
            number: 75,
            types: ['rock', 'electric'],
            baseStats: {hp: 55, phAttack: 95, phDefense: 115, spAttack: 45, spDefense: 45, speed: 35},
            abilities: {0: 'magnet-pull', 1: 'sturdy', hidden: 'galvanize'},
            height: 1,
            weight: 110,
            colors: ['gray', 'black', 'yellow'],
            eggCycles: 15,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'alolan-golem',
                method: 'trade-partner',
                value: 'auto',
                method2: 'level-up',
                value2: 45
                }],
            prevEvolution: 'alolan-geodude'
            },
        'alolan-golem': {
            order: thisIndex.afterOrder('golem', 3),
            token: 'alolan-golem',
            name: 'Alolan Golem',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'golem',
            number: 76,
            types: ['rock', 'electric'],
            baseStats: {hp: 80, phAttack: 120, phDefense: 130, spAttack: 55, spDefense: 65, speed: 45},
            abilities: {0: 'magnet-pull', 1: 'sturdy', hidden: 'galvanize'},
            height: 1.7,
            weight: 316,
            colors: ['black', 'gray', 'yellow'],
            eggCycles: 15,
            eggGroups: ['mineral'],
            prevEvolution: 'alolan-graveler'
            },

        'alolan-grimer': {
            order: thisIndex.afterOrder('muk', 1),
            token: 'alolan-grimer',
            name: 'Alolan Grimer',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'grimer',
            number: 88,
            types: ['poison', 'dark'],
            baseStats: {hp: 80, phAttack: 80, phDefense: 50, spAttack: 40, spDefense: 50, speed: 25},
            abilities: {0: 'poison-touch', 1: 'gluttony', hidden: 'power-of-alchemy'},
            height: 0.7,
            weight: 42,
            colors: ['green', 'yellow', 'blue'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'alolan-muk',
                method: 'level-up',
                value: 38
                }],
            altBaseEvolutions: [{
                species: 'grimer',
                method: 'type-warning',
                value: 'dark'
                }]
            },
        'alolan-muk': {
            order: thisIndex.afterOrder('muk', 2),
            token: 'alolan-muk',
            name: 'Alolan Muk',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'muk',
            number: 89,
            types: ['poison', 'dark'],
            baseStats: {hp: 105, phAttack: 105, phDefense: 75, spAttack: 65, spDefense: 100, speed: 50},
            abilities: {0: 'poison-touch', 1: 'gluttony', hidden: 'power-of-alchemy'},
            height: 1,
            weight: 52,
            colors: ['pink', 'green', 'yellow', 'blue'],
            eggCycles: 20,
            eggGroups: ['amorphous'],
            prevEvolution: 'alolan-grimer'
            },

        'alolan-exeggutor': {
            order: thisIndex.afterOrder('exeggutor'),
            token: 'alolan-exeggutor',
            name: 'Alolan Exeggutor',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'exeggutor',
            number: 103,
            types: ['grass', 'dragon'],
            baseStats: {hp: 95, phAttack: 105, phDefense: 85, spAttack: 125, spDefense: 75, speed: 45},
            abilities: {0: 'frisk', hidden: 'harvest'},
            height: 10.9,
            weight: 415.6,
            colors: ['brown', 'green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'exeggcute'
            },

        'alolan-marowak': {
            order: thisIndex.afterOrder('marowak'),
            token: 'alolan-marowak',
            name: 'Alolan Marowak',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'marowak',
            number: 105,
            types: ['fire', 'ghost'],
            baseStats: {hp: 60, phAttack: 80, phDefense: 110, spAttack: 50, spDefense: 80, speed: 45},
            abilities: {0: 'cursed-body', 1: 'lightning-rod', hidden: 'rock-head'},
            height: 1,
            weight: 34,
            colors: ['black', 'gray', 'green'],
            eggCycles: 20,
            eggGroups: ['monster'],
            prevEvolution: 'cubone'
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([

        {base: 'pikachu', species: 'raichu', method: 'type-appeal', value: 'electric', method2: 'level-up', value2: 20, replace: true}, // thunder-stone
        {base: 'pikachu', species: 'alolan-raichu', method: 'type-appeal', value: 'psychic', method2: 'level-up', value2: 20}, // thunder-stone + alola-region

        {base: 'exeggcute', species: 'exeggutor', method: 'type-appeal', value: 'psychic', method2: 'level-up', value2: 20, replace: true}, // leaf-stone
        {base: 'exeggcute', species: 'alolan-exeggutor', method: 'type-appeal', value: 'dragon', method2: 'level-up', value2: 20}, // leaf-stone + alola-region

        {base: 'cubone', species: 'alolan-marowak', method: 'level-up', value: 28, method2: 'type-appeal', value2: 'ground', replace: true}, // level-up
        {base: 'cubone', species: 'alolan-marowak', method: 'level-up', value: 28, method2: 'type-appeal', value2: 'fire'}, // level-up + alola-region

        ]);

    // Update previous gen pokemon with alt base evolution data
    thisIndex.addAltBaseEvolutions([

        {base: 'rattata', species: 'alolan-rattata', method: 'type-appeal', value: 'dark'},

        {base: 'sandshrew', species: 'alolan-sandshrew', method: 'type-warning', value: 'ground'},
        {base: 'sandshrew', species: 'alolan-sandshrew', method: 'type-appeal', value: 'ice'},
        {base: 'sandshrew', species: 'alolan-sandshrew', method: 'type-appeal', value: 'steel'},

        {base: 'vulpix', species: 'alolan-vulpix', method: 'type-warning', value: 'fire'},
        {base: 'vulpix', species: 'alolan-vulpix', method: 'type-appeal', value: 'ice'},

        {base: 'diglett', species: 'alolan-diglett', method: 'type-appeal', value: 'steel'},

        {base: 'meowth', species: 'alolan-meowth', method: 'type-warning', value: 'normal'},
        {base: 'meowth', species: 'alolan-meowth', method: 'type-appeal', value: 'dark'},

        {base: 'geodude', species: 'alolan-geodude', method: 'type-warning', value: 'ground'},
        {base: 'geodude', species: 'alolan-geodude', method: 'type-appeal', value: 'electric'},

        {base: 'grimer', species: 'alolan-grimer', method: 'type-appeal', value: 'dark'},

        ]);

})();