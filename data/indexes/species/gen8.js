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

    });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([

        {base: 'charizard', species: 'gmax-charizard', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},
        {base: 'butterfree', species: 'gmax-butterfree', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},

        ]);

    /*

    // Update previous gen pokemon with alt base evolution data
    thisIndex.addAltBaseEvolutions([

        ]);

    */

})();
