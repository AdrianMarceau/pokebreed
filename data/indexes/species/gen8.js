/*
    * GLOBAL POKEMON INDEX DATA (CUSTOM / GEN 8)
    * This data was collected from --------
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration(8);
    thisIndex.setRegion('eight');

    // Add the generation's list of base species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Base Pokedex

        'meltan': {
            order: indexOrder++,
            token: 'meltan',
            name: 'Meltan',
            class: 'mythical',
            number: 808,
            types: ['steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 100, phAttack: 100, phDefense: 100, spAttack: 100, spDefense: 100, speed: 100},
            abilities: {0: 'static'},
            height: 0.2,
            weight: 8.0,
            colors: ['yellow', 'gray', 'black', 'red'],
            eggCycles: 60,
            eggGroups: ['undiscovered']
            },


        });
    thisIndex.indexOrder = indexOrder;

})();
