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

    /*

    // Add the generation's list of base species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Base Pokedex

        // ...


        });
    thisIndex.indexOrder = indexOrder;

    */

    // Add the generation's list of extra species to the index
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

    });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([

        {base: 'charizard', species: 'gmax-charizard', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'butterfree', species: 'gmax-butterfree', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'pikachu', species: 'gmax-pikachu', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'meowth', species: 'gmax-meowth', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'machamp', species: 'gmax-machamp', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},

        ]);

    /*

    // Update previous gen pokemon with alt base evolution data
    thisIndex.addAltBaseEvolutions([

        ]);

    */

})();
