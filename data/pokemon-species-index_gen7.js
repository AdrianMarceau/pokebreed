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
            color: 'brown',
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
            color: 'brown',
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
            color: 'brown',
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
            color: 'red',
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
            color: 'red',
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
            color: 'red',
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
            color: 'blue',
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
            color: 'blue',
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
            color: 'blue',
            eggCycles: 15,
            eggGroups: ['water-1', 'field'],
            prevEvolution: 'brionne'
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
            abilities: {0: 'Gluttony', 1: 'Hustle', hidden: 'Thick Fat'},
            height: 0.3,
            weight: 3.8,
            color: 'black',
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
            abilities: {0: 'Gluttony', 1: 'Hustle', hidden: 'Thick Fat'},
            height: 0.7,
            weight: 25.5,
            color: 'black',
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
            color: 'brown',
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
            color: 'white',
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'alolan-sandslash',
                method: 'evolution-stone',
                value: 'ice-stone',
                method2: 'type-appeal',
                value2: ['ice', 'steel']
                }],
            altBaseEvolutions: [{
                species: 'sandshrew',
                method: 'type-warning',
                value: 'ice'
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
            color: 'blue',
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
            color: 'white',
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'alolan-ninetales',
                method: 'evolution-stone',
                value: 'ice-stone',
                method2: 'type-appeal',
                value2: ['ice', 'fairy']
                }],
            altBaseEvolutions: [{
                species: 'vulpix',
                method: 'type-warning',
                value: 'ice'
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
            color: 'blue',
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
            color: 'brown',
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
            color: 'brown',
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
            color: 'blue',
            eggCycles: 20,
            eggGroups: ['field'],
            nextEvolutions: [{
                species: 'alolan-persian',
                method: 'happiness',
                value: 'high'
                }],
            altBaseEvolutions: [{
                species: 'meowth',
                method: 'type-warning',
                value: 'dark'
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
            color: 'blue',
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
            color: 'gray',
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
            color: 'gray',
            eggCycles: 15,
            eggGroups: ['mineral'],
            nextEvolutions: [{
                species: 'alolan-golem',
                method: 'trade',
                value: 'auto'
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
            color: 'gray',
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
            color: 'yellow',
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
            color: 'purple',
            eggCycles: 20,
            eggGroups: ['monster'],
            prevEvolution: 'cubone'
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([
        {base: 'pikachu', species: 'alolan-raichu', method: 'evolution-stone', value: 'thunder-stone', method2: 'type-appeal', value2: 'psychic'},
        {base: 'exeggcute', species: 'alolan-exeggutor', method: 'evolution-stone', value: 'leaf-stone', method2: 'type-appeal', value2: ['grass', 'dragon']},
        {base: 'cubone', species: 'alolan-marowak', method: 'level-up', value: 28, method2: 'type-appeal', value2: ['fire', 'ghost']},
        ]);

    // Update previous gen pokemon with alt base evolution data
    thisIndex.addAltBaseEvolutions([
        {base: 'rattata', species: 'alolan-rattata', method: 'type-appeal', value: 'dark'},
        {base: 'sandshrew', species: 'alolan-sandshrew', method: 'type-warning', value: 'ground'},
        {base: 'vulpix', species: 'alolan-vulpix', method: 'type-warning', value: 'fire'},
        {base: 'diglett', species: 'alolan-diglett', method: 'type-appeal', value: 'steel'},
        {base: 'meowth', species: 'alolan-meowth', method: 'type-appeal', value: 'dark'},
        {base: 'geodude', species: 'alolan-geodude', method: 'type-warning', value: 'ground'},
        {base: 'grimer', species: 'alolan-grimer', method: 'type-appeal', value: 'dark'},
        ]);

})();