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
            formClass: 'fusion-evolution',
            formToken: 'x1',
            isSpecialPokemon: true,
            repeatVisitor: true,
            number: 808,
            types: ['steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 30, phAttack: 30, phDefense: 30, spAttack: 30, spDefense: 30, speed: 30},
            abilities: {0: 'static'},
            height: 0.2,
            weight: 8.0,
            colors: ['gray', 'yellow', 'black', 'red'],
            eggCycles: 60,
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'bimeltan',
                method: 'level-up', value: 20,
                method2: 'fusion-species', value2: 'meltan'
                }, {
                species: 'trimeltan',
                method: 'level-up', value: 30,
                method2: 'fusion-species', value2: 'bimeltan'
                }, {
                species: 'melmetal',
                method: 'level-up', value: 40,
                method2: 'fusion-species', value2: 'trimeltan'
                }]
            },
        'bimeltan': {
            order: indexOrder++,
            token: 'bimeltan',
            name: 'Bimeltan',
            class: 'mythical',
            formClass: 'fusion-evolution',
            formToken: 'x2',
            isSpecialPokemon: true,
            number: 808,
            types: ['steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 60, phAttack: 60, phDefense: 60, spAttack: 60, spDefense: 60, speed: 60},
            abilities: {0: 'static'},
            height: 0.2,
            weight: 16.0,
            colors: ['gray', 'yellow', 'black', 'red'],
            eggCycles: 60,
            eggGroups: ['undiscovered'],
            prevEvolution: 'meltan',
            nextEvolutions: [{
                species: 'trimeltan',
                method: 'level-up', value: 30,
                method2: 'fusion-species', value2: 'meltan'
                }, {
                species: 'melmetal',
                method: 'level-up', value: 40,
                method2: 'fusion-species', value2: 'bimeltan'
                }, {
                species: 'melmetal',
                method: 'level-up', value: 40,
                method2: 'fusion-species', value2: 'trimeltan',
                castoff: 'meltan'
                }]
            },
        'trimeltan': {
            order: indexOrder++,
            token: 'trimeltan',
            name: 'Trimeltan',
            class: 'mythical',
            formClass: 'fusion-evolution',
            formToken: 'x3',
            isSpecialPokemon: true,
            number: 808,
            types: ['steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 90, phAttack: 90, phDefense: 90, spAttack: 90, spDefense: 90, speed: 90},
            abilities: {0: 'static'},
            height: 0.2,
            weight: 24.0,
            colors: ['gray', 'yellow', 'black', 'red'],
            eggCycles: 60,
            eggGroups: ['undiscovered'],
            prevEvolution: 'meltan',
            nextEvolutions: [{
                species: 'melmetal',
                method: 'level-up', value: 40,
                method2: 'fusion-species', value2: 'meltan'
                }, {
                species: 'melmetal',
                method: 'level-up', value: 40,
                method2: 'fusion-species', value2: 'bimeltan',
                castoff: 'meltan'
                }, {
                species: 'melmetal',
                method: 'level-up', value: 40,
                method2: 'fusion-species', value2: 'trimeltan',
                castoff: 'bimeltan'
                }]
            },
        'melmetal': {
            order: indexOrder++,
            token: 'melmetal',
            name: 'Melmetal',
            class: 'mythical',
            number: 809,
            types: ['steel'],
            genderRatio: {none: 1.0000},
            baseStats: {hp: 120, phAttack: 120, phDefense: 120, spAttack: 120, spDefense: 120, speed: 120},
            abilities: {0: 'static'},
            height: 2.5,
            weight: 800.0,
            colors: ['gray', 'black', 'yellow'], //'red'
            eggCycles: 60,
            eggGroups: ['undiscovered'],
            prevEvolution: 'meltan'
            },


        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with known species appeal data
    thisIndex.addSpeciesAppealValues([

        // Legendary trigger relationships
        {base: 'meltan', species: 'meltan'},
        {base: 'meltan', species: 'bimeltan'},
        {base: 'meltan', species: 'trimeltan'},
        {base: 'meltan', species: 'melmetal'},

        ]);

})();
