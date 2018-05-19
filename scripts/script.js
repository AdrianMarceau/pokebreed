(function(){


    // GLOBAL MISC

    var appLastUpdated = '2018-03-29'; // first date
    var appVersionNumber = '0.1.0'; // first version
    var appDebugMode = false; // debug mode

    var requiredPokemonIndexes = ['', 1, 2, 3, 4, 5, 6, 7, 'x'];
    var maxIndexKeyToLoad = 8;

    var PokemonSpeciesIndex = {};
    var PokemonSpeciesIndexTokens = [];
    var BasicPokemonSpeciesIndexTokens = [];
    var PokemonSpeciesDisplayOrder = [];
    var PokemonTypesIndex = {};
    var PokemonTypesIndexTokens = [];


    // GLOBAL ZONE DATA

    var defaultZoneData = {
        name: 'Pending',
        width: 20,
        height: 5,
        size: 100,
        capacity: 100,
        diversity: 0,
        baseStats: {},
        currentStats: {},
        currentPokemon: [],
        faintedPokemon: [],
        addedPokemonEggs: {},
        addedPokemonSpecies: {},
        evolvedPokemonSpecies: {},
        faintedPokemonSpecies: {},
        day: 0
        };

    var thisZoneData = {};

    var thisZoneHistory = [];

    var thisDeviceWidth = 0;


    // GLOBAL ELEMENT REFERENCES

    var $panelMainOverview = false;
    var $panelTypesOverview = false;
    var $panelSpeciesOverview = false;
    var $panelOverviewFloatLists = false;
    var $panelButtons = false;

    var $pokePanelButtons = false;
    var $pokePanelLoading = false;


    // DOCUMENT READY

    $(document).ready(function(){

        // Collect devide width and make sure it auto-updates
        var updateDeviceWidth = function(){
            thisDeviceWidth = $(window).width();
            thisDeviceHeight = $(window).height();
            var $mvp = $('#myViewport');
            //console.log('$mvp = ', $mvp);
            //alert('thisDeviceWidth = ' + thisDeviceWidth + '\n ' + 'thisDeviceHeight = ' + thisDeviceHeight);
            if ($mvp.length && thisDeviceWidth <= 534) { $mvp.attr('content','width=534'); }
            else if ($mvp.length){ $mvp.attr('content','width=device-width, initial-scale=1'); }
            };
        $(window).resize(updateDeviceWidth);
        updateDeviceWidth();
        //console.log('thisDeviceWidth = ', thisDeviceWidth);

        // Expose the zone zata as a public variable
        window.PokeboxZoneData = thisZoneData;
        window.PokeboxZoneFunctions = {
            resetSimulation: resetSimulation
            };

        // Populate the app details with global values if set
        if (typeof window.PokemonAppLastUpdated !== 'undefined'){ appLastUpdated = window.PokemonAppLastUpdated; }
        if (typeof window.PokemonAppVersionNumber !== 'undefined'){ appVersionNumber = window.PokemonAppVersionNumber; }
        if (typeof window.PokemonAppDebugMode !== 'undefined'){ appDebugMode = window.PokemonAppDebugMode; }

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

        // Collect references to key elements
        $panelMainOverview = $('.panel .overview.main');
        $panelTypesOverview = $('.panel .overview.types');
        $panelSpeciesOverview = $('.panel .overview.species');
        $panelOverviewFloatLists = $('.panel .overview.floatlist');
        $panelButtons = $('.panel > .buttons');
        $pokePanelButtons = $panelButtons.find('.new-pokemon');
        $pokePanelLoading = $pokePanelButtons.find('.loading');

        // Add a click event for the box details title
        $panelMainOverview.find('.details.zone .title').bind('click', function(e){
            e.preventDefault();
            var $title = $(this);
            $('html, body').animate({scrollTop: $title.offset().top}, 300);
            });

        // Update any scroll wrappers when the window resizes
        var updateScrollWrappers = function(){
            $pokePanelButtons.find('.buttonwrap').perfectScrollbar('update');
            };
        $(window).resize(updateScrollWrappers);
        updateScrollWrappers();

        // Add the scrollbar to any wrapper that need
        $('.wrap', $panelOverviewFloatLists).perfectScrollbar({suppressScrollX: true});

        // Preload the type and pokemon indexes
        preloadTypeIndex(function(){
            preloadFieldIndex(function(){
                preloadPokemonIndex(function(){
                    buildSimulator();
                    });
                });
            });


    });

    // Define a function for starting the simulation and day
    function buildSimulator(){
        //console.log('Building the simulation!');

        // Collect local references to global indexes
        PokemonSpeciesIndex = window.PokemonSpeciesIndex.indexList;
        PokemonSpeciesIndexTokens = Object.keys(PokemonSpeciesIndex);
        PokemonTypesIndex = window.PokemonTypesIndex;
        PokemonTypesIndexTokens = Object.keys(PokemonTypesIndex);
        PokemonFieldsIndex = window.PokemonFieldsIndex;
        PokemonFieldsIndexTokens = Object.keys(PokemonFieldsIndex);

        // Reset zone data to default parameters
        resetZoneData();

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
            //var speedValue = parseInt($option.attr('data-speed'));
            var speedValue = 0;
            var speedToken = $option.attr('data-speed');
            if (speedToken === 'slow'){ speedValue = 2400; }
            else if (speedToken === 'normal'){ speedValue = 1200; }
            else if (speedToken === 'fast'){ speedValue = 600; }
            else if (speedToken === 'pause'){ speedValue = 99999999; }
            if (speedValue === 0){ return false; }
            else { $('body').attr('data-speed', speedToken); }
            $speedButtons.removeClass('active');
            $option.addClass('active');
            dayTimeoutDuration = speedValue;
            if (dayTimeoutStarted){ updateDay(false); }
            });
        $speedButtons.filter('[data-speed="normal"]').click();

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


        // Generate a live button event for any pokemon added to the zone
        var $pokeList = $('.details.pokemon .wrap .list.pokemon', $panelMainOverview);
        $pokeList.on('click', 'li[data-id]', zonePokemonClickEvent);

    }

    // Define a function for resetting zone data to default values
    function resetZoneData(){
        thisZoneData = {};
        thisZoneHistory = [];
        var defaultZoneJSON = JSON.stringify(defaultZoneData);
        thisZoneData = JSON.parse(defaultZoneJSON);
    }

    // Define a function for looping through indexes and generating helpful values
    function optimizeIndexes(){
        $pokePanelLoading.append('.'); // append loading dot
        if (PokemonSpeciesIndexTokens.length){

            // Define possible genders to loop through
            var possibleGenders = ['male', 'female', 'none'];

            // Loop through individual species and pre-generate certain attributes
            for (var key = 0; key < PokemonSpeciesIndexTokens.length; key++){
                var token = PokemonSpeciesIndexTokens[key];

                // Calculate life and breed points now so we don't have to later
                var indexInfo = PokemonSpeciesIndex[token];
                indexInfo.lifePoints = calculateLifePoints(indexInfo['baseStats']);
                indexInfo.breedPoints = calculateBreedPoints(indexInfo['baseStats']);
                indexInfo.influencePoints = calculateInfluencePoints(indexInfo);

                // If class or formClass are not set, create them as empty strings
                if (typeof indexInfo.class === 'undefined'){ indexInfo.class = ''; }
                if (typeof indexInfo.formClass === 'undefined'){ indexInfo.formClass = ''; }

                // Generate this pokemon's full gender ratio index
                indexInfo.hasOneGender = false;
                indexInfo.hasNoGender = false;
                var defaultGenderRatio = {male: 0.5, female: 0.5, none: 0};
                if (typeof indexInfo.genderRatio === 'undefined'){ indexInfo.genderRatio = {}; }
                for (var key2 = 0; key2 < possibleGenders.length; key2++){
                    var genderToken = possibleGenders[key2];
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

                // Add a reference to this pokemon's base evolution
                indexInfo.baseEvolution = pokemonGetBaseEvolution(indexInfo.token, true, false);
                indexInfo.basicEvolution = pokemonGetBasicEvolution(indexInfo.token, false, false);

                /*
                // If this pokemon has species appeal, cascade to the base form
                if (typeof indexInfo.speciesAppeal !== 'undefined'
                    && indexInfo.basicEvolution !== indexInfo.token){
                    //console.log(indexInfo.token + ' has species appeal!', indexInfo.speciesAppeal);
                    var basicEvolutionInfo = PokemonSpeciesIndex[indexInfo.basicEvolution];
                    if (typeof basicEvolutionInfo.speciesAppeal === 'undefined'){ basicEvolutionInfo.speciesAppeal = []; }
                    //console.log('applying species appeal to '+indexInfo.basicEvolution+'...', basicEvolutionInfo);
                    for (var key2 = 0; key2 < indexInfo.speciesAppeal.length; key2++){
                        var appealSpecies = indexInfo.speciesAppeal[key2];
                        //console.log('Check if species appeal already added for (X is attracted to Y)', basicEvolutionInfo.token, appealSpecies);
                        if (basicEvolutionInfo.speciesAppeal.indexOf(appealSpecies) === -1){
                            basicEvolutionInfo.speciesAppeal.push(appealSpecies);
                            //console.log('Add species appeal to pokemon (X is attracted to Y)', basicEvolutionInfo.token, basicEvolutionInfo.speciesAppeal);
                            }
                        }
                    }
                    */

                }

            // Create a sorted list of pokemon species tokens so we don't have to later
            for (var key = 0; key < PokemonSpeciesIndexTokens.length; key++){
                var token = PokemonSpeciesIndexTokens[key];
                PokemonSpeciesDisplayOrder.push(token);
                }
            PokemonSpeciesDisplayOrder.sort(function(tokenA, tokenB){

                var infoA = PokemonSpeciesIndex[tokenA];
                var infoB = PokemonSpeciesIndex[tokenB];

                var baseInfoA = PokemonSpeciesIndex[infoA.basicEvolution];
                var baseInfoB = PokemonSpeciesIndex[infoB.basicEvolution];

                var basicA = tokenA === infoA.basicEvolution ? true : false;
                var basicB = tokenB === infoB.basicEvolution ? true : false;

                var baseNumA = baseInfoA['number'];
                var baseNumB = baseInfoB['number'];
                if (typeof baseInfoA['subNumber'] !== 'undefined'){ baseNumA += (baseInfoA['subNumber'] / 10); }
                if (typeof baseInfoB['subNumber'] !== 'undefined'){ baseNumB += (baseInfoB['subNumber'] / 10); }

                var dittoA = false;
                var dittoB = false;
                if (tokenA === 'ditto'){ dittoA = true; }
                if (tokenB === 'ditto'){ dittoB = true; }

                var shinyDittoA = false;
                var shinyDittoB = false;
                if (tokenA === 'shiny-ditto'){ shinyDittoA = true; }
                if (tokenB === 'shiny-ditto'){ shinyDittoB = true; }

                var unownA = false;
                var unownB = false;
                if (tokenA === 'unown'){ unownA = true; }
                if (tokenB === 'unown'){ unownB = true; }

                var specialA = false;
                var specialB = false;
                if (infoA['class'] === 'legendary' || infoA['class'] === 'mythical' || infoA['class'] === 'ultra-beast'){ specialA = true; }
                if (infoB['class'] === 'legendary' || infoB['class'] === 'mythical' || infoB['class'] === 'ultra-beast'){ specialB = true; }

                var regVariantA = false;
                var regVariantB = false;
                if (infoA['formClass'] === 'regional-variant'){ regVariantA = true; }
                if (infoB['formClass'] === 'regional-variant'){ regVariantB = true; }

                var genderVariantA = false;
                var genderVariantB = false;
                if (infoA['formClass'] === 'gender-variant'){ genderVariantA = true; }
                if (infoB['formClass'] === 'gender-variant'){ genderVariantB = true; }

                if (false){ return 0; }

                else if (dittoA && !dittoB){ return 1; }
                else if (!dittoA && dittoB){ return -1; }

                else if (shinyDittoA && !shinyDittoB){ return 1; }
                else if (!shinyDittoA && shinyDittoB){ return -1; }

                else if (specialA && !specialB){ return 1; }
                else if (!specialA && specialB){ return -1; }

                else if (unownA && !unownB){ return 1; }
                else if (!unownA && unownB){ return -1; }

                else if (baseNumA < baseNumB){ return -1; }
                else if (baseNumA > baseNumB){ return 1; }

                else if (regVariantA && !regVariantB){ return 1; }
                else if (!regVariantA && regVariantB){ return -1; }

                else if (genderVariantA && !genderVariantB){ return 1; }
                else if (!genderVariantA && genderVariantB){ return -1; }

                else if (genderVariantA && genderVariantB){

                    if (infoA['order'] > infoB['order']){ return -1; }
                    else if (infoA['order'] < infoB['order']){ return 1; }
                    else { return 0; }

                } else {

                    var invertVariant = false;
                    if (regVariantA && regVariantB && basicA && basicB){ invertVariant = true; }

                    if (infoA['order'] > infoB['order']){ return -1 * (invertVariant ? -1 : 1); }
                    else if (infoA['order'] < infoB['order']){ return 1 * (invertVariant ? -1 : 1); }
                    else { return 0; }

                }

                return 0;

                });

            //console.log('PokemonSpeciesDisplayOrder = ', PokemonSpeciesDisplayOrder);

            // Loop through the index searching for basic pokemon
            for (var key = 0; key < PokemonSpeciesIndexTokens.length; key++){
                var pokeToken = PokemonSpeciesIndexTokens[key];

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
                    BasicPokemonSpeciesIndexTokens.push(pokeToken);
                    }

                }

            // Sort allowed pokemon by a few criteria
            BasicPokemonSpeciesIndexTokens.sort(function(tokenA, tokenB){
                var orderA = PokemonSpeciesDisplayOrder.indexOf(tokenA);
                var orderB = PokemonSpeciesDisplayOrder.indexOf(tokenB);
                if (orderA < orderB){ return -1; }
                else if (orderA > orderB){ return 1; }
                else { return 0; }
                });

            }
    }

    // Define a function for actually starting the simulation
    var simulationStarted = false;
    function startSimulation(){

        // Set the start flag to true
        simulationStarted = true;

        // Add the started class to the main overview
        $panelMainOverview.addClass('started');

        // Remove any "waiting" classes from pokemon slots
        $('.details.pokemon .list.slots li', $panelMainOverview).removeClass('waiting');

        // Unhide the type and species overview panels
        $panelTypesOverview.removeClass('hidden');
        $panelSpeciesOverview.removeClass('hidden');

        // Unhide the day speed controller, hide the pokemon buttons
        $('.day-speed', $panelButtons).removeClass('hidden');
        $('.new-pokemon', $panelButtons).addClass('hidden');
        $('.info.links .link.reset', $panelButtons).removeClass('hidden');

        // Update the box details header, unhide the details info bar
        $('.details.zone .title', $panelMainOverview).html('Box Details');
        $('.details.zone .list', $panelMainOverview).removeClass('hidden');

        // Autoscroll to the box details header
        $panelMainOverview.find('.details.zone .title').trigger('click');

    }

    // Define a function for resetting the simulation
    function resetSimulation(){
        if (confirm('Are you sure you want to reset? \n'
            + 'All progress will be lost! \n'
            + 'Continue anyway?')){

            // Set the start flag to false
            simulationStarted = false;

            // Remove the started class from the main overview
            $panelMainOverview.removeClass('started');

            // Add "waiting" classes to pokemon slots
            $('.details.pokemon .list.slots li:lt(11)', $panelMainOverview).addClass('waiting');

            // Hide the type and species overview panels
            $panelTypesOverview.addClass('hidden');
            $panelSpeciesOverview.addClass('hidden');

            // Hide the day speed controller
            $('.day-speed', $panelButtons).addClass('hidden');
            $('.info.links .link.reset', $panelButtons).addClass('hidden');

            // Clear and reset all the zone variables and history
            resetZoneData();

            // Reset the day timeout so we can start fresh
            if (dayTimeout !== false){ clearTimeout(dayTimeout); }
            dayTimeout = false;
            dayTimeoutStarted = false;
            dayTimeoutDuration = 1000;

            // Show the pokemon buttons
            $('.new-pokemon', $panelButtons).removeClass('hidden');

            // Clear the box details header, hide the details info bar
            $('.details.zone .title', $panelMainOverview).html('&nbsp;');
            $('.details.zone .list', $panelMainOverview).addClass('hidden');

            // Autoscroll to the box details header
            $panelMainOverview.find('.details.zone .title').trigger('click');updateOverview();

            // Update the overiew with cleared data
            updateOverview();

            }
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

    // Define a function for preloading the field index from JSON
    function preloadFieldIndex(onReady){
        if (typeof onReady !== 'function'){ onReady = function(){}; }
        requestedScripts++;
        $.getScript('data/pokemon-fields-index.min.js?v'+appVersionNumber, function(){
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
        var slotMarkup = '';
        for (var i = 0; i < thisZoneData.capacity; i++){
            //console.log('append another slot');
            var liClass = 'slot';
            if (i < pokemonRequiredToStart){ liClass += ' waiting'; }
            slotMarkup += '<li class="'+liClass+'"></li>';
            }
        $pokeSlots.append(slotMarkup);
    }

    // Define a function for generating type styles for display
    function generateTypeStyles(){
        //console.log('generateTypeStyles()');
        $pokePanelLoading.append('.'); // append loading dot
        var styleSheet = '';
        for (var key = 0; key < PokemonTypesIndexTokens.length; key++){
            var typeToken = PokemonTypesIndexTokens[key];
            var typeData = PokemonTypesIndex[typeToken];
            var colourHEX = typeData['colour'];
            var colourRGB = convertHexToRgb(colourHEX).join(',');
            styleSheet += '.type.'+ typeToken +' { background-color: #'+ colourHEX +' !important; } \n';
            styleSheet += '.type.'+ typeToken +'2:after { \n';
                styleSheet += 'background-color: rgba('+colourRGB+', 0.9) !important; \n';
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
        var filter = '';
        var markup = '';
        if (typeof info.variantHueOffset !== 'undefined'){ filter += 'hue-rotate('+ info.variantHueOffset +'deg) '; }
        if (typeof info.variantSatOffset !== 'undefined'){ filter += 'saturate('+ info.variantSatOffset +'%) '; }
        if (egg){
            image = 'images/icons/eggs/'+indexInfo['types'][0]+'.png';
            markup += '<img class="sprite"'+ (filter.length ? ' style="-webkit-filter: '+ filter +'; filter: '+ filter +';"' : '') +' src="'+ image +'" data-token="'+ token +'" />';
            if (typeof indexInfo['types'][1] === 'string'){
                image = 'images/icons/eggs/'+indexInfo['types'][1]+'2.png';
                markup += '<img class="sprite overlay"'+ (filter.length ? ' style="-webkit-filter: '+ filter +'; filter: '+ filter +';"' : '') +' src="'+ image +'" data-token="'+ token +'" />';
                }
            } else {
            image = 'images/icons/pokemon/';
            if (typeof info['formToken'] !== 'undefined'){ image += indexInfo['number']+'-'+info['formToken']+'.png'; }
            else if (typeof indexInfo['formToken'] !== 'undefined'){ image += indexInfo['number']+'-'+indexInfo['formToken']+'.png'; }
            else { image += indexInfo['number']+'.png'; }
            markup += '<img class="sprite"'+ (filter.length ? ' style="-webkit-filter: '+ filter +'; filter: '+ filter +';"' : '') +' src="'+ image +'" data-token="'+ token +'" />';
            }
        return markup;
    }

    // Define a function for generating the simulator buttons for each Pokemon
    function generatePokemonButtons(){

        //console.log('generatePokemonButtons()');
        $pokePanelLoading.append('.'); // append loading dot

        // Update the first step of the sim with the amount of required pokemon to start
        $('.new-pokemon > strong', $panelButtons).html('Select '+ pokemonRequiredToStart +' Starter Pokémon');

        // Loop through and generate buttons for each Pokemon
        var lastGeneration = false;
        var pokePanelMarkup = '';
        for (var key = 0; key < BasicPokemonSpeciesIndexTokens.length; key++){

            // Collect the pokemon's token, data, and types
            var pokemonToken = BasicPokemonSpeciesIndexTokens[key];
            //console.log('pokemonToken = ', pokemonToken);
            var pokemonData = PokemonSpeciesIndex[pokemonToken];
            var pokemonTypes = pokemonData.types;
            //console.log('pokemonTypes = ', pokemonTypes);

            // Continue if this is not an appropriate starter pokemon
            if (!appDebugMode && (pokemonToken === 'ditto'
                || pokemonToken === 'shiny-ditto'
                || pokemonData['class'] === 'legendary'
                || pokemonData['class'] === 'mythical'
                || pokemonData['class'] === 'ultra-beast'
                || pokemonData['eggGroups'][0] === 'undiscovered')){
                continue;
                }

            // Insert a break after each new generation
            if (pokemonData.gameGeneration !== lastGeneration
                && pokemonData.formClass !== 'gender-variant'
                && pokemonData.formClass !== 'regional-variant'){
                if (lastGeneration !== false){ pokePanelMarkup += '<hr class="breaker" />'; }
                lastGeneration = pokemonData.gameGeneration;
            }

            // Collect the pokemon's image icon
            var pokemonIcon = getPokemonIcon(pokemonToken);

            // Generate the pokemon's name for the hover
            var pokemonName = pokemonData.name;
            pokemonName += ' ('+ (pokemonData.types.join(' / ').toLowerCase().replace(/\b[a-z]/g, function(l) { return l.toUpperCase(); })) +')';

            // Define the class for the pokemon button
            var buttonClass = 'button type ';
            if (typeof pokemonTypes[0] === 'string'){ buttonClass += pokemonTypes[0]+' '; }
            if (typeof pokemonTypes[1] === 'string'){ buttonClass += pokemonTypes[1]+'2 '; }

            // Generate the markup for the pokemon button
            var buttonMarkup = '';
            buttonMarkup += '<button '+
                'class="'+ buttonClass +'" '+
                'data-action="add" '+
                'data-kind="pokemon" '+
                'data-token="'+ pokemonToken +'" '+
                'title="'+ pokemonName +'" '+
                '>';
                buttonMarkup += '<span class="gloss"></span>';
                buttonMarkup += '<span class="plus">+</span>';
                buttonMarkup += pokemonIcon;
                //buttonMarkup += '<strong>' + pokemonData['name'] +'</strong>';
            buttonMarkup += '</button>';

            // Appent this button's markup the full list
            pokePanelMarkup += buttonMarkup;

            }

        // Append generated markup to the panel at once
        $pokePanelButtons.append('<div class="buttonwrap">'+pokePanelMarkup+'</div>');

        // Remove the loading dotts
        $pokePanelLoading.parent().addClass('loaded');
        $pokePanelLoading.remove();

        // Atach a scrollbar to the markup panel
        $pokePanelButtons.find('.buttonwrap').perfectScrollbar({suppressScrollX: true});

        // Update scrollbar once images have loaded
        var $buttonImages = $('img', $pokePanelButtons);
        var loadedImages = 0;
        $buttonImages.each(function(){
            $(this).on('load', function(){
                loadedImages++;
                if (loadedImages === $buttonImages.length){
                    //console.log('update scrollbar');
                    $pokePanelButtons.find('.buttonwrap').perfectScrollbar('update');
                    }
                });
            });

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
    function addPokemonToZone(pokemonToken, isEgg, reduceCycles, isVisitor, customData){
        //console.log('Adding '+token+' to zone.');
        if (typeof PokemonSpeciesIndex[pokemonToken] === 'undefined'){ return false; }
        if (typeof isEgg !== 'boolean'){ isEgg = true; }
        if (typeof reduceCycles !== 'number'){ reduceCycles = 0; }
        if (typeof isVisitor !== 'boolean'){ isVisitor = false; }
        if (typeof customData !== 'object'){ customData = {}; }

        // Create an entry for this species in the global count if not exists
        var addedPokemonSpecies = thisZoneData.addedPokemonSpecies;
        if (typeof addedPokemonSpecies[pokemonToken] === 'undefined'){ addedPokemonSpecies[pokemonToken] = 0; }
        addedPokemonSpecies[pokemonToken]++;

        // If this pokemon is in an egg, also create and entry for the species in the global egg counter
        if (isEgg){
            var addedPokemonEggs = thisZoneData.addedPokemonEggs;
            if (typeof addedPokemonEggs[pokemonToken] === 'undefined'){ addedPokemonEggs[pokemonToken] = 0; }
            addedPokemonEggs[pokemonToken]++;
            }

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
            daysOld: 0,
            growthCycles: 0,
            reachedAdulthood: false
            };

        // If custom data was provdied, use it to overwrite above
        if (!jQuery.isEmptyObject(customData)){
            var customKeys = Object.keys(customData);
            for (var i = 0; i < customKeys.length; customKeys++){
                var customKey = customKeys[i];
                var customValue = customData[customKey];
                newPokemon[customKey] = customValue;
                }
            }

        // If this is a visitor, create the appropriate flag
        if (isVisitor){ newPokemon.isVisitor = true; }

        // Check to see if this pokemon should be a variant
        var allowVariant = true;
        if (!isEgg){ allowVariant = false; }
        if (pokemonToken === 'ditto' || pokemonToken === 'shiny-ditto'){ allowVariant = false; }
        if ((indexData.class === 'legendary'
            || indexData.class === 'mythical'
            || indexData.class === 'ultra-beast')
            && pokemonToken !== 'phione'){ allowVariant = false; }
        if (allowVariant
            && Math.random() >= 0.75){
            //console.log('allowVariant for '+ pokemonToken +'! ');

            // Use the max and min to define the hue offset
            //console.log('|- Randomize the hue offset...');
            var randNum = Math.random();
            var randNum2 = Math.random();
            var minOffset = 0;
            var maxOffset = 30;
            if (pokemonToken === 'smeargle'){
                maxOffset = 360;
                } else {
                if (randNum >= 0.75){ maxOffset += 20; }
                if (randNum >= 0.85){ maxOffset += 20; }
                if (randNum >= 0.95){ maxOffset += 20; }
                if (randNum2 >= 0.90){ minOffset += 180; maxOffset += 180; }
                }
            var variantHueOffset = Math.ceil((Math.random() * (maxOffset - minOffset)) + minOffset);
            newPokemon.variantHueOffset = variantHueOffset * -1;
            //console.log('|- set the variantHueOffset = ', newPokemon.variantHueOffset);
            var randNum = Math.random();
            //console.log('|- randNum = '+ randNum +' | minOffset '+ minOffset +' => maxOffset '+ maxOffset +' ');
            if (randNum >= 0.90){
                //console.log('|- invert the variantHueOffset = ', newPokemon.variantHueOffset, newPokemon.variantHueOffset * -1);
                newPokemon.variantHueOffset *= -1;
                }

            // Use the max and min to define the saturation offset
            var randNum = Math.random();
            var minOffset = 60;
            var maxOffset = 110;
            //console.log('|-- randNum = '+ randNum +' | minOffset '+ minOffset +' => maxOffset '+ maxOffset +' ');
            if (randNum >= 0.75){
                minOffset -= 10;
                maxOffset += 10;
                //console.log('|-- randNum >= 0.75 | minOffset -= 10 && maxOffset += 10 | minOffset '+ minOffset +' => maxOffset '+ maxOffset +' ');
                }
            if (randNum >= 0.85){
                minOffset -= 10;
                maxOffset += 10;
                //console.log('|-- randNum >= 0.85 | minOffset -= 10 && maxOffset += 10 | minOffset '+ minOffset +' => maxOffset '+ maxOffset +' ');
                }
            if (randNum >= 0.95){
                minOffset -= 30;
                //console.log('|-- randNum >= 0.95 | minOffset -= 30 | minOffset '+ minOffset +' => maxOffset '+ maxOffset +' ');
                }
            var variantSatOffset = Math.ceil((Math.random() * (maxOffset - minOffset)) + minOffset);
            newPokemon.variantSatOffset = variantSatOffset;
            //console.log('|- set the variantSatOffset = ', newPokemon.variantSatOffset);

            }

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
                } else if (isVisitor) {
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'pokemon',
                    eventAction:  'joined',
                    eventLabel: pokemonToken + ' joined as visitor'
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
        var filterParamsTokens = Object.keys(filterParams);
        var pokemonMatches = [];
        if (thisZoneData.currentPokemon.length){
            for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
                var totalProps = 0;
                var matchedProps = 0;
                var thisPokemon = thisZoneData.currentPokemon[key];
                for (var key2 = 0; key2 < filterParamsTokens.length; key2++){
                    var param = filterParamsTokens[key2];
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
            var eggA = pokeA.eggCycles > 0 ? true : false;
            var eggB = pokeB.eggCycles > 0 ? true : false;
            var orderA = PokemonSpeciesDisplayOrder.indexOf(pokeA.token);
            var orderB = PokemonSpeciesDisplayOrder.indexOf(pokeB.token);
            if (!eggA && eggB){ return -1; }
            else if (eggA && !eggB){ return 1; }
            else if (orderA < orderB){ return -1; }
            else if (orderA > orderB){ return 1; }
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
        var zoneStatTokens = Object.keys(currentZoneStats);
        for (var key = 0; key < zoneStatTokens.length; key++){
            var statToken = zoneStatTokens[key];
            thisZoneData.currentStats[statToken] = currentZoneStats[statToken];
            }

        // Loop though and count population by types & species
        var pokeSpeciesActive = {};
        if (thisZoneData.currentPokemon.length){
            for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
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
        var pokeSpeciesActiveTokens = Object.keys(pokeSpeciesActive);
        if (pokeSpeciesActiveTokens.length){
            for (var key = 0; key < pokeSpeciesActiveTokens.length; key++){
                var token = pokeSpeciesActiveTokens[key];
                totalSpeciesCurrent += 1;
                totalActiveUnits += pokeSpeciesActive[token];
                }
            }
        if (!jQuery.isEmptyObject(thisZoneData.addedPokemonSpecies)){
            var addedPokemonSpeciesTokens = Object.keys(thisZoneData.addedPokemonSpecies);
            for (var key = 0; key < addedPokemonSpeciesTokens.length; key++){
                var token = addedPokemonSpeciesTokens[key];
                var addedCount = thisZoneData.addedPokemonSpecies[token];
                if (typeof thisZoneData.currentStats['eggs'][token] !== 'undefined'){
                    addedCount -= thisZoneData.currentStats['eggs'][token];
                    }
                if (addedCount > 0){ totalSpeciesSeen += 1; }
            }
        }

        // Update the zone details
        $('.zone .name .data', $panelMainOverview).text(thisZoneData.name);
        $('.zone .capacity .data', $panelMainOverview).text(thisZoneData.currentPokemon.length + ' / ' + thisZoneData.capacity);
        $('.zone .day .data', $panelMainOverview).text(thisZoneData.day);
        $('.zone .diversity .data', $panelMainOverview).text(' Active: '+totalSpeciesCurrent+' | Overall: '+totalSpeciesSeen+'');


        // Loop though and count population by types & species
        var pokeSpecies = {};
        if (thisZoneData.currentPokemon.length){
            for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
                var pokemonInfo = thisZoneData.currentPokemon[key];
                var indexInfo = PokemonSpeciesIndex[pokemonInfo.token];
                if (typeof pokeSpecies[pokemonInfo.token] == 'undefined'){ pokeSpecies[pokemonInfo.token] = 0; }
                pokeSpecies[pokemonInfo.token] += 1;
                }
            }
        //console.log('pokeSpecies(All) = ', pokeSpeciesActive);

        // Sort collected species tokens to keep things together
        var sortedSpeciesTokens = sortSpeciesTokensByOrder(Object.keys(pokeSpecies));
        //if (simulationStarted){ var sortedSpeciesTokens = sortSpeciesTokensByOrder(Object.keys(pokeSpecies), true); }
        //else { var sortedSpeciesTokens = Object.keys(pokeSpecies); }

        // Loop through each species and update the pokemon list
        var $pokeDetails = $('.details.pokemon', $panelMainOverview);
        var $pokeWrap = $('.wrap', $pokeDetails);
        var $pokeList = $('.list.pokemon', $pokeWrap);
        //var zoneMaxWidth = (thisZoneData.capacity / 10) * (40 + 5);
        //$pokeWrap.css({width:zoneMaxWidth+'px'});

        // -- POKEMON CANVAS SPRITES

        // Loop through and show all pokemon sprites on the field, with eggs last
        var pokeListMarkup = '';
        for (var key = 0; key < sortedSpeciesTokens.length; key++){
            var token = sortedSpeciesTokens[key];
            var pokeList = getZonePokemonByToken(token);
            //console.log('pokeList = ', pokeList);
            for (var key2 = 0; key2 < pokeList.length; key2++){
                var pokeInfo = pokeList[key2];

                // Check if the pokemon is in its egg before drawing the sprite
                if (pokeInfo.eggCycles === 0){

                    //console.log('this '+pokeInfo.token+' has hatched, show it (cycles:'+pokeInfo.eggCycles+')');
                    var pokeIcon =  '<span class="swrap">' + getPokemonIcon(pokeInfo.token, false, pokeInfo) + '</span>';
                    var pokeCount = '<span class="count growth">+'+pokeInfo.growthCycles+'</span>';
                    var itemClass = 'pokemon ';
                    if (pokeInfo.reachedAdulthood === true){ itemClass += 'adult '; }
                    if (pokeInfo.reachedAdulthood === true && pokeInfo.growthCycles <= 0){ itemClass += 'fainted '; }
                    //if (pokeInfo.watchFlag === true){ itemClass += 'watched '; }
                    //if (pokeInfo.isVisitor === true){ itemClass += 'visitor '; }
                    var extraMarkup = '';
                    if (pokeInfo.watchFlag === true){ extraMarkup += '<span class="watched"></span> '; }
                    if (pokeInfo.isVisitor === true){ extraMarkup += '<span class="visitor"></span> '; }
                    if (pokeInfo.isVisitor === true && pokeInfo.daysOld == 0){ itemClass += 'new '; }
                    pokeListMarkup += '<li class="'+ itemClass +'" data-id="'+ pokeInfo.id +'">'+
                            pokeIcon +
                            pokeCount +
                            extraMarkup +
                        '</li>';

                    } else if (pokeInfo.eggCycles > 0){

                    //console.log('this '+pokeInfo.token+' has not hatched, show it (cycles:'+pokeInfo.eggCycles+')');
                    var pokeIcon =  '<span class="swrap">' + getPokemonIcon(pokeInfo.token, true, pokeInfo) + '</span>';
                    var pokeCount = '<span class="count egg">-'+pokeInfo.eggCycles+'</span>';
                    var itemClass = 'egg ';
                    //if (pokeInfo.watchFlag === true){ itemClass += 'watched '; }
                    //if (pokeInfo.isVisitor === true){ itemClass += 'visitor '; }
                    var extraMarkup = '';
                    if (pokeInfo.watchFlag === true){ extraMarkup += '<span class="watched"></span> '; }
                    if (pokeInfo.isVisitor === true){ extraMarkup += '<span class="visitor"></span> '; }
                    if (pokeInfo.daysOld == 0){ itemClass += 'new '; }
                    pokeListMarkup += '<li class="'+ itemClass +'" data-id="'+ pokeInfo.id +'">'+
                            pokeIcon +
                            pokeCount +
                            extraMarkup +
                        '</li>';

                    }

                }
            }

        // Empty current list and append new markup
        $pokeList.empty();
        $pokeList.append(pokeListMarkup);

        // -- TYPE APPEAL LIST

        // Define vars to hold the number of stat slots shown
        var numAttractsShown = 0;
        var numRepelsShown = 0;

        // Update the stats list for the elemental type appeals
        $('.stats .list', $panelTypesOverview).empty();
        if (!jQuery.isEmptyObject(thisZoneData.currentStats['types'])){
            var attractTypes = {};
            var repelTypes = {};
            var currentTypeTokens = Object.keys(thisZoneData.currentStats['types']);
            for (var key = 0; key < currentTypeTokens.length; key++){
                var typeToken = currentTypeTokens[key];
                var typeValue = thisZoneData.currentStats['types'][typeToken];
                if (typeValue > 0){ attractTypes[typeToken] = typeValue; }
                else if (typeValue < 0){ repelTypes[typeToken] = typeValue; }
                }
            if (!jQuery.isEmptyObject(attractTypes)){
                var sortedKeys = getSortedKeys(attractTypes);
                var statListMarkup = '';
                for (var key = 0; key < sortedKeys.length; key++){
                    var type = sortedKeys[key];
                    var typeInfo = PokemonTypesIndex[type];
                    var val = Math.floor(attractTypes[type]);
                    if (val === 0){ continue; }
                    var liClass = 'type '+type+' ';
                    var typeIcon = '<img class="sprite" src="images/icons/types/'+ type +'.png" />';
                    statListMarkup += '<li class="'+liClass+'">'+
                            '<div class="bubble">'+
                                '<span class="icon">'+ typeIcon +'</span> '+
                                '<span class="name">'+ typeInfo['name'] +'</span> '+
                                '<span class="val">+'+ val +'</span>'+
                            '</div>'+
                        '</li>';
                    numAttractsShown++;
                    }
                $('.stats .list.attract', $panelTypesOverview).append(statListMarkup);
                }
            if (!jQuery.isEmptyObject(repelTypes)){
                var sortedKeys = getSortedKeys(repelTypes);
                var statListMarkup = '';
                sortedKeys.reverse();
                for (var key = 0; key < sortedKeys.length; key++){
                    var type = sortedKeys[key];
                    var typeInfo = PokemonTypesIndex[type];
                    var val = Math.floor(repelTypes[type]);
                    if (val === 0){ continue; }
                    var liClass = 'type '+type+' ';
                    var typeIcon = '<img class="sprite" src="images/icons/types/'+ type +'.png" />';
                    statListMarkup += '<li class="'+liClass+'">'+
                            '<div class="bubble">'+
                                '<span class="icon">'+ typeIcon +'</span> '+
                                '<span class="name">'+ typeInfo['name'] +'</span> '+
                                '<span class="val">'+ val +'</span>'+
                            '</div>'+
                        '</li>';
                    numRepelsShown++;
                    }
                $('.stats .list.repel', $panelTypesOverview).append(statListMarkup);
                }
            }


        // -- POKEMON SPECIES LIST

        // Define vars to hold the number of stat slots shown
        var numCurrentShown = 0;
        var numAllTimeShown = 0;

        //thisZoneData.addedPokemonSpecies
        //thisZoneData.faintedPokemonSpecies

        // Collect relevant stats arrays to show in the list
        var addedPokemonEggs = thisZoneData.addedPokemonEggs;
        var addedPokemonSpecies = thisZoneData.addedPokemonSpecies;
        var evolvedPokemonSpecies = thisZoneData.evolvedPokemonSpecies;
        var faintedPokemonSpecies = thisZoneData.faintedPokemonSpecies;
        var currentEggStats = thisZoneData.currentStats['eggs'];

        // Pre-filter a list of pokemon that are specifically current
        var currentPokemonSpecies = {};
        if (thisZoneData.currentPokemon.length > 0){
            for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
                var pokeInfo = thisZoneData.currentPokemon[key];
                if (typeof currentPokemonSpecies[pokeInfo.token] === 'undefined'){ currentPokemonSpecies[pokeInfo.token] = 0; }
                currentPokemonSpecies[pokeInfo.token] += 1;
                }
            }

        // Update the current species list with current numbers
        var $currentSpeciesCounter = $('.sub.current .count', $panelSpeciesOverview);
        var $currentSpeciesList = $('.list.current', $panelSpeciesOverview);
        $currentSpeciesList.empty();
        var speciesListMarkup = '';
        var totalEggCount = 0;
        if (!jQuery.isEmptyObject(currentPokemonSpecies)){
            //console.log('currentPokemonSpecies = ', currentPokemonSpecies);
            var sortedTokens = getSortedKeys(currentPokemonSpecies);
            //console.log('sortedTokens = ', sortedTokens);
            // Print out all the pokemon that have hatched from their eggs
            for (var key = 0; key < sortedTokens.length; key++){
                var poke = sortedTokens[key];
                var pokeInfo = PokemonSpeciesIndex[poke];
                var pokeCount = currentPokemonSpecies[poke];
                var eggCount = typeof currentEggStats[poke] !== 'undefined' ? currentEggStats[poke] : 0;
                totalEggCount += eggCount;
                pokeCount -= eggCount;
                if (pokeCount < 1){ continue; }
                var liClass = 'species ';
                liClass += 'type '+pokeInfo['types'][0]+' ';
                if (typeof pokeInfo['types'][1] !== 'undefined'){ liClass += pokeInfo['types'][1]+'2 '; }
                pokeIcon = getPokemonIcon(pokeInfo.token);
                speciesListMarkup += '<li class="'+liClass+'">'+
                        '<div class="bubble">'+
                            '<span class="icon">'+ pokeIcon +'</span> '+
                            '<span class="name">'+ pokeInfo['name'] +'</span> '+
                            '<span class="val">&times;'+ pokeCount + '</span>'+
                        '</div>'+
                    '</li>';
                numCurrentShown++;
                }
                // Print out a slot for eggs if there are any
                if (totalEggCount > 0){
                    pokeIcon = getPokemonIcon('ditto', true);
                    speciesListMarkup += '<li class="species type normal">'+
                            '<div class="bubble">'+
                                '<span class="icon">'+ pokeIcon +'</span> '+
                                '<span class="name">Eggs</span> '+
                                '<span class="val">&times;'+ totalEggCount +'</span>'+
                            '</div>'+
                        '</li>';
                    numCurrentShown++;
                    }
            } else {
            speciesListMarkup += '<li class="species spacer">'+
                    '<div class="bubble"><span class="name">&nbsp;</span></div>'+
                '</li>';
            }
        $currentSpeciesCounter.html(numCurrentShown);
        $currentSpeciesList.append(speciesListMarkup);

        // Update the alltime species list with past numbers
        var $alltimeSpeciesCounter = $('.sub.alltime .count', $panelSpeciesOverview);
        var $alltimeSpeciesList = $('.list.alltime', $panelSpeciesOverview);
        $alltimeSpeciesList.empty();
        var speciesListMarkup = '';
        if (!jQuery.isEmptyObject(addedPokemonSpecies)){

            // Loop through and print out all the individual species stats
            var sortedTokens = getSortedKeys(addedPokemonSpecies);
            for (var key = 0; key < sortedTokens.length; key++){
                var poke = sortedTokens[key];
                var pokeInfo = PokemonSpeciesIndex[poke];
                var pokeCount = addedPokemonSpecies[poke];
                if (pokeCount < 1){ continue; }
                var liClass = 'species ';
                liClass += 'type '+pokeInfo['types'][0]+' ';
                if (typeof pokeInfo['types'][1] !== 'undefined'){ liClass += pokeInfo['types'][1]+'2 '; }
                pokeIcon = getPokemonIcon(pokeInfo.token);
                speciesListMarkup += '<li class="'+liClass+'">'+
                        '<div class="bubble">'+
                            '<span class="icon">'+ pokeIcon +'</span> '+
                            '<span class="name">'+ pokeInfo['name'] +'</span> '+
                            '<span class="val">&times;'+ pokeCount +'</span>'+
                        '</div>'+
                    '</li>';
                numAllTimeShown++;
                }

            // Print out a block for the total eggs added
            if (!jQuery.isEmptyObject(addedPokemonEggs)){
                var totalEggs = 0;
                var eggSpecies = Object.keys(addedPokemonEggs);
                for (var i = 0; i < eggSpecies.length; i++){ totalEggs += addedPokemonEggs[eggSpecies[i]]; }
                pokeIcon = getPokemonIcon('ditto', true);
                speciesListMarkup += '<li class="species type normal">'+
                        '<div class="bubble">'+
                            '<span class="icon">'+ pokeIcon +'</span> '+
                            '<span class="name">Eggs</span> '+
                            '<span class="val">&times;'+ totalEggs +'</span>'+
                        '</div>'+
                    '</li>';
                numAllTimeShown++;
                }

            } else {
            speciesListMarkup += '<li class="species spacer">'+
                    '<div class="bubble"><span class="name">&nbsp;</span></div>'+
                '</li>';
            }
        $alltimeSpeciesCounter.html(numAllTimeShown);
        $alltimeSpeciesList.append(speciesListMarkup);

        // If the simulation has started, make sure we update the scroll wrappers
        if (simulationStarted){
            $('.wrap', $panelOverviewFloatLists).perfectScrollbar('update');
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
        for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
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

        // Collect the ID of the clicked pokemon
        var $li = $(this);
        var id = parseInt($li.attr('data-id'));
        var pokeKey = false;
        var pokeInfo = false;
        for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
            if (thisZoneData.currentPokemon[key].id === id){
                pokeKey = key;
                pokeInfo = thisZoneData.currentPokemon[key];
                break;
                }
            }

        // If simulator has NOT started, clicking removes a pokemon from the zone
        if (!simulationStarted){
            $li.remove();
            thisZoneData.addedPokemonSpecies[pokeInfo.token]--;
            thisZoneData.currentPokemon.splice(pokeKey, 1);
            }
        // Otherwise, clicking simply places a "watched" indicator on the pokemon
        else {
            pokeInfo.watchFlag = pokeInfo.watchFlag !== true ? true : false;
            }

        // Update the overview with changes
        updateOverview();

    }

    // Define a function for getting a snapshot of the zone stats
    function getCurrentZoneStats(){

        var currentZoneStats = {};

        // Loop though and count population by types & species
        var pokeTypes = {};
        var pokeSpecies = {};
        if (thisZoneData.currentPokemon.length){
            for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
                var pokemonInfo = thisZoneData.currentPokemon[key];
                if (pokemonInfo.eggCycles > 0){ continue; }
                var indexInfo = PokemonSpeciesIndex[pokemonInfo.token];
                if (typeof pokeSpecies[pokemonInfo.token] == 'undefined'){ pokeSpecies[pokemonInfo.token] = 0; }
                pokeSpecies[pokemonInfo.token] += 1;
                for (var key2 = 0; key2 < pokemonInfo.types.length; key2++){
                    var type = pokemonInfo.types[key2];
                    if (typeof pokeTypes[type] == 'undefined'){ pokeTypes[type] = 0; }
                    pokeTypes[type] += 1;
                    }

                }
            }

        // Reset current stats so we can recalculate
        currentZoneStats['types'] = {};
        currentZoneStats['species'] = {};
        currentZoneStats['eggs'] = {};

        // Define the sub-stats to calculate
        var subZoneStats = ['eggGroups', 'gameGeneration', 'gameRegion'];

        // Predefine all the types with zero points
        if (typeof PokemonTypesIndex !== 'undefined'){
            for (var key = 0; key < PokemonTypesIndexTokens.length; key++){
                var typeToken = PokemonTypesIndexTokens[key];
                currentZoneStats['types'][typeToken] = 0;
                }
            }

        // Loop through and count pokemon by species, groups, generations, and regions
        for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
            var currentPoke = thisZoneData.currentPokemon[key];
            var pokeToken = currentPoke.token;
            var pokeInfo = PokemonSpeciesIndex[pokeToken];
            if (currentPoke.eggCycles === 0){

                // Growing pokemon count toward stats species stats
                if (typeof currentZoneStats['species'][pokeToken] === 'undefined'){ currentZoneStats['species'][pokeToken] = 0; }
                currentZoneStats['species'][pokeToken] += 1;

                // Loop through sub-stats for and increment relevant values
                for (var subKey = 0; subKey < subZoneStats.length; subKey++){
                    var subStat = subZoneStats[subKey];
                    if (typeof currentZoneStats[subStat] === 'undefined'){ currentZoneStats[subStat] = {}; }

                    if (typeof pokeInfo[subStat] !== 'undefined'){

                        // Treat arrays differently than other values
                        if (typeof pokeInfo[subStat] === 'object'){

                            // Loop through and increment for each sub token
                            if (pokeInfo[subStat].length > 0){
                                for (key2 = 0; key2 < pokeInfo[subStat].length; key2++){
                                    var subToken = pokeInfo[subStat][key2];
                                    if (typeof currentZoneStats[subStat][subToken] === 'undefined'){ currentZoneStats[subStat][subToken] = 0; }
                                    currentZoneStats[subStat][subToken] += 1;
                                    }
                                }

                            } else {

                            // Collect the sub token or value and increment
                            var subToken = pokeInfo[subStat];
                            if (typeof currentZoneStats[subStat][subToken] === 'undefined'){ currentZoneStats[subStat][subToken] = 0; }
                            currentZoneStats[subStat][subToken] += 1;

                            }

                        }

                    }

                } else {

                // Egg pokemon do not count toward egg stats
                if (typeof currentZoneStats['eggs'][pokeToken] === 'undefined'){ currentZoneStats['eggs'][pokeToken] = 0; }
                currentZoneStats['eggs'][pokeToken] += 1;

                }
            }

        // Loop through and add base stats for area, if any
        if (thisZoneData.baseStats){
            var baseStatsTokens = Object.keys(thisZoneData.baseStats);
            for (var key = 0; key < baseStatsTokens.length; key++){
                var typeToken = baseStatsTokens[key];
                var val = thisZoneData.baseStats[type];
                if (typeof currentZoneStats['types'][typeToken] == 'undefined'){ currentZoneStats['types'][typeToken] = 0; }
                currentZoneStats['types'][typeToken] += val;
                }
            }

        // Loop through species and add/subtract type appeal points based on type and class
        if (!jQuery.isEmptyObject(currentZoneStats['species'])){
            var currentZoneSpecies = Object.keys(currentZoneStats['species']);
            for (var key = 0; key < currentZoneSpecies.length; key++){
                var pokeToken = currentZoneSpecies[key];
                var pokeCount = currentZoneStats['species'][pokeToken];
                var pokeIndex = PokemonSpeciesIndex[pokeToken];
                var pokeAbilities = Object.values(pokeIndex.abilities);
                for (var key2 = 0; key2 < pokeIndex.types.length; key2++){

                    var typeToken = pokeIndex.types[key2];
                    var typeInfo = PokemonTypesIndex[typeToken];

                    // Add +1 appeal point for this pokemon's type
                    if (typeof currentZoneStats['types'][typeToken] === 'undefined'){ currentZoneStats['types'][typeToken] = 0; }
                    currentZoneStats['types'][typeToken] += pokeCount * pokeIndex.influencePoints * 1.00;

                    // Add +1 appeal point for any type this pokemon is prey to
                    if (typeInfo['matchups']['weaknesses'].length){
                        for (var key3 = 0; key3 < typeInfo['matchups']['weaknesses'].length; key3++){
                            var type = typeInfo['matchups']['weaknesses'][key3];

                            // Skip if an ability grants immunity to this type
                            if (type === 'water' && pokeAbilities.indexOf('dry-skin') !== -1){ continue; }
                            if (type === 'fire' && pokeAbilities.indexOf('flash-fire') !== -1){ continue; }
                            if (type === 'ground' && pokeAbilities.indexOf('levitate') !== -1){ continue; }
                            if (type === 'electric' && pokeAbilities.indexOf('lightning-rod') !== -1){ continue; }
                            if (type === 'electric' && pokeAbilities.indexOf('motor-drive') !== -1){ continue; }
                            if (type === 'grass' && pokeAbilities.indexOf('sap-sipper') !== -1){ continue; }
                            if (type === 'water' && pokeAbilities.indexOf('storm-drain') !== -1){ continue; }
                            if (type === 'electric' && pokeAbilities.indexOf('volt-absorb') !== -1){ continue; }
                            if (type === 'water' && pokeAbilities.indexOf('water-absorb') !== -1){ continue; }

                            // Tweak the influence value if an ability requires it
                            var modInfluencePoints = pokeIndex.influencePoints;
                            if (pokeAbilities.indexOf('filter') !== -1){ modInfluencePoints -= modInfluencePoints * 0.25; }
                            if ((type === 'ice' || type === 'fire') && pokeAbilities.indexOf('thick-fat') !== -1){ modInfluencePoints -= modInfluencePoints * 0.50; }

                            // Otherwise we can add the weakness type stats
                            if (typeof currentZoneStats['types'][type] === 'undefined'){ currentZoneStats['types'][type] = 0; }
                            currentZoneStats['types'][type] += pokeCount * modInfluencePoints * 0.5;

                            }
                        }

                    // Add -1 appeal point for any type this pokemon is predator to
                    if (typeInfo['matchups']['strengths'].length){
                        for (var key3 = 0; key3 < typeInfo['matchups']['strengths'].length; key3++){
                            var type = typeInfo['matchups']['strengths'][key3];
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

    // Define a timeout function for incrementing the day counter
    var dayTimeout = false;
    var dayTimeoutStarted = false;
    var dayTimeoutDuration = 1000;
    function updateDay(updateCycles, allowVisitors){
        if (typeof updateCycles !== 'boolean'){ updateCycles = true; }
        if (typeof allowVisitors !== 'boolean'){ allowVisitors = updateCycles; }

        // Generate a snapshot of the zone stats and add to history
        var currentZoneStats = getCurrentZoneStats();
        thisZoneHistory.push(currentZoneStats);

        dayTimeoutStarted = true;
        thisZoneData.day++;
        //console.log('Day #'+thisZoneData.day);

        // Send an analytics event for the amount of time that has passed
        if (typeof ga !== 'undefined'){ sendSessionAnalytics(thisZoneData.day); }

        // Update growth, egg, etc, cycles if allowed
        if (updateCycles){
            updateGrowthCycles();
            updateEggCycles();
            updateBreedingCycles();
            updateBattleCycles();
            updateBoxBiome();
            }

        // Trigger a visitor chance if allowed or it's the first day and there's room
        var remainingSlots = thisZoneData.capacity - thisZoneData.currentPokemon.length;
        var remainingPercent = (remainingSlots / thisZoneData.capacity) * 100;
        if ((allowVisitors || thisZoneData.day === 1)
            && remainingSlots >= 1){

            // Always summon a ditto on the first day of the sim
            if (thisZoneData.day === 1){ triggerZoneVisitor('ditto'); }

            // Else if population numbers are low after a year, summon a shiny ditto
            else if (thisZoneData.day > 360 && remainingPercent >= 90){ triggerZoneVisitor('shiny-ditto'); }

            // Otherwise, summon a legendary, mythical, or basic pokemon based on number of days passed
            else if (thisZoneData.day % 1780 === 0){ triggerZoneVisitor('mythical'); }
            else if (thisZoneData.day % 360 === 0){ triggerZoneVisitor('legendary'); }
            else if (thisZoneData.day % 30 === 0){ triggerZoneVisitor('basic'); }

            }

        //var $timer = $('.details.zone .timer .complete', $panelMainOverview);
        if (dayTimeout !== false){ clearTimeout(dayTimeout); }
        //$timer.css({width:'0%'});
        updateOverview(function(){
            requestAnimationFrame(function(){
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
                    for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
                        var pokemonInfo = thisZoneData.currentPokemon[key];
                        if (pokemonInfo.eggCycles > 0){ continue; }
                        else if (pokemonInfo.token === 'vivillon'){ continue; }
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
                var possibleFormsColorsTokens = Object.keys(possibleFormsColors);
                var possibleFormsChances = {};
                for (var key = 0; key < possibleFormsColorsTokens.length; key++){
                    var formToken = possibleFormsColorsTokens[key];
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
            for (var key = 0; key < thisZoneData.currentPokemon.length; key++){

                var pokemonInfo = thisZoneData.currentPokemon[key];
                var indexInfo = PokemonSpeciesIndex[pokemonInfo.token];
                //console.log('-----\nChecking evolution data for ' + pokemonInfo.token, pokemonInfo, indexInfo);

                // Always increment the days old, even in egg form
                pokemonInfo.daysOld += 1;

                // If pokemon is still an egg, skip growth cycles for now
                if (pokemonInfo.eggCycles > 0){ continue; }

                // Only increment growth cycles if still growing, else start decrementing
                if (pokemonInfo.reachedAdulthood === false){
                    pokemonInfo.growthCycles += 1;
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

                        // Happiness-based evolutions are triggered by attract type appeal values
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

                        // Species-based evolutions trigger if the other species is active on the field
                        if (methodToken === 'evolution-species'
                            && pokemonInfo.growthCycles >= 20
                            && typeof thisZoneData.currentStats['species'][methodValue] !== 'undefined'
                            && thisZoneData.currentStats['species'][methodValue] > 0){
                            return 1 + thisZoneData.currentStats['species'][methodValue];
                            }

                        // Item, stone, and location-based evolutions trigger based on growth cycles alone
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

                        // Burst and mega evolutions trigger automatically when this pokemon reaches adulthood
                        if ((methodToken === 'burst-evolution'
                            || methodToken === 'mega-evolution')
                            && pokemonInfo.reachedAdulthood === true){
                            return 100;
                            }

                        // Primary reversions trigger automatically when this pokemon reaches adulthood
                        if (methodToken === 'primal-reversion'
                            && pokemonInfo.reachedAdulthood === true){
                            return 100;
                            }

                        // Otherwise, return zero as nothing was triggered
                        return 0;

                    }

                    // Create an array for queued evolutions (in case many) and start looping to check each
                    var queuedEvolutions = [];
                    for (var i = 0; i < indexInfo.nextEvolutions.length; i++){

                        // Collect the details of the next evolution
                        var nextEvolution = indexInfo.nextEvolutions[i];
                        var nextEvolutionInfo = PokemonSpeciesIndex[nextEvolution.species];
                        //console.log('|- Checking indexInfo.nextEvolutions['+i+'] = ', nextEvolution, nextEvolutionInfo);

                        // Define vars to count the number of trigged evos and switch type
                        var switchKind = typeof nextEvolution.switch !== 'undefined' ? nextEvolution.switch : 'and';
                        var totalMethods = 0;
                        var triggeredMethods = 0;
                        var forceEvo = false;

                        // Define a variable to hold the trigger chance value
                        var triggeredChance = 0;

                        // Loop through looking for methods
                        for (var m = 1; m < 10; m++){
                            var mt = m > 1 ? m : '';
                            if (typeof nextEvolution['method'+mt] !== 'undefined'
                                && typeof nextEvolution['value'+mt] !== 'undefined'){

                                totalMethods++;
                                //console.log('Checking method #'+m+' for '+indexInfo.token+'... | totalMethods = ', totalMethods);

                                var methodToken = nextEvolution['method'+mt];
                                var methodValue = nextEvolution['value'+mt];
                                //console.log('|-- methodToken = ', methodToken);
                                //console.log('|-- methodValue = ', methodValue);

                                var chanceValue = calculateEvolutionChance(pokemonInfo, methodToken, methodValue);
                                //console.log('|-- chanceValue = ', chanceValue);

                                if (chanceValue > 0){

                                    triggeredMethods++;
                                    triggeredChance += chanceValue;
                                    //console.log('|-- totalMethods++; | totalMethods = ', totalMethods);
                                    //console.log('|-- triggeredChance += '+chanceValue+'; | triggeredChance = ', triggeredChance);

                                    // Force this evolution if it's a mega/burst/primal
                                    if (methodToken === 'mega-evolution'
                                        || methodToken === 'burst-evolution'
                                        || methodToken === 'primal-reversion'){
                                        forceEvo = true;
                                        }

                                    }

                                } else {
                                break;
                                }
                            }

                        // If both methods were triggered, we can queue this evolution
                        if ((switchKind === 'and' && triggeredMethods === totalMethods)
                            || (switchKind === 'or' && triggeredMethods > 0)
                            || (forceEvo === true)){
                            var queuedEvolution = {token: nextEvolution.species, types: nextEvolutionInfo.types, chance: triggeredChance};
                            if (typeof nextEvolution.castoff !== 'undefined'){ queuedEvolution.castoff = nextEvolution.castoff; }
                            queuedEvolutions.push(queuedEvolution);
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

                        // If this pokemon has a castoff evolution, add it to the zone now
                        if (typeof selectedEvolution.castoff !== 'undefined'
                            && thisZoneData.currentPokemon.length < thisZoneData.capacity){

                            // Add the castoff pokemon to the zone
                            addPokemonToZone(selectedEvolution.castoff, false, false, false, {
                                growthCycles: pokemonInfo.growthCycles
                                });

                            // Push an event to the analytics
                            if (typeof ga !== 'undefined'){
                                ga('send', {
                                    hitType: 'event',
                                    eventCategory: 'pokemon',
                                    eventAction: 'castoff',
                                    eventLabel: backupToken+' cast off '+selectedEvolution.token
                                    });
                                }

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

                // If this pokemon has reached adulthood, every day they loose a little growth
                if (pokemonInfo.reachedAdulthood === true){
                    pokemonInfo.growthCycles -= Math.ceil(indexInfo.lifePoints * 0.10);
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
            for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
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

        // Check to see if we're at high (90%) zone capacity already
        var zoneCapacityPercent = ((thisZoneData.currentPokemon.length / thisZoneData.capacity) * 100);
        var zoneIsOvercrowded = zoneCapacityPercent >= 95 ? true : false;
        //console.log('zoneCapacityPercent = ', zoneCapacityPercent);
        //console.log('zoneIsOvercrowded = ', zoneIsOvercrowded);

        // If we're already at high capacity, do not initiate breeding
        if (zoneIsOvercrowded){ return false; }

        // Loop though and count population by types & species (do not count eggs)
        var pokeTypes = {};
        var pokeSpecies = {};
        var pokeEggs = {};
        if (thisZoneData.currentPokemon.length){
            for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
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
                for (var key2 = 0; key2 < pokemonInfo.types.length; key2++){
                    var type = pokemonInfo.types[key2];
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
            for (var key = 0; key < sortedSpeciesTokens.length; key++){

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
            var eggsToAddIndexTokens = !jQuery.isEmptyObject(eggsToAddIndex) ? Object.keys(eggsToAddIndex) : [];
            if ((eggsAddedCount < eggsToAddCount)
                && (thisZoneData.currentPokemon.length < thisZoneData.capacity)){
                //console.log('(eggsAddedCount('+eggsAddedCount+') < eggsToAddCount('+eggsToAddCount+')) && (thisZoneData.currentPokemon.length('+thisZoneData.currentPokemon.length+') < thisZoneData.capacity('+thisZoneData.capacity+'))');
                //console.log('eggsToAddIndex = ', eggsToAddIndex);
                for (var key = 0; key < eggsToAddIndexTokens.length; key++){
                    var pokeToken = eggsToAddIndexTokens[key];
                    //console.log('eggsToAddIndex[pokeToken] = ', pokeToken, eggsToAddIndex[pokeToken]);
                    if (eggsToAddIndex[pokeToken] > 0){
                        if (existingShinyDitto > 0){ addPokemonToZone(pokeToken, true, existingShinyDitto); }
                        else { addPokemonToZone(pokeToken, true); }
                        eggsAddedCount++;
                        zoneCapacityPercent = ((thisZoneData.currentPokemon.length / thisZoneData.capacity) * 100);
                        zoneIsOvercrowded = zoneCapacityPercent >= 90 ? true : false;
                        //console.log('zoneCapacityPercent = ', zoneCapacityPercent);
                        //console.log('zoneIsOvercrowded = ', zoneIsOvercrowded);
                        if (zoneIsOvercrowded){ eggsToAddIndex[pokeToken] = 0; }
                        else { eggsToAddIndex[pokeToken] -= 1; }
                        if (eggsToAddIndex[pokeToken] == 0){
                            delete eggsToAddIndex[pokeToken];
                            }
                        }
                    if (jQuery.isEmptyObject(eggsToAddIndex)){ break; }
                    if (thisZoneData.currentPokemon.length >= thisZoneData.capacity){ break; }
                    }
                }

        }

    }

    // Define a function for updating battle cycles and faints
    function updateBattleCycles(){

        // If we're down to only one pokemon, no battles
        if (thisZoneData.currentPokemon.length <= 1){ return false; }

        // ...

    }

    // Define a function for updating the current box's biome, if necessary
    function updateBoxBiome(){
        //console.log('updateBoxBiome()');

        // Count the actual Pokemon's types, not their appeal values
        var currentTypes = {};
        for (var i = 0; i < thisZoneData.currentPokemon.length; i++){
            var pokeInfo = thisZoneData.currentPokemon[i];
            var pokeIndex = PokemonSpeciesIndex[pokeInfo.token];
            var pokeTypes = pokeIndex.types;
            if (pokeTypes[1] === 'flying'){ pokeTypes = [pokeTypes[1], pokeTypes[0]]; }
            for (var j = 0; j < pokeTypes.length; j++){
                var typeToken = pokeTypes[j];
                if (typeof currentTypes[typeToken] === 'undefined'){ currentTypes[typeToken] = 0; }
                currentTypes[typeToken] += 1 - (j * 0.1);
                if (typeToken === 'flying'){ currentTypes[typeToken] += 0.1; }
                }
            }

        //console.log('currentTypes = ', currentTypes);

        // Loop through the field index and use type-counts to determine chances
        var selectedField = false;
        var possibleFields = [];
        for (var i = 0; i < PokemonFieldsIndexTokens.length; i++){
            var fieldToken = PokemonFieldsIndexTokens[i];
            var fieldInfo = PokemonFieldsIndex[fieldToken];
            var typeVal = 1;
            if (fieldInfo.baseTypes.length === 1){ typeVal += 0.1; }
            var fieldChance = 0;
            for (var j = 0; j < fieldInfo.baseTypes.length; j++){
                typeVal -= (j * 0.1);
                var baseType = fieldInfo.baseTypes[j];
                if (baseType === ''){ continue; }
                if (typeof currentTypes[baseType] !== 'undefined'){
                    var appealValue = currentTypes[baseType];
                    fieldChance += appealValue * typeVal;
                    }
                }
            //console.log(fieldToken+' = ', fieldInfo);
            //console.log('|-- typeVal = ', typeVal);
            //console.log('|-- fieldChance = ', fieldChance);
            if (fieldChance > 0){
                possibleFields.push({
                    field: fieldToken,
                    chance: fieldChance
                    });
                }
            }

        //console.log('possibleFields = ', possibleFields);

        // If there were no appropriate fields, do nothing for now
        if (possibleFields.length === 0){ return false; }

        // Otherwise, sort the fields by their chances and apply the first
        possibleFields.sort(function (fieldA, fieldB){
            if (fieldA.chance > fieldB.chance){ return -1; }
            else if (fieldA.chance < fieldB.chance){ return 1; }
            else { return 0; }
            });
        //console.log('topFields = ', possibleFields[0]['field'], possibleFields[1]['field'], possibleFields[2]['field']);
        if (possibleFields[0].chance > 0){
            var fieldToken = possibleFields[0]['field'];
            var fieldInfo = PokemonFieldsIndex[fieldToken];
            thisZoneData.name = fieldInfo.name;
            //console.log('change to field '+fieldToken);
            var newImage = 'images/fields/'+fieldToken+'-fullsize.png';
            $('.details.pokemon .field .bg', $panelMainOverview).css({backgroundImage:'url('+ newImage +')'});
            }

    }

    // Define a function for triggering a zone visitor
    function triggerZoneVisitor(visitorKind){
        //console.log('triggerZoneVisitor(visitorKind)', visitorKind);
        if (typeof visitorKind !== 'string'){ visitorKind = 'basic'; }

        // Collect or calculate the visitor token, if possible
        var visitorToken = false;
        if (visitorKind === 'basic'
            || visitorKind === 'legendary'
            || visitorKind === 'mythical'){

            // Loop through every pokemon and see what they like to eat, then check if that species is currently active
            var speciesAppealIndex = {};
            for (var key = 0; key < PokemonSpeciesIndexTokens.length; key++){
                var pokeToken = PokemonSpeciesIndexTokens[key];
                var pokeInfo = PokemonSpeciesIndex[pokeToken];
                if (typeof pokeInfo.speciesAppeal !== 'undefined'){
                    for (var key2 = 0; key2 < pokeInfo.speciesAppeal.length; key2++){
                        var speciesToken = pokeInfo.speciesAppeal[key2];
                        if ((typeof thisZoneData.currentStats['species'][speciesToken] !== 'undefined'
                            && thisZoneData.currentStats['species'][speciesToken] > 0)
                            && (typeof thisZoneData.currentStats['species'][pokeToken] === 'undefined'
                            || thisZoneData.currentStats['species'][pokeToken] < 3)){
                            //console.log('pokeToken = '+pokeToken+' | speciesToken = '+speciesToken+'');
                            //console.log('thisZoneData.currentStats[\'species\']['+speciesToken+'] = ', thisZoneData.currentStats['species'][speciesToken]);
                            //console.log('thisZoneData.currentStats[\'species\']['+pokeToken+'] = ', thisZoneData.currentStats['species'][pokeToken]);
                            speciesAppealIndex[pokeToken] = thisZoneData.currentStats['species'][speciesToken];
                            }
                        }
                    }

            }
            //console.log('speciesAppealIndex = ', speciesAppealIndex);

            // Create an array of Pokemon that can appear as visitors
            var allowedVisitorTokens = [];
            allowedVisitorTokens = allowedVisitorTokens.concat(BasicPokemonSpeciesIndexTokens);
            if (!jQuery.isEmptyObject(speciesAppealIndex)){ allowedVisitorTokens = allowedVisitorTokens.concat(Object.keys(speciesAppealIndex)); }
            //console.log('allowedVisitorTokens = ', allowedVisitorTokens);

            // Loop through basic pokemon and calculate chances of each
            var basicPokemonChances = [];
            for (var key = 0; key < allowedVisitorTokens.length; key++){
                var pokeToken = allowedVisitorTokens[key];
                var pokeInfo = PokemonSpeciesIndex[pokeToken];
                var pokeChance = 0;

                // If this isn't the right class of pokemon, continue to next
                if (visitorKind === 'basic' && pokeInfo.class !== ''){ continue; }
                else if (visitorKind !== 'basic' && pokeInfo.class !== visitorKind){ continue; }
                else if (pokeToken === 'ditto' || pokeToken === 'shiny-ditto'){ continue; }

                // Increase the chance of this pokemon appearing based on type appeal
                var typeVal = 1; // / pokeInfo.types.length;
                for (var key2 = 0; key2 < pokeInfo.types.length; key2++){
                    typeVal -= key2 * 0.1;
                    var typeToken = pokeInfo.types[key2];
                    if (thisZoneData.currentStats['types'][typeToken] !== 0){
                        pokeChance += thisZoneData.currentStats['types'][typeToken] * typeVal;
                        }
                    }

                // Increase the chance of this pokemon appearing based on group appeal
                var groupVal = 0.9 / pokeInfo.eggGroups.length;
                for (var key2 = 0; key2 < pokeInfo.eggGroups.length; key2++){
                    var groupToken = pokeInfo.eggGroups[key2];
                    if (typeof thisZoneData.currentStats['eggGroups'][groupToken] !== 'undefined'
                        && thisZoneData.currentStats['eggGroups'][groupToken] !== 0){
                        pokeChance += thisZoneData.currentStats['eggGroups'][groupToken] * groupVal;
                        }
                    }

                // Increase the chance of this pokemon appearing based on region appeal
                var regionVal = 0.1;
                if (typeof thisZoneData.currentStats['gameRegion'][pokeInfo.gameRegion] !== 'undefined'
                    && thisZoneData.currentStats['gameRegion'][pokeInfo.gameRegion] !== 0){
                    pokeChance += thisZoneData.currentStats['gameRegion'][pokeInfo.gameRegion] * regionVal;
                    }

                // Increase the chance of this pokemon appearing based on species appeal
                if (typeof speciesAppealIndex[pokeToken] !== 'undefined'){
                    //console.log('speciesAppealIndex['+pokeToken+'] = ', speciesAppealIndex[pokeToken]);
                    pokeChance *= (1 + Math.ceil(speciesAppealIndex[pokeToken] / 5));
                    //console.log('pokeChance = ', pokeChance);
                }

                // Decrease the chance if there is already a colony of this species
                if (typeof thisZoneData.addedPokemonSpecies[pokeToken] !== 'undefined'){
                    var numAddedAlready = thisZoneData.addedPokemonSpecies[pokeToken];
                    var numAddedCurrently = thisZoneData.currentStats['species'][pokeToken];
                    //console.log('numAddedAlready ', pokeToken, numAddedAlready);
                    if (numAddedAlready === 1){ pokeChance *= 2; }
                    else { pokeChance -= numAddedAlready; }
                    //console.log('pokeChance ', pokeToken, pokeChance);
                    if (visitorKind !== 'basic'
                        || numAddedCurrently >= 3){
                        pokeChance *= -1;
                        pokeChance -= numAddedAlready;
                        //console.log('pokeChance ', pokeToken, pokeChance);
                        }
                    }

                // If the chance was more than zero, push into the queue
                if (pokeChance > 0
                    || visitorKind !== 'basic'){
                    basicPokemonChances.push({
                        token: pokeToken,
                        chance: pokeChance
                        });
                    }

                }

            // If basic pokemon were queued, sort them by chance and pick most likely
            if (basicPokemonChances.length){
                basicPokemonChances.sort(function (pokeA, pokeB){
                    if (pokeA.chance > pokeB.chance){ return -1; }
                    else if (pokeA.chance < pokeB.chance){ return 1; }
                    else { return 0; }
                    });
                if (basicPokemonChances[0].chance > 0
                    || visitorKind !== 'basic'){
                    visitorToken = basicPokemonChances[0].token;
                    }
                }
            //console.log('basicPokemonChances = ', basicPokemonChances);
            //console.log('basicPokemonChances(top20) = ', basicPokemonChances[0], basicPokemonChances[1], basicPokemonChances[2], basicPokemonChances.slice(0, 20));

            } else if (typeof PokemonSpeciesIndex[visitorKind] !== 'undefined'){

            visitorToken = visitorKind;

            }

        // If visitor token was not set, we should return early
        //console.log('visitorToken = ', visitorToken);
        if (visitorToken === false){ return false; }

        // Collect the visitor's info and then add it to the zone
        //var visitorInfo = PokemonSpeciesIndex[visitorToken];
        addPokemonToZone(visitorToken, false, 0, true);

    }

    // Define a function for getting  a pokemon's next evolutions
    function pokemonGetNextEvolutions(pokeToken, includeMega){
        if (typeof pokeToken === 'undefined'){ return false; }
        if (typeof includeMega !== 'boolean'){ includeMega = true; }
        var baseToken = pokeToken;
        var indexInfo = PokemonSpeciesIndex[baseToken];
        if (typeof indexInfo.nextEvolutions !== 'undefined'){
            var nextEvolutions = [];
            for (var key = 0; key < indexInfo.nextEvolutions.length; key++){
                nextEvolutions.push(indexInfo.nextEvolutions[key]);
                }
            return nextEvolutions;
            } else {
            return [];
            }
    }

    // Define a function for getting the base evolution of a pokemon
    function pokemonGetBasicEvolution(pokeToken, includeBaby, includeAlts){
        //console.log('pokemonGetBasicEvolution(pokeToken('+pokeToken+'), includeBaby('+includeBaby+'))');
        if (typeof pokeToken === 'undefined'){ return false; }
        if (typeof includeBaby !== 'boolean'){ includeBaby = true; }
        if (typeof includeAlts !== 'boolean'){ includeAlts = true; }
        var baseToken = pokeToken;
        var indexInfo = PokemonSpeciesIndex[baseToken];
        if (!includeBaby
            && indexInfo.class === 'baby'
            && typeof indexInfo.nextEvolutions[0] !== 'undefined'){
            return indexInfo.nextEvolutions[0].species;
            } else {
            return pokemonGetBaseEvolution(pokeToken, includeBaby, includeAlts);
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
            var prevInfo = PokemonSpeciesIndex[indexInfo.prevEvolution];
            if (!includeBaby && prevInfo.class === 'baby'){
                //console.log('!includeBaby && prevInfo.class === \'baby\' | return baseToken', baseToken);
                return baseToken;
                } else {
                //console.log('return indexInfo.prevEvolution', indexInfo.prevEvolution);
                return pokemonGetBaseEvolution(indexInfo.prevEvolution, includeBaby, includeAlts);
                }
            } else {
            //console.log('return indexInfo.altBaseEvolutions', indexInfo.altBaseEvolutions);
            if (includeAlts && typeof indexInfo.altBaseEvolutions !== 'undefined'){
                var queuedBaseEvolutions = [];
                queuedBaseEvolutions.push({
                    token: indexInfo.token,
                    chance: 1 + thisZoneData.currentStats['types'][indexInfo.types[0]]
                    });
                for (var i = 0; i < indexInfo.altBaseEvolutions.length; i++){
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
            var orderA = PokemonSpeciesDisplayOrder.indexOf(tokenA);
            var orderB = PokemonSpeciesDisplayOrder.indexOf(tokenB);
            var reverse = reverseOrder ? -1 : 1;
            if (orderA < orderB){ return -1 * reverse; }
            else if (orderA > orderB){ return 1 * reverse; }
            else { return 0; }
            });
        return speciesTokens;
    }

    // Define a function for sorting species token by index number
    function sortSpeciesTokensByNumber(speciesTokens, reverseOrder){
        speciesTokens.sort(function(tokenA, tokenB){
            var indexNumA = PokemonSpeciesIndex[tokenA]['number'];
            var indexNumB = PokemonSpeciesIndex[tokenB]['number'];
            var reverse = reverseOrder ? -1 : 1;
            if (indexNumA < indexNumB){ return -1 * reverse; }
            else if (indexNumA > indexNumB){ return 1 * reverse; }
            else { return 0; }
            });
        return speciesTokens;
    }

    // Define a function for sorting species token by species speed
    function sortSpeciesTokensBySpeed(speciesTokens, reverseOrder){
        speciesTokens.sort(function(tokenA, tokenB){
            var indexSpeedA = PokemonSpeciesIndex[tokenA]['baseStats']['speed'];
            var indexSpeedB = PokemonSpeciesIndex[tokenB]['baseStats']['speed'];
            var reverse = reverseOrder ? -1 : 1;
            if (indexSpeedA > indexSpeedB){ return -1 * reverse; }
            else if (indexSpeedA < indexSpeedB){ return 1 * reverse; }
            else { return 0; }
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
    var relatedSpeciesIndex = {};
    function getRelatedSpeciesTokens(startToken){

        if (typeof relatedSpeciesIndex[startToken] !== 'undefined'){

            var relatedSpeciesTokens = relatedSpeciesIndex[startToken];

            } else {

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

                relatedSpeciesIndex[startToken] = relatedSpeciesTokens;

            }

        // Return the list of related pokemon species tokens
        return relatedSpeciesTokens;

    }

    // Define a function for counting all zone pokemon related to a given token
    function countRelatedZonePokemon(startToken){
        var relatedSpeciesTokens = getRelatedSpeciesTokens(startToken);
        //console.log('getRelatedSpeciesTokens('+startToken+') = ', relatedSpeciesTokens);
        var relatedSpeciesUnits = 0;
        for (var key = 0; key < relatedSpeciesTokens.length; key++){
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
            if (indexInfo.formClass === 'burst-evolution'){ influencePoints = influencePoints * 4;  }
            else if (indexInfo.formClass === 'mega-evolution'){ influencePoints = influencePoints * 6;  }
            else if (indexInfo.formClass === 'primal-reversion'){ influencePoints = influencePoints * 8;  }
            }

        // Multiply influence points if this pokemon is a legendary, mythical, or ultra-beast
        if (typeof indexInfo.class !== 'undefined'){
            if (indexInfo.class === 'ultra-beast'){ influencePoints = influencePoints * 8;  }
            else if (indexInfo.class === 'legendary'){ influencePoints = influencePoints * 10;  }
            else if (indexInfo.class === 'mythical'){ influencePoints = influencePoints * 12;  }
            }

        // Return calculated influence points
        return influencePoints;

    }

    // Define a function for sending session analytics to google
    function sendSessionAnalytics(currentDay){

        // Send an event for the first day, month, and year
        if (currentDay === 1){
            ga('send', {
                hitType: 'event',
                eventCategory: 'session',
                eventAction: 'checkpoint',
                eventLabel: '1st Day'
                });
            } else if (currentDay === 30){
            ga('send', {
                hitType: 'event',
                eventCategory: 'session',
                eventAction: 'checkpoint',
                eventLabel: '1st Month'
                });
            } else if (currentDay === 365){
            ga('send', {
                hitType: 'event',
                eventCategory: 'session',
                eventAction: 'checkpoint',
                eventLabel: '1st Year'
                });
            }
        // Send an event for each year that passes
        if (currentDay > 30 && currentDay % 30 === 0){
            ga('send', {
                hitType: 'event',
                eventCategory: 'session',
                eventAction: 'checkpoint',
                eventLabel: Math.floor(currentDay / 30) + ' Months'
                });
            }
        // Send an event for each year that passes
        if (currentDay > 365 && currentDay % 365 === 0){
            ga('send', {
                hitType: 'event',
                eventCategory: 'session',
                eventAction: 'checkpoint',
                eventLabel: Math.floor(currentDay / 365)+ ' Years'
                });
            }
        // Send an event every 10 days with the total days that have passed
        if (currentDay === 1 || currentDay % 10 == 0){
            if (currentDay % 10 == 0){
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'session',
                    eventAction: 'checkpoint',
                    eventLabel: 'days-passed',
                    eventValue: currentDay
                    });
                }
            }

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

    // Polyfill for requestAnimationFrame if not exists
    window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)};
    window.cancelAnimationFrame = window.cancelAnimationFrame
        || window.mozCancelAnimationFrame
        || function(requestID){clearTimeout(requestID)};

})();