(function(){


    // GLOBAL MISC

    var appLastUpdated = '2018-03-29'; // first date
    var appVersionNumber = '0.1.0'; // first version
    var appDebugMode = false; // debug mode
    var appFreeMode = false; // free-mode (show all pokemon)
    var appBaseHref = '';

    var requiredPokemonIndexes = ['', 1, 2, 3, 4, 5, 6, 7, 'x'];
    var maxIndexKeyToLoad = 8;
    var maxIndexKeyAllowed = 8;

    var PokemonSpeciesIndex = {};
    var PokemonSpeciesIndexTokens = [];
    var BasicPokemonSpeciesIndexTokens = [];
    var PokemonSpeciesDisplayOrder = [];
    var PokemonSpeciesDexOrder = [];
    var PokemonTypesIndex = {};
    var PokemonTypesIndexTokens = [];
    var globalNameToTokenIndex = {};

    var StarterPokemonHistory = [];
    var StarterPokemonSeed = 0;

    var PokeboxDaysPassed = 0;
    var PokemonSpeciesSeen = {};

    var totalSpecialPokemon = 0;
    var totalLegendaryPokemon = 0;
    var totalMythicalPokemon = 0;
    var totalUltraBeasts = 0;
    var totalMiscBeasts = 0;

    var ultraEnergySpecies = [];
    var ultraBeastSpecies = [];

    var globalSpeciesEffects = {};

    // GLOBAL ZONE DATA

    var defaultZoneData = {
        field: '',
        name: 'Pending',
        width: 20,
        height: 5,
        size: 100,
        sizeCols: 10,
        sizeRows: 10,
        capacity: 100,
        diversity: 0,
        currentFlags: [],
        currentStats: {},
        currentPokemon: [],
        currentEffects: {},
        faintedPokemon: [],
        addedPokemonEggs: {},
        addedPokemonSpecies: {},
        evolvedPokemonSpecies: {},
        faintedPokemonSpecies: {},
        day: 0,
        date: {},
        season: ''
        };

    var thisZoneData = {};

    var thisZoneHistory = [];

    var currentButtonFilters = {};
    var currentPokedexFilters = {};

    var thisDeviceWidth = 0;

    var addedPokemonSpeciesTokens = [];
    var evolvedPokemonSpeciesTokens = [];
    var faintedPokemonSpeciesTokens = [];

    var defaultTypeForms = [];
    var defaultTypeFormTriggers = {};


    // GLOBAL ELEMENT REFERENCES

    var $panelDiv = false;
    var $panelBanner = false;
    var $panelMainOverview = false;
    var $panelTypesOverview = false;
    var $panelSpeciesOverview = false;
    var $panelVisitorsOverview = false;
    var $panelOverviewFloatLists = false;
    var $panelPokemonSpriteWrapper = false;
    var $panelButtons = false;

    var $pokePanelSelectButtons = false;
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

        // Populate the app details with global values if set
        if (typeof window.PokemonAppLastUpdated !== 'undefined'){ appLastUpdated = window.PokemonAppLastUpdated; }
        if (typeof window.PokemonAppVersionNumber !== 'undefined'){ appVersionNumber = window.PokemonAppVersionNumber; }
        if (typeof window.PokemonAppDebugMode !== 'undefined'){ appDebugMode = window.PokemonAppDebugMode; }
        if (typeof window.PokemonAppFreeMode !== 'undefined'){ appFreeMode = window.PokemonAppFreeMode; }
        if (typeof window.PokemonAppBaseHref !== 'undefined'){ appBaseHref = window.PokemonAppBaseHref; }

        // Overwrite the default index load value if set
        if (typeof window.PokemonAllowedGenerationsMax !== 'undefined'){ maxIndexKeyToLoad = window.PokemonAllowedGenerationsMax; }
        //console.log('maxIndexKeyToLoad = ', maxIndexKeyToLoad);

        // Do not load from LOCAL STORAGE records if we're in free mode
        if (!appFreeMode){
            //console.log('NOT in free mode, let us LOAD');
            // Check if a localStorage value exsists for total days
            if (typeof window.localStorage !== 'undefined'){
                var savedPokeboxDaysPassed = window.localStorage.getItem('PokeboxDaysPassed');
                if (typeof savedPokeboxDaysPassed !== 'undefined'){ PokeboxDaysPassed = savedPokeboxDaysPassed ? parseInt(savedPokeboxDaysPassed) : 0; }
                //console.log('savedPokeboxDaysPassed = ', savedPokeboxDaysPassed, typeof savedPokeboxDaysPassed);
                //console.log('PokeboxDaysPassed = ', PokeboxDaysPassed, typeof PokeboxDaysPassed);
                }
            }

        // But we can still load from LOCAL STORAGE in the case of filter settings
        if (typeof window.localStorage !== 'undefined'){

            // Load settings for any BUTTON filters
            var storageName = !appFreeMode ? ('CurrentButtonFilters' + (maxIndexKeyToLoad < maxIndexKeyAllowed ? 'Gen' + maxIndexKeyToLoad : '')) : 'FreeButtonFilters';
            var savedCurrentButtonFilters = window.localStorage.getItem(storageName);
            if (typeof savedCurrentButtonFilters === 'string'){ currentButtonFilters = JSON.parse(savedCurrentButtonFilters); }
            //console.log('storageName = ', storageName);
            //console.log('maxIndexKeyToLoad = ', maxIndexKeyToLoad);
            //console.log('maxIndexKeyAllowed = ', maxIndexKeyAllowed);
            //console.log('savedCurrentButtonFilters = ', savedCurrentButtonFilters);
            //console.log('currentButtonFilters = ', currentButtonFilters);

            // Load settings for any POKEDEX filters
            if (!appFreeMode){
                var storageName = ('CurrentPokedexFilters' + (maxIndexKeyToLoad < maxIndexKeyAllowed ? 'Gen' + maxIndexKeyToLoad : ''));
                var savedCurrentPokedexFilters = window.localStorage.getItem(storageName);
                if (typeof savedCurrentPokedexFilters === 'string'){ currentPokedexFilters = JSON.parse(savedCurrentPokedexFilters); }
                //console.log('storageName = ', storageName);
                //console.log('maxIndexKeyToLoad = ', maxIndexKeyToLoad);
                //console.log('maxIndexKeyAllowed = ', maxIndexKeyAllowed);
                //console.log('savedCurrentPokedexFilters = ', savedCurrentPokedexFilters);
                //console.log('currentPokedexFilters = ', currentPokedexFilters);
                }

            }

        // Request the live version number from the server and wait to compare (refresh if out of date)
        $.get({
            url: 'version.php?return=version_number',
            success: function(currentVersionNumber){
                // If this build is out of date, refresh the whole page
                if (appVersionNumber !== currentVersionNumber){
                    var baseHref = $('html head base').attr('href');
                    window.location.href = baseHref + '?' + currentVersionNumber;
                    }
                }
            });

        // Collect references to key elements
        $panelDiv = $('.panel');
        $panelBanner = $('.banner', $panelDiv);
        $panelMainOverview = $('.overview.main', $panelDiv);
        $panelTypesOverview = $('.overview.types', $panelDiv);
        $panelSpeciesOverview = $('.overview.species', $panelDiv);
        $panelVisitorsOverview = $('.overview.visitors', $panelDiv);
        $panelOverviewFloatLists = $('.overview.floatlist', $panelDiv);
        $panelPokemonSpriteWrapper = $('.details.pokemon .list.pokemon', $panelMainOverview);
        $panelButtons = $('> .buttons', $panelDiv);
        $pokePanelFilters = $panelButtons.find('.filter-pokemon');
        $pokePanelSelectButtons = $panelButtons.find('.select-pokemon');
        $pokePanelPokedexEntries = $panelButtons.find('.info .group.pokedex');
        $pokePanelLoading = $pokePanelSelectButtons.find('.loading');

        // Add a click event for the box details title
        $panelMainOverview.find('.details.zone .title').bind('click', function(e){
            e.preventDefault();
            var $title = $(this);
            $('html, body').animate({scrollTop: $title.offset().top}, 300);
            });

        // Update any scroll wrappers when the window resizes
        var updateScrollWrappers = function(){ $pokePanelSelectButtons.find('.buttonwrap').perfectScrollbar('update'); };
        $(window).resize(updateScrollWrappers);
        updateScrollWrappers();

        // Add the scrollbar to any wrappers that need it
        $('.wrap', $panelOverviewFloatLists).perfectScrollbar({suppressScrollX: true});

        // Preload the type and pokemon indexes
        preloadTypeIndex(function(){
            preloadFieldIndex(function(){
                preloadPokemonIndex(function(){
                    buildSimulator();
                    });
                });
            });

        // Define the click-event for the info links
        var $linkButtons = $('.info.links .link[data-tab]', $panelButtons);
        var $linkContainers = $('.info[data-tab]', $panelButtons);
        var linkButtonFunction = function(e){
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
            };
        $linkButtons.bind('click', linkButtonFunction);

        // Add a click event for the pokedex button in the banner
        var clickTimeoutB = false;
        var $pokedexLink = $('.link[data-tab="pokedex"]', $panelButtons);
        $('.counter.pokedex', $panelBanner).bind('click', function(e){
            e.preventDefault();
            if (appFreeMode){ return false; }
            if (clickTimeoutB !== false){ clearTimeout(clickTimeoutB); }
            if (!$pokedexLink.hasClass('active')){ $pokedexLink.trigger('click'); }
            clickTimeoutB = setTimeout(function(){ $("html, body").scrollTop($pokedexLink.offset().top); }, 0);
            return;
            });

        // Add a click event for the save-data delete button (w/ stern warning)
        $('a.delete_savedata', $panelDiv).bind('click', function(e){
            e.preventDefault();
            if (confirm('Are you sure you want to clear all save data? \n'
                + 'This action absolutely can NOT be undone! \n'
                + 'Continue anyway?')){
                if (confirm('You\'ve been warned!!!')){
                    if (typeof window.localStorage !== 'undefined'){
                        window.localStorage.removeItem('PokeboxDaysPassed');
                        window.localStorage.removeItem('PokemonSpeciesSeen');
                        window.location = window.location.href;
                        return true;
                        }
                    }
                }
            return false;
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

        // Update the banner counters with the total days and current species
        var pokedexCurrent = Object.keys(PokemonSpeciesSeen).length;
        var pokedexTotal = PokemonSpeciesIndexTokens.length;
        var pokedexPercent = pokedexTotal > 0 ? (Math.ceil((pokedexCurrent / pokedexTotal) * 1000) / 10) : 0;
        $('.timer .count .total', $panelBanner).html(numberWithCommas(PokeboxDaysPassed));
        $('.pokedex .count .current', $panelBanner).html(pokedexCurrent);
        $('.pokedex .count .total', $panelBanner).html(pokedexTotal);
        $('.pokedex .count .percent', $panelBanner).html(pokedexPercent+'%');

        // Update the title bar to show the next action (Select Pokemon)
        $('.details.zone .title', $panelMainOverview).html('Select Starter Pokémon');

        // (GEN 7+) If we're in the right generation, show the Z-Power counter
        if (maxIndexKeyToLoad >= 7){ $('.stats .delta', $panelTypesOverview).css({display:''}); }
        else { $('.stats .delta', $panelTypesOverview).css({display:'none'}); }

        // Reset zone data to default parameters
        resetZoneData();

        // Optimize the pokemon indexes for faster calculation speeds
        optimizeIndexes();

        // Do not load from LOCAL STORAGE records if we're in free mode
        if (!appFreeMode){
            //console.log('NOT in free mode, let us LOAD');
            // Check if a localStorage value exsists for species seen
            if (typeof window.localStorage !== 'undefined'){
                var savedPokemonSpeciesSeen = window.localStorage.getItem('PokemonSpeciesSeen');
                //console.log('savedPokemonSpeciesSeen = ', savedPokemonSpeciesSeen);
                if (typeof savedPokemonSpeciesSeen === 'string'){
                    savedPokemonSpeciesSeen = JSON.parse(savedPokemonSpeciesSeen);

                    // If legacy tokens exist, rewrite save data with new names
                    //console.log('legacyTokenMap = ', JSON.stringify(legacyTokenMap), jQuery.isEmptyObject(legacyTokenMap));
                    if (!jQuery.isEmptyObject(legacyTokenMap)){
                        var legacyTokens = Object.keys(legacyTokenMap);
                        //console.log('legacyTokens = ', legacyTokens);
                        for (var i = 0; i < legacyTokens.length; i++){
                            var legacyToken = legacyTokens[i];
                            var newToken = legacyTokenMap[legacyToken];
                            if (typeof savedPokemonSpeciesSeen[legacyToken] !== 'undefined'
                                && typeof savedPokemonSpeciesSeen[newToken] === 'undefined'){
                                //console.log('rewriting ', legacyToken, ' to ', newToken);
                                savedPokemonSpeciesSeen[newToken] = savedPokemonSpeciesSeen[legacyToken] + 0;
                                delete savedPokemonSpeciesSeen[legacyToken];
                                }
                            }
                        }

                    // Collect saved tokens now that they've been filtered/rewritten
                    var savedTokens = Object.keys(savedPokemonSpeciesSeen);
                    //console.log('savedTokens = ', savedTokens);

                    //console.log('PokemonSpeciesIndexTokens = ', PokemonSpeciesIndexTokens);
                    for (var i = 0; i < savedTokens.length; i++){
                        var savedToken = savedTokens[i];
                        var savedData = savedPokemonSpeciesSeen[savedToken];
                        //console.log('savedToken = ', savedToken);
                        //console.log('savedData = ', savedData);
                        //console.log('PokemonSpeciesIndexTokens.indexOf('+ savedToken +') = ', PokemonSpeciesIndexTokens.indexOf(savedToken));
                        if (PokemonSpeciesIndexTokens.indexOf(savedToken) !== -1){
                            PokemonSpeciesSeen[savedToken] = savedData;
                            }
                        }

                    }
                //console.log('PokemonSpeciesSeen = ', PokemonSpeciesSeen);
                }
            }

        // Generate type styles so we can use them on buttons and panels
        generateTypeStyles();

        // Generate visual slots for the zone pokemon to fit into later
        generateZonePokemonSlots();

        // Calculate pokedex totals and the current pokeball colour
        recalculatePokedexTotals();
        recalculatePokedexIconColour();

        // Generate the actual pokemon buttons for the user to select from
        generatePokemonButtons();

        // Generate the pokedex listing for the user to view their progress
        generatePokemonPokedex();

        // Generate the click events for all the other panel buttons
        generateButtonPanelEvents();

        // Update the overview with current details before starting
        updateOverview();

    }

    // Define a function for delegating button events for the edit
    var speedValues = {normal:1200,warp:100,fast:600,slow:2400};
    var stopConfirmTimeout = false;
    var $controlButtons = false;
    var prevSpeedToken = false;
    var prevSpeedDuration = false;
    function generateButtonPanelEvents(){
        $pokePanelLoading.append('.'); // append loading dot

        // Define the click-event for the speed buttons
        var secretClicks = 0;
        $controlButtons = $('.controls .control[data-control]', $panelButtons);
        $controlButtons.bind('click', function(e){
            e.preventDefault();

            // Collect the control and its token
            var $button = $(this);
            var control = $button.attr('data-control');

            // If this is the PAUSE button
            if (control === 'pause'){
                //console.log('trigger a PAUSE action', typeof dayTimeoutID, dayTimeoutID);
                if (dayTimeoutSpeed === 'pause' && dayTimeoutID === false){ return false; }
                prevSpeedToken = dayTimeoutSpeed;
                prevSpeedDuration = dayTimeoutDuration;
                if (dayTimeoutID !== false){ clearTimeout(dayTimeoutID); }
                dayTimeoutID = false;
                dayTimeoutSpeed = 'pause';
                dayTimeoutDuration = 0;
                $('body').attr('data-speed', control);
                $controlButtons.filter('.speed').removeClass('active');
                $controlButtons.filter('.speed:not(.play):not(.pause)').addClass('hidden');
                $button.addClass('active');
                return;
                }
            // Else if this is the PLAY button
            else if (control === 'play'){
                //console.log('trigger a PLAY action');
                if (dayTimeoutSpeed !== 'pause'){ return false; }
                dayTimeoutSpeed = prevSpeedToken !== false ? prevSpeedToken : 'normal';
                dayTimeoutDuration = prevSpeedDuration !== false ? prevSpeedDuration : speedValues[dayTimeoutSpeed];
                dayTimeoutID = setTimeout(dayTimeoutHandler, dayTimeoutDuration);
                $('body').attr('data-speed', dayTimeoutSpeed);
                $controlButtons.filter('.speed').removeClass('active');
                $controlButtons.filter('.'+ dayTimeoutSpeed).addClass('active');
                $controlButtons.filter('.speed:not(.play):not(.pause)').removeClass('hidden');
                $button.addClass('active');
                return;
                }
            // Else if this is the SPEED button
            else if (control.match(/^(slow|fast|warp)$/)){
                //console.log('trigger a SPEED action', control);
                // If the speed has NOT been selected, switch now (else revert to normal)
                if (dayTimeoutSpeed !== control){
                    dayTimeoutSpeed = control;
                    dayTimeoutDuration = speedValues[dayTimeoutSpeed];
                    $('body').attr('data-speed', dayTimeoutSpeed);
                    $controlButtons.filter('.speed:not(.play)').removeClass('active');
                    $button.addClass('active');
                    } else {
                    dayTimeoutSpeed = 'normal';
                    dayTimeoutDuration = speedValues[dayTimeoutSpeed];
                    $('body').attr('data-speed', dayTimeoutSpeed);
                    $controlButtons.filter('.speed:not(.play)').removeClass('active');
                    }
                return;
                }
            // Else if this is the STOP button
            else if (control === 'stop'){
                if (stopConfirmTimeout !== false){ clearTimeout(stopConfirmTimeout); }
                $controlButtons.filter('.pause').trigger('click');
                if ($button.hasClass('confirm')){
                    $button.removeClass('confirm');
                    endCurrentSimulation();
                    } else {
                    $button.addClass('confirm');
                    stopConfirmTimeout = setTimeout(function(){
                        $button.removeClass('confirm');
                        }, 3000);
                    }
                return;
                }
            // Else if this is the RESTART button
            else if (control === 'restart'){
                if (simulationStarted){ return false; }
                restartCurrentSimulation();
                return;
                }
            // Else if this is the NEW button
            else if (control === 'new'){
                if (simulationStarted){ return false; }
                resetSimulator();
                return;
                }
            // Else if this is the START button
            else if (control === 'start'){
                if (thisZoneData.currentPokemon.length > 0
                    && !simulationStarted
                    && !dayTimeoutStarted){

                    // We have enough pokemon to start, so let's do it!
                    startSimulation();

                    }
                return;
                }

            });


        // Generate a live button event for any pokemon added to the zone
        var $pokeList = $('.details.pokemon .wrap .list.pokemon', $panelMainOverview);
        $pokeList.on('click', 'li[data-id]', zonePokemonClickEvent);

        // Generate events for the select-pokemon filters
        var allowedFilterTargets = ['buttons', 'pokedex'];
        var $filterDivs = $('.filter[data-filter]', $pokePanelFilters);
        //console.log('$filterDivs.length = ', $filterDivs.length);
        $filterDivs.each(function(){

            // Collect refs to this div and the options inside it
            var $filterDiv = $(this);
            var $filterParent = $filterDiv.closest('.filter-pokemon[data-target]');
            var filterKind = $filterDiv.attr('data-filter');
            var $filterOptions = $filterDiv.find('.option[data-'+ filterKind +']');
            var $activeFilter = $filterOptions.find('.option.active');
            //console.log('filterKind = ', filterKind);
            //console.log('$filterOptions.length = ', $filterOptions.length);
            var filterTarget = $filterParent.attr('data-target');
            //console.log('filterTarget = ', filterTarget);
            if (allowedFilterTargets.indexOf(filterTarget) === -1){ return true; }
            if (filterTarget === 'buttons'){
                if (typeof currentButtonFilters[filterKind] === 'undefined'){
                    currentButtonFilters[filterKind] = 'all';
                    }
                //console.log('currentButtonFilters['+ filterKind +'] = ', currentButtonFilters[filterKind]);
                } else if (filterTarget === 'pokedex'){
                if (typeof currentPokedexFilters[filterKind] === 'undefined'){
                    if (filterKind === 'mode'){ currentPokedexFilters[filterKind] = 'legacy'; }
                    else if (filterKind === 'gen'){ currentPokedexFilters[filterKind] = 1; }
                    else { currentPokedexFilters[filterKind] = 'all'; }
                    }
                //console.log('currentPokedexFilters['+ filterKind +'] = ', currentPokedexFilters[filterKind]);
                }
            $filterOptions.bind('click', function(){

                // Collect refs for the option link and value, then update the current filter array
                var $optionLink = $(this);
                var optionValue = $optionLink.attr('data-'+ filterKind);
                if (filterKind === 'gen'
                    && optionValue !== 'all'
                    && optionValue !== 'x'){
                    optionValue = parseInt(optionValue);
                    }
                //console.log('filterKind = ', filterKind);
                //console.log('optionValue = ', optionValue);

                // Check if we're dealing with button or pokedex filters
                if (filterTarget === 'buttons'){

                    // Add and apply pokemon button filters now that they've been updated
                    currentButtonFilters[filterKind] = optionValue;
                    applyPokemonButtonFilters();
                    //console.log('currentButtonFilters = ', currentButtonFilters);

                    // Update local storage with the the new filter values
                    if (typeof window.localStorage !== 'undefined'){
                        var storageName = !appFreeMode ? ('CurrentButtonFilters' + (maxIndexKeyToLoad < maxIndexKeyAllowed ? 'Gen' + maxIndexKeyToLoad : '')) : 'FreeButtonFilters';
                        var savedCurrentButtonFilters = JSON.stringify(currentButtonFilters);
                        window.localStorage.setItem(storageName, savedCurrentButtonFilters);
                        //console.log('storageName = ', storageName);
                        //console.log('maxIndexKeyToLoad = ', maxIndexKeyToLoad);
                        //console.log('maxIndexKeyAllowed = ', maxIndexKeyAllowed);
                        //console.log('savedCurrentButtonFilters = ', savedCurrentButtonFilters);
                        }

                    } else if (filterTarget === 'pokedex'){
                    //console.log('filterTarget = ', filterTarget);

                    // Add and apply pokemon button filters now that they've been updated
                    currentPokedexFilters[filterKind] = optionValue;
                    applyPokemonPokedexFilters();
                    //console.log('currentPokedexFilters = ', currentPokedexFilters);

                    // Update local storage with the the new filter values
                    if (typeof window.localStorage !== 'undefined'){
                        var storageName = ('CurrentPokedexFilters' + (maxIndexKeyToLoad < maxIndexKeyAllowed ? 'Gen' + maxIndexKeyToLoad : ''));
                        var savedCurrentPokedexFilters = JSON.stringify(currentPokedexFilters);
                        window.localStorage.setItem(storageName, savedCurrentPokedexFilters);
                        //console.log('storageName = ', storageName);
                        //console.log('maxIndexKeyToLoad = ', maxIndexKeyToLoad);
                        //console.log('maxIndexKeyAllowed = ', maxIndexKeyAllowed);
                        //console.log('savedCurrentPokedexFilters = ', savedCurrentPokedexFilters);
                        }

                    }

                });

            });

        // Define a click event for the starter seed entry button
        $('.button.enter-seed', $pokePanelFilters).bind('click', function(e){
            e.preventDefault();
            // If the box is empty, allow starter seed entry
            if (thisZoneData.currentPokemon.length === 0){
                triggerStarterSeedPrompt();
                }
            });

        // Define a click event for the add ditto quick button
        $('.button.add-ditto', $pokePanelFilters).bind('click', function(e){
            e.preventDefault();
            //console.log('Ditto button has been clicked');
            // If the box is not full, trigger a click on the actual ditto button
            if (thisZoneData.currentPokemon.length < pokemonRequiredToStart){
                    $('button[data-action="add"][data-token="ditto"]', $pokePanelSelectButtons).trigger('click');
                }
            });

    }

    // Define a function for resetting zone data to default values
    function resetZoneData(){
        thisZoneData = {};
        thisZoneHistory = [];
        var defaultZoneJSON = JSON.stringify(defaultZoneData);
        thisZoneData = JSON.parse(defaultZoneJSON);
        recalculateZoneStats();
    }

    // Define a function for looping through indexes and generating helpful values
    var possibleGenders = ['male', 'female', 'none'];
    var nationalDexNumbers = [];
    var missingDexNumbers = [];
    var maxDexNumber = 0;
    var legacyTokenMap = {};
    function optimizeIndexes(){
        $pokePanelLoading.append('.'); // append loading dot
        if (PokemonSpeciesIndexTokens.length){

            // Loop through individual species and pre-generate certain attributes
            for (var key = 0; key < PokemonSpeciesIndexTokens.length; key++){
                var token = PokemonSpeciesIndexTokens[key];

                // Calculate life, breed, and influence points now so we don't have to later
                var indexInfo = PokemonSpeciesIndex[token];
                if (typeof indexInfo.lifePoints === 'undefined'){ indexInfo.lifePoints = calculateLifePoints(indexInfo['baseStats']); }
                if (typeof indexInfo.breedPoints === 'undefined'){ indexInfo.breedPoints = calculateBreedPoints(indexInfo['baseStats']); }
                if (typeof indexInfo.influencePoints === 'undefined'){ indexInfo.influencePoints = calculateInfluencePoints(indexInfo); }

                // DEBUG CHECKS FOR REQUIRED DATA
                //if (typeof indexInfo.eggCycles === 'undefined'){ //console.log('eggCycles are undefined for ', token, indexInfo); }

                // If the number has been defined, add it to the above list
                if (typeof indexInfo.number !== 'undefined'
                    && nationalDexNumbers.indexOf(indexInfo.number) === -1){
                    nationalDexNumbers.push(indexInfo.number);
                    }

                // Use the national dex number if not explicitly provided
                /*
                if (typeof indexInfo.number !== 'undefined'
                    && typeof indexInfo.sortNumber === 'undefined'){
                    if (typeof indexInfo.dexNumber !== 'undefined'){ indexInfo.sortNumber = indexInfo.dexNumber; }
                    else if (typeof indexInfo.dexNumber !== 'undefined'){ indexInfo.sortNumber = indexInfo.dexNumber; }
                    else { indexInfo.sortNumber = indexInfo.number; }
                    }
                    */

                // Check to see if this pokemon has been renamed
                if (typeof indexInfo.legacyToken !== 'undefined'){ legacyTokenMap[indexInfo.legacyToken] = indexInfo.token; }

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

                // If this pokemon's evolutions are a clone of another, reference that here
                if (typeof indexInfo.cloneEvolutions !== 'undefined'
                    && typeof PokemonSpeciesIndex[indexInfo.cloneEvolutions] !== 'undefined'
                    && typeof PokemonSpeciesIndex[indexInfo.cloneEvolutions].nextEvolutions !== 'undefined'){
                        indexInfo.nextEvolutions = PokemonSpeciesIndex[indexInfo.cloneEvolutions].nextEvolutions;
                    }

                // Collect tokens for all related pokemon and add here
                indexInfo.relatedSpecies = getRelatedSpeciesTokens(indexInfo.token);
                if (typeof indexInfo.baseSpecies !== 'undefined'
                    && typeof PokemonSpeciesIndex[indexInfo.baseSpecies] !== 'undefined'
                    && indexInfo.relatedSpecies.indexOf(indexInfo.baseSpecies) === -1){
                    var baseRelatedSpecies = getRelatedSpeciesTokens(indexInfo.baseSpecies);
                    baseRelatedSpecies = baseRelatedSpecies.concat(indexInfo.relatedSpecies);
                    baseRelatedSpecies = baseRelatedSpecies.filter(arrayFilterUnique);
                    indexInfo.relatedSpecies = baseRelatedSpecies;
                    }

                // Define this pokemon's base generation (as in, the lowest in its related species)
                if (typeof indexInfo.baseGameGeneration === 'undefined'){
                    indexInfo.baseGameGeneration = indexInfo.gameGeneration;
                    for (var i = 0; i < indexInfo.relatedSpecies.length; i++){
                        var relIndex = PokemonSpeciesIndex[indexInfo.relatedSpecies[i]];
                        if (relIndex.gameGeneration < indexInfo.baseGameGeneration
                            || (indexInfo.baseGameGeneration === 'x' && relIndex.gameGeneration !== 'x')){
                            indexInfo.baseGameGeneration = relIndex.gameGeneration;
                            }
                        }
                    }

                // If this pokemon has ultra energy or is in ultra beast, add it to the parent array
                if (indexInfo.class === 'ultra-beast'){ ultraBeastSpecies.push(indexInfo.token); }
                if (indexInfo.hasUltraEnergy === true){ ultraEnergySpecies.push(indexInfo.token); }

                // Push this pokemon's name into the translation index (so it's easier to parse seeds)
                globalNameToTokenIndex[indexInfo.name] = indexInfo.token;

                // If this pokemon has a ny special effects defined, add them to the index
                if (typeof indexInfo.speciesEffects !== 'undefined'
                    && indexInfo.speciesEffects.length > 0){
                    if (typeof globalSpeciesEffects[indexInfo.token] === 'undefined'){ globalSpeciesEffects[indexInfo.token] = []; }
                    for (var i = 0; i < indexInfo.speciesEffects.length; i++){ globalSpeciesEffects[indexInfo.token].push(indexInfo.speciesEffects[i]); }
                    }

                // If this pokemon is in a special class, incremeent appropriate counters
                var isSpecial = false;
                if (indexInfo.token === 'unown'
                    || indexInfo.token === 'ditto'
                    || indexInfo.token === 'super-ditto'){
                    totalMiscBeasts++;
                    isSpecial = true;
                    } else if (indexInfo.class === 'legendary'){
                    totalLegendaryPokemon++;
                    isSpecial = true;
                    } else if (indexInfo.class === 'mythical'){
                    totalMythicalPokemon++;
                    isSpecial = true;
                    } else if (indexInfo.class === 'ultra-beast'){
                    totalUltraBeasts++;
                    isSpecial = true;
                    } else if (indexInfo.class === 'mythical'){
                    totalMythicalPokemon++;
                    isSpecial = true;
                    }
                if (isSpecial){
                    totalSpecialPokemon++;
                    }


                }

            /*
            //console.log('totalSpecialPokemon = ', totalSpecialPokemon);
            //console.log('totalLegendaryPokemon = ', totalLegendaryPokemon);
            //console.log('totalMythicalPokemon = ', totalMythicalPokemon);
            //console.log('totalUltraBeasts = ', totalUltraBeasts);
            //console.log('totalMiscBeasts = ', totalMiscBeasts);
            //console.log('PokemonSpeciesIndexTokens.length = ', PokemonSpeciesIndexTokens.length);
            //console.log('numRequiredToCompletePokedex = ', (PokemonSpeciesIndexTokens.length - totalSpecialPokemon));
            */

            // Create a sorted list of pokemon species tokens so we don't have to later
            for (var key = 0; key < PokemonSpeciesIndexTokens.length; key++){
                var token = PokemonSpeciesIndexTokens[key];
                PokemonSpeciesDexOrder.push(token);
                PokemonSpeciesDisplayOrder.push(token);
                }

            // Sort the dex list in official national order, BUT with family lines together
            PokemonSpeciesDexOrder.sort(function(tokenA, tokenB){

                var infoA = PokemonSpeciesIndex[tokenA];
                var infoB = PokemonSpeciesIndex[tokenB];

                var baseInfoA = PokemonSpeciesIndex[infoA.basicEvolution];
                var baseInfoB = PokemonSpeciesIndex[infoB.basicEvolution];

                var basicA = tokenA === infoA.basicEvolution ? true : false;
                var basicB = tokenB === infoB.basicEvolution ? true : false;

                var baseGenA = baseInfoA['baseGameGeneration'];
                var baseGenB = baseInfoB['baseGameGeneration'];

                var baseNumA = baseInfoA['sortNumber'];
                if (typeof baseInfoA['dexNumber'] !== 'undefined'){ baseNumA = baseInfoA['dexNumber']; }
                if (typeof baseInfoA['subNumber'] !== 'undefined'){ baseNumA += (baseInfoA['subNumber'] / 10); }

                var baseNumB = baseInfoB['sortNumber'];
                if (typeof baseInfoB['dexNumber'] !== 'undefined'){ baseNumB = baseInfoB['dexNumber']; }
                if (typeof baseInfoB['subNumber'] !== 'undefined'){ baseNumB += (baseInfoB['subNumber'] / 10); }

                //var dittoA = false;
                //var dittoB = false;
                //if (tokenA === 'ditto'){ dittoA = true; }
                //if (tokenB === 'ditto'){ dittoB = true; }

                //var shinyDittoA = false;
                //var shinyDittoB = false;
                //if (tokenA === 'super-ditto'){ shinyDittoA = true; }
                //if (tokenB === 'super-ditto'){ shinyDittoB = true; }

                //var unownA = false;
                //var unownB = false;
                //if (tokenA === 'unown'){ unownA = true; }
                //if (tokenB === 'unown'){ unownB = true; }

                var specialA = false;
                var specialB = false;
                if (infoA['class'] === 'legendary' || infoA['class'] === 'mythical' || infoA['class'] === 'ultra-beast'){ specialA = true; }
                if (infoB['class'] === 'legendary' || infoB['class'] === 'mythical' || infoB['class'] === 'ultra-beast'){ specialB = true; }

                var regVariantA = false;
                var regVariantB = false;
                if (infoA['gameGeneration'] !== infoB['gameGeneration']){
                    if (infoA['formClass'] === 'regional-variant'
                        || infoA['formClass'] === 'baby-evolution'){
                        regVariantA = true;
                        }
                    if (infoB['formClass'] === 'regional-variant'
                        || infoB['formClass'] === 'baby-evolution'){
                        regVariantB = true;
                        }
                    }

                var genderVariantA = false;
                var genderVariantB = false;
                //if (infoA['formClass'] === 'gender-variant' && typeof infoA['prevEvolution'] === 'undefined'){ genderVariantA = true; }
                //if (infoB['formClass'] === 'gender-variant' && typeof infoB['prevEvolution'] === 'undefined'){ genderVariantB = true; }

                if (false){ return 0; }

                else if (specialA && !specialB){ return 1; }
                else if (!specialA && specialB){ return -1; }

                else if (baseGenA < baseGenB){ return -1; }
                else if (baseGenA > baseGenB){ return 1; }

                else if (baseNumA < baseNumB){ return -1; }
                else if (baseNumA > baseNumB){ return 1; }

                else if (regVariantA && !regVariantB){ return 1; }
                else if (!regVariantA && regVariantB){ return -1; }

                else {

                    var invertVariant = false;
                    if (regVariantA && regVariantB && basicA && basicB){ invertVariant = true; }

                    if (infoA['order'] < infoB['order']){ return -1 * (invertVariant ? -1 : 1); }
                    else if (infoA['order'] > infoB['order']){ return 1 * (invertVariant ? -1 : 1); }
                    else { return 0; }

                }

                return 0;

                });

            //console.log('Tyrogue = ', PokemonSpeciesDexOrder.indexOf('tyrogue'), PokemonSpeciesIndex['tyrogue'].sortNumber, PokemonSpeciesDexOrder.indexOf('tyrogue') < PokemonSpeciesDexOrder.indexOf('hitmonlee'), PokemonSpeciesIndex['tyrogue'].sortNumber < PokemonSpeciesIndex['hitmonlee'].sortNumber);
            //console.log('Hitmonlee = ', PokemonSpeciesDexOrder.indexOf('hitmonlee'), PokemonSpeciesIndex['hitmonlee'].sortNumber, PokemonSpeciesDexOrder.indexOf('hitmonlee') < PokemonSpeciesDexOrder.indexOf('hitmonchan'), PokemonSpeciesIndex['hitmonlee'].sortNumber < PokemonSpeciesIndex['hitmonchan'].sortNumber);
            //console.log('Hitmonchan = ', PokemonSpeciesDexOrder.indexOf('hitmonchan'), PokemonSpeciesIndex['hitmonchan'].sortNumber, PokemonSpeciesDexOrder.indexOf('hitmonchan') < PokemonSpeciesDexOrder.indexOf('hitmontop'), PokemonSpeciesIndex['hitmonchan'].sortNumber < PokemonSpeciesIndex['hitmontop'].sortNumber);
            //console.log('Hitmontop = ', PokemonSpeciesDexOrder.indexOf('hitmontop'), PokemonSpeciesIndex['hitmontop'].sortNumber, PokemonSpeciesDexOrder.indexOf('hitmontop') > PokemonSpeciesDexOrder.indexOf('hitmonchan'), PokemonSpeciesIndex['hitmontop'].sortNumber > PokemonSpeciesIndex['hitmonchan'].sortNumber);

            // Sort the display list in national order, BUT with family lines together and inverted (parents on top)
            PokemonSpeciesDisplayOrder.sort(function(tokenA, tokenB){

                var infoA = PokemonSpeciesIndex[tokenA];
                var infoB = PokemonSpeciesIndex[tokenB];

                var baseInfoA = PokemonSpeciesIndex[infoA.basicEvolution];
                var baseInfoB = PokemonSpeciesIndex[infoB.basicEvolution];

                var basicA = tokenA === infoA.basicEvolution ? true : false;
                var basicB = tokenB === infoB.basicEvolution ? true : false;

                var baseNumA = baseInfoA['sortNumber'];
                if (typeof baseInfoA['displayNumber'] !== 'undefined'){ baseNumA = baseInfoA['displayNumber']; }
                if (typeof baseInfoA['subNumber'] !== 'undefined'){ baseNumA += (baseInfoA['subNumber'] / 10); }

                var baseNumB = baseInfoB['sortNumber'];
                if (typeof baseInfoB['displayNumber'] !== 'undefined'){ baseNumB = baseInfoB['displayNumber']; }
                if (typeof baseInfoB['subNumber'] !== 'undefined'){ baseNumB += (baseInfoB['subNumber'] / 10); }

                var shadowA = false;
                var shadowB = false;
                if (baseInfoA.formClass === 'shadow-variant'){ shadowA = true; }
                if (baseInfoB.formClass === 'shadow-variant'){ shadowB = true; }

                var shiningA = false;
                var shiningB = false;
                if (baseInfoA.formClass === 'shining-variant'){ shiningA = true; }
                if (baseInfoB.formClass === 'shining-variant'){ shiningB = true; }

                var dittoA = false;
                var dittoB = false;
                if (tokenA === 'ditto'){ dittoA = true; }
                if (tokenB === 'ditto'){ dittoB = true; }

                var zygardeA = false;
                var zygardeB = false;
                if (tokenA.indexOf('zygarde') !== -1){ zygardeA = true; }
                if (tokenB.indexOf('zygarde') !== -1){ zygardeB = true; }

                var arceusA = false;
                var arceusB = false;
                if (tokenA === 'arceus'){ arceusA = true; }
                if (tokenB === 'arceus'){ arceusB = true; }

                var shinyDittoA = false;
                var shinyDittoB = false;
                if (tokenA === 'super-ditto'){ shinyDittoA = true; }
                if (tokenB === 'super-ditto'){ shinyDittoB = true; }

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
                if (infoA['gameGeneration'] !== infoB['gameGeneration']){
                    //if (infoA['formClass'] === 'regional-variant' || infoA['formClass2'] === 'regional-variant'){ regVariantA = true; }
                    //if (infoB['formClass'] === 'regional-variant' || infoB['formClass2'] === 'regional-variant'){ regVariantB = true; }
                    }

                var genderVariantA = false;
                var genderVariantB = false;
                if (infoA['formClass'] === 'gender-variant' && typeof infoA['prevEvolution'] === 'undefined'){ genderVariantA = true; }
                if (infoB['formClass'] === 'gender-variant' && typeof infoB['prevEvolution'] === 'undefined'){ genderVariantB = true; }

                if (false){ return 0; }

                else if (arceusA && !arceusB){ return 1; }
                else if (!arceusA && arceusB){ return -1; }

                else if (shiningA && !shiningB){ return 1; }
                else if (!shiningA && shiningB){ return -1; }

                else if (shadowA && !shadowB){ return 1; }
                else if (!shadowA && shadowB){ return -1; }

                else if (zygardeA && !zygardeB){ return 1; }
                else if (!zygardeA && zygardeB){ return -1; }

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
                var orderA = PokemonSpeciesDexOrder.indexOf(tokenA);
                var orderB = PokemonSpeciesDexOrder.indexOf(tokenB);
                if (orderA < orderB){ return -1; }
                else if (orderA > orderB){ return 1; }
                else { return 0; }
                });

            // Calculate how many nation dex numbers are accounted for vs how many remain
            nationalDexNumbers.sort(function(a,b){ a = parseInt(a); b = parseInt(b); return a < b ? -1 : (a > b ? 1 : 0); });
            maxDexNumber = nationalDexNumbers[nationalDexNumbers.length - 1];
            for (var num = 1; num <= maxDexNumber; num++){ if (nationalDexNumbers.indexOf(num) === -1){ missingDexNumbers.push(num); } }

            }

        // Define the default set of type form triggers for pokemon that use them
        for (var i = 0; i < PokemonTypesIndexTokens.length; i++){
            var typeToken = PokemonTypesIndexTokens[i];
            defaultTypeForms.push(typeToken);
            defaultTypeFormTriggers[typeToken] = typeToken;
            }

        // Return on complete
        return;

    }

    // Define a function for actually starting the simulation
    var simulationStarted = false;
    function startSimulation(){
        //console.log('startSimulation()');

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
        $('.controls .control', $panelButtons).removeClass('hidden');
        $('.controls .start', $panelButtons).addClass('hidden');
        $('.controls .restart', $panelButtons).addClass('hidden');
        $('.controls .new', $panelButtons).addClass('hidden');

        // Remove the hidden class from the pokemon wrapper
        $('.select-pokemon', $panelButtons).addClass('hidden');
        $('.filter-pokemon[data-target="buttons"]', $panelButtons).addClass('hidden');

        // Reset any button filters back to the "all" option
        $('.filter-pokemon[data-target="buttons"] .option', $panelButtons).removeClass('.active');
        $('.filter-pokemon[data-target="buttons"] .option:first-child', $panelButtons).addClass('.active');

        // Update the box details header, unhide the details info bar
        $('.details.zone .title', $panelMainOverview).html('Box Details');
        $('.details.zone .list', $panelMainOverview).removeClass('hidden');

        // Update the controls and make the play button show as active
        $('.controls .control.speed', $panelButtons).removeClass('active');
        $('.controls .control.speed.play', $panelButtons).addClass('active');

        // Re-sort the starter pokemon by display order for simulation consistency
        thisZoneData.currentPokemon.sort(function(pokeA, pokeB){
            var orderA = PokemonSpeciesDisplayOrder.indexOf(pokeA.token);
            var orderB = PokemonSpeciesDisplayOrder.indexOf(pokeB.token);
            if (orderA < orderB){ return -1; }
            else if (orderA > orderB){ return 1; }
            else { return 0; }
            });

        // Loop through all the starters again and collect their tokens (also update orders)
        var starterCounts = {};
        var starterPokemon = [];
        var starterPokemonTokens = [];
        var starterSeed = 0;
        for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
            var starterInfo = thisZoneData.currentPokemon[key];
            starterPokemon.push([starterInfo.token, starterInfo.gender]);
            starterInfo.order = key;
            starterSeed += PokemonSpeciesDexOrder.indexOf(starterInfo.token) + 1;
            var countToken = starterInfo.token+'/'+starterInfo.gender;
            if (typeof starterCounts[countToken] === 'undefined'){ starterCounts[countToken] = 0; }
            if (starterPokemonTokens.indexOf(starterInfo.token) === -1){ starterPokemonTokens.push(starterInfo.token); }
            starterCounts[countToken]++;
            }
        //console.log('starterPokemon = ', starterPokemon);
        //console.log('starterSeed = ', starterSeed);

        // Push this list of starters into the history array
        StarterPokemonHistory.push(starterPokemon);
        StarterPokemonSeed = starterSeed;
        //console.log('StarterPokemonHistory = ', StarterPokemonHistory);
        //console.log('StarterPokemonSeed = ', StarterPokemonSeed);

        // Generate the seed text to add to the footer for copy/paste
        var starterList = [];
        for (var key = 0; key < starterPokemonTokens.length; key++){
            var starterToken = starterPokemonTokens[key];
            var starterInfo = PokemonSpeciesIndex[starterToken];
            var starterName = starterInfo.name;
            var countStrings = [];
            if (typeof starterCounts[starterToken+'/male'] !== 'undefined'){ countStrings.push(starterCounts[starterToken+'/male']+'m'); }
            if (typeof starterCounts[starterToken+'/female'] !== 'undefined'){ countStrings.push(starterCounts[starterToken+'/female']+'f'); }
            if (typeof starterCounts[starterToken+'/none'] !== 'undefined'){ countStrings.push(starterCounts[starterToken+'/none']); }
            countStrings = countStrings.sort(function(a,b){ return a > b ? 1 : (a < b ? -1 : 0); });
            starterName += ' &times;'+countStrings.join('/');
            starterList.push(starterName);
            }
        var starterText = '``[PBS | '+ starterList.join(' / ') +' | v'+ appVersionNumber +']``';
        $('.starter-pokemon .seed', $panelButtons).html(starterText);
        $('.starter-pokemon', $panelButtons).removeClass('hidden');

        // Start the day timeout so the sim can actually start
        dayTimeoutSpeed = prevSpeedToken !== false ? prevSpeedToken : 'normal';
        dayTimeoutDuration = prevSpeedDuration !== false ? prevSpeedDuration : speedValues[dayTimeoutSpeed];
        dayTimeoutID = setTimeout(dayTimeoutHandler, dayTimeoutDuration);
        $('body').attr('data-speed', dayTimeoutSpeed);
        $controlButtons.filter('.speed').removeClass('active');
        $controlButtons.filter('.'+ dayTimeoutSpeed).addClass('active');
        $controlButtons.filter('.speed:not(.play):not(.pause)').removeClass('hidden');
        $controlButtons.filter('.play').addClass('active');

    }

    // Define a function for ending the current simulation and doing cleanup
    function endCurrentSimulation(){
        //console.log('endCurrentSimulation()');

        // Set the start flag to false
        simulationStarted = false;

        // Reset the day timeout so we can start fresh
        if (dayTimeoutID !== false){ clearTimeout(dayTimeoutID); }
        dayTimeoutID = false;
        dayTimeoutStarted = false;
        dayTimeoutDuration = 1200;

        // Remove the started class from the main overview
        $panelMainOverview.removeClass('started');

        // Add "waiting" classes to pokemon slots
        $('.details.pokemon .list.slots li:lt(11)', $panelMainOverview).addClass('waiting');

        // Remove all list items from the sprite wrapper
        $('li', $panelPokemonSpriteWrapper).remove();

        // Hide the type and species overview panels
        $panelTypesOverview.addClass('hidden');
        $panelSpeciesOverview.addClass('hidden');
        $panelVisitorsOverview.addClass('hidden');

        // Update the button controls with the appropriate classes
        $('.controls .control', $panelButtons).addClass('hidden');
        $('.controls .restart', $panelButtons).removeClass('hidden');
        $('.controls .new', $panelButtons).removeClass('hidden');

        // Reset the field background to the default plain one
        var newImage = 'images/fields/none-fullsize.png';
        $('.details.pokemon .field .bg', $panelMainOverview).css({backgroundImage:'url('+ newImage +')'});

        // Clear and reset all the zone variables and history
        resetZoneData();

        // Reset the global randomization seed
        Math.seed = 1;
        //console.log('\n Math.seed reset to ', Math.seed);

        // Update the overiew with cleared data
        updateOverview();

    }

    // Define a function for restarting the current simulation (with same seeds)
    function restartCurrentSimulation(){
        //console.log('restartCurrentSimulation()');

        // First end the current simulation
        endCurrentSimulation();

        // Hide any control buttons that were still showning
        $('.controls .control', $panelButtons).addClass('hidden');

        // Hide the starter pokemon from last time, they're visible
        $('.starter-pokemon', $panelButtons).addClass('hidden');

        // Regenerate the pokemon buttons
        generatePokemonButtons();

        // Show the pokemon buttons
        $('.select-pokemon', $panelButtons).removeClass('hidden');
        $('.filter-pokemon[data-target="buttons"]', $panelButtons).removeClass('hidden');
        $('.controls .start', $panelButtons).removeClass('hidden').removeClass('ready');

        // Hide the details info bar
        $('.details.zone .title', $panelMainOverview).html('&nbsp;');
        $('.details.zone .list', $panelMainOverview).addClass('hidden');

        // Autoscroll to the box details header
        $panelMainOverview.find('.details.zone .title').trigger('click');

        // Update the header to indicate the next action (Select Pokemon)
        $('.details.zone .title', $panelMainOverview).html('Select Starter Pokémon');

        // Update the overiew with cleared data
        updateOverview();

        // Collect the last set of starters used and then use them again
        var prevStarters = StarterPokemonHistory[StarterPokemonHistory.length - 1];
        //console.log('prevStarters = ', prevStarters);
        if (typeof prevStarters !== 'undefined'){
            for (var key = 0; key < prevStarters.length; key++){
                var starterInfo = prevStarters[key];
                var starterToken = starterInfo[0];
                var starterGender = starterInfo[1];
                //console.log('starterInfo = ', starterInfo);
                //console.log('starterToken = ', starterInfo);
                //console.log('starterGender = ', starterInfo);
                addPokemonToZone(starterToken, false, false, false, {gender:starterGender});
                }
            }

        // Recalculate zone stats then show the start button
        recalculateZoneStats();
        $('.controls .start', $panelButtons).addClass('ready');

    }

    // Define a function for resetting the simulator (so we can select different seeds)
    function resetSimulator(){
        //console.log('resetSimulator()');

        // First end the current simulation
        endCurrentSimulation();

        // Hide any control buttons that were still showning
        $('.controls .control', $panelButtons).addClass('hidden');

        // Regenerate the pokemon buttons
        generatePokemonButtons();

        // Show the pokemon buttons
        $('.select-pokemon', $panelButtons).removeClass('hidden');
        $('.filter-pokemon[data-target="buttons"]', $panelButtons).removeClass('hidden');
        $('.controls .start', $panelButtons).removeClass('hidden').removeClass('ready');

        // Hide the starter pokemon from last time, we're starting fresh
        $('.starter-pokemon', $panelButtons).addClass('hidden');

        // Hide the details info bar
        $('.details.zone .title', $panelMainOverview).html('&nbsp;');
        $('.details.zone .list', $panelMainOverview).addClass('hidden');

        // Autoscroll to the box details header
        $panelMainOverview.find('.details.zone .title').trigger('click');

        // Update the header to indicate the next action (Select Pokemon)
        $('.details.zone .title', $panelMainOverview).html('Select Starter Pokémon');

        // Update the overiew with cleared data
        updateOverview();

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
    function getPokemonIcon(token, egg, info, returnProps){
        if (typeof egg !== 'boolean'){ egg = false; }
        if (typeof info === 'undefined'){ info = {}; }
        if (typeof returnProps !== 'boolean'){ returnProps = false; }

        var indexInfo = PokemonSpeciesIndex[token];
        var iconImage = 'images/icons/';
        var iconClass = 'sprite ';
        var iconStyle = '';

        var filter = '';
        if (typeof info.variantHueOffset !== 'undefined'){ filter += 'hue-rotate('+ info.variantHueOffset +'deg) '; }
        if (typeof info.variantSatOffset !== 'undefined'){ filter += 'saturate('+ info.variantSatOffset +'%) '; }
        iconStyle += filter.length ? '-webkit-filter: '+ filter +'; filter: '+ filter +'; ' : '';

        var markup = '';
        if (egg){

            iconImage += 'eggs/'+indexInfo['types'][0]+'.png';
            //markup += '<img class="'+ iconClass +'"'+ iconStyle +' src="'+ iconImage +'" data-token="'+ token +'" />';
            markup += '<span class="'+ iconClass +'" style="background-image: url('+ iconImage +'); '+ iconStyle +'" data-token="'+ token +'"></span>';
            if (typeof indexInfo['types'][1] === 'string'){
                iconImage = 'images/icons/eggs/'+indexInfo['types'][1]+'2.png';
                //markup += '<img class="'+ iconClass +' overlay"'+ iconStyle +' src="'+ iconImage +'" data-token="'+ token +'" />';
                markup += '<span class="'+ iconClass +' overlay" style="background-image: url('+ iconImage +'); '+ iconStyle +'" data-token="'+ token +'"></span>';
                }

            } else {

            iconImage += 'pokemon/';

            // Check if the pokemon has the ILLUSION ability, else generate it's token normally
            var abilityTokens = Object.values(indexInfo['abilities']);
            if (simulationStarted
                && addedPokemonSpeciesTokens.length > 1
                && abilityTokens.indexOf('illusion') !== -1
                && (info['growthCycles'] >= 10 || info['isVisitor'] === true)
                && info['reachedAdulthood'] === false){

                // The pokemon has an active illusion of another on the field
                var lastToken = addedPokemonSpeciesTokens[addedPokemonSpeciesTokens.length - 1];
                if (lastToken === indexInfo['token']){ lastToken = addedPokemonSpeciesTokens[addedPokemonSpeciesTokens.length - 2]; }
                var cloneIndexInfo = PokemonSpeciesIndex[lastToken];
                if (typeof cloneIndexInfo['formToken'] !== 'undefined'){ iconImage += cloneIndexInfo['number']+'-'+cloneIndexInfo['formToken']+'.png'; }
                else { iconImage += cloneIndexInfo['number']+'.png'; }

                } else {

                // The pokemon is appearing normally without any image mods
                if (typeof info['formToken'] !== 'undefined'){ iconImage += indexInfo['number']+'-'+info['formToken']+'.png'; }
                else if (typeof indexInfo['formToken'] !== 'undefined'){ iconImage += indexInfo['number']+'-'+indexInfo['formToken']+'.png'; }
                else if (typeof indexInfo['baseForm'] !== 'undefined'){ iconImage += indexInfo['number']+'-'+indexInfo['baseForm']+'.png'; }
                else { iconImage += indexInfo['number']+'.png'; }

                }

            //markup += '<img class="'+ iconClass +'"'+ iconStyle +' src="'+ iconImage +'" data-token="'+ token +'" />';
            markup += '<span class="'+ iconClass +'"'+ iconStyle +' style="background-image: url('+ iconImage +'); '+ iconStyle +'" data-token="'+ token +'"></span>';

            }

        // Return either props or markup for the pokemon
        if (returnProps){ return {image: iconImage, class: iconClass, style: iconStyle}; }
        else { return markup; }

    }

    // Define a function for generating Pokemon markup based on current info
    function generatePokemonCellMarkup(pokeInfo, cellKey){

        // Define a variable to hold the cell markup
        var cellMarkup = '';

        // Calculate the pokemon's position based on key
        var colPercent = 100 / thisZoneData.sizeCols;
        var cellPosition = convertKeyToTableCell(cellKey, thisZoneData.sizeCols);

        // Generate the common item class and style for all cells (position)
        var itemClass = pokeInfo.eggCycles === 0 ? 'pokemon ' : 'egg ';
        var itemStyle = '';
        itemStyle += 'left: '+((cellPosition.col - 1) * colPercent)+'%; ';
        itemStyle += 'top: '+((cellPosition.row - 1) * colPercent)+'%; ';

        // Check if the pokemon is in its egg before drawing the sprite
        if (pokeInfo.eggCycles === 0){

            //console.log('this '+pokeInfo.token+' has hatched, show it (cycles:'+pokeInfo.eggCycles+')');
            var pokeIcon =  '<span class="swrap"><i>' + getPokemonIcon(pokeInfo.token, false, pokeInfo) + '</i></span>';
            var pokeCount = '<span class="count growth">+'+pokeInfo.growthCycles+'</span>';
            var extraMarkup = '';
            if (pokeInfo.watchFlag === true){ extraMarkup += '<span class="tag watched"></span> '; }
            if (pokeInfo.isVisitor === true){ extraMarkup += '<span class="tag visitor"></span> '; }
            if (pokeInfo.gender === 'male'){ extraMarkup += '<span class="gender male"></span> '; }
            else if (pokeInfo.gender === 'female'){ extraMarkup += '<span class="gender female"></span> '; }
            if (pokeInfo.reachedAdulthood === true){ extraMarkup += '<span class="tag adult"></span> '; }
            if (pokeInfo.isVisitor === true && pokeInfo.daysOld == 0){ itemClass += 'new '; }
            if (pokeInfo.reachedAdulthood === true && pokeInfo.growthCycles <= 0){ itemClass += 'fainted '; }
            cellMarkup += '<li ' +
                'class="'+ itemClass +'" ' +
                'style="'+itemStyle+'" ' +
                'data-id="'+ pokeInfo.id +'" ' +
                'data-key="'+cellKey+'" ' +
                'data-order="'+pokeInfo.order+'" ' +
                //'data-position="col:'+pokePosition.col+',row:'+pokePosition.row+'"' +
                '>' +
                    '<div>'+
                        pokeIcon +
                        pokeCount +
                        extraMarkup +
                    '</div>' +
                '</li>';

            } else if (pokeInfo.eggCycles > 0){

            //console.log('this '+pokeInfo.token+' has not hatched, show it (cycles:'+pokeInfo.eggCycles+')');
            var pokeIcon =  '<span class="swrap"><i>' + getPokemonIcon(pokeInfo.token, true, pokeInfo) + '</i></span>';
            var pokeCount = '<span class="count egg">-'+pokeInfo.eggCycles+'</span>';
            var extraMarkup = '';
            if (pokeInfo.watchFlag === true){ extraMarkup += '<span class="tag watched"></span> '; }
            if (pokeInfo.isVisitor === true){ extraMarkup += '<span class="tag visitor"></span> '; }
            if (pokeInfo.gender === 'male'){ extraMarkup += '<span class="gender male"></span> '; }
            else if (pokeInfo.gender === 'female'){ extraMarkup += '<span class="gender female"></span> '; }
            if (pokeInfo.daysOld == 0){ itemClass += 'new '; }
            cellMarkup += '<li ' +
                'class="'+ itemClass +'" ' +
                'style="'+itemStyle+'" ' +
                'data-id="'+ pokeInfo.id +'" ' +
                'data-key="'+cellKey+'" ' +
                'data-order="'+pokeInfo.order+'" ' +
                //'data-position="col:'+pokePosition.col+',row:'+pokePosition.row+'"' +
                '>' +
                    '<div>'+
                        pokeIcon +
                        pokeCount +
                        extraMarkup +
                    '</div>' +
                '</li>';

            }

        // Return generated cell markup
        return cellMarkup;

    }

    // Define a function for calculating current pokedex totals
    var currentPokedexTotals = {};
    function recalculatePokedexTotals(){
        //console.log('recalculatePokedexTotals()');

        // Define variables for counting certain things
        var pokedexTotals = {
            totalPokemon: 0,
            totalPokemonEncountered: 0,
            totalCommonPokemon: 0,
            totalCommonPokemonEncountered: 0,
            totalLegendaryPokemon: 0,
            totalLegendaryPokemonEncountered: 0,
            totalMythicalPokemon: 0,
            totalMythicalPokemonEncountered: 0,
            totalUltraBeasts: 0,
            totalUltraBeastsEncountered: 0,
            totalsByGeneration: {}
            };

        // Loop through all pokemon and increment applicable totals
        for (var i = 0; i < PokemonSpeciesIndexTokens.length; i++){

            // Collect data for this pokemon from the index
            var pokeToken = PokemonSpeciesIndexTokens[i];
            var pokeIndex = PokemonSpeciesIndex[pokeToken];
            //console.log('pokeIndex = ', pokeToken, pokeIndex);

            // Check to see which class of pokemon this is
            var pokemonKind = 'common';
            if (pokeIndex.class === 'legendary'
                || pokeIndex.class === 'mythical'
                || pokeIndex.class === 'ultra-beast'){
                pokemonKind = pokeIndex.class;
                }

            // Check to see if this pokemon has been encountered
            var pokemonEncountered = typeof PokemonSpeciesSeen[pokeToken] !== 'undefined' && PokemonSpeciesSeen[pokeToken] > 0 ? true : false;

            // Increment overall totals for this pokemon
            pokedexTotals.totalPokemon++;
            if (pokemonEncountered){ pokedexTotals.totalPokemonEncountered++; }

            // Incremenet any totals specific to their kind/class
            if (pokemonKind === 'common'){
                pokedexTotals.totalCommonPokemon++;
                if (pokemonEncountered){ pokedexTotals.totalCommonPokemonEncountered++; }
                } else if (pokemonKind === 'legendary'){
                pokedexTotals.totalLegendaryPokemon++;
                if (pokemonEncountered){ pokedexTotals.totalLegendaryPokemonEncountered++; }
                } else if (pokemonKind === 'mythical'){
                pokedexTotals.totalMythicalPokemon++;
                if (pokemonEncountered){ pokedexTotals.totalMythicalPokemonEncountered++; }
                } else if (pokemonKind === 'ultra-beast'){
                pokedexTotals.totalUltraBeastPokemon++;
                if (pokemonEncountered){ pokedexTotals.totalUltraBeastPokemonEncountered++; }
                }

            // And now increment the generation totals
            var pokemonGeneration = typeof pokeIndex.dexGeneration !== 'undefined' ? pokeIndex.dexGeneration : pokeIndex.gameGeneration;
            if (typeof pokedexTotals.totalsByGeneration[pokemonGeneration] === 'undefined'){ pokedexTotals.totalsByGeneration[pokemonGeneration] = {totalPokemon: 0, totalPokemonEncountered: 0}; }
            pokedexTotals.totalsByGeneration[pokemonGeneration].totalPokemon++;
            if (pokemonEncountered){ pokedexTotals.totalsByGeneration[pokemonGeneration].totalPokemonEncountered++; }

            }

        // Update the parent array with calculated pokedex totals
        //console.log('pokedexTotals = ', pokedexTotals);
        currentPokedexTotals = pokedexTotals;

    }

    // Define a function for checking if we've unlocked shiny ditto
    function hasUnlockedSuperDitto(){
        // Allow shiny ditto if the user has completed at least one generation's dex
        var totalsByGeneration = currentPokedexTotals.totalsByGeneration;
        for (var gen = 1; gen < 7; gen++){
            if (typeof totalsByGeneration[gen] === 'undefined'){ break; }
            var genTotals = totalsByGeneration[gen];
            if (genTotals.totalPokemonEncountered >= genTotals.totalPokemon){
                return true;
                }
            }
        return false;
    }

    // Define a function for checking if we've unlocked special pokemon
    function hasUnlockedSpecialPokemon(){
        // Check to see if we can allow special pokemon to be selected yet
        var allowSpecialPokemon = false;
        if (currentPokedexTotals.totalCommonPokemonEncountered >= currentPokedexTotals.totalCommonPokemon){ allowSpecialPokemon = true; }
        return allowSpecialPokemon;
    }

    // Define a function for checking if we've unlocked the final pokemon
    function hasUnlockedFinalPokemon(){
        if (currentPokedexTotals.totalPokemonEncountered >= (currentPokedexTotals.totalPokemon - 1)){ return true; }
        return false;
    }

    // Define a function for checking if we've unlocked all pokemon
    function hasUnlockedAllPokemon(){
        if (currentPokedexTotals.totalPokemonEncountered >= currentPokedexTotals.totalPokemon){ return true; }
        return false;
    }

    // Define a function for calculating our completion percent
    function calculatePokedexCompletion(){
        return Math.ceil((currentPokedexTotals.totalPokemonEncountered / currentPokedexTotals.totalPokemon) * 1000) / 10;
    }

    // Define a function for generating the simulator buttons for each Pokemon
    var freeStarterPokemon = [];
    function generatePokemonButtons(){

        //console.log('generatePokemonButtons()');
        $pokePanelLoading.append('.'); // append loading dot

        // Count the number of species seen so far
        var seenSpeciesTokens = Object.keys(PokemonSpeciesSeen);

        // Define the pokemon allowed regardless of seen status, (starters for each gen)
        freeStarterPokemon = [];
        freeStarterPokemon.push('bulbasaur', 'charmander', 'squirtle'); // gen 1 starters
        freeStarterPokemon.push('pikachu', 'eevee'); // special edition starters
        if (seenSpeciesTokens.length >= 151){ freeStarterPokemon.push('chikorita', 'cyndaquil', 'totodile'); } // gen 2 starters
        if (seenSpeciesTokens.length >= 251){ freeStarterPokemon.push('treecko', 'torchic', 'mudkip'); } // gen 3 starters
        if (seenSpeciesTokens.length >= 386){ freeStarterPokemon.push('turtwig', 'chimchar', 'piplup'); } // gen 4 starters
        if (seenSpeciesTokens.length >= 493){ freeStarterPokemon.push('snivy', 'tepid', 'oshawott'); } // gen 5 starters
        if (seenSpeciesTokens.length >= 649){ freeStarterPokemon.push('chespin', 'fennekin', 'froakie'); } // gen 6 starters
        if (seenSpeciesTokens.length >= 721){ freeStarterPokemon.push('rowlet', 'litten', 'popplio'); } // gen 7 starters
        //if (seenSpeciesTokens.length >= 807){ freeStarterPokemon.push('?', '?', '?'); }

        // Unlock the final pokemon ARCEUS if the user has encountered every other species
        if (hasUnlockedFinalPokemon()){ freeStarterPokemon.push('arceus'); }

        // Check to see if we can allow special pokemon to be selected yet
        var allowSpecialPokemon = hasUnlockedSpecialPokemon();

        // Wrap execution in timeout to prevent render-blocking
        window.setTimeout(function(){

            // Define variables to hold gens and types being shown
            var shownGens = [];
            var shownTypes = [];

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

                // Check to see if this pokemon is special in some way
                var pokemonIsSpecial = false;
                if (pokemonData['class'] === 'legendary'
                    || pokemonData['class'] === 'mythical'
                    || pokemonData['class'] === 'ultra-beast'){
                    pokemonIsSpecial = true;
                    }

                // If we're in normal mode, only non-special seen pokemon can be used
                var allowPokemon = true;
                if (!appFreeMode && freeStarterPokemon.indexOf(pokemonToken) === -1){
                    if (pokemonIsSpecial && !allowSpecialPokemon){ allowPokemon = false; }
                    else if (typeof PokemonSpeciesSeen[pokemonToken] === 'undefined' || PokemonSpeciesSeen[pokemonToken] < 1){ allowPokemon = false; }
                    }

                // If this is not an appropriate starter pokemon, continue
                if (!allowPokemon){ continue; }

                // Insert a break after each new generation
                var thisGeneration = typeof pokemonData.buttonGeneration !== 'undefined' ? pokemonData.buttonGeneration : pokemonData.baseGameGeneration;
                if (pokemonIsSpecial){ thisGeneration = 'specials'; }
                if (thisGeneration !== lastGeneration
                    && pokemonData.formClass !== 'gender-variant'
                    && pokemonData.formClass !== 'regional-variant'){
                    if (lastGeneration !== false){ pokePanelMarkup += '<hr class="breaker" />'; }
                    lastGeneration = thisGeneration;
                }

                // Collect the pokemon's image icon
                var pokemonIcon = getPokemonIcon(pokemonToken);

                // Generate the pokemon's name for the hover
                var pokemonName = pokemonData.name;

                // Collect the pokemon's gen in terms of buttons
                var pokemonGen = typeof pokemonData.buttonGeneration !== 'undefined' ? pokemonData.buttonGeneration : pokemonData.gameGeneration;

                // Check to see if this is a SHADOW pokemon
                var isShadowPokemon = pokemonData.formClass === 'shadow-variant' ? true : false;
                var isShiningPokemon = pokemonData.formClass === 'shining-variant' ? true : false;

                // Define the class for the pokemon button
                var buttonClass = 'button type ';
                if (typeof pokemonTypes[0] === 'string'){ buttonClass += pokemonTypes[0]+' '; }
                if (typeof pokemonTypes[1] === 'string'){ buttonClass += pokemonTypes[1]+'2 '; }

                // Update the shown gens and types lists
                if (shownGens.indexOf(pokemonData.gameGeneration) === -1){ shownGens.push(pokemonData.gameGeneration); }
                if (shownTypes.indexOf(pokemonData.types[0]) === -1){ shownTypes.push(pokemonData.types[0]); }
                if (typeof pokemonTypes[1] !== 'undefined' && shownTypes.indexOf(pokemonData.types[1]) === -1){ shownTypes.push(pokemonData.types[1]); }

                // Generate the base title text for this button
                var pokemonTitle = '';
                pokemonTitle += pokemonName;
                if (!isShadowPokemon
                    && !isShiningPokemon){
                    pokemonTitle += ' ('+
                        (pokemonData.types.join(' / ').toLowerCase().replace(/\b[a-z]/g, function(l) { return l.toUpperCase(); }))+
                        ')';
                    }
                if (typeof pokemonData.buttonQuote !== 'undefined'){
                    pokemonTitle += '\n' + '"' + pokemonData.buttonQuote + '"';
                    }

                // Generate the markup for the pokemon button
                var buttonMarkup = '';
                buttonMarkup += '<button '+
                    'class="'+ buttonClass +'" '+
                    'data-action="add" '+
                    'data-kind="pokemon" '+
                    'data-token="'+ pokemonToken +'" '+
                    'data-gen="'+ pokemonGen +'" '+
                    'data-type="'+ pokemonData.types.join(',') +'" '+
                    'title="'+ pokemonTitle.replace('"', '&quot;') +'" '+
                    '>';
                    buttonMarkup += '<span class="gloss"></span>';
                    buttonMarkup += '<span class="plus">+</span>';
                    buttonMarkup += pokemonIcon;
                    //buttonMarkup += '<strong>' + pokemonData['name'] +'</strong>';
                buttonMarkup += '</button>';

                // Appent this button's markup the full list
                pokePanelMarkup += buttonMarkup;

                }

            //console.log('shownGens = ', shownGens);
            //console.log('shownTypes = ', shownTypes);

            // Append generated markup to the panel at once
            if (!$('.buttonwrap', $pokePanelSelectButtons).length){ $pokePanelSelectButtons.append('<div class="buttonwrap"></div>'); }
            else { $('.buttonwrap', $pokePanelSelectButtons).empty(); }
            $('.buttonwrap', $pokePanelSelectButtons).append(pokePanelMarkup);

            // Remove the loading dotts
            $pokePanelLoading.parent().addClass('loaded');
            $pokePanelLoading.remove();
            //console.log('JUST removed the loading panel');

            // Atach a scrollbar to the markup panel
            $pokePanelSelectButtons.find('.buttonwrap').perfectScrollbar({suppressScrollX: true});

            // Update scrollbar once images have loaded
            var $buttonImages = $('img', $pokePanelSelectButtons);
            var loadedImages = 0;
            $buttonImages.each(function(){
                $(this).on('load', function(){
                    loadedImages++;
                    if (loadedImages === $buttonImages.length){
                        //console.log('update scrollbar');
                        $pokePanelSelectButtons.find('.buttonwrap').perfectScrollbar('update');
                        }
                    });
                });

            // Unhide the start button now that pokemon list is ready
            $('.controls .start', $panelButtons).removeClass('hidden');

            // Attach a click event to the generated buttons
            $('button[data-action]', $pokePanelSelectButtons).bind('click', function(e){
                e.preventDefault();
                if (simulationStarted
                    || thisZoneData.currentPokemon.length >= 10){
                    return false;
                    }
                var $button = $(this);
                var action = $button.attr('data-action');
                var kind = $button.attr('data-kind');
                var token = $button.attr('data-token');
                if (action == 'add'){
                    if (kind == 'pokemon'){
                        addPokemonToZone(token, false);
                        recalculateZoneStats();
                        if (thisZoneData.currentPokemon.length > 0){
                            $('.controls .start', $panelButtons).addClass('ready');
                            $('.button.enter-seed', $pokePanelFilters).addClass('disabled');
                            } else {
                            $('.controls .start', $panelButtons).removeClass('ready');
                            $('.button.enter-seed', $pokePanelFilters).removeClass('disabled');
                            }
                        if (thisZoneData.currentPokemon.length >= pokemonRequiredToStart){
                            $('.button.add-ditto', $pokePanelFilters).addClass('disabled');
                            } else {
                            $('.button.add-ditto', $pokePanelFilters).removeClass('disabled');
                            }
                        return true;
                        }
                    }
                return false;
                });

            //console.log('shownGens = ', shownGens);
            //console.log('shownTypes = ', shownTypes);

            // Re-apply the pokemon button filter now that they've been updated
            applyPokemonButtonFilters();

            // Hide any options were are not currently represented
            var $thisFilterWrapper = $pokePanelFilters.filter('[data-target="buttons"]');
            $thisFilterWrapper.find('.filter .option.disabled').removeClass('disabled');
            $thisFilterWrapper.find('.filter.generations .option:not([data-gen="all"])').each(function(){
                $option = $(this);
                var thisGen = $option.attr('data-gen');
                if (thisGen !== 'x'){ thisGen = parseInt(thisGen); }
                if (shownGens.indexOf(thisGen) === -1){ $option.addClass('disabled'); }
                });
            $thisFilterWrapper.find('.filter.types .option:not([data-type="all"])').each(function(){
                $option = $(this);
                var thisType = $option.attr('data-type');
                if (shownTypes.indexOf(thisType) === -1){ $option.addClass('disabled'); }
                });

            // We're ready to show the filter panel now too (and reset more buttons)
            $thisFilterWrapper.removeClass('hidden');
            $('.button.enter-seed', $thisFilterWrapper).removeClass('disabled');

            // If we've seen ditto by now, we can show the button, else keep hidden
            if (appFreeMode
                || (typeof PokemonSpeciesSeen['ditto'] !== 'undefined'
                    && PokemonSpeciesSeen['ditto'] > 0)){
                $('.button.add-ditto', $pokePanelFilters).removeClass('hidden');
                } else {
                $('.button.add-ditto', $pokePanelFilters).addClass('hidden');
                }

            }, 0);

    }

    // Define a function for generating the pokedex tab's content for the user
    function generatePokemonPokedex(){

        //console.log('generatePokemonPokedex()');
        //$pokePanelLoading.append('.'); // append loading dot

        // If we're in the free mode, do not generate the pokedex
        if (appFreeMode){ return false; }

        // Remove the hidden class from the pokedex link
        $('.info.links .link[data-tab="pokedex"]', $panelButtons).removeClass('hidden');

        // Collect a reference to the pokedex list wrapper
        var $pokedexContainer = $('.info[data-tab="pokedex"]', $panelButtons);
        var $pokedexList = $('.list', $pokedexContainer);

        // Wrap execution in timeout to prevent render-blocking
        window.setTimeout(function(){

            // Define variables to hold gens and types being shown
            var shownGens = [];
            var shownTypes = [];

            // Loop through the display order for all the pokemon
            var lastGeneration = false;
            var pokedexMarkup = [];
            for (var key = 0; key < PokemonSpeciesDexOrder.length; key++){
                //console.log('pokedex markup ', key);
                var pokeNum = key + 1;
                var pokeToken = PokemonSpeciesDexOrder[key];
                var pokeIndex = PokemonSpeciesIndex[pokeToken];

                // Check to see if this pokemon is special in some way
                var pokemonIsSpecial = false;
                if (pokeIndex['class'] === 'legendary'
                    || pokeIndex['class'] === 'mythical'
                    || pokeIndex['class'] === 'ultra-beast'){
                    pokemonIsSpecial = true;
                    }

                // Insert a break after each new generation
                var thisGeneration = pokeIndex.gameGeneration;
                if (pokemonIsSpecial || pokeToken === 'super-ditto'){ thisGeneration = 'specials'; }
                if (thisGeneration !== lastGeneration){
                    var addBreak = true;
                    if (pokeIndex.class === 'baby'){ addBreak = false; }
                    else if (pokeIndex.formClass === 'mega-evolution'){ addBreak = false; }
                    else if (pokeIndex.formClass === 'burst-evolution'){ addBreak = false; }
                    else if (pokeIndex.formClass === 'regional-variant'){ addBreak = false; }
                    else if (pokeIndex.formClass === 'gender-variant'){ addBreak = false; }
                    else if (pokeIndex.formClass === 'shiny-variant'){ addBreak = false; }
                    else if (typeof pokeIndex.prevEvolution !== 'undefined'){ addBreak = false; }
                    if (addBreak){
                        if (lastGeneration !== false){ pokedexMarkup.push('<li class="breaker"><hr class="breaker" /></li>'); }
                        lastGeneration = thisGeneration;
                        }
                }

                var isUnlocked = false;
                if (typeof PokemonSpeciesSeen[pokeToken] !== 'undefined'
                    && PokemonSpeciesSeen[pokeToken] > 0){
                    isUnlocked = true;
                    }
                var liClass = 'species ';
                liClass += 'type '+pokeIndex['types'][0]+' ';
                if (typeof pokeIndex['types'][1] !== 'undefined'){ liClass += pokeIndex['types'][1]+'2 '; }
                if (!isUnlocked){ liClass += 'unknown '; }
                var numText = '#' + strPad('000', pokeNum, true);
                var nameText = pokeIndex.name;
                var pokemonTypes = pokeIndex.types;
                var titleText = getPokemonTitleText(pokeToken);
                var customData = {};
                if (typeof pokeIndex.formToken === 'string' && pokeIndex.formToken.length > 0){
                    customData.formToken = pokeIndex.formToken; // Preset form
                    } else if ((pokeIndex.randomizeForms === true
                        || pokeIndex.seasonalForms === true
                        || pokeIndex.colorizedForms === true
                        || pokeIndex.fieldForms === true)
                            && typeof pokeIndex.baseForm !== 'undefined'
                            && pokeIndex.baseForm.length > 0){
                    customData.formToken = pokeIndex.baseForm; // Random/seasonal/color form with base
                    }
                var pokeIcon = getPokemonIcon(pokeToken, false, customData);
                var pokemonGen = typeof pokeIndex.dexGeneration !== 'undefined' ? pokeIndex.dexGeneration : pokeIndex.gameGeneration;
                var pokemonBaseGen = pokeIndex.baseGameGeneration;
                var pokeLegNum = pokemonGen === 'x' && typeof pokeIndex.dexNumber !== 'undefined' ? pokeIndex.dexNumber : pokeIndex.number;
                pokedexMarkup.push('<li class="entry" ' +
                    'data-token="' + pokeToken + '" ' +
                    'data-gen="'+ pokemonGen +'" ' +
                    'data-key="'+ pokeNum +'" ' +
                    'data-legnum="'+ pokeLegNum +'" ' +
                    'data-modnum="'+ pokeIndex.order +'" ' +
                    'data-basegen="'+ pokemonBaseGen +'" ' +
                    'data-type="'+ pokeIndex.types.join(',') +'" ' +
                    'title="'+ titleText +'" ' +
                    '>' +
                        '<div class="'+ liClass +'">' +
                            '<div class="bubble">' +
                                '<span class="num">' + numText + '</span> ' +
                                '<span class="name"><span>' + nameText + '</span><span>- - -</span></span> ' +
                                '<span class="sprites">' + pokeIcon + '</span>' +
                            '</div>' +
                        '</div>' +
                    '</li>');

                // Update the shown gens and types lists
                if (shownGens.indexOf(pokeIndex.gameGeneration) === -1){ shownGens.push(pokeIndex.gameGeneration); }
                if (shownTypes.indexOf(pokeIndex.types[0]) === -1){ shownTypes.push(pokeIndex.types[0]); }
                if (typeof pokemonTypes[1] !== 'undefined' && shownTypes.indexOf(pokeIndex.types[1]) === -1){ shownTypes.push(pokeIndex.types[1]); }

                }
            $pokedexList.append(pokedexMarkup.join(''));

            //console.log('shownGens = ', shownGens);
            //console.log('shownTypes = ', shownTypes);

            // Re-apply the pokemon pokedex filters now that they've been updated
            applyPokemonPokedexFilters();

            // We're ready to show the filter panel now too
            var $thisFilterWrapper = $pokePanelFilters.filter('[data-target="pokedex"]');
            $thisFilterWrapper.removeClass('hidden');

            // Remove the hidden class from the pokedex link
            $('.info.links .link[data-tab="pokedex"]', $panelButtons).removeClass('wait');

            }, 0);

    }

    // Define a function for updating the pokedex with currently seen species
    function updatePokemonPokedex(){
        //console.log('-----\nupdatePokemonPokedex()');

        // If we're in the free mode, there is no pokedex to update
        if (appFreeMode){ return false; }

        // Collect a reference to the pokedex list wrapper
        var $pokedexContainer = $('.info[data-tab="pokedex"]', $panelButtons);
        var $pokedexList = $('.list', $pokedexContainer);

        // Loop through the list of seen species and unhide appropriate blocks
        var seenSpeciesTokens = Object.keys(PokemonSpeciesSeen);
        for (var key = 0; key < seenSpeciesTokens.length; key++){
            var pokeToken = seenSpeciesTokens[key];
            var $pokeEntry = $('.entry[data-token="'+ pokeToken +'"]', $pokedexList);
            var $pokeBlock = $('.species', $pokeEntry);
            if ($pokeBlock.hasClass('unknown')){
                $pokeBlock.removeClass('unknown');
                var titleText = getPokemonTitleText(pokeToken);
                $pokeBlock.attr('title', titleText);
                }
            }

    }

    // Define a function that loops through all pokemon buttons and hides/shows based on current filters
    function applyPokemonButtonFilters(){
        //console.log('applyPokemonButtonFilters', currentButtonFilters);

        // Collect keys for different filter kinds
        var currentButtonFiltersKeys = Object.keys(currentButtonFilters);

        // Collect refs to the filter divs and options
        var $filterDivs = $pokePanelFilters.filter('[data-target="buttons"]').find('.filter[data-filter]');
        var $filterOptions = $filterDivs.find('.option');

        // Loop through and update classes on the filter buttons themselves
        var showBreaks = true;
        $filterOptions.removeClass('active');
        for (var i = 0; i < currentButtonFiltersKeys.length; i++){
            var filterKind = currentButtonFiltersKeys[i];
            var filterValue = currentButtonFilters[filterKind];
            var $optionLink = $filterOptions.filter('.option[data-'+ filterKind +'="'+ filterValue +'"]');
            $optionLink.addClass('active');
            if ((filterKind === 'gen'
                || filterKind === 'type')
                && filterValue !== 'all'){
                showBreaks = false;
                }
            }

        // Show line breaks if all buttons are currently showing, else hide
        if (showBreaks){ $pokePanelSelectButtons.find('.breaker').removeClass('hidden'); }
        else { $pokePanelSelectButtons.find('.breaker').addClass('hidden'); }

        // Hide all pokemon buttons by default then loop through to see which match the filter and can be shown
        var $pokemonButtons = $pokePanelSelectButtons.find('.button[data-kind="pokemon"]');
        $pokemonButtons.addClass('hidden');
        $pokemonButtons.each(function(){
            var $button = $(this);
            //console.log('\nCheck ' + $button.attr('data-token') + ' for matches...', currentButtonFilters);
            var isMatch = true;
            for (var i = 0; i < currentButtonFiltersKeys.length; i++){
                var filterKind = currentButtonFiltersKeys[i];
                var currentValue = currentButtonFilters[filterKind];
                if (currentValue === 'all'){ continue; }
                var thisValue = $button.attr('data-'+filterKind);
                //console.log('|- Does ' + filterKind + ' match current value ' + currentValue + ' ? thisValue = ', thisValue);
                if (filterKind === 'gen'){
                    thisValue = thisValue !== 'x' ? parseInt(thisValue) : thisValue;
                    if (thisValue !== currentValue){ isMatch = false; break; }
                    } else if (filterKind === 'type'){
                    thisValue = thisValue.split(',');
                    if (thisValue.indexOf(currentValue) === -1){ isMatch = false; break; }
                    } else {
                    if (thisValue.indexOf(currentValue) === -1){ isMatch = false; break; }
                    }
                }
            if (isMatch){ $button.removeClass('hidden'); }
            });

        // Update the scrollbar wrapper since there have been changes
        $pokePanelSelectButtons.find('.buttonwrap').perfectScrollbar('update');

    }

    // Define a function that loops through all pokemon dex entries and hides/shows based on current filters
    function applyPokemonPokedexFilters(){
        //console.log('applyPokemonPokedexFilters', currentPokedexFilters);

        // Collect keys for different filter kinds
        var currentPokedexFiltersKeys = Object.keys(currentPokedexFilters);

        // Collect refs to the filter divs and options
        var $filterDivs = $pokePanelFilters.filter('[data-target="pokedex"]').find('.filter[data-filter]');
        var $filterOptions = $filterDivs.find('.option');

        // Loop through and update classes on the filter entrys themselves
        var showBreaks = true;
        $filterOptions.removeClass('active');
        for (var i = 0; i < currentPokedexFiltersKeys.length; i++){
            var filterKind = currentPokedexFiltersKeys[i];
            var filterValue = currentPokedexFilters[filterKind];
            var $optionLink = $filterOptions.filter('.option[data-'+ filterKind +'="'+ filterValue +'"]');
            $optionLink.addClass('active');
            if ((filterKind === 'gen'
                || filterKind === 'type')
                && filterValue !== 'all'){
                showBreaks = false;
                }
            }

        // Show line breaks if all entrys are currently showing, else hide
        if (showBreaks){ $pokePanelPokedexEntries.find('.breaker').removeClass('hidden'); }
        else { $pokePanelPokedexEntries.find('.breaker').addClass('hidden'); }

        // Show or hide the mode selectors based on the gen filter value
        if (currentPokedexFilters['gen'] === 'all'){ $filterDivs.filter('[data-filter="mode"]').addClass('disabled'); }
        else { $filterDivs.filter('[data-filter="mode"]').removeClass('disabled'); }

        // Define totals variables to increment later during looping
        var showingTotal = 0;
        var unlockedTotal = 0;

        // Hide all pokemon entrys by default then loop through to see which match the filter and can be shown
        var $pokemonEntries = $pokePanelPokedexEntries.find('.entry');
        $pokemonEntries.addClass('hidden');
        $pokemonEntries.each(function(){
            var $entry = $(this);
            //console.log('\nCheck ' + $entry.attr('data-token') + ' for matches...', currentPokedexFilters);
            var isMatch = true;
            for (var i = 0; i < currentPokedexFiltersKeys.length; i++){
                var filterKind = currentPokedexFiltersKeys[i];
                if (filterKind === 'mode'){ continue; }
                var currentValue = currentPokedexFilters[filterKind];
                if (currentValue === 'all'){ continue; }
                var filterAttr = filterKind;
                if (filterKind === 'gen' && currentPokedexFilters['mode'] !== 'legacy'){ filterAttr = 'basegen'; }
                var thisValue = $entry.attr('data-'+filterAttr);
                //console.log('|- Does ' + filterKind + ' match current value ' + currentValue + ' ? thisValue = ', thisValue);
                if (filterKind === 'gen'){
                    thisValue = thisValue !== 'x' ? parseInt(thisValue) : thisValue;
                    if (thisValue !== currentValue){ isMatch = false; break; }
                    } else if (filterKind === 'type'){
                    thisValue = thisValue.split(',');
                    if (thisValue.indexOf(currentValue) === -1){ isMatch = false; break; }
                    } else {
                    if (thisValue !== currentValue){ isMatch = false; break; }
                    }
                }
            if (isMatch){
                $entry.removeClass('hidden');
                if ($entry.find('.species:not(.unknown)').length){ unlockedTotal++; }
                showingTotal++;
                }
            });

        // Re-sort the elements based on which mode we're in
        if (currentPokedexFilters['gen'] === 'all'){ var sortBy = ['data-modnum', 'data-legnum']; } //data-key
        else if (currentPokedexFilters['mode'] === 'legacy'){ var sortBy = ['data-legnum', 'data-modnum']; }
        else if (currentPokedexFilters['mode'] === 'modern'){ var sortBy = ['data-modnum', 'data-legnum']; }
        //console.log('currentPokedexFilters[\'mode\'] = ', currentPokedexFilters['mode']);
        //console.log('sortBy = ', sortBy);
        var $sortedEntries = $pokemonEntries.sort(function(a, b){
            var $a = $(a), $b = $(b);
            var aToken = $a.attr('data-token'), bToken = $b.attr('data-token');
            var aIndex = PokemonSpeciesIndex[aToken], bIndex = PokemonSpeciesIndex[bToken];
            if (currentPokedexFilters['gen'] !== 'x'
                && currentPokedexFilters['mode'] === 'legacy'){
                var aVar = aIndex.formClass !== '' && aIndex.baseGameGeneration !== aIndex.gameGeneration ? 1 : 0;
                var bVar = bIndex.formClass !== '' && bIndex.baseGameGeneration !== bIndex.gameGeneration ? 1 : 0;
                if (aVar < bVar){ return -1; }
                else if (aVar > bVar){ return 1; }
                }
            var aNum = parseFloat($a.attr(sortBy[0]));
            var bNum = parseFloat($b.attr(sortBy[0]));
            if (aNum < bNum){ return -1; }
            else if (aNum > bNum){ return 1; }
            else {
                var aNum2 = parseFloat($a.attr(sortBy[1]));
                var bNum2 = parseFloat($b.attr(sortBy[1]));
                if (aNum2 < bNum2){ return -1; }
                else if (aNum2 > bNum2){ return 1; }
                else {return 0; }
                }
            });
        //console.log('Inserting sorted results...');
        $('.list', $pokePanelPokedexEntries).empty().html($sortedEntries);

        // Update the scrollbar wrapper since there have been changes
        //$pokePanelPokedexEntries.find('.entrywrap').perfectScrollbar('update');

        // Update the pokedex totals for how many are showing, unlocked, and overall
        var percentTotal = Math.ceil((unlockedTotal / showingTotal) * 1000) / 10;
        $dexTotals = $pokePanelPokedexEntries.find('.totals');
        $dexTotals.find('.unlocked').html(unlockedTotal);
        $dexTotals.find('.showing').html(showingTotal);
        $dexTotals.find('.percent').html(percentTotal+'%');

    }

    // Define a function for generating pokemon title text given a token
    function getPokemonTitleText(pokeToken){
        var pokeIndex = PokemonSpeciesIndex[pokeToken];
        var isUnlocked = false;
        if (typeof PokemonSpeciesSeen[pokeToken] !== 'undefined' && PokemonSpeciesSeen[pokeToken] > 0){ isUnlocked = true; }
        var pokeNum = PokemonSpeciesDexOrder.indexOf(pokeToken) + 1;
        var numText = '#' + strPad('000', pokeNum, true);
        var nameText = pokeIndex.name;
        var typeText = pokeIndex.types.join(' / ').toLowerCase().replace(/\b[a-z]/g, function(l) { return l.toUpperCase(); }) + ' Type';

        var titleText = '';

        // Add the global number and name if unlocked
        titleText += numText;
        titleText += ' : ' + (isUnlocked ? nameText : '- - -') + ' ';

        // Add text for the types
        titleText += '\n' + '(' + typeText + ') ';

        // Generate text for the exact stage of evolution and/or (form/) class(es) this pokemon has
        if (typeof pokeIndex.class !== 'undefined'
            || typeof pokeIndex.formClass !== 'undefined'){
            var stageText = [];
            var showEvoStage = true;
            if (typeof pokeIndex.class !== 'undefined'){
                if (pokeIndex.class === 'baby'){ stageText.push('Baby Pokémon'); showEvoStage = false; }
                else if (pokeIndex.class === 'legendary'){ stageText.push('Legendary Pokémon'); showEvoStage = false; }
                else if (pokeIndex.class === 'mythical'){ stageText.push('Mythical Pokémon'); showEvoStage = false; }
                else if (pokeIndex.class === 'ultra-beast'){ stageText.push('Ultra Beast'); showEvoStage = false; }
                }
            if (typeof pokeIndex.formClass !== 'undefined'){
                if (pokeIndex.formClass === 'mega-evolution'){ stageText.push('Mega Evolution'); showEvoStage = false; }
                else if (pokeIndex.formClass === 'burst-evolution'){ stageText.push('Burst Evolution'); showEvoStage = false; }
                else if (pokeIndex.formClass === 'primal-reversion'){ stageText.push('Primal Reversion'); showEvoStage = false; }
                }
            if (showEvoStage){
                var forceBasic = false;
                if (pokeIndex.formClass === 'weather-variant'){ forceBasic = true; }
                if (typeof pokeIndex.prevEvolution !== 'undefined' && PokemonSpeciesIndex[pokeIndex.prevEvolution].class === 'baby'){ forceBasic = true; }
                if (forceBasic || pokeIndex.token === pokeIndex.baseEvolution){
                    stageText.push('Basic Pokémon');
                    } else {
                    if (typeof pokeIndex.prevEvolution !== 'undefined'
                        && typeof pokeIndex.nextEvolutions !== 'undefined'
                        && pokeIndex.nextEvolutions.length > 0
                        && pokeIndex.nextEvolutions[0]['method'] !== 'mega-evolution'
                        && pokeIndex.nextEvolutions[0]['method'] !== 'burst-evolution'){
                        stageText.push('Middle Evolution');
                        } else if (typeof pokeIndex.prevEvolution !== 'undefined'){
                        stageText.push('Final Evolution');
                        }
                    }
                }
            if (stageText.length){
                stageText = stageText.join(' / ');
                stageText = stageText.replace('Pokémon / ', ' / ');
                titleText += '\n' + stageText;
                }
            if (typeof pokeIndex.formClass !== 'undefined'){
                if (pokeIndex.formClass === 'gender-variant'){ titleText += '\n' + 'Gender Variant'; }
                if (pokeIndex.formClass === 'seasonal-variant'){ titleText += '\n' + 'Seasonal Variant'; }
                if (pokeIndex.formClass === 'regional-variant'){ titleText += '\n' + 'Regional Variant'; }
                if (pokeIndex.formClass === 'weather-variant'){ titleText += '\n' + 'Weather Variant'; }
                if (pokeIndex.formClass === 'field-variant'){ titleText += '\n' + 'Field Variant'; }
                if (pokeIndex.formClass === 'type-variant'){ titleText += '\n' + 'Type Variant'; }
                if (pokeIndex.formClass === 'shiny-variant'){ titleText += '\n' + 'Shiny Variant'; }
                }
            }
        if (isUnlocked){
            if (pokeIndex.lifePoints !== -1){
                titleText += '\n' + 'LP: ' + pokeIndex.lifePoints + ' ';
                }
            if (pokeIndex.class !== 'baby'
                && pokeIndex.eggGroups.indexOf('undiscovered') === -1){
                titleText += '/ ' + 'BP: ' + pokeIndex.breedPoints + ' ';
                }
            }
        return titleText;
    }

    // Define a function for getting the next pokemon ID
    var nextPokemonID = 0;
    function getNextPokemonID(){
        var nextID = nextPokemonID;
        nextPokemonID++;
        return nextID;
    }

    // Define a function for adding a new pokemon to a zone
    function addPokemonToZone(pokemonToken, isEgg, reduceCycles, isVisitor, customData){
        //console.log('addPokemonToZone(pokemonToken:'+pokemonToken+', isEgg:'+isEgg+', reduceCycles:'+reduceCycles+', isVisitor:'+isVisitor+', customData:'+customData+')');
        if (typeof PokemonSpeciesIndex[pokemonToken] === 'undefined'){ return false; }
        if (typeof isEgg !== 'boolean'){ isEgg = true; }
        if (typeof reduceCycles !== 'number'){ reduceCycles = 0; }
        if (typeof isVisitor !== 'boolean'){ isVisitor = false; }
        if (typeof customData !== 'object'){ customData = {}; }

        // Collect index data for pokemon
        var indexData = PokemonSpeciesIndex[pokemonToken];

        // Create an entry for this species in the global count if not exists
        var addedPokemonSpecies = thisZoneData.addedPokemonSpecies;
        if (typeof addedPokemonSpecies[pokemonToken] === 'undefined'){ addedPokemonSpecies[pokemonToken] = 0; }
        addedPokemonSpecies[pokemonToken]++;

        // Create an entry for this pokemon in the seen count if not exists
        if (typeof PokemonSpeciesSeen[pokemonToken] === 'undefined'){ PokemonSpeciesSeen[pokemonToken] = 0; }
        PokemonSpeciesSeen[pokemonToken]++;

        // Pre-count the number of special pokemon on the field
        var existingArceus = typeof addedPokemonSpecies['arceus'] !== 'undefined' ? addedPokemonSpecies['arceus'] : 0;

        // If this pokemon is in an egg, also create and entry for the species in the global egg counter
        if (isEgg){
            var addedPokemonEggs = thisZoneData.addedPokemonEggs;
            if (typeof addedPokemonEggs[pokemonToken] === 'undefined'){ addedPokemonEggs[pokemonToken] = 0; }
            addedPokemonEggs[pokemonToken]++;
            }

        // If this is a baby evolution, reduce egg cycles by half
        if (indexData.class === 'baby'
            && indexData.formClass === 'baby-evolution'){
            reduceCycles += 1;
            }

        // Define the egg cycles for this pokemon and reduce if necessary
        var indexData = PokemonSpeciesIndex[pokemonToken];
        var baseStats = indexData['baseStats'];
        var eggCycles = isEgg ? indexData.eggCycles : 0;
        if (reduceCycles > 0){
            for (var i = 0; i < reduceCycles; i++){ eggCycles = (eggCycles / 2); }
            eggCycles = Math.ceil(eggCycles);
            if (eggCycles < 1){ eggCycles = 1; }
            }

        // Calculate this pokemon's gender based on ratios
        var pokeGender = 'none';
        if (typeof customData.gender === 'undefined'
            && !indexData.hasNoGender){
            if (indexData.genderRatio.male === 0.5
                && indexData.genderRatio.female === 0.5){
                pokeGender = addedPokemonSpecies[pokemonToken] % 2 !== 0 ? 'female' : 'male';
                } else if (indexData.genderRatio.male === 1){
                pokeGender = 'male';
                } else if (indexData.genderRatio.female === 1){
                pokeGender = 'female';
                } else {
                if (!simulationStarted) {
                    pokeGender = addedPokemonSpecies[pokemonToken] % 2 !== 0 ? 'female' : 'male';
                    } else {
                    var chanceValue = Math.seededRandomChance();
                    var rareGender = indexData.genderRatio.female < indexData.genderRatio.male ? 'female' : 'male';
                    if (addedPokemonSpecies[pokemonToken] > 1){
                        pokeGender = chanceValue <= (indexData.genderRatio[rareGender] * 100) ? rareGender : (rareGender != 'female' ? 'female' : 'male');
                        } else {
                        pokeGender = rareGender;
                        }
                    }
                }
            }
        //console.log('pokemonToken / pokeGender = ', pokemonToken, pokeGender);

        // Generate new pokemon data with required parameters
        var newPokemon = {
            order: thisZoneData.currentPokemon.length,
            id: getNextPokemonID(),
            token: pokemonToken,
            types: indexData.types,
            eggCycles: eggCycles,
            gender: pokeGender,
            daysOld: 0,
            growthCycles: 0,
            growthCooldown: 0,
            reachedAdulthood: false,
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

        // SPECIAL BOX EFFECT : Increase colour variations if the appropriate flag is active
        var increaseColourVariations = false;
        if (thisZoneData.currentEffects['increaseColourVariations'] === true){ increaseColourVariations = true; }

        // Check to see if this pokemon should be a variant
        var allowVariant = true;
        if (!isEgg){ allowVariant = false; }
        if (pokemonToken === 'ditto'
            || pokemonToken === 'super-ditto'){
            allowVariant = false;
            }
        if (existingArceus === 0
            && (indexData.class === 'legendary'
            || indexData.class === 'mythical'
            || indexData.class === 'ultra-beast')
            && pokemonToken !== 'phione'){
            allowVariant = false;
            }

        // If variations are allowed, randomize and see if we're lucky
        var variationChance = increaseColourVariations ? 0.25 : 0.75;
        if (allowVariant && Math.random() >= variationChance){
            //console.log('allowVariant for '+ pokemonToken +'! ');

            // Generate several random numbers to use later
            var randNum = Math.random() * 100; //Math.seededRandomChance();
            var randNum2 = Math.random() * 100; //Math.seededRandomChance();
            var randNum3 = Math.random() * 100; //Math.seededRandomChance();
            var randNum4 = Math.random() * 100; //Math.seededRandomChance();

            // Use the max and min to define the hue offset
            var minOffset = 0;
            var maxOffset = 30;
            if (pokemonToken === 'smeargle'
                || increaseColourVariations){
                maxOffset = 360;
                } else if (pokemonToken === 'kecleon'){
                maxOffset = 0;
                } else {
                if (randNum >= 75){ maxOffset += 20; }
                if (randNum >= 85){ maxOffset += 20; }
                if (randNum >= 95){ maxOffset += 20; }
                if (randNum2 >= 90){ minOffset += 180; maxOffset += 180; }
                }
            var variantHueOffset = maxOffset > minOffset ? Math.ceil(((randNum3 / 100) * (maxOffset - minOffset)) + minOffset) : 0;
            newPokemon.variantHueOffset = variantHueOffset * -1;
            if (randNum4 >= 90){ newPokemon.variantHueOffset *= -1; }

            // Use the max and min to define the saturation offset
            var minOffset = 60;
            var maxOffset = 110;
            if (randNum >= 0.75){ minOffset -= 10; maxOffset += 10; }
            if (randNum >= 0.85){ minOffset -= 10; maxOffset += 10; }
            if (randNum >= 0.95){ minOffset -= 30; }
            var variantSatOffset = Math.ceil(((randNum4 / 100) * (maxOffset - minOffset)) + minOffset);
            newPokemon.variantSatOffset = variantSatOffset;

            }

        // If this pokemon has a randomized form, decide it now
        if (typeof indexData['randomizeForms'] !== 'undefined'
            && indexData['randomizeForms'] === true
            && typeof indexData['possibleForms'] !== 'undefined'){
            var possibleForms = indexData['possibleForms'];
            if (typeof indexData['possibleFormsRatio'] !== 'undefined'
                && indexData['possibleFormsRatio'].length === possibleForms.length){
                var formRatios = indexData['possibleFormsRatio'];
                var ratioTotal = formRatios.reduce(function(a, b) { return a + b; }, 0);
                var randomKey = Math.floor((Math.seededRandomChance() / 100) * ratioTotal);
                var keyLimit = 0;
                //console.log('\n\npossibleForms = ', possibleForms);
                //console.log('formRatios = ', formRatios);
                //console.log('ratioTotal = ', ratioTotal);
                //console.log('randomKey = ', randomKey);
                //console.log('keyLimit = ', keyLimit);
                for (var i = 0; i < possibleForms.length; i++){
                    var formToken = possibleForms[i];
                    var formChance = indexData['possibleFormsRatio'][i];
                    keyLimit += formChance;
                    //console.log('\nformToken('+ i +') = ', formToken);
                    //console.log('formChance('+ i +') = ', formChance);
                    //console.log('keyLimit = ', keyLimit);
                    if ((randomKey + 1) <= keyLimit){
                        var randomForm = formToken;
                        //console.log('randomForm = ', randomForm);
                        break;
                        }
                    }
                } else {
                var randomKey = Math.floor((Math.seededRandomChance() / 100) * possibleForms.length);
                var randomForm = possibleForms[randomKey];
                }
            newPokemon.formToken = randomForm;
            }

        // If this pokemon has a seasonal form, decide it now
        if (typeof indexData['seasonalForms'] !== 'undefined'
            && indexData['seasonalForms'] === true
            && typeof indexData['possibleForms'] !== 'undefined'){
            if (thisZoneData.season.length){ newPokemon.formToken = thisZoneData.season; }
            else { newPokemon.formToken = indexData['baseForm']; }
            }

        // If this pokemon has a colorized form, decide it now
        if (typeof indexData['colorizedForms'] !== 'undefined'
            && indexData['colorizedForms'] === true){
            var colorStats = thisZoneData.currentStats['colors'];
            if (typeof colorStats !== 'undefined'
                && !jQuery.isEmptyObject(colorStats)){
                var topColor = Object.keys(colorStats)[0];
                newPokemon.formToken = topColor;
                } else {
                newPokemon.formToken = indexData['baseForm'];
                }
            }

        // If field variant, change the form based on the current biome
        if (typeof indexData['fieldForms'] !== 'undefined'
            && indexData['fieldForms'] === true){
            if (thisZoneData.field.length){
                var triggerTokens = Object.keys(indexData['possibleFormsTriggers']);
                for (var i = 0; i < triggerTokens.length; i++){
                    var triggerToken = triggerTokens[i];
                    var triggerFields = indexData['possibleFormsTriggers'][triggerToken];
                    if (triggerFields.indexOf(thisZoneData.field) !== -1){
                        newPokemon.formToken = triggerToken;
                        break;
                        }
                    }
                } else {
                newPokemon.formToken = indexData['baseForm'];
                }
            }

        // If this pokemon has a special relationship to on-field pokemon, modify base stats
        if (pokemonToken === 'unown' && existingArceus > 0){ newPokemon.lifePoints = indexData.lifePoints + (indexData.lifePoints * existingArceus); }

        // Push the new pokemon to the list and collect its key
        var newKey = thisZoneData.currentPokemon.length;
        thisZoneData.currentPokemon.push(newPokemon);
        //console.log('newKey / newPokemon = ', newKey, JSON.stringify(newPokemon));

        // Add this pokemon's cell markup to the container div
        var cellMarkup = generatePokemonCellMarkup(newPokemon, newKey);
        $panelPokemonSpriteWrapper.append(cellMarkup);

        // Update the overview with changes
        if (!simulationStarted){ updateOverview(); }

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
    function getZonePokemonByFilter(filterParams, sortResults, matchMode){
        //console.log('getZonePokemonByFilter(filterParams, matchMode):before', filterParams, matchMode);
        if (typeof filterParams !== 'object'){ return false; }
        else if (jQuery.isEmptyObject(filterParams)){ return false; }
        if (typeof sortResults === 'undefined'){ sortResults = true; }
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
        if (sortResults){
            pokemonMatches.sort(function(pokeA, pokeB){
                var eggA = pokeA.eggCycles > 0 ? true : false;
                var eggB = pokeB.eggCycles > 0 ? true : false;
                var orderA = PokemonSpeciesDisplayOrder.indexOf(pokeA.token);
                var orderB = PokemonSpeciesDisplayOrder.indexOf(pokeB.token);
                if (!eggA && eggB){ return -1; }
                else if (eggA && !eggB){ return 1; }
                else if (orderA < orderB){ return -1; }
                else if (orderA > orderB){ return 1; }
                else if (pokeA.order < pokeB.order){ return -1; }
                else if (pokeA.order > pokeB.order){ return 1; }
                else { return 0; }
                });
            }

        // Return collected and sorted matches
        return pokemonMatches;

    }

    // Define functions for getting a pokemon by ID, token, type, and more
    function getZonePokemonByID(pokemonID){
        //console.log('getZonePokemonByID(pokemonID)', pokemonID);
        if (typeof pokemonID !== 'number'){ return false; }
        var pokemonMatches = getZonePokemonByFilter({id:pokemonID}, false);
        return pokemonMatches;
    }
    function getZonePokemonByToken(pokemonToken){
        //console.log('getZonePokemonByToken(pokemonToken)', pokemonToken);
        if (typeof pokemonToken !== 'string'){ return false; }
        var pokemonMatches = getZonePokemonByFilter({token:pokemonToken}, false);
        return pokemonMatches;
    }
    function getZonePokemonByType(pokemonType){
        //console.log('getZonePokemonByType(pokemonType)', pokemonType);
        if (typeof pokemonType1 !== 'string'){ return false; }
        var pokemonMatches = getZonePokemonByFilter({type:pokemonType}, false, 'or');
        return pokemonMatches;
    }

    // Define a function for updating the overview panel and stats
    var updateTimeout = false;
    function updateOverview(onComplete){
        //console.log('----------\nupdateOverview()');
        //console.log('thisZoneData = ', thisZoneData);

        // Compensate for missing onComplete function
        if (typeof onComplete !== 'function'){ onComplete = function(){}; }

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
            addedPokemonSpeciesTokens = Object.keys(thisZoneData.addedPokemonSpecies);
            evolvedPokemonSpeciesTokens = Object.keys(thisZoneData.evolvedPokemonSpecies);
            faintedPokemonSpeciesTokens = Object.keys(thisZoneData.faintedPokemonSpecies);
            for (var key = 0; key < addedPokemonSpeciesTokens.length; key++){
                var token = addedPokemonSpeciesTokens[key];
                var addedCount = thisZoneData.addedPokemonSpecies[token];
                if (typeof thisZoneData.currentStats['eggs'][token] !== 'undefined'){
                    addedCount -= thisZoneData.currentStats['eggs'][token];
                    }
                if (addedCount > 0){ totalSpeciesSeen += 1; }
            }
        }

        // Update the banner counters with the total days and current species
        var pokedexCurrent = Object.keys(PokemonSpeciesSeen).length;
        var pokedexPercent = (Math.ceil((pokedexCurrent / PokemonSpeciesIndexTokens.length) * 1000) / 10);
        $('.timer .count .total', $panelBanner).html(numberWithCommas(PokeboxDaysPassed));
        $('.pokedex .count .current', $panelBanner).html(pokedexCurrent);
        $('.pokedex .count .percent', $panelBanner).html(pokedexPercent+'%');

        // Generate the biome name using the field and the region
        var biomeName = thisZoneData.name;
        if (biomeName !== 'Pending'
            && typeof thisZoneData.currentStats['gameRegion'] !== 'undefined'){
            var regionTokens = Object.keys(thisZoneData.currentStats['gameRegion']);
            if (regionTokens.length > 0){
                var regionToken = regionTokens[0];
                biomeName += ' ('+ (regionToken.charAt(0).toUpperCase() + regionToken.slice(1)) +')';
                }
            }

        // Generate the date string using the preset values and padding
        var dateString = [];
        if (thisZoneData.date.year > 0){ dateString.push(strPad('0000', thisZoneData.date.year, true)); }
        dateString.push(strPad('00', thisZoneData.date.month, true));
        dateString.push(strPad('00', thisZoneData.date.day, true));
        dateString = dateString.join(' / ');
        //console.log('dateString = ', dateString);
        switch (thisZoneData.date.month){
            case 12: case 1: case 2: { { thisZoneData.season = 'winter'; break; } }
            case 3: case 4: case 5: { { thisZoneData.season = 'spring'; break; } }
            case 6: case 7: case 8: { { thisZoneData.season = 'summer'; break; } }
            case 9: case 10: case 11: { { thisZoneData.season = 'autumn'; break; } }
            }
        //console.log('thisZoneData.season = ', thisZoneData.season);

        // Update the zone details
        $('.zone .name .data', $panelMainOverview).text(biomeName);
        $('.zone .day .data', $panelMainOverview).text(numberWithCommas(thisZoneData.day));
        $('.zone .date .data', $panelMainOverview).text(dateString);
        $('.zone .capacity .data', $panelMainOverview).text(thisZoneData.currentPokemon.length + ' / ' + thisZoneData.capacity);

        // (GEN 7+) If we're in the right generation, calculate Z-Power mechanics
        if (maxIndexKeyToLoad >= 7){

            // Update the difference (delta) between the two type appeal extremes
            var currentTypesDiff = Math.round(thisZoneData.currentStats.typesDiff);
            $('.stats .delta .percent', $panelTypesOverview).html(currentTypesDiff);

            // Calculate and highlight Z power if the value is high enough
            var zPowerMin = 250;
            var zPowerMax = 300;
            var zPowerDiff = zPowerMax - zPowerMin;
            var zPowerValue = currentTypesDiff / zPowerMax;
            var zPowerPercent = Math.round(zPowerValue * 100);
            if (currentTypesDiff >= zPowerMin){
                var diffOver = currentTypesDiff - zPowerMin;
                if (diffOver >= zPowerDiff){ deltaOpacity = 1; }
                else { deltaOpacity = (diffOver / zPowerDiff); }
                $('.stats .delta .z', $panelTypesOverview).css({opacity:(deltaOpacity)});
                $('.stats .delta .d', $panelTypesOverview).css({opacity:(1 - deltaOpacity)});
                } else {
                $('.stats .delta .d', $panelTypesOverview).css({opacity:1});
                $('.stats .delta .z', $panelTypesOverview).css({opacity:0});
                }

            }

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

        // Loop through each species and update the pokemon list
        var $pokeDetails = $('.details.pokemon', $panelMainOverview);
        var $pokeWrap = $('.wrap', $pokeDetails);
        var $pokeList = $('.list.pokemon', $pokeWrap);
        //var zoneMaxWidth = (thisZoneData.capacity / 10) * (40 + 5);
        //$pokeWrap.css({width:zoneMaxWidth+'px'});


        // -- POKEMON CANVAS SPRITES

        // Remove any previously fainted pokemon from the canvas now
        $pokeList.find('li.fainted').remove();

        // Remove the "new" class from any canvas pokemon that still have it
        $pokeList.find('li.new').removeClass('new');

        // Sort collected species tokens to keep things together
        var sortedSpeciesTokens = sortSpeciesTokensByOrder(Object.keys(pokeSpecies));
        //if (simulationStarted){ var sortedSpeciesTokens = sortSpeciesTokensByOrder(Object.keys(pokeSpecies), true); }
        //else { var sortedSpeciesTokens = Object.keys(pokeSpecies); }

        // Loop through and show all pokemon sprites on the field, with eggs last
        var cellKey = -1;
        for (var key = 0; key < sortedSpeciesTokens.length; key++){
            var token = sortedSpeciesTokens[key];
            var pokeList = getZonePokemonByToken(token);
            //console.log('------\n key/token', key, token);
            //console.log('pokeList = ', pokeList);
            for (var key2 = 0; key2 < pokeList.length; key2++){
                cellKey++;
                var pokeInfo = pokeList[key2];
                updatePokemonCell(pokeInfo, cellKey);
                if (pokeInfo.reachedAdulthood === true && pokeInfo.growthCycles <= 0){ cellKey--; }
                }
            }

        // Empty current list and append new markup
        //$pokeList.empty();
        //$pokeList.append(pokeListMarkup);

        // -- TYPE APPEAL LIST

        // Define vars to hold the number of stat slots shown
        var numAttractsShown = 0;
        var numRepelsShown = 0;

        // Update the stats list for the elemental type appeals
        //$('.stats .list', $panelTypesOverview).empty();
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
            // Display attracted types in the appeal list
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
                //$('.stats .list.attract', $panelTypesOverview).append(statListMarkup);
                $('.stats .list.attract', $panelTypesOverview).html(statListMarkup);
                } else {
                // There is no type appeal right now so clear the list
                $('.stats .list.attract', $panelTypesOverview).empty();
                }
            // Display repelled types in the appeal list
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
                //$('.stats .list.repel', $panelTypesOverview).append(statListMarkup);
                $('.stats .list.repel', $panelTypesOverview).html(statListMarkup);
                } else {
                // There is no type appeal right now so clear the list
                $('.stats .list.repel', $panelTypesOverview).empty();
                }
            }


        // -- POKEMON SPECIES LIST

        // Define vars to hold the number of stat slots shown
        var numCurrentSpecies = 0;
        var numAllTimeSpecies = 0;
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
        var currentFlags = thisZoneData.currentFlags;

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
        //$currentSpeciesList.empty();
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
                numCurrentSpecies++;
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
        $currentSpeciesCounter.html(numCurrentSpecies);
        //$currentSpeciesList.append(speciesListMarkup);
        $currentSpeciesList.html(speciesListMarkup);

        // Update the alltime species list with past numbers
        var $alltimeSpeciesCounter = $('.sub.alltime .count', $panelSpeciesOverview);
        var $alltimeSpeciesList = $('.list.alltime', $panelSpeciesOverview);
        //$alltimeSpeciesList.empty();
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
                numAllTimeSpecies++;
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
        $alltimeSpeciesCounter.html(numAllTimeSpecies);
        //$alltimeSpeciesList.append(speciesListMarkup);
        $alltimeSpeciesList.html(speciesListMarkup);

        // Update the LURED VISITORS appeal list with most likely species
        if (typeof thisZoneData.currentStats['visitorAppeal'] !== 'undefined'
            && (thisZoneData.day === 1
                || thisZoneData.day % 10 === 0)){

            // Collect a short list of the lured visitors with the highest appeal
            var visitorAppeal = thisZoneData.currentStats['visitorAppeal'];
            var nextVisitors = [];
            var totalVisitorChance = 0;
            for (var key = 0; key < visitorAppeal.length; key++){
                if (key >= 5){ break; }
                var visitorInfo = visitorAppeal[key];
                totalVisitorChance += visitorInfo.chance;
                nextVisitors.push(visitorInfo);
                }

            // Update the visitor appeal area with new sprites
            if (totalVisitorChance > 0
                && nextVisitors.length > 0){

                // Generate new species markup for the overview panel
                var visitorListMarkup = '';
                var usedPercent = 0;
                for (var key = 0; key < nextVisitors.length; key++){
                    var visitor = nextVisitors[key];
                    var pokeInfo = PokemonSpeciesIndex[visitor.token];
                    var pokePercent = typeof visitor.chance === 'number' && visitor.chance > 0 ? Math.ceil((visitor.chance / totalVisitorChance) * 100) : 0;
                    usedPercent += pokePercent;
                    if (usedPercent > 100){ pokePercent -= (usedPercent - 100); }
                    //console.log('visitor = ', visitor);
                    //console.log('pokeInfo = ', pokeInfo);
                    //console.log('pokePercent = ', pokePercent);
                    var liClass = 'species ';
                    liClass += 'type '+pokeInfo['types'][0]+' ';
                    if (typeof pokeInfo['types'][1] !== 'undefined'){ liClass += pokeInfo['types'][1]+'2 '; }
                    if (!appFreeMode
                        && (typeof PokemonSpeciesSeen[pokeInfo.token] === 'undefined'
                            || PokemonSpeciesSeen[pokeInfo.token] === 0)){
                        liClass += 'unknown ';
                        }
                    pokeIcon = getPokemonIcon(pokeInfo.token);
                    visitorListMarkup += '<li class="'+liClass+'">'+
                            '<div class="bubble">'+
                                '<span class="icon">'+ pokeIcon +'</span> '+
                                '<span class="name">'+ pokeInfo['name'] +'</span> '+
                                '<span class="val">'+ (pokePercent < 1 ? '&lt 1' : (pokePercent)) +'%</span>'+
                            '</div>'+
                        '</li>';
                    }

                // Append generated visitor list markup to the panel (fade in if necessary)
                $('.list', $panelVisitorsOverview).html(visitorListMarkup);
                $panelVisitorsOverview.removeClass('hidden');

                } else {

                // Hide the visitor list as none are currently queued
                $('.list', $panelVisitorsOverview).empty();
                $panelVisitorsOverview.addClass('hidden');

                }


            }

        // Run the onComplete function now
        onComplete();

    }

    // Define a function for updating a pokemon's cell
    function updatePokemonCell(pokeInfo, cellKey){

        // Collect index info for this pokemon
        var pokeIndex = PokemonSpeciesIndex[pokeInfo.token];

        // Check if this pokemon is still in its egg
        var isEgg = pokeInfo.eggCycles > 0 ? true : false;
        var hasFainted = pokeInfo.reachedAdulthood === true && pokeInfo.growthCycles <= 0 ? true : false;

        // Collect a reference to this pokemon's cell
        var $pokeCell = $('li[data-id="'+pokeInfo.id+'"]', $panelPokemonSpriteWrapper);

        // Check to see if pokemon should have jumping animation
        var jumpUp = false;
        if (cellKey % 2 === 0 && thisZoneData.day % 2 === 0){ jumpUp = true; }
        else if (cellKey % 2 !== 0 && thisZoneData.day % 2 !== 0){ jumpUp = true; }
        if (jumpUp){ $pokeCell.addClass('jump'); }
        else { $pokeCell.removeClass('jump'); }

        // Update the odd/even class on this pokemon's cell
        //var isEven = cellKey % 2 === 0 ? true : false;
        //if (isEven){ $pokeCell.removeClass('odd').addClass('even'); }
        //else { $pokeCell.removeClass('even').addClass('odd'); }

        // Change the sprite class based on egg or not
        var justHatched = pokeInfo.eggCycles === 0 && pokeInfo.growthCycles === 0 ? true : false;
        if (justHatched){ $pokeCell.removeClass('egg').addClass('pokemon'); }

        // Update the position of this pokemon based on cell key
        var colPercent = 100 / thisZoneData.sizeCols;
        var cellPosition = convertKeyToTableCell(cellKey, thisZoneData.sizeCols);
        var cellTop = ((cellPosition.row - 1) * colPercent)+'%';
        var cellLeft = ((cellPosition.col - 1) * colPercent)+'%';
        $pokeCell.attr('data-key', cellKey);
        if (!hasFainted){ $pokeCell.css({zIndex: cellKey, top: cellTop, left: cellLeft}); }
        else { $pokeCell.css({zIndex: cellKey}); }

        // Collect image data for this pokemon's icon sprite
        var $spriteImage = $pokeCell.find('.sprite:not(.overlay)').first();
        var spriteData = getPokemonIcon(pokeInfo.token, isEgg, pokeInfo, true);
        var newImage = spriteData.image;

        // Check if this pokemon has just evolved or changed forms
        var imageChanged = false;
        var currentImage = pokeInfo.currentImage || false;
        if (currentImage !== spriteData.image){ imageChanged = true; }
        pokeInfo.currentImage = newImage;
        //console.log('pokeInfo = ', pokeInfo.id, pokeInfo.token);
        //console.log('currentImage = ', currentImage);
        //console.log('newImage = ', newImage);

        // If this Pokemon has just hatched, remove overlay and replace sprite
        if (justHatched){ $pokeCell.find('.sprite.overlay').remove(); }

        // If this pokemon's current image doesn't match what it should be, change it now
        if (!isEgg && imageChanged){

            $spriteImage.css({backgroundImage:'url("'+ newImage +'")'});
            $spriteImage.attr('data-token', pokeInfo.token);

            }

        // If this is a HATCHED and growing pokemon, display normal sprite
        if (!isEgg){

            // Update the growth cycle for this pokemon
            $pokeCell.find('.count').html('+' + pokeInfo.growthCycles);

            // Add the adult class to this cell if applicable and not already there
            if (pokeInfo.reachedAdulthood === true
                && pokeIndex.lifePoints !== -1){
                var hasAdultTag = $pokeCell.find('.tag.adult').length;
                if (!hasAdultTag){ $pokeCell.find('> div').append('<span class="tag adult"></span>'); }
                $pokeCell.attr('data-dnote', Math.ceil((pokeInfo.growthCycles / pokeIndex.lifePoints) * 10));
                }

            }
        // Else if this is still an EGG and the pokemon is not ready
        else {

            // Update the egg cycle for this pokemon
            $pokeCell.find('.count').html('-' + pokeInfo.eggCycles);

            }

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

                // Move this pokemon's data to the fainted array and update display class
                thisZoneData.faintedPokemon.push(thisZoneData.currentPokemon.splice(key, 1));
                $pokeItem.addClass('fainted');

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

        // We removed a pokemon so we should update the stats
        recalculateZoneStats();

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
            PokemonSpeciesSeen[pokeInfo.token]--;
            if (PokemonSpeciesSeen[pokeInfo.token] === 0){ delete PokemonSpeciesSeen[pokeInfo.token]; }
            recalculateZoneStats();
            updateOverview();
            if (thisZoneData.currentPokemon.length > 0){
                $('.controls .start', $panelButtons).addClass('ready');
                $('.button.enter-seed', $pokePanelFilters).addClass('disabled');
                } else {
                $('.controls .start', $panelButtons).removeClass('ready');
                $('.button.enter-seed', $pokePanelFilters).removeClass('disabled');
                }
            if (thisZoneData.currentPokemon.length >= pokemonRequiredToStart){
                $('.button.add-ditto', $pokePanelFilters).addClass('disabled');
                } else {
                $('.button.add-ditto', $pokePanelFilters).removeClass('disabled');
                }
            }
        // Otherwise, clicking simply places a "watched" indicator on the pokemon
        else {

            /*
            // Update the watched flag for the pokemon in question
            pokeInfo.watchFlag = pokeInfo.watchFlag !== true ? true : false;

            // Add or remove the watched span from the sprite cell
            var hasWatched = $li.find('.watched').length;
            if (pokeInfo.watchFlag && !hasWatched){ $li.find('> div').append('<span class="tag watched"></span>'); }
            else if (!pokeInfo.watchFlag && hasWatched){ $li.find('.watched').remove(); }
            */
            return false;

            }

        // Update the overview with changes
        updateOverview();

    }

    // Define a function for triggering the starter seed prompt
    function triggerStarterSeedPrompt(){

        // Collect and parse the seed if it's given, else do nothing
        var rawSeed = prompt(
            'Starter seeds can be found in the footer of an active PokéBox. \n'
            + 'Please enter a starter seed below (include all special characters):');
        if (rawSeed && rawSeed.length > 0){
            //console.log('rawSeed = ', rawSeed);
            var seedPokemon = parsePokeBoxSeed(rawSeed);
            //console.log('seedPokemon = ', seedPokemon);
            if (seedPokemon
                || seedPokemon.length){
                var blockedPokemon = [];
                for (var key = 0; key < seedPokemon.length; key++){
                    if (thisZoneData.currentPokemon.length >= 10){ break; }
                    var starterInfo = seedPokemon[key];
                    var starterToken = starterInfo[0];
                    var starterGender = starterInfo[1];
                    var indexInfo = PokemonSpeciesIndex[starterToken];
                    var isBasic = BasicPokemonSpeciesIndexTokens.indexOf(starterToken) !== -1 ? true : false;
                    var isFree = freeStarterPokemon.indexOf(starterToken) !== -1 ? true : false;
                    var isSeen = typeof PokemonSpeciesSeen[starterToken] !== 'undefined' && PokemonSpeciesSeen[starterToken] > 0 ? true : false;
                    //console.log('starterToken = ', starterToken);
                    //console.log('isFree = ', isFree);
                    //console.log('isBasic = ', isBasic);
                    //console.log('isSeen = ', isSeen);
                    //console.log('indexInfo = ', indexInfo);
                    if (appFreeMode || isFree || (isBasic && isSeen)){
                        addPokemonToZone(starterToken, false, false, false, {gender:starterGender});
                        } else if (blockedPokemon.indexOf(indexInfo['name']) === -1){
                        blockedPokemon.push(indexInfo['name']);
                        }
                    }
                    if (blockedPokemon.length > 0){
                        alert(
                            'Uh oh. It looks like you tried to use Pokémon that haven\'t  \n'
                            + 'been unlocked yet.  Sorry, but these ones had to be removed: \n'
                            + '- ' + blockedPokemon.join(' \n- ')
                            );
                        }
                } else {
                alert('The provided seed was invalid.\n ' +
                    'Please check the formatting and try again.'
                    );
                return;
                }
            } else {
            return;
            }

         // Recalculate zone stats then show the start button if ready
        if (thisZoneData.currentPokemon.length > 0){
            recalculateZoneStats();
            $('.controls .start', $panelButtons).addClass('ready');
            $('.button.enter-seed', $pokePanelFilters).addClass('disabled');
            }

        // If we're at starter max, hide the Ditto button, otherwise show it
        if (thisZoneData.currentPokemon.length >= pokemonRequiredToStart){
            $('.button.add-ditto', $pokePanelFilters).addClass('disabled');
            } else {
            $('.button.add-ditto', $pokePanelFilters).removeClass('disabled');
            }

    }

    // Define a function for getting a snapshot of the zone stats
    function getCurrentZoneStats(){
        var cloned
        return thisZoneData.currentStats;
    }

    // Define a function for getting a snapshot of the zone stats
    var mainZoneStats = ['types', 'species', 'eggs'];
    var subZoneStats = ['class', 'colors', 'eggGroups', 'gameGeneration', 'gameRegion', 'baseStats'];
    function recalculateZoneStats(){

        // Create the initial object to hold all zone stats
        var currentZoneStats = {};
        var currentZoneFlags = thisZoneData.currentFlags;
        for (var i = 0; i < mainZoneStats.length; i++){ currentZoneStats[mainZoneStats[i]] = {}; }
        for (var i = 0; i < subZoneStats.length; i++){ currentZoneStats[subZoneStats[i]] = {}; }
        var addedSpecies = thisZoneData.addedPokemonSpecies;

        // Predefine all the types with zero points to start
        if (typeof PokemonTypesIndex !== 'undefined'){
            for (var key = 0; key < PokemonTypesIndexTokens.length; key++){
                var typeToken = PokemonTypesIndexTokens[key];
                currentZoneStats['types'][typeToken] = 0;
                }
            }

        // SPECIAL BOX EFFECT : Ignore elemental weaknesses if the appropriate flag is active
        var ignoreTypeWeaknesses = false;
        if (thisZoneData.currentEffects['ignoreTypeWeaknesses'] === true){ ignoreTypeWeaknesses = true; }

        // SPECIAL BOX EFFECT : Ignore elemental strengths if the appropriate flag is active
        var ignoreTypeStrengths = false;
        if (thisZoneData.currentEffects['ignoreTypeStrengths'] === true){ ignoreTypeStrengths = true; }

        // Loop through and count pokemon by species, groups, generations, and regions
        for (var key1 = 0; key1 < thisZoneData.currentPokemon.length; key1++){
            var pokeInfo = thisZoneData.currentPokemon[key1];
            var pokeToken = pokeInfo.token;
            var pokeIndex = PokemonSpeciesIndex[pokeToken];
            var pokeAbilities = Object.values(pokeIndex.abilities);
            if (pokeInfo.eggCycles > 0){

                // Egg pokemon do not count toward egg stats
                if (typeof currentZoneStats['eggs'][pokeToken] === 'undefined'){ currentZoneStats['eggs'][pokeToken] = 0; }
                currentZoneStats['eggs'][pokeToken] += 1;

                } else {

                // Growing pokemon count toward stats species stats
                if (typeof currentZoneStats['species'][pokeToken] === 'undefined'){ currentZoneStats['species'][pokeToken] = 0; }
                currentZoneStats['species'][pokeToken] += 1;

                // Continue if this pokemon needs to be excluded from (other) zone stats
                if (typeof pokeIndex.excludeFromZoneStats !== 'undefined'
                    && pokeIndex.excludeFromZoneStats === true){
                    continue;
                    }

                // Loop through this pokemon's types and tweak related type multipliers
                var pokeTypes = typeof pokeInfo.types !== 'undefined' ? pokeInfo.types : pokeIndex.types;
                for (var key2 = 0; key2 < pokeTypes.length; key2++){
                    var typeToken = pokeTypes[key2];
                    var typeInfo = PokemonTypesIndex[typeToken];

                    // Skip types that aren't actually types
                    if (typeof typeInfo.hiddenType !== 'undefined'
                        && typeInfo.hiddenType === true){ continue; }

                    // Add +1 appeal point for this pokemon's type
                    if (typeof currentZoneStats['types'][typeToken] === 'undefined'){ currentZoneStats['types'][typeToken] = 0; }
                    currentZoneStats['types'][typeToken] += 1.00 * pokeIndex.influencePoints;

                    // Add +1 appeal point for any type this pokemon is prey to
                    if (!ignoreTypeWeaknesses){
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
                                currentZoneStats['types'][type] += 0.50 * modInfluencePoints;
                                }
                            }
                        }

                        // Add -1 appeal point for any type this pokemon is predator to
                        if (!ignoreTypeStrengths){
                            if (typeInfo['matchups']['strengths'].length){
                                for (var key4 = 0; key4 < typeInfo['matchups']['strengths'].length; key4++){
                                    var type = typeInfo['matchups']['strengths'][key4];
                                    if (typeof currentZoneStats['types'][type] === 'undefined'){ currentZoneStats['types'][type] = 0; }
                                    currentZoneStats['types'][type] -= 0.50 * pokeIndex.influencePoints;
                                    }
                                }
                            }

                    }

                // Check to see if this pokemon has any subtypes from abilities
                var subTypes = [];
                if (pokeAbilities.indexOf('steelworker') !== -1){ subTypes.push('steel'); }
                for (var key2 = 0; key2 < subTypes.length; key2++){
                    var typeToken = subTypes[key2];
                    var typeInfo = PokemonTypesIndex[typeToken];
                    // Add +1 appeal point for this pokemon's type
                    if (typeof currentZoneStats['types'][typeToken] === 'undefined'){ currentZoneStats['types'][typeToken] = 0; }
                    currentZoneStats['types'][typeToken] += 1.00 * pokeIndex.influencePoints;
                    // Add -1 appeal point for any type this pokemon is predator to
                    if (typeInfo['matchups']['strengths'].length){
                        for (var key4 = 0; key4 < typeInfo['matchups']['strengths'].length; key4++){
                            var type = typeInfo['matchups']['strengths'][key4];
                            if (typeof currentZoneStats['types'][type] === 'undefined'){ currentZoneStats['types'][type] = 0; }
                            currentZoneStats['types'][type] -= 0.50 * pokeIndex.influencePoints;
                            }
                        }
                    }

                // Loop through sub-stats for and increment relevant values
                for (var subKey = 0; subKey < subZoneStats.length; subKey++){
                    var subStat = subZoneStats[subKey];
                    //console.log('pokeToken('+ pokeToken +') / subStat('+ subStat +')');
                    if (subStat === 'colors'
                        && (pokeToken === 'vivillon'
                            || pokeToken === 'kecleon')){
                        continue;
                        }
                    if (typeof pokeIndex[subStat] !== 'undefined'){
                        // Treat arrays differently than other values
                        if (typeof pokeIndex[subStat] === 'object'){
                            // If dealing with an array, each value has a value of one by default ['red', 'blue', 'yellow']
                            if (Array.isArray(pokeIndex[subStat])
                                && pokeIndex[subStat].length > 0){
                                var statVal = 1;
                                for (var key5 = 0; key5 < pokeIndex[subStat].length; key5++){
                                    var subToken = pokeIndex[subStat][key5];
                                    if (typeof currentZoneStats[subStat][subToken] === 'undefined'){ currentZoneStats[subStat][subToken] = 0; }
                                    currentZoneStats[subStat][subToken] += statVal;
                                    if (subStat === 'colors'){ statVal *= 0.5; }
                                    }
                                }
                            // Otherwise if object, each property has its own numeric value [{attack: 10, defense: 9, speed: 8}]
                            else if (!jQuery.isEmptyObject(pokeIndex[subStat])){
                                var propNames = Object.keys(pokeIndex[subStat]);
                                for (var key6 = 0; key6 < propNames.length; key6++){
                                    var subToken = propNames[key6];
                                    var subValue = pokeIndex[subStat][subToken];
                                    if (typeof currentZoneStats[subStat][subToken] === 'undefined'){ currentZoneStats[subStat][subToken] = 0; }
                                    currentZoneStats[subStat][subToken] += subValue;
                                    }
                                }
                            } else {
                            // Collect the sub token or value and increment
                            var subToken = pokeIndex[subStat];
                            if (subStat === 'class' && subToken === ''){ subToken = 'common'; }
                            if (typeof currentZoneStats[subStat][subToken] === 'undefined'){ currentZoneStats[subStat][subToken] = 0; }
                            currentZoneStats[subStat][subToken] += 1;
                            }
                        }
                    }

                }

            }

        //console.log('currentZoneStats(Day '+thisZoneData.day+'A) = ', currentZoneStats);

        // SPECIAL BOX EFFECT : Reverse type appeal if the appropriate flag is active
        if (thisZoneData.currentEffects['reverseTypeAppeal'] === true){
            // Loop through and invert all stats as long as this pokemon is in the box
            var typeTokens = Object.keys(currentZoneStats['types']);
            for (var i = 0; i < typeTokens.length; i++){
                var typeToken = typeTokens[i];
                var typeValue = currentZoneStats['types'][typeToken];
                var isNegative = typeValue < 0 ? true : false;
                var newTypeValue = (typeValue * -1) * (isNegative ? 2.0 : 0.5);
                currentZoneStats['types'][typeToken] = newTypeValue;
                }
            }

        // Loop though and re-sort all the zone stats based on their values
        //console.log('\n-----');
        var zoneStatTokens = Object.keys(currentZoneStats);
        for (var key1 = 0; key1 < zoneStatTokens.length; key1++){
            //console.log('zoneStatTokens['+key1+']', zoneStatTokens[key1]);
            var statToken = zoneStatTokens[key1];
            var zoneStats = currentZoneStats[statToken];
            var sortedStatKeys = getSortedKeys(zoneStats);
            //console.log('unsortedStatKeys', Object.keys(zoneStats));
            //console.log('sortedStatKeys', sortedStatKeys);
            var sortedList = {};
            for (var key2 = 0; key2 < sortedStatKeys.length; key2++){
                //console.log('sortedStatKeys['+key2+']', sortedStatKeys[key2]);
                var statKey = sortedStatKeys[key2];
                var statValue = zoneStats[statKey];
                sortedList[statKey] = statValue;
                }
            currentZoneStats[statToken] = sortedList;
            }

        //console.log('currentZoneStats(Day '+thisZoneData.day+'B) = ', currentZoneStats);
        //console.log('thisZoneData.currentStats = ', thisZoneData.currentStats);

        // (GEN 7+) If we're in the right generation, calculate Ultra Space mechanics
        if (maxIndexKeyToLoad >= 7){

            // Check to see if Necrozma has appeared in the box
            if (currentZoneFlags.indexOf('necrozmaHasAppeared') === -1){
                var necrozmaHasAppeared = false;
                if (typeof currentZoneStats['species']['necrozma'] !== 'undefined'
                    && currentZoneStats['species']['necrozma'] > 0){
                    necrozmaHasAppeared = true;
                    }
                if (necrozmaHasAppeared){
                    currentZoneFlags.push('necrozmaHasAppeared');
                    }
                }

            // Check to see if Silvally has appeared in the box
            if (currentZoneFlags.indexOf('silvallyHasAppeared') === -1){
                var silvallyHasAppeared = false;
                if (typeof currentZoneStats['species']['silvally'] !== 'undefined'
                    && currentZoneStats['species']['silvally'] > 0){
                    silvallyHasAppeared = true;
                    }
                if (silvallyHasAppeared){
                    currentZoneFlags.push('silvallyHasAppeared');
                    }
                }

            // Check to see if the box has traces of Ultra Energy inside (it stays)
            var totalUltraEnergy = 0;
            var currentUltraEnergy = 0;
            for (var i = 0; i < ultraEnergySpecies.length; i++){
                var token = ultraEnergySpecies[i];
                if (typeof addedSpecies[token] !== 'undefined'){
                    totalUltraEnergy += addedSpecies[token];
                    }
                if (typeof currentZoneStats['species'][token] !== 'undefined'){
                    currentUltraEnergy += currentZoneStats['species'][token];
                    }
                }
            currentZoneStats['totalUltraEnergy'] = totalUltraEnergy;
            currentZoneStats['currentUltraEnergy'] = currentUltraEnergy;
            if (totalUltraEnergy > 0
                && currentZoneFlags.indexOf('boxHasUltraEnergy') === -1){
                currentZoneFlags.push('boxHasUltraEnergy');
                }

            // Check to see if the box has a history of Ultra Beasts inside
            if (currentZoneFlags.indexOf('boxHadUltraBeasts') === -1){
                var ultraBeastValue = 0;
                for (var i = 0; i < ultraBeastSpecies.length; i++){
                    var token = ultraBeastSpecies[i];
                    if (typeof addedSpecies[token] !== 'undefined'){
                        ultraBeastValue += addedSpecies[token];
                        }
                    }
                if (ultraBeastValue >= 3){
                    currentZoneFlags.push('boxHadUltraBeasts');
                    }
                }

            }

        //console.log('Day '+ thisZoneData.day +' | currentZoneFlags = ', currentZoneFlags);
        //console.log('currentZoneStats(Day '+thisZoneData.day+'A) = ', currentZoneStats);

        // Calculate the current type difference (delta) between the highest attract vs highest repel
        currentZoneStats['typesDiff'] = 0;
        if (true){

            // Check to see if Critical or Extreme type appeal are in effect
            var typeTokens = Object.keys(currentZoneStats['types']);
            var highTypeValue = currentZoneStats['types'][typeTokens[0]];
            var lowTypeValue = currentZoneStats['types'][typeTokens[typeTokens.length - 1]];
            var typeValueDiff = highTypeValue - lowTypeValue;
            currentZoneStats['typesDiff'] = typeValueDiff;
            //console.log('Day '+ thisZoneData.day +' | typeValueDiff = ', typeValueDiff);
            var extremeTypeAppeal = typeValueDiff >= 250 ? true : false;
            if (extremeTypeAppeal && currentZoneFlags.indexOf('extremeTypeAppeal') === -1){ currentZoneFlags.push('extremeTypeAppeal'); }
            else if (!extremeTypeAppeal && currentZoneFlags.indexOf('extremeTypeAppeal') !== -1){ arrayRemoveByValue(currentZoneFlags, 'extremeTypeAppeal'); }
            var criticalTypeAppeal = typeValueDiff >= 300 ? true : false;
            if (criticalTypeAppeal && currentZoneFlags.indexOf('criticalTypeAppeal') === -1){ currentZoneFlags.push('criticalTypeAppeal'); }
            else if (!criticalTypeAppeal && currentZoneFlags.indexOf('criticalTypeAppeal') !== -1){ arrayRemoveByValue(currentZoneFlags, 'criticalTypeAppeal'); }

            }

        // Loop through and assign the new zone stat values to the parent array
        var zoneStatTokens = Object.keys(currentZoneStats);
        for (var key = 0; key < zoneStatTokens.length; key++){
            var statToken = zoneStatTokens[key];
            thisZoneData.currentStats[statToken] = currentZoneStats[statToken];
            }

        // Recalculate some things only at set day intervals
        if (simulationStarted
            && (thisZoneData.day === 1
                || thisZoneData.day % 10 === 0)){

            // Recalculate the current vivillon pattern
            currentVivillonPattern = '';
            recalculateVivillonPattern();

            // Recalculate the current visitor appeal values
            recalculateVisitorAppeal();

            }

        // Always recalculate BOX EFFECTS by checking which pokemon are active
        thisZoneData.currentEffects = {};
        var currentSpeciesTokens = Object.keys(currentZoneStats['species']);
        var effectSpeciesTokens = Object.keys(globalSpeciesEffects);
        for (var i = 0; i < effectSpeciesTokens.length; i++){
            var species = effectSpeciesTokens[i];
            var effects = globalSpeciesEffects[species];
            for (var j = 0; j < effects.length; j++){
                var effect = effects[j];
                if (currentSpeciesTokens.indexOf(species) !== -1){
                    thisZoneData.currentEffects[effect] = true;
                    }
                }

            }

        // Return true on success
        return true;

    }

    // Define a timeout function for incrementing the day counter
    var dayTimeoutID = false;
    var dayTimeoutStarted = false;
    var dayTimeoutDuration = 1200;
    var dayTimeoutSpeed = 'normal';
    var dayTimeoutHandler = function(){ updateDay(); };
    function updateDay(updateCycles, allowVisitors){
        if (typeof updateCycles !== 'boolean'){ updateCycles = true; }
        if (typeof allowVisitors !== 'boolean'){ allowVisitors = updateCycles; }

        // Generate a snapshot of the zone stats and add to history
        thisZoneHistory.push(JSON.stringify(thisZoneData.currentStats));

        // Update the day timeout flag
        dayTimeoutStarted = true;

        // Increment the current day and total days passed
        thisZoneData.day++;
        PokeboxDaysPassed++;

        // Recalculate the current date parameters for this day
        var zoneDate = {year:1,month:1,day:1};
        var zoneDays = thisZoneData.day - 1;
        if (zoneDays >= 360){ zoneDate.year += Math.floor(zoneDays / 360); zoneDays = zoneDays % 360; }
        if (zoneDays >= 30){ zoneDate.month += Math.floor(zoneDays / 30); zoneDays = zoneDays % 30; }
        zoneDate.day = zoneDays + 1;
        //if (zoneDate.month > 0){ zoneDate.day += 1; }
        //if (zoneDate.year > 0){ zoneDate.month += 1; }
        thisZoneData.date = zoneDate;

        //console.log('Day #'+thisZoneData.day, zoneDate);
        //console.log('PokeboxDaysPassed = ', PokeboxDaysPassed);
        //console.log('zoneDate = ', zoneDate);

        // Update the odd/even class on the pokemon sprite wrapper
        //var isEven = thisZoneData.day % 2 === 0 ? true : false;
        //if (isEven){ $panelPokemonSpriteWrapper.removeClass('odd').addClass('even'); }
        //else { $panelPokemonSpriteWrapper.removeClass('even').addClass('odd'); }

        // Send an analytics event for the amount of time that has passed
        if (typeof ga !== 'undefined'){ sendSessionAnalytics(thisZoneData.day); }

        // If this is the very first day, let's update our random seed
        if (thisZoneData.day === 1){
            Math.seed = 1;
            //console.log('\n Math.seed reset to ', Math.seed);
            for (var i = 0; i < thisZoneData.currentPokemon.length; i++){
                var pokeToken = thisZoneData.currentPokemon[i].token;
                Math.seed += PokemonSpeciesIndex[pokeToken].number;
                }
            //console.log('|- Starter-adjusted Math.seed is ', Math.seed);
            }
        //var randomNumber = Math.seededRandom(0, 100);
        //console.log('Day #'+thisZoneData.day);
        //console.log('Math.seed = ', Math.seed);
        //console.log('randomNumber = ', randomNumber);

        // Update growth, egg, etc, cycles if allowed
        if (simulationStarted
            && updateCycles){
            updateGrowthCycles();
            updateEggCycles();
            updateBreedingCycles();
            updateBattleCycles();
            recalculateZoneStats();
            updateBoxBiome();
            }

        // If the simulation has started, make sure we update the scroll wrappers
        if (simulationStarted){
            $('.wrap', $panelOverviewFloatLists).perfectScrollbar('update');
            }

        // Trigger a visitor chance if allowed or it's the first day and there's room
        var remainingSlots = thisZoneData.capacity - thisZoneData.currentPokemon.length;
        var remainingPercent = (remainingSlots / thisZoneData.capacity) * 100;
        if ((allowVisitors || thisZoneData.day === 1)
            && remainingSlots >= 1){

            // Collect ref to current stats
            var zoneStats = thisZoneData.currentStats;
            var zoneFlags = thisZoneData.currentFlags;
            var addedSpecies = thisZoneData.addedPokemonSpecies;

            // Summon a Ditto on the first day of the sim if not already unlocked
            if (!appFreeMode
                && thisZoneData.day === 1
                && (typeof PokemonSpeciesSeen['ditto'] === 'undefined'
                    || PokemonSpeciesSeen['ditto'] < 1)){
                triggerZoneVisitor('ditto');
                }

            // Basic pokemon are summoned every month if none of the other conditions have been met
            else if (thisZoneData.day % 30 === 0){
                triggerZoneVisitor('auto');
                }

            }

        // Update the pokedex with any changes last day
        updatePokemonPokedex();
        recalculatePokedexTotals();

        // Do not update local storage records if we're in free mode
        if (!appFreeMode){

            // Update the pokeball colour if necessary
            recalculatePokedexIconColour();

            // Update local storage with the new day total
            if (typeof window.localStorage !== 'undefined'){
                var savePokeboxDaysPassed = PokeboxDaysPassed;
                window.localStorage.setItem('PokeboxDaysPassed', savePokeboxDaysPassed);
                //console.log('savePokeboxDaysPassed = ', savePokeboxDaysPassed);
                }

            // Update local storage with the current seen pokemon index
            if (typeof window.localStorage !== 'undefined'){

                // Collect saved global array and prepare to merge with local filtered
                var savedPokemonSpeciesSeen = window.localStorage.getItem('PokemonSpeciesSeen');
                if (typeof savedPokemonSpeciesSeen === 'string'){ savedPokemonSpeciesSeen = JSON.parse(savedPokemonSpeciesSeen); }
                else { savedPokemonSpeciesSeen = {}; }
                //console.log('savedPokemonSpeciesSeen = ', savedPokemonSpeciesSeen);

                // Merge the local array into the saved one, and then re-strinify it
                var mergedPokemonSpeciesSeen = JSON.stringify(jQuery.extend({}, savedPokemonSpeciesSeen, PokemonSpeciesSeen));
                window.localStorage.setItem('PokemonSpeciesSeen', mergedPokemonSpeciesSeen);
                //console.log('mergedPokemonSpeciesSeen = ', mergedPokemonSpeciesSeen);

                }

            }

        // Clear the previous timeout, request next animation frame, and then create a new one
        if (dayTimeoutID !== false){ clearTimeout(dayTimeoutID); }
        dayTimeoutID = false;
        requestAnimationFrame(function(){
            updateOverview(function(){
                if (thisZoneData.currentPokemon.length > 0
                    && dayTimeoutSpeed !== 'pause'){
                    dayTimeoutID = setTimeout(dayTimeoutHandler, dayTimeoutDuration);
                    }
                });
            });

    }

    // Define a function for recalculating the pokedex pokeball icon
    function recalculatePokedexIconColour(){

        // Update the pokedex ball icon with special colours if events are reached
        var $pokeBall = $('.pokedex .icon', $panelBanner);
        var currentBallKind = $pokeBall.attr('data-kind');
        var newBallKind = 'base';
        var completionPercent = calculatePokedexCompletion();
        if (completionPercent >= 50){ newBallKind = 'bronze'; }
        if (completionPercent >= 75){ newBallKind = 'silver'; }
        if (completionPercent === 100){ newBallKind = 'gold'; }
        if (currentBallKind !== newBallKind){
            var imageName = newBallKind !== 'base' ? 'pokeball_'+ newBallKind +'.png' : 'pokeball.png';
            $pokeBall.attr('src', 'images/' + imageName);
            }
        //console.log('currentBallKind', currentBallKind);
        //console.log('newBallKind', newBallKind);
        //console.log('completionPercent', completionPercent);

    }

    // Define a function for calculating the current Vivillon pattern
    var currentVivillonPattern = '';
    function recalculateVivillonPattern(){
        //console.log('recalculateVivillonPattern()');

        // If there the Vivillon line on the field, pre-calculate current colour stats
        if (typeof PokemonSpeciesIndex['vivillon'] !== 'undefined'
            && currentVivillonPattern === ''){

            // Loop through and calculate likelihood of each pattern
            var currentColourStats = thisZoneData.currentStats['colors'];
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

    // Define a function for updating growth cycles
    var pendingTradePartnerTokens = [];
    var pendingTradePartnerIDs = [];
    function updateGrowthCycles(){

        // Do not update egg cycles on day zero
        if (thisZoneData.day === 0){ return false; }

        // Collect references to current zone stats
        var currentTypeStats = thisZoneData.currentStats['types'];
        var currentSpeciesStats = thisZoneData.currentStats['species'];
        var currentBaseStats = thisZoneData.currentStats['baseStats'];

        // Define a variable to hold (temporary) allowed trade evolutions this cycle
        var allowedTradeEvolutions = {};

        // Define variables nessary for calculating color forms and collect data
        var colorKey = 0;
        var topColor = '';
        var topColors = [];
        var colorStats = thisZoneData.currentStats['colors'];
        var colorStatsRounded = {};
        var maxValue = 0;
        if (typeof colorStats !== 'undefined'
            && !jQuery.isEmptyObject(colorStats)){
            var colorStatsTokens = Object.keys(colorStats);
            topColor = colorStatsTokens[0];
            for (var i = 0; i < colorStatsTokens.length; i++){
                var colorToken = colorStatsTokens[i];
                //var colorValue = Math.ceil(colorStats[colorToken] / 10);
                var colorValue = Math.round(colorStats[colorToken] / 10) * 10;
                colorStatsRounded[colorToken] = colorValue;
                if (colorValue >= maxValue){
                    maxValue = colorValue;
                    topColors.push(colorToken);
                    } else {
                    break;
                    }
                }
            }
        var topColorsCount = topColors.length;
        var maxTopColorsKey = topColorsCount - 1;
        //console.log('colorStats = ', colorStats);
        //console.log('colorStatsRounded = ', colorStatsRounded);
        //console.log('topColor = ', topColor);
        //console.log('topColors = ', topColors);
        //console.log('topColorsCount = ', topColorsCount);
        //console.log('maxTopColorsKey = ', maxTopColorsKey);

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

                }
            }

        // SPECIAL BOX EFFECT : Prevent all evolution and form changes if the appropriate flag is active
        var preventAllEvolution = false;
        if (thisZoneData.currentEffects['preventAllEvolution'] === true){ preventAllEvolution = true; }

        // Now, loop through all the non-egg pokemon again and check evolutions
        if (thisZoneData.currentPokemon.length){
            for (var key = 0; key < thisZoneData.currentPokemon.length; key++){

                // Collect this Pokemon's local/current and index info from the DB
                var pokemonInfo = thisZoneData.currentPokemon[key];
                var indexInfo = PokemonSpeciesIndex[pokemonInfo.token];
                //console.log('-----\nChecking evolution data for ' + pokemonInfo.token, pokemonInfo, indexInfo);

                // Collect this Pokemon's life points and adjust if necessary
                var pokemonLifePoints = indexInfo.lifePoints;
                if (typeof pokemonInfo.lifePoints !== 'undefined'){ pokemonLifePoints = pokemonInfo.lifePoints; }

                // If pokemon is still an egg, skip growth cycles for now
                if (pokemonInfo.eggCycles > 0){ continue; }

                // Check to see to see if this pokemon is in growth cooldown, else no evolution
                var onlyLevelUpEvolutions = false;
                if (pokemonInfo.growthCooldown > 0){
                    pokemonInfo.growthCooldown -= 1;
                    onlyLevelUpEvolutions = true;
                    }

                // Check to see if this pokemon should have dynamic form changes
                if (typeof indexInfo.formClass !== 'undefined'
                    &&typeof indexInfo.dynamicForms !== 'undefined'
                    && indexInfo.dynamicForms === true){

                    // If seasonal variant, change the form based on the current season
                    if ((indexInfo.formClass === 'seasonal-variant'
                        || indexInfo.formClass2 === 'seasonal-variant')
                        && thisZoneData.season.length){
                        pokemonInfo.formToken = thisZoneData.season;
                        }

                    // If colorized variant, change the form based on the current top color
                    if ((indexInfo.formClass === 'color-variant'
                        || indexInfo.formClass2 === 'color-variant')
                        && topColor.length){
                        colorKey++;
                        if (topColors.length > 1){
                            var keyMod = colorKey % topColorsCount;
                            //console.log('colorKey = '+ colorKey +' | topColorsCount = '+ topColorsCount +' | keyMod = '+ keyMod);
                            pokemonInfo.formToken = topColors[keyMod];
                            } else {
                            pokemonInfo.formToken = topColor;
                            }
                        }

                    // If field variant, change the form based on the current biome
                    if ((indexInfo.formClass === 'field-variant'
                        || indexInfo.formClass2 === 'field-variant')
                        && typeof indexInfo.possibleFormsTriggers !== 'undefined'
                        && thisZoneData.field.length){
                        var triggerTokens = Object.keys(indexInfo.possibleFormsTriggers);
                        for (var i = 0; i < triggerTokens.length; i++){
                            var triggerToken = triggerTokens[i];
                            var triggerFields = indexInfo.possibleFormsTriggers[triggerToken];
                            if (triggerFields.indexOf(thisZoneData.field) !== -1){
                                pokemonInfo.formToken = triggerToken;
                                break;
                                }
                            }
                        }

                    // If type variant, change the form based on current type appeal
                    if (indexInfo.formClass === 'type-variant'
                        || indexInfo.formClass2 === 'type-variant'){
                        if (typeof indexInfo.possibleFormsTriggers !== 'undefined'){ var possibleFormsTriggers = indexInfo.possibleFormsTriggers; }
                        else { var possibleFormsTriggers = defaultTypeFormTriggers; }
                        var triggerTokens = Object.keys(possibleFormsTriggers);
                        var newFormToken = pokemonInfo.formToken;
                        // Check if type appeal exists yet, else simply collect the base form
                        var typeAppealDiff = sumValues(thisZoneData.currentStats['types']);
                        var typeAppealExists = typeof typeAppealDiff === 'number' && typeAppealDiff !== 0 ? true : false;
                        //console.log('thisZoneData.currentStats[\'types\'] = ', thisZoneData.currentStats['types']);
                        //console.log('typeAppealDiff = ', typeAppealDiff);
                        //console.log('typeAppealExists = ', typeAppealExists);
                        if (typeAppealExists === true){
                            triggerTokens.sort(function(f1, f2){
                                var t1 = possibleFormsTriggers[f1];
                                var t2 = possibleFormsTriggers[f2];
                                var t1val = thisZoneData.currentStats['types'][t1];
                                var t2val = thisZoneData.currentStats['types'][t2];
                                if (t1val > t2val){ return -1; }
                                else if (t1val < t2val){ return 1; }
                                else { return 0; }
                                });
                            var newFormToken = triggerTokens[0];
                            } else if (typeof indexInfo.baseForm !== 'undefined'){
                            var newFormToken = indexInfo.baseForm;
                            }
                        // If the Pokemon is not already in this form, change it now
                        if (pokemonInfo.formToken !== newFormToken){
                            var formToken = triggerTokens[0];
                            var formType = possibleFormsTriggers[formToken];
                            pokemonInfo.formToken = formToken;
                            if (indexInfo.syncTypeToForm === true){
                                if (indexInfo.syncTypeMethod === 'replace'){
                                    pokemonInfo.types = [formType];
                                    } else {
                                    pokemonInfo.types = indexInfo.types.slice(0);
                                    pokemonInfo.types.push(formType);
                                    if (pokemonInfo.types.length > 2){
                                        pokemonInfo.types = pokemonInfo.types.slice(0, 2);
                                        }
                                    }
                                }
                            }
                        }

                    }

                // If this Pokemon has any evolutions, check to see if should be triggered
                if (!preventAllEvolution
                    && typeof indexInfo.nextEvolutions !== 'undefined'
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
                    var fusionPokemonToBeRemoved = false;
                    function calculateEvolutionChance(pokemonInfo, methodToken, methodValue, methodNum, nextEvolution, prevChanceValue){
                        //console.log('|-- calculateEvolutionChance(pokemonInfo, methodToken, methodValue, methodNum, nextEvolution, prevChanceValue)', pokemonInfo, methodToken, methodValue, methodNum, nextEvolution, prevChanceValue);

                        // Calculate chance value in case we need it
                        var chanceValue = Math.seededRandomChance();

                        // Level-up evolutions are triggered by current growth cycles alone
                        if (methodToken === 'level-up'
                            && pokemonInfo.growthCycles >= methodValue){
                            return 1;
                            }

                        // Happiness-based evolutions are triggered by attract type appeal values
                        if (methodToken === 'happiness'){
                            if (methodValue === 'high'
                                && pokemonHappiness >= 2){
                                return 1;
                                } else if (methodValue === 'max'
                                && pokemonHappiness >= 4){
                                return 1;
                                } else if (methodValue === 'low'
                                && pokemonHappiness < 0){
                                return 1;
                                }
                            }

                        // Affection-based evolutions trigger when this pokemon is surrounded by related species
                        if (methodToken === 'affection'){
                            if (methodValue === 'high'
                                && numRelatedPokemon >= 5){
                                return 1;
                                } else if (methodValue === 'max'
                                && numRelatedPokemon >= 10){
                                return 1;
                                } else if (methodValue === 'low'
                                && numRelatedPokemon < 5){
                                return 1;
                                }
                            }

                        // Horde-based evolutions trigger when this pokemon is surrounded by a specific species
                        if (methodToken === 'horde'){
                            if (typeof methodValue === 'number'
                                && numSamePokemon >= methodValue){
                                return 1;
                                } else if (methodValue === 'high'
                                && numSamePokemon >= 5){
                                return 1;
                                } else if (methodValue === 'max'
                                && numSamePokemon >= 10){
                                return 1;
                                } else if (methodValue === 'low'
                                && numSamePokemon < 5){
                                return 1;
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
                                if (currentTypeStats[appealType] >= (appealLevel * 20)){
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
                                if (currentTypeStats[appealType] <= ((appealLevel * 5) * -1)){
                                    returnValue += 1 + (((currentTypeStats[appealType] * -1) * 10) * appealLevel);
                                    }
                                }
                            if (returnValue > 0){ return returnValue; }
                            }

                        // Stat-appeal evolutions trigger when the relevant base stats are especially high
                        if (methodToken === 'stat-appeal'
                            || methodToken === 'stat-surge'){
                            var appealLevel = methodToken === 'stat-surge' ? 2 : 1;
                            var appealTypes = typeof methodValue === 'string' ? [methodValue] : methodValue;
                            var returnValue = 0;
                            for (var i = 0; i < appealTypes.length; i++){
                                var appealType = appealTypes[i];
                                if (currentBaseStats[appealType] >= (appealLevel * 20)){
                                    returnValue += 1 + (currentBaseStats[appealType] * appealLevel);
                                    }
                                }
                            if (returnValue > 0){ return returnValue; }
                            }

                        // Trade-based evolutions trigger if this there's a same-species partner on field
                        if (methodToken === 'trade-partner'){
                            if (typeof nextEvolution['method2'] !== 'undefined'
                                && nextEvolution['method2'] === 'level-up'
                                && nextEvolution['value2'] > pokemonInfo.growthCycles){
                                return 0;
                                }
                            var partnerToken = methodValue === 'auto' ? pokemonInfo.token : methodValue;
                            var pendingTokenKey = pendingTradePartnerTokens.indexOf(pokemonInfo.token);
                            var pendingIDKey = pendingTradePartnerIDs.indexOf(pokemonInfo.id);
                            if (pendingTokenKey !== -1){
                                pendingTradePartnerTokens.splice(pendingTokenKey, 1);
                                pendingTradePartnerIDs.splice(pendingIDKey, 1);
                                return 3;
                                } else if (typeof thisZoneData.currentStats['species'][partnerToken] !== 'undefined'
                                && thisZoneData.currentStats['species'][partnerToken] > 0){
                                if (typeof nextEvolution['method2'] !== 'undefined'
                                    && nextEvolution['method2'] === 'level-up'){
                                    var possiblePartners = getZonePokemonByToken(partnerToken);
                                    var minGrowthLevel = nextEvolution['value2'];
                                    for (var i = 0; i < possiblePartners.length; i++){
                                        var partnerInfo = possiblePartners[i];
                                        if (partnerInfo.growthCycles >= minGrowthLevel
                                            && pendingTradePartnerIDs.indexOf(partnerInfo.id) === -1){
                                            pendingTradePartnerTokens.push(partnerInfo.token);
                                            pendingTradePartnerIDs.push(partnerInfo.id);
                                            return 2;
                                            }
                                        }
                                    } else {
                                    pendingTradePartnerTokens.push(pokemonInfo.token);
                                    return 1;
                                    }
                                }
                            }

                        // Species-based evolutions trigger if the other species is active on the field
                        if (methodToken === 'evolution-species'
                            && typeof thisZoneData.currentStats['species'][methodValue] !== 'undefined'
                            && thisZoneData.currentStats['species'][methodValue] > 0){
                            return 1;
                            }

                        // Fusion-based evolutions trigger if one of the other species is on the field
                        if (methodToken === 'fusion-species'
                            && typeof thisZoneData.currentStats['species'][methodValue] !== 'undefined'
                            && thisZoneData.currentStats['species'][methodValue] > 0){

                            // If the previous method was unsuccessful, return now
                            if (methodNum > 1 && prevChanceValue === 0){ return 0; }
                            //console.log('pokemonInfo.token = ', pokemonInfo.token);
                            //console.log('methodToken = ', methodToken);
                            //console.log('methodValue = ', methodValue);
                            //console.log('methodNum = ', methodNum);
                            //console.log('prevChanceValue = ', prevChanceValue);

                            // Find a copy of the other species to merge with, then remove it from play
                            var possibleFusions = getZonePokemonByToken(methodValue);
                            possibleFusions.sort(function(a, b){ return a.growthCycles > b.growthCycles ? -1 : (a.growthCycles < b.growthCycles ? 1 : 0); });
                            //console.log('possibleFusions = ', possibleFusions);

                            // Collect the fusion pokemon if set
                            var fusionPokemon = possibleFusions[0];
                            //console.log('fusionPokemon = ', fusionPokemon);
                            if (fusionPokemon.id === pokemonInfo.id){
                                if (possibleFusions.length > 1){ fusionPokemon = possibleFusions[1]; }
                                else { fusionPokemon = false; }
                                //console.log('fusionPokemon(B) = ', fusionPokemon);
                                }

                            // If a fusion was collected, return now
                            if (fusionPokemon !== false){
                                fusionPokemonToBeRemoved = fusionPokemon;
                                return 1 + thisZoneData.currentStats['species'][methodValue];
                                }

                            }

                        // Extinction-based evolutions trigger when this pokemon is the last  of its species
                        if ((methodToken === 'extinction')
                            && numRelatedPokemon == 1){
                            return 1;
                            }

                        // Gender-based evolutions are triggered immediately if the pokemon is of a specific sex
                        if (methodToken === 'gender'
                            && pokemonInfo.gender === methodValue){
                            return 1;
                            }

                        // Form-based evolutions are triggered immediately if the pokemon is in that form
                        if (methodToken === 'form'
                            && pokemonInfo.formToken === methodValue){
                            return 1;
                            }

                        // Season-based evolutions are triggered immediately if the current season is a match
                        if (methodToken === 'season'
                            && thisZoneData.season === methodValue){
                            return 1;
                            }

                        // Adulthood-based evolutions are triggered immediately if the pokemon is of a specific age
                        if (methodToken === 'adulthood'
                            && pokemonInfo.reachedAdulthood === methodValue){
                            return 1;
                            }

                        // Chance-based evolutions are triggered by random simulator values
                        if (methodToken === 'chance'
                            && (chanceValue < methodValue)){
                            return 1;
                            }

                        // Burnout evolutions trigger automatically when this pokemon reaches adulthood
                        if (methodToken === 'burnout-evolution'
                            && pokemonInfo.reachedAdulthood === true){
                            return 1;
                            }

                        // Burst and mega evolutions trigger automatically when this pokemon reaches adulthood
                        if ((methodToken === 'burst-evolution'
                            || methodToken === 'mega-evolution')
                            && pokemonInfo.reachedAdulthood === true){
                            return 1;
                            }

                        // Primary reversions trigger automatically when this pokemon reaches adulthood
                        if (methodToken === 'primal-reversion'
                            && pokemonInfo.reachedAdulthood === true){
                            return 1;
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

                        // Define vars to count the number of trigged evos and switch type
                        var totalMethods = 0;
                        var triggeredMethods = 0;
                        var forceEvo = false;
                        if (typeof nextEvolution.switch !== 'undefined'){
                            var switchKind = nextEvolution.switch;
                            } else {
                            var switchKind = 'and';
                            if (pokemonInfo.reachedAdulthood === true
                                && (nextEvolution.method === 'mega-evolution'
                                    || nextEvolution.method === 'primal-reversion')){
                                switchKind = 'or';
                                }
                            }

                        //console.log('|- Checking indexInfo.nextEvolutions['+i+'] = ', nextEvolution, nextEvolutionInfo, 'switchKind:'+switchKind);

                        // Define a variable to hold the trigger chance value
                        var triggeredChance = 0;

                        // Loop through looking for methods
                        var prevMethodToken = false;
                        var prevMethodValue = false;
                        var prevChanceValue = 0;
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

                                // Calculate the chance value based on the evo type (always allow level-up evos)
                                var chanceValue = 0;
                                if (methodToken === 'level-up'
                                    || !onlyLevelUpEvolutions){
                                    var chanceValue = calculateEvolutionChance(pokemonInfo, methodToken, methodValue, m, nextEvolution, prevChanceValue);
                                    }
                                //console.log('|-- chanceValue = ', chanceValue);

                                if (chanceValue > 0){

                                    triggeredMethods++;
                                    triggeredChance += chanceValue;
                                    //console.log('|-- totalMethods++; | totalMethods = ', totalMethods);
                                    //console.log('|-- triggeredChance += '+chanceValue+'; | triggeredChance = ', triggeredChance);

                                    }

                                prevMethodToken = methodToken;
                                prevMethodValue = methodValue;
                                prevChanceValue = chanceValue;

                                } else {
                                break;
                                }
                            }

                        // If both methods were triggered, we can queue this evolution
                        if ((switchKind === 'and' && triggeredMethods === totalMethods)
                            || (switchKind === 'or' && triggeredMethods > 0)
                            || (forceEvo === true)){
                            var queuedEvolution = {token: nextEvolution.species, types: nextEvolutionInfo.types, chance: triggeredChance};
                            if (fusionPokemonToBeRemoved !== false){ queuedEvolution.fusion = fusionPokemonToBeRemoved.id; }
                            if (typeof nextEvolution.castoff !== 'undefined'){ queuedEvolution.castoff = nextEvolution.castoff; }
                            queuedEvolutions.push(queuedEvolution);
                            }

                        }

                    // If evolutions were queues, sort by chance and pick first
                    if (queuedEvolutions.length > 0){

                        // Sort the evolution possibilities by highest chance, then pick first
                        //console.log('<< queuedEvolutions for '+pokemonInfo.token+' = ', 'pokemonInfo:'+JSON.stringify(pokemonInfo), 'queuedEvolutions:'+JSON.stringify(queuedEvolutions));
                        queuedEvolutions.sort(function(a, b){
                            if (a.chance > b.chance){ return -1; }
                            else if (a.chance < b.chance){ return 1; }
                            else { return 0; }
                            });
                        var selectedEvolution = queuedEvolutions[0];
                        var selectedEvolutionData = PokemonSpeciesIndex[selectedEvolution.token];
                        //console.log('<< selectedEvolution = ', selectedEvolution);
                        //console.log('<< selectedEvolutionData = ', selectedEvolutionData);

                        // Create an entry for this species and in the global count if not exists
                        var evolvedPokemonSpecies = thisZoneData.evolvedPokemonSpecies;
                        if (typeof evolvedPokemonSpecies[pokemonInfo.token] === 'undefined'){ evolvedPokemonSpecies[pokemonInfo.token] = 0; }
                        evolvedPokemonSpecies[pokemonInfo.token]++;

                        // And then apply the evolution to the pokemon's data
                        var backupToken = pokemonInfo.token;
                        pokemonInfo.token = selectedEvolution.token;
                        pokemonInfo.types = selectedEvolution.types;
                        pokemonInfo.growthCooldown += 10;

                        // If the selected evolution was Vivillon, we need to calculate its form
                        if (selectedEvolution.token === 'vivillon'){
                            pokemonInfo.formToken = currentVivillonPattern;
                            }
                        // Otherwise if this pokemon has a randomized form, decide it now
                        else if (typeof selectedEvolutionData['randomizeForms'] !== 'undefined'
                            && selectedEvolutionData['randomizeForms'] === true
                            && typeof selectedEvolutionData['possibleForms'] !== 'undefined'
                            && typeof pokemonInfo.formToken === 'undefined'){
                            var possibleForms = selectedEvolutionData['possibleForms'];
                            var randomKey = Math.floor((Math.seededRandomChance() / 100) * possibleForms.length);
                            var randomForm = possibleForms[randomKey];
                            pokemonInfo.formToken = randomForm;
                            }

                        // If this pokemon has a form defined when it really shouldn't, remove it
                        if (typeof selectedEvolutionData.possibleForms === 'undefined'
                            && typeof pokemonInfo.formToken !== 'undefined'){
                            delete pokemonInfo.formToken;
                            }

                        // Create an entry for this species in the global count if not exists
                        var addedPokemonSpecies = thisZoneData.addedPokemonSpecies;
                        if (typeof addedPokemonSpecies[selectedEvolution.token] === 'undefined'){ addedPokemonSpecies[selectedEvolution.token] = 0; }
                        addedPokemonSpecies[selectedEvolution.token]++;

                        // Create an entry for this pokemon in the seen count if not exists
                        if (typeof PokemonSpeciesSeen[selectedEvolution.token] === 'undefined'){ PokemonSpeciesSeen[selectedEvolution.token] = 0; }
                        PokemonSpeciesSeen[selectedEvolution.token]++;

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

                        // If the selected evolution was a fusion, we must remove the sacrifice
                        if (typeof selectedEvolution.fusion !== 'undefined'){

                            // Remove the fusion component from the zone
                            removePokemonByID(selectedEvolution.fusion);

                            // Push an event to the analytics
                            if (typeof ga !== 'undefined'){
                                ga('send', {
                                    hitType: 'event',
                                    eventCategory: 'pokemon',
                                    eventAction: 'fusion',
                                    eventLabel: backupToken+' fused with '+selectedEvolution.token
                                    });
                                }

                            }

                        }
                    }

                // If this Pokemon is not an adult has grown to its max life points, it's an adult now
                if (pokemonLifePoints !== -1
                    && pokemonInfo.growthCycles >= pokemonLifePoints
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
                if (pokemonInfo.reachedAdulthood === true
                    && pokemonLifePoints !== -1){
                    pokemonInfo.growthCycles -= Math.ceil(pokemonLifePoints * 0.10);
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

        // SPECIAL BOX EFFECT : Prevent all breeding if the appropriate flag is active
        if (thisZoneData.currentEffects['preventAllBreeding'] === true){ return false; }

        // Check to see if we're at high (95%) zone capacity already
        var currentZoneStats = thisZoneData.currentStats;
        var currentTypeStats = currentZoneStats['types'];
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
                    if (typeof pokeSpecies[pokemonInfo.token] == 'undefined'){ pokeSpecies[pokemonInfo.token] = {male:0,female:0,none:0}; }
                    pokeSpecies[pokemonInfo.token][pokemonInfo.gender] += 1;
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
        //console.log('pokeSpecies = ', pokeSpecies);

        // Loop through species and check to see if any should breed
        if (!jQuery.isEmptyObject(pokeSpecies)){

            // Collect a list of species tokens sorted by speed stat
            //var sortedSpeciesTokens = sortSpeciesTokensBySpeed(Object.keys(pokeSpecies));
            var sortedSpeciesTokens = sortSpeciesTokensByBreedPoints(Object.keys(pokeSpecies));
           //console.log('----------\nChecking breeding options for sortedSpeciesTokens', sortedSpeciesTokens);

            // Pre-count the number of Ditto on the field
            var existingDitto = typeof pokeSpecies['ditto'] !== 'undefined' ? pokeSpecies['ditto']['none'] : 0;
            var existingSuperDitto = 0;
            if (typeof pokeSpecies['super-ditto'] !== 'undefined'){
                existingDitto += pokeSpecies['super-ditto']['none'];
                existingSuperDitto += pokeSpecies['super-ditto']['none'];
                }

            // Pre-count the number of Arceus on the field
            var existingArceus = typeof pokeSpecies['arceus'] !== 'undefined' ? pokeSpecies['arceus']['none'] : 0;
            //console.log('existingArceus = ', existingArceus);

            // Prevent breeding of these special exception species
            var preventBreeding = ['zygarde-cell', 'shadow-variant', 'shining-variant'];

            // First generate an array of eggs to add (by species) with counts
            var eggsToAddIndex = {};
            var eggsToAddCount = 0;
            for (var key = 0; key < sortedSpeciesTokens.length; key++){

                // Collect the token and index info for the species
                var pokeToken = sortedSpeciesTokens[key];
                //console.log('----------\nChecking breeding options for sortedSpeciesTokens['+key+'] ('+pokeToken+' x'+pokeSpecies[pokeToken]+')');
                var indexInfo = PokemonSpeciesIndex[pokeToken];
               //console.log('|- ['+ pokeToken +'] indexInfo.lifePoints = ' + indexInfo.lifePoints + ' | indexInfo.breedPoints = ' + indexInfo.breedPoints+ ' | indexInfo.baseStats = ', indexInfo.baseStats);

                // Check to see if this is legendary or special
                var isLegendary = false;
                if (typeof indexInfo.class !== 'undefined'
                    && (indexInfo.class === 'legendary'
                        || indexInfo.class === 'mythical'
                        || indexInfo.class === 'ultra-beast')){
                    isLegendary = true;
                    }

                // Check to see if this pokemon has a form class or not
                var pokeFormClass = false;
                if (typeof indexInfo.formClass !== 'undefined'){
                    pokeFormClass = indexInfo.formClass;
                    } else if (typeof indexInfo.formClass2 !== 'undefined'){
                    pokeFormClass = indexInfo.formClass2;
                    }

                // Check to see if we bypass normal breeding restrictions
                var allowLegendaryBreeding = false;
                if (existingArceus > 0
                    && preventBreeding.indexOf(pokeToken) === -1
                    && preventBreeding.indexOf(pokeFormClass) === -1
                    ){
                    allowLegendaryBreeding = true;
                    }

                // Skip ahead if this species is incapable of breeding
                if (indexInfo.eggGroups.indexOf('ditto') !== -1){
                    //console.log(pokeToken+' cannot breed with itself\n-----');
                    continue;
                    } else if (pokeToken === 'arceus'){
                    //console.log(pokeToken+' cannot breed with itself\n-----');
                    continue;
                    } else if (isLegendary && !allowLegendaryBreeding){
                    //console.log('legendaries like '+pokeToken+' cannot breed at all\n-----');
                    continue;
                    } else if (!isLegendary && indexInfo.eggGroups.indexOf('undiscovered') !== -1){
                    //console.log(pokeToken+' cannot breed at all\n-----');
                    continue;
                    }

                var baseEvolution = pokemonGetBaseEvolution(pokeToken, true, false);
                var baseEvolutionInfo = PokemonSpeciesIndex[baseEvolution];
                //console.log('pokeToken('+pokeToken+') | baseEvolution('+baseEvolution+')');

                // Define new unit count at zero with an empty token
                var newUnits = 0;
                var newUnitsToken = pokeToken;

                // If this species has a defined egg species, overwrite new unit token
                if (typeof indexInfo.eggSpecies !== 'undefined'){
                    newUnitsToken = indexInfo.eggSpecies;
                    }

                // If this species is NOT single-gender, we can proceed normally, else there's more work
                if (!isLegendary && !indexInfo.hasOneGender){

                    // No egg partner exists so we can proceed normally
                    //console.log('|- '+baseEvolution+' has no egg partner, proceed normally');

                    // Not legendary and not single-gender so we can proceed normally
                    //console.log('|- '+baseEvolution+' is not legendary & not single-gendered, proceed normally');

                    // Count existing eggs for this species
                    var currentEggs = typeof pokeEggs[baseEvolution] !== 'undefined' ? pokeEggs[baseEvolution] : 0;
                    //console.log('|- currentEggs('+baseEvolution+'/'+currentEggs+')');

                    // Genderless pokemon breed with any other and ditto, otherwise pairs are required
                    if (indexInfo.speciesGender === 'none'){

                        // NONE gendered pokemon can make exactly half their total number plus ditto
                        var eggGenerators = pokeSpecies[pokeToken]['none'] + existingDitto;
                        var newUnits = Math.floor(eggGenerators / 2);
                        //console.log('|- NONE | eggGenerators('+pokeToken+'/'+eggGenerators+') | newUnits('+newUnits+')');

                        } else {

                        // MALE / FEMALE gendered pokemon can make as many as there are females or dittos
                        if (pokeSpecies[pokeToken]['female'] === pokeSpecies[pokeToken]['male']){
                            var eggGenerators = pokeSpecies[pokeToken]['female'] + pokeSpecies[pokeToken]['male'] + existingDitto;
                            var newUnits = Math.floor(eggGenerators / 2);
                            //console.log('|- F=M | eggGenerators('+pokeToken+'/'+eggGenerators+') | newUnits('+newUnits+')');
                        } else if (pokeSpecies[pokeToken]['female'] < pokeSpecies[pokeToken]['male']){
                            var eggGenerators = pokeSpecies[pokeToken]['female'] + existingDitto;
                            var newUnits = Math.min(eggGenerators, pokeSpecies[pokeToken]['male']);
                            //console.log('|- F<M | eggGenerators('+pokeToken+'/'+eggGenerators+') | newUnits('+newUnits+')');
                            //console.log('|- pokeSpecies['+pokeToken+'] = ', pokeSpecies[pokeToken]);
                            //console.log('|- existingDitto = ', existingDitto);
                            //console.log('|- eggGenerators = ', eggGenerators);
                            //console.log('|- newUnits = ', newUnits);
                            } else {
                            var eggGenerators = pokeSpecies[pokeToken]['female'];
                            var newUnits = Math.min(eggGenerators, pokeSpecies[pokeToken]['male'] + existingDitto);
                            //console.log('|- F>M | eggGenerators('+pokeToken+'/'+eggGenerators+') | newUnits('+newUnits+')');
                            }

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

                    var baseUnits = pokeSpecies[pokeToken][indexInfo.speciesGender];
                    var baseEggs = typeof pokeEggs[baseEvolution] !== 'undefined' ? pokeEggs[baseEvolution] : 0;
                    //console.log('|- baseUnits('+pokeToken+'/'+baseUnits+') | baseEggs('+baseEvolution+'/'+baseEggs+')');

                    var oppositeGender = indexInfo.speciesGender !== 'female' ? 'female' : 'male';
                    var partnerInfo = typeof pokeSpecies[eggPartner] !== 'undefined' ? pokeSpecies[eggPartner] : false;
                    var partnerUnits = partnerInfo && typeof partnerInfo[oppositeGender] !== 'undefined' ? partnerInfo[oppositeGender] : 0;
                    var partnerEggs = partnerInfo && typeof pokeEggs[eggPartner] !== 'undefined' ? pokeEggs[eggPartner] : 0;
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

                    // Calculate the number of base units for this pokemon and current eggs
                    var baseUnits = pokeSpecies[pokeToken][indexInfo.speciesGender];
                    var currentEggs = typeof pokeEggs[baseEvolution] !== 'undefined' ? pokeEggs[baseEvolution] : 0;
                    if (typeof indexInfo.eggSpecies !== 'undefined'
                        && typeof pokeEggs[indexInfo.eggSpecies] !== 'undefined'){
                        currentEggs += pokeEggs[indexInfo.eggSpecies];
                        baseUnits += typeof pokeSpecies[indexInfo.eggSpecies] !== 'undefined' ? sumValues(pokeSpecies[indexInfo.eggSpecies]) : 0;
                        } else if (typeof indexInfo.eggParent !== 'undefined'
                        && typeof pokeEggs[indexInfo.eggParent] !== 'undefined'){
                        currentEggs += pokeEggs[indexInfo.eggParent];
                        baseUnits += typeof pokeSpecies[indexInfo.eggParent] !== 'undefined' ? sumValues(pokeSpecies[indexInfo.eggParent]) : 0;
                        }

                    // Calculate the number of new units to create for this species
                    var newUnits = 0;
                    // Only non-legendaries (plus Manaphy) can breed with Ditto
                    if (!isLegendary || pokeToken === 'manaphy'){ newUnits += existingDitto > 0 ? Math.max(baseUnits, existingDitto) : 0; }
                    // Only legendaries and mythicals can request an egg from Arceus
                    if (isLegendary){ newUnits += existingArceus > 0 ? Math.max(baseUnits, existingArceus) : 0; }
                    //console.log('|- baseUnits('+pokeToken+'/'+baseUnits+') | currentEggs('+baseEvolution+'/'+currentEggs+') | newUnits('+newUnitsToken+'/'+newUnits+')');

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
                        //console.log('|- eggsToAddIndex['+pokeEggSpecies+'] += 1 |= ', eggsToAddIndex[pokeEggSpecies]);
                        //console.log('|- eggsToAddCount += 1 |= ', eggsToAddCount);
                        }
                    }

                }

            // Loop through through and generate required eggs, in order,
            // one per species, until done or at capacity
            //console.log('----------\nLoop through through and generate required eggs...');
            var eggsAddedCount = 0;
            var eggsToAddIndexTokens = !jQuery.isEmptyObject(eggsToAddIndex) ? Object.keys(eggsToAddIndex) : [];
            if (eggsAddedCount < eggsToAddCount){
                //console.log('(eggsAddedCount('+eggsAddedCount+') < eggsToAddCount('+eggsToAddCount+')) && (thisZoneData.currentPokemon.length('+thisZoneData.currentPokemon.length+') < thisZoneData.capacity('+thisZoneData.capacity+'))');
                //console.log('eggsToAddIndex = ', eggsToAddIndex);
                for (var key = 0; key < eggsToAddIndexTokens.length; key++){

                    // Collect the token and index data for the new baby
                    var pokeToken = eggsToAddIndexTokens[key];
                    var pokeIndex = PokemonSpeciesIndex[pokeToken];
                    var allowEgg = true;
                    if (typeof pokeIndex === 'undefined'){
                        console.log('undefined!!!');
                        console.log('pokeToken', typeof pokeToken, pokeToken);
                        console.log('pokeIndex', typeof pokeIndex, pokeIndex);
                        continue;
                        }
                    //console.log('eggsToAddIndexTokens['+key+'] = ', pokeToken, pokeIndex);

                    // Check again to see if we're at overcrowded capacity
                    if (allowEgg){
                        zoneCapacityPercent = ((thisZoneData.currentPokemon.length / thisZoneData.capacity) * 100);
                        zoneIsOvercrowded = zoneCapacityPercent >= 95 ? true : false;
                        //console.log('zoneCapacityPercent = ', zoneCapacityPercent);
                        //console.log('zoneIsOvercrowded = ', zoneIsOvercrowded);
                        if (zoneIsOvercrowded){ allowEgg = false; }
                        }

                    // Check to see if this species is not appropriate for this zone
                    if (allowEgg){
                        var appealPoints = 0;
                        var minAppealRequired = pokeIndex.eggCycles * -1;
                        //console.log('\n-----');
                        //console.log(pokeToken + ' | minAppealRequired = ' + minAppealRequired + ' | appealPoints = ' + appealPoints);
                        for (var i = 0; i < pokeIndex.types.length; i++){
                            var type = pokeIndex.types[i];
                            if (typeof currentTypeStats[type] !== 'undefined'){
                                //console.log('appealPoints('+appealPoints+') += currentTypeStats['+type+']('+currentTypeStats[type]+');');
                                appealPoints += currentTypeStats[type];
                                }
                            }
                        //console.log(pokeToken + ' | minAppealRequired = ' + minAppealRequired + ' | appealPoints = ' + appealPoints);
                        if (appealPoints < minAppealRequired){ allowEgg = false; }
                        }

                    // Delete eggs for this species if not allowed, else proceed with creation normally
                    if (!allowEgg){

                        // Delete the egg from the index completely
                        eggsToAddIndex[pokeToken] = 0;
                        delete eggsToAddIndex[pokeToken];

                        } else if (eggsToAddIndex[pokeToken] > 0){

                        // Check to Shiny Ditto reductions and then add new egg to the zone
                        if (existingSuperDitto > 0){ addPokemonToZone(pokeToken, true, existingSuperDitto); }
                        else { addPokemonToZone(pokeToken, true); }

                        // Increment the egg count and delete from index if now empty
                        eggsAddedCount++;
                        eggsToAddIndex[pokeToken] -= 1;
                        if (eggsToAddIndex[pokeToken] == 0){
                            delete eggsToAddIndex[pokeToken];
                            }

                        }

                    // Break if index is empty or zone is now overcrowded
                    if (jQuery.isEmptyObject(eggsToAddIndex)){ break; }
                    else if (zoneIsOvercrowded){ break; }

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

        // Under normal circumstances, do NOT use type appeal for biome
        var currentZoneStats = thisZoneData.currentStats;
        var useTypeAppeal = false;

        // (GEN 7+) If we're in the right generation, calculate Zygarde Complete mechanics
        if (maxIndexKeyToLoad >= 7){
            // Invert the box's biome if zygarde complete is on the field
            if (typeof currentZoneStats['species']['zygarde-complete'] !== 'undefined'
                && currentZoneStats['species']['zygarde-complete'] > 0){
                useTypeAppeal = true;
                }
            }

        // Count the actual Pokemon's types, not their appeal values
        if (useTypeAppeal){
            var currentTypes = currentZoneStats['types'];
            } else {
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
        if (possibleFields[0].chance > 0
            && possibleFields[0]['field'] !== thisZoneData.field){
            var fieldToken = possibleFields[0]['field'];
            var fieldInfo = PokemonFieldsIndex[fieldToken];
            thisZoneData.field = fieldToken;
            thisZoneData.name = fieldInfo.name;
            //console.log('change to field '+fieldToken);
            var newImage = 'images/fields/'+fieldToken+'-fullsize.png';
            $('.details.pokemon .field .bg', $panelMainOverview).css({backgroundImage:'url('+ newImage +')'});
            }

    }

    // Define a function for calculating visitor appeal values
    function recalculateVisitorAppeal(){
        //console.log('recalculateVisitorAppeal()');

        // Collect reference to key zone stats and values
        var zoneStats = thisZoneData.currentStats;
        var zoneFlags = thisZoneData.currentFlags;
        var addedSpecies = thisZoneData.addedPokemonSpecies;
        var remainingSlots = thisZoneData.capacity - thisZoneData.currentPokemon.length;
        var emptySpacePercent = (remainingSlots / thisZoneData.capacity) * 100;

        // Define event-specific visitor appeal multipliers
        var eventPokemonChanceBases = {};
        var eventPokemonChanceBoosters = {};
        if (true){

            // Check to see if this is a mythical year
            var eventBase = 0;
            var eventBoost = 0;
            var mythicalYear = thisZoneData.date.year % 3 === 0 ? true : false;
            var currentMythicalNum = typeof zoneStats['class']['mythical'] !== 'undefined' ? zoneStats['class']['mythical'] : 0;
            var currentLegendaryNum = typeof zoneStats['class']['legendary'] !== 'undefined' ? zoneStats['class']['legendary'] : 0;
            var currentUltraBeastNum = typeof zoneStats['class']['ultra-beast'] !== 'undefined' ? zoneStats['class']['ultra-beast'] : 0;
            var currentArceusNum = typeof zoneStats['species']['arceus'] !== 'undefined' ? zoneStats['species']['arceus'] : 0;

            // MYTHICAL pokemon appear more often once every three years
            eventPokemonChanceBoosters['mythical'] = 0;
            if (mythicalYear
                && (currentArceusNum > 0 || (
                    currentMythicalNum < 1
                    && thisZoneData.date.year >= 3
                    && thisZoneData.date.month >= 11
                    ))){
                eventBoost = ((thisZoneData.date.month + 9) / 12) + ((thisZoneData.date.day + 9) / 30) / 10;
                eventBase = 120 * eventBoost;
                eventPokemonChanceBases['mythical'] = eventBase;
                eventPokemonChanceBoosters['mythical'] = eventBoost;
                }

            // LEGENDARY pokemon appear more often once every year
            eventPokemonChanceBoosters['legendary'] = 0;
            if (!mythicalYear
                && (currentArceusNum > 0 || (
                    currentLegendaryNum < 1
                    && thisZoneData.date.year >= 1
                    && thisZoneData.date.month >= 10
                    ))){
                eventBoost = ((thisZoneData.date.month + 6) / 12) + ((thisZoneData.date.day + 6) / 30) / 10;
                eventBase = 100 * eventBoost;
                if (currentLegendaryNum > 0){ eventBoost /= (currentLegendaryNum + 1);  }
                eventPokemonChanceBases['legendary'] = eventBase;
                eventPokemonChanceBoosters['legendary'] = eventBoost;
                }

            // DITTO appears more 6 months into the year when the box is nearly empty
            eventPokemonChanceBoosters['ditto'] = 0;
            if (thisZoneData.date.month >= 6
                && emptySpacePercent >= 90){
                eventBoost = 80 * (emptySpacePercent / 10);
                eventPokemonChanceBoosters['ditto'] = eventBoost;
                }

            // (GEN 7+) ZYGARDE cells and cores are summoned when type appeal conditions are too extreme
            eventPokemonChanceBoosters['zygarde-core'] = 0;
            eventPokemonChanceBoosters['zygarde-cell'] = 0;
            if (maxIndexKeyToLoad >= 7){

                // Check if type appeal is critical or extreme right now
                var extremeTypeAppeal = zoneFlags.indexOf('extremeTypeAppeal') !== -1 ? true : false;
                var criticalTypeAppeal = zoneFlags.indexOf('criticalTypeAppeal') !== -1 ? true : false;
                //console.log('extremeTypeAppeal = ', extremeTypeAppeal);
                //console.log('criticalTypeAppeal = ', criticalTypeAppeal);

                // Cound the current number of cells and cores (in all their forms) in the box
                var numZygardeCells = typeof zoneStats['species']['zygarde-cell'] !== 'undefined' ? zoneStats['species']['zygarde-cell'] : 0;
                var numZygardeCores = typeof zoneStats['species']['zygarde-core'] !== 'undefined' ? zoneStats['species']['zygarde-core'] : 0;
                if (typeof zoneStats['species']['zygarde-10-percent'] !== 'undefined'
                    && zoneStats['species']['zygarde-10-percent'] > 0){
                    numZygardeCores += zoneStats['species']['zygarde-10-percent'];
                    numZygardeCells += 1 * zoneStats['species']['zygarde-10-percent'];
                    }
                if (typeof zoneStats['species']['zygarde'] !== 'undefined'
                    && zoneStats['species']['zygarde'] > 0){
                    numZygardeCores += zoneStats['species']['zygarde'];
                    numZygardeCells += 2 * zoneStats['species']['zygarde'];
                    }
                if (typeof zoneStats['species']['zygarde-complete'] !== 'undefined'
                    && zoneStats['species']['zygarde-complete'] > 0){
                    numZygardeCores += zoneStats['species']['zygarde-complete'];
                    numZygardeCells += 3 * zoneStats['species']['zygarde-complete'];
                    }
                //console.log('numZygardeCells = ', numZygardeCells);
                //console.log('numZygardeCores = ', numZygardeCores);

                // Summon cells only until there are a max of three in the box
                if (numZygardeCores < 1
                    && numZygardeCells < 3
                    && (extremeTypeAppeal || criticalTypeAppeal)){
                    //console.log('try to add a cell');
                    eventBase = 0 + (extremeTypeAppeal ? 100 : 0) + (criticalTypeAppeal ? 100 : 0);
                    eventBoost = 0 + (extremeTypeAppeal ? 2 : 0) + (criticalTypeAppeal ? 2 : 0);
                    eventPokemonChanceBases['zygarde-cell'] = eventBase;
                    eventPokemonChanceBoosters['zygarde-cell'] = eventBoost;
                    }

                // Summon a single core when at least three cells are currently in the box
                if (numZygardeCores < 1
                    && numZygardeCells >= 3){
                    //console.log('try to add a core');
                    eventBase = 100 * numZygardeCells;
                    eventBoost = 2 * numZygardeCells;
                    eventPokemonChanceBases['zygarde-core'] = eventBase;
                    eventPokemonChanceBoosters['zygarde-core'] = eventBoost;
                    }

                }

            // (GEN 7+) Necrozma is summoned to devour the light of Lunala or Solgaleo when they appear
            eventPokemonChanceBoosters['necrozma'] = 0;
            if (maxIndexKeyToLoad >= 7){
                var currentLunala = typeof zoneStats['species']['lunala'] !== 'undefined' ? zoneStats['species']['lunala'] : 0;
                var currentSolgaleo = typeof zoneStats['species']['solgaleo'] !== 'undefined' ? zoneStats['species']['solgaleo'] : 0;
                var necrozmaAdded = typeof addedSpecies['necrozma'] !== 'undefined' ? addedSpecies['necrozma'] : 0;
                //console.log('currentLunala = ', currentLunala);
                //console.log('currentSolgaleo = ', currentSolgaleo);
                //console.log('necrozmaAdded = ', necrozmaAdded);
                if ((currentLunala + currentSolgaleo) > 0
                    && necrozmaAdded < 1){
                    eventBoost = ((thisZoneData.date.month + 1) / 12) + currentLunala + currentSolgaleo;
                    eventBase = 100 * eventBoost;
                    if (currentUltraBeastNum > 0){ eventBase *= (currentUltraBeastNum + 1); }
                    eventPokemonChanceBases['necrozma'] = eventBase;
                    eventPokemonChanceBoosters['necrozma'] = eventBoost;
                    //console.log('eventBoost = ', eventBoost);
                    //console.log('eventBase = ', eventBase);
                    }
                }

            // (GEN 7+) Ultra beasts are summoned when the box has too much ultra energy (and no silvally)
            eventPokemonChanceBoosters['ultra-beast'] = 0;
            if (maxIndexKeyToLoad >= 7){
                var boxHasUltraEnergy = zoneFlags.indexOf('boxHasUltraEnergy') !== -1;
                var silvallyHasAppeared = zoneFlags.indexOf('silvallyHasAppeared') !== -1;
                var totalUltraEnergy = typeof zoneStats['totalUltraEnergy'] !== 'undefined' ? zoneStats['totalUltraEnergy'] : 0;
                var currentUltraEnergy = typeof zoneStats['currentUltraEnergy'] !== 'undefined' ? zoneStats['currentUltraEnergy'] : 0;
                //console.log('totalUltraEnergy = ' + totalUltraEnergy + ' | currentUltraEnergy = ' + currentUltraEnergy);
                if (boxHasUltraEnergy
                    && !silvallyHasAppeared
                    && currentUltraBeastNum < 3
                    && totalUltraEnergy >= 3
                    && currentUltraEnergy === 0){
                    eventBoost = ((thisZoneData.date.month + 1) / 12) + totalUltraEnergy;
                    eventBase = 100 * eventBoost;
                    if (currentUltraBeastNum > 0){ eventBoost /= (currentUltraBeastNum + 1);  }
                    eventPokemonChanceBases['ultra-beast'] = eventBase;
                    eventPokemonChanceBoosters['ultra-beast'] = eventBoost;
                    }
                }

            // (GEN 7+) Type: Null are summoned when the box has too many ultra beasts (silvally eats them)
            eventPokemonChanceBoosters['type-null'] = 0;
            if (maxIndexKeyToLoad >= 7){
                var boxHadUltraBeasts = zoneFlags.indexOf('boxHadUltraBeasts') !== -1;
                var typeNullAdded = typeof addedSpecies['type-null'] !== 'undefined' ? addedSpecies['type-null'] : 0;
                if (boxHadUltraBeasts
                    && typeNullAdded < 1){
                    eventBoost = (thisZoneData.date.month + 1) / 12;
                    eventBase = 100 * eventBoost;
                    if (currentUltraBeastNum > 0){ eventBase *= (currentUltraBeastNum + 1); }
                    eventPokemonChanceBases['type-null'] = eventBase;
                    eventPokemonChanceBoosters['type-null'] = eventBoost;
                    }
                }

            // (GEN 4+) ARCEUS prevents non-legendary/mythical pokemon from appearing (never appears on its own, unlocked as gift)
            eventPokemonChanceBoosters['arceus'] = 0;
            if (maxIndexKeyToLoad >= 4){
                if (currentArceusNum > 0){
                    eventPokemonChanceBases['unown'] = currentArceusNum * 10;
                    eventPokemonChanceBoosters['unown'] = currentArceusNum * 2;
                    }
                }

            // (GEN X+) SHADOW POKEMON should never appear naturally on the field
            eventPokemonChanceBases['shadow-variant'] = 0;
            eventPokemonChanceBoosters['shadow-variant'] = 0;
            eventPokemonChanceBases['shining-variant'] = 0;
            eventPokemonChanceBoosters['shining-variant'] = 0;

            // SPECIAL BOX EFFECT : Repel all visitor pokemon if the appropriate flag is active
            if (thisZoneData.currentEffects['repelAllVisitors'] === true){
                eventPokemonChanceBases['*'] = 0;
                eventPokemonChanceBoosters['*'] = 0;
                }

            // SPECIAL BOX EFFECT : Repel basic visitor pokemon if the appropriate flag is active
            if (thisZoneData.currentEffects['repelBasicVisitors'] === true){
                eventPokemonChanceBases['basic'] = 0;
                eventPokemonChanceBoosters['basic'] = 0;
                }

            // SPECIAL BOX EFFECT : Repel special visitor pokemon if the appropriate flag is active
            if (thisZoneData.currentEffects['repelSpecialVisitors'] === true){
                eventPokemonChanceBases['special'] = 0;
                eventPokemonChanceBoosters['special'] = 0;
                }

            }

        //console.log(thisZoneData.date.year + ' / ' + thisZoneData.date.month + ' / ' + thisZoneData.date.day);
        //console.log('eventPokemonChanceBases = ', eventPokemonChanceBases);
        //console.log('eventPokemonChanceBoosters = ', eventPokemonChanceBoosters);
        //window.eventPokemonChanceBoosters = eventPokemonChanceBoosters;

        // SPECIAL BOX EFFECT : Ignore species appeal entirely if the appropriate flag is active
        var ignoreSpeciesAppeal = false;
        if (thisZoneData.currentEffects['ignoreSpeciesAppeal'] === true){ ignoreSpeciesAppeal = true; }

        // Loop through every pokemon and see what they like to eat, then check if that species is currently active
        var speciesAppealIndex = {};
        if (!ignoreSpeciesAppeal){
            for (var key = 0; key < PokemonSpeciesIndexTokens.length; key++){
                var pokeToken = PokemonSpeciesIndexTokens[key];
                var pokeInfo = PokemonSpeciesIndex[pokeToken];
                if (typeof pokeInfo.speciesAppeal !== 'undefined'){
                    for (var key2 = 0; key2 < pokeInfo.speciesAppeal.length; key2++){
                        var speciesToken = pokeInfo.speciesAppeal[key2];
                        if ((typeof thisZoneData.currentStats['species'][speciesToken] !== 'undefined'
                            && thisZoneData.currentStats['species'][speciesToken] > 0)
                            && (typeof thisZoneData.currentStats['species'][pokeToken] === 'undefined'
                            || thisZoneData.currentStats['species'][pokeToken] <= 3)){
                            //console.log('pokeToken = '+pokeToken+' | speciesToken = '+speciesToken+'');
                            //console.log('thisZoneData.currentStats[\'species\']['+speciesToken+'] = ', thisZoneData.currentStats['species'][speciesToken]);
                            //console.log('thisZoneData.currentStats[\'species\']['+pokeToken+'] = ', thisZoneData.currentStats['species'][pokeToken]);
                            speciesAppealIndex[pokeToken] = thisZoneData.currentStats['species'][speciesToken];
                            }
                        }
                    }
                }
            //console.log('speciesAppealIndex = ', speciesAppealIndex);
            }

        // Collect a reference to the current type stats
        var currentTypeStats = thisZoneData.currentStats['types'];
        var currentSpeciesStats = thisZoneData.currentStats['species'];
        var currentZoneFlags = thisZoneData.currentFlags;

        // Create an array of Pokemon that can appear as visitors
        var allowedVisitorTokens = [];
        allowedVisitorTokens = allowedVisitorTokens.concat(BasicPokemonSpeciesIndexTokens);
        if (!jQuery.isEmptyObject(speciesAppealIndex)){ allowedVisitorTokens = allowedVisitorTokens.concat(Object.keys(speciesAppealIndex)); }
        allowedVisitorTokens = Array.from(new Set(allowedVisitorTokens));
        //console.log('allowedVisitorTokens = ', allowedVisitorTokens);

        // Loop through basic pokemon and calculate chances of each
        var rankedZoneStats = Object.keys(currentTypeStats);
        var pokemonVisitorChances = [];
        var pokemonVisitorChanceTokens = [];
        for (var key = 0; key < allowedVisitorTokens.length; key++){
            var pokeToken = allowedVisitorTokens[key];
            var pokeInfo = PokemonSpeciesIndex[pokeToken];
            var pokeChance = 0;

            // Count the times this species has appear ever and right now
            var numAddedAlready = 0;
            var numAddedCurrently = 0;
            for (var key2 = 0; key2 < pokeInfo.relatedSpecies.length; key2++){
                var relToken = pokeInfo.relatedSpecies[key2];
                if (typeof thisZoneData.addedPokemonSpecies[relToken] !== 'undefined'){
                    numAddedAlready += thisZoneData.addedPokemonSpecies[relToken];
                    }
                if (typeof thisZoneData.currentStats['species'][relToken] !== 'undefined'){
                    numAddedCurrently += thisZoneData.currentStats['species'][relToken];
                    }
                }
            //var numAddedAlready = thisZoneData.addedPokemonSpecies[pokeToken];
            //var numAddedCurrently = thisZoneData.currentStats['species'][pokeToken];
            //console.log('relatedSpecies = ', pokeInfo.relatedSpecies);
            //console.log('numAddedAlready = ', numAddedAlready);
            //console.log('numAddedCurrently = ', numAddedCurrently);

            // Check to see if this is a basic or a special pokemon
            var pokeClass = typeof pokeInfo.visitorClass !== 'undefined' ? pokeInfo.visitorClass : pokeInfo.class;
            var pokeFormClass = typeof pokeInfo.formClass !== 'undefined' ? pokeInfo.formClass : '';
            var isBasicPokemon = pokeClass === '' ? true : false;
            var isSpecialPokemon = false;
            if (pokeClass !== ''
                && (pokeClass === 'legendary'
                    || pokeClass === 'mythical'
                    || pokeClass === 'ultra-beast'
                    || pokeClass === 'shiny-variant'
                    || pokeFormClass === 'shadow-variant'
                    || pokeFormClass === 'shining-variant')){
                    isSpecialPokemon = true;
                }

            // Check to see if this is a persistent visitor (which is to say it can show up any number of times)
            var persistentVisitor = false;
            if (typeof pokeInfo.persistentVisitor !== 'undefined'){ persistentVisitor = pokeInfo.persistentVisitor; }

            // Apply any event-specific species or class boosters to the chance rating
            if (typeof eventPokemonChanceBases['*'] !== 'undefined'){ pokeChance = eventPokemonChanceBases['*']; }
            else if (!isSpecialPokemon && typeof eventPokemonChanceBases['basic'] !== 'undefined'){ pokeChance = eventPokemonChanceBases['basic']; }
            else if (isSpecialPokemon && typeof eventPokemonChanceBases['special'] !== 'undefined'){ pokeChance = eventPokemonChanceBases['special']; }
            else if (typeof eventPokemonChanceBases[pokeToken] !== 'undefined'){ pokeChance = eventPokemonChanceBases[pokeToken]; }
            else if (typeof eventPokemonChanceBases[pokeFormClass] !== 'undefined'){ pokeChance = eventPokemonChanceBases[pokeFormClass]; }
            else if (typeof eventPokemonChanceBases[pokeClass] !== 'undefined'){ pokeChance = eventPokemonChanceBases[pokeClass]; }

            // Increase the chance of this pokemon appearing based on type appeal (give monotypes a boost)
            var pokeTypes = pokeInfo.types;
            if (pokeTypes.length === 1){
                if (rankedZoneStats[0] === pokeTypes[0]
                    && currentTypeStats[rankedZoneStats[0]] >= (currentTypeStats[rankedZoneStats[1]] * 1.5)){
                    if (currentTypeStats[pokeTypes[0]] !== 0){ pokeChance += currentTypeStats[pokeTypes[0]] * 1.25; }
                    } else {
                    if (currentTypeStats[pokeTypes[0]] !== 0){ pokeChance += currentTypeStats[pokeTypes[0]] * 0.75; }
                    }
                } else {
                if (currentTypeStats[pokeTypes[0]] !== 0){ pokeChance += currentTypeStats[pokeTypes[0]] * 0.5; }
                if (currentTypeStats[pokeTypes[1]] !== 0){ pokeChance += currentTypeStats[pokeTypes[1]] * 0.5; }
                }

            // Increase the chance of this pokemon appearing based on group appeal
            var groupVal = 0.03 / pokeInfo.eggGroups.length;
            for (var key2 = 0; key2 < pokeInfo.eggGroups.length; key2++){
                var groupToken = pokeInfo.eggGroups[key2];
                if (typeof thisZoneData.currentStats['eggGroups'][groupToken] !== 'undefined'
                    && thisZoneData.currentStats['eggGroups'][groupToken] !== 0){
                    pokeChance += thisZoneData.currentStats['eggGroups'][groupToken] * groupVal;
                    }
                }

            // Increase the chance of this pokemon appearing based on region appeal
            var regionVal = 0.02;
            if (typeof thisZoneData.currentStats['gameRegion'][pokeInfo.gameRegion] !== 'undefined'
                && thisZoneData.currentStats['gameRegion'][pokeInfo.gameRegion] !== 0){
                pokeChance += thisZoneData.currentStats['gameRegion'][pokeInfo.gameRegion] * regionVal;
                }

            // Increase the chance of this pokemon appearing based on colour appeal
            if (typeof pokeInfo.colors !== 'undefined'){
                var colourVal = 0.001;
                for (var key2 = 0; key2 < pokeInfo.colors.length; key2++){
                    var colourToken = pokeInfo.colors[key2];
                    if (typeof thisZoneData.currentStats['colors'][colourToken] !== 'undefined'
                        && thisZoneData.currentStats['colors'][colourToken] !== 0){
                        pokeChance += thisZoneData.currentStats['colors'][colourToken] * colourVal;
                        colourVal *= 0.5;
                        }
                    }
                }

            // Increase the chance of this pokemon appearing based on species appeal
            if (typeof speciesAppealIndex[pokeToken] !== 'undefined'){
                //console.log('speciesAppealIndex['+pokeToken+'] = ', speciesAppealIndex[pokeToken]);
                if (pokeChance < 0){ pokeChance = 0; }
                pokeChance += 2;
                pokeChance *= speciesAppealIndex[pokeToken];
                //console.log('pokeChance = ', pokeChance);
            }

            // Check to see if this visitor requires a certain other species to appear
            if (typeof pokeInfo.requiredVisitorSpecies !== 'undefined'){
                var reqToken = pokeInfo.requiredVisitorSpecies;
                if (typeof currentSpeciesStats[reqToken] === 'undefined'
                    || currentSpeciesStats[reqToken] < 1){
                    continue;
                    } else {
                    var reqValue = currentSpeciesStats[reqToken];
                    pokeChance += 100 * reqValue;
                    }
                }

            // Decrease the chance if there is already a colony of this species
            if (typeof thisZoneData.addedPokemonSpecies[pokeToken] !== 'undefined'){
                //console.log('numAddedAlready ', pokeToken, numAddedAlready);
                if (numAddedAlready === 1){ pokeChance *= 2; }
                else if (!persistentVisitor && numAddedAlready > 3) { pokeChance -= numAddedAlready; }
                //console.log('pokeChance ', pokeToken, pokeChance);
                if (!persistentVisitor
                    && (!isBasicPokemon
                        || numAddedCurrently > 3)){
                    pokeChance *= -1;
                    pokeChance -= numAddedAlready;
                    //console.log('pokeChance ', pokeToken, pokeChance);
                    }
                }

            // Apply any event-specific species or class boosters to the chance rating
            if (!isSpecialPokemon && typeof eventPokemonChanceBoosters['basic'] !== 'undefined'){ pokeChance = eventPokemonChanceBoosters['basic']; }
            if (isSpecialPokemon && typeof eventPokemonChanceBoosters['special'] !== 'undefined'){ pokeChance = eventPokemonChanceBoosters['special']; }
            if (typeof eventPokemonChanceBoosters[pokeFormClass] !== 'undefined'){ pokeChance *= eventPokemonChanceBoosters[pokeFormClass]; }
            if (typeof eventPokemonChanceBoosters[pokeClass] !== 'undefined'){ pokeChance *= eventPokemonChanceBoosters[pokeClass]; }
            if (typeof eventPokemonChanceBoosters[pokeToken] !== 'undefined'){ pokeChance *= eventPokemonChanceBoosters[pokeToken]; }
            if (typeof eventPokemonChanceBoosters['*'] !== 'undefined'){ pokeChance *= eventPokemonChanceBoosters['*']; }

            // If the chance was more than zero, push into the queue
            if ((pokeChance > 0 || isSpecialPokemon)
                && pokemonVisitorChanceTokens.indexOf(pokeToken) === -1){
                pokemonVisitorChanceTokens.push(pokeToken);
                pokemonVisitorChances.push({
                    token: pokeToken,
                    chance: pokeChance
                    });
                }

            }

        // If basic pokemon were queued, sort them by chance and pick most likely
        if (pokemonVisitorChances.length){
            pokemonVisitorChances.sort(function (pokeA, pokeB){
                if (pokeA.chance > pokeB.chance){ return -1; }
                else if (pokeA.chance < pokeB.chance){ return 1; }
                else { return 0; }
                });
            }
        //console.log('pokemonVisitorChances = ', pokemonVisitorChances);
        //console.log('pokemonVisitorChances(top20) = ', pokemonVisitorChances[0], pokemonVisitorChances[1], pokemonVisitorChances[2], pokemonVisitorChances.slice(0, 20));
        //console.log('pokemonVisitorChances(top100) = ', pokemonVisitorChances[0], pokemonVisitorChances[1], pokemonVisitorChances[2], pokemonVisitorChances.slice(0, 100));

        // Update the parent appeal index with the current sorted chances
        thisZoneData.currentStats['visitorAppeal'] = pokemonVisitorChances;
        //console.log('thisZoneData.currentStats[\'visitorAppeal\'] = ', thisZoneData.currentStats['visitorAppeal']);

    }

    // Define a function for triggering a zone visitor
    function triggerZoneVisitor(visitorKind){
        //console.log('triggerZoneVisitor(visitorKind)', visitorKind);
        if (typeof visitorKind !== 'string'){ visitorKind = 'auto'; }

        // Collect visitor appeal and sum all the chance values (return false if zero)
        var currentVisitorAppeal = thisZoneData.currentStats['visitorAppeal'];
        var currentVisitorAppealTotal = sumValuesByKey(currentVisitorAppeal, 'chance');
        //console.log('currentVisitorAppealTotal = ', currentVisitorAppealTotal, currentVisitorAppeal);
        if (!(currentVisitorAppealTotal > 0)){ return false; }

        // Collect the visitor token based on kind, either directly or whatever is next in line
        var visitorToken = false;
        if (visitorKind !== 'auto'
            && typeof PokemonSpeciesIndex[visitorKind] !== 'undefined'){
            visitorToken = visitorKind;
            } else if (visitorKind === 'auto'
            && currentVisitorAppeal.length > 0){
            var nextVisitor = thisZoneData.currentStats['visitorAppeal'][0];
            visitorToken = nextVisitor.token;
            }

        // If visitor token was not set, we should return early
        //console.log('visitorToken = ', visitorToken);
        if (visitorToken === false){ return false; }

        // Collect the visitor's info and then add it to the zone
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
        //console.log('pokemonGetBaseEvolution('+pokeToken+', '+includeBaby+', '+includeAlts+')');
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
                //console.log('\npokemonGetBaseEvolution('+pokeToken+', '+includeBaby+', '+includeAlts+')');
                //console.log('includeAlts && typeof indexInfo.altBaseEvolutions !== \'undefined\' = ', indexInfo.altBaseEvolutions);
                var queuedBaseEvolutions = [];
                var queuedBaseEvolutionsTokens = [];

                for (var i = 0; i < indexInfo.altBaseEvolutions.length; i++){
                    var baseEvolution = indexInfo.altBaseEvolutions[i];
                    var baseEvolutionInfo = PokemonSpeciesIndex[baseEvolution.species];
                    //console.log('baseEvolution['+ i +'] = ', baseEvolution);
                    //console.log('thisZoneData.currentStats[\'types\'][baseEvolution.value] = ', thisZoneData.currentStats['types'][baseEvolution.value]);
                    if ((baseEvolution.method === 'type-appeal'
                        && thisZoneData.currentStats['types'][baseEvolution.value] >= 20)
                        || (baseEvolution.method === 'type-surge'
                        && thisZoneData.currentStats['types'][baseEvolution.value] >= 40)){
                        queuedBaseEvolutionsTokens.push(baseEvolution.species);
                        queuedBaseEvolutions.push({
                            token: baseEvolution.species,
                            chance: (baseEvolution.method === 'type-appeal' ? 2 : 3) + thisZoneData.currentStats['types'][baseEvolution.value]
                            });
                        } else if ((baseEvolution.method === 'type-warning'
                        && thisZoneData.currentStats['types'][baseEvolution.value] <= -5)
                        || baseEvolution.method === 'type-crisis'
                        && thisZoneData.currentStats['types'][baseEvolution.value] <= -10){
                        queuedBaseEvolutionsTokens.push(baseEvolution.species);
                        queuedBaseEvolutions.push({
                            token: baseEvolution.species,
                            chance: (baseEvolution.method === 'type-warning' ? 2 : 3) + ((thisZoneData.currentStats['types'][baseEvolution.value] * -1)  * 2)
                            });
                        } else if (baseEvolution.method === 'chance'
                        && (Math.seededRandomChance() < baseEvolution.value)){
                        queuedBaseEvolutionsTokens.push(baseEvolution.species);
                        queuedBaseEvolutions.push({
                            token: baseEvolution.species,
                            chance: 2 + thisZoneData.currentStats['types'][indexInfo.types[0]]
                            });
                        } else if (baseEvolution.method === 'always'){
                        queuedBaseEvolutionsTokens.push(baseEvolution.species);
                        queuedBaseEvolutions.push({
                            token: baseEvolution.species,
                            chance: 100 + i
                            });
                        }
                    }
                if (queuedBaseEvolutionsTokens.indexOf(indexInfo.token) === -1){
                    queuedBaseEvolutionsTokens.push(indexInfo.token);
                    queuedBaseEvolutions.push({
                        token: indexInfo.token,
                        chance: 1 + thisZoneData.currentStats['types'][indexInfo.types[0]]
                        });
                    }
                if (queuedBaseEvolutions.length > 0){
                    //console.log('queuedBaseEvolutions for '+indexInfo.token+' = ', queuedBaseEvolutions);
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
            var indexNumA = PokemonSpeciesIndex[tokenA]['sortNumber'];
            var indexNumB = PokemonSpeciesIndex[tokenB]['sortNumber'];
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
        var relatedSpeciesTokens = PokemonSpeciesIndex[startToken]['relatedSpecies'];
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
            else if (indexInfo.token === 'ditto'
                || indexInfo.token === 'sortNumber'){
                influencePoints = 0;
                }
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
        var keys = [];
        for (var key in obj){ keys.push(key); }
        return keys.sort(function(a,b){
            var av = obj[a], bv = obj[b];
            if (av > bv){ return -1; }
            else if (av < bv){ return 1;}
            else if (a > b){ return -1; }
            else if (a < b){ return -1; }
            else { return 0; }
            });
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

    // Define function for calculating table cell co-ordinates (col, row) given a key
    function convertKeyToTableCell(cellKey, totalCols){
        var cellNum = cellKey + 1;
        var colNum = cellNum % totalCols;
        if (colNum === 0){ colNum = totalCols; }
        var rowNum = cellNum > totalCols ? Math.ceil(cellNum / totalCols) : 1;
        return {col: colNum, row: rowNum};
    }

    // Define an optimized function for padding a number/string
    function strPad(pad, str, padLeft){
        if (typeof str === 'undefined') return pad;
        if (padLeft) {
            return (pad + str).slice(-pad.length);
            } else {
            return (str + pad).substring(0, pad.length);
            }
    }

    // Define a function for parsing a starter pokemon seed (string to array)
    function parsePokeBoxSeed(seedString){
        //console.log('seedString = ', seedString);
        var rawString = seedString;
        //var seedData = rawString.match(/^`?`?\[\s?PBS\s+\|\s+(.*)?\s+\|\s+(.*)?\s?\]`?`?$/i);
        rawString = rawString.replace(' ♂', '-m', rawString).replace(' ♀', '-f', rawString);
        rawString = rawString.replace(/×\s/g, '×1 ', rawString);
        //console.log('rawString = ', rawString);
        var seedData = rawString.match(/^[`]{0,}\[?(?:PBS\s+\|\s+)?([^|]+)?(?:\s+\|\s+(?:v[0-9]+\.[0-9]+\.[0-9]+[a-z]?))?\]?[`]{0,}$/i);
        //var seedString = rawString.replace(/^[`]{0,}\[?(?:PBS\s+\|\s+)?([^|]+)?(?:\s+\|\s+(?:v[0-9]+\.[0-9]+\.[0-9]+[a-z]?))?\]?[`]{0,}$/i, '$1');
        //console.log('seedData = ', seedData);
        //console.log('seedString = ', seedString);
        if (seedData !== null){
            //console.log('seed string was okay!');
            var rawList = seedData[1].match(/\s+\/\s+/) ? seedData[1].split(/\s+\/\s+/) : [seedData[1]];
            //console.log('rawList = ', rawList);
            var pokeList = [];
            var genderTrans = {m:'male',f:'female',n:'none'};
            for (var i = 0; i < rawList.length; i++){
                var rawValue = rawList[i];
                if (!rawValue.match(/\s(?:×|x)?\s?([0-9mf×x\/]+)$/i)){ rawValue += ' ×1'; }
                var rawInfo = rawValue.match(/^(\S+)\s(?:×|x)?\s?([0-9mf×x\/]+)$/i);
                if (rawInfo === null){ rawInfo = rawValue.match(/^(\S+\s\S+)\s(?:×|x)?\s?([0-9mf×x\/]+)$/i); }
                //console.log('rawValue = ', typeof rawValue, rawValue);
                //console.log('rawInfo = ', typeof rawInfo, rawInfo);
                if (typeof rawInfo[1] !== 'undefined'){
                    var pokeName = rawInfo[1];
                    if (typeof globalNameToTokenIndex[pokeName] !== 'undefined'){
                        var pokeToken = globalNameToTokenIndex[pokeName];
                        } else {
                        var pokeToken = pokeName
                            .toLowerCase()
                            .replace(/é/g, 'e')
                            .replace(/\s+/g, '-')
                            .replace(/[^-a-z0-9]+/g, '')
                            ;
                        }
                    var pokeCounts = rawInfo[2].toLowerCase().replace(/(×|x)+/, '').split(/\//);
                    var pokeIndex = PokemonSpeciesIndex[pokeToken];
                    //console.log('\tpokeToken = ', pokeToken);
                    //console.log('\tpokeCounts = ', pokeCounts);
                    //console.log('\tpokeIndex = ', pokeIndex);
                    if (typeof pokeIndex === 'undefined'){ continue; }
                    for (var j = 0; j < pokeCounts.length; j++){
                        var raw = pokeCounts[j].match(/^([0-9]+)(f|m)?$/);
                        var count = parseInt(raw[1]);
                        var gender = genderTrans[raw[2] || 'n'];
                        //console.log('count / gender = ', count, gender);
                        if (pokeIndex.hasNoGender && gender !== 'none'){ gender = 'none'; }
                        else if (pokeIndex.hasOneGender && gender !== pokeIndex.speciesGender){ gender = 'none'; }
                        for (var k = 0; k < count; k++){ pokeList.push(gender !== 'none' ? [pokeToken, gender] : [pokeToken]); }
                        }
                    }
                }
            //console.log('pokeList ', pokeList);
            return pokeList;
            } else {
            //console.log('seed string was invalid');
            return false;
            }

        };

    // Update the math object with a seeded random functon
    Math.seed = 1;
    //console.log('\n Math.seed set to ', Math.seed);
    Math.seededRandom = function(min, max){
        min = min || 0;
        max = max || 1;
        Math.seed = (Math.seed * 9301 + 49297) % 233280;
        var rnd = Math.seed / 233280;
        return min + rnd * (max - min);
        }
    Math.seededRandomChance = function(){
        return Math.seededRandom(0, 100);
    }

    // Define a constant function for printing whole bumbers with commas
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Define a function for calculating the sum of all values in an object
    function sumValues( obj ) {
        var sum = 0;
        for( var el in obj ) {
            if( obj.hasOwnProperty( el )
                && typeof obj[el] === 'number') {
                sum += parseFloat( obj[el] );
                }
            }
        return sum;
    }

    // Define a function for calculating the sum of all values in an object
    function sumValuesByKey( obj, key ) {
        if (typeof obj === 'undefined'){ return false; }
        if (typeof key === 'undefined'){ return false; }
        var sum = 0;
        var pKeys = Object.keys(obj);
        for (var i = 0; i < pKeys.length; i++){
            var sObj = obj[i];
            if (typeof sObj[key] === 'number'){
                sum += sObj[key];
                }
            }
        return sum;
    }

    // Define a function for removing an array element by its value
    function arrayRemoveByValue(arr) {
        var what, a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax= arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
                }
            }
        return arr;
    }

    // Only implement if no native implementation is available
    if (typeof Array.isArray === 'undefined') {
      Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      }
    };

    // Filter a function for filtering an array to only unique values
    function arrayFilterUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    // Remove entries from an array given a list of values to remove
    function removeFromAray(arr){
        var what, a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax= arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
                }
            }
        return arr;
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

    /*
    * Simple Easing Functions in Javascript - see https://github.com/gre/bezier-easing
    * Easing Functions - inspired from http://gizma.com/easing/
    * only considering the t value for the range [0, 1] => [0, 1]
    */
    EasingFunctions = {
        // no easing, no acceleration
        linear: function (t) { return t },
        // accelerating from zero velocity
        easeInQuad: function (t) { return t*t },
        // decelerating to zero velocity
        easeOutQuad: function (t) { return t*(2-t) },
        // acceleration until halfway, then deceleration
        easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
        // accelerating from zero velocity
        easeInCubic: function (t) { return t*t*t },
        // decelerating to zero velocity
        easeOutCubic: function (t) { return (--t)*t*t+1 },
        // acceleration until halfway, then deceleration
        easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
        // accelerating from zero velocity
        easeInQuart: function (t) { return t*t*t*t },
        // decelerating to zero velocity
        easeOutQuart: function (t) { return 1-(--t)*t*t*t },
        // acceleration until halfway, then deceleration
        easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
        // accelerating from zero velocity
        easeInQuint: function (t) { return t*t*t*t*t },
        // decelerating to zero velocity
        easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
        // acceleration until halfway, then deceleration
        easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
        };

    // Define public functions for reading certain data
    window.PokeBoxAPI = {
        getPokeboxZoneData: function(){ return JSON.parse(JSON.stringify(thisZoneData)); },
        getPokemonSpeciesSeen: function(){ return JSON.parse(JSON.stringify(PokemonSpeciesSeen)); },
        getPokemonSpeciesIndex: function(){ return JSON.parse(JSON.stringify(PokemonSpeciesIndex)); },
        getPokemonSpeciesIndexTokens: function(){ return JSON.parse(JSON.stringify(PokemonSpeciesIndexTokens)); },
        getBasicPokemonSpeciesIndexTokens: function(){ return JSON.parse(JSON.stringify(BasicPokemonSpeciesIndexTokens)); },
        getPokemonSpeciesDisplayOrder: function(){ return JSON.parse(JSON.stringify(PokemonSpeciesDisplayOrder)); },
        getPokemonSpeciesDexOrder: function(){ return JSON.parse(JSON.stringify(PokemonSpeciesDexOrder)); },
        getPokemonTypesIndex: function(){ return JSON.parse(JSON.stringify(PokemonTypesIndex)); },
        getPokemonTypesIndexTokens: function(){ return JSON.parse(JSON.stringify(PokemonTypesIndexTokens)); },
        getNationalDexNumbers: function(){ return JSON.parse(JSON.stringify(nationalDexNumbers)); },
        getMissingDexNumbers: function(){ return JSON.parse(JSON.stringify(missingDexNumbers)); },
        getPokemonTotals: function(){ return {
            specialPokemon: totalSpecialPokemon,
            legendaryPokemon: totalLegendaryPokemon,
            mythicalPokemon: totalMythicalPokemon,
            ultraBeasts: totalUltraBeasts,
            miscBeasts: totalMiscBeasts,
            maxDexNumber: maxDexNumber,
            nationalDexNumbers: nationalDexNumbers.length,
            missingDexNumbers: missingDexNumbers.length
            }; }
        };

})();