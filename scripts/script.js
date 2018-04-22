(function(){


    // GLOBAL MISC

    var appLastUpdated = '2018-03-29'; // first date
    var appVersionNumber = '0.1.0'; // first version

    var requiredPokemonIndexes = ['', 1, 2, 3, 4, 5, 6, 7, 'x'];
    var maxIndexKeyToLoad = 8;

    var PokemonSpeciesIndex = {};
    var PokemonTypesIndex = {};


    // GLOBAL ZONE DATA

    var thisZoneData = {
        name: 'Default Box',
        width: 20,
        height: 5,
        size: 100,
        capacity: 100,
        diversity: 0,
        baseStats: {},
        currentStats: {},
        currentPokemon: [],
        faintedPokemon: [],
        addedPokemonSpecies: {},
        evolvedPokemonSpecies: {},
        faintedPokemonSpecies: {},
        day: 0
        };

    var thisZoneHistory = [];

    var thisDeviceWidth = 0;


    // GLOBAL ELEMENT REFERENCES

    var $panelMainOverview = false;
    var $panelTypesOverview = false;
    var $panelSpeciesOverview = false;
    var $panelButtons = false;

    var $pokePanelButtons = false;
    var $pokePanelLoading = false;


    // DOCUMENT READY

    $(document).ready(function(){

        // Collect devide width and make sure it auto-updates
        var updateDeviceWidth = function(){
            thisDeviceWidth = $(window).width();
            var $mvp = $('#myViewport');
            //console.log('$mvp = ', $mvp);
            if ($mvp.length && thisDeviceWidth <= 534) { $mvp.attr('content','width=534'); }
            else if ($mvp.length){ $mvp.attr('content','width=device-width, initial-scale=1'); }
            };
        $(window).resize(updateDeviceWidth);
        updateDeviceWidth();
        //console.log('thisDeviceWidth = ', thisDeviceWidth);

        // Populate the app details with global values if set
        if (typeof window.PokemonAppLastUpdated !== 'undefined'){ appLastUpdated = window.PokemonAppLastUpdated; }
        if (typeof window.PokemonAppVersionNumber !== 'undefined'){ appVersionNumber = window.PokemonAppVersionNumber; }

        // Request the live version number from the server and wait to compare (refresh if out of date)
        $.get({
            url: 'version.php?return=version_number',
            success: function(currentVersionNumber){
                // If this build is out of date, refresh the whole page
                if (appVersionNumber !== currentVersionNumber){
                    window.location.href = window.location.href+'?'+currentVersionNumber;
                    }
                }
            });

        // Overwrite the default index load value if set
        if (typeof window.PokemonAllowedGenerationsMax !== 'undefined'){ maxIndexKeyToLoad = window.PokemonAllowedGenerationsMax; }
        //console.log('maxIndexKeyToLoad = ', maxIndexKeyToLoad);

        $panelMainOverview = $('.panel .overview.main');
        $panelTypesOverview = $('.panel .overview.types');
        $panelSpeciesOverview = $('.panel .overview.species');
        $panelButtons = $('.panel > .buttons');

        $pokePanelButtons = $panelButtons.find('.new-pokemon');
        $pokePanelLoading = $pokePanelButtons.find('.loading');

        // Preload the type and pokemon indexes
        preloadTypeIndex(function(){
            preloadPokemonIndex(function(){
                buildSimulator();
                });
            });


    });

    // Define a function for starting the simulation and day
    function buildSimulator(){
        //console.log('Building the simulation!');

        // Collect local references to global indexes
        PokemonSpeciesIndex = window.PokemonSpeciesIndex.indexList;
        PokemonTypesIndex = window.PokemonTypesIndex;

        // Optimize the pokemon indexes for faster calculation speeds
        optimizeIndexes();

        // Generate type styles so we can use them on buttons and panels
        generateTypeStyles();

        // Generate visual slots for the zone pokemon to fit into later
        generateZonePokemonSlots();

        // Generate the actual pokemon buttons for the user to select from
        generatePokemonButtons();

        // Generate the click events for all the other panel buttons
        generateButtonPanelEvents();

        // Update the overview with current details before starting
        updateOverview();

    }

    // Define a function for delegating button events for the edit
    function generateButtonPanelEvents(){
        $pokePanelLoading.append('.'); // append loading dot

        // Define the click-event for the speed buttons
        var $speedButtons = $('.day-speed .option[data-speed]', $panelButtons);
        $speedButtons.bind('click', function(e){
            e.preventDefault();
            var $option = $(this);
            var speedValue = parseInt($option.attr('data-speed'));
            $speedButtons.removeClass('active');
            $option.addClass('active');
            dayTimeoutDuration = speedValue;
            if (dayTimeoutStarted){ updateDay(false); }
            });
        $speedButtons.filter('[data-speed="'+dayTimeoutDuration+'"]').click();

        // Define the click-event for the field links
        var $fieldButtons = $('.fields .field', $panelButtons);
        $fieldButtons.bind('click', function(e){
            //console.log('field clicked');
            e.preventDefault();
            var $link = $(this);
            var image = $link.find('img').attr('src');
            $('.details.pokemon', $panelMainOverview).css({backgroundImage:'url('+ image +')'});
            //console.log('changing background to ', image);
            //'.panel .overview.main .details.pokemon';
            $fieldButtons.removeClass('active');
            $link.addClass('active');
            });

        // Define the click-event for the info links
        var $linkButtons = $('.info.links .link[data-tab]', $panelButtons);
        var $linkContainers = $('.info[data-tab]', $panelButtons);
        $linkButtons.bind('click', function(e){
            //console.log('tab clicked');
            e.preventDefault();
            var $link = $(this);
            var tab = $link.attr('data-tab');
            var active = $link.hasClass('active');
            $linkButtons.removeClass('active');
            $linkContainers.addClass('hidden');
            if (!active){
                $link.addClass('active');
                $linkContainers.filter('[data-tab="'+tab+'"]').removeClass('hidden');
                }
            });

    }

    // Define a function for looping through indexes and generating helpful values
    function optimizeIndexes(){
        $pokePanelLoading.append('.'); // append loading dot
        if (!jQuery.isEmptyObject(PokemonSpeciesIndex)){
            for (var token in PokemonSpeciesIndex){

                // Calculate life and breed points now so we don't have to later
                var indexInfo = PokemonSpeciesIndex[token];
                indexInfo.lifePoints = calculateLifePoints(indexInfo['baseStats']);
                indexInfo.breedPoints = calculateBreedPoints(indexInfo['baseStats']);
                indexInfo.influencePoints = calculateInfluencePoints(indexInfo);

                // Generate this pokemon's full gender ratio index
                indexInfo.hasOneGender = false;
                indexInfo.hasNoGender = false;
                var defaultGenderRatio = {male: 0.5, female: 0.5, none: 0};
                if (typeof indexInfo.genderRatio === 'undefined'){ indexInfo.genderRatio = {}; }
                for (var genderToken in defaultGenderRatio){
                    if (typeof indexInfo.genderRatio[genderToken] === 'undefined'){
                        indexInfo.genderRatio[genderToken] = defaultGenderRatio[genderToken];
                        }
                    }
                if (indexInfo.genderRatio.male >= 1){ indexInfo.hasOneGender = true; indexInfo.speciesGender = 'male'; }
                else if (indexInfo.genderRatio.female >= 1){ indexInfo.hasOneGender = true; indexInfo.speciesGender = 'female'; }
                else if (indexInfo.genderRatio.none >= 1){ indexInfo.hasNoGender = true; indexInfo.speciesGender = 'none'; }

                // Check to see if this pokemon has a defined egg partner
                indexInfo.hasEggPartner = false;
                if (typeof indexInfo.eggPartner !== 'undefined'){
                    indexInfo.speciesEggPartner = indexInfo.eggPartner;
                    indexInfo.hasEggPartner = true;
                    }

                }
            }
    }

    // Define a function for actually starting the simulation
    var simulationStarted = false;
    function startSimulation(){

        // Set the start flag to true
        simulationStarted = true;

        $panelMainOverview.addClass('started');

        // Remove any "waiting" classes from pokemon slots
        $('.details.pokemon .list.slots li', $panelMainOverview).removeClass('waiting');

        // Unhide the type and species overview panels
        $panelTypesOverview.removeClass('hidden');
        $panelSpeciesOverview.removeClass('hidden');

        // Unhide the day speed controller, hide the pokemon buttons
        $('.day-speed', $panelButtons).removeClass('hidden');
        $('.new-pokemon', $panelButtons).addClass('hidden');

    }


    // PRELOAD FUNCTIONS

    // Predefine global variables for the preload functions
    var requestedScripts = 0;
    var loadedScripts = 0;

    // Define a function for checking if we're ready to start
    function isReady(){
        return loadedScripts >= requestedScripts;
    }

    // Define a function for preloading the type index from JSON
    function preloadTypeIndex(onReady){
        if (typeof onReady !== 'function'){ onReady = function(){}; }
        requestedScripts++;
        $.getScript('data/pokemon-types-index.min.js?v'+appVersionNumber, function(){
            loadedScripts++;
            $pokePanelLoading.append('.'); // append loading dot
            if (isReady()){ onReady(); }
            });
    }

    // Define a function for preloading the pokemon index from JSON
    function preloadPokemonIndex(onReady, indexKey){
        if (typeof onReady !== 'function'){ onReady = function(){}; }
        if (typeof indexKey === 'undefined'){ indexKey = 0; }
        if (indexKey <= maxIndexKeyToLoad
            && typeof requiredPokemonIndexes[indexKey] !== 'undefined'){
            requestedScripts++;
            var indexToken = requiredPokemonIndexes[indexKey];
            //console.log('loading requiredPokemonIndexes['+indexKey+'] = ', indexToken);
            if (indexToken === ''){ var fileName = 'pokemon-species-index.min.js'; }
            else { var fileName = 'pokemon-species-index_gen'+ indexToken +'.min.js'; }
            filePath = 'data/'+ fileName +'?v'+ appVersionNumber;
            $.getScript(filePath, function(){
                loadedScripts++;
                $pokePanelLoading.append('.'); // append loading dot
                //console.log('loaded filePath = ', filePath);
                return preloadPokemonIndex(onReady, indexKey + 1);
                });
            } else {
            if (isReady()){ onReady(); }
            }
    }


    // GENERATION FUNCTIONS

    // Define a function for pre-generating slots to put pokemon into
    var pokemonRequiredToStart = 10;
    function generateZonePokemonSlots(){
        //console.log('generateZonePokemonSlots()');
        $pokePanelLoading.append('.'); // append loading dot
        var $pokeSlots = $('.pokemon .list.slots', $panelMainOverview);
        //console.log('$pokeSlots = ', $pokeSlots);
        //console.log('thisZoneData.capacity = ', thisZoneData.capacity);
        for (var i = 0; i < thisZoneData.capacity; i++){
            //console.log('append another slot');
            var liClass = 'slot';
            if (i < pokemonRequiredToStart){ liClass += ' waiting'; }
            $pokeSlots.append('<li class="'+liClass+'"></li>');
            }
    }

    // Define a function for generating type styles for display
    function generateTypeStyles(){
        //console.log('generateTypeStyles()');
        $pokePanelLoading.append('.'); // append loading dot
        var styleSheet = '';
        for (var typeToken in PokemonTypesIndex){
            var typeData = PokemonTypesIndex[typeToken];
            var colourHEX = typeData['colour'];
            var colourRGB = convertHexToRgb(colourHEX).join(',');
            styleSheet += '.type.'+ typeToken +' { background-color: #'+ colourHEX +' !important; } \n';
            styleSheet += '.type.'+ typeToken +'2:after { \n';
                styleSheet += 'background-color: rgba('+colourRGB+', 0.9) !important; \n';
                //styleSheet += 'background: -moz-linear-gradient(top, rgba('+ colourRGB +',0) 40%, rgba('+ colourRGB +',1.00) 60%) !important; \n';
                //styleSheet += 'background: -webkit-linear-gradient(top, rgba('+ colourRGB +',0) 40%,rgba('+ colourRGB +',1.00) 60%) !important; \n';
                //styleSheet += 'background: linear-gradient(to right, rgba('+ colourRGB +',0) 40%,rgba('+ colourRGB +',1.00) 60%) !important; \n';
                //styleSheet += 'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00'+ colourHEX +'\', endColorstr=\'#a6'+ colourHEX +'\',GradientType=0 ) !important; \n';
            styleSheet += '} \n';
            }
        $('head').append('<style type="text/css">\n'+ styleSheet +'</style>');
    }

    // Define a function for generating a pokemon's icon image markup
    function getPokemonIcon(token, egg, info){
        if (typeof egg !== 'boolean'){ egg = false; }
        if (typeof info === 'undefined'){ info = {}; }
        var indexInfo = PokemonSpeciesIndex[token];
        var image = '';
        var markup = '';
        if (egg){
            image = 'images/icons/eggs/'+indexInfo['types'][0]+'.png';
            markup += '<img class="sprite" src="'+ image +'" data-token="'+ token +'" />';
            if (typeof indexInfo['types'][1] === 'string'){
                image = 'images/icons/eggs/'+indexInfo['types'][1]+'2.png';
                markup += '<img class="sprite overlay" src="'+ image +'" data-token="'+ token +'" />';
                }
            } else {
            image = 'images/icons/pokemon/';
            if (typeof info['formToken'] !== 'undefined'){ image += indexInfo['number']+'-'+info['formToken']+'.png'; }
            else if (typeof indexInfo['formToken'] !== 'undefined'){ image += indexInfo['number']+'-'+indexInfo['formToken']+'.png'; }
            else { image += indexInfo['number']+'.png'; }
            markup += '<img class="sprite" src="'+ image +'" data-token="'+ token +'" />';
            }
        return markup;
    }

    // Define a function for generating the simulator buttons for each Pokemon
    function generatePokemonButtons(){

        //console.log('generatePokemonButtons()');
        $pokePanelLoading.append('.'); // append loading dot

        // Update the first step of the sim with the amount of required pokemon to start
        $('.new-pokemon > strong', $panelButtons).html('Select '+ pokemonRequiredToStart +' Starter Pokémon');

        // Loop through the index searching for basic pokemon
        var allBasicPokemon = [];
        for (var pokeToken in PokemonSpeciesIndex){

            var pokeInfo = PokemonSpeciesIndex[pokeToken];
            var isBasicPokemon = true;

            // If this is a baby pokemon, it is not basic
            if (typeof pokeInfo.class !== 'undefined'
                && pokeInfo.class === 'baby'){
                isBasicPokemon = false;
                }

            // If this pokemon has an egg parent, it's not basic
            if (typeof pokeInfo.eggParent !== 'undefined'
                && pokeInfo.eggParent.length){
                isBasicPokemon = false;
                }

            // If this pokemon has a pre-evolution, it is not basic
            if (typeof pokeInfo.prevEvolution !== 'undefined'){
                var prevInfo = PokemonSpeciesIndex[pokeInfo.prevEvolution];
                // If the prevo was a baby, we're still safe, otherwise not basic
                if (typeof prevInfo.class !== 'undefined'
                    && prevInfo.class === 'baby'){
                    //isBasicPokemon = true;
                    } else {
                    isBasicPokemon = false;
                    }
                }

            // If this was found to be basic, push to main array
            if (isBasicPokemon){
                allBasicPokemon.push(pokeToken);
                }

            }

        // Sort allowed pokemon by a few criteria
        allBasicPokemon.sort(function(tokenA, tokenB){
            var infoA = PokemonSpeciesIndex[tokenA];
            var infoB = PokemonSpeciesIndex[tokenB];
            var specialA = false;
            var specialB = false;
            if (infoA['class'] === 'legendary' || infoA['class'] === 'mythical' || infoA['class'] === 'ultra-beast'){ specialA = true; }
            if (infoB['class'] === 'legendary' || infoB['class'] === 'mythical' || infoB['class'] === 'ultra-beast'){ specialB = true; }
            if (!specialA && specialB){ return -1; }
            else if (specialA && !specialB){ return 1; }
            else {
                if (tokenA === 'ditto' && tokenB !== 'ditto'){ return -1; }
                else if (tokenA !== 'ditto' && tokenB === 'ditto'){ return 1; }
                else if (tokenA === 'shiny-ditto' && tokenB !== 'shiny-ditto'){ return -1; }
                else if (tokenA !== 'shiny-ditto' && tokenB === 'shiny-ditto'){ return 1; }
                else {

                    if (infoA['number'] < infoB['number']){ return -1; }
                    else if (infoA['number'] > infoB['number']){ return 1; }
                    else {

                        if (infoA['order'] < infoB['order']){ return -1; }
                        else if (infoA['order'] > infoB['order']){ return 1; }
                        else { return 0; }

                        }

                    /*
                    var typeA1 = PokemonTypesIndex[infoA['types'][0]]['order'];
                    var typeB1 = PokemonTypesIndex[infoB['types'][0]]['order'];
                    if (typeA1 < typeB1){ return -1; }
                    else if (typeA1 > typeB1){ return 1; }
                    else {
                        var typeA2 = infoA['types'].length > 1 ? PokemonTypesIndex[infoA['types'][1]]['order'] : -1;
                        var typeB2 = infoB['types'].length > 1 ? PokemonTypesIndex[infoB['types'][1]]['order'] : -1;
                        if (typeA2 < typeB2){ return -1; }
                        else if (typeA2 > typeB2){ return 1; }
                        else {
                            if (infoA['order'] < infoB['order']){ return -1; }
                            else if (infoA['order'] > infoB['order']){ return 1; }
                            else { return 0; }
                            }
                        }
                        */

                    }
                }
            });

        // Loop through and generate buttons for each Pokemon
        var dittoBreaker = false;
        var specialBreaker = false;
        for (var key = 0; key < allBasicPokemon.length; key++){
            var pokemonToken = allBasicPokemon[key];
            //console.log('pokemonToken = ', pokemonToken);
            var pokemonData = PokemonSpeciesIndex[pokemonToken];
            var pokemonTypes = pokemonData.types;
            //console.log('pokemonTypes = ', pokemonTypes);
            if (dittoBreaker === false
                && (pokemonToken !== 'ditto'
                && pokemonToken !== 'shiny-ditto')){
                dittoBreaker = true;
                $pokePanelButtons.append('<hr class="breaker" />');
                } else if (specialBreaker === false
                && (pokemonData['class'] === 'legendary'
                || pokemonData['class'] === 'mythical'
                || pokemonData['class'] === 'ultra-beast')){
                specialBreaker = true;
                $pokePanelButtons.append('<hr class="breaker" />');
                }
            var pokemonIcon = getPokemonIcon(pokemonToken);
            var pokemonName = pokemonData.name;
            pokemonName += ' ('+ (pokemonData.types.join(' / ').toLowerCase().replace(/\b[a-z]/g, function(l) { return l.toUpperCase(); })) +')';
            var $button = $('<button title="'+ pokemonName +'"><span class="gloss"></span><span class="plus">+</span> '+ pokemonIcon + ' <strong>' + pokemonData['name'] +'</strong></button>');
            $button.attr('data-action', 'add');
            $button.attr('data-kind', 'pokemon');
            $button.attr('data-token', pokemonToken);
            $button.addClass('button type');
            if (typeof pokemonTypes[0] === 'string'){ $button.addClass(pokemonTypes[0]); }
            if (typeof pokemonTypes[1] === 'string'){ $button.addClass(pokemonTypes[1]+'2'); }
            $button.appendTo($pokePanelButtons);
            }

        // Remove the loading dotts
        $pokePanelLoading.remove();

        // Attach a click event to the generated buttons
        $('button[data-action]', $pokePanelButtons).bind('click', function(e){
            e.preventDefault();
            if (simulationStarted){ return false; }
            var $button = $(this);
            var action = $button.attr('data-action');
            var kind = $button.attr('data-kind');
            var token = $button.attr('data-token');
            if (action == 'add'){
                if (kind == 'pokemon'){
                    addPokemonToZone(token, false);
                    return true;
                    }
                }
            return false;
            });

    }

    // Define a function for getting the next pokemon ID
    function getNextPokemonID(){
        var newID = 0;
        newID += thisZoneData.currentPokemon.length;
        newID += thisZoneData.faintedPokemon.length;
        return newID;
    }

    // Define a function for adding a new pokemon to a zone
    function addPokemonToZone(pokemonToken, isEgg, reduceCycles){
        //console.log('Adding '+token+' to zone.');
        if (typeof PokemonSpeciesIndex[pokemonToken] === 'undefined'){ return false; }
        if (typeof isEgg !== 'boolean'){ isEgg = true; }
        if (typeof reduceCycles !== 'number'){ reduceCycles = 0; }

        // Create an entry for this species in the global count if not exists
        var addedPokemonSpecies = thisZoneData.addedPokemonSpecies;
        if (typeof addedPokemonSpecies[pokemonToken] === 'undefined'){ addedPokemonSpecies[pokemonToken] = 0; }
        addedPokemonSpecies[pokemonToken]++;

        // Collect index data for pokemon and its egg cycles
        var indexData = PokemonSpeciesIndex[pokemonToken];
        var baseStats = indexData['baseStats'];
        //var eggCycles = isEgg ? Math.floor(indexData.eggCycles / 5) + 1 : 0;
        var eggCycles = isEgg ? indexData.eggCycles : 0;
        if (reduceCycles > 0){
            for (var i = 0; i < reduceCycles; i++){ eggCycles = (eggCycles / 2); }
            eggCycles = Math.ceil(eggCycles);
            }

        // Generate new pokemon data with required parameters
        var newPokemon = {
            order: thisZoneData.currentPokemon.length,
            id: getNextPokemonID(),
            token: pokemonToken,
            types: indexData.types,
            eggCycles: eggCycles,
            growthCycles: 0,
            reachedAdulthood: false,
            };

        // If this pokemon has a randomized forme, decide it now
        if (typeof indexData['randomizeForms'] !== 'undefined'
            && indexData['randomizeForms'] === true
            && typeof indexData['possibleForms'] !== 'undefined'){
            var possibleForms = indexData['possibleForms'];
            var randomForm = possibleForms[Math.floor(Math.random() * possibleForms.length)];
            newPokemon.formToken = randomForm;
            }

        // Push the new pokemon to the list and update the overview
        thisZoneData.currentPokemon.push(newPokemon);
        updateOverview();

        // Push an event to Google Analytics
        if (typeof ga !== 'undefined'){
            if (!simulationStarted || !isEgg){
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'pokemon',
                    eventAction:  'added',
                    eventLabel: pokemonToken + ' added as starter'
                    });
                } else {
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'pokemon',
                    eventAction:  'generated',
                    eventLabel: pokemonToken + ' egg generated'
                    });
                }
            }

    }

    // Define a function for getting an array of zone pokemon matching a filter
    function getZonePokemonByFilter(filterParams, matchMode){
        //console.log('getZonePokemonByFilter(filterParams, matchMode):before', filterParams, matchMode);
        if (typeof filterParams !== 'object'){ return false; }
        else if (jQuery.isEmptyObject(filterParams)){ return false; }
        if (typeof matchMode !== 'string'){ matchMode = 'and'; }
        matchMode = matchMode.toLowerCase();
        if (matchMode !== 'and' && matchMode !== 'or'){ matchMode = 'and'; }
        //console.log('getZonePokemonByFilter(filterParams, matchMode):after', filterParams, matchMode);
        var pokemonMatches = [];
        if (thisZoneData.currentPokemon.length){
            for (var key in thisZoneData.currentPokemon){
                var totalProps = 0;
                var matchedProps = 0;
                var thisPokemon = thisZoneData.currentPokemon[key];
                for (var param in filterParams){
                    totalProps++;
                    if (typeof thisPokemon[param] === 'array' && typeof filterParams[param] !== 'array'){
                        if (thisPokemon[param].indexOf(filterParams[param]) !== -1){
                            matchedProps++;
                            }
                        } else {
                        if (thisPokemon[param] === filterParams[param]){
                            matchedProps++;
                            }
                        }
                    }
                    if ((matchMode === 'and' && matchedProps == totalProps)
                        || (matchMode === 'or' && matchedProps > 0)){
                        pokemonMatches.push(thisPokemon);
                        }
                }
            }
        pokemonMatches.sort(function(pokeA, pokeB){

            if (pokeA.token === 'ditto' && pokeB.token !== 'ditto'){ return -1; }
            else if (pokeA.token !== 'ditto' && pokeB.token === 'ditto'){ return 1; }

            else if (pokeA.token === 'shiny-ditto' && pokeB.token !== 'shiny-ditto'){ return -1; }
            else if (pokeA.token !== 'shiny-ditto' && pokeB.token === 'shiny-ditto'){ return 1; }

            else if (pokeA.eggCycles < pokeB.eggCycles){ return -1; }
            else if (pokeA.eggCycles > pokeB.eggCycles){ return 1; }

            else if (pokeA.order < pokeB.order){ return -1; }
            else if (pokeA.order > pokeB.order){ return 1; }

            else { return 0; }

            });
        return pokemonMatches;
    }

    // Define functions for getting a pokemon by ID, token, type, and more
    function getZonePokemonByID(pokemonID){
        //console.log('getZonePokemonByID(pokemonID)', pokemonID);
        if (typeof pokemonID !== 'number'){ return false; }
        var pokemonMatches = getZonePokemonByFilter({id:pokemonID});
        return pokemonMatches;
    }
    function getZonePokemonByToken(pokemonToken){
        //console.log('getZonePokemonByToken(pokemonToken)', pokemonToken);
        if (typeof pokemonToken !== 'string'){ return false; }
        var pokemonMatches = getZonePokemonByFilter({token:pokemonToken});
        return pokemonMatches;
    }
    function getZonePokemonByType(pokemonType){
        //console.log('getZonePokemonByType(pokemonType)', pokemonType);
        if (typeof pokemonType1 !== 'string'){ return false; }
        var pokemonMatches = getZonePokemonByFilter({type:pokemonType}, 'or');
        return pokemonMatches;
    }

    // Define a function for updating the overview panel and stats
    var updateTimeout = false;
    function updateOverview(onComplete){
        //console.log('----------\nupdateOverview()');
        //console.log('thisZoneData = ', thisZoneData);

        // Compensate for missing onComplete function
        if (typeof onComplete !== 'function'){ onComplete = function(){}; }

        // Define a function for generating current zone type stats
        var currentZoneStats = getCurrentZoneStats();
        thisZoneData.currentStats['types'] = currentZoneStats['types'];
        thisZoneData.currentStats['species'] = currentZoneStats['species'];
        thisZoneData.currentStats['eggs'] = currentZoneStats['eggs'];

        // Loop though and count population by types & species
        var pokeSpeciesActive = {};
        if (thisZoneData.currentPokemon.length){
            for (var key in thisZoneData.currentPokemon){
                var pokemonInfo = thisZoneData.currentPokemon[key];
                if (pokemonInfo.eggCycles > 0){ continue; }
                var indexInfo = PokemonSpeciesIndex[pokemonInfo.token];
                if (typeof pokeSpeciesActive[pokemonInfo.token] == 'undefined'){ pokeSpeciesActive[pokemonInfo.token] = 0; }
                pokeSpeciesActive[pokemonInfo.token] += 1;
                }
            }
        //console.log('pokeSpeciesActive = ', pokeSpeciesActive);
        //console.log('thisZoneData.addedPokemonSpecies = ', thisZoneData.addedPokemonSpecies);
        //console.log('thisZoneData.currentStats[\'eggs\'] = ', thisZoneData.currentStats['eggs']);

        // Calculate diversity score for the current inhabitants
        var totalActiveUnits = 0;
        var totalSpeciesCurrent = 0;
        var totalSpeciesSeen = 0;
        if (!jQuery.isEmptyObject(pokeSpeciesActive)){
            for (token in pokeSpeciesActive){
                totalSpeciesCurrent += 1;
                totalActiveUnits += pokeSpeciesActive[token];
                }
            }
        if (!jQuery.isEmptyObject(thisZoneData.addedPokemonSpecies)){
            for (token in thisZoneData.addedPokemonSpecies){
                var addedCount = thisZoneData.addedPokemonSpecies[token];
                if (typeof thisZoneData.currentStats['eggs'][token] !== 'undefined'){
                    addedCount -= thisZoneData.currentStats['eggs'][token];
                    }
                if (addedCount > 0){ totalSpeciesSeen += 1; }
            }
        }

        // Update the zone details
        $('.zone .name .data', $panelMainOverview).text(thisZoneData.name);
        $('.zone .size .data', $panelMainOverview).text(thisZoneData.size);
        $('.zone .capacity .data', $panelMainOverview).text(thisZoneData.currentPokemon.length + ' / ' + thisZoneData.capacity);
        $('.zone .day .data', $panelMainOverview).text(thisZoneData.day);
        $('.zone .diversity .data', $panelMainOverview).text(' Active: '+totalSpeciesCurrent+' | Overall: '+totalSpeciesSeen+'');


        // Loop though and count population by types & species
        var pokeSpecies = {};
        if (thisZoneData.currentPokemon.length){
            for (var key in thisZoneData.currentPokemon){
                var pokemonInfo = thisZoneData.currentPokemon[key];
                var indexInfo = PokemonSpeciesIndex[pokemonInfo.token];
                if (typeof pokeSpecies[pokemonInfo.token] == 'undefined'){ pokeSpecies[pokemonInfo.token] = 0; }
                pokeSpecies[pokemonInfo.token] += 1;
                }
            }
        //console.log('pokeSpecies(All) = ', pokeSpeciesActive);

        // Sort collected species tokens to keep things together
        var sortedSpeciesTokens = sortSpeciesTokensByOrder(Object.keys(pokeSpecies), true);
        //if (simulationStarted){ var sortedSpeciesTokens = sortSpeciesTokensByOrder(Object.keys(pokeSpecies), true); }
        //else { var sortedSpeciesTokens = Object.keys(pokeSpecies); }

        // Loop through each species and update the pokemon list
        var $pokeDetails = $('.details.pokemon', $panelMainOverview);
        var $pokeWrap = $('.wrap', $pokeDetails);
        var $pokeList = $('.list.pokemon', $pokeWrap);
        //var zoneMaxWidth = (thisZoneData.capacity / 10) * (40 + 5);
        //$pokeWrap.css({width:zoneMaxWidth+'px'});
        $pokeList.empty();

        // Loop through and show all pokemon on the field, with eggs last
        for (var key in sortedSpeciesTokens){
            var token = sortedSpeciesTokens[key];
            var pokeList = getZonePokemonByToken(token);
            for (var key2 in pokeList){
                var pokeInfo = pokeList[key2];

                // Check if the pokemon is in its egg before drawing the sprite
                if (pokeInfo.eggCycles === 0){

                    //console.log('this '+pokeInfo.token+' has hatched, show it (cycles:'+pokeInfo.eggCycles+')');
                    var pokeIcon =  getPokemonIcon(pokeInfo.token, false, pokeInfo);
                    var pokeCount = '<span class="count growth">+'+pokeInfo.growthCycles+'</span>';
                    var itemClass = 'pokemon ';
                    if (pokeInfo.reachedAdulthood === true){ itemClass += 'adult '; }
                    if (pokeInfo.watchFlag === true){ itemClass += 'watched '; }
                    var $listItem = $('<li class="'+ itemClass +'" data-id="'+ pokeInfo.id +'">'+ pokeIcon + pokeCount + '</li>');
                    $listItem.appendTo($pokeList);
                    $listItem.bind('click', zonePokemonClickEvent);

                    } else if (pokeInfo.eggCycles > 0){

                    //console.log('this '+pokeInfo.token+' has not hatched, show it (cycles:'+pokeInfo.eggCycles+')');
                    var pokeIcon =  getPokemonIcon(pokeInfo.token, true, pokeInfo);
                    var pokeCount = '<span class="count egg">-'+pokeInfo.eggCycles+'</span>';
                    var itemClass = 'egg ';
                    if (pokeInfo.watchFlag === true){ itemClass += 'watched '; }
                    var $listItem = $('<li class="'+ itemClass +'" data-id="'+ pokeInfo.id +'">'+ pokeIcon + pokeCount + '</li>');
                    $listItem.appendTo($pokeList);
                    $listItem.bind('click', zonePokemonClickEvent);

                    }

                }
            }

        // Define vars to hold the number of stat slots shown
        var numPositivesShown = 0;
        var numNegativesShown = 0;
        var numActiveShown = 0;
        var numFaintedShown = 0;

        // Update the stats list for the elemental type appeals
        $('.stats .list', $panelTypesOverview).empty();
        if (!jQuery.isEmptyObject(thisZoneData.currentStats['types'])){
            var positiveTypes = {};
            var negativeTypes = {};
            for (typeToken in thisZoneData.currentStats['types']){
                var typeValue = thisZoneData.currentStats['types'][typeToken];
                if (typeValue > 0){ positiveTypes[typeToken] = typeValue; }
                else if (typeValue < 0){ negativeTypes[typeToken] = typeValue; }
                }
            if (!jQuery.isEmptyObject(positiveTypes)){
                var sortedKeys = getSortedKeys(positiveTypes);
                for (var key in sortedKeys){
                    var type = sortedKeys[key];
                    var typeInfo = PokemonTypesIndex[type];
                    var val = Math.floor(positiveTypes[type]);
                    if (val === 0){ continue; }
                    var liClass = 'type '+type+' ';
                    $('.stats .list.positive', $panelTypesOverview).append('<li class="'+liClass+'">'+
                            '<div class="bubble">'+
                                '<span class="name">'+ typeInfo['name'] +'</span> '+
                                '<span class="val">+'+ val +'</span>'+
                            '</div>'+
                        '</li>');
                    numPositivesShown++;
                    }
                }
            if (!jQuery.isEmptyObject(negativeTypes)){
                var sortedKeys = getSortedKeys(negativeTypes);
                sortedKeys.reverse();
                for (var key in sortedKeys){
                    var type = sortedKeys[key];
                    var typeInfo = PokemonTypesIndex[type];
                    var val = Math.floor(negativeTypes[type]);
                    if (val === 0){ continue; }
                    var liClass = 'type '+type+' ';
                    $('.stats .list.negative', $panelTypesOverview).append('<li class="'+liClass+'">'+
                            '<div class="bubble">'+
                                '<span class="name">'+ typeInfo['name'] +'</span> '+
                                '<span class="val">'+ val +'</span>'+
                            '</div>'+
                        '</li>');
                    numNegativesShown++;
                    }
                }
            }


        //thisZoneData.addedPokemonSpecies
        //thisZoneData.faintedPokemonSpecies

        // Collect relevant stats arrays to show in the list
        var addedPokemonSpecies = thisZoneData.addedPokemonSpecies;
        var evolvedPokemonSpecies = thisZoneData.evolvedPokemonSpecies;
        var faintedPokemonSpecies = thisZoneData.faintedPokemonSpecies;
        var currentEggStats = thisZoneData.currentStats['eggs'];

        // Pre-filter a list of pokemon that are specifically active
        var activePokemonSpecies = {};
        if (!jQuery.isEmptyObject(addedPokemonSpecies)){
            var speciesTokens = Object.keys(addedPokemonSpecies);
            for (var key in speciesTokens){
                var poke = speciesTokens[key];
                var pokeInfo = PokemonSpeciesIndex[poke];
                var pokeCount = addedPokemonSpecies[poke];
                //console.log('typeof evolvedPokemonSpecies['+poke+']', typeof evolvedPokemonSpecies[poke], evolvedPokemonSpecies[poke]);
                //console.log('typeof faintedPokemonSpecies['+poke+']', typeof faintedPokemonSpecies[poke], faintedPokemonSpecies[poke]);
                if (typeof evolvedPokemonSpecies[poke] !== 'undefined'){ pokeCount -= evolvedPokemonSpecies[poke]; }
                if (typeof faintedPokemonSpecies[poke] !== 'undefined'){ pokeCount -= faintedPokemonSpecies[poke]; }
                if (typeof currentEggStats[poke] !== 'undefined'){ pokeCount -= currentEggStats[poke]; }
                if (pokeCount < 1){ continue; }
                activePokemonSpecies[poke] = pokeCount;
                }
            }

        // Update the active species list with current numbers
        $('.list.active', $panelSpeciesOverview).empty();
        if (!jQuery.isEmptyObject(activePokemonSpecies)){
            var sortedTokens = getSortedKeys(activePokemonSpecies);
            for (var key in sortedTokens){
                var poke = sortedTokens[key];
                var pokeInfo = PokemonSpeciesIndex[poke];
                var pokeCount = activePokemonSpecies[poke];
                var liClass = 'species ';
                liClass += 'type '+pokeInfo['types'][0]+' ';
                if (typeof pokeInfo['types'][1] !== 'undefined'){ liClass += pokeInfo['types'][1]+'2 '; }
                $('.list.active', $panelSpeciesOverview).append('<li class="'+liClass+'">'+
                        '<div class="bubble">'+
                            '<span class="name">'+ pokeInfo['name'] +'</span> '+
                            '<span class="val">+'+ pokeCount +'</span>'+
                        '</div>'+
                    '</li>');
                numActiveShown++;
                }
            } else {
            $('.list.active', $panelSpeciesOverview).append('<li class="species spacer">'+
                    '<div class="bubble"><span class="name">&nbsp;</span></div>'+
                '</li>');
            }

        // Update the fainted species list with past numbers
        $('.list.fainted', $panelSpeciesOverview).empty();
        if (!jQuery.isEmptyObject(faintedPokemonSpecies)){
            var sortedTokens = getSortedKeys(faintedPokemonSpecies);
            for (var key in sortedTokens){
                var poke = sortedTokens[key];
                var pokeInfo = PokemonSpeciesIndex[poke];
                var pokeCount = faintedPokemonSpecies[poke];
                //console.log('typeof evolvedPokemonSpecies['+poke+']', typeof evolvedPokemonSpecies[poke], evolvedPokemonSpecies[poke]);
                if (typeof evolvedPokemonSpecies[poke] !== 'undefined'){ pokeCount -= evolvedPokemonSpecies[poke]; }
                if (pokeCount < 1){ continue; }
                var liClass = 'species ';
                liClass += 'type '+pokeInfo['types'][0]+' ';
                if (typeof pokeInfo['types'][1] !== 'undefined'){ liClass += pokeInfo['types'][1]+'2 '; }
                $('.list.fainted', $panelSpeciesOverview).append('<li class="'+liClass+'">'+
                        '<div class="bubble">'+
                            '<span class="name">'+ pokeInfo['name'] +'</span> '+
                            '<span class="val">-'+ pokeCount +'</span>'+
                        '</div>'+
                    '</li>');
                numFaintedShown++;
                }
            } else {
            $('.list.fainted', $panelSpeciesOverview).append('<li class="species spacer">'+
                    '<div class="bubble"><span class="name">&nbsp;</span></div>'+
                '</li>');
            }

        // If the simulation has started, make sure there's room to show the lists
        if (simulationStarted && thisDeviceWidth >= 1024){
            var newMinHeight = 135;
            newMinHeight += (25 * Math.max(numActiveShown, numFaintedShown, numPositivesShown, numNegativesShown));
            //console.log('newMinHeight = ', newMinHeight);
            $pokeDetails.css({minHeight:newMinHeight+'px'});
            } else {
            $pokeDetails.css({minHeight:''});
            }

        // If at least one pokemon has been added, we can start the day timer
        if (totalActiveUnits >= pokemonRequiredToStart && !dayTimeoutStarted){
            if (!simulationStarted){ startSimulation(); }
            updateDay(false);
            }

        // Run the onComplete function now
        onComplete();

    }

    // Define a function for removing a pokemon from the field by ID
    function removePokemonByID(id){
        var $pokeWrap = $('.pokemon .wrap', $panelMainOverview);
        var $pokeList = $('.list.pokemon', $pokeWrap);
        var $pokeItem = $('li[data-id="'+ id +'"]', $pokeList);
        // Loop through list of current pokemon looking for ID
        for (var key in thisZoneData.currentPokemon){
            var pokeInfo = thisZoneData.currentPokemon[key];
            if (pokeInfo.id === id){
                // Move this pokemon's data to the fainted array and remove from display
                thisZoneData.faintedPokemon.push(thisZoneData.currentPokemon.splice(key, 1));
                $pokeItem.remove();
                // Create an entry for this species in the global count if not exists
                var faintedPokemonSpecies = thisZoneData.faintedPokemonSpecies;
                if (typeof faintedPokemonSpecies[pokeInfo.token] === 'undefined'){ faintedPokemonSpecies[pokeInfo.token] = 0; }
                faintedPokemonSpecies[pokeInfo.token]++;
                // Update the overview now that it's been removed
                updateOverview();
                // Push an event to the analytics
                if (typeof ga !== 'undefined'){
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'pokemon',
                        eventAction: 'removed',
                        eventLabel: pokeInfo.token + ' removed from zone'
                        });
                    }
                }
            }
    }

    // Define a function for the list-item click event
    function zonePokemonClickEvent(e){
        e.preventDefault();

        //if (!simulationStarted){ return false; }
        var id = parseInt($(this).attr('data-id'));
        for (var key in thisZoneData.currentPokemon){
            var pokeInfo = thisZoneData.currentPokemon[key];
            if (pokeInfo.id === id){
                pokeInfo.watchFlag = pokeInfo.watchFlag !== true ? true : false;
                updateOverview();
                }
            }
        /*
        if (simulationStarted){ return false; }
        var id = parseInt($(this).attr('data-id'));
        for (var key in thisZoneData.currentPokemon){
            var pokeInfo = thisZoneData.currentPokemon[key];
            if (pokeInfo.id === id){
                thisZoneData.faintedPokemon.push(thisZoneData.currentPokemon.splice(key, 1));
                $(this).remove();
                updateOverview();
                }
            }
            */

    }

    // Define a function for getting a snapshot of the zone stats
    function getCurrentZoneStats(){

        var currentZoneStats = {};

        // Loop though and count population by types & species
        var pokeTypes = {};
        var pokeSpecies = {};
        if (thisZoneData.currentPokemon.length){
            for (var key in thisZoneData.currentPokemon){
                var pokemonInfo = thisZoneData.currentPokemon[key];
                if (pokemonInfo.eggCycles > 0){ continue; }
                var indexInfo = PokemonSpeciesIndex[pokemonInfo.token];
                if (typeof pokeSpecies[pokemonInfo.token] == 'undefined'){ pokeSpecies[pokemonInfo.token] = 0; }
                pokeSpecies[pokemonInfo.token] += 1;
                for (var key2 in pokemonInfo.types){
                    var type = pokemonInfo.types[key2];
                    if (typeof pokeTypes[type] == 'undefined'){ pokeTypes[type] = 0; }
                    pokeTypes[type] += 1;
                    }

                }
            }

        // Reset current stats so we can recalculate
        currentZoneStats['species'] = {};
        currentZoneStats['types'] = {};
        currentZoneStats['eggs'] = {};

        // Predefine all the types with zero points
        if (typeof PokemonTypesIndex !== 'undefined'){
            for (var typeToken in PokemonTypesIndex){
                currentZoneStats['types'][typeToken] = 0;
                }
            }

        // Loop through and count pokemon by species
        for (var key in thisZoneData.currentPokemon){
            var currentPoke = thisZoneData.currentPokemon[key];
            var pokeToken = currentPoke.token;
            if (currentPoke.eggCycles === 0){
                if (typeof currentZoneStats['species'][pokeToken] === 'undefined'){ currentZoneStats['species'][pokeToken] = 0; }
                currentZoneStats['species'][pokeToken] += 1;
                } else {
                if (typeof currentZoneStats['eggs'][pokeToken] === 'undefined'){ currentZoneStats['eggs'][pokeToken] = 0; }
                currentZoneStats['eggs'][pokeToken] += 1;
                }
            }

        // Loop through and add base stats for area, if any
        if (thisZoneData.baseStats){
            for (var typeToken in thisZoneData.baseStats){
                var val = thisZoneData.baseStats[type];
                if (typeof currentZoneStats['types'][typeToken] == 'undefined'){ currentZoneStats['types'][typeToken] = 0; }
                currentZoneStats['types'][typeToken] += val;
                }
            }

        // Loop through species and add/subtract appeal points based on type and class
        if (!jQuery.isEmptyObject(currentZoneStats['species'])){
            for (var pokeToken in currentZoneStats['species']){
                var pokeCount = currentZoneStats['species'][pokeToken];
                var pokeIndex = PokemonSpeciesIndex[pokeToken];
                for (var key in pokeIndex.types){

                    var typeToken = pokeIndex.types[key];
                    var typeInfo = PokemonTypesIndex[typeToken];

                    // Add +1 appeal point for this pokemon's type
                    if (typeof currentZoneStats['types'][typeToken] === 'undefined'){ currentZoneStats['types'][typeToken] = 0; }
                    currentZoneStats['types'][typeToken] += pokeCount * pokeIndex.influencePoints * 1.00;

                    // Add +1 appeal point for any type this pokemon is prey to
                    if (typeInfo['matchups']['weaknesses'].length){
                        for (var key in typeInfo['matchups']['weaknesses']){
                            var type = typeInfo['matchups']['weaknesses'][key];
                            if (typeof currentZoneStats['types'][type] === 'undefined'){ currentZoneStats['types'][type] = 0; }
                            currentZoneStats['types'][type] += pokeCount * pokeIndex.influencePoints * 0.5;
                            }
                        }

                    // Add -1 appeal point for any type this pokemon is predator to
                    if (typeInfo['matchups']['strengths'].length){
                        for (var key in typeInfo['matchups']['strengths']){
                            var type = typeInfo['matchups']['strengths'][key];
                            if (typeof currentZoneStats['types'][type] === 'undefined'){ currentZoneStats['types'][type] = 0; }
                            currentZoneStats['types'][type] -= pokeCount * pokeIndex.influencePoints * 0.5;
                            }
                        }

                    }
                }
            }

        //console.log('thisZoneData.currentStats[\'types\'] = ', currentZoneStats['types']);
        return currentZoneStats;

    }

    //

    // Define a timeout function for incrementing the day counter
    var dayTimeout = false;
    var dayTimeoutStarted = false;
    var dayTimeoutDuration = 1000;
    function updateDay(updateCycles){
        if (typeof updateCycles !== 'boolean'){ updateCycles = true; }

        // Generate a snapshot of the zone stats and add to history
        var currentZoneStats = getCurrentZoneStats();
        thisZoneHistory.push(currentZoneStats);

        dayTimeoutStarted = true;
        thisZoneData.day++;
        //console.log('Day #'+thisZoneData.day);

        // Send an analytics event for the amount of time that has passed
        if (typeof ga !== 'undefined'){
            // Send an event for the first day, month, and year
            if (thisZoneData.day === 1){
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'session',
                    eventAction: 'checkpoint',
                    eventLabel: '1st Day'
                    });
                } else if (thisZoneData.day === 30){
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'session',
                    eventAction: 'checkpoint',
                    eventLabel: '1st Month'
                    });
                } else if (thisZoneData.day === 365){
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'session',
                    eventAction: 'checkpoint',
                    eventLabel: '1st Year'
                    });
                }
            // Send an event for each year that passes
            if (thisZoneData.day > 30 && thisZoneData.day % 30 === 0){
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'session',
                    eventAction: 'checkpoint',
                    eventLabel: Math.floor(thisZoneData.day / 30) + ' Months'
                    });
                }
            // Send an event for each year that passes
            if (thisZoneData.day > 365 && thisZoneData.day % 365 === 0){
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'session',
                    eventAction: 'checkpoint',
                    eventLabel: Math.floor(thisZoneData.day / 365)+ ' Years'
                    });
                }


            if (thisZoneData.day === 1 || thisZoneData.day % 10 == 0){
                if (thisZoneData.day % 10 == 0){
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'session',
                        eventAction: 'checkpoint',
                        eventLabel: 'days-passed',
                        eventValue: thisZoneData.day
                        });
                    }
                }
            }

        if (updateCycles){
            updateGrowthCycles();
            updateEggCycles();
            updateBreedingCycles();
            updateBattleCycles();
            }

        //var $timer = $('.details.zone .timer .complete', $panelMainOverview);
        if (dayTimeout !== false){ clearTimeout(dayTimeout); }
        //$timer.css({width:'0%'});
        updateOverview(function(){
            //console.log('updateOverview(function(){...})');
            //console.log('|- thisZoneData.currentPokemon.length = ', thisZoneData.currentPokemon.length);
            //console.log('|- thisZoneData.all = ', thisZoneData);
            if (thisZoneData.currentPokemon.length > 0){
                dayTimeout = setTimeout(function(){ updateDay(); }, dayTimeoutDuration);
                //$timer.animate({width:'100%'},dayTimeoutDuration,'linear',function(){ $(this).css({width:'0%'}); });
                } else {
                updateOverview();
                }
            });

    }

    // Define a function for updating growth cycles
    function updateGrowthCycles(){

        // Do not update egg cycles on day zero
        if (thisZoneData.day === 0){ return false; }

        // Collect references to current zone stats
        var currentTypeStats = thisZoneData.currentStats['types'];
        var currentSpeciesStats = thisZoneData.currentStats['species'];

        // Define a variable to hold (temporary) allowed trade evolutions this cycle
        var allowedTradeEvolutions = {};

        // Predefine a variable for colour stats in case we need them
        var currentColourStats = {};
        var currentVivillonPattern = '';

        // Define a function for calculating the current Vivillon pattern
        function calculateCurrentVivillonPattern(){
            //console.log('calculateCurrentVivillonPattern()');

            // If there the Vivillon line on the field, pre-calculate current colour stats
            if (typeof PokemonSpeciesIndex['vivillon'] !== 'undefined'
                && currentVivillonPattern === ''){

                // Precalculate current colour stats by looping through all pokemon
                var currentColourStats = {};
                if (thisZoneData.currentPokemon.length){
                    for (var key in thisZoneData.currentPokemon){
                        var pokemonInfo = thisZoneData.currentPokemon[key];
                        if (pokemonInfo.eggCycles > 0){ continue; }
                        var indexInfo = PokemonSpeciesIndex[pokemonInfo.token];
                        if (typeof indexInfo.color !== 'undefined'){
                            if (typeof currentColourStats[indexInfo.color] === 'undefined'){ currentColourStats[indexInfo.color] = 0; }
                            currentColourStats[indexInfo.color] += 1;
                            }
                        if (typeof indexInfo.colors !== 'undefined'){
                            for (var i = 0; i < indexInfo.colors.length; i++){
                                var color = indexInfo.colors[i];
                                if (typeof currentColourStats[color] === 'undefined'){ currentColourStats[color] = 0; }
                                var incVal = 1 - (i * 0.25);
                                if (incVal > 0){ currentColourStats[color] += incVal; }
                                }
                            }
                        }
                    }
                //console.log('currentColourStats = ', currentColourStats);

                // Loop through and calculate likelihood of each pattern
                var possibleFormsColors = PokemonSpeciesIndex['vivillon']['possibleFormsColors'];
                var possibleFormsChances = {};
                for (var formToken in possibleFormsColors){
                    var formChance = 0;
                    var formColors = possibleFormsColors[formToken];
                    for (var i = 0; i < formColors.length; i++){
                        var formColor = formColors[i];
                        if (typeof currentColourStats[formColor] !== 'undefined'){
                            formChance += currentColourStats[formColor];
                            }
                        }
                    possibleFormsChances[formToken] = formChance;
                    }
                var possibleFormRanking = getSortedKeys(possibleFormsChances);
                //console.log('possibleFormsColors = ', possibleFormsColors);
                //console.log('possibleFormsChances = ', possibleFormsChances);
                //console.log('possibleFormRanking = ', possibleFormRanking);

                // Update the current pattern var with the top result
                currentVivillonPattern = possibleFormRanking[0];
                //console.log('currentVivillonPattern = ', currentVivillonPattern);

                }

        }

        // First, loop through all the non-egg pokemon and increment growth cycle
        if (thisZoneData.currentPokemon.length){
            for (var key in thisZoneData.currentPokemon){

                var pokemonInfo = thisZoneData.currentPokemon[key];
                var indexInfo = PokemonSpeciesIndex[pokemonInfo.token];
                //console.log('-----\nChecking evolution data for ' + pokemonInfo.token, pokemonInfo, indexInfo);

                // If pokemon is still an egg, skip growth cycles for now
                if (pokemonInfo.eggCycles > 0){ continue; }

                // Only increment growth cycles if still growing, else start decrementing
                if (pokemonInfo.reachedAdulthood === false){
                    pokemonInfo.growthCycles += 1;
                    } else if (pokemonInfo.reachedAdulthood === true){
                    pokemonInfo.growthCycles -= Math.ceil(indexInfo.lifePoints * 0.10);
                    }

                // If this Pokemon has any evolutions, check to see if should be triggered
                if (typeof indexInfo.nextEvolutions !== 'undefined'
                    && indexInfo.nextEvolutions.length){

                    // Count the number of active species related to this pokemon
                    var numRelatedPokemon = countRelatedZonePokemon(pokemonInfo.token);
                    var numSamePokemon = typeof currentSpeciesStats[pokemonInfo.token] !== 'undefined' ? currentSpeciesStats[pokemonInfo.token] : 1;
                    //console.log('|- numRelatedPokemon = ', numRelatedPokemon);
                    //console.log('|- numSamePokemon = ', numSamePokemon);

                    // Check if this pokemon is happy based on field multipliers that match its type(s)
                    var pokemonHappiness = 0;
                    if (currentTypeStats[pokemonInfo.types[0]] > 0){ pokemonHappiness += Math.ceil(currentTypeStats[pokemonInfo.types[0]] / 10); }
                    else if (currentTypeStats[pokemonInfo.types[0]] < 0){ pokemonHappiness -= Math.ceil(currentTypeStats[pokemonInfo.types[0]] / 5); }
                    if (typeof pokemonInfo.types[1] !== 'undefined'){
                        if (currentTypeStats[pokemonInfo.types[1]] > 0){ pokemonHappiness += Math.ceil(currentTypeStats[pokemonInfo.types[1]] / 10); }
                        else if (currentTypeStats[pokemonInfo.types[1]] < 0){ pokemonHappiness -= Math.ceil(currentTypeStats[pokemonInfo.types[1]] / 5); }
                        }
                    //console.log('|- pokemonHappiness = ', pokemonHappiness);

                    // Check to see if this pokemon is allowed to evolve by trade this cycle
                    var allowTradeEvolution = false;
                    if (typeof allowedTradeEvolutions[pokemonInfo.token] === 'undefined'){
                        allowTradeEvolution = numSamePokemon % 2 == 0 ? true : false;
                        allowedTradeEvolutions[pokemonInfo.token] = allowTradeEvolution;
                        } else {
                        allowTradeEvolution = allowedTradeEvolutions[pokemonInfo.token];
                        }
                    //console.log('|- allowTradeEvolution = ', allowTradeEvolution);

                    // Define a function for testing if an evolution method is true
                    function calculateEvolutionChance(pokemonInfo, methodToken, methodValue){
                        //console.log('|-- calculateEvolutionChance(pokemonInfo, methodToken, methodValue)', pokemonInfo, methodToken, methodValue);

                        // Calculate chance value in case we need it
                        var chanceValue = Math.random();

                        // Level-up evolutions are triggered by current growth cycles alone
                        if (methodToken === 'level-up'
                            && pokemonInfo.growthCycles >= methodValue){
                            return 1;
                            }

                        // Happiness-based evolutions are triggered by positive type appeal values
                        if (methodToken === 'happiness'){

                            if (methodValue === 'high'
                                && pokemonInfo.growthCycles >= 10
                                && pokemonHappiness >= 2){
                                return 1 + (pokemonHappiness * 10);

                                } else if (methodValue === 'max'
                                && pokemonInfo.growthCycles >= 20
                                && pokemonHappiness >= 4){
                                return 2 + (pokemonHappiness * 10);

                                } else if (methodValue === 'low'
                                && pokemonInfo.growthCycles >= 30
                                && pokemonHappiness < 0){
                                return 3 + ((pokemonHappiness * -1) * 10);

                                }

                            }

                        // Affection-based evolutions trigger when this pokemon is surrounded by related species
                        if (methodToken === 'affection'){

                            if (methodValue === 'high'
                                && pokemonInfo.growthCycles >= 10
                                && numRelatedPokemon >= 5){
                                return 1 + (numRelatedPokemon * 10);

                                } else if (methodValue === 'max'
                                && pokemonInfo.growthCycles >= 20
                                && numRelatedPokemon >= 10){
                                return 2 + (numRelatedPokemon * 10);

                                } else if (methodValue === 'low'
                                && pokemonInfo.growthCycles >= 30
                                && numRelatedPokemon < 5){
                                return 3 + ((10 - numRelatedPokemon) * 10);

                                }

                            }

                        // Type-appeal/crisis evolutions trigger when the relevant field stats are especially high
                        if (methodToken === 'type-appeal'
                            || methodToken === 'type-surge'){
                            var appealLevel = methodToken === 'type-surge' ? 2 : 1;
                            var appealTypes = typeof methodValue === 'string' ? [methodValue] : methodValue;
                            var returnValue = 0;
                            for (var i = 0; i < appealTypes.length; i++){
                                var appealType = appealTypes[i];
                                if (pokemonInfo.growthCycles >= (appealLevel * 10)
                                    && currentTypeStats[appealType] >= (appealLevel * 20)){
                                    returnValue += 1 + ((currentTypeStats[appealType] * 5) * appealLevel);
                                    }
                                }
                            if (returnValue > 0){ return returnValue; }
                            }

                        // Type-warning/crisis evolutions trigger when the relevant field stats are especially low
                        if (methodToken === 'type-warning'
                            || methodToken === 'type-crisis'){
                            var appealLevel = methodToken === 'type-crisis' ? 2 : 1;
                            var appealTypes = typeof methodValue === 'string' ? [methodValue] : methodValue;
                            var returnValue = 0;
                            for (var i = 0; i < appealTypes.length; i++){
                                var appealType = appealTypes[i];
                                if (pokemonInfo.growthCycles >= (appealLevel * 10)
                                    && currentTypeStats[appealType] <= ((appealLevel * 5) * -1)){
                                    returnValue += 1 + (((currentTypeStats[appealType] * -1) * 10) * appealLevel);
                                    }
                                }
                            if (returnValue > 0){ return returnValue; }
                            }

                        // Item, stone, and location-based evolutions trigger based on growth cycles (plus method2)
                        if ((methodToken === 'evolution-item'
                                || methodToken === 'evolution-stone'
                                || methodToken === 'evolution-move'
                                || methodToken === 'evolution-location')
                            && pokemonInfo.growthCycles >= 20){
                            return 1 + Math.min(19, (pokemonInfo.growthCycles - 20));
                            }

                        // Trade-based evolutions trigger only when there's an even number of this exact species active
                        if (methodToken === 'trade'
                            && pokemonInfo.growthCycles >= 30
                            && allowTradeEvolution){
                            return 1 + Math.min(29, (pokemonInfo.growthCycles - 20));
                            }

                        // Chance-based evolutions are triggered by random simulator values
                        if (methodToken === 'chance'
                            && (chanceValue < (methodValue / 100))){
                            return 1 + Math.ceil((1 - chanceValue) * 100);
                            }

                        // Extinction-based evolutions trigger when this pokemon is the last  of its species
                        if ((methodToken === 'extinction')
                            && pokemonInfo.growthCycles >= 30
                            && numRelatedPokemon == 1){
                            return 1 + ((thisZoneData.currentPokemon.length - 1) * 10);
                            }

                        // Burst evolutions may trigger automatically when this pokemon reaches adulthood
                        if (methodToken === 'burst-evolution'
                            && pokemonInfo.reachedAdulthood === true){
                            return 100;
                            }

                        // Mega evolutions always trigger automatically when this pokemon reaches adulthood
                        if (methodToken === 'mega-evolution'
                            && pokemonInfo.reachedAdulthood === true){
                            return 100;
                            }

                        // Otherwise, return zero as nothing was triggered
                        return 0;

                    }

                    // Create an array for queued evolutions (in case many) and start looping to check each
                    var queuedEvolutions = [];
                    for (var i in indexInfo.nextEvolutions){

                        // Collect the details of the next evolution
                        var nextEvolution = indexInfo.nextEvolutions[i];
                        var nextEvolutionInfo = PokemonSpeciesIndex[nextEvolution.species];
                        //console.log('|- Checking indexInfo.nextEvolutions['+i+'] = ', nextEvolution, nextEvolutionInfo);

                        // Preset both method flags to false, we can change later
                        var triggeredMethod1 = false;
                        var triggeredMethod2 = false;

                        // Define a variable to hold the trigger chance value
                        var triggeredChance = 0;

                        // Check to see if this pokemon's method-1 criteria have been met
                        if (typeof nextEvolution.method !== 'undefined'
                            && typeof nextEvolution.value !== 'undefined'){
                            var chanceValue1 = calculateEvolutionChance(pokemonInfo, nextEvolution.method, nextEvolution.value);
                            //console.log('|-- chanceValue1 = ', chanceValue1);
                            if (chanceValue1 > 0){
                                triggeredMethod1 = true;
                                triggeredChance += chanceValue1;
                                if (nextEvolution.method === 'mega-evolution'){
                                    triggeredMethod2 = true;
                                    }
                                }
                        }
                        //console.log('|-- triggeredMethod1 = ', triggeredMethod1);
                        //console.log('|-- triggeredChance = ', triggeredChance);

                        // Check to see if this pokemon's method-2 criteria have been met
                        if (triggeredMethod1
                            && typeof nextEvolution.method2 !== 'undefined'
                            && typeof nextEvolution.value2 !== 'undefined'){
                            var chanceValue2 = calculateEvolutionChance(pokemonInfo, nextEvolution.method2, nextEvolution.value2);
                            //console.log('|-- chanceValue2 = ', chanceValue2);
                            if (chanceValue2 > 0){
                                triggeredMethod2 = true;
                                triggeredChance += chanceValue2;
                                }
                            } else {
                            triggeredMethod2 = true;
                            }
                        //console.log('|-- triggeredMethod2 = ', triggeredMethod2);
                        //console.log('|-- triggeredChance = ', triggeredChance);

                        // If both methods were triggered, we can queue this evolution
                        if (triggeredMethod1 === true
                            && triggeredMethod2 === true){
                            queuedEvolutions.push({
                                token: nextEvolution.species,
                                types: nextEvolutionInfo.types,
                                chance: triggeredChance
                                });
                            }

                        }

                    // If evolutions were queues, sort by chance and pick first
                    if (queuedEvolutions.length > 0){

                        // Sort the evolution possibilities by highest chance, then pick first
                        //console.log('queuedEvolutions for '+pokemonInfo.token+' = ', queuedEvolutions);
                        queuedEvolutions.sort(function(a, b){
                            if (a.chance > b.chance){ return -1; }
                            else if (a.chance < b.chance){ return 1; }
                            else { return 0; }
                            });
                        var selectedEvolution = queuedEvolutions[0];
                        var selectedEvolutionData = PokemonSpeciesIndex[selectedEvolution.token];
                        //console.log('selectedEvolution = ', selectedEvolution);
                        //console.log('selectedEvolutionData = ', selectedEvolutionData);

                        // Create an entry for this species and in the global count if not exists
                        var evolvedPokemonSpecies = thisZoneData.evolvedPokemonSpecies;
                        if (typeof evolvedPokemonSpecies[pokemonInfo.token] === 'undefined'){ evolvedPokemonSpecies[pokemonInfo.token] = 0; }
                        evolvedPokemonSpecies[pokemonInfo.token]++;

                        // And then apply the evolution to the pokemon's data
                        var backupToken = pokemonInfo.token;
                        pokemonInfo.token = selectedEvolution.token;
                        pokemonInfo.types = selectedEvolution.types;

                        // If the selected evolution was Vivillon, we need to calculate its form
                        if (selectedEvolution.token === 'vivillon'){
                            calculateCurrentVivillonPattern();
                            pokemonInfo.formToken = currentVivillonPattern;
                            }
                        // Otherwise if this pokemon has a randomized form, decide it now
                        else if (typeof selectedEvolutionData['randomizeForms'] !== 'undefined'
                            && selectedEvolutionData['randomizeForms'] === true
                            && typeof selectedEvolutionData['possibleForms'] !== 'undefined'
                            && typeof pokemonInfo.formToken === 'undefined'){
                            var possibleForms = selectedEvolutionData['possibleForms'];
                            var randomForm = possibleForms[Math.floor(Math.random() * possibleForms.length)];
                            pokemonInfo.formToken = randomForm;
                            }

                        // Create an entry for this species in the global count if not exists
                        var addedPokemonSpecies = thisZoneData.addedPokemonSpecies;
                        if (typeof addedPokemonSpecies[selectedEvolution.token] === 'undefined'){ addedPokemonSpecies[selectedEvolution.token] = 0; }
                        addedPokemonSpecies[selectedEvolution.token]++;

                        // Push an event to the analytics
                        if (typeof ga !== 'undefined'){
                            ga('send', {
                                hitType: 'event',
                                eventCategory: 'pokemon',
                                eventAction: 'evolved',
                                eventLabel: backupToken+' evolved into '+selectedEvolution.token
                                });
                            }

                        }
                    }

                // If this Pokemon is not an adult has grown to its max life points, it's an adult now
                if (pokemonInfo.growthCycles >= indexInfo.lifePoints
                    && pokemonInfo.reachedAdulthood === false){
                    pokemonInfo.reachedAdulthood = true;
                    }

                // If this Pokemon is an adult and has reached zero growth cycles, it's time to die
                if (pokemonInfo.growthCycles <= 0
                    && pokemonInfo.reachedAdulthood === true){

                    // Check if this pokemon has parent bond ability
                    var babyToken = false;
                    if (indexInfo.abilities[0] === 'parental-bond'){
                        var babyToken = 'baby-' + indexInfo.token.replace(/^[a-z]+\-/i, '');
                        if (typeof PokemonSpeciesIndex[babyToken] !== 'undefined'){
                            var babyInfo = PokemonSpeciesIndex[babyToken];
                            } else {
                            babyToken = false;
                            }
                        }

                    // Remove the Pokemon from the field by its ID
                    removePokemonByID(pokemonInfo.id);

                    // Create the parental bond baby if applicable
                    if (babyToken !== false){
                        addPokemonToZone(babyToken, false);
                        }

                    }

                }
            }

    }

    // Define a function for updating egg cycles
    function updateEggCycles(){

        // Do not update egg cycles on day zero
        if (thisZoneData.day === 0){ return false; }

        // First, loop through any eggs and decrement their cycles by one
        if (thisZoneData.currentPokemon.length){
            for (var key in thisZoneData.currentPokemon){
                var pokemonInfo = thisZoneData.currentPokemon[key];
                if (pokemonInfo.eggCycles > 0){ pokemonInfo.eggCycles--; }
                if (pokemonInfo.eggCycles === 0
                    && pokemonInfo.growthCycles === 0){
                    if (typeof ga !== 'undefined'){
                        ga('send', {
                            hitType: 'event',
                            eventCategory: 'pokemon',
                            eventAction:  'hatched',
                            eventLabel: pokemonInfo.token + ' hatched from egg'
                            });
                        }
                    }
                }
            }

    }

    // Define a function for updating breeding cycles and eggs
    function updateBreedingCycles(){

        // If we're at or over capacity, no more breeding action should take place
        if (thisZoneData.currentPokemon.length >= thisZoneData.capacity){ return false; }

        // Loop though and count population by types & species (do not count eggs)
        var pokeTypes = {};
        var pokeSpecies = {};
        var pokeEggs = {};
        if (thisZoneData.currentPokemon.length){
            for (var key in thisZoneData.currentPokemon){
                var pokemonInfo = thisZoneData.currentPokemon[key];
                // Add to species of egg array based on remaining cycles
                if (pokemonInfo.eggCycles === 0){
                    if (typeof pokeSpecies[pokemonInfo.token] == 'undefined'){ pokeSpecies[pokemonInfo.token] = 0; }
                    pokeSpecies[pokemonInfo.token] += 1;
                    } else if (pokemonInfo.eggCycles >= 1){
                    if (typeof pokeEggs[pokemonInfo.token] == 'undefined'){ pokeEggs[pokemonInfo.token] = 0; }
                    pokeEggs[pokemonInfo.token] += 1;
                    }
                // Increment the types array regardless of egg state
                for (var key2 in pokemonInfo.type){
                    var type = pokemonInfo.type[key2];
                    if (typeof pokeTypes[type] == 'undefined'){ pokeTypes[type] = 0; }
                    pokeTypes[type] += 1;
                    }
                }
            }

        // Loop through species and check to see if any should breed
        if (!jQuery.isEmptyObject(pokeSpecies)){

            // Collect a list of species tokens sorted by speed stat
            //var sortedSpeciesTokens = sortSpeciesTokensBySpeed(Object.keys(pokeSpecies));
            var sortedSpeciesTokens = sortSpeciesTokensByBreedPoints(Object.keys(pokeSpecies));
           //console.log('----------\nChecking breeding options for sortedSpeciesTokens', sortedSpeciesTokens);

            // Pre-count the number of Ditto on the field
            var existingDitto = typeof pokeSpecies['ditto'] !== 'undefined' ? pokeSpecies['ditto'] : 0;
            var existingShinyDitto = 0;
            if (typeof pokeSpecies['shiny-ditto'] !== 'undefined'){
                existingDitto += pokeSpecies['shiny-ditto'];
                existingShinyDitto += pokeSpecies['shiny-ditto'];
                }

            // First generate an array of eggs to add (by species) with counts
            var eggsToAddIndex = {};
            var eggsToAddCount = 0;
            for (key in sortedSpeciesTokens){

                // Collect the token and index info for the species
                var pokeToken = sortedSpeciesTokens[key];
                //console.log('----------\nChecking breeding options for sortedSpeciesTokens['+key+'] ('+pokeToken+' x'+pokeSpecies[pokeToken]+')');
                var indexInfo = PokemonSpeciesIndex[pokeToken];
               //console.log('|- ['+ pokeToken +'] indexInfo.lifePoints = ' + indexInfo.lifePoints + ' | indexInfo.breedPoints = ' + indexInfo.breedPoints+ ' | indexInfo.baseStats = ', indexInfo.baseStats);

                // Skip ahead if this species is incapable of breeding
                if (indexInfo.eggGroups.indexOf('ditto') !== -1){
                    //console.log(pokeToken+' cannot breed with itself');
                    continue;
                    } else if (indexInfo.eggGroups.indexOf('undiscovered') !== -1){
                    //console.log(pokeToken+' cannot breed at all');
                    continue;
                    }

                var baseEvolution = pokemonGetBaseEvolution(pokeToken, true, false);
                var baseEvolutionInfo = PokemonSpeciesIndex[baseEvolution];

                //console.log('pokeToken('+pokeToken+')A | baseEvolution('+baseEvolution+')');

                // Define new unit count at zero with an empty token
                var newUnits = 0;
                var newUnitsToken = pokeToken;

                // If this species has a defined egg species, overwrite new unit token
                if (typeof indexInfo.eggSpecies !== 'undefined'){
                    newUnitsToken = indexInfo.eggSpecies;
                    }

                // Check to see if this is legendary
                var isLegendary = false;
                if (typeof indexInfo.class !== 'undefined'
                    && (indexInfo.class === 'legendary' || indexInfo.class === 'mythical')){
                    isLegendary = true;
                    }

                // If this species is NOT single-gender, we can proceed normally, else there's more work
                if (!isLegendary && !indexInfo.hasOneGender){

                    // No egg partner exists so we can proceed normally
                    //console.log('|- '+baseEvolution+' has no egg partner, proceed normally');

                    var existingUnits = pokeSpecies[pokeToken];
                    var currentEggs = typeof pokeEggs[baseEvolution] !== 'undefined' ? pokeEggs[baseEvolution] : 0;
                    //console.log('|- existingUnits('+pokeToken+'/'+existingUnits+') | currentEggs('+baseEvolution+'/'+currentEggs+')');

                    // Only breed if there are enough pairs to do so (including Ditto)
                    if ((existingUnits + existingDitto) >= 2){
                        newUnits = Math.floor((existingUnits + existingDitto) / 2);
                        //console.log('|- newUnits('+newUnits+') | currentEggs('+currentEggs+')');
                        // Ensure we do not create more units then there already are eggs
                        if (newUnits > currentEggs){
                            newUnits -= currentEggs;
                            //console.log('(!) newUnits -= currentEggs = newUnits('+newUnits+')');
                            } else {
                            newUnits = 0;
                            //console.log('(!) eggLimit reached | newUnits = 0');
                            }
                        }

                    }
                // This single or no-gendered pokemon has an egg partner so we can hook it up with that or ditto
                else if (!isLegendary && indexInfo.hasOneGender && indexInfo.hasEggPartner){

                    // An egg partner exists so special pairings are required
                    if (typeof indexInfo['eggPartner'] === 'undefined' !== 'undefined'){
                        var eggPartner = indexInfo['eggPartner'];
                        //console.log('|- '+pokeToken+' has an egg partner in '+eggPartner+', check pairs');
                        } else if (typeof baseEvolutionInfo['eggPartner'] === 'undefined' !== 'undefined'){
                        var eggPartner = baseEvolutionInfo['eggPartner'];
                        //console.log('|- '+baseEvolution+' has an egg partner in '+eggPartner+', check pairs');
                        }

                    var baseUnits = pokeSpecies[pokeToken];
                    var baseEggs = typeof pokeEggs[baseEvolution] !== 'undefined' ? pokeEggs[baseEvolution] : 0;
                    //console.log('|- baseUnits('+pokeToken+'/'+baseUnits+') | baseEggs('+baseEvolution+'/'+baseEggs+')');

                    var partnerUnits = typeof pokeSpecies[eggPartner] !== 'undefined' ? pokeSpecies[eggPartner] : 0;
                    var partnerEggs = typeof pokeEggs[eggPartner] !== 'undefined' ? pokeEggs[eggPartner] : 0;
                    //console.log('|- partnerUnits('+eggPartner+'/'+partnerUnits+') | partnerEggs('+eggPartner+'/'+partnerEggs+')');

                    var baseToPartnerPairs = Math.min(baseUnits, partnerUnits);
                    var leftOverBaseUnits = baseToPartnerPairs < baseUnits ? baseUnits - baseToPartnerPairs : 0;
                    var baseToDittoPairs = existingDitto > 0 ? Math.max(leftOverBaseUnits, existingDitto) : 0;
                    //console.log('|- baseToPartnerPairs('+baseToPartnerPairs+') | leftOverBaseUnits('+leftOverBaseUnits+') | baseToDittoPairs('+baseToDittoPairs+')');

                    newUnits = baseToPartnerPairs + baseToDittoPairs;
                    var currentEggs = baseEggs + partnerEggs;
                    //console.log('|- newUnits('+newUnits+') | currentEggs('+currentEggs+')');

                    // If partner pokemon have already produced eggs, include in this count
                    if (typeof eggsToAddIndex[pokeToken] !== 'undefined'){
                        currentEggs += eggsToAddIndex[pokeToken];
                        //console.log('|- currentEggs += eggsToAddIndex['+pokeToken+'] | currentEggs('+currentEggs+')');
                        }
                    if (typeof eggsToAddIndex[eggPartner] !== 'undefined'){
                        currentEggs += eggsToAddIndex[eggPartner];
                        //console.log('|- currentEggs += eggsToAddIndex['+eggPartner+'] | currentEggs('+currentEggs+')');
                        }

                    // Ensure we do not create more units then there already are eggs
                    if (newUnits > currentEggs){
                        newUnits -= currentEggs;
                        //console.log('(!) newUnits -= currentEggs = newUnits('+newUnits+')');
                        } else {
                        newUnits = 0;
                        //console.log('(!) eggLimit reached | newUnits = 0');
                        }

                    }
                // This single-gendered pokemon has no defined egg partner so we can only hook up with ditto
                else if ((isLegendary || indexInfo.hasOneGender) && !indexInfo.hasEggPartner){

                    var baseUnits = pokeSpecies[pokeToken];
                    var currentEggs = typeof pokeEggs[baseEvolution] !== 'undefined' ? pokeEggs[baseEvolution] : 0;
                    if (typeof indexInfo.eggSpecies !== 'undefined'
                        && typeof pokeEggs[indexInfo.eggSpecies] !== 'undefined'){
                        currentEggs += pokeEggs[indexInfo.eggSpecies];
                        baseUnits += typeof pokeSpecies[indexInfo.eggSpecies] !== 'undefined' ? pokeSpecies[indexInfo.eggSpecies] : 0;
                        } else if (typeof indexInfo.eggParent !== 'undefined'
                        && typeof pokeEggs[indexInfo.eggParent] !== 'undefined'){
                        currentEggs += pokeEggs[indexInfo.eggParent];
                        baseUnits += typeof pokeSpecies[indexInfo.eggParent] !== 'undefined' ? pokeSpecies[indexInfo.eggParent] : 0;
                        }
                    var newUnits = existingDitto > 0 ? Math.max(baseUnits, existingDitto) : 0;
                    //console.log('|- baseUnits('+pokeToken+'/'+baseUnits+') | currentEggs('+baseEvolution+'/'+currentEggs+') | newUnits('+newUnits+')');

                    // If partner pokemon have already produced eggs, include in this count
                    if (typeof eggsToAddIndex[pokeToken] !== 'undefined'){
                        currentEggs += eggsToAddIndex[pokeToken];
                        //console.log('|- currentEggs += eggsToAddIndex['+pokeToken+'] | currentEggs('+currentEggs+')');
                        }

                    // Ensure we do not create more units then there already are eggs
                    if (newUnits > currentEggs){
                        newUnits -= currentEggs;
                        //console.log('(!) newUnits -= currentEggs = newUnits('+newUnits+')');
                        } else {
                        newUnits = 0;
                        //console.log('(!) eggLimit reached | newUnits = 0');
                        }

                    }

                // If new units should be made, loop through and do it now
                if (newUnits > 0){
                    //console.log('---\nAdding new units...');
                    for (var i = 0; i < newUnits; i++){
                        var pokeEggSpecies = pokemonGetBaseEvolution(newUnitsToken, true, true);
                        //console.log('|- pokemonGetBaseEvolution('+newUnitsToken+', true, true) = ', pokeEggSpecies);
                        if (typeof eggsToAddIndex[pokeEggSpecies] === 'undefined'){ eggsToAddIndex[pokeEggSpecies] = 0; }
                        eggsToAddIndex[pokeEggSpecies] += 1;
                        eggsToAddCount += 1;
                        }
                    }

                }

            // Loop through through and generate required eggs, in order,
            // one per species, until done or at capacity
           //console.log('----------\nLoop through through and generate required eggs...');
            var eggsAddedCount = 0;
            while ((eggsAddedCount < eggsToAddCount)
                && (thisZoneData.currentPokemon.length < thisZoneData.capacity)){
               //console.log('(eggsAddedCount('+eggsAddedCount+') < eggsToAddCount('+eggsToAddCount+')) && (thisZoneData.currentPokemon.length('+thisZoneData.currentPokemon.length+') < thisZoneData.capacity('+thisZoneData.capacity+'))');
               //console.log('eggsToAddIndex = ', eggsToAddIndex);
                for (var pokeToken in eggsToAddIndex){
                   //console.log('eggsToAddIndex[pokeToken] = ', pokeToken, eggsToAddIndex[pokeToken]);
                    if (eggsToAddIndex[pokeToken] > 0){
                        if (existingShinyDitto > 0){ addPokemonToZone(pokeToken, true, existingShinyDitto); }
                        else { addPokemonToZone(pokeToken, true); }
                        eggsAddedCount++;
                        eggsToAddIndex[pokeToken] -= 1;
                        if (eggsToAddIndex[pokeToken] == 0){
                            delete eggsToAddIndex[pokeToken];
                            }
                        }
                    if (jQuery.isEmptyObject(eggsToAddIndex)){ break; }
                    if (thisZoneData.currentPokemon.length >= thisZoneData.capacity){ break; }
                    }
                if (jQuery.isEmptyObject(eggsToAddIndex)){ break; }
                if (thisZoneData.currentPokemon.length >= thisZoneData.capacity){ break; }
                }

        }

    }

    // Define a function for updating battle cycles and faints
    function updateBattleCycles(){

        // If we're down to only one pokemon, no battles
        if (thisZoneData.currentPokemon.length <= 1){ return false; }

        // ...

    }

    // Define a function for getting  a pokemon's next evolutions
    function pokemonGetNextEvolutions(pokeToken, includeMega){
        if (typeof pokeToken === 'undefined'){ return false; }
        if (typeof includeMega !== 'boolean'){ includeMega = true; }
        var baseToken = pokeToken;
        var indexInfo = PokemonSpeciesIndex[baseToken];
        if (typeof indexInfo.nextEvolutions !== 'undefined'){
            var nextEvolutions = [];
            for (var key in indexInfo.nextEvolutions){ nextEvolutions.push(indexInfo.nextEvolutions[key]); }
            return nextEvolutions;
            } else {
            return [];
            }
    }

    // Define a function for getting the base evolution of a pokemon
    function pokemonGetBaseEvolution(pokeToken, includeBaby, includeAlts){
        //console.log('pokemonGetBaseEvolution('+pokeToken+', '+includeBaby+')');
        if (typeof pokeToken === 'undefined'){ return false; }
        if (typeof includeBaby !== 'boolean'){ includeBaby = true; }
        if (typeof includeAlts !== 'boolean'){ includeAlts = true; }
        var baseToken = pokeToken;
        var indexInfo = PokemonSpeciesIndex[baseToken];
        //console.log('indexInfo = ', indexInfo);
        if (typeof indexInfo.prevEvolution !== 'undefined'){
            //console.log('return indexInfo.prevEvolution', indexInfo.prevEvolution);
            return pokemonGetBaseEvolution(indexInfo.prevEvolution, includeBaby, includeAlts);
            } else {
            //console.log('return indexInfo.altBaseEvolutions', indexInfo.altBaseEvolutions);
            if (includeAlts && typeof indexInfo.altBaseEvolutions !== 'undefined'){
                var queuedBaseEvolutions = [];
                queuedBaseEvolutions.push({
                    token: indexInfo.token,
                    chance: 1 + thisZoneData.currentStats['types'][indexInfo.types[0]]
                    });
                for (var i in indexInfo.altBaseEvolutions){
                    var baseEvolution = indexInfo.altBaseEvolutions[i];
                    var baseEvolutionInfo = PokemonSpeciesIndex[baseEvolution.species];
                    if (baseEvolution.method === 'type-appeal'
                        && thisZoneData.currentStats['types'][baseEvolution.value] >= 20){
                        queuedBaseEvolutions.push({
                            token: baseEvolution.species,
                            chance: 1 + thisZoneData.currentStats['types'][baseEvolution.value]
                            });
                        } else if (baseEvolution.method === 'type-warning'
                        && thisZoneData.currentStats['types'][baseEvolution.value] <= -5){
                        queuedBaseEvolutions.push({
                            token: baseEvolution.species,
                            chance: 2 + (thisZoneData.currentStats['types'][baseEvolution.value] * -1)
                            });
                        } else if (baseEvolution.method === 'chance'
                        && (Math.random() < (baseEvolution.value / 100))){
                        queuedBaseEvolutions.push({
                            token: baseEvolution.species,
                            chance: 2 + thisZoneData.currentStats['types'][indexInfo.types[0]]
                            });
                        } else if (baseEvolution.method === 'always'){
                        queuedBaseEvolutions.push({
                            token: baseEvolution.species,
                            chance: 100 + i
                            });
                        }
                    }
                if (queuedBaseEvolutions.length > 0){
                    //console.log('queuedBaseEvolutions for '+pokemonInfo.token+' = ', queuedEvolutions);
                    queuedBaseEvolutions.sort(function(a, b){
                        if (a.chance > b.chance){ return -1; }
                        else if (a.chance < b.chance){ return 1; }
                        else { return 0; }
                        });
                    var selectedBaseEvolution = queuedBaseEvolutions[0].token;
                    //console.log('selectedBaseEvolution = ', selectedBaseEvolution);
                    return selectedBaseEvolution;
                    } else {
                    return baseToken;
                    }
                } else {
                //console.log('return baseToken', baseToken);
                return baseToken;
                }
            }
    }

    // Define a function for getting the max evolution of a pokemon
    function pokemonGetMaxEvolutions(pokeToken, includeMega){
        if (typeof pokeToken === 'undefined'){ return false; }
        if (typeof includeMega !== 'boolean'){ includeMega = true; }
        var indexInfo = PokemonSpeciesIndex[nextToken];
        if (typeof indexInfo.nextEvolutions !== 'undefined'){
            return indexInfo.nextEvolutions;
            } else {
            return false;
            }
    }

    // Define a function for checking if a pokemon is a base evolution
    function pokemonIsBaseEvolution(pokeToken, includeBaby){
        if (typeof pokeToken === 'undefined'){ return false; }
        if (typeof includeBaby !== 'boolean'){ includeBaby = true; }
        var baseEvolution = pokemonGetBaseEvolution(pokeToken, includeBaby);
        return baseEvolution !== false && baseEvolution === pokeToken ? true : false;
    }

    // Define a function for checking if a pokemon is a max evolution
    function pokemonIsMaxEvolution(includeMega){
        if (typeof pokeToken === 'undefined'){ return false; }
        if (typeof includeMega !== 'boolean'){ includeMega = true; }
        var maxEvolution = pokemonGetMaxEvolutions(pokeToken, includeMega);
        return maxEvolution !== false && maxEvolution.length ? true : false;
    }

    // Define a function for getting zone stats ranked by type
    function getRankedZoneStats(){
        var sortedStatKeys = getSortedKeys(thisZoneData.currentStats['types']);
        return sortedStatKeys;
    }

    // Define a function with an index of evo stones by type
    function getEvoStoneType(evoStone){

        if (evoStone === 'fire-stone'){ return 'fire'; }
        else if (evoStone === 'water-stone'){ return 'water'; }
        else if (evoStone === 'thunder-stone'){ return 'electric'; }
        else if (evoStone === 'leaf-stone'){ return 'grass'; }
        else if (evoStone === 'ice-stone'){ return 'ice'; }

        else if (evoStone === 'moss-rock'){ return 'grass'; }
        else if (evoStone === 'icy-rock'){ return 'ice'; }

            else if (evoStone === 'sun-stone'){ return 'fire'; }
            else if (evoStone === 'moon-stone'){ return 'normal'; }

            else if (evoStone === 'dawn-stone'){ return 'psychic'; }
            else if (evoStone === 'dusk-stone'){ return 'dark'; }

            else if (evoStone === 'shiny-stone'){ return 'fairy'; }

            else if (evoStone === 'magnetic-field'){ return 'electric'; }

        else { return false; }
    }

    // Define a function for sorting species token by index order
    function sortSpeciesTokensByOrder(speciesTokens, reverseOrder){
        speciesTokens.sort(function(tokenA, tokenB){
            var indexA = PokemonSpeciesIndex[tokenA];
            var indexB = PokemonSpeciesIndex[tokenB];
            var indexOrderA = indexA['order'];
            var indexOrderB = indexB['order'];
            var reverse = reverseOrder ? -1 : 1;

            if (tokenA !== 'ditto' && tokenB === 'ditto'){ return -1 * reverse; }
            else if (tokenA === 'ditto' && tokenB !== 'ditto'){ return 1 * reverse; }

            else if (tokenA !== 'shiny-ditto' && tokenB === 'shiny-ditto'){ return -1 * reverse; }
            else if (tokenA === 'shiny-ditto' && tokenB !== 'shiny-ditto'){ return 1 * reverse; }

            else if (indexA.class === 'mythical' && indexB.class !== 'mythical'){ return -1 * reverse; }
            else if (indexA.class !== 'mythical' && indexB.class === 'mythical'){ return 1 * reverse; }

            else if (indexA.class === 'legendary' && indexB.class !== 'legendary'){ return -1 * reverse; }
            else if (indexA.class !== 'legendary' && indexB.class === 'legendary'){ return 1 * reverse; }

            else if (indexOrderA < indexOrderB){ return -1 * reverse; }
            else if (indexOrderA > indexOrderB){ return 1 * reverse; }

            else { return 0; }

            });
        return speciesTokens;
    }

    // Define a function for sorting species token by index number
    function sortSpeciesTokensByNumber(speciesTokens, reverseOrder){
        speciesTokens.sort(function(tokenA, tokenB){
            var indexNumA = PokemonSpeciesIndex[tokenA]['number'];
            var indexNumB = PokemonSpeciesIndex[tokenB]['number'];
            if (!reverseOrder){
                if (indexNumA < indexNumB){ return -1; }
                else if (indexNumA > indexNumB){ return 1; }
                else { return 0; }
                } else {
                if (indexNumA > indexNumB){ return -1; }
                else if (indexNumA < indexNumB){ return 1; }
                else { return 0; }
                }
            });
        return speciesTokens;
    }

    // Define a function for sorting species token by species speed
    function sortSpeciesTokensBySpeed(speciesTokens, reverseOrder){
        speciesTokens.sort(function(tokenA, tokenB){
            var indexSpeedA = PokemonSpeciesIndex[tokenA]['baseStats']['speed'];
            var indexSpeedB = PokemonSpeciesIndex[tokenB]['baseStats']['speed'];
            if (!reverseOrder){
                if (indexSpeedA > indexSpeedB){ return -1; }
                else if (indexSpeedA < indexSpeedB){ return 1; }
                else { return 0; }
                } else {
                if (indexSpeedA < indexSpeedB){ return -1; }
                else if (indexSpeedA > indexSpeedB){ return 1; }
                else { return 0; }
                }
            });
        return speciesTokens;
    }

    // Define a function for sorting species token by species breed points (hp+phDf+spDf)
    function sortSpeciesTokensByLifePoints(speciesTokens, reverseOrder){
        speciesTokens.sort(function(tokenA, tokenB){
            var pokeInfoA = PokemonSpeciesIndex[tokenA];
            var pokeInfoB = PokemonSpeciesIndex[tokenB];
            reverseOrder = reverseOrder ? -1 : 1;
            if (pokeInfoA.lifePoints < pokeInfoB.lifePoints){ return -1 * reverseOrder; }
            else if (pokeInfoA.lifePoints > pokeInfoB.lifePoints){ return 1 * reverseOrder; }
            else { return 0; }
            });
       //console.log('sortSpeciesTokensByLifePoints() = ', speciesTokens);
        return speciesTokens;
    }

    // Define a function for sorting species token by species breed points (sp+phAt+spAt)
    function sortSpeciesTokensByBreedPoints(speciesTokens, reverseOrder){
        speciesTokens.sort(function(tokenA, tokenB){
            var pokeInfoA = PokemonSpeciesIndex[tokenA];
            var pokeInfoB = PokemonSpeciesIndex[tokenB];
            reverseOrder = reverseOrder ? -1 : 1;
            if (pokeInfoA.breedPoints < pokeInfoB.breedPoints){ return -1 * reverseOrder; }
            else if (pokeInfoA.breedPoints > pokeInfoB.breedPoints){ return 1 * reverseOrder; }
            else { return 0; }
            });
       //console.log('sortSpeciesTokensByBreedPoints() = ', speciesTokens);
        return speciesTokens;
    }

    // Define a function for getting all species related to a token
    function getRelatedSpeciesTokens(startToken){

        var relatedSpeciesTokens = [];

        var baseToken = pokemonGetBaseEvolution(startToken);
        var baseIndex = PokemonSpeciesIndex[baseToken];

        if (typeof baseIndex.eggSpecies !== 'undefined'){
            relatedSpeciesTokens.push(baseIndex.eggSpecies);
            }

        // Add the stage 1 and check for stage 2
        relatedSpeciesTokens.push(baseToken);
        var nextEvolutions = pokemonGetNextEvolutions(baseToken);
        if (nextEvolutions.length > 0){
            //console.log('(0)nextEvolutions = ', nextEvolutions);
            //console.log('(0)nextEvolutions.length = ', nextEvolutions.length);
            for (var key = 0; key < nextEvolutions.length; key++){

                // Add stage 2 and check for stage 3
                var nextInfo = nextEvolutions[key];
                var nextToken = nextInfo.species;
                var nextEvolution = PokemonSpeciesIndex[nextToken];
                relatedSpeciesTokens.push(nextToken);
                nextEvolutions2 = pokemonGetNextEvolutions(nextToken);
                if (nextEvolutions2.length > 0){
                    //console.log('(1)nextEvolutions2 = ', nextEvolutions2);
                    //console.log('(1)nextEvolutions2.length = ', nextEvolutions2.length);
                    for (var key2 = 0; key2 < nextEvolutions2.length; key2++){

                        // Add stage 3 and check for stage 4
                        var nextInfo = nextEvolutions2[key2];
                        var nextToken = nextInfo.species;
                        var nextEvolution = PokemonSpeciesIndex[nextToken];
                        relatedSpeciesTokens.push(nextToken);
                        nextEvolutions3 = pokemonGetNextEvolutions(nextToken);
                        if (nextEvolutions3.length > 0){
                            //console.log('(2)nextEvolutions3 = ', nextEvolutions3);
                            //console.log('(2)nextEvolutions3.length = ', nextEvolutions3.length);
                            for (var key3 = 0; key3 < nextEvolutions3.length; key3++){

                                // Add stage 4 and (there is no stage 5)
                                var nextInfo = nextEvolutions3[key3];
                                var nextToken = nextInfo.species;
                                var nextEvolution = PokemonSpeciesIndex[nextToken];
                                relatedSpeciesTokens.push(nextToken);

                                }
                            }
                        }
                    }
                }
            }
        // Return the list of related pokemon species tokens
        return relatedSpeciesTokens;
    }

    // Define a function for counting all zone pokemon related to a given token
    function countRelatedZonePokemon(startToken){
        var relatedSpeciesTokens = getRelatedSpeciesTokens(startToken);
        //console.log('getRelatedSpeciesTokens('+startToken+') = ', relatedSpeciesTokens);
        var relatedSpeciesUnits = 0;
        for (var key in relatedSpeciesTokens){
            var relatedToken = relatedSpeciesTokens[key];
            if (typeof thisZoneData.currentStats['species'][relatedToken] !== 'undefined'
                && thisZoneData.currentStats['species'][relatedToken] > 0){
                relatedSpeciesUnits += thisZoneData.currentStats['species'][relatedToken];
                }
            }
        return relatedSpeciesUnits;
    }

    // Define a function for calculating life points via base stats of species
    function calculateLifePoints(baseStats){
        return 10 + Math.ceil((baseStats.hp + baseStats.phDefense + baseStats.spDefense) / 3);
    }

    // Define a function for calculating breed points via base stats of species
    function calculateBreedPoints(baseStats){
        return 10 + Math.ceil((baseStats.speed + baseStats.phAttack + baseStats.spAttack) / 3);
    }

    // Define a function for calculating influence points based on evo level and class
    function calculateInfluencePoints(indexInfo){

        // Define the base influence at one point
        var influencePoints = 1;

        // Increment influence points based on the pokemon's evolution stage
        if (typeof indexInfo.prevEvolution !== 'undefined'){
            influencePoints += 0.33;
            var prevIndexInfo = PokemonSpeciesIndex[indexInfo.prevEvolution];
            if (typeof prevIndexInfo.prevEvolution !== 'undefined'){
                influencePoints += 0.33;
                var prevPrevIndexInfo = PokemonSpeciesIndex[prevIndexInfo.prevEvolution];
                if (typeof prevPrevIndexInfo.prevEvolution !== 'undefined'){
                    influencePoints += 0.33;
                    }
                }
            }

        // Multiply influence points if this pokemon is a mega or burst evolution
        if (typeof indexInfo.formClass !== 'undefined'){
            if (indexInfo.formClass === 'burst-evolution'){ influencePoints = influencePoints * 5;  }
            if (indexInfo.formClass === 'mega-evolution'){ influencePoints = influencePoints * 5;  }
            }

        // Multiply influence points if this pokemon is a legendary of a mythical
        if (typeof indexInfo.class !== 'undefined'){
            if (indexInfo.class === 'legendary'){ influencePoints = influencePoints * 10;  }
            else if (indexInfo.class === 'mythical'){ influencePoints = influencePoints * 10;  }
            }

        // Return calculated influence points
        return influencePoints;

    }

    // Define a function for sorting an object by value and returning the keys
    function getSortedKeys(obj){
        var keys = []; for(var key in obj) keys.push(key);
        return keys.sort(function(a,b){return obj[b]-obj[a]});
    }

    // Define a function for converting HEX colour to RGB colour
    function convertHexToRgb(hex){
        hex = parseInt(hex,16);
        var r = hex >> 16;
        var g = hex >> 8 & 0xFF;
        var b = hex & 0xFF;
        return [r,g,b];
    }

    // Define a function for converting RGB colour to HEX colour
    function convertRgbToHex(r,g,b){
        var bin = r << 16 | g << 8 | b;
        return (function(h){
            return new Array(7-h.length).join("0")+h
        })(bin.toString(16).toUpperCase())
    }

})();