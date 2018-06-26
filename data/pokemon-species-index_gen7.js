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

        'baile-oricorio': {
            order: indexOrder++,
            token: 'baile-oricorio',
            name: 'Baile Oricorio',
            formClass: 'regional-variant',
            formToken: 'baile',
            number: 741,
            types: ['fire', 'flying'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 75, phAttack: 70, phDefense: 70, spAttack: 98, spDefense: 70, speed: 93},
            abilities: {0: 'dancer'},
            height: 0.6,
            weight: 3.4,
            colors: ['red', 'black', 'white', 'blue', 'pink'],
            eggCycles: 20,
            eggGroups: ['flying'],
            altBaseEvolutions: [{
                species: 'baile-oricorio',
                method: 'type-appeal',
                value: 'fire'
                }, {
                species: 'pompom-oricorio',
                method: 'type-appeal',
                value: 'electric'
                }, {
                species: 'pau-oricorio',
                method: 'type-appeal',
                value: 'psychic'
                }, {
                species: 'sensu-oricorio',
                method: 'type-appeal',
                value: 'ghost'
                }]
            },
        'pompom-oricorio': {
            order: indexOrder++,
            token: 'pompom-oricorio',
            name: 'Pom-Pom Oricorio',
            formClass: 'regional-variant',
            formToken: 'pompom',
            number: 741,
            types: ['electric', 'flying'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 75, phAttack: 70, phDefense: 70, spAttack: 98, spDefense: 70, speed: 93},
            abilities: {0: 'dancer'},
            height: 0.6,
            weight: 3.4,
            colors: ['yellow', 'white', 'black', 'pink'],
            eggCycles: 20,
            eggGroups: ['flying'],
            altBaseEvolutions: [{
                species: 'baile-oricorio',
                method: 'type-appeal',
                value: 'fire'
                }, {
                species: 'pompom-oricorio',
                method: 'type-appeal',
                value: 'electric'
                }, {
                species: 'pau-oricorio',
                method: 'type-appeal',
                value: 'psychic'
                }, {
                species: 'sensu-oricorio',
                method: 'type-appeal',
                value: 'ghost'
                }]
            },
        'pau-oricorio': {
            order: indexOrder++,
            token: 'pau-oricorio',
            name: 'Pa\'u Oricorio',
            formClass: 'regional-variant',
            formToken: 'pau',
            number: 741,
            types: ['psychic', 'flying'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 75, phAttack: 70, phDefense: 70, spAttack: 98, spDefense: 70, speed: 93},
            abilities: {0: 'dancer'},
            height: 0.6,
            weight: 3.4,
            colors: ['pink', 'white', 'black'],
            eggCycles: 20,
            eggGroups: ['flying'],
            altBaseEvolutions: [{
                species: 'baile-oricorio',
                method: 'type-appeal',
                value: 'fire'
                }, {
                species: 'pompom-oricorio',
                method: 'type-appeal',
                value: 'electric'
                }, {
                species: 'pau-oricorio',
                method: 'type-appeal',
                value: 'psychic'
                }, {
                species: 'sensu-oricorio',
                method: 'type-appeal',
                value: 'ghost'
                }]
            },
        'sensu-oricorio': {
            order: indexOrder++,
            token: 'sensu-oricorio',
            name: 'Sensu Oricorio',
            formClass: 'regional-variant',
            formToken: 'sensu',
            number: 741,
            types: ['ghost', 'flying'],
            genderRatio: {male: 0.25, female: 0.75},
            baseStats: {hp: 75, phAttack: 70, phDefense: 70, spAttack: 98, spDefense: 70, speed: 93},
            abilities: {0: 'dancer'},
            height: 0.6,
            weight: 3.4,
            colors: ['purple', 'blue', 'black', 'pink'],
            eggCycles: 20,
            eggGroups: ['flying'],
            altBaseEvolutions: [{
                species: 'baile-oricorio',
                method: 'type-appeal',
                value: 'fire'
                }, {
                species: 'pompom-oricorio',
                method: 'type-appeal',
                value: 'electric'
                }, {
                species: 'pau-oricorio',
                method: 'type-appeal',
                value: 'psychic'
                }, {
                species: 'sensu-oricorio',
                method: 'type-appeal',
                value: 'ghost'
                }]
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

        'rockruff': {
            order: indexOrder++,
            token: 'rockruff',
            name: 'Rockruff',
            number: 744,
            types: ['rock'],
            baseStats: {hp: 45, phAttack: 65, phDefense: 40, spAttack: 30, spDefense: 40, speed: 60},
            abilities: {0: 'keen-eye', 1: 'vital-spirit', hidden: 'steadfast', special: 'own-tempo'},
            height: 0.5,
            weight: 9.2,
            colors: ['brown', 'white', 'black', 'blue', 'pink'],
            eggCycles: 15,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'midday-lycanroc',
                method: 'level-up',
                value: 25,
                method2: 'stat-appeal',
                value2: 'speed'
                }, {
                species: 'midnight-lycanroc',
                method: 'level-up',
                value: 25,
                method2: 'stat-appeal',
                value2: 'phDefense'
                }, {
                species: 'dusk-lycanroc',
                method: 'level-up',
                value: 25,
                method2: 'stat-appeal',
                value2: 'phAttack'
                }]
            },
        'midday-lycanroc': {
            order: indexOrder++,
            token: 'midday-lycanroc',
            name: 'Midday Lycanroc',
            formClass: 'form-variant',
            formToken: 'midday',
            number: 745,
            types: ['rock'],
            baseStats: {hp: 75, phAttack: 115, phDefense: 65, spAttack: 55, spDefense: 65, speed: 112},
            abilities: {0: 'keen-eye', 1: 'sand-rush', hidden: 'steadfast'},
            height: 0.8,
            weight: 25,
            colors: ['brown', 'white', 'black', 'blue', 'pink'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'rockruff'
            },
        'midnight-lycanroc': {
            order: indexOrder++,
            token: 'midnight-lycanroc',
            name: 'Midnight Lycanroc',
            formClass: 'form-variant',
            formToken: 'midnight',
            number: 745,
            types: ['rock'],
            baseStats: {hp: 85, phAttack: 115, phDefense: 75, spAttack: 55, spDefense: 75, speed: 82},
            abilities: {0: 'keen-eye', 1: 'vital-spirit', hidden: 'no-guard'},
            height: 1.1,
            weight: 25,
            colors: ['red', 'white', 'black'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'rockruff'
            },
        'dusk-lycanroc': {
            order: indexOrder++,
            token: 'dusk-lycanroc',
            name: 'Dusk Lycanroc',
            formClass: 'form-variant',
            formToken: 'dusk',
            number: 745,
            types: ['rock'],
            baseStats: {hp: 75, phAttack: 117, phDefense: 65, spAttack: 55, spDefense: 65, speed: 110},
            abilities: {0: 'tough-claws'},
            height: 0.8,
            weight: 25,
            colors: ['orange', 'white', 'black', 'green'],
            eggCycles: 15,
            eggGroups: ['field'],
            prevEvolution: 'rockruff'
            },

        'wishiwashi': {
            order: indexOrder++,
            token: 'wishiwashi',
            name: 'Wishiwashi',
            formClass: 'form-variant',
            formToken: 'solo',
            number: 746,
            types: ['water'],
            baseStats: {hp: 45, phAttack: 20, phDefense: 20, spAttack: 25, spDefense: 25, speed: 40},
            abilities: {0: 'schooling'},
            height: 0.2,
            weight: 0.3,
            colors: ['white', 'blue'],
            eggCycles: 15,
            eggGroups: ['water-2'],
            nextEvolutions: [{
                species: 'school-wishiwashi',
                method: 'level-up',
                value: 20,
                method2: 'horde',
                value2: 40,
                method3: 'adulthood',
                value3: false
                }]
            },
        'school-wishiwashi': {
            order: indexOrder++,
            token: 'school-wishiwashi',
            name: 'School Wishiwashi',
            formClass: 'form-variant',
            formToken: 'school',
            number: 746,
            types: ['water'],
            baseStats: {hp: 45, phAttack: 140, phDefense: 130, spAttack: 140, spDefense: 135, speed: 30},
            abilities: {0: 'schooling'},
            height: 8.2,
            weight: 78.6,
            colors: ['blue', 'black', 'white'],
            eggCycles: 15,
            eggGroups: ['water-2'],
            prevEvolution: 'wishiwashi',
            nextEvolutions: [{
                species: 'wishiwashi',
                method: 'burnout-evolution',
                value: 'schools-out'
                }]
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

        'mudbray': {
            order: indexOrder++,
            token: 'mudbray',
            name: 'Mudbray',
            number: 749,
            types: ['ground'],
            baseStats: {hp: 70, phAttack: 100, phDefense: 70, spAttack: 45, spDefense: 55, speed: 45},
            abilities: {0: 'own-tempo', 1: 'stamina', hidden: 'inner-focus'},
            height: 1,
            weight: 110,
            colors: ['brown', 'black', 'white'],
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'mudsdale',
                method: 'level-up',
                value: 30
                }]
            },
        'mudsdale': {
            order: indexOrder++,
            token: 'mudsdale',
            name: 'Mudsdale',
            number: 750,
            types: ['ground'],
            baseStats: {hp: 100, phAttack: 125, phDefense: 100, spAttack: 55, spDefense: 85, speed: 35},
            abilities: {0: 'own-tempo', 1: 'stamina', hidden: 'inner-focus'},
            height: 2.5,
            weight: 920,
            colors: ['brown', 'black', 'red'],
            eggCycles: 20,
            eggGroups: ['field'],
            prevEvolution: 'mudbray'
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

        'fomantis': {
            order: indexOrder++,
            token: 'fomantis',
            name: 'Fomantis',
            number: 753,
            types: ['grass'],
            baseStats: {hp: 40, phAttack: 55, phDefense: 35, spAttack: 50, spDefense: 35, speed: 35},
            abilities: {0: 'leaf-guard', hidden: 'contrary'},
            height: 0.3,
            weight: 1.5,
            colors: ['green', 'pink', 'white'],
            eggCycles: 20,
            eggGroups: ['grass'],
            nextEvolutions: [{
                species: 'lurantis',
                method: 'level-up',
                value: 34
                }]
            },
        'lurantis': {
            order: indexOrder++,
            token: 'lurantis',
            name: 'Lurantis',
            number: 754,
            types: ['grass'],
            baseStats: {hp: 70, phAttack: 105, phDefense: 90, spAttack: 80, spDefense: 90, speed: 45},
            abilities: {0: 'leaf-guard', hidden: 'contrary'},
            height: 0.9,
            weight: 18.5,
            colors: ['pink', 'white', 'green'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'fomantis'
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

        'bounsweet': { // TODO: Add "Thwornberry" as egg partner and alt base evo
            order: indexOrder++,
            token: 'bounsweet',
            name: 'Bounsweet',
            number: 761,
            types: ['grass'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 42, phAttack: 30, phDefense: 38, spAttack: 30, spDefense: 38, speed: 32},
            abilities: {0: 'leaf-guard', 1: 'oblivious', hidden: 'sweet-veil'},
            height: 0.3,
            weight: 3.2,
            colors: ['pink', 'green', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['grass'],
            nextEvolutions: [{
                species: 'steenee',
                method: 'level-up',
                value: 18
                }]
            },
        'steenee': {
            order: indexOrder++,
            token: 'steenee',
            name: 'Steenee',
            number: 762,
            types: ['grass'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 52, phAttack: 40, phDefense: 48, spAttack: 40, spDefense: 48, speed: 62},
            abilities: {0: 'leaf-guard', 1: 'oblivious', hidden: 'sweet-veil'},
            height: 0.7,
            weight: 8.2,
            colors: ['green', 'white', 'purple', 'pink', 'yellow'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'bounsweet',
            nextEvolutions: [{
                species: 'tsareena',
                method: 'level-up',
                value: 36
                }]
            },
        'tsareena': {
            order: indexOrder++,
            token: 'tsareena',
            name: 'Tsareena',
            number: 763,
            types: ['grass'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 72, phAttack: 120, phDefense: 98, spAttack: 50, spDefense: 98, speed: 72},
            abilities: {0: 'leaf-guard', 1: 'queenly-majesty', hidden: 'sweet-veil'},
            height: 1.2,
            weight: 21.4,
            colors: ['green', 'pink', 'white', 'yellow'],
            eggCycles: 20,
            eggGroups: ['grass'],
            prevEvolution: 'steenee'
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

        'oranguru': {
            order: indexOrder++,
            token: 'oranguru',
            name: 'Oranguru',
            number: 765,
            types: ['normal', 'psychic'],
            baseStats: {hp: 90, phAttack: 60, phDefense: 80, spAttack: 90, spDefense: 110, speed: 60},
            abilities: {0: 'inner-focus', 1: 'telepathy', hidden: 'symbiosis'},
            height: 1.5,
            weight: 76,
            colors: ['white', 'purple', 'gray', 'green', 'yellow'],
            eggCycles: 20,
            eggGroups: ['field']
            },

        'passimian': {
            order: indexOrder++,
            token: 'passimian',
            name: 'Passimian',
            number: 766,
            types: ['fighting'],
            baseStats: {hp: 100, phAttack: 120, phDefense: 90, spAttack: 40, spDefense: 60, speed: 80},
            abilities: {0: 'receiver', hidden: 'defiant'},
            height: 2,
            weight: 82.8,
            colors: ['white', 'black', 'green', 'orange'],
            eggCycles: 20,
            eggGroups: ['field']
            },

        'wimpod': {
            order: indexOrder++,
            token: 'wimpod',
            name: 'Wimpod',
            number: 767,
            types: ['bug', 'water'],
            baseStats: {hp: 25, phAttack: 35, phDefense: 40, spAttack: 20, spDefense: 30, speed: 80},
            abilities: {0: 'wimp-out'},
            height: 0.5,
            weight: 12,
            colors: ['gray', 'purple', 'yellow'],
            eggCycles: 20,
            eggGroups: ['bug', 'water-3'],
            nextEvolutions: [{
                species: 'golisopod',
                method: 'level-up',
                value: 30
                }]
            },
        'golisopod': {
            order: indexOrder++,
            token: 'golisopod',
            name: 'Golisopod',
            number: 768,
            types: ['bug', 'water'],
            baseStats: {hp: 75, phAttack: 125, phDefense: 140, spAttack: 60, spDefense: 90, speed: 40},
            abilities: {0: 'emergency-exit'},
            height: 2,
            weight: 108,
            colors: ['gray', 'black', 'purple'],
            eggCycles: 20,
            eggGroups: ['bug', 'water-3'],
            prevEvolution: 'wimpod'
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

        'type-null': {
            order: indexOrder++,
            token: 'type-null',
            name: 'Type: Null',
            class: 'legendary',
            visitorClass: '',
            number: 772,
            types: ['normal'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 95, phAttack: 95, phDefense: 95, spAttack: 95, spDefense: 95, speed: 59},
            abilities: {0: 'battle-armor'},
            height: 1.9,
            weight: 120.5,
            colors: ['gray', 'black', 'brown', 'green', 'blue'],
            evos: ['silvally'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'silvally',
                method: 'level-up',
                value: 40
                }]
            },
        'silvally': {
            order: indexOrder++,
            token: 'silvally',
            name: 'Silvally',
            class: 'legendary',
            number: 773,
            formClass: 'type-variant',
            dynamicForms: true,
            typeForms: true,
            syncTypeToForm: true,
            syncTypeMethod: 'replace',
            baseForm: 'normal',
            types: ['normal'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 95, phAttack: 95, phDefense: 95, spAttack: 95, spDefense: 95, speed: 95},
            abilities: {0: 'rks-system'},
            height: 2.3,
            weight: 100.5,
            colors: ['gray', 'black', 'blue', 'white', 'red'],
            possibleFormColors: {
                'normal': ['gray', 'black', 'blue', 'white', 'red'],
                'grass': ['gray', 'black', 'blue', 'green', 'red'],
                'fire': ['gray', 'black', 'blue', 'red'],
                'water': ['gray', 'black', 'blue', 'red'],
                'flying': ['gray', 'black', 'blue', 'red'],
                'bug': ['gray', 'black', 'blue', 'green', 'red'],
                'poison': ['gray', 'black', 'blue', 'purple', 'red'],
                'electric': ['gray', 'black', 'blue', 'yellow', 'red'],
                'psychic': ['gray', 'black', 'blue', 'pink', 'red'],
                'rock': ['gray', 'black', 'blue', 'brown', 'red'],
                'ground': ['gray', 'black', 'blue', 'brown', 'red'],
                'dark': ['gray', 'black', 'blue', 'red'],
                'ghost': ['gray', 'black', 'blue', 'purple', 'red'],
                'steel': ['gray', 'black', 'blue', 'red'],
                'fighting': ['gray', 'black', 'blue', 'brown', 'red'],
                'ice': ['gray', 'black', 'blue', 'white', 'red'],
                'dragon': ['gray', 'black', 'blue', 'red'],
                'fairy': ['gray', 'black', 'blue', 'pink', 'red'],
                },
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'type-null'
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
                species: 'core-minior',
                method: 'burst-evolution',
                value: 'shields-down'
                }]
            },
        'core-minior': {
            order: indexOrder++,
            token: 'core-minior',
            name: 'Core Minior',
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

        'dhelmise': {
            order: indexOrder++,
            token: 'dhelmise',
            name: 'Dhelmise',
            number: 781,
            types: ['ghost', 'grass'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 70, phAttack: 131, phDefense: 100, spAttack: 86, spDefense: 90, speed: 40},
            abilities: {0: 'steelworker'},
            height: 3.9,
            weight: 210,
            colors: ['green', 'brown', 'yellow', 'orange'],
            eggCycles: 25,
            eggGroups: ['mineral']
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

        'tapu-koko': {
            order: indexOrder++,
            token: 'tapu-koko',
            name: 'Tapu Koko',
            class: 'legendary',
            number: 785,
            types: ['electric', 'fairy'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 70, phAttack: 115, phDefense: 85, spAttack: 95, spDefense: 75, speed: 130},
            abilities: {0: 'electric-surge', hidden: 'telepathy'},
            height: 1.8,
            weight: 20.5,
            colors: ['yellow', 'orange', 'black', 'white'],
            eggCycles: 15,
            eggGroups: ['undiscovered']
            },
        'tapu-lele': {
            order: indexOrder++,
            token: 'tapu-lele',
            name: 'Tapu Lele',
            class: 'legendary',
            number: 786,
            types: ['psychic', 'fairy'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 70, phAttack: 85, phDefense: 75, spAttack: 130, spDefense: 115, speed: 95},
            abilities: {0: 'psychic-surge', hidden: 'telepathy'},
            height: 1.2,
            weight: 18.6,
            colors: ['pink', 'black', 'white'],
            eggCycles: 15,
            eggGroups: ['undiscovered']
            },
        'tapu-bulu': {
            order: indexOrder++,
            token: 'tapu-bulu',
            name: 'Tapu Bulu',
            class: 'legendary',
            number: 787,
            types: ['grass', 'fairy'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 70, phAttack: 130, phDefense: 115, spAttack: 85, spDefense: 95, speed: 75},
            abilities: {0: 'grassy-surge', hidden: 'telepathy'},
            height: 1.9,
            weight: 45.5,
            colors: ['red', 'black', 'yellow', 'white'],
            eggCycles: 15,
            eggGroups: ['undiscovered']
            },
        'tapu-fini': {
            order: indexOrder++,
            token: 'tapu-fini',
            name: 'Tapu Fini',
            class: 'legendary',
            number: 788,
            types: ['water', 'fairy'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 70, phAttack: 75, phDefense: 115, spAttack: 95, spDefense: 130, speed: 85},
            abilities: {0: 'misty-surge', hidden: 'telepathy'},
            height: 1.3,
            weight: 21.2,
            colors: ['purple', 'blue', 'black', 'white'],
            eggCycles: 15,
            eggGroups: ['undiscovered']
            },

        'cosmog': {
            order: indexOrder++,
            token: 'cosmog',
            name: 'Cosmog',
            class: 'legendary',
            hasUltraEnergy: true,
            number: 789,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 43, phAttack: 29, phDefense: 31, spAttack: 29, spDefense: 31, speed: 37},
            abilities: {0: 'unaware'},
            height: 0.2,
            weight: 0.1,
            colors: ['blue', 'purple', 'pink', 'black', 'yellow'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'cosmoem',
                method: 'level-up',
                value: 43
                }]
            },
        'cosmoem': {
            order: indexOrder++,
            token: 'cosmoem',
            name: 'Cosmoem',
            class: 'legendary',
            hasUltraEnergy: true,
            number: 790,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 43, phAttack: 29, phDefense: 131, spAttack: 29, spDefense: 131, speed: 37},
            abilities: {0: 'sturdy'},
            height: 0.1,
            weight: 999.9,
            colors: ['yellow', 'blue', 'purple', 'pink', 'black'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'cosmog',
            nextEvolutions: [{
                species: 'solgaleo',
                method: 'level-up',
                value: 53,
                method2: 'stat-appeal',
                value2: 'phAttack'
                }, {
                species: 'lunala',
                method: 'level-up',
                value: 53,
                method2: 'stat-appeal',
                value2: 'spAttack'
                }]
            },
        'solgaleo': {
            order: indexOrder++,
            token: 'solgaleo',
            name: 'Solgaleo',
            class: 'legendary',
            hasUltraEnergy: true,
            number: 791,
            types: ['psychic', 'steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 137, phAttack: 137, phDefense: 107, spAttack: 113, spDefense: 89, speed: 97},
            abilities: {0: 'full-metal-body'},
            height: 3.4,
            weight: 230,
            colors: ['white', 'yellow', 'red', 'black'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'cosmoem'
            },
        'lunala': {
            order: indexOrder++,
            token: 'lunala',
            name: 'Lunala',
            class: 'legendary',
            hasUltraEnergy: true,
            number: 792,
            types: ['psychic', 'ghost'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 137, phAttack: 113, phDefense: 89, spAttack: 137, spDefense: 107, speed: 97},
            abilities: {0: 'shadow-shield'},
            height: 4,
            weight: 120,
            colors: ['purple', 'blue', 'yellow', 'white', 'pink'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'cosmoem'
            },

        'nihilego': {
            order: indexOrder++,
            token: 'nihilego',
            name: 'Nihilego',
            class: 'ultra-beast',
            hasUltraEnergy: true,
            number: 793,
            types: ['rock', 'poison'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 109, phAttack: 53, phDefense: 47, spAttack: 127, spDefense: 131, speed: 103},
            abilities: {0: 'beast-boost'},
            height: 1.2,
            weight: 55.5,
            colors: ['white', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered']
            },

        'necrozma': {
            order: indexOrder++,
            token: 'necrozma',
            name: 'Necrozma',
            class: 'legendary',
            hasUltraEnergy: true,
            number: 800,
            types: ['psychic'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 97, phAttack: 107, phDefense: 101, spAttack: 127, spDefense: 89, speed: 79},
            abilities: {0: 'prism-armor'},
            height: 2.4,
            weight: 230,
            colors: ['black'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'dusk-mane-necrozma',
                method: 'level-up',
                value: 70,
                method2: 'fusion-species',
                value2: 'solgaleo',
                switch: 'and'
                }, {
                species: 'dawn-wings-necrozma',
                method: 'level-up',
                value: 70,
                method2: 'fusion-species',
                value2: 'lunala',
                switch: 'and'
                }]
            },
        'dusk-mane-necrozma': {
            order: indexOrder++,
            token: 'dusk-mane-necrozma',
            name: 'Dusk Mane Necrozma',
            class: 'legendary',
            hasUltraEnergy: true,
            baseSpecies: 'necrozma',
            formClass: 'fusion-evolution',
            formToken: 'dusk',
            number: 800,
            types: ['psychic', 'steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 97, phAttack: 157, phDefense: 127, spAttack: 113, spDefense: 109, speed: 77},
            abilities: {0: 'prism-armor'},
            height: 3.8,
            weight: 460,
            colors: ['black', 'yellow', 'white'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'necrozma',
            nextEvolutions: [{
                species: 'ultra-necrozma',
                method: 'burst-evolution',
                value: 'ultra-burst'
                }]
            },
        'dawn-wings-necrozma': {
            order: indexOrder++,
            token: 'dawn-wings-necrozma',
            name: 'Dawn Wings Necrozma',
            class: 'legendary',
            hasUltraEnergy: true,
            baseSpecies: 'necrozma',
            formClass: 'fusion-evolution',
            formToken: 'dawn',
            number: 800,
            types: ['psychic', 'ghost'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 97, phAttack: 113, phDefense: 109, spAttack: 157, spDefense: 127, speed: 77},
            abilities: {0: 'prism-armor'},
            height: 4.2,
            weight: 350,
            colors: ['black', 'blue', 'white'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'necrozma',
            nextEvolutions: [{
                species: 'ultra-necrozma',
                method: 'burst-evolution',
                value: 'ultra-burst'
                }]
            },
        'ultra-necrozma': {
            order: indexOrder++,
            token: 'ultra-necrozma',
            name: 'Ultra Necrozma',
            class: 'legendary',
            hasUltraEnergy: true,
            baseSpecies: 'necrozma',
            formClass: 'burst-evolution',
            formToken: 'ultra',
            number: 800,
            types: ['psychic', 'dragon'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 97, phAttack: 167, phDefense: 97, spAttack: 167, spDefense: 97, speed: 129},
            abilities: {0: 'neuroforce'},
            height: 7.5,
            weight: 230,
            colors: ['white', 'yellow'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'necrozma'
            },

        'magearna': {
            order: indexOrder++,
            token: 'magearna',
            name: 'Magearna',
            class: 'mythical',
            number: 801,
            types: ['steel', 'fairy'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 80, phAttack: 95, phDefense: 115, spAttack: 130, spDefense: 115, speed: 65},
            abilities: {0: 'soul-heart'},
            height: 1,
            weight: 80.5,
            colors: ['gray', 'white', 'yellow', 'pink', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'original-magearna',
                method: 'burst-evolution',
                value: 'soul-heart'
                }]
            },
        'original-magearna': {
            order: indexOrder++,
            token: 'original-magearna',
            name: 'Original Magearna',
            class: 'mythical',
            formClass: 'burst-evolution',
            formToken: 'original',
            number: 801,
            types: ['steel', 'fairy'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 80, phAttack: 95, phDefense: 115, spAttack: 130, spDefense: 115, speed: 65},
            abilities: {0: 'soul-heart'},
            height: 1,
            weight: 80.5,
            colors: ['yellow', 'red', 'white', 'blue'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'magearna'
            },

        'marshadow': {
            order: indexOrder++,
            token: 'marshadow',
            name: 'Marshadow',
            class: 'mythical',
            number: 802,
            types: ['fighting', 'ghost'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 90, phAttack: 125, phDefense: 80, spAttack: 90, spDefense: 90, speed: 125},
            abilities: {0: 'technician'},
            height: 0.7,
            weight: 22.2,
            colors: ['gray', 'black', 'red', 'yellow'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'zenith-marshadow',
                method: 'burst-evolution',
                value: 'fighting-spirit'
                }]
            },
        'zenith-marshadow': {
            order: indexOrder++,
            token: 'zenith-marshadow',
            name: 'Zenith Marshadow',
            class: 'mythical',
            formClass: 'burst-evolution',
            formToken: 'zenith',
            number: 802,
            types: ['fighting', 'ghost'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 90, phAttack: 125, phDefense: 80, spAttack: 90, spDefense: 90, speed: 125},
            abilities: {0: 'technician'},
            height: 0.7,
            weight: 22.2,
            colors: ['gray', 'black', 'red', 'yellow'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'marshadow'
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
            order: thisIndex.afterOrder('persian', 2),
            token: 'alolan-meowth',
            name: 'Alolan Meowth',
            formClass: 'regional-variant',
            formToken: 'alolan',
            baseSpecies: 'meowth',
            number: 52,
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
            order: thisIndex.afterOrder('persian', 3),
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
            order: thisIndex.afterOrder('muk', 2),
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
            order: thisIndex.afterOrder('muk', 3),
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

    // Update previous gen pokemon with known species appeal data
    thisIndex.addSpeciesAppealValues([

        // Predator/prey relationships
        {base: 'crabrawler', species: 'exeggcute'},
        {base: 'alolan-grimer', species: 'trubbish'},
        {base: 'alolan-muk', species: 'garbodor'},
        {base: 'wingull', species: 'wishiwashi'},
        {base: 'pelipper', species: 'wishiwashi'},
        {base: 'wailmer', species: 'wishiwashi'},
        {base: 'wailord', species: 'wishiwashi'},
        {base: 'toucannon', species: 'bounsweet'},
        {base: 'mareanie', species: 'corsola'},
        {base: 'toxapex', species: 'corsola'},
        {base: 'fearow', species: 'bounsweet'},
        {base: 'lurantis', species: 'caterpie'},
        {base: 'yungoos', species: 'rattata'},
        {base: 'gumshoos', species: 'raticate'},
        {base: 'spinarak', species: 'cutiefly'},
        {base: 'pineco', species: 'cutiefly'},
        {base: 'sneasel', species: 'alolan-vulpix'},
        {base: 'weavile', species: 'alolan-sandshew'},
        {base: 'pikipek', species: 'metapod'},

        // Symbiotic relationships
        // ---

        // Rival relationships
        {base: 'pinsir', species: 'vikavolt'},
        {base: 'mimikyu', species: 'pikachu'},
        {base: 'parasect', species: 'shiinotic'},
        {base: 'shiinotic', species: 'parasect'},

        // Romantic relationships
        // ---

        // Feeding/pollination relationships
        {base: 'vivillon', species: 'comfey'},
        {base: 'cutiefly', species: 'roselia'},

        // One-sided (theft) relationships
        {base: 'dewpider', species: 'surskit'},
        {base: 'murkrow', species: 'wimpod'},
        {base: 'meowth', species: 'wimpod'},

        // Mistaken identify relationships
        // ---

        // Legendary trigger relationships
        {base: 'necrozma', species: 'cosmog'},
        {base: 'necrozma', species: 'cosmoem'},
        {base: 'necrozma', species: 'solgaleo'},
        {base: 'necrozma', species: 'lunala'},

        ]);

})();