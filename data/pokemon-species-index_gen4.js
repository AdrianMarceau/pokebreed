/*
    * GLOBAL POKEMON INDEX DATA (SINNOH / GEN 4)
    * This data was collected from Zarel for Pokemon Showdown
    * via: https://github.com/Zarel/Pokemon-Showdown/blob/master/data/pokedex.js
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration(4);
    thisIndex.setRegion('sinnoh');

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

        'starly': {
            order: indexOrder++,
            token: 'starly',
            name: 'Starly',
            number: 396,
            types: ['normal', 'flying'],
            baseStats: {hp: 40, phAttack: 55, phDefense: 30, spAttack: 30, spDefense: 30, speed: 60},
            abilities: {0: 'keen-eye', hidden: 'reckless'},
            height: 0.3,
            weight: 2,
            colors: ['black', 'gray', 'white', 'orange'],
            eggCycles: 15,
            eggGroups: ['flying'],
            nextEvolutions: [{
                species: 'staravia',
                method: 'level-up',
                value: 14
                }]
            },
        'staravia': {
            order: indexOrder++,
            token: 'staravia',
            name: 'Staravia',
            number: 397,
            types: ['normal', 'flying'],
            baseStats: {hp: 55, phAttack: 75, phDefense: 50, spAttack: 40, spDefense: 40, speed: 80},
            abilities: {0: 'intimidate', hidden: 'reckless'},
            height: 0.6,
            weight: 15.5,
            colors: ['black', 'gray', 'white', 'orange'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'starly',
            nextEvolutions: [{
                species: 'staraptor',
                method: 'level-up',
                value: 34
                }]
            },
        'staraptor': {
            order: indexOrder++,
            token: 'staraptor',
            name: 'Staraptor',
            number: 398,
            types: ['normal', 'flying'],
            baseStats: {hp: 85, phAttack: 120, phDefense: 70, spAttack: 50, spDefense: 60, speed: 100},
            abilities: {0: 'intimidate', hidden: 'reckless'},
            height: 1.2,
            weight: 24.9,
            colors: ['black', 'gray', 'white', 'red', 'orange'],
            eggCycles: 15,
            eggGroups: ['flying'],
            prevEvolution: 'staravia'
            },

        'bidoof': {
            order: indexOrder++,
            token: 'bidoof',
            name: 'Bidoof',
            number: 399,
            types: ['normal'],
            baseStats: {hp: 59, phAttack: 45, phDefense: 40, spAttack: 35, spDefense: 40, speed: 31},
            abilities: {0: 'simple', 1: 'unaware', hidden: 'moody'},
            height: 0.5,
            weight: 20,
            colors: ['brown', 'white'],
            eggCycles: 15,
            eggGroups: ['water-1', 'field'],
            nextEvolutions: [{
                species: 'bibarel',
                method: 'level-up',
                value: 15
                }]
            },
        'bibarel': {
            order: indexOrder++,
            token: 'bibarel',
            name: 'Bibarel',
            number: 400,
            types: ['normal', 'water'],
            baseStats: {hp: 79, phAttack: 85, phDefense: 60, spAttack: 55, spDefense: 60, speed: 71},
            abilities: {0: 'simple', 1: 'unaware', hidden: 'moody'},
            height: 1,
            weight: 31.5,
            colors: ['brown', 'white'],
            eggCycles: 15,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'bidoof'
            },

        'kricketot': {
            order: indexOrder++,
            token: 'kricketot',
            name: 'Kricketot',
            number: 401,
            types: ['bug'],
            baseStats: {hp: 37, phAttack: 25, phDefense: 41, spAttack: 25, spDefense: 41, speed: 25},
            abilities: {0: 'shed-skin', hidden: 'run-away'},
            height: 0.3,
            weight: 2.2,
            colors: ['red', 'yellow', 'black'],
            eggCycles: 15,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'kricketune',
                method: 'level-up',
                value: 10
                }]
            },
        'kricketune': {
            order: indexOrder++,
            token: 'kricketune',
            name: 'Kricketune',
            number: 402,
            types: ['bug'],
            baseStats: {hp: 77, phAttack: 85, phDefense: 51, spAttack: 55, spDefense: 51, speed: 65},
            abilities: {0: 'swarm', hidden: 'technician'},
            height: 1,
            weight: 25.5,
            colors: ['red', 'black', 'yellow'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'kricketot'
            },

        'shinx': {
            order: indexOrder++,
            token: 'shinx',
            name: 'Shinx',
            number: 403,
            types: ['electric'],
            baseStats: {hp: 45, phAttack: 65, phDefense: 34, spAttack: 40, spDefense: 34, speed: 45},
            abilities: {0: 'rivalry', 1: 'intimidate', hidden: 'guts'},
            height: 0.5,
            weight: 9.5,
            colors: ['blue', 'black', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'luxio',
                method: 'level-up',
                value: 15
                }]
            },
        'luxio': {
            order: indexOrder++,
            token: 'luxio',
            name: 'Luxio',
            number: 404,
            types: ['electric'],
            baseStats: {hp: 60, phAttack: 85, phDefense: 49, spAttack: 60, spDefense: 49, speed: 60},
            abilities: {0: 'rivalry', 1: 'intimidate', hidden: 'guts'},
            height: 0.9,
            weight: 30.5,
            colors: ['black', 'blue', 'yellow', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'shinx',
            nextEvolutions: [{
                species: 'luxray',
                method: 'level-up',
                value: 30
                }]
            },
        'luxray': {
            order: indexOrder++,
            token: 'luxray',
            name: 'Luxray',
            number: 405,
            types: ['electric'],
            baseStats: {hp: 80, phAttack: 120, phDefense: 79, spAttack: 95, spDefense: 79, speed: 70},
            abilities: {0: 'rivalry', 1: 'intimidate', hidden: 'guts'},
            height: 1.4,
            weight: 42,
            colors: ['black', 'blue', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'luxio'
            },

        'budew': {
            order: thisIndex.beforeOrder('roselia'),
            token: 'budew',
            name: 'Budew',
            class: 'baby',
            number: 406,
            types: ['grass', 'poison'],
            baseStats: {hp: 40, phAttack: 30, phDefense: 35, spAttack: 50, spDefense: 70, speed: 55},
            abilities: {0: 'natural-cure', 1: 'poison-point', hidden: 'leaf-guard'},
            height: 0.2,
            weight: 1.2,
            colors: ['green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'roselia',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 15
                }]
            },
        'roserade': {
            order: thisIndex.afterOrder('roselia'),
            token: 'roserade',
            name: 'Roserade',
            number: 407,
            types: ['grass', 'poison'],
            baseStats: {hp: 60, phAttack: 70, phDefense: 65, spAttack: 125, spDefense: 105, speed: 90},
            abilities: {0: 'natural-cure', 1: 'poison-point', hidden: 'technician'},
            height: 0.9,
            weight: 14.5,
            colors: ['green', 'white', 'red', 'blue', 'yellow'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            prevEvolution: 'roselia'
            },

        'cranidos': {
            order: indexOrder++,
            token: 'cranidos',
            name: 'Cranidos',
            number: 408,
            types: ['rock'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 67, phAttack: 125, phDefense: 40, spAttack: 30, spDefense: 30, speed: 58},
            abilities: {0: 'mold-breaker', hidden: 'sheer-force'},
            height: 0.9,
            weight: 31.5,
            colors: ['gray', 'blue', 'white', 'red'],
            eggCycles: 30,
            eggGroups: ['monster'],
            nextEvolutions: [{
                species: 'rampardos',
                method: 'level-up',
                value: 30
                }]
            },
        'rampardos': {
            order: indexOrder++,
            token: 'rampardos',
            name: 'Rampardos',
            number: 409,
            types: ['rock'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 97, phAttack: 165, phDefense: 60, spAttack: 65, spDefense: 50, speed: 58},
            abilities: {0: 'mold-breaker', hidden: 'sheer-force'},
            height: 1.6,
            weight: 102.5,
            colors: ['gray', 'blue', 'white', 'black', 'red'],
            eggCycles: 30,
            eggGroups: ['monster'],
            prevEvolution: 'cranidos'
            },

        'shieldon': {
            order: indexOrder++,
            token: 'shieldon',
            name: 'Shieldon',
            number: 410,
            types: ['rock', 'steel'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 30, phAttack: 42, phDefense: 118, spAttack: 42, spDefense: 88, speed: 30},
            abilities: {0: 'sturdy', hidden: 'soundproof'},
            height: 0.5,
            weight: 57,
            colors: ['gray', 'white', 'yellow'],
            eggCycles: 30,
            eggGroups: ['monster'],
            nextEvolutions: [{
                species: 'bastiodon',
                method: 'level-up',
                value: 30
                }]
            },
        'bastiodon': {
            order: indexOrder++,
            token: 'bastiodon',
            name: 'Bastiodon',
            number: 411,
            types: ['rock', 'steel'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 60, phAttack: 52, phDefense: 168, spAttack: 47, spDefense: 138, speed: 30},
            abilities: {0: 'sturdy', hidden: 'soundproof'},
            height: 1.3,
            weight: 149.5,
            colors: ['gray', 'white', 'yellow', 'black'],
            eggCycles: 30,
            eggGroups: ['monster'],
            prevEvolution: 'shieldon'
            },

        'burmy': {
            order: indexOrder++,
            token: 'burmy',
            name: 'Burmy',
            number: 412,
            formClass: 'field-variant',
            dynamicForms: true,
            fieldForms: true,
            possibleForms: ['plant', 'sandy', 'trash', 'snow', 'bubble'],
            possibleFormsColors: {
                'plant': ['green', 'black', 'brown', 'yellow'],
                'sandy': ['brown', 'black', 'gray', 'yellow'],
                'trash': ['pink', 'black', 'gray', 'yellow'],
                'snow': ['white', 'black', 'blue', 'yellow'],
                'bubble': ['blue', 'black', 'purple', 'yellow']
                },
            possibleFormsTriggers: {
                'plant': ['forest', 'savanna', 'graveyard'],
                'sandy': ['desert', 'beach', 'cliffside'],
                'trash': ['city', 'factory', 'crag'],
                'snow': ['snow', 'sky', 'space'],
                'bubble': ['river', 'seafloor', 'volcano'],
                },
            baseForm: 'plant',
            types: ['bug'],
            baseStats: {hp: 40, phAttack: 29, phDefense: 45, spAttack: 29, spDefense: 45, speed: 36},
            abilities: {0: 'shed-skin', hidden: 'overcoat'},
            height: 0.2,
            weight: 3.4,
            colors: ['green', 'black', 'yellow'],
            eggCycles: 15,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'mothim',
                method: 'level-up',
                value: 20,
                method2: 'gender',
                value2: 'male'
                },{
                species: 'plant-wormadam',
                method: 'level-up',
                value: 20,
                method2: 'gender',
                value2: 'female',
                method2: 'form',
                value2: 'plant'
                },{
                species: 'sandy-wormadam',
                method: 'level-up',
                value: 20,
                method2: 'gender',
                value2: 'female',
                method2: 'form',
                value2: 'sandy'
                },{
                species: 'trash-wormadam',
                method: 'level-up',
                value: 20,
                method2: 'gender',
                value2: 'female',
                method2: 'form',
                value2: 'trash'
                },{
                species: 'snow-wormadam',
                method: 'level-up',
                value: 20,
                method2: 'gender',
                value2: 'female',
                method2: 'form',
                value2: 'snow'
                },{
                species: 'bubble-wormadam',
                method: 'level-up',
                value: 20,
                method2: 'gender',
                value2: 'female',
                method2: 'form',
                value2: 'bubble'
                },]
            },
        'plant-wormadam': {
            order: indexOrder++,
            token: 'plant-wormadam',
            name: 'Plant-Wormadam',
            formClass: 'field-variant',
            formToken: 'plant',
            number: 413,
            types: ['bug', 'grass'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 60, phAttack: 59, phDefense: 85, spAttack: 79, spDefense: 105, speed: 36},
            abilities: {0: 'anticipation', hidden: 'overcoat'},
            height: 0.5,
            weight: 6.5,
            colors: ['green', 'black', 'white'],
            eggPartner: 'mothim',
            eggCycles: 15,
            eggGroups: ['bug'],
            otherFormes: ['wormadamsandy', 'wormadamtrash'],
            prevEvolution: 'burmy'
            },
        'sandy-wormadam': {
            order: indexOrder++,
            token: 'sandy-wormadam',
            name: 'Sandy Wormadam',
            formClass: 'field-variant',
            formToken: 'sandy',
            number: 413,
            types: ['bug', 'ground'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 60, phAttack: 79, phDefense: 105, spAttack: 59, spDefense: 85, speed: 36},
            abilities: {0: 'anticipation', hidden: 'overcoat'},
            height: 0.5,
            weight: 6.5,
            colors: ['brown', 'black', 'orange'],
            eggPartner: 'mothim',
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'burmy'
            },
        'trash-wormadam': {
            order: indexOrder++,
            token: 'trash-wormadam',
            name: 'Trash Wormadam',
            formClass: 'field-variant',
            formToken: 'trash',
            number: 413,
            types: ['bug', 'steel'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 60, phAttack: 69, phDefense: 95, spAttack: 69, spDefense: 95, speed: 36},
            abilities: {0: 'anticipation', hidden: 'overcoat'},
            height: 0.5,
            weight: 6.5,
            colors: ['pink', 'black', 'purple'],
            eggPartner: 'mothim',
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'burmy'
            },
        'snow-wormadam': {
            order: indexOrder++,
            token: 'snow-wormadam',
            name: 'Snow Wormadam',
            formClass: 'field-variant',
            formToken: 'snow',
            number: 413,
            types: ['bug', 'ice'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 60, phAttack: 69, phDefense: 95, spAttack: 69, spDefense: 95, speed: 36},
            abilities: {0: 'anticipation', hidden: 'overcoat'},
            height: 0.5,
            weight: 6.5,
            colors: ['white', 'blue', 'black'],
            eggPartner: 'mothim',
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'burmy'
            },
        'bubble-wormadam': {
            order: indexOrder++,
            token: 'bubble-wormadam',
            name: 'Bubble Wormadam',
            formClass: 'field-variant',
            formToken: 'bubble',
            number: 413,
            types: ['bug', 'water'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 60, phAttack: 69, phDefense: 95, spAttack: 69, spDefense: 95, speed: 36},
            abilities: {0: 'anticipation', hidden: 'overcoat'},
            height: 0.5,
            weight: 6.5,
            colors: ['blue', 'yellow', 'purple', 'black'],
            eggPartner: 'mothim',
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'burmy'
            },
        'mothim': {
            order: indexOrder++,
            token: 'mothim',
            name: 'Mothim',
            number: 414,
            types: ['bug', 'flying'],
            genderRatio: {male: 1.000},
            baseStats: {hp: 70, phAttack: 94, phDefense: 50, spAttack: 94, spDefense: 50, speed: 66},
            abilities: {0: 'swarm', hidden: 'tinted-lens'},
            height: 0.9,
            weight: 23.3,
            colors: ['yellow', 'orange', 'black', 'white'],
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'burmy'
            },

        'combee': {
            order: indexOrder++,
            token: 'combee',
            name: 'Combee',
            number: 415,
            types: ['bug', 'flying'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 30, phAttack: 30, phDefense: 42, spAttack: 30, spDefense: 42, speed: 70},
            abilities: {0: 'honey-gather', hidden: 'hustle'},
            height: 0.3,
            weight: 5.5,
            colors: ['yellow', 'black', 'white'],
            eggCycles: 15,
            eggGroups: ['bug'],
            nextEvolutions: [{
                species: 'vespiquen',
                method: 'level-up',
                value: 21,
                method2: 'gender',
                value2: 'female'
                }]
            },
        'vespiquen': {
            order: indexOrder++,
            token: 'vespiquen',
            name: 'Vespiquen',
            number: 416,
            types: ['bug', 'flying'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 70, phAttack: 80, phDefense: 102, spAttack: 80, spDefense: 102, speed: 40},
            abilities: {0: 'pressure', hidden: 'unnerve'},
            height: 1.2,
            weight: 38.5,
            colors: ['yellow', 'black', 'red', 'white'],
            eggPartner: 'combee',
            eggCycles: 15,
            eggGroups: ['bug'],
            prevEvolution: 'combee'
            },

        'pachirisu': {
            order: indexOrder++,
            token: 'pachirisu',
            name: 'Pachirisu',
            number: 417,
            types: ['electric'],
            baseStats: {hp: 60, phAttack: 45, phDefense: 70, spAttack: 45, spDefense: 90, speed: 95},
            abilities: {0: 'run-away', 1: 'pickup', hidden: 'volt-absorb'},
            height: 0.4,
            weight: 3.9,
            colors: ['white', 'blue', 'yellow'],
            eggCycles: 10,
            eggGroups: ['field', 'fairy']
            },

        'buizel': {
            order: indexOrder++,
            token: 'buizel',
            name: 'Buizel',
            number: 418,
            types: ['water'],
            baseStats: {hp: 55, phAttack: 65, phDefense: 35, spAttack: 60, spDefense: 30, speed: 85},
            abilities: {0: 'swift-swim', hidden: 'water-veil'},
            height: 0.7,
            weight: 29.5,
            colors: ['orange', 'yellow', 'blue'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            nextEvolutions: [{
                species: 'floatzel',
                method: 'level-up',
                value: 26
                }]
            },
        'floatzel': {
            order: indexOrder++,
            token: 'floatzel',
            name: 'Floatzel',
            number: 419,
            types: ['water'],
            baseStats: {hp: 85, phAttack: 105, phDefense: 55, spAttack: 85, spDefense: 50, speed: 115},
            abilities: {0: 'swift-swim', hidden: 'water-veil'},
            height: 1.1,
            weight: 33.5,
            colors: ['orange', 'yellow', 'blue'],
            eggCycles: 20,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'buizel'
            },

        'cherubi': {
            order: indexOrder++,
            token: 'cherubi',
            name: 'Cherubi',
            number: 420,
            types: ['grass'],
            baseStats: {hp: 45, phAttack: 35, phDefense: 45, spAttack: 62, spDefense: 53, speed: 35},
            abilities: {0: 'chlorophyll'},
            height: 0.4,
            weight: 3.3,
            colors: ['pink', 'green', 'purple'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            nextEvolutions: [{
                species: 'sunshine-cherrim',
                method: 'level-up',
                value: 25,
                method2: 'type-surge',
                value2: 'grass'
                }, {
                species: 'overcast-cherrim',
                method: 'level-up',
                value: 25
                }]
            },
        'overcast-cherrim': {
            order: indexOrder++,
            token: 'overcast-cherrim',
            name: 'Overcast Cherrim',
            formClass: 'weather-variarion',
            formToken: 'overcast',
            number: 421,
            types: ['grass'],
            baseStats: {hp: 70, phAttack: 60, phDefense: 70, spAttack: 87, spDefense: 78, speed: 85},
            abilities: {0: 'flower-gift'},
            height: 0.5,
            weight: 9.3,
            colors: ['purple', 'pink', 'green'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            prevEvolution: 'cherubi',
            nextEvolutions: [{
                species: 'sunshine-cherrim',
                method: 'type-surge',
                value: 'grass'
                }]
            },
        'sunshine-cherrim': {
            order: indexOrder++,
            token: 'sunshine-cherrim',
            name: 'Sunshine Cherrim',
            formClass: 'weather-variarion',
            formToken: 'sunshine',
            number: 421,
            types: ['grass'],
            baseStats: {hp: 70, phAttack: 90, phDefense: 70, spAttack: 87, spDefense: 117, speed: 85},
            abilities: {0: 'flower-gift'},
            height: 0.5,
            weight: 9.3,
            colors: ['pink', 'yellow', 'red'],
            eggCycles: 20,
            eggGroups: ['fairy', 'grass'],
            prevEvolution: 'cherubi',
            nextEvolutions: [{
                species: 'overcast-cherrim',
                method: 'type-warning',
                value: 'grass'
                }]
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

        'drifloon': {
            order: indexOrder++,
            token: 'drifloon',
            name: 'Drifloon',
            number: 425,
            types: ['ghost', 'flying'],
            baseStats: {hp: 90, phAttack: 50, phDefense: 34, spAttack: 60, spDefense: 44, speed: 70},
            abilities: {0: 'aftermath', 1: 'unburden', hidden: 'flare-boost'},
            height: 0.4,
            weight: 1.2,
            colors: ['purple', 'white', 'yellow'],
            eggCycles: 30,
            eggGroups: ['amorphous'],
            nextEvolutions: [{
                species: 'drifblim',
                method: 'level-up',
                value: 28
                }]
            },
        'drifblim': {
            order: indexOrder++,
            token: 'drifblim',
            name: 'Drifblim',
            number: 426,
            types: ['ghost', 'flying'],
            baseStats: {hp: 150, phAttack: 80, phDefense: 44, spAttack: 90, spDefense: 54, speed: 80},
            abilities: {0: 'aftermath', 1: 'unburden', hidden: 'flare-boost'},
            height: 1.2,
            weight: 15,
            colors: ['purple', 'yellow', 'white', 'red'],
            eggCycles: 30,
            eggGroups: ['amorphous'],
            prevEvolution: 'drifloon'
            },

        'buneary': {
            order: indexOrder++,
            token: 'buneary',
            name: 'Buneary',
            number: 427,
            types: ['normal'],
            baseStats: {hp: 55, phAttack: 66, phDefense: 44, spAttack: 44, spDefense: 56, speed: 85},
            abilities: {0: 'run-away', 1: 'klutz', hidden: 'limber'},
            height: 0.4,
            weight: 5.5,
            colors: ['brown', 'white', 'pink'],
            eggCycles: 20,
            eggGroups: ['field', 'human-like'],
            nextEvolutions: [{
                species: 'lopunny',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 15
                }]
            },
        'lopunny': {
            order: indexOrder++,
            token: 'lopunny',
            name: 'Lopunny',
            number: 428,
            types: ['normal'],
            baseStats: {hp: 65, phAttack: 76, phDefense: 84, spAttack: 54, spDefense: 96, speed: 105},
            abilities: {0: 'cute-charm', 1: 'klutz', hidden: 'limber'},
            height: 1.2,
            weight: 33.3,
            colors: ['white', 'brown', 'pink'],
            eggCycles: 20,
            eggGroups: ['field', 'human-like'],
            prevEvolution: 'buneary'
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

        'chingling': {
            order: thisIndex.beforeOrder('chimecho'),
            token: 'chingling',
            name: 'Chingling',
            class: 'baby',
            number: 433,
            types: ['psychic'],
            baseStats: {hp: 45, phAttack: 30, phDefense: 50, spAttack: 65, spDefense: 50, speed: 45},
            abilities: {0: 'levitate'},
            height: 0.2,
            weight: 0.6,
            colors: ['yellow', 'red', 'white', 'black'],
            eggCycles: 25,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'chimecho',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 15
                }]
            },

        'bronzor': {
            order: indexOrder++,
            token: 'bronzor',
            name: 'Bronzor',
            number: 436,
            types: ['steel', 'psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 57, phAttack: 24, phDefense: 86, spAttack: 24, spDefense: 86, speed: 23},
            abilities: {0: 'levitate', 1: 'heatproof', hidden: 'heavy-metal'},
            height: 0.5,
            weight: 60.5,
            colors: ['green', 'blue', 'yellow'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'bronzong',
                method: 'level-up',
                value: 33
                }]
            },
        'bronzong': {
            order: indexOrder++,
            token: 'bronzong',
            name: 'Bronzong',
            number: 437,
            types: ['steel', 'psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 67, phAttack: 89, phDefense: 116, spAttack: 79, spDefense: 116, speed: 33},
            abilities: {0: 'levitate', 1: 'heatproof', hidden: 'heavy-metal'},
            height: 1.3,
            weight: 187,
            colors: ['green', 'blue', 'red'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'bronzor'
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
                species: 'sudowoodo', // mimic
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 25
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
                species: 'mr-mime', // mimic
                method: 'affection',
                value: 'high',
                method2: 'level-up',
                value2: 25
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
                species: 'chansey', // oval-stone
                method: 'affection',
                value: 'high',
                method2: 'level-up',
                value2: 25
                }]
            },

        'chatot': {
            order: indexOrder++,
            token: 'chatot',
            name: 'Chatot',
            number: 441,
            types: ['normal', 'flying'],
            baseStats: {hp: 76, phAttack: 65, phDefense: 45, spAttack: 92, spDefense: 42, speed: 91},
            abilities: {0: 'keen-eye', 1: 'tangled-feet', hidden: 'big-pecks'},
            height: 0.5,
            weight: 1.9,
            colors: ['black', 'white', 'blue', 'yellow', 'green', 'pink'],
            eggCycles: 20,
            eggGroups: ['flying']
            },

        'spiritomb': {
            order: indexOrder++,
            token: 'spiritomb',
            name: 'Spiritomb',
            number: 442,
            types: ['ghost', 'dark'],
            baseStats: {hp: 50, phAttack: 92, phDefense: 108, spAttack: 92, spDefense: 108, speed: 35},
            abilities: {0: 'pressure', hidden: 'infiltrator'},
            height: 1,
            weight: 108,
            colors: ['purple', 'green', 'brown'],
            eggCycles: 30,
            eggGroups: ['amorphous']
            },

        'gible': {
            order: indexOrder++,
            token: 'gible',
            name: 'Gible',
            number: 443,
            types: ['dragon', 'ground'],
            baseStats: {hp: 58, phAttack: 70, phDefense: 45, spAttack: 40, spDefense: 45, speed: 42},
            abilities: {0: 'sand-veil', hidden: 'rough-skin'},
            height: 0.7,
            weight: 20.5,
            colors: ['blue', 'red'],
            eggCycles: 40,
            eggGroups: ['monster', 'dragon'],
            nextEvolutions: [{
                species: 'gabite',
                method: 'level-up',
                value: 24
                }]
            },
        'gabite': {
            order: indexOrder++,
            token: 'gabite',
            name: 'Gabite',
            number: 444,
            types: ['dragon', 'ground'],
            baseStats: {hp: 68, phAttack: 90, phDefense: 65, spAttack: 50, spDefense: 55, speed: 82},
            abilities: {0: 'sand-veil', hidden: 'rough-skin'},
            height: 1.4,
            weight: 56,
            colors: ['blue', 'red'],
            eggCycles: 40,
            eggGroups: ['monster', 'dragon'],
            prevEvolution: 'gible',
            nextEvolutions: [{
                species: 'garchomp',
                method: 'level-up',
                value: 48
                }]
            },
        'garchomp': {
            order: indexOrder++,
            token: 'garchomp',
            name: 'Garchomp',
            number: 445,
            types: ['dragon', 'ground'],
            baseStats: {hp: 108, phAttack: 130, phDefense: 95, spAttack: 80, spDefense: 85, speed: 102},
            abilities: {0: 'sand-veil', hidden: 'rough-skin'},
            height: 1.9,
            weight: 95,
            colors: ['blue', 'red', 'yellow'],
            eggCycles: 40,
            eggGroups: ['monster', 'dragon'],
            prevEvolution: 'gabite'
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
            colors: ['black', 'yellow'],
            eggCycles: 40,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'snorlax',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 25
                }]
            },

        'riolu': {
            order: indexOrder++,
            token: 'riolu',
            name: 'Riolu',
            class: 'baby',
            number: 447,
            types: ['fighting'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 40, phAttack: 70, phDefense: 40, spAttack: 35, spDefense: 40, speed: 60},
            abilities: {0: 'steadfast', 1: 'inner-focus', hidden: 'prankster'},
            height: 0.7,
            weight: 20.2,
            colors: ['blue', 'black', 'white', 'red'],
            eggCycles: 25,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'lucario',
                method: 'happiness',
                value: 'high',
                method2: 'level-up',
                value2: 25
                }]
            },
        'lucario': {
            order: indexOrder++,
            token: 'lucario',
            name: 'Lucario',
            number: 448,
            types: ['fighting', 'steel'],
            genderRatio: {male: 0.875, female: 0.125},
            baseStats: {hp: 70, phAttack: 110, phDefense: 70, spAttack: 115, spDefense: 70, speed: 90},
            abilities: {0: 'steadfast', 1: 'inner-focus', hidden: 'justified'},
            height: 1.2,
            weight: 54,
            colors: ['blue', 'black', 'yellow', 'white', 'red'],
            eggCycles: 25,
            eggGroups: ['field', 'human-like'],
            prevEvolution: 'riolu'
            },

        'hippopotas-f': {
            order: indexOrder++,
            token: 'hippopotas-f',
            name: 'Hippopotas \u2640',
            formClass: 'gender-variant',
            formToken: 'female',
            number: 449,
            types: ['ground'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 68, phAttack: 72, phDefense: 78, spAttack: 38, spDefense: 42, speed: 32},
            abilities: {0: 'sand-stream', hidden: 'sand-force'},
            height: 0.8,
            weight: 49.5,
            colors: ['yellow', 'brown'],
            eggCycles: 30,
            eggGroups: ['field'],
            eggPartner: 'hippopotas-m',
            nextEvolutions: [{
                species: 'hippowdon-f',
                method: 'level-up',
                value: 34
                }],
            altBaseEvolutions: [{
                'species': 'hippopotas-m',
                'method': 'chance',
                'value': 50
                }]
            },
        'hippowdon-f': {
            order: indexOrder++,
            token: 'hippowdon-f',
            name: 'Hippowdon \u2640',
            formClass: 'gender-variant',
            formToken: 'female',
            number: 450,
            types: ['ground'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 108, phAttack: 112, phDefense: 118, spAttack: 68, spDefense: 72, speed: 47},
            abilities: {0: 'sand-stream', hidden: 'sand-force'},
            height: 2,
            weight: 300,
            colors: ['yellow', 'brown'],
            eggCycles: 30,
            eggGroups: ['field'],
            eggPartner: 'hippowdon-m',
            prevEvolution: 'hippopotas-f'
            },

        'hippopotas-m': {
            order: indexOrder++,
            token: 'hippopotas-m',
            name: 'Hippopotas \u2642',
            formClass: 'gender-variant',
            formToken: 'male',
            number: 449,
            types: ['ground'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 68, phAttack: 72, phDefense: 78, spAttack: 38, spDefense: 42, speed: 32},
            abilities: {0: 'sand-stream', hidden: 'sand-force'},
            height: 0.8,
            weight: 49.5,
            colors: ['yellow', 'brown'],
            eggCycles: 30,
            eggGroups: ['field'],
            eggPartner: 'hippopotas-f',
            nextEvolutions: [{
                species: 'hippowdon-m',
                method: 'level-up',
                value: 34
                }],
            altBaseEvolutions: [{
                'species': 'hippopotas-f',
                'method': 'chance',
                'value': 50
                }]
            },
        'hippowdon-m': {
            order: indexOrder++,
            token: 'hippowdon-m',
            name: 'Hippowdon \u2642',
            formClass: 'gender-variant',
            formToken: 'male',
            number: 450,
            types: ['ground'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 108, phAttack: 112, phDefense: 118, spAttack: 68, spDefense: 72, speed: 47},
            abilities: {0: 'sand-stream', hidden: 'sand-force'},
            height: 2,
            weight: 300,
            colors: ['yellow', 'brown'],
            eggCycles: 30,
            eggGroups: ['field'],
            eggPartner: 'hippowdon-f',
            prevEvolution: 'hippopotas-m'
            },

        'skorupi': {
            order: indexOrder++,
            token: 'skorupi',
            name: 'Skorupi',
            number: 451,
            types: ['poison', 'bug'],
            baseStats: {hp: 40, phAttack: 50, phDefense: 90, spAttack: 30, spDefense: 55, speed: 65},
            abilities: {0: 'battle-armor', 1: 'sniper', hidden: 'keen-eye'},
            height: 0.8,
            weight: 12,
            colors: ['purple', 'white', 'blue'],
            eggCycles: 20,
            eggGroups: ['bug', 'water-3'],
            nextEvolutions: [{
                species: 'drapion',
                method: 'level-up',
                value: 40
                }]
            },
        'drapion': {
            order: indexOrder++,
            token: 'drapion',
            name: 'Drapion',
            number: 452,
            types: ['poison', 'dark'],
            baseStats: {hp: 70, phAttack: 90, phDefense: 110, spAttack: 60, spDefense: 75, speed: 95},
            abilities: {0: 'battle-armor', 1: 'sniper', hidden: 'keen-eye'},
            height: 1.3,
            weight: 61.5,
            colors: ['purple', 'white', 'blue'],
            eggCycles: 20,
            eggGroups: ['bug', 'water-3'],
            prevEvolution: 'skorupi'
            },

        'croagunk': {
            order: indexOrder++,
            token: 'croagunk',
            name: 'Croagunk',
            number: 453,
            types: ['poison', 'fighting'],
            baseStats: {hp: 48, phAttack: 61, phDefense: 40, spAttack: 61, spDefense: 40, speed: 50},
            abilities: {0: 'anticipation', 1: 'dry-skin', hidden: 'poison-touch'},
            height: 0.7,
            weight: 23,
            colors: ['blue', 'black', 'white', 'orange', 'yellow'],
            eggCycles: 10,
            eggGroups: ['human-like'],
            nextEvolutions: [{
                species: 'toxicroak',
                method: 'level-up',
                value: 37
                }]
            },
        'toxicroak': {
            order: indexOrder++,
            token: 'toxicroak',
            name: 'Toxicroak',
            number: 454,
            types: ['poison', 'fighting'],
            baseStats: {hp: 83, phAttack: 106, phDefense: 65, spAttack: 86, spDefense: 65, speed: 85},
            abilities: {0: 'anticipation', 1: 'dry-skin', hidden: 'poison-touch'},
            height: 1.3,
            weight: 44.4,
            colors: ['blue', 'black', 'red', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'croagunk'
            },

        'carnivine': {
            order: indexOrder++,
            token: 'carnivine',
            name: 'Carnivine',
            number: 455,
            types: ['grass'],
            baseStats: {hp: 74, phAttack: 100, phDefense: 72, spAttack: 90, spDefense: 72, speed: 46},
            abilities: {0: 'levitate'},
            height: 1.4,
            weight: 27,
            colors: ['green', 'red', 'yellow'],
            eggCycles: 25,
            eggGroups: ['grass']
            },

        'finneon': {
            order: indexOrder++,
            token: 'finneon',
            name: 'Finneon',
            number: 456,
            types: ['water'],
            baseStats: {hp: 49, phAttack: 49, phDefense: 56, spAttack: 49, spDefense: 61, speed: 66},
            abilities: {0: 'swift-swim', 1: 'storm-drain', hidden: 'water-veil'},
            height: 0.4,
            weight: 7,
            colors: ['blue', 'black', 'pink'],
            eggCycles: 20,
            eggGroups: ['water-2'],
            nextEvolutions: [{
                species: 'lumineon',
                method: 'level-up',
                value: 21
                }]
            },
        'lumineon': {
            order: indexOrder++,
            token: 'lumineon',
            name: 'Lumineon',
            number: 457,
            types: ['water'],
            baseStats: {hp: 69, phAttack: 69, phDefense: 76, spAttack: 69, spDefense: 86, speed: 91},
            abilities: {0: 'swift-swim', 1: 'storm-drain', hidden: 'water-veil'},
            height: 1.2,
            weight: 24,
            colors: ['blue', 'black', 'pink'],
            eggCycles: 20,
            eggGroups: ['water-2'],
            prevEvolution: 'finneon'
            },

        'mantyke': {
            order: thisIndex.beforeOrder('mantine'),
            token: 'mantyke',
            name: 'Mantyke',
            class: 'baby',
            number: 458,
            types: ['water', 'flying'],
            baseStats: {hp: 45, phAttack: 20, phDefense: 50, spAttack: 60, spDefense: 120, speed: 50},
            abilities: {0: 'swift-swim', 1: 'water-absorb', hidden: 'water-veil'},
            height: 1,
            weight: 65,
            colors: ['blue', 'white', 'red'],
            eggCycles: 25,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'mantine',
                method: 'evolution-species',
                value: 'remoraid',
                method2: 'level-up',
                value2: 25
                }]
            },

        'snover': {
            order: indexOrder++,
            token: 'snover',
            name: 'Snover',
            number: 459,
            types: ['grass', 'ice'],
            baseStats: {hp: 60, phAttack: 62, phDefense: 50, spAttack: 62, spDefense: 60, speed: 40},
            abilities: {0: 'snow-warning', hidden: 'soundproof'},
            height: 1,
            weight: 50.5,
            colors: ['white', 'brown', 'green'],
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            nextEvolutions: [{
                species: 'abomasnow',
                method: 'level-up',
                value: 40
                }]
            },
        'abomasnow': {
            order: indexOrder++,
            token: 'abomasnow',
            name: 'Abomasnow',
            number: 460,
            types: ['grass', 'ice'],
            baseStats: {hp: 90, phAttack: 92, phDefense: 75, spAttack: 92, spDefense: 85, speed: 60},
            abilities: {0: 'snow-warning', hidden: 'soundproof'},
            height: 2.2,
            weight: 135.5,
            colors: ['white', 'green', 'purple'],
            eggCycles: 20,
            eggGroups: ['monster', 'grass'],
            prevEvolution: 'snover'
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
            colors: ['blue', 'red', 'black'],
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

        'gallade': {
            order: thisIndex.afterOrder('gardevoir', 2),
            token: 'gallade',
            name: 'Gallade',
            number: 475,
            types: ['psychic', 'fighting'],
            genderRatio: {male: 1.0000},
            baseStats: {hp: 68, phAttack: 125, phDefense: 65, spAttack: 65, spDefense: 115, speed: 80},
            abilities: {0: 'steadfast', hidden: 'justified'},
            height: 1.6,
            weight: 52,
            colors: ['white', 'green', 'blue', 'red'],
            prevo: 'kirlia',
            eggCycles: 20,
            eggPartner: 'gardevoir',
            eggGroups: ['amorphous'],
            prevEvolution: 'kirlia'
            },

        'probopass': {
            order: thisIndex.afterOrder('nosepass'),
            token: 'probopass',
            name: 'Probopass',
            number: 476,
            types: ['rock', 'steel'],
            baseStats: {hp: 60, phAttack: 55, phDefense: 145, spAttack: 75, spDefense: 150, speed: 40},
            abilities: {0: 'sturdy', 1: 'magnet-pull', hidden: 'sand-force'},
            height: 1.4,
            weight: 340,
            colors: ['red', 'gray', 'black'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'nosepass'
            },

        'dusknoir': {
            order: thisIndex.afterOrder('dusclops'),
            token: 'dusknoir',
            name: 'Dusknoir',
            number: 477,
            types: ['ghost'],
            baseStats: {hp: 45, phAttack: 100, phDefense: 135, spAttack: 65, spDefense: 135, speed: 45},
            abilities: {0: 'pressure', hidden: 'frisk'},
            height: 2.2,
            weight: 106.6,
            colors: ['gray', 'black', 'white', 'red'],
            eggCycles: 25,
            eggGroups: ['amorphous'],
            prevEvolution: 'dusclops'
            },

        'froslass': {
            order: thisIndex.afterOrder('glalie', 2),
            token: 'froslass',
            name: 'Froslass',
            number: 478,
            types: ['ice', 'ghost'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 70, phAttack: 80, phDefense: 70, spAttack: 80, spDefense: 70, speed: 110},
            abilities: {0: 'snow-cloak', hidden: 'cursed-body'},
            height: 1.3,
            weight: 26.6,
            colors: ['white', 'blue', 'red', 'purple', 'yellow'],
            eggCycles: 20,
            eggPartner: 'glalie',
            eggGroups: ['fairy', 'mineral'],
            prevEvolution: 'snorunt'
            },

        'rotom': {
            order: indexOrder++,
            token: 'rotom',
            name: 'Rotom',
            number: 479,
            types: ['electric', 'ghost'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 50, phAttack: 50, phDefense: 77, spAttack: 95, spDefense: 77, speed: 91},
            abilities: {0: 'levitate'},
            height: 0.3,
            weight: 0.3,
            colors: ['orange', 'white', 'blue'],
            eggCycles: 20,
            eggGroups: ['amorphous']
            },

        'uxie': {
            order: indexOrder++,
            token: 'uxie',
            name: 'Uxie',
            class: 'legendary',
            number: 480,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 75, phAttack: 75, phDefense: 130, spAttack: 75, spDefense: 130, speed: 95},
            abilities: {0: 'levitate'},
            height: 0.3,
            weight: 0.3,
            colors: ['yellow', 'gray', 'red'],
            eggCycles: 80,
            eggGroups: ['undiscovered'],
            },
        'mesprit': {
            order: indexOrder++,
            token: 'mesprit',
            name: 'Mesprit',
            class: 'legendary',
            number: 481,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 80, phAttack: 105, phDefense: 105, spAttack: 105, spDefense: 105, speed: 80},
            abilities: {0: 'levitate'},
            height: 0.3,
            weight: 0.3,
            colors: ['pink', 'gray', 'red', 'yellow'],
            eggCycles: 80,
            eggGroups: ['undiscovered'],
            },
        'azelf': {
            order: indexOrder++,
            token: 'azelf',
            name: 'Azelf',
            class: 'legendary',
            number: 482,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 75, phAttack: 125, phDefense: 70, spAttack: 125, spDefense: 70, speed: 115},
            abilities: {0: 'levitate'},
            height: 0.3,
            weight: 0.3,
            colors: ['blue', 'gray', 'red', 'yellow'],
            eggCycles: 80,
            eggGroups: ['undiscovered'],
            },

        'dialga': {
            order: indexOrder++,
            token: 'dialga',
            name: 'Dialga',
            class: 'legendary',
            number: 483,
            types: ['steel', 'dragon'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 120, phDefense: 120, spAttack: 150, spDefense: 100, speed: 90},
            abilities: {0: 'pressure', hidden: 'telepathy'},
            height: 5.4,
            weight: 683,
            colors: ['white', 'blue', 'gray'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },
        'palkia': {
            order: indexOrder++,
            token: 'palkia',
            name: 'Palkia',
            class: 'legendary',
            number: 484,
            types: ['water', 'dragon'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 90, phAttack: 120, phDefense: 100, spAttack: 150, spDefense: 120, speed: 100},
            abilities: {0: 'pressure', hidden: 'telepathy'},
            height: 4.2,
            weight: 336,
            colors: ['purple', 'white', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },

        'heatran': {
            order: indexOrder++,
            token: 'heatran',
            name: 'Heatran',
            class: 'legendary',
            number: 485,
            types: ['fire', 'steel'],
            baseStats: {hp: 91, phAttack: 90, phDefense: 106, spAttack: 130, spDefense: 106, speed: 77},
            abilities: {0: 'flash-fire', hidden: 'flame-body'},
            height: 1.7,
            weight: 430,
            colors: ['brown', 'gray', 'orange'],
            eggCycles: 10,
            eggGroups: ['undiscovered']
            },

        'regigigas': {
            order: indexOrder++,
            token: 'regigigas',
            name: 'Regigigas',
            class: 'legendary',
            number: 486,
            types: ['normal'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 110, phAttack: 160, phDefense: 110, spAttack: 80, spDefense: 110, speed: 100},
            abilities: {0: 'slow-start'},
            height: 3.7,
            weight: 420,
            colors: ['white', 'yellow', 'green', 'red', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            },

        giratina: {
            order: indexOrder++,
            token: 'giratina',
            name: 'Giratina',
            class: 'legendary',
            number: 487,
            types: ['ghost', 'dragon'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 150, phAttack: 100, phDefense: 120, spAttack: 100, spDefense: 120, speed: 90},
            abilities: {0: 'pressure', hidden: 'telepathy'},
            height: 4.5,
            weight: 750,
            colors: ['gray', 'black', 'yellow', 'red'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },

        'cresselia': {
            order: indexOrder++,
            token: 'cresselia',
            name: 'Cresselia',
            class: 'legendary',
            number: 488,
            types: ['psychic'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 120, phAttack: 70, phDefense: 120, spAttack: 75, spDefense: 130, speed: 85},
            abilities: {0: 'levitate'},
            height: 1.5,
            weight: 85.6,
            colors: ['yellow', 'pink', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
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

        'darkrai': {
            order: indexOrder++,
            token: 'darkrai',
            name: 'Darkrai',
            class: 'mythical',
            number: 491,
            types: ['dark'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 70, phAttack: 90, phDefense: 90, spAttack: 135, spDefense: 90, speed: 125},
            abilities: {0: 'bad-dreams'},
            height: 1.5,
            weight: 50.5,
            colors: ['black', 'white', 'red'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with new prev evolution data
    thisIndex.addPrevEvolutions([
        {base: 'chimecho', species: 'chingling'},
        {base: 'roselia', species: 'budew'},
        {base: 'sudowoodo', species: 'bonsly'},
        {base: 'mr-mime', species: 'mime-jr'},
        {base: 'chansey', species: 'happiny'},
        {base: 'snorlax', species: 'munchlax'},
        {base: 'mantine', species: 'mantyke'},
        ]);

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([

        {base: 'aipom', species: 'ambipom', method: 'type-surge', value: 'normal', method2: 'level-up', value2: 22}, // double-hit
        {base: 'lickitung', species: 'lickilicky', method: 'type-surge', value: ['normal', 'rock'], method2: 'level-up', value2: 35}, // rollout
        {base: 'tangela', species: 'tangrowth', method: 'type-surge', value: ['grass', 'rock'], method2: 'level-up', value2: 35}, // ancient-power
        {base: 'yanma', species: 'yanmega', method: 'type-surge', value: ['bug', 'rock'], method2: 'level-up', value2: 35}, // ancient-power
        {base: 'piloswine', species: 'mamoswine', method: 'type-surge', value: ['ice', 'ground', 'rock'], method2: 'level-up', value2: 53}, // ancient-power

        {base: 'roselia', species: 'roserade', method: 'type-surge', value: ['grass', 'poison'], method2: 'level-up', value2: 35}, // shiny-stone
        {base: 'togetic', species: 'togekiss', method: 'type-surge', value: ['fairy', 'flying'], method2: 'level-up', value2: 35}, // shiny-stone

        {base: 'kirlia', species: 'gardevoir', method: 'level-up', value: 30, method2: 'type-appeal', value2: 'fairy', replace: true}, // natural
        {base: 'kirlia', species: 'gallade', method: 'level-up', value: 30, method2: 'type-appeal', value2: 'fighting', method3: 'gender', value3: 'male'}, // dawn-stone

        {base: 'snorunt', species: 'glalie', method: 'level-up', value: 42, method2: 'type-appeal', value2: 'ice', replace: true}, // natural
        {base: 'snorunt', species: 'froslass', method: 'level-up', value: 42, method2: 'type-appeal', value2: 'ghost', method3: 'gender', value3: 'female'}, // dawn-stone

        {base: 'misdreavus', species: 'mismagius', method: 'type-appeal', value: ['ghost'], method2: 'level-up', value2: 20}, // dusk-stone
        {base: 'murkrow', species: 'honchkrow', method: 'type-appeal', value: ['dark', 'flying'], method2: 'level-up', value2: 20}, // dusk-stone

        {base: 'magneton', species: 'magnezone', method: 'type-surge', value: 'electric', method2: 'level-up', value2: 50}, // magnetic-field
        {base: 'nosepass', species: 'probopass', method: 'type-surge', value: 'electric', method2: 'level-up', value2: 30}, // magnetic-field

        {base: 'eevee', species: 'leafeon', method: 'type-appeal', value: 'grass', method2: 'level-up', value2: 20}, // moss-stone
        {base: 'eevee', species: 'glaceon', method: 'type-appeal', value: 'ice', method2: 'level-up', value2: 20}, // icy-rock

        {base: 'sneasel', species: 'weavile', method: 'type-surge', value: ['dark', 'ice'], method2: 'level-up', value2: 30}, // razor-claw
        {base: 'gligar', species: 'gliscor', method: 'type-surge', value: ['ground', 'flying'], method2: 'level-up', value2: 30}, // razor-fang
        {base: 'rhydon', species: 'rhyperior', method: 'type-surge', value: ['rock', 'ground'], method2: 'level-up', value2: 62}, // protector
        {base: 'dusclops', species: 'dusknoir', method: 'type-surge', value: 'ghost', method2: 'level-up', value2: 57}, // repeat-cloth
        {base: 'electabuzz', species: 'electivire', method: 'type-surge', value: 'electric', method2: 'level-up', value2: 50}, // electrizer
        {base: 'magmar', species: 'magmortar', method: 'type-surge', value: 'fire', method2: 'level-up', value2: 50}, // magmarizer
        {base: 'porygon2', species: 'porygon-z', method: 'type-surge', value: ['fire', 'ice', 'electric'], method2: 'level-up', value2: 64}, // dubious-disc

        ]);

})();
