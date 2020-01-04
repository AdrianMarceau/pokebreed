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

    });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([

        {base: 'charizard', species: 'gmax-charizard', method: 'burst-evolution', value: 'dynamax-energy', method2: 'gigantamax-factor', value2: 100},

        ]);

    /*

    // Update previous gen pokemon with alt base evolution data
    thisIndex.addAltBaseEvolutions([

        ]);

    */

})();
