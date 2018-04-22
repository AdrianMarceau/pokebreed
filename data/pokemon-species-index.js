/*
    * GLOBAL POKEMON INDEX CLASS
    * This is the base class object that all other species data is added
    * to. Helper functions have been created for appending, replacing,
    * and modifying species data as each generation file is loaded so
    * that users can choose to exclude future/past generations.
    */

(function(){

    // Define the global species index object if not already exists
    if (typeof window.PokemonSpeciesIndex === 'undefined'){ window.PokemonSpeciesIndex = {}; }
    var PokemonSpeciesIndex = window.PokemonSpeciesIndex;

    // Define a global variables for the species index
    PokemonSpeciesIndex.indexOrder = 0;
    PokemonSpeciesIndex.indexList = {};


    // Define a function for adding a species to the index
    function addSpecies(newToken, newData){
        PokemonSpeciesIndex.indexList[newToken] = newData;
    }

    // Define a function for adding an entire list of species to the index
    function addSpeciesIndex(newIndex){
        Object.assign(PokemonSpeciesIndex.indexList, newIndex);
    }


    // Define a function for adding gender ratio data to a given species
    function addGenderRatio(genderRatio){
        //console.log('addGenderRatio(genderRatio)', genderRatio);
        if (typeof genderRatio.base !== 'undefined'
            && typeof PokemonSpeciesIndex.indexList[genderRatio.base] !== 'undefined'){
            var basePokemon = PokemonSpeciesIndex.indexList[genderRatio.base];
            basePokemon['genderRatio'] = genderRatio.ratio;
            //console.log('|- basePokemon = ', basePokemon);
            }
    }


    // Define a function for adding prev evolution data to a given species
    function addPrevEvolution(prevEvolution){
        //console.log('addPrevEvolution(prevEvolution)', prevEvolution);
        if (typeof prevEvolution.base !== 'undefined'
            && typeof PokemonSpeciesIndex.indexList[prevEvolution.base] !== 'undefined'){
            var basePokemon = PokemonSpeciesIndex.indexList[prevEvolution.base];
            basePokemon['prevEvolution'] = prevEvolution.species;
            //console.log('|- basePokemon = ', basePokemon);
            }
    }

    // Define a function for adding next evolution data to a given species
    function addNextEvolution(nextEvolution){
        //console.log('addNextEvolution(nextEvolution)', nextEvolution);
        if (typeof nextEvolution.base !== 'undefined'
            && typeof PokemonSpeciesIndex.indexList[nextEvolution.base] !== 'undefined'){
            var basePokemon = PokemonSpeciesIndex.indexList[nextEvolution.base];
            if (typeof basePokemon.nextEvolutions === 'undefined'){
                basePokemon.nextEvolutions = [];
                basePokemon.nextEvolutions.push(nextEvolution);
                } else {
                var currKey = false;
                for (var key = 0; key < basePokemon.nextEvolutions.length; key++){
                    var nextData = basePokemon.nextEvolutions[key];
                    if (nextData.species === nextEvolution.species){
                        currKey = key;
                        break;
                        }
                    }
                if (currKey !== false){
                    basePokemon.nextEvolutions[currKey] = nextEvolution;
                    } else {
                    basePokemon.nextEvolutions.push(nextEvolution);
                    }
                }
            //console.log('|- basePokemon = ', basePokemon);
            }
    }

    // Define a function for adding egg partner data to a given species
    function addEggPartner(eggPartner){
        //console.log('addEggPartner(eggPartner)', eggPartner);
        if (typeof eggPartner.base !== 'undefined'
            && typeof PokemonSpeciesIndex.indexList[eggPartner.base] !== 'undefined'){
            var basePokemon = PokemonSpeciesIndex.indexList[eggPartner.base];
            basePokemon['eggPartner'] = eggPartner.species;
            //console.log('|- basePokemon = ', basePokemon);
            }
    }

    // Define a function for adding alt base evolution data to a given species
    function addAltBaseEvolution(altBaseEvolution){
        //console.log('addAltBaseEvolution(altBaseEvolution)', altBaseEvolution);
        if (typeof altBaseEvolution.base !== 'undefined'
            && typeof PokemonSpeciesIndex.indexList[altBaseEvolution.base] !== 'undefined'){
            var basePokemon = PokemonSpeciesIndex.indexList[altBaseEvolution.base];
            if (typeof basePokemon.altBaseEvolutions === 'undefined'){ basePokemon.altBaseEvolutions = []; }
            basePokemon.altBaseEvolutions.push(altBaseEvolution);
            //console.log('|- basePokemon = ', basePokemon);
            }
    }


    // Define a function for adding gender ratio data to a list of given species
    function addGenderRatios(genderRatios){
        //console.log('addGenderRatios(genderRatios)', genderRatios);
        for (var key = 0; key < genderRatios.length; key++){
            addGenderRatio(genderRatios[key]);
            }
    }


    // Define a function for adding prev evolution data to a list of given species
    function addPrevEvolutions(prevEvolutions){
        //console.log('addPrevEvolutions(prevEvolutions)', prevEvolutions);
        for (var key = 0; key < prevEvolutions.length; key++){
            addPrevEvolution(prevEvolutions[key]);
            }
    }

    // Define a function for adding next evolution data to a list of given species
    function addNextEvolutions(nextEvolutions){
        //console.log('addNextEvolutions(nextEvolutions)', nextEvolutions);
        for (var key = 0; key < nextEvolutions.length; key++){
            addNextEvolution(nextEvolutions[key]);
            }
    }

    // Define a function for adding egg partner data to a list of given species
    function addEggPartners(eggPartners){
        //console.log('addEggPartners(eggPartners)', eggPartners);
        for (var key = 0; key < eggPartners.length; key++){
            addEggPartner(eggPartners[key]);
            }
    }

    // Define a function for adding alt base evolution data to a list of given species
    function addAltBaseEvolutions(altBaseEvolutions){
        //console.log('addAltBaseEvolutions(altBaseEvolutions)', altBaseEvolutions);
        for (var key = 0; key < altBaseEvolutions.length; key++){
            addAltBaseEvolution(altBaseEvolutions[key]);
            }
    }


    // Define a function for getting the prev order value before an existing species
    function beforeOrder(baseSpecies, orderIncrement){
        //console.log('beforeOrder(baseSpecies, orderIncrement)', baseSpecies, orderIncrement);
        if (typeof baseSpecies === 'undefined'){ return 0; }
        else if (typeof PokemonSpeciesIndex.indexList[baseSpecies] === 'undefined'){ return 0; }
        if (typeof orderIncrement !== 'number'){ orderIncrement = 1; }
        return PokemonSpeciesIndex.indexList[baseSpecies]['order'] - (orderIncrement / 10);
    }

    // Define a function for getting the next order value after an existing species
    function afterOrder(baseSpecies, orderIncrement){
        //console.log('afterOrder(baseSpecies, orderIncrement)', baseSpecies, orderIncrement);
        if (typeof baseSpecies === 'undefined'){ return 0; }
        else if (typeof PokemonSpeciesIndex.indexList[baseSpecies] === 'undefined'){ return 0; }
        if (typeof orderIncrement !== 'number'){ orderIncrement = 1; }
        return PokemonSpeciesIndex.indexList[baseSpecies]['order'] + (orderIncrement / 10);
    }


    // Add public api functions to the global index object

    PokemonSpeciesIndex.addSpecies = addSpecies;
    PokemonSpeciesIndex.addSpeciesIndex = addSpeciesIndex;

    PokemonSpeciesIndex.addGenderRatio = addGenderRatio;
    PokemonSpeciesIndex.addPrevEvolution = addPrevEvolution;
    PokemonSpeciesIndex.addNextEvolution = addNextEvolution;
    PokemonSpeciesIndex.addEggPartner = addEggPartner;
    PokemonSpeciesIndex.addAltBaseEvolution = addAltBaseEvolution;

    PokemonSpeciesIndex.addGenderRatios = addGenderRatios;
    PokemonSpeciesIndex.addPrevEvolutions = addPrevEvolutions;
    PokemonSpeciesIndex.addNextEvolutions = addNextEvolutions;
    PokemonSpeciesIndex.addEggPartners = addEggPartners;
    PokemonSpeciesIndex.addAltBaseEvolutions = addAltBaseEvolutions;

    PokemonSpeciesIndex.beforeOrder = beforeOrder;
    PokemonSpeciesIndex.afterOrder = afterOrder;


})();