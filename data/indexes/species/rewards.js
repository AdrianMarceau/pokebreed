/*
    * GLOBAL POKEMON INDEX DATA (CUSTOM / REWARDS)
    * This data was collected from various sources and heavily edited.
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration('r');
    thisIndex.setRegion('custom');

    // Add the generation's list of hidden species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Shadow Pokemon

        'shadow-mewtwo': {
            order: indexOrder++,
            token: 'shadow-mewtwo',
            name: 'Shadow Mewtwo',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            //baseSpecies: 'mewtwo',
            number: 150,
            dexNumber: 2001,
            displayNumber: 2001,
            dexGeneration: 'r',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 106, phAttack: 110, phDefense: 90, spAttack: 154, spDefense: 90, speed: 130},
            abilities: {0: 'pressure'},
            height: 2,
            weight: 122,
            colors: ['gray', 'yellow', 'black'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its dark aura repels any and all visitors.',
            speciesEffects: ['repelAllVisitors'],
            isHiddenPokemon: true,
            isGiftPokemon: true,
            nextEvolutions: [{
                species: 'shadow-mega-mewtwo',
                method: 'level-up',
                value: 360
                }]
            },
        'shadow-mega-mewtwo': {
            order: indexOrder++,
            token: 'shadow-mega-mewtwo',
            name: 'Mega Shadow Mewtwo',
            class: 'legendary',
            formClass: 'shadow-variant',
            formClass2: 'mega-evolution',
            formClass3: 'seasonal-variant',
            formToken: 'shadow-mega-x',
            baseSpecies: 'shadow-mewtwo',
            dynamicForms: true,
            seasonalForms: true,
            possibleForms: ['shadow-mega-x', 'shadow-mega-y'],
            possibleFormsTriggers: {
                'winter': 'shadow-mega-x',
                'spring': 'shadow-mega-y',
                'summer': 'shadow-mega-x',
                'autumn': 'shadow-mega-y',
                },
            baseForm: 'shadow-mega-x',
            number: 150,
            dexNumber: 2001.1,
            displayNumber: 2001.1,
            dexGeneration: 'r',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 106, phAttack: 170, phDefense: 85, spAttack: 174, spDefense: 110, speed: 85},
            abilities: {0: 'pressure'},
            height: 2.3,
            weight: 127,
            colors: ['gray', 'yellow', 'black'],
            possibleFormColors: {
                'shadow-mega-x': ['gray', 'yellow', 'black', 'blue'],
                'shadow-mega-y': ['gray', 'yellow', 'black', 'red']
                },
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            prevEvolution: 'shadow-mewtwo',
            buttonQuote: 'Its dark aura repels any and all visitors.',
            speciesEffects: ['repelAllVisitors'],
            isGiftPokemon: true,
            isHiddenPokemon: true
            },

        'shadow-lugia': {
            order: indexOrder++,
            token: 'shadow-lugia',
            name: 'Shadow Lugia',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            //baseSpecies: 'lugia',
            number: 249,
            dexNumber: 2002,
            displayNumber: 2002,
            dexGeneration: 'r',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 106, phAttack: 90, phDefense: 130, spAttack: 90, spDefense: 154, speed: 110},
            abilities: {0: 'pressure'},
            height: 5.2,
            weight: 216,
            colors: ['purple', 'blue', 'white', 'red'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its dark aura reverses elemental type appeal.',
            speciesEffects: ['reverseTypeAppeal'],
            isGiftPokemon: true,
            isHiddenPokemon: true
            },

        'shadow-entei': {
            order: indexOrder++,
            token: 'shadow-entei',
            name: 'Shadow Entei',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            //baseSpecies: 'entei',
            number: 244,
            dexNumber: 2003,
            displayNumber: 2003,
            dexGeneration: 'r',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 115, phAttack: 115, phDefense: 85, spAttack: 90, spDefense: 75, speed: 100},
            abilities: {0: 'pressure'},
            height: 2.1,
            weight: 198,
            colors: ['gray', 'black', 'blue', 'white', 'red'],
            eggCycles: 80,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its dark aura prohibits all species from breeding.',
            speciesEffects: ['preventAllBreeding'],
            isGiftPokemon: true,
            isHiddenPokemon: true
            },

        'shadow-celebi': {
            order: indexOrder++,
            token: 'shadow-celebi',
            name: 'Shadow Celebi',
            class: 'mythical',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            //baseSpecies: 'celebi',
            number: 251,
            dexNumber: 2004,
            displayNumber: 2004,
            dexGeneration: 'r',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 100, phAttack: 100, phDefense: 100, spAttack: 100, spDefense: 100, speed: 100},
            abilities: {0: 'natural-cure'},
            height: 0.6,
            weight: 5,
            colors: ['gray', 'purple', 'red'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its dark aura suppresses all forms of evolution.',
            speciesEffects: ['preventAllEvolution'],
            isGiftPokemon: true,
            isHiddenPokemon: true
            },

        'shadow-latios': {
            order: indexOrder++,
            token: 'shadow-latios',
            name: 'Shadow Latios',
            class: 'legendary',
            formClass: 'shadow-variant',
            formToken: 'shadow',
            //baseSpecies: 'latios',
            number: 381,
            dexNumber: 2005,
            displayNumber: 2005,
            dexGeneration: 'r',
            types: ['shadow'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 80, phAttack: 90, phDefense: 80, spAttack: 130, spDefense: 110, speed: 110},
            abilities: {0: 'levitate'},
            height: 2,
            weight: 60,
            colors: ['purple', 'blue', 'white', 'yellow'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its dark aura nullifies inter-species appeal.',
            speciesEffects: ['ignoreSpeciesAppeal'],
            isGiftPokemon: true,
            isHiddenPokemon: true
            },

        // Shining Evolutions

        'gold-ho-oh': {
            order: indexOrder++,
            token: 'gold-ho-oh',
            name: 'Gold Ho-Oh',
            class: 'legendary',
            formClass: 'shining-variant',
            formToken: 'gold',
            //baseSpecies: 'ho-oh',
            number: 250,
            dexNumber: 3001,
            displayNumber: 3001,
            dexGeneration: 'r',
            excludeFromZoneStats: true,
            types: ['shining'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 106, phAttack: 130, phDefense: 90, spAttack: 110, spDefense: 154, speed: 90},
            abilities: {0: 'regenerator'},
            height: 3.8,
            weight: 199,
            colors: ['gold'],
            eggCycles: 120,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its rainbow gold wings inspire Pokémon to show their true colours.',
            speciesEffects: ['increaseColourVariations'],
            isGiftPokemon: true,
            isHiddenPokemon: true
            },

        'silver-suicune': {
            order: indexOrder++,
            token: 'silver-suicune',
            name: 'Silver Suicune',
            class: 'legendary',
            formClass: 'shining-variant',
            formToken: 'silver',
            //baseSpecies: 'suicune',
            number: 245,
            dexNumber: 3002,
            displayNumber: 3002,
            types: ['shining'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 100, phAttack: 75, phDefense: 115, spAttack: 90, spDefense: 115, speed: 85},
            abilities: {0: 'pressure'},
            height: 2,
            weight: 187,
            colors: ['silver'],
            eggCycles: 80,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its shimmering silver coat entices powerful Pokémon to visit more frequently.',
            speciesEffects: ['increaseSpecialVisitors'],
            isGiftPokemon: true,
            isHiddenPokemon: true
            },

        'crystal-onix': {
            order: indexOrder++,
            token: 'crystal-onix',
            name: 'Crystal Onix',
            class: 'legendary',
            formClass: 'shining-variant',
            formToken: 'crystal',
            //baseSpecies: 'onix',
            number: 95,
            dexNumber: 3003,
            displayNumber: 3003,
            types: ['shining'],
            genderRatio: {none: 1.0000},
            lifePoints: -1,
            baseStats: {hp: 35, phAttack: 45, phDefense: 160, spAttack: 30, spDefense: 45, speed: 70},
            abilities: {0: 'pressure'},
            height: 8.8,
            weight: 210,
            colors: ['crystal'],
            eggCycles: 25,
            eggGroups: ['undiscovered'],
            buttonQuote: 'Its unbreakable crystal body protects Pokémon from their elemental weaknesses.',
            speciesEffects: ['ignoreTypeWeaknesses'],
            isGiftPokemon: true,
            isHiddenPokemon: true
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Add each of the listed shadow pokemon to the global reward index
    PokeBoxAPI.addShadowRewardToIndex({species: 'shadow-mewtwo', count: 1000, secret: 'WHATISMYPURPOSE150'});
    PokeBoxAPI.addShadowRewardToIndex({species: 'shadow-lugia', count: 2000, secret: 'GALEOFDARKNESS249'});
    PokeBoxAPI.addShadowRewardToIndex({species: 'shadow-entei', count: 3000, secret: 'IFTHATISWHATYOUWISH244'});
    PokeBoxAPI.addShadowRewardToIndex({species: 'shadow-celebi', count: 4000, secret: 'VOICEOFTHEFOREST251'});
    PokeBoxAPI.addShadowRewardToIndex({species: 'shadow-latios', count: 5000, secret: 'GUARDIANOFALTOMARE381'});

    // Add each of the listed shining pokemon to the global reward index
    PokeBoxAPI.addShiningRewardToIndex({species: 'crystal-onix', count: 6000, secret: 'UNBREAKABLECRYSTALBODY095'});
    PokeBoxAPI.addShiningRewardToIndex({species: 'silver-suicune', count: 7000, secret: 'SHIMMERINGSILVERCOAT245'});
    PokeBoxAPI.addShiningRewardToIndex({species: 'gold-ho-oh', count: 8000, secret: 'RAINBOWGOLDWINGS250'});

})();
