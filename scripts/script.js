(function(){


    // GLOBAL MISC

    var appLastUpdated = '2018-03-29'; // first date
    var appVersionNumber = '0.1.0'; // first version
    var appDebugMode = false; // debug mode
    var appFreeMode = false; // free-mode (show all pokemon)
    var appMigrateMode = false; // migrate-mode (legacy save-data tool)
    var appBaseHref = '';

    var maxIndexKeyToLoad = 9;
    var maxIndexKeyAllowed = 9;
    var requiredIndexFiles = [];
    var loadedIndexFiles = [];

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
    var PokeboxPopupsSeen = [];
    var PokeboxRewards = [];
    var PokeboxLastStarterSeed = false;

    var totalBabyPokemon = 0;
    var totalSpecialPokemon = 0;
    var totalLegendaryPokemon = 0;
    var totalMythicalPokemon = 0;
    var totalUltraBeasts = 0;
    var totalFossilPokemon = 0;

    var ultraEnergySpecies = [];
    var ultraBeastSpecies = [];

    var dynamaxEnergySpecies = [];

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
        addedPokemonByEvoLineNumber: {},
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
        var minDeviceWidth = 534;
        var updateDeviceWidth = function(){
            thisDeviceWidth = $(window).width();
            thisDeviceHeight = $(window).height();
            var $mvp = $('#myViewport');
            // //console.log('$mvp = ', $mvp);
            //alert('thisDeviceWidth = ' + thisDeviceWidth + '\n ' + 'thisDeviceHeight = ' + thisDeviceHeight);
            if ($mvp.length && thisDeviceWidth <= minDeviceWidth) { $mvp.attr('content','width=534'); }
            else if ($mvp.length){ $mvp.attr('content','width=device-width, initial-scale=1'); }
            };
        $(window).resize(updateDeviceWidth);
        updateDeviceWidth();
        //console.log('thisDeviceWidth = ', thisDeviceWidth);

        // Check if we're being displayed in an iframe and adapt accordingly
        if (window.parent !== window.top){
            //console.log('We are in an iframe...');
            //console.log('thisDeviceWidth ', thisDeviceWidth, 'vs minDeviceWidth =', minDeviceWidth);
            if (thisDeviceWidth < minDeviceWidth){
                //console.log('current window is too small, provide fullscreen option');
                var forceZoomLevel = Math.round((thisDeviceWidth / minDeviceWidth) * 1000) / 1000;
                //console.log('set zoom to ', forceZoomLevel);
                $('<style type="text/css"> body { zoom: '+forceZoomLevel+'; -moz-transform: scale('+forceZoomLevel+'); -moz-transform-origin: 0 0; } </style>').appendTo('head');
                $('.panel .banner .logo').wrap('<a class="logo" href="'+appBaseHref+'" target="_blank"></a>');
                $('.panel .banner .logo .logo').removeClass('logo');
                }
            }

        // Populate the app details with global values if set
        if (typeof window.PokemonAppLastUpdated !== 'undefined'){ appLastUpdated = window.PokemonAppLastUpdated; }
        if (typeof window.PokemonAppVersionNumber !== 'undefined'){ appVersionNumber = window.PokemonAppVersionNumber; }
        if (typeof window.PokemonAppDebugMode !== 'undefined'){ appDebugMode = window.PokemonAppDebugMode; }
        if (typeof window.PokemonAppFreeMode !== 'undefined'){ appFreeMode = window.PokemonAppFreeMode; }
        if (typeof window.PokemonAppMigrateMode !== 'undefined'){ appMigrateMode = window.PokemonAppMigrateMode; }
        if (typeof window.PokemonAppBaseHref !== 'undefined'){ appBaseHref = window.PokemonAppBaseHref; }

        // Overwrite the default index load value if set
        if (typeof window.PokemonAllowedGenerationsMax !== 'undefined'){ maxIndexKeyToLoad = window.PokemonAllowedGenerationsMax; }
        // //console.log('maxIndexKeyToLoad = ', maxIndexKeyToLoad);

        // Use the loaded generation settings to decide script filenames to load
        requiredIndexFiles.push(''); // Always add base class file first
        for (var i = 1; i <= maxIndexKeyToLoad; i++){ requiredIndexFiles.push('gen'+(i < maxIndexKeyAllowed ? i : 'x')); }
        requiredIndexFiles.push('rewards'); // Always add the global rewards file
        // //console.log('requiredIndexFiles = ', requiredIndexFiles);
        // //console.log('loadedIndexFiles = ', loadedIndexFiles);

        // Check to ensure we have access to LOCAL STORAGE
        if (typeof window.localStorage !== 'undefined'){

            // Prevent certain local storage settings from being loaded in FREE MODE
            if (!appFreeMode){

                // //console.log('NOT in free mode, let us LOAD');

                // Load the TOTAL DAYS PASSED if it's been saved
                var savedPokeboxDaysPassed = window.localStorage.getItem('PokeboxDaysPassed');
                if (typeof savedPokeboxDaysPassed !== 'undefined'){ PokeboxDaysPassed = savedPokeboxDaysPassed ? parseInt(savedPokeboxDaysPassed) : 0; }
                // //console.log('savedPokeboxDaysPassed = ', savedPokeboxDaysPassed, typeof savedPokeboxDaysPassed);
                // //console.log('PokeboxDaysPassed = ', PokeboxDaysPassed, typeof PokeboxDaysPassed);

                // Load the list of earned POKEBOX REWARD TOKENS if they've been saved
                var storageName = ('PokeboxRewards');
                var savedPokeboxRewards = window.localStorage.getItem(storageName);
                if (typeof savedPokeboxRewards === 'string'){ PokeboxRewards = JSON.parse(savedPokeboxRewards); }
                // //console.log('storageName = ', storageName);
                // //console.log('savedPokeboxRewards = ', savedPokeboxRewards);
                // //console.log('PokeboxRewards = ', PokeboxRewards);

                // Load the list of earned POKEBOX POPUPS SEEN if they've been saved
                var storageName = ('PokeboxPopupsSeen');
                var savedPokeboxPopupsSeen = window.localStorage.getItem(storageName);
                if (typeof savedPokeboxPopupsSeen === 'string'){ PokeboxPopupsSeen = JSON.parse(savedPokeboxPopupsSeen); }
                // //console.log('storageName = ', storageName);
                // //console.log('savedPokeboxPopupsSeen = ', savedPokeboxPopupsSeen);
                // //console.log('PokeboxPopupsSeen = ', PokeboxPopupsSeen);

                // Load the LAST STARTER SEED if it's been saved
                var storageName = ('PokeboxLastStarterSeed');
                var savedPokeboxLastStarterSeed = window.localStorage.getItem(storageName);
                if (typeof savedPokeboxLastStarterSeed === 'string'){ PokeboxLastStarterSeed = savedPokeboxLastStarterSeed.trim(); }
                // //console.log('storageName = ', storageName);
                // //console.log('savedPokeboxLastStarterSeed = ', savedPokeboxLastStarterSeed);
                // //console.log('PokeboxLastStarterSeed = ', PokeboxLastStarterSeed);

                }

                // Load settings for any BUTTON filters
                var storageName = !appFreeMode ? ('CurrentButtonFilters' + (maxIndexKeyToLoad < maxIndexKeyAllowed ? 'Gen' + maxIndexKeyToLoad : '')) : 'FreeButtonFilters';
                var savedCurrentButtonFilters = window.localStorage.getItem(storageName);
                if (typeof savedCurrentButtonFilters === 'string'){ currentButtonFilters = JSON.parse(savedCurrentButtonFilters); }
                // //console.log('storageName = ', storageName);
                // //console.log('maxIndexKeyToLoad = ', maxIndexKeyToLoad);
                // //console.log('maxIndexKeyAllowed = ', maxIndexKeyAllowed);
                // //console.log('savedCurrentButtonFilters = ', savedCurrentButtonFilters);
                // //console.log('currentButtonFilters = ', currentButtonFilters);

                // Load settings for any POKEDEX filters
                var storageName = ('CurrentPokedexFilters' + (maxIndexKeyToLoad < maxIndexKeyAllowed ? 'Gen' + maxIndexKeyToLoad : ''));
                var savedCurrentPokedexFilters = window.localStorage.getItem(storageName);
                if (typeof savedCurrentPokedexFilters === 'string'){ currentPokedexFilters = JSON.parse(savedCurrentPokedexFilters); }
                // //console.log('storageName = ', storageName);
                // //console.log('maxIndexKeyToLoad = ', maxIndexKeyToLoad);
                // //console.log('maxIndexKeyAllowed = ', maxIndexKeyAllowed);
                // //console.log('savedCurrentPokedexFilters = ', savedCurrentPokedexFilters);
                // //console.log('currentPokedexFilters = ', currentPokedexFilters);

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
        $panelMidWrapper = $('.midwrap', $panelDiv);
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
                        window.localStorage.removeItem('PokeboxRewards');
                        window.localStorage.removeItem('PokeboxPopupsSeen');
                        window.location = window.location.href;
                        return true;
                        }
                    }
                }
            return false;
            });

        // Add a click event for the save-to-cloud button (w/ name & pass popup)
        $('a.save_to_cloud', $panelDiv).bind('click', function(e){
            e.preventDefault();
            //console.log('attempting to save data to cloud...');
            var eventID = 'system_save-to-cloud';
            var cloudFormMarkup = getCloudSaveFormMarkup();
            openPopupWindow({
                id: eventID,
                banner: 'system_save-to-cloud',
                buttons: {save_to_cloud: 'Save to Cloud', cancel: 'Cancel'},
                textbox: cloudFormMarkup
                });
            return false;
            });

        // Add a click event for the load-to-cloud button (w/ name & pass popup)
        $('a.load_from_cloud', $panelDiv).bind('click', function(e){
            e.preventDefault();
            //console.log('attempting to load data from cloud...');
            var eventID = 'system_load-from-cloud';
            var cloudFormMarkup = getCloudLoadFormMarkup();
            openPopupWindow({
                id: eventID,
                banner: 'system_load-from-cloud',
                buttons: {load_from_cloud: 'Load from Cloud', cancel: 'Cancel'},
                textbox: cloudFormMarkup
                });
            return false;
            });

    });

    // Define a function for starting the simulation and day
    function buildSimulator(){
        // //console.log('Building the simulation!');

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

        // Load the species seen records from storage
        loadSpeciesSeenFromStorage();

        // Immediately update the pokemon banner stats
        updatePokeBoxBannerStats();

        // Generate the zone details area markup
        generateZoneDetailsMarkup();

        // Generate the zone pokemon area markup
        generateZonePokemonMarkup();

        // Generate the lured visitor overview markup
        generateVisitorsOverviewMarkup();

        // Generate the pokemon list area overview markup
        generateSpeciesOverviewMarkup();

        // Generate the type appeal area overview markup
        generateTypesOverviewMarkup();

        // Generate type styles so we can use them on buttons and panels
        generateTypeStyles();

        // Generate type filter buttons so we can use them on buttons and panels
        generateTypeFilterButtons();

        // Generate visual slots for the zone pokemon to fit into later
        generateZonePokemonSlots();

        // Calculate pokedex totals and the current pokeball colour
        recalculatePokedexTotals();
        recalculatePokedexIconColour();
        recalculatePokedexScore();

        // Generate the actual pokemon buttons for the user to select from
        generatePokemonButtons();

        // Generate the pokedex listing for the user to view their progress
        generatePokemonPokedex();

        // Generate the click events for all the other panel buttons
        generateButtonPanelEvents();

        // Generate the popup window button and panel markup for later
        generatePopupWindowMarkup();

        // Update the overview with current details before starting
        updateOverview();

        // Unhide the save/load/delete buttons if appropriate to do so
        if (!appFreeMode && typeof window.localStorage !== 'undefined'){
            if (PokeboxDaysPassed > 0 && PokemonSpeciesSeen !== {}){ $('a.save_to_cloud', $panelDiv).removeClass('hidden'); }
            //else if (PokeboxDaysPassed === 0 || PokemonSpeciesSeen === {}){ $('a.load_from_cloud', $panelDiv).removeClass('hidden'); }
            $('a.load_from_cloud', $panelDiv).removeClass('hidden');
            $('a.delete_savedata', $panelDiv).removeClass('hidden');
            }

    }

    // Define a function for delegating button events for the edit
    var speedValues = {normal:1200,warp:100,fast:600,slow:2400};
    var stopConfirmTimeout = false;
    var $controlButtonPanel = false;
    var $controlButtons = false;
    var prevSpeedToken = false;
    var prevSpeedDuration = false;
    function generateButtonPanelEvents(){
        $pokePanelLoading.append('.'); // append loading dot

        // Define the click-event for the speed buttons
        var secretClicks = 0;
        $controlButtonPanel = $('.controls', $panelButtons);
        $controlButtons = $('.control[data-control]', $controlButtonPanel);
        $controlButtons.bind('click', function(e){
            e.preventDefault();

            // Collect the control and its token
            var $button = $(this);
            var control = $button.attr('data-control');

            // If this is the PAUSE button
            if (control === 'pause'){
                // //console.log('trigger a PAUSE action', typeof dayTimeoutID, dayTimeoutID);
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
                // //console.log('trigger a PLAY action');
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
                // //console.log('trigger a SPEED action', control);
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
        // //console.log('$filterDivs.length = ', $filterDivs.length);
        $filterDivs.each(function(){

            // Collect refs to this div and the options inside it
            var $filterDiv = $(this);
            var $filterParent = $filterDiv.closest('.filter-pokemon[data-target]');
            var filterKind = $filterDiv.attr('data-filter');
            var $filterOptions = $filterDiv.find('.option[data-'+ filterKind +']');
            var $activeFilter = $filterOptions.find('.option.active');
            // //console.log('filterKind = ', filterKind);
            // //console.log('$filterOptions.length = ', $filterOptions.length);
            var filterTarget = $filterParent.attr('data-target');
            // //console.log('filterTarget = ', filterTarget);
            if (allowedFilterTargets.indexOf(filterTarget) === -1){ return true; }
            if (filterTarget === 'buttons'){
                if (typeof currentButtonFilters[filterKind] === 'undefined'){
                    currentButtonFilters[filterKind] = 'all';
                    }
                // //console.log('currentButtonFilters['+ filterKind +'] = ', currentButtonFilters[filterKind]);
                } else if (filterTarget === 'pokedex'){
                if (typeof currentPokedexFilters[filterKind] === 'undefined'){
                    if (filterKind === 'mode'){ currentPokedexFilters[filterKind] = 'legacy'; }
                    else if (filterKind === 'gen'){ currentPokedexFilters[filterKind] = 1; }
                    else { currentPokedexFilters[filterKind] = 'all'; }
                    }
                // //console.log('currentPokedexFilters['+ filterKind +'] = ', currentPokedexFilters[filterKind]);
                }
            $filterOptions.bind('click', function(){

                // Collect refs for the option link and value, then update the current filter array
                var $optionLink = $(this);
                var optionValue = $optionLink.attr('data-'+ filterKind);
                if (filterKind === 'gen'
                    && optionValue !== 'all'
                    && optionValue !== 'x'
                    && optionValue !== 'r'){
                    optionValue = parseInt(optionValue);
                    }
                // //console.log('filterKind = ', filterKind);
                // //console.log('optionValue = ', optionValue);

                // Check if we're dealing with button or pokedex filters
                if (filterTarget === 'buttons'){

                    // Add and apply pokemon button filters now that they've been updated
                    currentButtonFilters[filterKind] = optionValue;
                    applyPokemonButtonFilters();
                    // //console.log('currentButtonFilters = ', currentButtonFilters);

                    // Update local storage with the the new filter values
                    if (typeof window.localStorage !== 'undefined'){
                        var storageName = !appFreeMode ? ('CurrentButtonFilters' + (maxIndexKeyToLoad < maxIndexKeyAllowed ? 'Gen' + maxIndexKeyToLoad : '')) : 'FreeButtonFilters';
                        var savedCurrentButtonFilters = JSON.stringify(currentButtonFilters);
                        window.localStorage.setItem(storageName, savedCurrentButtonFilters);
                        // //console.log('storageName = ', storageName);
                        // //console.log('maxIndexKeyToLoad = ', maxIndexKeyToLoad);
                        // //console.log('maxIndexKeyAllowed = ', maxIndexKeyAllowed);
                        // //console.log('savedCurrentButtonFilters = ', savedCurrentButtonFilters);
                        }

                    } else if (filterTarget === 'pokedex'){
                    // //console.log('filterTarget = ', filterTarget);

                    // Add and apply pokemon button filters now that they've been updated
                    currentPokedexFilters[filterKind] = optionValue;
                    applyPokemonPokedexFilters();
                    // //console.log('currentPokedexFilters = ', currentPokedexFilters);

                    // Update local storage with the the new filter values
                    if (typeof window.localStorage !== 'undefined'){
                        var storageName = ('CurrentPokedexFilters' + (maxIndexKeyToLoad < maxIndexKeyAllowed ? 'Gen' + maxIndexKeyToLoad : ''));
                        var savedCurrentPokedexFilters = JSON.stringify(currentPokedexFilters);
                        window.localStorage.setItem(storageName, savedCurrentPokedexFilters);
                        // //console.log('storageName = ', storageName);
                        // //console.log('maxIndexKeyToLoad = ', maxIndexKeyToLoad);
                        // //console.log('maxIndexKeyAllowed = ', maxIndexKeyAllowed);
                        // //console.log('savedCurrentPokedexFilters = ', savedCurrentPokedexFilters);
                        }

                    }

                });

            });

        // Define a click event for the starter seed entry button
        var $seedButton = $('.button.enter-seed', $pokePanelFilters);
        $seedButton.bind('click', function(e){
            e.preventDefault();
            if ($(this).hasClass('disabled') || $(this).hasClass('hidden')){ return false; }
            triggerStarterSeedPrompt();
            });

        // Define a click event for the repeat seed entry button
        var $repeatSeedButton = $('.button.repeat-seed', $pokePanelFilters);
        $repeatSeedButton.bind('click', function(e){
            e.preventDefault();
            if ($(this).hasClass('disabled') || $(this).hasClass('hidden')){ return false; }
            if (PokeboxLastStarterSeed === false || !PokeboxLastStarterSeed.length){ return false; }
            triggerStarterSeedPrompt(PokeboxLastStarterSeed);
            });

        // Define a click event for the add ditto quick button
        var $dittoButton = $('.button.add-ditto', $pokePanelFilters);
        $dittoButton.bind('click', function(e){
            e.preventDefault();
            if ($(this).hasClass('disabled') || $(this).hasClass('hidden')){ return false; }
            if (shiftIsHeld && (appFreeMode || typeof PokemonSpeciesSeen['super-ditto'] !== 'undefined')){ addStarterPokemonToZone('super-ditto'); }
            else { addStarterPokemonToZone('ditto'); }
            });

        // Define a click event for the add super ditto quick button
        var $superDittoButton = $('.button.add-super-ditto', $pokePanelFilters);
        $superDittoButton.bind('click', function(e){
            e.preventDefault();
            if ($(this).hasClass('disabled') || $(this).hasClass('hidden')){ return false; }
            addStarterPokemonToZone('super-ditto');
            });

        // Define a click event for the add arceus quick button
        var $arceusButton = $('.button.add-arceus', $pokePanelFilters);
        $arceusButton.bind('click', function(e){
            e.preventDefault();
            if ($(this).hasClass('disabled') || $(this).hasClass('hidden')){ return false; }
            $('button[data-action="add"][data-token="arceus"]', $pokePanelSelectButtons).trigger('click');
            });

        // Define a function to update the UI when the shift key is held
        var shiftIsHeld = false;
        var shiftTimeout = false;
        function shiftKeyStateUpdated(){
            var $dittoButton = $('.button.add-ditto', $pokePanelFilters);
            if (shiftIsHeld){
                $dittoButton.addClass('super');
                } else {
                $dittoButton.removeClass('super');
                }
        }

        // Check to see if shift is current being held down
        $(document).on('keyup keydown', function(e){
            if (e.shiftKey){
                shiftIsHeld = true;
                shiftKeyStateUpdated();
            } else {
                if (shiftTimeout !== false){ clearTimeout(shiftTimeout); }
                shiftTimeout = setTimeout(function(){
                    shiftIsHeld = false;
                    shiftKeyStateUpdated();
                    }, 200);
                }
            return true;
            });

        // Collect references to the various control buttons
        var $startButton = $('.start', $controlButtonPanel);
        var $playButton = $('.play', $controlButtonPanel);
        var $pauseButton = $('.pause', $controlButtonPanel);
        var $stopButton = $('.stop', $controlButtonPanel);
        var $slowButton = $('.slow', $controlButtonPanel);
        var $fastButton = $('.fast', $controlButtonPanel);
        var $warpButton = $('.warp', $controlButtonPanel);
        var $restartButton = $('.restart', $controlButtonPanel);
        var $newButton = $('.new', $controlButtonPanel);
        var $scrollToButton = $panelMainOverview.find('.details.zone .title');

        // Collect references to the various control containers
        var $selectPokesWrap = $('.select-pokemon', $panelButtons);
        var $filterGensWrap = $('.filter-pokemon[data-target="buttons"] .filter.generations', $panelButtons);
        var $filterTypesWrap = $('.filter-pokemon[data-target="buttons"] .filter.types', $panelButtons);

        // Create a focus panel array and index so we can loop later
        focusTokens.push('select-pokemon'); $focusPanels['select-pokemon'] = $selectPokesWrap;
        if ($filterGensWrap.length){ focusTokens.push('filter-generations'); $focusPanels['filter-generations'] = $filterGensWrap; }
        if ($filterTypesWrap.length){ focusTokens.push('filter-types'); $focusPanels['filter-types'] = $filterTypesWrap; }
        for (var i = 0; i < focusTokens.length; i++){ var tk = focusTokens[i]; $focusPanels[tk].addClass('focus-panel').attr('data-panel', tk); }

        // Make sure poke button sizes are refreshed on resize
        $(window).bind('resize', refreshPokeButtonSizes);

        // Prevent default keyboard events that conflict with app functionality
        var spbw = $selectPokesWrap.find('.buttonwrap').get();
        window.addEventListener('keydown', function(e) {
            // Turn off certain keyboard bindings globally
            if((e.keyCode == 32 // prevent spacebar auto-scroll
                || e.keyCode == 9 // prevent tab from link-jumping
                ) && e.target == document.body){
                e.preventDefault();
                }
            // Turn off other keyboard shortcuts based on context
            if((e.keyCode == 39 // prevent up from scrolling
                || e.keyCode == 40 // prevent down from scrolling
                ) && currentFocusPanel !== ''){
                e.preventDefault();
                }

            });

        // Define a function for checking which key was pressed
        var keyCodeMap = {
            65: 'a', 68: 'd', 71: 'g', 78: 'n', 80: 'p',
            82: 'r', 83: 's', 84: 't', 88: 'x', 90: 'z',
            27: 'esc', 32: 'space', 13: 'enter', 9: 'tab', 192: 'tild', 8: 'backSpace', 16: 'shift', 187: 'equals',
            37: 'leftArrow', 38: 'upArrow', 39: 'rightArrow', 40: 'downArrow', 219: 'leftBrace', 221: 'rightBrace'
            };

        // Bind the specific key presses to different button panel options
        $(document).keyup(function(e){

            // Immediately return if control key is pressed
            if (e.ctrlKey === true){ return true; }
            // //console.log('----');

            // Collect the name of the currently pressed key
            var keyName = typeof keyCodeMap[e.which] !== 'undefined' ? keyCodeMap[e.which] : false;
            // //console.log('key =', e.which, '=', keyName);

            // Check to see which phase of the simulation we're currently in
            var currentPhase = 'select-starters';
            if (!$('.popup.overlay').hasClass('hidden')){ currentPhase = 'popup-window'; }
            else if (simulationStarted){ currentPhase = 'simulation-running'; }
            else if (!simulationStarted && $('.select-pokemon', $panelButtons).hasClass('hidden')){ currentPhase = 'simulation-over'; }
            // //console.log('currentPhase', currentPhase, 'e.which', e.which);

            // Predefine validity flag so we know whether to cancel default later
            var validAction = false;

            // Check to see if the shift key is being held down right now
            var shiftKey = e.shiftKey === true ? true : false;

            // USE-ANYWHERE SHORTCUTS
            switch (keyName){
                // SCROLLTO shortcuts
                case 'tild':
                    {
                    validAction = true;
                    $scrollToButton.trigger('click');
                    break;
                    }
                }

            // CONTEXT-SENSITIVE SHORTCUTS (POPUP-WINDOW)
            if (currentPhase === 'popup-window'){
                // //console.log('POPUP KEY ', keyName); // continue/next
                switch (keyName){
                    // CONTEXT/NEXT BUTTON shortcuts
                    case 'space':
                    case 'enter':
                        {
                        var numButtons = $('.popup .button').length;
                        if (numButtons === 1){
                            validAction = true;
                            $('.popup .button:last-child').trigger('click');
                            }
                        break;
                        }
                    }
                }

            // CONTEXT-SENSITIVE SHORTCUTS (SELECT-STARTERS)
            if (currentPhase === 'select-starters'){
                // //console.log('SELECTION KEY ', keyName); // filter/ditto/seed/start

                // Check to see which button panel has been highlighted, if any
                var currentPanel = '';
                var $currentPanel = $('.focus-panel.hasfocus', $panelButtons);
                if ($currentPanel.length){ currentPanel = $currentPanel.attr('data-panel'); }
                // //console.log('currentPanel =', currentPanel);

                // Cotinue to process keyboard-specific shortcuts for this phase
                switch (keyName){
                    // START BUTTON shortcuts
                    case 'enter':
                        { validAction = true; $startButton.trigger('click'); break; }
                    // SEED BUTTON shortcuts
                    case 's':
                        { validAction = true; $seedButton.trigger('click'); break; }
                    // REPEAT SEED BUTTON shortcuts
                    case 'r':
                        { validAction = true; $repeatSeedButton.trigger('click'); break; }
                    // ARCEUS BUTTON shortcuts
                    case 'a':
                        { validAction = true; /*$arceusButton.trigger('click');*/ break; }
                    // DITTO BUTTON shortcuts
                    case 'd':
                        { validAction = true; $dittoButton.trigger('click'); break; }
                    // REMOVE LEFT shortcuts
                    case 'leftBrace':
                        { validAction = true; $('li[data-key="0"]', $pokeList).trigger('click'); break; }
                    // REMOVE RIGHT shortcuts
                    case 'rightBrace':
                        { validAction = true; $('li[data-key="'+(thisZoneData.currentPokemon.length - 1)+'"]', $pokeList).trigger('click'); break; }
                    // REMOVE LAST shortcuts
                    case 'backSpace':
                        { validAction = true; $('li[data-id]:last-child', $pokeList).trigger('click'); break; }
                    // PANEL FOCUS shortcuts
                    case 'tab':
                        {
                        validAction = true;
                        if (currentPanel === ''){ selectFocusPanel(focusTokens[0]); break; }
                        var panelKey = focusTokens.indexOf(currentPanel);
                        var newKey = panelKey + (!shiftKey ? 1 : -1);
                        var newToken = focusTokens[newKey];
                        if (typeof newToken === 'undefined'){ newToken = !shiftKey ? focusTokens[0] : focusTokens[focusTokens.length - 1]; }
                        selectFocusPanel(newToken);
                        break;
                        }
                    // CONFIRM shortcuts
                    case 'space':
                        {
                        validAction = true;
                        if (currentPanel !== 'select-pokemon'){ selectFocusPanel('select-pokemon'); }
                        else { $currentPanel.find('button.hasfocus').trigger('click'); }
                        break;
                        }
                    // NAVIGATE shortcuts
                    case 'leftArrow':
                    case 'rightArrow':
                    case 'upArrow':
                    case 'downArrow':
                        {
                        validAction = true;
                        var arrowDir = keyName.replace('Arrow', '');
                        // //console.log('--');
                        // //console.log('arrowDir = ', arrowDir);
                        if (currentPanel === 'select-pokemon'){
                            // //console.log('focus button to the', arrowDir);
                            var selectorClass = '.button:not(.disabled):not(.hidden)';
                            var activeClass = '.hasfocus';
                            } else {
                            // //console.log('shift selected filter', arrowDir);
                            var selectorClass = '.option:not(.disabled):not(.hidden)';
                            var activeClass = '.active';
                            }
                        var $visible = $currentPanel.find(selectorClass);
                        var bcount = $visible.length;
                        // //console.log('buttons =', bcount);
                        // //console.log('columns =', pokeGridSize.columns);
                        // //console.log('rows =', pokeGridSize.rows);
                        var $current = $currentPanel.find(selectorClass).filter(activeClass);
                        var currentKey = parseInt($current.attr('data-key'));
                        // //console.log('$current.key =', currentKey);
                        // //console.log('$current.token =', $current.attr('data-token'));
                        // Navigate pokemon button grid differently then horizotal filter buttons
                        if (currentPanel === 'select-pokemon'){
                            // pokemon navigation (left/right/up/down + loop at all sides)
                            if (arrowDir === 'right'){
                                var $new = $current.nextAll(selectorClass).first();
                                if (!$new.length){ $new = $currentPanel.find(selectorClass).first(); } // needs to change
                                } else if (arrowDir === 'left'){
                                var $new = $current.prevAll(selectorClass).first();
                                if (!$new.length){ $new = $currentPanel.find(selectorClass).last(); } // needs to change
                                } else if (arrowDir === 'down'){
                                var newKey = currentKey + pokeGridSize.columns;
                                if (newKey > (bcount - 1)){ newKey = currentKey % pokeGridSize.columns; } // done
                                var $new = $visible.filter('[data-key="'+newKey+'"]');
                                } else if (arrowDir === 'up'){
                                var newKey = currentKey - pokeGridSize.columns;
                                if (newKey < 0){
                                    newKey = bcount - (bcount % pokeGridSize.columns) + currentKey;
                                    if (newKey > (bcount - 1)){ newKey -= pokeGridSize.columns; }
                                    }
                                var $new = $visible.filter('[data-key="'+newKey+'"]');
                                }
                            } else {
                            // filter navigation (left/right + loop at start/end)
                            if (arrowDir === 'right'){
                                var $new = $current.nextAll(selectorClass).first();
                                if (!$new.length){ $new = $currentPanel.find(selectorClass).first(); }
                                } else if (arrowDir === 'left'){
                                var $new = $current.prevAll(selectorClass).first();
                                if (!$new.length){ $new = $currentPanel.find(selectorClass).last(); }
                                } else if (arrowDir === 'up'){
                                var $new = $currentPanel.find(selectorClass).last();
                                } else if (arrowDir === 'down'){
                                var $new = $currentPanel.find(selectorClass).first();
                                }
                            }
                        // Only proceed if a new button was found to focus/click
                        if ($new.length){
                            if (currentPanel === 'select-pokemon'){
                                // highlight pokemon buttons (rather than clicking)
                                $current.removeClass('hasfocus');
                                $new.addClass('hasfocus');
                                var newButtonKey = parseInt($new.attr('data-key'));
                                var newButtonRow = Math.floor(newButtonKey / pokeGridSize.columns) + 1;
                                var newScrollTop = ((newButtonRow - 1) * pokeButtonSizes.height);
                                $currentPanel.find('.buttonwrap').stop().animate({scrollTop: newScrollTop});
                                } else {
                                // manually click filter buttons
                                $new.trigger('click');
                                }
                            }
                        break;
                        }
                    }
                }

            // CONTEXT-SENSITIVE SHORTCUTS (SIMULATION RUNNING)
            if (currentPhase === 'simulation-running'){
                // //console.log('PROGRESS KEY ', keyName); // play/pause/stop/speed
                switch (keyName){
                    // PAUSE/PLAY BUTTON shortcuts
                    case 'space':
                    case 'enter':
                        {
                        validAction = true;
                        if (dayTimeoutSpeed !== 'pause'){ $pauseButton.trigger('click'); }
                        else { $playButton.trigger('click'); }
                        break;
                        }
                    // STOP BUTTON shortcuts
                    case 'esc':
                    case 'backSpace':
                        {
                        validAction = true;
                        $stopButton.trigger('click');
                        break;
                        }
                    // SLOWER BUTTON shortcuts
                    case 'leftArrow':
                    case 'leftBrace':
                        {
                        validAction = true;
                        // //console.log('slower than '+dayTimeoutSpeed+'!');
                        switch (dayTimeoutSpeed){
                            case 'warp': { $fastButton.trigger('click'); break; }
                            case 'fast': { $fastButton.trigger('click'); break; }
                            case 'normal': { $slowButton.trigger('click'); break; }
                            case 'slow': { break; }
                            }
                        break;
                        }
                    // FASTER BUTTON shortcuts
                    case 'rightArrow':
                    case 'rightBrace':
                        {
                        validAction = true;
                        // //console.log('faster than '+dayTimeoutSpeed+'!');
                        switch (dayTimeoutSpeed){
                            case 'slow': { $slowButton.trigger('click'); break; }
                            case 'normal': { $fastButton.trigger('click'); break; }
                            case 'fast': { $warpButton.trigger('click'); break; }
                            case 'warp': { break; }
                            }
                        break;
                        }
                    }
                }

            // CONTEXT-SENSITIVE SHORTCUTS (SIMULATION OVER)
            if (currentPhase === 'simulation-over'){
                // //console.log('PRE-SELECT KEY ', keyName); // restart/ew
                switch (keyName){
                    // RE-USE STARTERS BUTTON shortcuts
                    case 'leftArrow':
                    case 'equals':
                        { validAction = true; $restartButton.trigger('click'); break; }
                    // NEW STARTERS BUTTON shortcuts
                    case 'rightArrow':
                    case 'backSpace':
                    case 'enter':
                        { validAction = true; $newButton.trigger('click'); break; }
                    }
                }

            // If valid action was processed, prevent default
            if (validAction){
                e.preventDefault();
                return false;
                }

            });

    }

    // Define a function for generation popup window + button markup
    var $popupOverlay = false;
    var $popupWindow = false;
    var popupWindowQueue = [];
    function generatePopupWindowMarkup(){

        // Add the initial, empty containers for the popup elements
        $('body').append('<div class="popup overlay hidden"><div class="wrap">' +
                '<div class="popup window"><div class="wrap"></div></div>' +
            '</div></div>');

        // Update global refs to this newly generated markup
        $popupOverlay = $('body').find('.popup.overlay');
        $popupWindow = $('body').find('.popup.window');

        // Bind the overlay and the close button to the close action
        $popupOverlay.bind('click', function(e){
            e.preventDefault();
            //console.log('popup overlay clicked');
            //closePopupWindow();
            });

        // Prevent window clicks from propagating to the overlay
        $popupWindow.bind('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            //console.log('popup window clicked');
            });

        // Pre-bind an event for the continue button (closes the window)
        $popupWindow.on('click', '.button.continue', function(e){
            e.preventDefault();
            savePokeboxPopupsSeen();
            //console.log('continue button clicked');
            closePopupWindow(function(){
                if (popupWindowQueue.length > 0){
                    var panelConfig = popupWindowQueue.shift();
                    openPopupWindow(panelConfig);
                    }
                });
            });

        // Pre-bind and event for the next button (shows next message)
        $popupWindow.on('click', '.button.next', function(e){
            e.preventDefault();
            savePokeboxPopupsSeen();
            //console.log('next button clicked');
            if (popupWindowQueue.length > 0){
                var panelConfig = popupWindowQueue.shift();
                openPopupWindow(panelConfig);
                } else {
                closePopupWindow();
                }
            });

        // Pre-bind an event for the cancel button (closes the window)
        $popupWindow.on('click', '.button.cancel', function(e){
            e.preventDefault();
            //console.log('cancel button clicked');
            closePopupWindow();
            });

        // Pre-bind an event for the eye button (show/hide password)
        $popupWindow.on('click', '.field .eye', function(e){
            e.preventDefault();
            //console.log('eye button clicked');
            var $field = $(this).prev('input');
            if ($field.is('[type="password"]')){ $field.attr('type', 'text'); }
            else { $field.attr('type', 'password'); }
            });

        // Pre-bind an event for the save button (attempt to save to cloud)
        $popupWindow.on('click', '.button.save_to_cloud', function(e){
            //console.log('save button clicked');
            e.preventDefault();
            triggerSaveToCloud();
            });

        // Pre-bind an event for the load button (attempt to load from cloud)
        $popupWindow.on('click', '.button.load_from_cloud', function(e){
            //console.log('load button clicked');
            e.preventDefault();
            triggerLoadFromCloud();
            });

        // Pre-bind an event for any checkboxes (fixes propagation bugs from above)
        $popupWindow.on('click', '.autosave', function(e){
            e.preventDefault();
            var $checkbox = $(this).find('input[type="checkbox"]');
            //console.log('autosave checkbox clicked');
            if (!$checkbox.is(':checked')){ $checkbox.prop('checked', true); cloudAutoSave = true; }
            else { $checkbox.prop('checked', false); cloudAutoSave = false; }
            });

        // Now that we're done binding, check for any event triggers
        checkPopupEventTriggers();

    }

    // Define a function for queueing popup windows to be displayed
    function queuePopupWindow(panelConfig){
        // //console.log('queuePopupWindow(panelConfig)', panelConfig)
        popupWindowQueue.push(panelConfig);
    }

    // Define a function for queueing popup windows to be displayed
    var queuedPopupTimeout = false;
    function showQueuedPopups(){
        // //console.log('showQueuedPopups()', popupWindowQueue.length);
        if (queuedPopupTimeout !== false){ clearTimeout(queuedPopupTimeout); }
        queuedPopupTimeout = setTimeout(function(){
            if (popupWindowQueue.length > 0){
                var panelConfig = popupWindowQueue.shift();
                openPopupWindow(panelConfig);
                }
            }, 100);
    }

    // Define a function for opening content in a new popup window
    var simRunningBeforePopup = false;
    function openPopupWindow(panelConfig){
        // //console.log('openPopupWindow(panelConfig)', panelConfig);

        // Auto-generate certain config values if not explicitly set
        if (typeof panelConfig.id === 'undefined'){ return false; }
        if (typeof panelConfig.buttons === 'undefined'){ panelConfig.buttons = {continue: 'Let\'s Go!'}; }

        // If the simulator is currently running, pause it first
        if (simulationStarted && dayTimeoutSpeed !== 'pause'){
            $controlButtons.filter('.pause').trigger('click');
            simRunningBeforePopup = true;
            }

        // Loop through provided panel markup and add
        var newPanelWrapMarkup = '';
        var panelTokens = Object.keys(panelConfig);
        for (var i = 0; i < panelTokens.length; i++){
            // //console.log('-----');

            var panelToken = panelTokens[i];
            var panelContent = panelConfig[panelToken];
            var panelStyle = '';
            var panelMarkup = '';
            // //console.log('panelToken = ', typeof panelToken, panelToken);
            // //console.log('panelContent = ', typeof panelContent, panelContent);

            // Skip irrelevant config areas
            if (panelToken === 'id'){ continue; }

            // Process banner and button markup different then other panels
            if (panelToken === 'banner'
                && panelContent.match(/^[-_\.a-z0-9]+$/i)){

                var bannerFile = 'images/events/'+panelContent+'.jpg';
                panelStyle = 'background-image:url(\''+bannerFile+'\');';

                } else if (panelToken === 'buttons'
                    && typeof panelContent === 'object') {

                var buttonList = Object.keys(panelContent);
                for (var j = 0; j < buttonList.length; j++){
                    var buttonToken = buttonList[j];
                    var buttonText = panelContent[buttonToken];
                    panelMarkup += '<a class="button '+ buttonToken +'">'+ buttonText +'</a>';
                    }

                } else if (typeof panelContent === 'string'
                    && panelContent.length > 0){

                    panelMarkup += panelContent;

                }

            // //console.log('panelStyle = ', typeof panelStyle, panelStyle);
            // //console.log('panelMarkup = ', typeof panelMarkup, panelMarkup);

            // Put it all together into the popup window
            if (panelStyle.length || panelMarkup.length){
                newPanelWrapMarkup += '<div class="'+panelToken+'"' +
                    (panelStyle.length ? ' style="'+panelStyle+'"' : '') +
                    '>' + (panelMarkup.length ? panelMarkup : '') +
                    '</div>';
                }

            }

        // Assign the ID to the popup window in case of special styling
        $popupWindow.attr('data-id', panelConfig.id);

        // Empty the panel of existing markup and replace it
        var $panelWrap = $popupWindow.find('> .wrap');
        $panelWrap.empty().append(newPanelWrapMarkup);

        // Remove hidden class then fade-in the popup window
        if ($popupOverlay.hasClass('hidden')){
            $popupOverlay.css({opacity:0}).removeClass('hidden');
            $popupOverlay.animate({opacity:1}, 200, 'linear');
            }

        // Push this panel ID to the list so we don't show again
        if (PokeboxPopupsSeen.indexOf(panelConfig.id) === -1){
            PokeboxPopupsSeen.push(panelConfig.id);
            }

    }

    // Define a function for closing the current popup window
    function closePopupWindow(onComplete){

        // Collect temporary element refs
        var $banner = $popupWindow.find('.banner');
        var $textbox = $popupWindow.find('.textbox');
        var $buttons = $popupWindow.find('.buttons');

        // Fade-out the popup window then add the hidden class
        $popupOverlay.css({opacity:1});
        $popupOverlay.animate({opacity:0}, 200, 'linear', function(){
            $(this).addClass('hidden');
            $popupWindow.removeAttr('data-id');
            if (typeof onComplete === 'function'){ return onComplete(); }
            else { return true; }
            });

        // If the simulator is currently running, pause it first
        if (simulationStarted && simRunningBeforePopup){
            $controlButtons.filter('.play').trigger('click');
            simRunningBeforePopup = false;
            }

    }

    // Define a function for checking events that might require popups
    function checkPopupEventTriggers(){
        // //console.log('checkPopupEventTriggers()');

        // Check to see if FREE MODE or NORMAL MODE before walking through events
        if (appFreeMode){

            // FREE MODE EVENTS

            // .. no events in free mode

            } else if (appMigrateMode){

            // MIGRATE MODE EVENTS

            // .. no events in migrate mode

            } else {

            // NORMAL MODE EVENTS

            // Show the WELCOME TO POKEBOX message if the user's just starting
            var eventID = 'welcome';
            if (PokeboxDaysPassed === 0
                && PokeboxPopupsSeen.indexOf(eventID) === -1){
                queuePopupWindow({
                    id: eventID,
                    banner: 'welcome',
                    buttons: {next: 'Next'},
                    textbox: '<em>Oh, hi there! Welcome to <strong>PokéBox</strong>. You must be the new <br />' +
                        'Pokémon Biologist we hired. It\'s very nice to meet you!</em>'
                    });
                queuePopupWindow({
                    id: eventID,
                    banner: 'welcome',
                    buttons: {next: 'Next'},
                    textbox: '<em>My name is <strong>Lanette</strong> and I\'m the director of the PokéBox <br />' +
                        'project. I hope you were able to find the island without <br />' +
                        'too much trouble. It\'s pretty remote, isn\'t it?</em>  ^_^'
                    });
                queuePopupWindow({
                    id: eventID,
                    banner: 'welcome',
                    buttons: {next: 'Next'},
                    textbox: '<em>Our research here focuses on Pokémon habitats and <br />' +
                        'our goal is to record data on as many different species <br />' +
                        'of Pokémon as possible. That\'s where you come in!</em>'
                    });
                queuePopupWindow({
                    id: eventID,
                    banner: 'welcome',
                    buttons: {continue: 'Let\'s Go!'},
                    textbox: '<em>For your first attempt, let\'s use a combination of  <br />' +
                        'these five starter Pokémon. We\'ll start a small colony  <br />' +
                        'and see how many new species it attracts. No pressure!</em> <br />' +
                        '<img src="images/icons/pokemon/1.png" alt="Bulbasaur" /> ' +
                        '<img src="images/icons/pokemon/4.png" alt="Charmander" /> ' +
                        '<img src="images/icons/pokemon/7.png" alt="Squirtle" /> ' +
                        '<img src="images/icons/pokemon/25.png" alt="Pikachu" /> ' +
                        '<img src="images/icons/pokemon/133.png" alt="Eevee" /> '
                    });
                }

            // Show the UNLOCK DITTO message if it's been unlocked but not shown
            var eventID = 'unlocked-ditto';
            if (PokeboxRewards.indexOf('ditto') !== -1
                && (typeof PokemonSpeciesSeen['ditto'] === 'undefined' || PokemonSpeciesSeen['ditto'] === 0)
                && PokeboxPopupsSeen.indexOf(eventID) === -1){
                var seenCount = Object.keys(PokemonSpeciesSeen).length;
                queuePopupWindow({
                    id: eventID,
                    banner: 'congrats',
                    buttons: {next: 'Next'},
                    textbox: '<em>Great work! You\'ve already seen <strong>'+ seenCount +'</strong> different <br />' +
                        'species of Pokémon! Any new Pokémon you encounter <br />' +
                        'can be used as starters in future runs. Isn\'t that great?</em>'
                    });
                queuePopupWindow({
                    id: eventID,
                    banner: 'unlocked-ditto',
                    buttons: {next: 'Next'},
                    textbox: '<em>To make your job a bit easier, I\'m unlocking a new <br />' +
                        'species for you. Meet <strong>Ditto</strong>, the Mimic Pokémon! Ditto <br />' +
                        'can breed with almost any other Pokémon. Amazing!</em>'
                    });
                queuePopupWindow({
                    id: eventID,
                    banner: 'controls-tutorial-04',
                    buttons: {continue: 'Continue'},
                    textbox: '<em>Oh, oh, one more thing! Click the Pokédex button <br />' +
                        'at the bottom-left to review your progress so far. Okay, <br />' +
                        'that\'s it, you\'re on your own now! Good luck! ^_^</em> '
                    });
                }

            // Show the UNLOCK STARTERS message if they've been unlocked but not shown
            // //console.log('starterRewardIndex = ', starterRewardIndex);
            var starterRewardCount = Object.keys(starterRewardIndex).length;
            for (var i = 0; i < starterRewardCount; i++){
                var rewardInfo = starterRewardIndex[i];
                if (typeof rewardInfo === 'undefined'){ continue; }
                // //console.log('starterRewardIndex = ', starterRewardIndex);
                var genNumber = rewardInfo['gen'];
                var regionToken = rewardInfo['region'];
                var unlockCount = rewardInfo['count'];
                if (unlockCount === 0){ continue; }
                var eventID = 'unlocked-gen'+ genNumber +'-starters';
                if (PokeboxRewards.indexOf('gen'+ genNumber +'-starters') !== -1
                    && PokeboxPopupsSeen.indexOf(eventID) === -1){
                    queuePopupWindow({
                        id: eventID,
                        banner: 'unlocked-gen'+ genNumber +'-starters',
                        buttons: {continue: 'Continue'},
                        textbox: '<em>Congratulations! You\'ve seen at least <strong>'+ unlockCount +'</strong> different <br />' +
                            'species of Pokémon! As thanks for your hard work, the <br />' +
                            '<strong>'+ (regionToken.charAt(0).toUpperCase() + regionToken.slice(1)) +' Region</strong>\'s starter Pokémon have been unlocked.</em>'
                        });
                    }
                }

            // Show the UNLOCK SHADOW POKEMON message if they've been unlocked but not shown
            // //console.log('shadowRewardIndex = ', shadowRewardIndex);
            var shadowRewardCount = Object.keys(shadowRewardIndex).length;
            for (var i = 0; i < shadowRewardCount; i++){
                var rewardInfo = shadowRewardIndex[i];
                if (typeof rewardInfo === 'undefined'){ continue; }
                // //console.log('shadowRewardIndex['+ i  +'] = ', rewardInfo);
                var shadowToken = rewardInfo['species'];
                var unlockCount = rewardInfo['count'];
                var eventID = 'unlocked-'+ shadowToken;
                if (PokeboxRewards.indexOf(shadowToken) !== -1
                    && PokeboxPopupsSeen.indexOf(eventID) === -1){
                    queuePopupWindow({
                        id: eventID,
                        banner: 'unlocked-'+ shadowToken,
                        buttons: {continue: 'Continue'},
                        textbox: 'Wow! A <strong>'+ PokemonSpeciesIndex[shadowToken]['name'] +'</strong> appeared! <br />' +
                            '<em class="q s'+ (i + 1) +' shadow">'+ PokemonSpeciesIndex[shadowToken]['buttonQuote'] +'</em> <br />' +
                            'Maybe we can use it as a starter? ' +
                            (typeof rewardInfo['secret'] !== 'undefined' ? '<br /><span class="pass">'+ rewardInfo['secret'] +'</span> ' : '')
                        });
                    }
                }

            // Show the UNLOCK SHINING POKEMON message if they've been unlocked but not shown
            // //console.log('shiningRewardIndex = ', shiningRewardIndex);
            var shiningRewardCount = Object.keys(shiningRewardIndex).length;
            for (var i = 0; i < shiningRewardCount; i++){
                var rewardInfo = shiningRewardIndex[i];
                if (typeof rewardInfo === 'undefined'){ continue; }
                // //console.log('shiningRewardIndex['+ i  +'] = ', rewardInfo);
                var shiningToken = rewardInfo['species'];
                var unlockCount = rewardInfo['count'];
                var eventID = 'unlocked-'+ shiningToken;
                if (PokeboxRewards.indexOf(shiningToken) !== -1
                    && PokeboxPopupsSeen.indexOf(eventID) === -1){
                    queuePopupWindow({
                        id: eventID,
                        banner: 'unlocked-'+ shiningToken,
                        buttons: {continue: 'Continue'},
                        textbox: 'Amazing! A <strong>'+ PokemonSpeciesIndex[shiningToken]['name'] +'</strong> appeared! <br />' +
                            '<em class="q s'+ (i + 1) +' shining">'+ PokemonSpeciesIndex[shiningToken]['buttonQuote'] +'</em> <br />' +
                            'Try adding it to one of your boxes! ' +
                            (typeof rewardInfo['secret'] !== 'undefined' ? '<br /><span class="pass">'+ rewardInfo['secret'] +'</span> ' : '')
                        });
                    }
                }

            // Show the UNLOCK SPECIALS message if they've been unlocked but not shown
            var eventID = 'unlocked-special-starters';
            if (PokeboxRewards.indexOf('special-starters') !== -1
                && PokeboxPopupsSeen.indexOf(eventID) === -1){
                queuePopupWindow({
                    id: eventID,
                    banner: 'congrats-specials',
                    buttons: {continue: 'Continue'},
                        textbox: '<em>Congratulations! You\'ve encountered every <br />' +
                            'non-legendary Pokémon there is to see! As thanks, <br />' +
                            '<strong>all special Pokémon can now be used as starters</strong>!</em> '
                    });
                }

            // Show the UNLOCK ARCEUS message if it has been unlocked but not shown
            var eventID = 'unlocked-final-pokemon';
            if (PokeboxRewards.indexOf('arceus') !== -1
                && PokeboxPopupsSeen.indexOf(eventID) === -1){
                queuePopupWindow({
                    id: eventID,
                    banner: 'unlocked-final-pokemon',
                    buttons: {continue: 'Continue'},
                    textbox: 'Oh my! The final Pokémon, <strong>Arceus</strong>, has appeared!! <br />' +
                        'The Original One has recognized your efforts and decided <br />' +
                        'to share its powers with you.  Congratulations!! '
                    });
                }

            // Show the POKEDEX COMPLETE message if complete but not shown yet
            var eventID = 'global-pokedex-complete';
            if (PokeboxRewards.indexOf('pokedex-complete') !== -1
                && PokeboxPopupsSeen.indexOf(eventID) === -1){
                var seenCount = Object.keys(PokemonSpeciesSeen).length;
                var totalScore = currentPokedexTotals.currentPokedexScore;
                queuePopupWindow({
                    id: eventID,
                    banner: 'congrats-final-1'+(totalScore > 0 ? '' : 'b'),
                    buttons: {next: 'Next'},
                        textbox: '<em>Wow!! Congratulations! You\'ve encountered every <br />' +
                            'single Pokémon there is to see! Every last one! <br />' +
                            'Thank you <strong>so much</strong> for all your help! Seriously!</em> '
                    });
                queuePopupWindow({
                    id: eventID,
                    banner: 'congrats-final-2'+(totalScore > 0 ? '' : 'b'),
                    buttons: {next: 'Next'},
                        textbox: totalScore > 0
                            ? ('<em>Since we started our research, we\'ve seen <br />' +
                                'a total of <strong>'+ seenCount +' Pokémon </strong> over <strong>'+ numberWithCommas(PokeboxDaysPassed) +' Days</strong> and <br />' +
                                'raised <strong>'+ numberWithCommas(totalScore) +' <span>&#x20bd;</span></strong> in funding. That\'s amazing!!</em> <br /> ')
                            : ('<em>Since we started our research, we\'ve seen <br />' +
                                'a total of <strong>'+ seenCount +' Pokémon </strong> over <strong>'+ numberWithCommas(PokeboxDaysPassed) +' Days</strong> but <br />' +
                                (totalScore === 0 ? 'made' : 'lost')+' <strong>'+ numberWithCommas(totalScore * -1) +' <span>&#x20bd;</span></strong> in funding. That\'s... unfortunate.</em> <br /> ')
                    });
                queuePopupWindow({
                    id: eventID,
                    banner: 'congrats-final-3',
                    buttons: {continue: 'Until next time!'},
                        textbox: totalScore > 0
                            ? ('<em>I\'m not sure what else to say but to thank<br />' +
                                'you a hundred more times for all your hard work. <br />' +
                                'I sincerely hope our paths cross again in the future.</em> ')
                            : ('<em>Regardless, I wanted to say thank you for all<br />' +
                                'your hard work. It was a joy working with you and<br />' +
                                'I sincerely hope our paths cross again in the future.</em> ')
                    });
                }

            }

        // Attempt to show an queued popups
        showQueuedPopups();

        // Save a history of which popups have been seen
        savePokeboxPopupsSeen();

    }

    // Define a function for manually switching focus panels by token
    var focusTokens = [];
    var $focusPanels = {};
    var currentFocusPanel = '';
    function selectFocusPanel(panelToken){
        currentFocusPanel = panelToken;
        $('.hasfocus', $panelButtons).removeClass('hasfocus');
        if (panelToken === ''){ return; }
        var $panelDiv = $focusPanels[panelToken];
        $panelDiv.addClass('hasfocus');
        if (panelToken === 'select-pokemon'){
            var $panelWrap = $panelDiv.find('.buttonwrap');
            var $panelButton = $panelDiv.find('button:visible').first();
            if ($panelButton.length){
                $panelButton.addClass('hasfocus');
                $panelWrap.trigger('focus').stop().animate({scrollTop: ($panelButton.position().top - 6)});
                refreshPokeButtonSizes();
                }
            }
    }

    // Collect details about pokemon button sizes, margins, etc.
    var pokePanelSizes = {};
    var pokeButtonSizes = {};
    var pokeGridSize = {};
    function refreshPokeButtonSizes(){
        // //console.log('refreshPokeButtonSizes()');
        var $panel = $focusPanels['select-pokemon'];
        var $buttons = $panel.find('.button:not(.disabled):not(.hidden)');
        var $button = $buttons.first();
        pokePanelSizes.height = $panel.height();
        pokePanelSizes.width = $panel.width();
        pokeButtonSizes.height = $button.outerHeight(true);
        pokeButtonSizes.width = $button.outerWidth(true);
        pokeGridSize.columns = Math.floor(pokePanelSizes.width / pokeButtonSizes.width); // column count based on available width
        pokeGridSize.rows = Math.floor(pokePanelSizes.height / pokeButtonSizes.height); // max visible rows, not necessarily full
        // //console.log('$panel =', $panel);
        // //console.log('$button =', $button);
        // //console.log('pokePanelSizes =', pokePanelSizes);
        // //console.log('pokeButtonSizes =', pokeButtonSizes);
        // //console.log('pokeGridSize =', pokeGridSize);
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
    var hiddenPokemonTokens = [];
    function optimizeIndexes(){
        $pokePanelLoading.append('.'); // append loading dot
        if (PokemonSpeciesIndexTokens.length){

            // Loop through individual species and pre-generate certain attributes
            for (var key = 0; key < PokemonSpeciesIndexTokens.length; key++){

                // Collect the token and info from the index
                var token = PokemonSpeciesIndexTokens[key];
                var indexInfo = PokemonSpeciesIndex[token];

                // DEBUG CHECKS FOR REQUIRED DATA
                //if (typeof indexInfo.eggCycles === 'undefined'){ // //console.log('eggCycles are undefined for ', token, indexInfo); }

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

                // Define the plural formClasses array if not exists
                if (typeof indexInfo.formClasses === 'undefined'){
                    indexInfo.formClasses = [];
                    if (typeof indexInfo.formClass !== 'undefined'){ indexInfo.formClasses.push(indexInfo.formClass); }
                    if (typeof indexInfo.formClass2 !== 'undefined'){ indexInfo.formClasses.push(indexInfo.formClass2); }
                    if (typeof indexInfo.formClass3 !== 'undefined'){ indexInfo.formClasses.push(indexInfo.formClass3); }
                    }

                // If class or formClass are not set, create them as empty strings
                if (typeof indexInfo.class === 'undefined'){ indexInfo.class = ''; }
                if (typeof indexInfo.formClass === 'undefined'){ indexInfo.formClass = ''; }

                // If the pokemon's form is determined by specific color calculations, add to necessary list
                if ((typeof indexInfo.colorizedForms !== 'undefined' && indexInfo.colorizedForms === true)
                    && (typeof indexInfo.dynamicForms === 'undefined' || indexInfo.dynamicForms === false)
                    && colorizedFormsRequired.indexOf(indexInfo.token) === -1){
                    colorizedFormsRequired.push(indexInfo.token);
                    }

                // Calculate life, breed, and influence points now so we don't have to later
                if (typeof indexInfo.lifePoints === 'undefined'){ indexInfo.lifePoints = calculateLifePoints(indexInfo['baseStats']); }
                if (typeof indexInfo.breedPoints === 'undefined'){ indexInfo.breedPoints = calculateBreedPoints(indexInfo['baseStats']); }
                if (typeof indexInfo.influencePoints === 'undefined'){ indexInfo.influencePoints = calculateInfluencePoints(indexInfo); }

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
                indexInfo.evoLineNumber = 'e' + PokemonSpeciesIndex[indexInfo.baseEvolution].number;

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
                            || (indexInfo.baseGameGeneration === 'x' && relIndex.gameGeneration !== 'x')
                            || (indexInfo.baseGameGeneration === 'r' && relIndex.gameGeneration !== 'r')){
                            indexInfo.baseGameGeneration = relIndex.gameGeneration;
                            }
                        }
                    }

                // If this pokemon has ultra energy or is in ultra beast, add it to the parent array
                if (indexInfo.class === 'ultra-beast'){ ultraBeastSpecies.push(indexInfo.token); }
                if (indexInfo.class === 'ultra-beast'
                    || (typeof indexInfo.class2 !== 'undefined' && indexInfo.class2 === 'ultra-beast')
                    || indexInfo.hasUltraEnergy === true){
                    ultraEnergySpecies.push(indexInfo.token);
                    }

                // If this pokemon has dynamax energy, add it to the parent array
                if (indexInfo.class === 'gigantamax'
                    || (typeof indexInfo.class2 !== 'undefined' && indexInfo.class2 === 'gigantamax')
                    || indexInfo.hasDynamaxEnergy === true){
                    dynamaxEnergySpecies.push(indexInfo.token);
                    }

                // Push this pokemon's name into the translation index (so it's easier to parse seeds)
                globalNameToTokenIndex[indexInfo.name] = indexInfo.token;

                // If this pokemon has a ny special effects defined, add them to the index
                if (typeof indexInfo.speciesEffects !== 'undefined'
                    && indexInfo.speciesEffects.length > 0){
                    if (typeof globalSpeciesEffects[indexInfo.token] === 'undefined'){ globalSpeciesEffects[indexInfo.token] = []; }
                    for (var i = 0; i < indexInfo.speciesEffects.length; i++){ globalSpeciesEffects[indexInfo.token].push(indexInfo.speciesEffects[i]); }
                    }

                // Check to see if this is a baby pokemon
                indexInfo.isBabyPokemon = typeof indexInfo.isBabyPokemon !== 'undefined' && indexInfo.isBabyPokemon === true ? true : false;
                if (indexInfo.class === 'baby'
                    || indexInfo.class2 === 'baby'
                    || indexInfo.class3 === 'baby'){
                    indexInfo.isBabyPokemon = true;
                    }

                // Check to see if this is a special and / or hidden pokemon
                indexInfo.isSpecialPokemon = typeof indexInfo.isSpecialPokemon !== 'undefined' && indexInfo.isSpecialPokemon === true ? true : false;
                if (indexInfo.class === 'legendary'
                    || indexInfo.class === 'mythical'
                    || indexInfo.class === 'ultra-beast'){
                    indexInfo.isSpecialPokemon = true;
                    }

                // Check to see if this isn't a hidden pokemon, otherwise we can't add it to global counts
                indexInfo.isHiddenPokemon = typeof indexInfo.isHiddenPokemon !== 'undefined' && indexInfo.isHiddenPokemon === true ? true : false;
                if (!indexInfo.isHiddenPokemon){

                    // If this pokemon is in a special class, incremeent appropriate counters
                    if (indexInfo.class === 'legendary'){ totalLegendaryPokemon++; }
                    else if (indexInfo.class === 'mythical'){ totalMythicalPokemon++; }
                    else if (indexInfo.class === 'ultra-beast'){ totalUltraBeasts++; }
                    if (indexInfo.isBabyPokemon){ totalBabyPokemon++; }
                    if (indexInfo.isSpecialPokemon){ totalSpecialPokemon++; }

                    // If this pokemon is in a sub-special class, incremeent appropriate counters
                    if (typeof indexInfo.isFossilPokemon !== 'undefined' && indexInfo.isFossilPokemon === true){ totalFossilPokemon++; }

                    } else {

                    // Pokemon is hidden so let's add it to this hidden token list
                    hiddenPokemonTokens.push(indexInfo.token);
                    // //console.log('add ' + indexInfo.token + ' to hiddenPokemonTokens', hiddenPokemonTokens);

                    }


                }

            /*
            // //console.log('totalSpecialPokemon = ', totalSpecialPokemon);
            // //console.log('totalLegendaryPokemon = ', totalLegendaryPokemon);
            // //console.log('totalMythicalPokemon = ', totalMythicalPokemon);
            // //console.log('totalUltraBeasts = ', totalUltraBeasts);
            // //console.log('totalFossilPokemon = ', totalFossilPokemon);
            // //console.log('PokemonSpeciesIndexTokens.length = ', PokemonSpeciesIndexTokens.length);
            // //console.log('numRequiredToCompletePokedex = ', (PokemonSpeciesIndexTokens.length - totalSpecialPokemon));
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
                        || infoA['formClass'] === 'ancient-variant'
                        || infoA['formClass'] === 'box-variant'
                        || infoA['formClass'] === 'baby-evolution'){
                        regVariantA = true;
                        }
                    if (infoB['formClass'] === 'regional-variant'
                        || infoB['formClass'] === 'ancient-variant'
                        || infoB['formClass'] === 'box-variant'
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

            // //console.log('Tyrogue = ', PokemonSpeciesDexOrder.indexOf('tyrogue'), PokemonSpeciesIndex['tyrogue'].sortNumber, PokemonSpeciesDexOrder.indexOf('tyrogue') < PokemonSpeciesDexOrder.indexOf('hitmonlee'), PokemonSpeciesIndex['tyrogue'].sortNumber < PokemonSpeciesIndex['hitmonlee'].sortNumber);
            // //console.log('Hitmonlee = ', PokemonSpeciesDexOrder.indexOf('hitmonlee'), PokemonSpeciesIndex['hitmonlee'].sortNumber, PokemonSpeciesDexOrder.indexOf('hitmonlee') < PokemonSpeciesDexOrder.indexOf('hitmonchan'), PokemonSpeciesIndex['hitmonlee'].sortNumber < PokemonSpeciesIndex['hitmonchan'].sortNumber);
            // //console.log('Hitmonchan = ', PokemonSpeciesDexOrder.indexOf('hitmonchan'), PokemonSpeciesIndex['hitmonchan'].sortNumber, PokemonSpeciesDexOrder.indexOf('hitmonchan') < PokemonSpeciesDexOrder.indexOf('hitmontop'), PokemonSpeciesIndex['hitmonchan'].sortNumber < PokemonSpeciesIndex['hitmontop'].sortNumber);
            // //console.log('Hitmontop = ', PokemonSpeciesDexOrder.indexOf('hitmontop'), PokemonSpeciesIndex['hitmontop'].sortNumber, PokemonSpeciesDexOrder.indexOf('hitmontop') > PokemonSpeciesDexOrder.indexOf('hitmonchan'), PokemonSpeciesIndex['hitmontop'].sortNumber > PokemonSpeciesIndex['hitmonchan'].sortNumber);

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

                //var gmaxA = false;
                //var gmaxB = false;
                //if (infoA['class'] === 'gigantamax'){ gmaxA = true; }
                //if (infoB['class'] === 'gigantamax'){ gmaxB = true; }

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

                var genderVariantA = false;
                var genderVariantB = false;
                if (infoA['formClass'] === 'gender-variant' && typeof infoA['prevEvolution'] === 'undefined'){ genderVariantA = true; }
                if (infoB['formClass'] === 'gender-variant' && typeof infoB['prevEvolution'] === 'undefined'){ genderVariantB = true; }

                if (false){ return 0; }

                //else if (gmaxA && !gmaxB){ return -1; }
                //else if (!gmaxA && gmaxB){ return 1; }

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

                else if (genderVariantA && !genderVariantB){ return 1; }
                else if (!genderVariantA && genderVariantB){ return -1; }

                else if (genderVariantA && genderVariantB){

                    if (infoA['order'] > infoB['order']){ return -1; }
                    else if (infoA['order'] < infoB['order']){ return 1; }
                    else { return 0; }

                } else {

                    var invertVariant = false;
                    if (infoA['order'] > infoB['order']){ return -1 * (invertVariant ? -1 : 1); }
                    else if (infoA['order'] < infoB['order']){ return 1 * (invertVariant ? -1 : 1); }
                    else { return 0; }

                }

                return 0;

                });

            // //console.log('PokemonSpeciesDisplayOrder = ', PokemonSpeciesDisplayOrder);

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
    var firstSimulation = false;
    var simulationStarted = false;
    function startSimulation(){
        // //console.log('startSimulation()');

        // If user has no progress, this is first sim
        firstSimulation = PokeboxDaysPassed === 0 ? true : false;

        // Set the start flag to true
        simulationStarted = true;
        $('body').attr('data-running', 'true');

        // Clear the current focus panel
        selectFocusPanel('');

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
        nextPokemonSID = {};
        var starterCounts = {};
        var starterPokemon = [];
        var starterPokemonTokens = [];
        var starterSeed = 0;
        for (var key = 0; key < thisZoneData.currentPokemon.length; key++){
            var starterInfo = thisZoneData.currentPokemon[key];
            var starterIndexInfo = PokemonSpeciesIndex[starterInfo.token];
            starterPokemon.push([starterInfo.token, starterInfo.gender]);
            starterInfo.order = key;
            starterInfo.sid = getNextPokemonSID(starterIndexInfo.basicEvolution);
            starterSeed += PokemonSpeciesDexOrder.indexOf(starterInfo.token) + 1;
            var countToken = starterInfo.token+'/'+starterInfo.gender;
            if (typeof starterCounts[countToken] === 'undefined'){ starterCounts[countToken] = 0; }
            if (starterPokemonTokens.indexOf(starterInfo.token) === -1){ starterPokemonTokens.push(starterInfo.token); }
            starterCounts[countToken]++;
            }
        // //console.log('starterPokemon = ', starterPokemon);
        // //console.log('starterSeed = ', starterSeed);

        // Push this list of starters into the history array
        StarterPokemonHistory.push(starterPokemon);
        StarterPokemonSeed = starterSeed;
        // //console.log('StarterPokemonHistory = ', StarterPokemonHistory);
        // //console.log('StarterPokemonSeed = ', StarterPokemonSeed);

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
            starterName += ' ×'+countStrings.join('/');
            starterList.push(starterName);
            }
        PokeboxLastStarterSeed = starterList.join(' / ');
        var starterText = '``[PBS | '+ starterList.join(' / ').replace(/×/g, '&times;') +' | v'+ appVersionNumber +']``';
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

        // Update local storage with the the last starter seed if applicable
        if (!appFreeMode && typeof window.localStorage !== 'undefined'){
            var storageName = 'PokeboxLastStarterSeed';
            var savedPokeboxLastStarterSeed = PokeboxLastStarterSeed.trim();
            window.localStorage.setItem(storageName, savedPokeboxLastStarterSeed);
            // //console.log('storageName = ', storageName);
            }

    }

    // Define a function for ending the current simulation and doing cleanup
    function endCurrentSimulation(){
        // //console.log('endCurrentSimulation()');

        // Set the start flag to false
        simulationStarted = false;
        $('body').attr('data-running', 'false');

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
        // //console.log('\n Math.seed reset to ', Math.seed);

        // Update the overiew with cleared data
        updateOverview();

        // Recheck box rewards to see if there's anything new
        recheckPokeboxRewards();

        // Process any popups messages that have been generated
        checkPopupEventTriggers();

        // Unhide the save/load/delete buttons if appropriate to do so
        if (!appFreeMode && typeof window.localStorage !== 'undefined'){
            if (PokeboxDaysPassed > 0 && PokemonSpeciesSeen !== {}){ $('a.save_to_cloud', $panelDiv).removeClass('hidden'); }
            if (cloudAutoSave === true && lastCloudAutoSave !== PokeboxDaysPassed){ triggerSaveToCloud(); }
            }

    }

    // Define a function for restarting the current simulation (with same seeds)
    function restartCurrentSimulation(){
        // //console.log('restartCurrentSimulation()');

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
        // //console.log('prevStarters = ', prevStarters);
        if (typeof prevStarters !== 'undefined'){
            for (var key = 0; key < prevStarters.length; key++){
                var starterInfo = prevStarters[key];
                var starterToken = starterInfo[0];
                var starterGender = starterInfo[1];
                // //console.log('starterInfo = ', starterInfo);
                // //console.log('starterToken = ', starterInfo);
                // //console.log('starterGender = ', starterInfo);
                addPokemonToZone(starterToken, false, false, false, {gender:starterGender});
                }
            }

        // Recalculate zone stats then show the start button
        recalculateZoneStats();
        $('.controls .start', $panelButtons).addClass('ready');

    }

    // Define a function for resetting the simulator (so we can select different seeds)
    function resetSimulator(){
        // //console.log('resetSimulator()');

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
        $.getScript('data/indexes/types/types.min.js?v'+appVersionNumber, function(){
            loadedScripts++;
            $pokePanelLoading.append('.'); // append loading dot
            if (isReady()){ onReady(); }
            });
    }

    // Define a function for preloading the field index from JSON
    function preloadFieldIndex(onReady){
        if (typeof onReady !== 'function'){ onReady = function(){}; }
        requestedScripts++;
        $.getScript('data/indexes/fields/fields.min.js?v'+appVersionNumber, function(){
            loadedScripts++;
            $pokePanelLoading.append('.'); // append loading dot
            if (isReady()){ onReady(); }
            });
    }

    // Define a function for preloading the pokemon index from JSON
    function preloadPokemonIndex(onReady, indexKey){
        if (typeof onReady !== 'function'){ onReady = function(){}; }
        if (typeof indexKey === 'undefined'){ indexKey = 0; }
        if (requiredIndexFiles.length > loadedIndexFiles.length
            && typeof requiredIndexFiles[indexKey] !== 'undefined'){
            requestedScripts++;
            var fileToken = requiredIndexFiles[indexKey];
            // //console.log('loading requiredIndexFiles['+indexKey+'] = ', fileToken);
            if (fileToken === ''){ var fileName = 'species.min.js'; }
            else { var fileName = fileToken +'.min.js'; }
            filePath = 'data/indexes/species/'+ fileName +'?v'+ appVersionNumber;
            $.getScript(filePath, function(){
                loadedScripts++;
                loadedIndexFiles.push(fileToken);
                $pokePanelLoading.append('.'); // append loading dot
                // //console.log('loaded filePath = ', filePath);
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
        // //console.log('generateZonePokemonSlots()');
        $pokePanelLoading.append('.'); // append loading dot
        var $pokeSlots = $('.pokemon .list.slots', $panelMainOverview);
        // //console.log('$pokeSlots = ', $pokeSlots);
        // //console.log('thisZoneData.capacity = ', thisZoneData.capacity);
        var slotMarkup = '';
        for (var i = 0; i < thisZoneData.capacity; i++){
            // //console.log('append another slot');
            var liClass = 'slot';
            if (i < pokemonRequiredToStart){ liClass += ' waiting'; }
            slotMarkup += '<li class="'+liClass+'"></li>';
            }
        $pokeSlots.append(slotMarkup);
    }

    // Define a function for updating the banner pokedex and day counters
    function updatePokeBoxBannerStats(){

        // Update the banner counters with the total days and current species
        var pokedexCurrent = Object.keys(PokemonSpeciesSeen).length;
        var pokedexTotal = PokemonSpeciesIndexTokens.length - hiddenPokemonTokens.length;
        var pokedexPercent = pokedexTotal > 0 ? (Math.ceil((pokedexCurrent / pokedexTotal) * 1000) / 10) : 0;
        $('.timer .count .total', $panelBanner).html(numberWithCommas(PokeboxDaysPassed));
        $('.pokedex .count .current', $panelBanner).html(pokedexCurrent);
        $('.pokedex .count .total', $panelBanner).html(pokedexTotal);
        $('.pokedex .count .percent', $panelBanner).html(pokedexPercent+'%');
        // //console.log('pokedexCurrent = ', pokedexCurrent);
        // //console.log('PokemonSpeciesIndexTokens.length = ', PokemonSpeciesIndexTokens.length);
        // //console.log('hiddenPokemonTokens.length = ', hiddenPokemonTokens.length);
        // //console.log('pokedexTotal = ', pokedexTotal);
        // //console.log('pokedexPercent = ', pokedexPercent);

    }

    // Define a function for generating the zone details area
    function generateZoneDetailsMarkup(){

        // Build the zone details div in the main overview area
        var $zoneDetails = $('<div class="details zone"></div>');
        var $zoneDetailsList = $('<ul class="list hidden"></ul>');
        $zoneDetails.append('<strong class="title">Select Starter Pokémon</strong>');
        $zoneDetailsList.append('<li class="name"><strong>Biome</strong> <span class="data"></span></li>');
        $zoneDetailsList.append('<li class="day"><strong>Day</strong> <span class="data"></span></li>');
        $zoneDetailsList.append('<li class="date"><strong>Date</strong> <span class="data"></span></li>');
        $zoneDetailsList.append('<li class="capacity"><strong>Capacity</strong> <span class="data"></span></li>');
        $zoneDetailsList.appendTo($zoneDetails);
        $zoneDetails.prependTo($panelMainOverview);

    }

    // Define a function for generating the zone pokemon area
    function generateZonePokemonMarkup(){

        // Build the zone pokemon div in the main overview area
        var $zonePokemon = $('<div class="details pokemon"></div>');
        var $zonePokemonWrap = $('<div class="wrap"></div>');
        var $zonePokemonField = $('<div class="field"></div>');
        $zonePokemon.append('<strong class="title">Current Pokémon</strong>');
        $zonePokemonWrap.append('<ul class="list slots"></ul>');
        $zonePokemonWrap.append('<ul class="list pokemon"></ul>');
        $zonePokemonField.append('<span class="bg"></span>');
        $zonePokemonField.append('<span class="tx"></span>');
        $zonePokemonWrap.appendTo($zonePokemon);
        $zonePokemonField.appendTo($zonePokemon);
        $zonePokemon.appendTo($panelMainOverview);

        // Update reference variables to new divs
        $panelPokemonSpriteWrapper = $('.list.pokemon', $zonePokemon);

    }

    // Define a function for generating the lured visitor overview markup
    function generateVisitorsOverviewMarkup(){

        // Build the markup necessary for this overview area
        var $overviewDiv = $('<div class="overview sublist visitors hidden"></div>');
        var $overviewStats = $('<div class="details stats"></div>');
        var $overviewTitle = $('<div class="title"></div>');
        var $overviewWrap = $('<div class="wrap"></div>');
        var $overviewList = $('<ul class="list"></div>');
        $overviewTitle.append('<strong class="main">Lured Visitors</strong>');
        for (var i = 0; i < 5; i++){
            $overviewList.append('<li class="species"><div class="bubble"></div></li>');
            }
        $overviewTitle.appendTo($overviewStats);
        $overviewList.appendTo($overviewWrap);
        $overviewWrap.appendTo($overviewStats);
        $overviewStats.appendTo($overviewDiv);
        $overviewDiv.appendTo($panelMidWrapper);

        // Add the scrollbar to any wrappers that need it
        $overviewWrap.perfectScrollbar({suppressScrollX: true});

        // Update reference variables to new divs
        $panelVisitorsOverview = $('.overview.visitors', $panelDiv);
        $panelOverviewFloatLists = $('.overview.floatlist', $panelDiv);

    }


    // Define a function for generating the pokemon list area overview markup
    function generateSpeciesOverviewMarkup(){

        // Build the markup necessary for this overview area
        var $overviewDiv = $('<div class="overview floatlist species hidden"></div>');
        var $overviewStats = $('<div class="details stats"></div>');
        var $overviewTitle = $('<div class="title"></div>');
        var $overviewWrap = $('<div class="wrap"></div>');
        $overviewTitle.append('<strong class="main">Pokémon List</strong>');
        $overviewTitle.append('<div class="subs">'+
            '<strong class="sub alltime">All-Time <span class="count">0</span></strong>'+
            '<strong class="sub current">Current <span class="count">0</span></strong>'+
            '</div>');
        $overviewWrap.append('<ul class="list alltime"></ul>');
        $overviewWrap.append('<ul class="list current"></ul>');
        $overviewTitle.appendTo($overviewStats);
        $overviewWrap.appendTo($overviewStats);
        $overviewStats.appendTo($overviewDiv);
        $overviewDiv.appendTo($panelMidWrapper);

        // Add the scrollbar to any wrappers that need it
        $overviewWrap.perfectScrollbar({suppressScrollX: true});

        // Update reference variables to new divs
        $panelSpeciesOverview = $('.overview.species', $panelDiv);
        $panelOverviewFloatLists = $('.overview.floatlist', $panelDiv);

    }

    // Define a function for generating the type appeal area overview markup
    function generateTypesOverviewMarkup(){

        // Build the markup necessary for this overview area
        var $overviewDiv = $('<div class="overview floatlist types hidden">');
        var $overviewStats = $('<div class="details stats"></div>');
        var $overviewTitle = $('<div class="title"></div>');
        var $overviewSubs = $('<div class="subs"></div>');
        var $overviewWrap = $('<div class="wrap"></div>');

        $overviewTitle.append('<strong class="main">Type Appeal</strong>');
        if (maxIndexKeyToLoad >= 7){  // (GEN 7+) If we're in the right generation, show the Z-Power counter
            $overviewTitle.append('<div class="delta"><div>'+
                '<span class="icon"><i class="d"></i><i class="z"></i></span>'+
                '<span class="percent">0%</span>'+
                '</div></div>');
            }

        $overviewSubs.append('<strong class="sub attract">Attract</strong>');
        $overviewSubs.append('<strong class="sub repel">Repel</strong>');
        $overviewWrap.append('<ul class="list attract"></ul>');
        $overviewWrap.append('<ul class="list repel"></ul>');
        $overviewTitle.appendTo($overviewStats);
        $overviewSubs.appendTo($overviewTitle);
        $overviewWrap.appendTo($overviewStats);
        $overviewStats.appendTo($overviewDiv);
        $overviewDiv.appendTo($panelMidWrapper);

        // Add the scrollbar to any wrappers that need it
        $overviewWrap.perfectScrollbar({suppressScrollX: true});

        // Update reference variables to new divs
        $panelTypesOverview = $('.overview.types', $panelDiv);
        $panelOverviewFloatLists = $('.overview.floatlist', $panelDiv);

    }

    // Define a function for loading seen pokemon from storage (if applicable)
    function loadSpeciesSeenFromStorage(){
        if (appFreeMode){ return false; }
        if (typeof window.localStorage === 'undefined'){ return false; }
        var savedPokemonSpeciesSeen = window.localStorage.getItem('PokemonSpeciesSeen');
        // //console.log('savedPokemonSpeciesSeen = ', savedPokemonSpeciesSeen);
        if (typeof savedPokemonSpeciesSeen === 'string'){
            savedPokemonSpeciesSeen = JSON.parse(savedPokemonSpeciesSeen);
            // If legacy tokens exist, rewrite save data with new names
            // //console.log('legacyTokenMap = ', JSON.stringify(legacyTokenMap), jQuery.isEmptyObject(legacyTokenMap));
            if (!jQuery.isEmptyObject(legacyTokenMap)){
                var legacyTokens = Object.keys(legacyTokenMap);
                // //console.log('legacyTokens = ', legacyTokens);
                for (var i = 0; i < legacyTokens.length; i++){
                    var legacyToken = legacyTokens[i];
                    var newToken = legacyTokenMap[legacyToken];
                    if (typeof savedPokemonSpeciesSeen[legacyToken] !== 'undefined'
                        && typeof savedPokemonSpeciesSeen[newToken] === 'undefined'
                        && hiddenPokemonTokens.indexOf(newToken) === -1){
                        // //console.log('rewriting ', legacyToken, ' to ', newToken);
                        savedPokemonSpeciesSeen[newToken] = savedPokemonSpeciesSeen[legacyToken] + 0;
                        delete savedPokemonSpeciesSeen[legacyToken];
                        }
                    }
                }
            // Collect saved tokens now that they've been filtered/rewritten
            var savedTokens = Object.keys(savedPokemonSpeciesSeen);
            // //console.log('savedTokens = ', savedTokens);
            // //console.log('PokemonSpeciesIndexTokens = ', PokemonSpeciesIndexTokens);
            for (var i = 0; i < savedTokens.length; i++){
                var savedToken = savedTokens[i];
                var savedData = savedPokemonSpeciesSeen[savedToken];
                // //console.log('savedToken = ', savedToken);
                // //console.log('savedData = ', savedData);
                // //console.log('PokemonSpeciesIndexTokens.indexOf('+ savedToken +') = ', PokemonSpeciesIndexTokens.indexOf(savedToken));
                if (PokemonSpeciesIndexTokens.indexOf(savedToken) !== -1
                    && hiddenPokemonTokens.indexOf(savedToken) === -1){
                    PokemonSpeciesSeen[savedToken] = savedData;
                    }
                }
            }
        // //console.log('PokemonSpeciesSeen = ', PokemonSpeciesSeen);
    }

    // Define a function for generating type styles for display
    function generateTypeStyles(){
        // //console.log('generateTypeStyles()');
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

    // Define a function to generate the appropriate type filter buttons
    function generateTypeFilterButtons(){
        // //console.log('generateTypeFilterButtons()');

        // Generate type filter buttons based on loaded type indexes
        var typeFilterMarkup = '';
        typeFilterMarkup += '<a class="option" data-type="all">All</a>';
        for (var i = 0; i < PokemonTypesIndexTokens.length; i++){
            var token = PokemonTypesIndexTokens[i];
            var info = PokemonTypesIndex[token];
            if (info.hiddenType === true){ continue; }
            typeFilterMarkup += '<a class="option" data-type="'+token+'">';
                typeFilterMarkup += '<img src="images/icons/types/'+token+'.png" alt="'+info.name+'" />';
            typeFilterMarkup += '</a>';
            }
        // //console.log('typeFilterMarkup = ', typeFilterMarkup);
        var $filterTypesOptions = $('.filter-pokemon .filter.types .options', $panelButtons);
        $filterTypesOptions.empty().append(typeFilterMarkup);

    }

    // Define a function for generating a pokemon's icon image markup
    function getPokemonIcon(token, isEgg, info, returnProps, context){
        if (typeof isEgg !== 'boolean'){ isEgg = false; }
        if (typeof info === 'undefined'){ info = {}; }
        if (typeof returnProps !== 'boolean'){ returnProps = false; }
        if (typeof context === 'undefined'){ context = ''; }

        var indexInfo = PokemonSpeciesIndex[token];
        var iconImage = 'images/icons/';
        var iconClass = 'sprite ';
        var iconStyle = '';

        // Check if we should be using the big sprite here
        var useBigSprite;
        if (context === 'box'
            && typeof indexInfo['hasBigSprite'] !== 'undefined'
            && indexInfo['hasBigSprite'] === true){
            iconClass +=  'fullsize ';
            useBigSprite = true;
        } else {
            iconClass +=  'basesize ';
            useBigSprite = false;
        }

        var filter = '';
        if (typeof info.variantHueOffset !== 'undefined'){ filter += 'hue-rotate('+ info.variantHueOffset +'deg) '; }
        if (typeof info.variantSatOffset !== 'undefined'){ filter += 'saturate('+ info.variantSatOffset +'%) '; }
        iconStyle += filter.length ? '-webkit-filter: '+ filter +'; filter: '+ filter +'; ' : '';

        var markup = '';
        if (isEgg){

            iconClass += 'egg ';
            iconImage += 'eggs/'+indexInfo['types'][0]+'.png';
            //markup += '<img class="'+ iconClass +'"'+ iconStyle +' src="'+ iconImage +'" data-token="'+ token +'" />';
            markup += '<span class="'+ iconClass +'" style="background-image: url('+ iconImage +'); '+ iconStyle +'" data-token="'+ token +'"></span>';
            if (typeof indexInfo['types'][1] === 'string'){
                iconImage = 'images/icons/eggs/'+indexInfo['types'][1]+'2.png';
                //markup += '<img class="'+ iconClass +' overlay"'+ iconStyle +' src="'+ iconImage +'" data-token="'+ token +'" />';
                markup += '<span class="'+ iconClass +' overlay" style="background-image: url('+ iconImage +'); '+ iconStyle +'" data-token="'+ token +'"></span>';
                }

            } else {

            iconClass += 'pkmn ';
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

            // If we're supposed to use the big sprite, tweak the filename now
            if (useBigSprite === true){ iconImage = iconImage.replace(/\.png$/, '.fullsize.png'); }

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

            // //console.log('this '+pokeInfo.token+' has hatched, show it (cycles:'+pokeInfo.eggCycles+')');
            var pokeIcon =  '<span class="swrap"><i>' + getPokemonIcon(pokeInfo.token, false, pokeInfo, false, 'box') + '</i></span>';
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

            // //console.log('this '+pokeInfo.token+' has not hatched, show it (cycles:'+pokeInfo.eggCycles+')');
            var pokeIcon =  '<span class="swrap"><i>' + getPokemonIcon(pokeInfo.token, true, pokeInfo, false, 'box') + '</i></span>';
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
        // //console.log('recalculatePokedexTotals()');

        // Define variables for counting certain things
        var pokedexTotals = {
            totalPokemon: 0,
            totalNonHiddenPokemon: 0,
            totalPokemonEncountered: 0,
            totalCommonPokemon: 0,
            totalCommonPokemonEncountered: 0,
            totalLegendaryPokemon: 0,
            totalLegendaryPokemonEncountered: 0,
            totalMythicalPokemon: 0,
            totalMythicalPokemonEncountered: 0,
            totalUltraBeasts: 0,
            totalUltraBeastsEncountered: 0,
            totalFossilPokemon: 0,
            totalFossilPokemonEncountered: 0,
            totalsByGeneration: {},
            currentPokedexScore: 0
            };

        // Loop through all pokemon and increment applicable totals
        for (var i = 0; i < PokemonSpeciesIndexTokens.length; i++){

            // Collect data for this pokemon from the index
            var pokeToken = PokemonSpeciesIndexTokens[i];
            var pokeIndex = PokemonSpeciesIndex[pokeToken];
            // //console.log('pokeIndex = ', pokeToken, pokeIndex);

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
                pokedexTotals.totalUltraBeasts++;
                if (pokemonEncountered){ pokedexTotals.totalUltraBeastsEncountered++; }
                }

            // Incremenet any totals specific to their sub-kind/sub-class
            if (typeof pokeIndex.isFossilPokemon !== 'undefined' && pokeIndex.isFossilPokemon === true){
                pokedexTotals.totalFossilPokemon++;
                if (pokemonEncountered){ pokedexTotals.totalFossilPokemonEncountered++; }
                }

            // And now increment the generation totals
            var pokemonGeneration = typeof pokeIndex.dexGeneration !== 'undefined' ? pokeIndex.dexGeneration : pokeIndex.gameGeneration;
            if (typeof pokedexTotals.totalsByGeneration[pokemonGeneration] === 'undefined'){ pokedexTotals.totalsByGeneration[pokemonGeneration] = {totalPokemon: 0, totalPokemonEncountered: 0}; }
            pokedexTotals.totalsByGeneration[pokemonGeneration].totalPokemon++;
            if (pokemonEncountered){ pokedexTotals.totalsByGeneration[pokemonGeneration].totalPokemonEncountered++; }

            }

        // Update the overall counter minus hidden pokemon
        pokedexTotals.totalNonHiddenPokemon = pokedexTotals.totalPokemon - hiddenPokemonTokens.length;

        // Update the parent array with calculated pokedex totals
        // //console.log('pokedexTotals = ', pokedexTotals);
        currentPokedexTotals = pokedexTotals;

    }

    // Define a function for checking if we've unlocked special pokemon
    function hasUnlockedSpecialPokemon(){
        // //console.log('\nhasUnlockedSpecialPokemon()');
        // Check to see if we can allow special pokemon to be selected yet
        var allowSpecialPokemon = false;
        var requiredEncounters = currentPokedexTotals.totalCommonPokemon;
        // //console.log('requiredEncounters = ', requiredEncounters);
        // //console.log('totalCommonPokemonEncountered = ', currentPokedexTotals.totalCommonPokemonEncountered);
        if (currentPokedexTotals.totalCommonPokemonEncountered >= requiredEncounters){ allowSpecialPokemon = true; }
        return allowSpecialPokemon;
    }

    // Define a function for checking if we've unlocked the final pokemon
    function hasUnlockedFinalPokemon(){
        // //console.log('\nhasUnlockedFinalPokemon()');
        var requiredEncounters = currentPokedexTotals.totalNonHiddenPokemon - 1;
        // //console.log('requiredEncounters = ', requiredEncounters);
        // //console.log('totalPokemonEncountered = ', currentPokedexTotals.totalPokemonEncountered);
        if (currentPokedexTotals.totalPokemonEncountered >= requiredEncounters){ return true; }
        return false;
    }

    // Define a function for checking if we've unlocked all pokemon
    function hasUnlockedAllPokemon(){
        if (currentPokedexTotals.totalPokemonEncountered >= currentPokedexTotals.totalNonHiddenPokemon){ return true; }
        return false;
    }

    // Define a function for calculating our completion percent
    function calculatePokedexCompletion(){
        var completePercent = Math.ceil((currentPokedexTotals.totalPokemonEncountered / currentPokedexTotals.totalNonHiddenPokemon) * 1000) / 10;
        // //console.log('Math.ceil(('+ currentPokedexTotals.totalPokemonEncountered +' / '+ currentPokedexTotals.totalNonHiddenPokemon +') * 1000) / 10 = ', completePercent);
        return completePercent;
    }

    // Define a function for generating the simulator buttons for each Pokemon
    var freeStarterPokemon = [];
    function generatePokemonButtons(){

        // //console.log('generatePokemonButtons()');
        $pokePanelLoading.append('.'); // append loading dot

        // Count the number of species seen so far
        var seenSpeciesTokens = Object.keys(PokemonSpeciesSeen);

        // Define the pokemon allowed regardless of seen status, (starters for each gen)
        freeStarterPokemon = [];

        // Starters rewards are not necessary if we're in free mode
        if (!appFreeMode){

            // Re-check if box rewards before we process buttons
            recheckPokeboxRewards();

            // Check to see if we can allow special pokemon to be selected yet
            var allowSpecialPokemon = PokeboxRewards.indexOf('special-starters') !== -1 ? true : false;

            // Unlock any starters that have been unlocked via dex completion counts
            var starterRewardCount = Object.keys(starterRewardIndex).length;
            for (var i = 0; i < starterRewardCount; i++){
                var rewardInfo = starterRewardIndex[i];
                if (typeof rewardInfo === 'undefined'){ continue; }
                // //console.log('rewardInfo = ', i, rewardInfo);
                var startTokens = rewardInfo['species'];
                if (PokeboxRewards.indexOf('gen'+ rewardInfo['gen'] +'-starters') !== -1){
                    for (var j = 0; j < startTokens.length; j++){ freeStarterPokemon.push(startTokens[j]); }
                    }
                }

            // Unlock any shadow pokemon that have been unlocked via overall days passed
            var shadowRewardCount = Object.keys(shadowRewardIndex).length;
            for (var i = 0; i < shadowRewardCount; i++){
                var rewardInfo = shadowRewardIndex[i];
                if (typeof rewardInfo === 'undefined'){ continue; }
                // //console.log('rewardInfo = ', i, rewardInfo);
                if (PokeboxRewards.indexOf(rewardInfo['species']) !== -1){
                    freeStarterPokemon.push(rewardInfo['species']);
                    }
                }

            // Unlock any shining pokemon that have been unlocked via overall days passed
            var shiningRewardCount = Object.keys(shiningRewardIndex).length;
            for (var i = 0; i < shiningRewardCount; i++){
                var rewardInfo = shiningRewardIndex[i];
                if (typeof rewardInfo === 'undefined'){ continue; }
                // //console.log('rewardInfo = ', i, rewardInfo);
                if (PokeboxRewards.indexOf(rewardInfo['species']) !== -1){
                    freeStarterPokemon.push(rewardInfo['species']);
                    }
                }

            // Unlock Ditto if the user has seen at least one other species
            if (PokeboxRewards.indexOf('ditto') !== -1){ freeStarterPokemon.push('ditto'); }

            // Unlock the final pokemon ARCEUS if the user has encountered every other species
            if (PokeboxRewards.indexOf('arceus') !== -1){ freeStarterPokemon.push('arceus'); }

            // //console.log('freeStarterPokemon = ', freeStarterPokemon);

            }

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
                // //console.log('pokemonToken = ', pokemonToken);
                var pokemonData = PokemonSpeciesIndex[pokemonToken];
                var pokemonTypes = pokemonData.types;
                // //console.log('pokemonTypes = ', pokemonTypes);

                // Check to see if this pokemon is special in some way
                var pokemonIsSpecial = false;
                if (pokemonData['class'] === 'legendary'
                    || pokemonData['class'] === 'mythical'
                    || pokemonData['class'] === 'ultra-beast'
                    || pokemonData['class'] === 'gigantamax'){
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
                    && pokemonData.formClass !== 'regional-variant'
                    && pokemonData.formClass !== 'ancient-variant'
                    && pokemonData.formClass !== 'box-variant'){
                    if (lastGeneration !== false){ pokePanelMarkup += '<hr class="breaker" />'; }
                    lastGeneration = thisGeneration;
                }


                var customData = {};
                if (typeof pokemonData.formToken === 'string' && pokemonData.formToken.length > 0){
                    customData.formToken = pokemonData.formToken; // Preset form
                    } else if ((pokemonData.randomizeForms === true
                        || pokemonData.seasonalForms === true
                        || pokemonData.altMonthlyForms === true
                        || pokemonData.colorizedForms === true
                        || pokemonData.fieldForms === true)
                            && typeof pokemonData.baseForm !== 'undefined'
                            && pokemonData.baseForm.length > 0){
                    customData.formToken = typeof pokemonData.dexBaseForm !== 'undefined' ? pokemonData.dexBaseForm : pokemonData.baseForm; // Random/seasonal/color form with base
                    }

                // Collect the pokemon's image icon
                var pokemonIcon = getPokemonIcon(pokemonToken, false, customData, false, 'buttons');

                // Generate the pokemon's name for the hover
                var pokemonName = pokemonData.name;

                // Collect the pokemon's gen in terms of buttons
                var pokemonGen = typeof pokemonData.buttonGeneration !== 'undefined' ? pokemonData.buttonGeneration : pokemonData.gameGeneration;
                var pokemonBaseGen = pokemonData.baseGameGeneration;
                var pokeLegNum = (pokemonGen === 'x' || pokemonGen === 'r') && typeof pokemonData.dexNumber !== 'undefined' ? pokemonData.dexNumber : pokemonData.number;

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

                // Check to see if this pokemon has any traits to show
                var pokeTraits = [];
                if (pokemonData.isHiddenPokemon === true){ pokeTraits.push('<i class="sp xhidden"></i>'); }
                else {
                    if (pokemonData.baseGameGeneration !== pokemonData.gameGeneration){ pokeTraits.push('<i class="crossgen"></i>'); }
                    if (pokemonData.isSpecialPokemon === true){
                        if (pokemonData.class === 'ultra-beast'){ pokeTraits.push('<i class="sp ultra"></i>'); }
                        else if (pokemonData.class === 'legendary'){ pokeTraits.push('<i class="sp legendary"></i>'); }
                        else if (pokemonData.class === 'mythical'){ pokeTraits.push('<i class="sp mythical"></i>'); }
                        }
                    if (pokemonData.isStarterPokemon === true){ pokeTraits.push('<i class="starter"></i>'); }
                    if (pokemonData.gameGeneration !== pokemonData.baseGameGeneration
                        &&  (pokemonData.formClasses.indexOf('regional-variant') !== -1
                            || pokemonData.formClasses.indexOf('ancient-variant') !== -1
                            || pokemonData.formClasses.indexOf('box-variant') !== -1)){
                            if (pokemonData.formToken.match(/(^|-)?(alolan|galarian|proto|altered)(-|$)?/)){
                                if (typeof pokemonData.allowAsVisitor === 'undefined'
                                    || pokemonData.allowAsVisitor === false){
                                    pokeTraits.push('<i class="nonwild"></i>');
                                    }
                                }
                        }
                    }

                // Generate the markup for the pokemon button
                var buttonMarkup = '';
                buttonMarkup += '<button '+
                    'class="'+ buttonClass +'" '+
                    'data-action="add" '+
                    'data-kind="pokemon" '+
                    'data-token="'+ pokemonToken +'" '+
                    'data-gen="'+ pokemonGen +'" '+
                    'data-key="'+ (key + 1) +'" ' +
                    'data-legnum="'+ pokeLegNum +'" ' +
                    'data-modnum="'+ pokemonData.order +'" ' +
                    'data-basegen="'+ pokemonBaseGen +'" ' +
                    'data-type="'+ pokemonData.types.join(',') +'" '+
                    'title="'+ pokemonTitle.replace('"', '&quot;') +'" '+
                    '>';
                    buttonMarkup += '<span class="gloss"></span>';
                    //buttonMarkup += '<span class="plus">+</span>';
                    buttonMarkup += pokemonIcon;
                    if (pokeTraits.length){ buttonMarkup += '<span class="traits">'+pokeTraits.join('')+'</span>'; }
                    //buttonMarkup += '<strong>' + pokemonData['name'] +'</strong>';
                buttonMarkup += '</button>';

                // Appent this button's markup the full list
                pokePanelMarkup += buttonMarkup;

                }

            // //console.log('shownGens = ', shownGens);
            // //console.log('shownTypes = ', shownTypes);

            // Append generated markup to the panel at once
            if (!$('.buttonwrap', $pokePanelSelectButtons).length){ $pokePanelSelectButtons.append('<div class="buttonwrap"></div>'); }
            else { $('.buttonwrap', $pokePanelSelectButtons).empty(); }
            $('.buttonwrap', $pokePanelSelectButtons).append(pokePanelMarkup);

            // Remove the loading dotts
            $pokePanelLoading.parent().addClass('loaded');
            $pokePanelLoading.remove();
            // //console.log('JUST removed the loading panel');

            // Atach a scrollbar to the markup panel
            $pokePanelSelectButtons.find('.buttonwrap').perfectScrollbar({suppressScrollX: true});

            // Update scrollbar once images have loaded
            var $buttonImages = $('img', $pokePanelSelectButtons);
            var loadedImages = 0;
            $buttonImages.each(function(){
                $(this).on('load', function(){
                    loadedImages++;
                    if (loadedImages === $buttonImages.length){
                        // //console.log('update scrollbar');
                        $pokePanelSelectButtons.find('.buttonwrap').perfectScrollbar('update');
                        }
                    });
                });

            // Unhide the start button now that pokemon list is ready
            $('.controls .start', $panelButtons).removeClass('hidden');

            // Bind the global click event for the poke panel select buttons
            $('button[data-action]', $pokePanelSelectButtons).bind('click', pokeSelectButtonClickEvent);

            // //console.log('shownGens = ', shownGens);
            // //console.log('shownTypes = ', shownTypes);

            // Re-apply the pokemon button filter now that they've been updated
            applyPokemonButtonFilters();

            // Disable any options were are not currently represented
            var $thisFilterWrapper = $pokePanelFilters.filter('[data-target="buttons"]');
            $thisFilterWrapper.find('.filter .option.disabled').removeClass('disabled');
            $thisFilterWrapper.find('.filter .option.hidden').removeClass('hidden');
            $thisFilterWrapper.find('.filter.generations .option:not([data-gen="all"])').each(function(){
                $option = $(this);
                var thisGen = $option.attr('data-gen');
                if (thisGen !== 'x' && thisGen !== 'r'){ thisGen = parseInt(thisGen); }
                if (shownGens.indexOf(thisGen) === -1){ $option.addClass('disabled'); }
                });
            $thisFilterWrapper.find('.filter.types .option:not([data-type="all"])').each(function(){
                $option = $(this);
                var thisType = $option.attr('data-type');
                if (shownTypes.indexOf(thisType) === -1){ $option.addClass('disabled'); }
                });

            // Hide the Gen X option if the user shouldn't see it yet
            if (shownGens.indexOf('x') === -1){ $thisFilterWrapper.find('.filter .option[data-gen="x"]').addClass('hidden'); }
            if (shownGens.indexOf('r') === -1){ $thisFilterWrapper.find('.filter .option[data-gen="r"]').addClass('hidden'); }
            var numGenButtons = $thisFilterWrapper.find('.filter .option[data-gen]:not(.hidden)').length;
            // //console.log('numGenButtons = ', numGenButtons);
            $thisFilterWrapper.find('.options[data-count]').attr('data-count', numGenButtons);

            // We're ready to show the filter panel now too (and reset more buttons)
            $thisFilterWrapper.removeClass('hidden');

            // Refresh panel button statuses as appropriate
            refreshPokePanelQuickButtons();

            }, 0);

    }

    // Define a function for refreshing panel buttons and showing/hiding as appropriate
    function refreshPokePanelQuickButtons(){

        // Refresh and update the ditto and seed buttons as appropriate
        checkDittoButtonAllowed();
        checkArceusButtonAllowed();
        checkSeedButtonAllowed();

    }

    // Define a function for checking to see if the ditto button should be shown
    function checkDittoButtonAllowed(){
        if (simulationStarted === true){ return; }
        // //console.log('checkDittoButtonAllowed()');

        // Hide and disable the ditto button by default
        var $dittoButton = $('.button.add-ditto', $pokePanelFilters);
        $dittoButton.addClass('hidden disabled');

        // Hide and disable the super ditto button by default
        var $superDittoButton = $('.button.add-super-ditto', $pokePanelFilters);
        $superDittoButton.addClass('hidden disabled');

        // Unhide the ditto button if we're in free mode or we've seen it already
        if (appFreeMode
            || (typeof PokemonSpeciesSeen['ditto'] !== 'undefined'
                && PokemonSpeciesSeen['ditto'] > 0)){
            $dittoButton.removeClass('hidden');
            }

        // Unhide the super ditto button if we're in free mode or we've seen it already
        if (appFreeMode
            || (typeof PokemonSpeciesSeen['super-ditto'] !== 'undefined'
                && PokemonSpeciesSeen['super-ditto'] > 0)){
            $superDittoButton.removeClass('hidden');
            }

        // Enable the ditto button only if there's room in the selection panel
        if (thisZoneData.currentPokemon.length < pokemonRequiredToStart){
            $dittoButton.removeClass('disabled');
            }

        // Enable the super ditto button only if there's room in the selection panel
        if (thisZoneData.currentPokemon.length < pokemonRequiredToStart){
            $superDittoButton.removeClass('disabled');
            }

    }

    // Define a function for checking to see if the arceus button should be shown
    function checkArceusButtonAllowed(){
        if (simulationStarted === true){ return; }
        // //console.log('checkArceusButtonAllowed()');

        // Hide and disable the arceus button by default
        var $arceusButton = $('.button.add-arceus', $pokePanelFilters);
        $arceusButton.addClass('hidden disabled');

        // Unhide the arceus button if we're in free mode or we've seen it already
        if (appFreeMode
            || (typeof PokemonSpeciesSeen['arceus'] !== 'undefined'
                && PokemonSpeciesSeen['arceus'] > 0)){
            $arceusButton.removeClass('hidden');
            }

        // Enable the arceus button only if there's room in the selection panel
        if (thisZoneData.currentPokemon.length < pokemonRequiredToStart){
            $arceusButton.removeClass('disabled');
            }

    }

    // Define a function for checking to see if the seed button should be shown
    function checkSeedButtonAllowed(){
        if (simulationStarted === true){ return; }
        // //console.log('checkSeedButtonAllowed()');

        // Hide and disable the seed button by default
        var $seedButton = $('.button.enter-seed', $pokePanelFilters);
        $seedButton.addClass('hidden disabled');

        // Hide and disable the repeat seed button by default
        var $repeatSeedButton = $('.button.repeat-seed', $pokePanelFilters);
        $repeatSeedButton.addClass('hidden disabled');

        // Unhide the seed button if we're run the simulator at least once
        if (appFreeMode
            || PokeboxDaysPassed > 0
            || Object.keys(PokemonSpeciesSeen).length > 0){
            $seedButton.removeClass('hidden');
            }

        // Unhide the repeat seed button if a previous seed has been entered already
        if (PokeboxLastStarterSeed !== false && PokeboxLastStarterSeed.length){
            $repeatSeedButton.removeClass('hidden');
            }

        // Enable the seed buttons only if there's room in the starter area
        if (thisZoneData.currentPokemon.length < pokemonRequiredToStart){
            $seedButton.removeClass('disabled');
            $repeatSeedButton.removeClass('disabled');
            }

    }

    // Define a function for generating the pokedex tab's content for the user
    function generatePokemonPokedex(){

        // //console.log('generatePokemonPokedex()');
        //$pokePanelLoading.append('.'); // append loading dot

        // Remove the hidden class from the pokedex link
        $('.info.links .link[data-tab="pokedex"]', $panelButtons).removeClass('hidden');
        $('.info.links .count.score', $panelButtons).removeClass('hidden');

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
                // //console.log('pokedex markup ', key);

                // Collect the number and index info for this pokemon
                var pokeNum = key + 1;
                var pokeToken = PokemonSpeciesDexOrder[key];
                var pokeIndex = PokemonSpeciesIndex[pokeToken];

                // If this is a hidden pokemon, don't generate any markup
                if (typeof pokeIndex.isHiddenPokemon !== 'undefined'
                    && pokeIndex.isHiddenPokemon === true){
                    continue;
                    }

                // Check to see if this pokemon is special in some way
                var pokemonIsSpecial = false;
                if (pokeIndex['class'] === 'legendary'
                    || pokeIndex['class'] === 'mythical'
                    || pokeIndex['class'] === 'ultra-beast'
                    || pokeIndex['class'] === 'gigantamax'){
                    pokemonIsSpecial = true;
                    }

                // Insert a break after each new generation
                var thisGeneration = pokeIndex.gameGeneration;
                if (pokemonIsSpecial || pokeToken === 'super-ditto'){ thisGeneration = 'specials'; }
                if (thisGeneration !== lastGeneration){
                    var addBreak = true;
                    if (pokeIndex.class === 'baby'){ addBreak = false; }
                    else if (pokeIndex.formClasses.indexOf('gigantamax-form') !== -1){ addBreak = false; }
                    else if (pokeIndex.formClass === 'mega-evolution'){ addBreak = false; }
                    else if (pokeIndex.formClass === 'burst-evolution'){ addBreak = false; }
                    else if (pokeIndex.formClass === 'regional-variant'){ addBreak = false; }
                    else if (pokeIndex.formClass === 'ancient-variant'){ addBreak = false; }
                    else if (pokeIndex.formClass === 'box-variant'){ addBreak = false; }
                    else if (pokeIndex.formClass === 'gender-variant'){ addBreak = false; }
                    else if (typeof pokeIndex.prevEvolution !== 'undefined'){ addBreak = false; }
                    if (addBreak){
                        if (lastGeneration !== false){ pokedexMarkup.push('<li class="breaker"><hr class="breaker" /></li>'); }
                        lastGeneration = thisGeneration;
                        }
                }

                var isUnlocked = false;
                if (appFreeMode
                    || (typeof PokemonSpeciesSeen[pokeToken] !== 'undefined'
                        && PokemonSpeciesSeen[pokeToken] > 0)){
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
                        || pokeIndex.altMonthlyForms === true
                        || pokeIndex.colorizedForms === true
                        || pokeIndex.fieldForms === true)
                            && typeof pokeIndex.baseForm !== 'undefined'
                            && pokeIndex.baseForm.length > 0){
                    customData.formToken = typeof pokeIndex.dexBaseForm !== 'undefined' ? pokeIndex.dexBaseForm : pokeIndex.baseForm; // Random/seasonal/color form with base
                    }
                var pokeIcon = getPokemonIcon(pokeToken, false, customData, false, 'pokedex');
                var pokemonGen = typeof pokeIndex.dexGeneration !== 'undefined' ? pokeIndex.dexGeneration : pokeIndex.gameGeneration;
                var pokemonBaseGen = pokeIndex.baseGameGeneration;
                var pokeLegNum = (pokemonGen === 'x' || pokemonGen === 'r') && typeof pokeIndex.dexNumber !== 'undefined' ? pokeIndex.dexNumber : pokeIndex.number;

                var pokeTraits = [];
                if (pokeIndex.isHiddenPokemon === true){ pokeTraits.push('<i class="sp xhidden"></i>'); }
                else {
                    if (pokeIndex.baseGameGeneration !== pokeIndex.gameGeneration){ pokeTraits.push('<i class="crossgen"></i>'); }
                    if (pokeIndex.isSpecialPokemon === true){
                        if (pokeIndex.class === 'ultra-beast'){ pokeTraits.push('<i class="sp ultra"></i>'); }
                        else if (pokeIndex.class === 'legendary'){ pokeTraits.push('<i class="sp legendary"></i>'); }
                        else if (pokeIndex.class === 'mythical'){ pokeTraits.push('<i class="sp mythical"></i>'); }
                        }
                    if (pokeIndex.isStarterPokemon === true){ pokeTraits.push('<i class="starter"></i>'); }
                    if (pokeIndex.gameGeneration !== pokeIndex.baseGameGeneration
                        &&  (pokeIndex.formClasses.indexOf('regional-variant') !== -1
                            || pokeIndex.formClasses.indexOf('ancient-variant') !== -1
                            || pokeIndex.formClasses.indexOf('box-variant') !== -1)){
                            if (typeof pokeIndex.formToken !== 'undefined'
                                && pokeIndex.formToken.match(/(^|-)?(alolan|galarian|proto|altered)(-|$)?/)){
                                if (typeof pokeIndex.allowAsVisitor === 'undefined'
                                    || pokeIndex.allowAsVisitor === false){
                                    pokeTraits.push('<i class="nonwild"></i>');
                                    }
                                }
                        }
                    }

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
                                (pokeTraits.length ? '<span class="traits">'+pokeTraits.join('')+'</span>' : '') +
                            '</div>' +
                        '</div>' +
                    '</li>');

                // Update the shown gens and types lists
                if (shownGens.indexOf(pokeIndex.gameGeneration) === -1){ shownGens.push(pokeIndex.gameGeneration); }
                if (shownTypes.indexOf(pokeIndex.types[0]) === -1){ shownTypes.push(pokeIndex.types[0]); }
                if (typeof pokemonTypes[1] !== 'undefined' && shownTypes.indexOf(pokeIndex.types[1]) === -1){ shownTypes.push(pokeIndex.types[1]); }

                }
            $pokedexList.append(pokedexMarkup.join(''));

            // //console.log('shownGens = ', shownGens);
            // //console.log('shownTypes = ', shownTypes);

            // Re-apply the pokemon pokedex filters now that they've been updated
            applyPokemonPokedexFilters();

            // We're ready to show the filter panel now too
            var $thisFilterWrapper = $pokePanelFilters.filter('[data-target="pokedex"]');
            $thisFilterWrapper.removeClass('hidden');

            // Remove the hidden class from the pokedex link
            $('.info.links .link[data-tab="pokedex"]', $panelButtons).removeClass('wait');
            $('.info.links .count.score', $panelButtons).removeClass('wait');

            }, 0);

    }

    // Define a function for updating the pokedex with currently seen species
    var seenSpeciesTokensCache = [];
    function updatePokemonPokedex(){
        // //console.log('-----\nupdatePokemonPokedex()');

        // If we're in the free mode, the pokedex is already complete
        if (appFreeMode){ return false; }

        // Collect seen species tokens to count and/or scan later
        var seenSpeciesTokens = Object.keys(PokemonSpeciesSeen);

        // If the number of seen species hasn't changed, we don't need to update anything
        if (seenSpeciesTokens.length === seenSpeciesTokensCache.length){ return true; }

        // Check to see which species tokens have been added since last time
        var newSpeciesTokens = seenSpeciesTokens.filter(function(token){ return seenSpeciesTokensCache.indexOf(token) < 0; });

        // Update the seen species cache for next loop
        seenSpeciesTokensCache = seenSpeciesTokens;

        // Collect a reference to the pokedex list wrapper
        var $pokedexContainer = $('.info[data-tab="pokedex"]', $panelButtons);
        var $pokedexList = $('.list', $pokedexContainer);

        // Loop through the list of seen species and unhide appropriate blocks
        for (var key = 0; key < newSpeciesTokens.length; key++){
            var pokeToken = newSpeciesTokens[key];
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
        // //console.log('applyPokemonButtonFilters', currentButtonFilters);

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

        // Collect references to the gen and mode filters (so we can overwrite them later)
        var currentGenFilter = currentButtonFilters['gen'];
        var currentTypeFilter = currentButtonFilters['type'];

        // If we're in the rewards generation (r), do use apply type filters
        if (currentGenFilter === 'r'){
            $filterDivs.filter('[data-filter="type"]').addClass('hidden disabled');
            currentTypeFilter = 'all';
            } else {
            $filterDivs.filter('[data-filter="type"]').removeClass('hidden disabled');
            }

        // //console.log('currentGenFilter = ', currentGenFilter);
        // //console.log('currentTypeFilter = ', currentTypeFilter);

        // Hide all pokemon buttons by default then loop through to see which match the filter and can be shown
        var $pokemonButtons = $pokePanelSelectButtons.find('.button[data-kind="pokemon"]');
        $pokemonButtons.addClass('hidden');
        $pokemonButtons.each(function(){
            var $button = $(this);
            // //console.log('\nCheck ' + $button.attr('data-token') + ' for matches...', currentButtonFilters);
            var isMatch = true;
            for (var i = 0; i < currentButtonFiltersKeys.length; i++){
                var filterKind = currentButtonFiltersKeys[i];
                var currentValue = currentButtonFilters[filterKind];
                if (filterKind === 'type'){ currentValue = currentTypeFilter; }
                if (currentValue === 'all'){ continue; }
                var thisValue = $button.attr('data-'+filterKind);
                // //console.log('|- Does ' + filterKind + ' match current value ' + currentValue + ' ? thisValue = ', thisValue);
                if (filterKind === 'gen'){
                    thisValue = (thisValue !== 'x' && thisValue !== 'r') ? parseInt(thisValue) : thisValue;
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

        // Re-sort the elements based on which mode we're in
        if (currentGenFilter === 'all'){ var sortBy = ['data-modnum', 'data-legnum']; } //data-key
        else { var sortBy = ['data-legnum', 'data-modnum']; }
        //else if (currentButtonFilters['mode'] === 'legacy'){ var sortBy = ['data-legnum', 'data-modnum']; }
        //else if (currentButtonFilters['mode'] === 'modern'){ var sortBy = ['data-modnum', 'data-legnum']; }
        // //console.log('currentGenFilter = ', currentGenFilter);
        // //console.log('sortBy = ', sortBy);
        var $sortedButtons = $pokemonButtons.sort(function(a, b){
            var $a = $(a), $b = $(b);
            var aToken = $a.attr('data-token'), bToken = $b.attr('data-token');
            var aIndex = PokemonSpeciesIndex[aToken], bIndex = PokemonSpeciesIndex[bToken];
            if (true){
                if (aIndex.isSpecialPokemon !== true && bIndex.isSpecialPokemon === true){ return -1; }
                else if (aIndex.isSpecialPokemon === true && bIndex.isSpecialPokemon !== true){ return 1; }
            }
            if (currentGenFilter !== 'all'
                && currentGenFilter !== 'x'
                && currentGenFilter !== 'r'
                && aIndex.isSpecialPokemon !== true
                && bIndex.isSpecialPokemon !== true){
                var currGen = currentGenFilter;
                if (aIndex.baseGameGeneration === currGen && bIndex.baseGameGeneration !== currGen){ return -1; }
                else if (aIndex.baseGameGeneration !== currGen && bIndex.baseGameGeneration === currGen){ return 1; }
            }
            if (currentGenFilter !== 'x'
                && currentGenFilter !== 'r'
                && currentButtonFilters['mode'] === 'legacy'){
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
        // //console.log('Inserting sorted results...');
        $sortedButtons.each(function(){ $(this).attr('data-key', 0); });
        $sortedButtons.filter(':not(.hidden):not(.disabled)').each(function(key){ $(this).attr('data-key', key); });
        $('.buttonwrap', $pokePanelSelectButtons).empty().html($sortedButtons);

        // Re-Bind the global click event for the poke panel select buttons
        $('button[data-action]', $pokePanelSelectButtons).bind('click', pokeSelectButtonClickEvent);

        // Update the scrollbar wrapper since there have been changes
        $pokePanelSelectButtons.find('.buttonwrap').perfectScrollbar('update');

    }

    // Define a function that loops through all pokemon dex entries and hides/shows based on current filters
    function applyPokemonPokedexFilters(){
        // //console.log('applyPokemonPokedexFilters', currentPokedexFilters);

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

        /*
        // Show/hide and enable/disable the mode selectors based on the gen filter value
        if (currentPokedexFilters['gen'] === 'all'){ $filterDivs.filter('[data-filter="mode"]').addClass('disabled'); }
        else { $filterDivs.filter('[data-filter="mode"]').removeClass('disabled'); }
        */

        // Collect references to the gen and mode filters (so we can overwrite them later)
        var currentGenFilter = typeof currentPokedexFilters['gen'] !== 'undefined' ? currentPokedexFilters['gen'] : 'all';
        var currentModeFilter = typeof currentPokedexFilters['mode'] !== 'undefined' ? currentPokedexFilters['mode'] : 'legacy';

        // Show/hide and enable/disable the mode selectors based on the gen filter value
        if (currentGenFilter === 'x'){
            $filterDivs.filter('[data-filter="mode"]').addClass('hidden disabled');
            currentModeFilter = 'legacy';
            } else {
            $filterDivs.filter('[data-filter="mode"]').removeClass('hidden');
            if (currentGenFilter === 'all'){ $filterDivs.filter('[data-filter="mode"]').addClass('disabled'); }
            else { $filterDivs.filter('[data-filter="mode"]').removeClass('disabled'); }
            }

        // Define totals variables to increment later during looping
        var showingTotal = 0;
        var unlockedTotal = 0;

        // Hide all pokemon entrys by default then loop through to see which match the filter and can be shown
        var $pokemonEntries = $pokePanelPokedexEntries.find('.entry');
        $pokemonEntries.addClass('hidden');
        $pokemonEntries.each(function(){
            var $entry = $(this);
            // //console.log('\nCheck ' + $entry.attr('data-token') + ' for matches...', currentPokedexFilters);
            var isMatch = true;
            for (var i = 0; i < currentPokedexFiltersKeys.length; i++){
                var filterKind = currentPokedexFiltersKeys[i];
                if (filterKind === 'mode'){ continue; }
                var currentValue = currentPokedexFilters[filterKind];
                if (currentValue === 'all'){ continue; }
                var filterAttr = filterKind;
                if (filterKind === 'gen' && currentModeFilter !== 'legacy'){ filterAttr = 'basegen'; }
                var thisValue = $entry.attr('data-'+filterAttr);
                // //console.log('|- Does ' + filterKind + ' match current value ' + currentValue + ' ? thisValue = ', thisValue);
                if (filterKind === 'gen'){
                    thisValue = thisValue !== 'x' && thisValue !== 'r' ? parseInt(thisValue) : thisValue;
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
        if (currentGenFilter === 'all'){ var sortBy = ['data-modnum', 'data-legnum']; } //data-key
        else if (currentModeFilter === 'legacy'){ var sortBy = ['data-legnum', 'data-modnum']; }
        else if (currentModeFilter === 'modern'){ var sortBy = ['data-modnum', 'data-legnum']; }
        // //console.log('currentPokedexFilters[\'mode\'] = ', currentModeFilter);
        // //console.log('sortBy = ', sortBy);
        var $sortedEntries = $pokemonEntries.sort(function(a, b){
            var $a = $(a), $b = $(b);
            var aToken = $a.attr('data-token'), bToken = $b.attr('data-token');
            var aIndex = PokemonSpeciesIndex[aToken], bIndex = PokemonSpeciesIndex[bToken];
            if (currentGenFilter !== 'x'
                && currentGenFilter !== 'r'
                && currentModeFilter === 'legacy'){
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
        // //console.log('Inserting sorted results...');
        $('.list', $pokePanelPokedexEntries).empty().html($sortedEntries);

        // Update the pokedex totals for how many are showing, unlocked, and overall
        var percentTotal = showingTotal > 0 ? (Math.ceil((unlockedTotal / showingTotal) * 1000) / 10) : 0;
        $dexTotals = $pokePanelPokedexEntries.find('.totals');
        $dexTotals.find('.unlocked').html(unlockedTotal);
        $dexTotals.find('.showing').html(showingTotal);
        $dexTotals.find('.percent').html(percentTotal+'%');

    }

    // Define a function for generating pokemon title text given a token
    function getPokemonTitleText(pokeToken){
        var pokeIndex = PokemonSpeciesIndex[pokeToken];
        var isUnlocked = false;
        if (appFreeMode || (typeof PokemonSpeciesSeen[pokeToken] !== 'undefined' && PokemonSpeciesSeen[pokeToken] > 0)){ isUnlocked = true; }
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
            if (typeof pokeIndex.formClasses !== 'undefined'){
                if (pokeIndex.formClasses.indexOf('gigantamax-form') !== -1){ stageText.push('Gigantamax Form'); showEvoStage = false; }
                else if (pokeIndex.formClasses.indexOf('mega-evolution') !== -1){ stageText.push('Mega Evolution'); showEvoStage = false; }
                else if (pokeIndex.formClasses.indexOf('burst-evolution') !== -1){ stageText.push('Burst Evolution'); showEvoStage = false; }
                else if (pokeIndex.formClasses.indexOf('primal-reversion') !== -1){ stageText.push('Primal Reversion'); showEvoStage = false; }
                } else if (typeof pokeIndex.formClass !== 'undefined'){
                if (pokeIndex.formClass === 'gigantamax-form'){ stageText.push('Gigantamax Form'); showEvoStage = false; }
                else if (pokeIndex.formClass === 'mega-evolution'){ stageText.push('Mega Evolution'); showEvoStage = false; }
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
                if (pokeIndex.formClass === 'ancient-variant'){ titleText += '\n' + 'Ancient Variant'; }
                if (pokeIndex.formClass === 'box-variant'){ titleText += '\n' + 'Box Variant'; }
                if (pokeIndex.formClass === 'weather-variant'){ titleText += '\n' + 'Weather Variant'; }
                if (pokeIndex.formClass === 'field-variant'){ titleText += '\n' + 'Field Variant'; }
                if (pokeIndex.formClass === 'type-variant'){ titleText += '\n' + 'Type Variant'; }
                if (pokeIndex.formClass === 'shadow-variant'){ titleText += '\n' + 'Shadow Variant'; }
                if (pokeIndex.formClass === 'shining-variant'){ titleText += '\n' + 'Shining Variant'; }
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
        nextPokemonID++;
        var nextID = nextPokemonID;
        return nextID;
    }

    // Define a function for getting the next pokemon SID
    var nextPokemonSID = {};
    function getNextPokemonSID(pokemonToken){
        if (typeof nextPokemonSID[pokemonToken] === 'undefined'){ nextPokemonSID[pokemonToken] = 0; }
        nextPokemonSID[pokemonToken]++;
        var nextSID = nextPokemonSID[pokemonToken];
        return nextSID;
    }

    // Define a function for adding a new pokemon to a zone
    function addPokemonToZone(pokemonToken, isEgg, reduceCycles, isVisitor, customData){
        // //console.log('addPokemonToZone(pokemonToken:'+pokemonToken+', isEgg:'+isEgg+', reduceCycles:'+reduceCycles+', isVisitor:'+isVisitor+', customData:'+JSON.stringify(customData)+')');
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

        // Create an entry for this species in the global count if not exists
        var evoLineNumber = indexData.evoLineNumber;
        var addedPokemonByEvoLineNumber = thisZoneData.addedPokemonByEvoLineNumber;
        if (typeof addedPokemonByEvoLineNumber[evoLineNumber] === 'undefined'){ addedPokemonByEvoLineNumber[evoLineNumber] = 0; }
        addedPokemonByEvoLineNumber[evoLineNumber]++;

        // Create an entry for this pokemon in the seen count if not exists
        if (hiddenPokemonTokens.indexOf(pokemonToken) === -1){
            if (typeof PokemonSpeciesSeen[pokemonToken] === 'undefined'){ PokemonSpeciesSeen[pokemonToken] = 0; }
            PokemonSpeciesSeen[pokemonToken]++;
            }

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
            || indexData.formClasses.indexOf('baby-evolution') !== -1){
            reduceCycles += 1;
            }

        // Define the egg cycles for this pokemon and reduce if necessary
        var indexData = PokemonSpeciesIndex[pokemonToken];
        var baseStats = indexData['baseStats'];
        var eggCycles = 0;
        if (isEgg){
            eggCycles = indexData.eggCycles;
            if (reduceCycles > 0){
                for (var i = 0; i < reduceCycles; i++){ eggCycles = (eggCycles / 2); }
                eggCycles = Math.ceil(eggCycles);
                if (eggCycles < 1){ eggCycles = 1; }
                }
            }

        // //console.log('reduceCycles = ', reduceCycles);
        // //console.log('eggCycles = ', eggCycles);

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
        // //console.log('pokemonToken / pokeGender = ', pokemonToken, pokeGender);

        // Generate new pokemon data with required parameters
        var newPokemon = {
            order: thisZoneData.currentPokemon.length,
            id: getNextPokemonID(),
            sid: getNextPokemonSID(indexData.basicEvolution),
            token: pokemonToken,
            types: indexData.types,
            eggCycles: eggCycles,
            gender: pokeGender,
            daysOld: 0,
            growthCycles: 0,
            growthCooldown: 0,
            reachedAdulthood: false,
            };

        // //console.log('newPokemon = ', newPokemon);

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
            // //console.log('allowVariant for '+ pokemonToken +'! ');

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
                // //console.log('\n\npossibleForms = ', possibleForms);
                // //console.log('formRatios = ', formRatios);
                // //console.log('ratioTotal = ', ratioTotal);
                // //console.log('randomKey = ', randomKey);
                // //console.log('keyLimit = ', keyLimit);
                for (var i = 0; i < possibleForms.length; i++){
                    var formToken = possibleForms[i];
                    var formChance = indexData['possibleFormsRatio'][i];
                    keyLimit += formChance;
                    // //console.log('\nformToken('+ i +') = ', formToken);
                    // //console.log('formChance('+ i +') = ', formChance);
                    // //console.log('keyLimit = ', keyLimit);
                    if ((randomKey + 1) <= keyLimit){
                        var randomForm = formToken;
                        // //console.log('randomForm = ', randomForm);
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

        // If this pokemon has a monthly form, decide it now
        if (typeof indexData['altMonthlyForms'] !== 'undefined'
            && indexData['altMonthlyForms'] === true){
            newPokemon.birthMonth = typeof thisZoneData.date.month !== 'undefined' ? thisZoneData.date.month : 1;
            newPokemon.formToken = indexData['baseForm'];
            }

        // If this pokemon has a colorized form, decide it now
        if (typeof indexData['colorizedForms'] !== 'undefined'
            && indexData['colorizedForms'] === true){
            if (colorizedFormsRequired.indexOf(pokemonToken) !== -1){
                if (!isVisitor){ recalculateColorizedForms(pokemonToken); }
                if (typeof currentColorizedForms[pokemonToken] !== 'undefined'
                    && currentColorizedForms[pokemonToken].length > 0){
                    newPokemon.formToken = currentColorizedForms[pokemonToken];
                    }
                } else {
                var colorStats = thisZoneData.currentStats['colors'];
                if (typeof colorStats !== 'undefined'
                    && !jQuery.isEmptyObject(colorStats)){
                    var topColor = Object.keys(colorStats)[0];
                    newPokemon.formToken = topColor;
                    }
                }
                if (!newPokemon.formToken){
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

        // If a form has not been decided but a base exists in the index data, apply it
        if (typeof newPokemon.formToken === 'undefined' && typeof indexData['baseForm'] !== 'undefined'){ newPokemon.formToken = indexData['baseForm']; }

        // If this pokemon has a special relationship to on-field pokemon, modify base stats
        if (pokemonToken === 'unown' && existingArceus > 0){ newPokemon.lifePoints = indexData.lifePoints + (indexData.lifePoints * existingArceus); }

        // Push the new pokemon to the list and collect its key
        var newKey = thisZoneData.currentPokemon.length;
        thisZoneData.currentPokemon.push(newPokemon);
        // //console.log('newKey / newPokemon = ', newKey, JSON.stringify(newPokemon));

        // Add this pokemon's cell markup to the container div
        var cellMarkup = generatePokemonCellMarkup(newPokemon, newKey);
        $panelPokemonSpriteWrapper.append(cellMarkup);

        // Update the overview with changes
        if (!simulationStarted){
            updateOverview();
            refreshPokePanelQuickButtons();
            }

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
        // //console.log('getZonePokemonByFilter(filterParams, matchMode):before', filterParams, matchMode);
        if (typeof filterParams !== 'object'){ return false; }
        else if (jQuery.isEmptyObject(filterParams)){ return false; }
        if (typeof sortResults === 'undefined'){ sortResults = true; }
        if (typeof matchMode !== 'string'){ matchMode = 'and'; }
        matchMode = matchMode.toLowerCase();
        if (matchMode !== 'and' && matchMode !== 'or'){ matchMode = 'and'; }
        // //console.log('getZonePokemonByFilter(filterParams, matchMode):after', filterParams, matchMode);
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
        // //console.log('getZonePokemonByID(pokemonID)', pokemonID);
        if (typeof pokemonID !== 'number'){ return false; }
        var pokemonMatches = getZonePokemonByFilter({id:pokemonID}, false);
        return pokemonMatches;
    }
    function getZonePokemonByToken(pokemonToken){
        // //console.log('getZonePokemonByToken(pokemonToken)', pokemonToken);
        if (typeof pokemonToken !== 'string'){ return false; }
        var pokemonMatches = getZonePokemonByFilter({token:pokemonToken}, false);
        return pokemonMatches;
    }
    function getZonePokemonByType(pokemonType){
        // //console.log('getZonePokemonByType(pokemonType)', pokemonType);
        if (typeof pokemonType1 !== 'string'){ return false; }
        var pokemonMatches = getZonePokemonByFilter({type:pokemonType}, false, 'or');
        return pokemonMatches;
    }

    // Define a function for updating the overview panel and stats
    var updateTimeout = false;
    function updateOverview(onComplete){
        // //console.log('----------\nupdateOverview()');
        // //console.log('thisZoneData = ', thisZoneData);

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
        // //console.log('pokeSpeciesActive = ', pokeSpeciesActive);
        // //console.log('thisZoneData.addedPokemonSpecies = ', thisZoneData.addedPokemonSpecies);
        // //console.log('thisZoneData.currentStats[\'eggs\'] = ', thisZoneData.currentStats['eggs']);

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
        var pokedexTotal = PokemonSpeciesIndexTokens.length - hiddenPokemonTokens.length;
        var pokedexPercent = (Math.ceil((pokedexCurrent / pokedexTotal) * 1000) / 10);
        $('.timer .count .total', $panelBanner).html(numberWithCommas(PokeboxDaysPassed));
        $('.pokedex .count .current', $panelBanner).html(pokedexCurrent);
        $('.pokedex .count .percent', $panelBanner).html(pokedexPercent+'%');
        // //console.log('pokedexCurrent = ', pokedexCurrent);
        // //console.log('PokemonSpeciesIndexTokens.length = ', PokemonSpeciesIndexTokens.length);
        // //console.log('hiddenPokemonTokens.length = ', hiddenPokemonTokens.length);
        // //console.log('pokedexTotal = ', pokedexTotal);
        // //console.log('pokedexPercent = ', pokedexPercent);

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
        // //console.log('dateString = ', dateString);
        switch (thisZoneData.date.month){
            case 12: case 1: case 2: { { thisZoneData.season = 'winter'; break; } }
            case 3: case 4: case 5: { { thisZoneData.season = 'spring'; break; } }
            case 6: case 7: case 8: { { thisZoneData.season = 'summer'; break; } }
            case 9: case 10: case 11: { { thisZoneData.season = 'autumn'; break; } }
            }
        // //console.log('thisZoneData.season = ', thisZoneData.season);

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
        // //console.log('pokeSpecies(All) = ', pokeSpeciesActive);

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
        sortedSpeciesTokens = sortSpeciesTokensByAddedThenByOrder(Object.keys(pokeSpecies));
        //if (simulationStarted){ var sortedSpeciesTokens = sortSpeciesTokensByOrder(Object.keys(pokeSpecies), true); }
        //else { var sortedSpeciesTokens = Object.keys(pokeSpecies); }

        // Loop through and show all pokemon sprites on the field, with eggs last
        var cellKey = -1;
        for (var key = 0; key < sortedSpeciesTokens.length; key++){
            var token = sortedSpeciesTokens[key];
            var pokeList = getZonePokemonByToken(token);
            // //console.log('------\n key/token', key, token);
            // //console.log('pokeList = ', pokeList);
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
            // //console.log('currentPokemonSpecies = ', currentPokemonSpecies);

            // Loop through and print out all the individual species stats
            var markupToAppend = '';
            var sortedTokens = getSortedKeys(currentPokemonSpecies);
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
                pokeIcon = getPokemonIcon(pokeInfo.token, false, {}, false, 'sidebar');
                var thisMarkup = '<li class="'+liClass+'" data-token="'+poke+'">'+
                        '<div class="bubble">'+
                            '<span class="icon">'+ pokeIcon +'</span> '+
                            '<span class="name">'+ pokeInfo['name'] +'</span> '+
                            '<span class="val">&times;'+ pokeCount + '</span>'+
                        '</div>'+
                    '</li>';
                // //console.log(pokeInfo.token, 'hiddenPokemon', pokeInfo.isHiddenPokemon);
                if (pokeInfo.isHiddenPokemon === true){ markupToAppend += thisMarkup; }
                else { speciesListMarkup += thisMarkup; }
                numCurrentSpecies++;
                numCurrentShown++;
                }
            // //console.log('markupToAppend = ', markupToAppend);
            speciesListMarkup += markupToAppend;

            // Print out a block for the total eggs added
            if (totalEggCount > 0){
                pokeIcon = getPokemonIcon('ditto', true, {}, false, 'sidebar');
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
            // //console.log('addedPokemonSpecies = ', addedPokemonSpecies);

            // Loop through and print out all the individual species stats
            var markupToAppend = '';
            var sortedTokens = getSortedKeys(addedPokemonSpecies);
            for (var key = 0; key < sortedTokens.length; key++){
                var poke = sortedTokens[key];
                var pokeInfo = PokemonSpeciesIndex[poke];
                var pokeCount = addedPokemonSpecies[poke];
                if (pokeCount < 1){ continue; }
                var liClass = 'species ';
                liClass += 'type '+pokeInfo['types'][0]+' ';
                if (typeof pokeInfo['types'][1] !== 'undefined'){ liClass += pokeInfo['types'][1]+'2 '; }
                pokeIcon = getPokemonIcon(pokeInfo.token, false, {}, false, 'sidebar');
                var thisMarkup = '<li class="'+liClass+'" data-token="'+poke+'">'+
                        '<div class="bubble">'+
                            '<span class="icon">'+ pokeIcon +'</span> '+
                            '<span class="name">'+ pokeInfo['name'] +'</span> '+
                            '<span class="val">&times;'+ pokeCount +'</span>'+
                        '</div>'+
                    '</li>';
                // //console.log(pokeInfo.token, 'hiddenPokemon', pokeInfo.isHiddenPokemon);
                if (pokeInfo.isHiddenPokemon === true){ markupToAppend += thisMarkup; }
                else { speciesListMarkup += thisMarkup; }
                numAllTimeSpecies++;
                numAllTimeShown++;
                }
            // //console.log('markupToAppend = ', markupToAppend);
            speciesListMarkup += markupToAppend;

            // Print out a block for the total eggs added
            if (!jQuery.isEmptyObject(addedPokemonEggs)){
                var totalEggs = 0;
                var eggSpecies = Object.keys(addedPokemonEggs);
                for (var i = 0; i < eggSpecies.length; i++){ totalEggs += addedPokemonEggs[eggSpecies[i]]; }
                pokeIcon = getPokemonIcon('ditto', true, {}, false, 'sidebar');
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
                    // //console.log('visitor = ', visitor);
                    // //console.log('pokeInfo = ', pokeInfo);
                    // //console.log('pokePercent = ', pokePercent);
                    var liClass = 'species ';
                    liClass += 'type '+pokeInfo['types'][0]+' ';
                    if (typeof pokeInfo['types'][1] !== 'undefined'){ liClass += pokeInfo['types'][1]+'2 '; }
                    if (!appFreeMode
                        && (typeof PokemonSpeciesSeen[pokeInfo.token] === 'undefined'
                            || PokemonSpeciesSeen[pokeInfo.token] === 0)){
                        liClass += 'unknown ';
                        }
                    pokeIcon = getPokemonIcon(pokeInfo.token, false, {}, false, 'sidebar');
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
        var cellStyle = {zIndex: cellKey};
        if (!hasFainted){
            var reverseOrder = cellPosition.row % 2 === 0 ? true : false;
            var cellTopValue = ((cellPosition.row - 1) * colPercent)+'%';
            var cellSideValue = ((cellPosition.col - 1) * colPercent)+'%';
            var cellSideName = !reverseOrder ? 'left' : 'right';
            var cellAutoSideName = cellSideName !== 'left' ? 'left' : 'right';
            cellStyle['top'] = cellTopValue;
            cellStyle[cellSideName] = cellSideValue;
            cellStyle[cellAutoSideName] = 'auto';
            }
        $pokeCell.attr('data-key', cellKey);
        $pokeCell.css(cellStyle);

        // Collect image data for this pokemon's icon sprite
        var $spriteImage = $pokeCell.find('.sprite:not(.overlay)').first();
        var spriteData = getPokemonIcon(pokeInfo.token, isEgg, pokeInfo, true, 'box');
        var newImage = spriteData.image;
        var newClass = spriteData.class;

        // Check if this pokemon has just evolved or changed forms
        var imageChanged = false;
        var currentImage = pokeInfo.currentImage || false;
        if (currentImage !== spriteData.image){ imageChanged = true; }
        pokeInfo.currentImage = newImage;
        // //console.log('pokeInfo = ', pokeInfo.id, pokeInfo.token);
        // //console.log('currentImage = ', currentImage);
        // //console.log('newImage = ', newImage);
        // //console.log('newClass = ', newClass);

        // If this Pokemon has just hatched, remove overlay and replace sprite
        if (justHatched){ $pokeCell.find('.sprite.overlay').remove(); }

        // If this pokemon's current image doesn't match what it should be, change it now
        if (!isEgg && imageChanged){

            $spriteImage.attr('class', newClass).css({backgroundImage:'url("'+ newImage +'")'});
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
            if (typeof PokemonSpeciesSeen[pokeInfo.token] !== 'undefined'){ PokemonSpeciesSeen[pokeInfo.token]--; }
            if (PokemonSpeciesSeen[pokeInfo.token] === 0){ delete PokemonSpeciesSeen[pokeInfo.token]; }
            recalculateZoneStats();
            updateOverview();
            if (thisZoneData.currentPokemon.length > 0){ $('.controls .start', $panelButtons).addClass('ready'); }
            else { $('.controls .start', $panelButtons).removeClass('ready'); }
            refreshPokePanelQuickButtons();
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

    // Attach a click event to the generated buttons
    function pokeSelectButtonClickEvent(e){
        e.preventDefault();
        var $button = $(this);
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
                return addStarterPokemonToZone(token);
                }
            }
        return false;
    }

    // Define a function for specifically adding a starter pokemon
    function addStarterPokemonToZone(token){
        addPokemonToZone(token, false);
        recalculateZoneStats();
        if (thisZoneData.currentPokemon.length > 0){ $('.controls .start', $panelButtons).addClass('ready'); }
        else { $('.controls .start', $panelButtons).removeClass('ready'); }
        refreshPokePanelQuickButtons();
        return true;
    }

    // Define a function for triggering the starter seed prompt
    function triggerStarterSeedPrompt(starterSeed){
        //console.log('triggerStarterSeedPrompt(', starterSeed, ')');

        // If a starter seed was not provided, default to false
        if (typeof starterSeed === 'undefined' || !starterSeed.length){ starterSeed = false; }

        // Quickly generate a list of password values and unlocks
        var rewardIndex = {};
        var shadowCount = Object.keys(shadowRewardIndex).length;
        for (var i = 0; i < shadowCount; i++){
            var info = shadowRewardIndex[i];
            if (typeof info['secret'] === 'undefined'){ continue; }
            rewardIndex[stringToPassValue(info['secret'])] = info['species'];
            }
        var shiningCount = Object.keys(shiningRewardIndex).length;
        for (var i = 0; i < shiningCount; i++){
            var info = shiningRewardIndex[i];
            if (typeof info['secret'] === 'undefined'){ continue; }
            rewardIndex[stringToPassValue(info['secret'])] = info['species'];
            }
        // //console.log('rewardIndex = ', rewardIndex);

        // Collect and parse the seed if it's given, else do nothing
        var rawSeed = !starterSeed ? prompt(
            'Starter seeds can be found in the footer of an active PokéBox. \n'
            + 'Please enter a starter seed below (or any fragment of it):') : starterSeed;
        if (rawSeed && rawSeed.length > 0){
            //console.log('rawSeed = ', rawSeed);

            // Check to see if the seed is actually a password and unlock rewards if true then return
            var passValue = stringToPassValue(rawSeed);
            if (typeof rewardIndex[passValue] !== 'undefined'){
                PokeboxRewards.push(rewardIndex[passValue]);
                recheckPokeboxRewards();
                checkPopupEventTriggers();
                generatePokemonButtons();
                return;
                }

            // Check if we've unlocked special pokemon yet
            var unlockedSpecialPokemon = PokeboxRewards.indexOf('special-starters') !== -1 ? true : false;

            // Otherwise we can continue parsing the password normally for actual Pokemon amounts
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
                    var isSpecial = indexInfo.isSpecialPokemon === true ? true : false;
                    // //console.log('starterToken = ', starterToken);
                    // //console.log('starterGender = ', typeof starterGender, starterGender);
                    // //console.log('isFree = ', isFree);
                    // //console.log('isBasic = ', isBasic);
                    // //console.log('isSeen = ', isSeen);
                    // //console.log('indexInfo = ', indexInfo);
                    // Check to see if we can allow this pokemon to be added
                    var allowPokemon = true;
                    if (!appFreeMode && !isFree){
                        if (!isSeen){ allowPokemon = false; }
                        else if (isSpecial && !unlockedSpecialPokemon){ allowPokemon = false; }
                        }
                    // Add if allowed, otherwise add to list of blocked species
                    if (allowPokemon){
                        var customData = {};
                        if (typeof starterGender !== 'undefined'){ customData['gender'] = starterGender; }
                        addPokemonToZone(starterToken, false, false, false, customData);
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

        // Refresh poke panel button statuses as appropriate
        refreshPokePanelQuickButtons();

         // Recalculate zone stats then show the start button if ready
        if (thisZoneData.currentPokemon.length > 0){
            recalculateZoneStats();
            $('.controls .start', $panelButtons).addClass('ready');
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

                // Continue if this pokemon is hidden and not an official species
                if (typeof pokeIndex.isHiddenPokemon !== 'undefined'
                    && pokeIndex.isHiddenPokemon === true){
                    continue;
                    }

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
                                currentZoneStats['types'][type] += 0.25 * modInfluencePoints;
                                }
                            }
                        }

                        // Add -1 appeal point for any type this pokemon is predator to
                        if (!ignoreTypeStrengths){
                            if (typeInfo['matchups']['strengths'].length){
                                for (var key4 = 0; key4 < typeInfo['matchups']['strengths'].length; key4++){
                                    var type = typeInfo['matchups']['strengths'][key4];
                                    if (typeof currentZoneStats['types'][type] === 'undefined'){ currentZoneStats['types'][type] = 0; }
                                    currentZoneStats['types'][type] -= 0.25 * pokeIndex.influencePoints;
                                    }
                                }
                            }

                    }

                // Check to see if this pokemon has any subtypes from abilities
                var subTypes = [];
                if (typeof pokeIndex.subType !== 'undefined'){ subTypes.push(pokeIndex.subType); }
                else if (typeof pokeIndex.subTypes !== 'undefined'){ subTypes = pokeIndex.subTypes.slice(0); }
                if (pokeAbilities.indexOf('steelworker') !== -1){ subTypes.push('steel'); }
                if (pokeAbilities.indexOf('hunger-switch') !== -1){ subTypes.push(pokeInfo.formToken === 'fullbelly' ? 'electric' : 'dark'); }
                if (pokeAbilities.indexOf('aquatic') !== -1){ subTypes.push('water'); }
                if (pokeAbilities.indexOf('transistor') !== -1){ subTypes.push('electric'); }
                if (pokeAbilities.indexOf('dragons-maw') !== -1){ subTypes.push('dragon'); }
                for (var key2 = 0; key2 < subTypes.length; key2++){
                    var typeToken = subTypes[key2];
                    var typeInfo = PokemonTypesIndex[typeToken];
                    // Add +1 appeal point for this pokemon's type
                    if (typeof currentZoneStats['types'][typeToken] === 'undefined'){ currentZoneStats['types'][typeToken] = 0; }
                    currentZoneStats['types'][typeToken] += 0.5 * pokeIndex.influencePoints;
                    // Add -1 appeal point for any type this pokemon is predator to
                    if (typeInfo['matchups']['strengths'].length){
                        for (var key4 = 0; key4 < typeInfo['matchups']['strengths'].length; key4++){
                            var type = typeInfo['matchups']['strengths'][key4];
                            if (typeof currentZoneStats['types'][type] === 'undefined'){ currentZoneStats['types'][type] = 0; }
                            currentZoneStats['types'][type] -= 0.25 * pokeIndex.influencePoints;
                            }
                        }
                    }

                // Loop through sub-stats for and increment relevant values
                for (var subKey = 0; subKey < subZoneStats.length; subKey++){
                    var subStat = subZoneStats[subKey];
                    // //console.log('pokeToken('+ pokeToken +') / subStat('+ subStat +')');
                    if (subStat === 'colors'
                        && typeof pokeIndex.excludeFromColorStats !== 'undefined'
                        && pokeIndex.excludeFromColorStats === true){
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
                            // If there's a secondary version of this field, include that too
                            if (typeof pokeIndex[subStat+'2'] !== 'undefined'){
                                var subToken2 = pokeIndex[subStat+'2'];
                                if (typeof currentZoneStats[subStat][subToken2] === 'undefined'){ currentZoneStats[subStat][subToken2] = 0; }
                                currentZoneStats[subStat][subToken2] += 1;
                                }
                            }
                        }
                    }

                }

            }

        // //console.log('currentZoneStats(Day '+thisZoneData.day+'A) = ', currentZoneStats);

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
        // //console.log('\n-----');
        var zoneStatTokens = Object.keys(currentZoneStats);
        for (var key1 = 0; key1 < zoneStatTokens.length; key1++){
            // //console.log('zoneStatTokens['+key1+']', zoneStatTokens[key1]);
            var statToken = zoneStatTokens[key1];
            var zoneStats = currentZoneStats[statToken];
            var sortedStatKeys = getSortedKeys(zoneStats);
            // //console.log('unsortedStatKeys', Object.keys(zoneStats));
            // //console.log('sortedStatKeys', sortedStatKeys);
            var sortedList = {};
            for (var key2 = 0; key2 < sortedStatKeys.length; key2++){
                // //console.log('sortedStatKeys['+key2+']', sortedStatKeys[key2]);
                var statKey = sortedStatKeys[key2];
                var statValue = zoneStats[statKey];
                sortedList[statKey] = statValue;
                }
            currentZoneStats[statToken] = sortedList;
            }

        // //console.log('currentZoneStats(Day '+thisZoneData.day+'B) = ', currentZoneStats);
        // //console.log('thisZoneData.currentStats = ', thisZoneData.currentStats);

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

            // Check for the presence of ULTRA ENERGY and ULTRA BEASTS
            if (true){

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

            }

        // (GEN 8+) If we're in the right generation, calculate Dynamax / Gigantamax mechanics
        if (maxIndexKeyToLoad >= 8){

            // Check to see if Eternatus has appeared in the box
            if (currentZoneFlags.indexOf('eternatusHasAppeared') === -1){
                var eternatusHasAppeared = false;
                if ((typeof currentZoneStats['species']['eternatus'] !== 'undefined'
                    && currentZoneStats['species']['eternatus'] > 0)
                    || (typeof currentZoneStats['species']['emax-eternatus'] !== 'undefined'
                    && currentZoneStats['species']['emax-eternatus'] > 0)){
                    eternatusHasAppeared = true;
                    }
                if (eternatusHasAppeared){
                    currentZoneFlags.push('eternatusHasAppeared');
                    }
                }

            // Check for the presence of DYNAMAX ENERGY and GMAX POKEMON
            if (true){

                // Check to see if the box has traces of Dynamax Energy inside (it stays)
                var totalDynamaxEnergy = 0;
                var currentDynamaxEnergy = 0;
                for (var i = 0; i < dynamaxEnergySpecies.length; i++){
                    var token = dynamaxEnergySpecies[i];
                    if (typeof addedSpecies[token] !== 'undefined'){
                        totalDynamaxEnergy += addedSpecies[token];
                        }
                    if (typeof currentZoneStats['species'][token] !== 'undefined'){
                        currentDynamaxEnergy += currentZoneStats['species'][token];
                        }
                    }
                currentZoneStats['totalDynamaxEnergy'] = totalDynamaxEnergy;
                currentZoneStats['currentDynamaxEnergy'] = currentDynamaxEnergy;
                if (totalDynamaxEnergy > 0
                    && currentZoneFlags.indexOf('boxHasDynamaxEnergy') === -1){
                    currentZoneFlags.push('boxHasDynamaxEnergy');
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
            // //console.log('Day '+ thisZoneData.day +' | typeValueDiff = ', typeValueDiff);
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

            // Recalculate any colorized patterns
            recalculateColorizedForms();

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

        // //console.log('###############\n#--- Day #'+thisZoneData.day, '---#\n###############');
        // //console.log('Day #'+thisZoneData.day, zoneDate);
        // //console.log('PokeboxDaysPassed = ', PokeboxDaysPassed);
        // //console.log('zoneDate = ', zoneDate);

        // Update the odd/even class on the pokemon sprite wrapper
        //var isEven = thisZoneData.day % 2 === 0 ? true : false;
        //if (isEven){ $panelPokemonSpriteWrapper.removeClass('odd').addClass('even'); }
        //else { $panelPokemonSpriteWrapper.removeClass('even').addClass('odd'); }

        // Send an analytics event for the amount of time that has passed
        if (typeof ga !== 'undefined'){ sendSessionAnalytics(thisZoneData.day); }

        // If this is the very first day, let's update our random seed
        if (thisZoneData.day === 1){
            Math.seed = 1;
            // //console.log('\n Math.seed reset to ', Math.seed);
            for (var i = 0; i < thisZoneData.currentPokemon.length; i++){
                var pokeToken = thisZoneData.currentPokemon[i].token;
                Math.seed += PokemonSpeciesIndex[pokeToken].number;
                }
            // //console.log('|- Starter-adjusted Math.seed is ', Math.seed);
            }
        //var randomNumber = Math.seededRandom(0, 100);
        // //console.log('Day #'+thisZoneData.day);
        // //console.log('Math.seed = ', Math.seed);
        // //console.log('randomNumber = ', randomNumber);

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
        if (simulationStarted
            && $panelOverviewFloatLists.length){
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

            /*
            // Summon a Ditto on the first day of the sim if not already unlocked
            if (!appFreeMode
                && thisZoneData.day === 1
                && (typeof PokemonSpeciesSeen['ditto'] === 'undefined'
                    || PokemonSpeciesSeen['ditto'] < 1)){
                triggerZoneVisitor('ditto');
                }
            */

            // Basic pokemon are summoned every month if none of the other conditions have been met
            if (thisZoneData.day % 30 === 0){
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

            // Update the overall score counter for right now
            recalculatePokedexScore();

            // Check to see if we have access to local storage
            if (typeof window.localStorage !== 'undefined'){

                // Update local storage with the new day total
                var savePokeboxDaysPassed = PokeboxDaysPassed;
                window.localStorage.setItem('PokeboxDaysPassed', savePokeboxDaysPassed);
                // //console.log('savePokeboxDaysPassed = ', savePokeboxDaysPassed);

                // Update local storage with the current seen pokemon index
                if (true){
                    // Collect saved global array and prepare to merge with local filtered
                    var savedPokemonSpeciesSeen = window.localStorage.getItem('PokemonSpeciesSeen');
                    if (typeof savedPokemonSpeciesSeen === 'string'){ savedPokemonSpeciesSeen = JSON.parse(savedPokemonSpeciesSeen); }
                    else { savedPokemonSpeciesSeen = {}; }
                    // //console.log('savedPokemonSpeciesSeen = ', savedPokemonSpeciesSeen);
                    // Merge the local array into the saved one, and then re-strinify it
                    var mergedPokemonSpeciesSeen = JSON.stringify(jQuery.extend({}, savedPokemonSpeciesSeen, PokemonSpeciesSeen));
                    window.localStorage.setItem('PokemonSpeciesSeen', mergedPokemonSpeciesSeen);
                    // //console.log('mergedPokemonSpeciesSeen = ', mergedPokemonSpeciesSeen);
                    }

                // Update local storage with the current pokebox rewards index
                savePokeboxRewards();

                }

            }

        // If we're not in free mode and this is an appropriate time, show a tutorial popup
        if (!appFreeMode){

            // If this is the user's first simulation, we have tutorial text
            if (firstSimulation){

                // If this is the 10th day, let them know they can speed things up
                if (thisZoneData.day === 10){
                    var eventID = 'controls-tutorial-01';
                    openPopupWindow({
                        id: eventID,
                        banner: 'controls-tutorial-01',
                        buttons: {continue: 'Continue'},
                        textbox: '<em>You can speed up the simulation by clicking the <br /> ' +
                            'arrow buttons at the bottom-left of the box. I\'d highly <br /> ' +
                            'recommend the warp speed. It\'s really, really fast!</em> '
                        });
                    }
                // If they're on the 60th day, let them know they can stop the simulation
                else if (thisZoneData.day === 60){
                    var eventID = 'controls-tutorial-02';
                    openPopupWindow({
                        id: eventID,
                        banner: 'controls-tutorial-02',
                        buttons: {continue: 'Continue'},
                        textbox: '<em>When you\'re done, double-click the big red STOP button <br /> ' +
                            'at the bottom-right of the box. The simulation will end and <br /> ' +
                            'you\'ll be able to review any new Pokédex entries!</em> '
                        });
                    }
                // If they're on the 120th day, let them know they should stop the simulation
                else if (thisZoneData.day === 120){
                    var eventID = 'controls-tutorial-03';
                    openPopupWindow({
                        id: eventID,
                        banner: 'controls-tutorial-03',
                        buttons: {continue: 'Continue'},
                        textbox: '<em>You should probably stop the simulation now... <br /> ' +
                            'I\'d like to give you something!  Remember, it\'s the <br /> ' +
                            'big red STOP button at the bottom-right of the box. </em> '
                        });
                    }

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
        // //console.log('currentBallKind', currentBallKind);
        // //console.log('newBallKind', newBallKind);
        // //console.log('completionPercent', completionPercent);

    }

    // Define a function for recalculating and updating the pokedex score counter
    var $pokedexScoreContainer = false;
    function recalculatePokedexScore(){
        if ($pokedexScoreContainer === false){ $pokedexScoreContainer = $('.info.links .count.score .total', $panelButtons); }
        var currentScore = 0;
        if (PokeboxDaysPassed > 0){
            currentScore += currentPokedexTotals.totalPokemonEncountered * 1000;
            currentScore -= PokeboxDaysPassed * 10;
            }
        currentPokedexTotals.currentPokedexScore = currentScore;
        $pokedexScoreContainer.html(numberWithCommas(currentScore));
    }

    // Define a function for calculating the current forms for pokemon with colorized patterns
    var currentColorizedForms = {};
    var colorizedFormsRequired = [];
    function recalculateColorizedForms(preloadToken){
        //console.log('<<-----\n');
        //console.log('recalculateColorizedForms(', preloadToken, ')');
        //console.log('- OLD ', {colorizedFormsRequired: colorizedFormsRequired, currentColorizedForms: currentColorizedForms});
        if (typeof preloadToken !== 'string' || preloadToken.length < 1){ preloadToken = false; }

        // Collect the current color stats for the zone before continuing
        var currentColourStats = thisZoneData.currentStats['colors'];
        var addedPokemonByEvoLineNumber = thisZoneData.addedPokemonByEvoLineNumber;
        //console.log('- ', {currentColourStats: currentColourStats, addedPokemonByEvoLineNumber: addedPokemonByEvoLineNumber});

        // Loop through required colorized forms and process where applicable
        for (var reqKey = 0; reqKey < colorizedFormsRequired.length; reqKey++){

            // Collect the token requiring colorization
            var pokeToken = colorizedFormsRequired[reqKey];
            var pokeIndex = PokemonSpeciesIndex[pokeToken];
            var numAdded = typeof addedPokemonByEvoLineNumber[pokeIndex.evoLineNumber] !== 'undefined' ? addedPokemonByEvoLineNumber[pokeIndex.evoLineNumber] : 0;
            //console.log('-- checking if colors needed for ', pokeToken, pokeIndex.evoLineNumber);

            // If there the any of this pokemon line on the field, pre-calculate current colour stats
            if (typeof pokeIndex['possibleFormsColors'] !== 'undefined'
                && (numAdded > 0 || pokeToken === preloadToken)){
                //console.log('--- colors needed w/ '+addedPokemonByEvoLineNumber[pokeIndex.evoLineNumber]+' related units on-field');

                // Loop through and calculate likelihood of each pattern
                var colorizedFormToken = '';
                var possibleFormsColors = pokeIndex['possibleFormsColors'];
                var possibleFormsColorsTokens = Object.keys(possibleFormsColors);
                var possibleFormsChances = {};
                for (var key = 0; key < possibleFormsColorsTokens.length; key++){
                    var formToken = possibleFormsColorsTokens[key];
                    var formChance = 0;
                    var formColors = possibleFormsColors[formToken];
                    for (var i = 0; i < formColors.length; i++){
                        var formColor = formColors[i];
                        if (typeof currentColourStats[formColor] !== 'undefined'){
                            formChance += currentColourStats[formColor] / formColors.length;
                            }
                        }
                    possibleFormsChances[formToken] = formChance;
                    }
                var possibleFormRanking = getSortedKeys(possibleFormsChances);
                //console.log('--- possibleFormsColors = ', possibleFormsColors);
                //console.log('--- possibleFormsChances = ', possibleFormsChances);
                //console.log('--- possibleFormRanking = ', possibleFormRanking);

                // Update the current pattern var with the top result
                colorizedFormToken += possibleFormRanking[0];
                //console.log('---> colorizedFormToken = ', colorizedFormToken);

                // If this pokemon's forms are also decorated, make sure we append that too
                if (typeof pokeIndex['decoratedForms'] !== 'undefined'
                    && pokeIndex['decoratedForms'] === true
                    && typeof pokeIndex['possibleDecorationsColors'] !== 'undefined'){

                    // Loop through and calculate likelihood of each pattern
                    var possibleDecorationsColors = pokeIndex['possibleDecorationsColors'];
                    var possibleDecorationsColorsTokens = Object.keys(possibleDecorationsColors);
                    var possibleDecorationsChances = {};
                    for (var key = 0; key < possibleDecorationsColorsTokens.length; key++){
                        var decorationToken = possibleDecorationsColorsTokens[key];
                        var decorationChance = 0;
                        var decorationColors = possibleDecorationsColors[decorationToken];
                        for (var i = 0; i < decorationColors.length; i++){
                            var decorationColor = decorationColors[i];
                            if (typeof currentColourStats[decorationColor] !== 'undefined'){
                                decorationChance += currentColourStats[decorationColor] / decorationColors.length;
                                }
                            }
                        possibleDecorationsChances[decorationToken] = decorationChance;
                        }
                    var possibleDecorationRanking = getSortedKeys(possibleDecorationsChances);
                    //console.log('--- possibleDecorationsColors = ', possibleDecorationsColors);
                    //console.log('--- possibleDecorationsChances = ', possibleDecorationsChances);
                    //console.log('--- possibleDecorationRanking = ', possibleDecorationRanking);

                    // Update the current pattern var with the top result
                    colorizedFormToken += '-x-' + possibleDecorationRanking[possibleDecorationRanking.length - 1];
                    //console.log('---> colorizedFormToken = ', colorizedFormToken);

                    }

                // Update the current pattern var with the top result
                currentColorizedForms[pokeToken] = colorizedFormToken;
                //console.log('---> currentColorizedForms['+pokeToken+'] = ', currentColorizedForms[pokeToken]);

                }

            }

        //console.log('| NEW ', {colorizedFormsRequired: colorizedFormsRequired, currentColorizedForms: currentColorizedForms});
        //console.log('----->>\n');
    }

    // Define a function for updating growth cycles
    var pendingTradePartnerTokens = [];
    var pendingTradePartnerIDs = [];
    var pendingEvolutionLimits = {};
    function updateGrowthCycles(){

        // Do not update egg cycles on day zero
        if (thisZoneData.day === 0){ return false; }

        // Collect references to current zone stats
        var currentZoneStats = thisZoneData.currentStats;
        var currentZoneFlags = thisZoneData.currentFlags;
        var currentTypeStats = currentZoneStats['types'];
        var currentClassStats = currentZoneStats['class'];
        var currentSpeciesStats = currentZoneStats['species'];
        var currentColourStats = thisZoneData.currentStats['colors'];
        var currentBaseStats = currentZoneStats['baseStats'];

        // Define a variable to hold (temporary) allowed trade evolutions this cycle
        var allowedTradeEvolutions = {};

        // Reset the pending evolution limits array so we can refil if necessary
        pendingEvolutionLimits = {};
        // //console.log('\n----------\nresetting pendingEvolutionLimits =', pendingEvolutionLimits);

        // Define variables nessary for calculating color forms and collect data
        var colorKey = 0;
        var topColor = '';
        var topColors = [];
        var colorStats = currentZoneStats['colors'];
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
        // //console.log('colorStats = ', colorStats);
        // //console.log('colorStatsRounded = ', colorStatsRounded);
        // //console.log('topColor = ', topColor);
        // //console.log('topColors = ', topColors);
        // //console.log('topColorsCount = ', topColorsCount);
        // //console.log('maxTopColorsKey = ', maxTopColorsKey);

        // Collect refs to zone stats and special energy/power counters
        var currentUltraEnergy = typeof currentZoneStats['currentUltraEnergy'] !== 'undefined' ? currentZoneStats['currentUltraEnergy'] : 0;
        var totalUltraEnergy = typeof currentZoneStats['totalUltraEnergy'] !== 'undefined' ? currentZoneStats['totalUltraEnergy'] : 0;
        var currentAncientPower = typeof currentZoneStats['currentAncientPower'] !== 'undefined' ? currentZoneStats['currentAncientPower'] : 0;
        var totalAncientPower = typeof currentZoneStats['totalAncientPower'] !== 'undefined' ? currentZoneStats['totalAncientPower'] : 0;
        var currentGigantamaxNum = typeof currentClassStats['gigantamax'] !== 'undefined' ? currentClassStats['gigantamax'] : 0;

        // First, loop through all the non-egg pokemon and increment growth cycle
        if (thisZoneData.currentPokemon.length){
            for (var key = 0; key < thisZoneData.currentPokemon.length; key++){

                var pokemonInfo = thisZoneData.currentPokemon[key];
                var indexInfo = PokemonSpeciesIndex[pokemonInfo.token];
                // //console.log('-----\nChecking evolution data for ' + pokemonInfo.token, pokemonInfo, indexInfo);

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
        var newPokemonThisCycle = {};
        if (thisZoneData.currentPokemon.length){
            for (var key = 0; key < thisZoneData.currentPokemon.length; key++){

                // Collect this Pokemon's local/current and index info from the DB
                var pokemonInfo = thisZoneData.currentPokemon[key];
                var indexInfo = PokemonSpeciesIndex[pokemonInfo.token];
                // //console.log('-----\nChecking evolution data for ' + pokemonInfo.token, pokemonInfo, indexInfo);

                // Collect this Pokemon's life points and adjust if necessary
                var pokemonLifePoints = indexInfo.lifePoints;
                if (typeof pokemonInfo.lifePoints !== 'undefined'){ pokemonLifePoints = pokemonInfo.lifePoints; }

                // SPECIAL BOX EFFECT : Increase lifepoints of select class if flag is active
                if (thisZoneData.currentEffects['babyLifeBoost'] === true
                    && typeof indexInfo.isBabyPokemon !== 'undefined'
                    && indexInfo.isBabyPokemon === true){
                    pokemonLifePoints *= 2; // double life points for baby
                    }

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
                    if (indexInfo.formClasses.indexOf('seasonal-variant') !== -1
                        && thisZoneData.season.length){
                        if (typeof indexInfo.possibleFormsTriggers !== 'undefined'
                            && typeof indexInfo.possibleFormsTriggers[thisZoneData.season] !== 'undefined'){
                            pokemonInfo.formToken = indexInfo.possibleFormsTriggers[thisZoneData.season];
                            } else {
                            pokemonInfo.formToken = thisZoneData.season;
                            }
                        }

                    // If seasonal variant, change the form based on the current month
                    if (indexInfo.formClasses.indexOf('monthly-variant') !== -1
                        && typeof pokemonInfo.birthMonth !== 'undefined'
                        && thisZoneData.date.month > 0){

                        if (typeof indexInfo['altMonthlyForms'] !== 'undefined'
                            && indexInfo['altMonthlyForms'] === true){

                            var altKey = pokemonInfo.birthMonth % 2 === thisZoneData.date.month % 2 ? 0 : 1;
                            pokemonInfo.formToken = indexInfo['possibleForms'][altKey];

                            }

                        }

                    // If colorized variant, change the form based on the current top color
                    if (indexInfo.formClasses.indexOf('color-variant') !== -1
                        && topColor.length){
                        colorKey++;
                        if (topColors.length > 1){
                            var keyMod = colorKey % topColorsCount;
                            // //console.log('colorKey = '+ colorKey +' | topColorsCount = '+ topColorsCount +' | keyMod = '+ keyMod);
                            pokemonInfo.formToken = topColors[keyMod];
                            } else {
                            pokemonInfo.formToken = topColor;
                            }
                        }

                    // If field variant, change the form based on the current biome
                    if (indexInfo.formClasses.indexOf('field-variant') !== -1
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
                    if (indexInfo.formClasses.indexOf('type-variant') !== -1){
                        if (typeof indexInfo.possibleFormsTriggers !== 'undefined'){ var possibleFormsTriggers = indexInfo.possibleFormsTriggers; }
                        else { var possibleFormsTriggers = defaultTypeFormTriggers; }
                        var triggerTokens = Object.keys(possibleFormsTriggers);
                        var newFormToken = pokemonInfo.formToken;
                        // Check if type appeal exists yet, else simply collect the base form
                        var typeAppealDiff = sumValues(thisZoneData.currentStats['types']);
                        var typeAppealExists = typeof typeAppealDiff === 'number' && typeAppealDiff !== 0 ? true : false;
                        // //console.log('thisZoneData.currentStats[\'types\'] = ', thisZoneData.currentStats['types']);
                        // //console.log('typeAppealDiff = ', typeAppealDiff);
                        // //console.log('typeAppealExists = ', typeAppealExists);
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
                    var possibleNextEvolutions = indexInfo.nextEvolutions.slice(0);
                    var numRelatedPokemon = countRelatedZonePokemon(pokemonInfo.token);
                    var numSamePokemon = typeof currentSpeciesStats[pokemonInfo.token] !== 'undefined' ? currentSpeciesStats[pokemonInfo.token] : 1;
                    // //console.log('|- possibleNextEvolutions = ', possibleNextEvolutions);
                    // //console.log('|- numRelatedPokemon = ', numRelatedPokemon);
                    // //console.log('|- numSamePokemon = ', numSamePokemon);

                    // Check if this pokemon is happy based on field multipliers that match its type(s)
                    var pokemonHappiness = 0;
                    if (currentTypeStats[pokemonInfo.types[0]] > 0){ pokemonHappiness += Math.ceil(currentTypeStats[pokemonInfo.types[0]] / 10); }
                    else if (currentTypeStats[pokemonInfo.types[0]] < 0){ pokemonHappiness -= Math.ceil(currentTypeStats[pokemonInfo.types[0]] / 5); }
                    if (typeof pokemonInfo.types[1] !== 'undefined'){
                        if (currentTypeStats[pokemonInfo.types[1]] > 0){ pokemonHappiness += Math.ceil(currentTypeStats[pokemonInfo.types[1]] / 10); }
                        else if (currentTypeStats[pokemonInfo.types[1]] < 0){ pokemonHappiness -= Math.ceil(currentTypeStats[pokemonInfo.types[1]] / 5); }
                        }
                    // //console.log('|- pokemonHappiness = ', pokemonHappiness);

                    // Check to see if this pokemon is allowed to evolve by trade this cycle
                    var allowTradeEvolution = false;
                    if (typeof allowedTradeEvolutions[pokemonInfo.token] === 'undefined'){
                        allowTradeEvolution = numSamePokemon % 2 == 0 ? true : false;
                        allowedTradeEvolutions[pokemonInfo.token] = allowTradeEvolution;
                        } else {
                        allowTradeEvolution = allowedTradeEvolutions[pokemonInfo.token];
                        }
                    // //console.log('|- allowTradeEvolution = ', allowTradeEvolution);

                    // Check to see if Eternatus is active and/or in its Gigantamax form
                    var eternatusIsActive = false;
                    var emaxEternatusIsActive = false;
                    if (typeof currentZoneStats['species']['eternatus'] !== 'undefined' && currentZoneStats['species']['eternatus'] > 0){ eternatusIsActive = true; }
                    if (typeof currentZoneStats['species']['emax-eternatus'] !== 'undefined' && currentZoneStats['species']['emax-eternatus'] > 0){ eternatusIsActive = true; emaxEternatusIsActive = true; }

                    // If this pokemon has a Gigantamax form AND has the necessary gene and isn't about to faint, remove other evos
                    var hasGigantamaxForm = false;
                    var hasGigantamaxFactor = false;
                    if (pokemonInfo.growthCycles >= (pokemonLifePoints / 2)){
                        for (var i = 0; i < possibleNextEvolutions.length; i++){
                            if (hasGigantamaxForm && hasGigantamaxFactor){ break; }
                            var nextEvolution = possibleNextEvolutions[i];
                            var nextEvolutionInfo = PokemonSpeciesIndex[nextEvolution.species];
                            for (j = 1; j <= 3; j++){
                                var m = j > 0 ? (j + 1) : '';
                                if (nextEvolution['method'+m] === 'gigantamax-factor'){
                                    hasGigantamaxForm = true;
                                    var gigantamaxFactor = nextEvolution['value'+m];
                                    if ((pokemonInfo.sid % gigantamaxFactor) === 0){
                                        nextEvolution['value'+m] = gigantamaxFactor;
                                        hasGigantamaxFactor = true;
                                        possibleNextEvolutions = [];
                                        possibleNextEvolutions.push(nextEvolution);
                                        break;
                                        }
                                    }
                                }
                            }
                        }
                    // //console.log('hasGigantamaxForm =', hasGigantamaxForm);
                    // //console.log('hasGigantamaxFactor =', hasGigantamaxFactor);
                    // //console.log('|- possibleNextEvolutions = ', possibleNextEvolutions);

                    // Define a function for testing if an evolution method is true
                    var switchKind = 'and';
                    var fusionPokemonToBeRemoved = false;
                    function calculateEvolutionChance(pokemonInfo, methodToken, methodValue, methodNum, nextEvolution, prevChanceValue){
                        // //console.log('|-- calculateEvolutionChance('+pokemonInfo.token+'/'+pokemonInfo.id+', '+methodToken+', '+methodValue+', ...)');
                        // //console.log('|-- calculateEvolutionChance(pokemonInfo, methodToken, methodValue, methodNum, nextEvolution, prevChanceValue)', pokemonInfo, methodToken, methodValue, methodNum, nextEvolution, prevChanceValue);

                        // Define reference to species count var
                        var currentSpeciesStats = thisZoneData.currentStats['species'];

                        // Collect the token for this next potential species
                        var nextSpeciesToken = nextEvolution['species'];
                        var nextSpeciesCount = typeof currentSpeciesStats[nextSpeciesToken] !== 'undefined' ? currentSpeciesStats[nextSpeciesToken] : 0;

                        // Calculate chance value in case we need it
                        var chanceValue = Math.seededRandomChance();

                        /*
                        // If this pokemon is going to Gigantamax, prevent all other evos
                        if (hasGigantamaxForm
                            && hasGigantamaxFactor
                            && methodToken !== 'burst-evolution'
                            && methodToken !== 'gigantamax-factor'){
                            return 0;
                        }
                        */

                        // Level-up evolutions are triggered by current growth cycles alone
                        if (methodToken === 'level-up'){
                            // //console.log('checking level-up for '+pokemonInfo.token+'/'+pokemonInfo.id+' \n| currentLevel =', pokemonInfo.growthCycles, '| requiredLevel = ', methodValue);
                            if (pokemonInfo.growthCycles >= methodValue){
                                // //console.log('success! '+pokemonInfo.token+'/'+pokemonInfo.id+' level-up into '+nextSpeciesToken+' allowed');
                                return 1;
                                }
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

                        // Royalty-based evolutions trigger if there are enough relatives but a leader doesn't exist yet
                        if (methodToken === 'royal-ascension'){
                            // //console.log('checking royal-ascension for '+pokemonInfo.token+'/'+pokemonInfo.id+'/'+pokemonInfo.gender+' ');
                            // //console.log('-- nextSpeciesToken =', nextSpeciesToken, '| numRelatedPokemon = ', numRelatedPokemon, '| nextSpeciesCount =', nextSpeciesCount);
                            if (numRelatedPokemon >= methodValue){
                                var existingKingOrQueen = getZonePokemonByFilter({token:nextSpeciesToken,gender:pokemonInfo.gender});
                                var existingMegaKingOrQueen = getZonePokemonByFilter({token:'mega-'+nextSpeciesToken,gender:pokemonInfo.gender});
                                // //console.log('-- existingKingOrQueen =', existingKingOrQueen, '| existingMegaKingOrQueen =', existingMegaKingOrQueen);
                                if (!existingKingOrQueen.length
                                    && !existingMegaKingOrQueen.length){
                                    // //console.log('-- success! '+pokemonInfo.token+'/'+pokemonInfo.id+'/'+pokemonInfo.gender+' royal-ascension into '+nextSpeciesToken+'/'+pokemonInfo.id+'/'+pokemonInfo.gender+' allowed');
                                    pendingEvolutionLimits[nextSpeciesToken+'/'+pokemonInfo.gender] = 1;
                                    // //console.log('-- new pendingEvolutionLimits =', pendingEvolutionLimits);
                                    return 1 + (numRelatedPokemon * 100);
                                    }
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

                        // Type-value evolutions always trigger but with variable chance values
                        if (methodToken === 'type-value'){
                            var returnValue = 0;
                            var appealTypes = typeof methodValue === 'string' ? [methodValue] : methodValue;
                            for (var i = 0; i < appealTypes.length; i++){
                                var appealType = appealTypes[i];
                                var appealValue = currentTypeStats[appealType];
                                returnValue += appealValue;
                                }
                            return returnValue;
                            }

                        // Inverse-Type-value evolutions always trigger but with variable chance values
                        if (methodToken === 'inverse-type-value'){
                            var returnValue = 0;
                            var appealTypes = typeof methodValue === 'string' ? [methodValue] : methodValue;
                            for (var i = 0; i < appealTypes.length; i++){
                                var appealType = appealTypes[i];
                                var appealValue = currentTypeStats[appealType];
                                returnValue += appealValue * -1;
                                }
                            return returnValue;
                            }

                        // Type-vs-type evolutions trigger when type1 is greater than type2
                        if (methodToken === 'type-vs-type'){
                            var appealTypes = typeof methodValue === 'string' ? [methodValue] : methodValue;
                            var typeValue1 = currentTypeStats[appealTypes[0]];
                            var typeValue2 = currentTypeStats[appealTypes[1]];
                            if (typeValue1 > typeValue2){ return 1 + (typeValue1 - typeValue2); }
                            else if (typeValue1 < typeValue2){ return -1 + (typeValue1 - typeValue2); }
                            else { return 0; }
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

                        // Type-appeal/crisis evolutions trigger when the relevant field stats are especially high
                        if (methodToken === 'type-stable'){
                            var appealTypes = typeof methodValue === 'string' ? [methodValue] : methodValue;
                            var typeIsStable = true;
                            for (var i = 0; i < appealTypes.length; i++){
                                var appealType = appealTypes[i];
                                if (currentTypeStats[appealType] <= -20
                                    && currentTypeStats[appealType] >= 20){
                                    typeIsStable = false;
                                    }
                                }
                            return typeIsStable ? 1 : 0;
                            }

                        // Stat-appeal evolutions trigger when the relevant base stats are especially high
                        if (methodToken === 'stat-appeal'
                            || methodToken === 'stat-surge'){
                            var appealLevel = methodToken === 'stat-surge' ? 2 : 1;
                            var appealTypes = typeof methodValue === 'string' ? [methodValue] : methodValue;
                            var returnValue = 0;
                            for (var i = 0; i < appealTypes.length; i++){
                                var appealType = appealTypes[i];
                                if (currentBaseStats[appealType] >= 0){
                                    returnValue += 1 + (currentBaseStats[appealType] * appealLevel);
                                    }
                                }
                            if (returnValue > 0){ return returnValue; }
                            }

                        // Stat-appeal evolutions trigger when the relevant base colors are especially high
                        if (methodToken === 'color-appeal'
                            || methodToken === 'color-surge'){
                            var appealLevel = methodToken === 'color-surge' ? 2 : 1;
                            var appealColours = typeof methodValue === 'string' ? [methodValue] : methodValue;
                            var returnValue = 0;
                            for (var i = 0; i < appealColours.length; i++){
                                var appealColour = appealColours[i];
                                if (currentColourStats[appealColour] >= 0){
                                    returnValue += 1 + (currentColourStats[appealColour] * appealLevel);
                                    }
                                }
                            if (returnValue > 0){ return returnValue; }
                            }

                        // Class-appeal evolutions trigger when the relevant class has a high number of pokemon represented
                        if (methodToken === 'class-exists'
                            || methodToken === 'class-appeal'
                            || methodToken === 'class-surge'){
                            var appealLevel = methodToken === 'class-surge' ? 2 : 1;
                            var appealTypes = typeof methodValue === 'string' ? [methodValue] : methodValue;
                            var returnValue = 0;
                            for (var i = 0; i < appealTypes.length; i++){
                                var appealType = appealTypes[i];
                                if (methodToken === 'class-exists' && currentClassStats[appealType] >= 0){
                                    returnValue += 1 + (currentClassStats[appealType] * appealLevel);
                                    } else if (currentClassStats[appealType] >= (appealLevel * 20)){
                                    returnValue += 1 + ((currentClassStats[appealType] * 5) * appealLevel);
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
                                } else if (typeof currentSpeciesStats[partnerToken] !== 'undefined'
                                && currentSpeciesStats[partnerToken] > 0){
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
                            && typeof currentSpeciesStats[methodValue] !== 'undefined'
                            && currentSpeciesStats[methodValue] > 0){
                            return 1;
                            }

                        // Fusion-based evolutions trigger if one of the other species is on the field
                        if (methodToken === 'fusion-species'
                            && typeof currentSpeciesStats[methodValue] !== 'undefined'
                            && currentSpeciesStats[methodValue] > 0){

                            // If the previous method was unsuccessful, return now
                            if (methodNum > 1 && prevChanceValue === 0){ return 0; }
                            // //console.log('pokemonInfo.token = ', pokemonInfo.token);
                            // //console.log('methodToken = ', methodToken);
                            // //console.log('methodValue = ', methodValue);
                            // //console.log('methodNum = ', methodNum);
                            // //console.log('prevChanceValue = ', prevChanceValue);

                            // Find a copy of the other species to merge with, then remove it from play
                            var possibleFusions = getZonePokemonByToken(methodValue);
                            possibleFusions.sort(function(a, b){ return a.growthCycles > b.growthCycles ? -1 : (a.growthCycles < b.growthCycles ? 1 : 0); });
                            // //console.log('possibleFusions = ', possibleFusions);

                            // Collect the fusion pokemon if set
                            var fusionPokemon = possibleFusions[0];
                            // //console.log('fusionPokemon = ', fusionPokemon);
                            if (fusionPokemon.id === pokemonInfo.id){
                                if (possibleFusions.length > 1){ fusionPokemon = possibleFusions[1]; }
                                else { fusionPokemon = false; }
                                // //console.log('fusionPokemon(B) = ', fusionPokemon);
                                }

                            // If a fusion was collected, return now
                            if (fusionPokemon !== false){
                                fusionPokemonToBeRemoved = fusionPokemon;
                                return 1 + currentSpeciesStats[methodValue];
                                }

                            }

                        // Ultra-energy evolutions trigger when there's enough ultra energy in the box
                        if (methodToken === 'ultra-energy'
                            && ((methodValue === 'high' && currentUltraEnergy >= 6)
                            || (methodValue === 'low' && currentUltraEnergy < 3)
                            || (methodValue === 'none' && currentUltraEnergy === 0))){
                            return 1 + (currentUltraEnergy * 100);
                            }

                        // Extinction-based evolutions trigger when this pokemon is the last  of its species
                        if (methodToken === 'extinction'
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
                            && (
                                (typeof methodValue === 'string' && thisZoneData.season === methodValue)
                                || (Array.isArray(methodValue) && methodValue.indexOf(thisZoneData.season) !== -1)
                                )){
                            return 1;
                            }

                        // Nth-of-ID evolutions are triggered immediately if the pokemon's ID is multiple of value
                        if (methodToken === 'nth-of-id'
                            && pokemonInfo.id % methodValue === 0){
                            return 1;
                            }

                        // Nth-of-SID evolutions are triggered immediately if the pokemon's SID is multiple of value
                        if (methodToken === 'nth-of-sid'
                            && (pokemonInfo.sid % methodValue) === 0){
                            return 1;
                            }

                        // Gigantamax forms are triggered immediately if the pokemon's SID is multiple of a value and no others exist ATM
                        if (methodToken === 'gigantamax-factor'
                            && (pokemonInfo.sid % methodValue) === 0
                            && (currentGigantamaxNum === 0 || eternatusIsActive)
                            ){
                            //console.log(pokemonInfo.token+' | ', 'methodToken =', methodToken, 'pokemonInfo.sid =', pokemonInfo.sid, 'methodValue =', methodValue, 'currentGigantamaxNum =', currentGigantamaxNum);
                            //console.log('gigantamax-factor TRIGGERED!');
                            return 1 + methodValue;
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
                        if ((methodToken === 'mega-evolution'
                            || methodToken === 'burst-evolution')
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
                    for (var i = 0; i < possibleNextEvolutions.length; i++){

                        // Collect the details of the next evolution
                        var nextEvolution = possibleNextEvolutions[i];
                        var nextEvolutionInfo = PokemonSpeciesIndex[nextEvolution.species];

                        // Define vars to count the number of trigged evos and switch type
                        var totalMethods = 0;
                        var triggeredMethods = 0;
                        var forceEvo = false;
                        if (typeof nextEvolution.switch !== 'undefined'){
                            switchKind = nextEvolution.switch;
                            } else {
                            switchKind = 'and';
                            if (pokemonInfo.reachedAdulthood === true
                                && (nextEvolution.method === 'mega-evolution'
                                    || nextEvolution.method === 'primal-reversion')){
                                switchKind = 'or';
                                }
                            }

                        // //console.log('|- Checking possibleNextEvolutions['+i+'] = ', nextEvolution, nextEvolutionInfo, 'switchKind:'+switchKind);

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
                                // //console.log('Checking method #'+m+' for '+indexInfo.token+'... | totalMethods = ', totalMethods);

                                var methodToken = nextEvolution['method'+mt];
                                var methodValue = nextEvolution['value'+mt];
                                // //console.log('|-- methodToken = ', methodToken);
                                // //console.log('|-- methodValue = ', methodValue);

                                // Calculate the chance value based on the evo type (always allow level-up evos)
                                var chanceValue = 0;
                                if (methodToken === 'level-up'
                                    || !onlyLevelUpEvolutions){
                                    var chanceValue = calculateEvolutionChance(pokemonInfo, methodToken, methodValue, m, nextEvolution, prevChanceValue);
                                    }
                                // //console.log('|-- chanceValue = ', chanceValue);

                                if (chanceValue > 0){

                                    triggeredMethods++;
                                    triggeredChance += chanceValue;
                                    // //console.log('|-- totalMethods++; | totalMethods = ', totalMethods);
                                    // //console.log('|-- triggeredChance += '+chanceValue+'; | triggeredChance = ', triggeredChance);

                                    }

                                prevMethodToken = methodToken;
                                prevMethodValue = methodValue;
                                prevChanceValue = chanceValue;

                                if (switchKind === 'and'
                                    && chanceValue === 0
                                    && forceEvo !== true){
                                    break;
                                    }

                                } else {
                                break;
                                }
                            }

                        // If both methods were triggered, we can queue this evolution
                        if ((switchKind === 'and' && triggeredMethods === totalMethods)
                            || (switchKind === 'or' && triggeredMethods > 0)
                            || (forceEvo === true)){

                            // Default to true for allowing this evo
                            var allowEvo = true;

                            // If there are limits on the number of a specific evo right now, check if we need to block
                            // //console.log('current pendingEvolutionLimits = ', pendingEvolutionLimits);

                            var nextEvoSpecies = nextEvolution.species;
                            var nextEvoSpeciesAndGender = nextEvoSpecies+'/'+pokemonInfo.gender;
                            var nextEvoLimit = 0;
                            if (typeof pendingEvolutionLimits[nextEvoSpeciesAndGender] !== 'undefined'){ nextEvoLimit = pendingEvolutionLimits[nextEvoSpeciesAndGender]; }
                            //else if (typeof pendingEvolutionLimits[nextEvoSpecies] !== 'undefined'){ nextEvoLimit = pendingEvolutionLimits[nextEvoSpecies]; }

                            // //console.log('nextEvoSpecies = ', nextEvoSpecies, '| nextEvoSpeciesAndGender = ', nextEvoSpeciesAndGender, '| nextEvoLimit =', nextEvoLimit);
                            // //console.log('-- nextEvoSpeciesAndGender = ', nextEvoSpeciesAndGender, '| nextEvoLimit =', nextEvoLimit);

                            if (nextEvoLimit > 0){
                                var numExistingNextSpecies = 0;

                                if (typeof currentSpeciesStats[nextEvoSpeciesAndGender] !== 'undefined'){ numExistingNextSpecies += currentSpeciesStats[nextEvoSpeciesAndGender]; }
                                //else if (typeof currentSpeciesStats[nextEvoSpecies] !== 'undefined'){ numExistingNextSpecies += currentSpeciesStats[nextEvoSpecies]; }
                                // //console.log('- currentSpeciesStats['+nextEvoSpeciesAndGender+'] = ', currentSpeciesStats[nextEvoSpeciesAndGender]);
                                // //console.log('- currentSpeciesStats['+nextEvoSpecies+'] = ', currentSpeciesStats[nextEvoSpecies]);

                                if (typeof newPokemonThisCycle[nextEvoSpeciesAndGender] !== 'undefined'){ numExistingNextSpecies += newPokemonThisCycle[nextEvoSpeciesAndGender]; }
                                //else if (typeof newPokemonThisCycle[nextEvoSpecies] !== 'undefined'){ numExistingNextSpecies += newPokemonThisCycle[nextEvoSpecies]; }
                                // //console.log('- newPokemonThisCycle['+nextEvoSpeciesAndGender+'] = ', newPokemonThisCycle[nextEvoSpeciesAndGender]);
                                // //console.log('- newPokemonThisCycle['+nextEvoSpecies+'] = ', newPokemonThisCycle[nextEvoSpecies]);

                                // //console.log('numExistingNextSpecies = ', numExistingNextSpecies);

                                if (numExistingNextSpecies >= nextEvoLimit){
                                    allowEvo = false;
                                    }
                                }

                            // If allowed, we can proceed with queueing the current evo
                            // //console.log('allowEvo = ', allowEvo, '\n-------------');
                            if (allowEvo){
                                var queuedEvolution = {token: nextEvolution.species, types: nextEvolutionInfo.types, chance: triggeredChance};
                                if (typeof nextEvolution.form !== 'undefined'){ queuedEvolution.form = nextEvolution.form; }
                                if (fusionPokemonToBeRemoved !== false){ queuedEvolution.fusion = [fusionPokemonToBeRemoved.id, fusionPokemonToBeRemoved.sid]; }
                                if (typeof nextEvolution.castoff !== 'undefined'){ queuedEvolution.castoff = nextEvolution.castoff; }
                                queuedEvolutions.push(queuedEvolution);
                                }

                            }

                        }

                    // If evolutions were queues, sort by chance and pick first
                    if (queuedEvolutions.length > 0){

                        // Sort the evolution possibilities by highest chance, then pick first
                        // //console.log('<< queuedEvolutions for '+pokemonInfo.token+' = ', 'pokemonInfo:'+JSON.stringify(pokemonInfo), 'queuedEvolutions:'+JSON.stringify(queuedEvolutions));
                        queuedEvolutions.sort(function(a, b){
                            if (a.chance > b.chance){ return -1; }
                            else if (a.chance < b.chance){ return 1; }
                            else { return 0; }
                            });
                        var selectedEvolution = queuedEvolutions[0];
                        var selectedEvolutionData = PokemonSpeciesIndex[selectedEvolution.token];
                        // //console.log('<< selectedEvolution = ', selectedEvolution);
                        // //console.log('<< selectedEvolutionData = ', selectedEvolutionData);

                        // Create an entry for this species and in the global count if not exists
                        var evolvedPokemonSpecies = thisZoneData.evolvedPokemonSpecies;
                        if (typeof evolvedPokemonSpecies[pokemonInfo.token] === 'undefined'){ evolvedPokemonSpecies[pokemonInfo.token] = 0; }
                        evolvedPokemonSpecies[pokemonInfo.token]++;

                        // Create or update an entry for new pokemon this cycle
                        if (typeof newPokemonThisCycle[selectedEvolution.token] === 'undefined'){ newPokemonThisCycle[selectedEvolution.token] = 0; }
                        newPokemonThisCycle[selectedEvolution.token]++;
                        // //console.log('newPokemonThisCycle = ', newPokemonThisCycle);

                        // And then apply the evolution to the pokemon's data
                        var backupToken = pokemonInfo.token;
                        pokemonInfo.token = selectedEvolution.token;
                        pokemonInfo.types = selectedEvolution.types;
                        pokemonInfo.growthCooldown += 10;

                        // If the selected evolution is a dynamax/gigantamax, increment the counter
                        if (selectedEvolutionData.class === 'gigantamax'
                            || (typeof selectedEvolutionData.class2 !== 'undefined' && selectedEvolutionData.class2 === 'gigantamax')){
                            currentGigantamaxNum += 1;
                            //console.log('currentGigantamaxNum = ', currentGigantamaxNum);
                            }

                        if (colorizedFormsRequired.indexOf(selectedEvolution.token) !== -1){
                            //console.log('(!!!) upcoming ', selectedEvolution.token, ' needs a colorized form (', selectedEvolutionData.colorizedForms, ')! ', currentColorizedForms);
                            //console.log('(...) we should use ', currentColorizedForms[selectedEvolution.token], ' !');
                        }

                        // If the selected evolution is colorized and we have one available, use it now
                        if (typeof selectedEvolutionData.colorizedForms !== 'undefined'
                            && selectedEvolutionData.colorizedForms === true){
                            //console.log(selectedEvolution.token, ' colorizedForms === true and ', currentColorizedForms[selectedEvolution.token]);
                            if (typeof currentColorizedForms[selectedEvolution.token] !== 'undefined'
                                && currentColorizedForms[selectedEvolution.token].length > 0){
                                pokemonInfo.formToken = currentColorizedForms[selectedEvolution.token];
                                } else if (typeof selectedEvolutionData.baseForm !== 'undefined') {
                                pokemonInfo.formToken =  selectedEvolutionData.baseForm;
                                }
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
                        // Otherwise if the evolution data came with its own form
                        else if (typeof selectedEvolution.form !== 'undefined'){
                            pokemonInfo.formToken = selectedEvolution.form;
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
                        if (hiddenPokemonTokens.indexOf(selectedEvolution.token) === -1){
                            if (typeof PokemonSpeciesSeen[selectedEvolution.token] === 'undefined'){ PokemonSpeciesSeen[selectedEvolution.token] = 0; }
                            PokemonSpeciesSeen[selectedEvolution.token]++;
                            }

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
                            removePokemonByID(selectedEvolution.fusion[0]);

                            // Update this pokemon's SID with that of the fusion component if lower
                            if (pokemonInfo.sid < selectedEvolution.fusion[1]){ pokemonInfo.sid = selectedEvolution.fusion[1]; }

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
                    if (indexInfo.formClasses.indexOf('gigantamax-form') !== -1){
                        pokemonInfo.growthCycles -= 1; // last as long as possible
                        } else {
                        pokemonInfo.growthCycles -= Math.ceil(pokemonLifePoints * 0.10);
                        }
                    if (pokemonInfo.growthCycles < 0){ pokemonInfo.growthCycles = 0; }
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

        // Check to see if we're at high (99%) zone capacity already
        var currentZoneStats = thisZoneData.currentStats;
        var currentTypeStats = currentZoneStats['types'];
        var currentSpeciesStats = currentZoneStats['species'];
        var zoneCapacityPercent = ((thisZoneData.currentPokemon.length / thisZoneData.capacity) * 100);
        var zoneIsOvercrowded = zoneCapacityPercent >= 99 ? true : false;
        var zoneMaxColonySize = Math.ceil(thisZoneData.size / 3);
        // //console.log('zoneCapacityPercent = ', zoneCapacityPercent);
        // //console.log('zoneIsOvercrowded = ', zoneIsOvercrowded);

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
        // //console.log('pokeSpecies = ', pokeSpecies);

        // Loop through species and check to see if any should breed
        if (!jQuery.isEmptyObject(pokeSpecies)){

            // Collect a list of species tokens sorted by speed stat
            //var sortedSpeciesTokens = sortSpeciesTokensBySpeed(Object.keys(pokeSpecies));
            var sortedSpeciesTokens = sortSpeciesTokensByBreedPoints(Object.keys(pokeSpecies));
           // //console.log('----------\nChecking breeding options for sortedSpeciesTokens', sortedSpeciesTokens);

            // Pre-count the number of Ditto on the field
            var existingDitto = typeof pokeSpecies['ditto'] !== 'undefined' ? pokeSpecies['ditto']['none'] : 0;
            var existingSuperDitto = 0;
            if (typeof pokeSpecies['super-ditto'] !== 'undefined'){
                existingDitto += pokeSpecies['super-ditto']['none'];
                existingSuperDitto += pokeSpecies['super-ditto']['none'];
                }

            // Pre-count the number of Arceus on the field
            var existingArceus = typeof pokeSpecies['arceus'] !== 'undefined' ? pokeSpecies['arceus']['none'] : 0;
            // //console.log('existingArceus = ', existingArceus);

            // Prevent breeding of these special exception species
            var preventBreeding = ['zygarde-cell', 'shadow-variant', 'shining-variant'];

            // Define a list of pokemon that have overpopulated and need to cool it
            var currentSpeciesTokens = Object.keys(currentSpeciesStats);
            var numRelatedPokemonCache = {};
            for (var i = 0; i < currentSpeciesTokens.length; i++){
                var token = currentSpeciesTokens[i];
                var baseToken = PokemonSpeciesIndex[token]['baseEvolution'];
                if (typeof numRelatedPokemonCache[baseToken] === 'undefined'){ numRelatedPokemonCache[baseToken] = countRelatedZonePokemon(baseToken); }
                }

            // First generate an array of eggs to add (by species) with counts
            var eggsToAddIndex = {};
            var eggsToAddCount = 0;
            for (var key = 0; key < sortedSpeciesTokens.length; key++){

                // Collect the token and index info for the species
                var pokeToken = sortedSpeciesTokens[key];
                // //console.log('----------\nChecking breeding options for sortedSpeciesTokens['+key+'] ('+pokeToken+' x'+pokeSpecies[pokeToken]+')');
                var indexInfo = PokemonSpeciesIndex[pokeToken];
               // //console.log('|- ['+ pokeToken +'] indexInfo.lifePoints = ' + indexInfo.lifePoints + ' | indexInfo.breedPoints = ' + indexInfo.breedPoints+ ' | indexInfo.baseStats = ', indexInfo.baseStats);

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

                // Default the legendary breeding flag to false
                var allowLegendaryBreeding = false;

                // Check to see if any conditions allow for legendary breeding
                if ((existingArceus > 0 || (existingDitto > 0 && typeof indexInfo.eggSpecies !== 'undefined'))
                    && preventBreeding.indexOf(pokeToken) === -1
                    && preventBreeding.indexOf(pokeFormClass) === -1
                    ){
                    allowLegendaryBreeding = true;
                    }

                // Skip ahead if this species is incapable of breeding
                if (indexInfo.eggGroups.indexOf('ditto') !== -1){
                    // //console.log(pokeToken+' cannot breed with itself\n-----');
                    continue;
                    } else if (pokeToken === 'arceus'){
                    // //console.log(pokeToken+' cannot breed with itself\n-----');
                    continue;
                    } else if (isLegendary && !allowLegendaryBreeding){
                    // //console.log('legendaries like '+pokeToken+' cannot breed at all\n-----');
                    continue;
                    } else if (!isLegendary && indexInfo.eggGroups.indexOf('undiscovered') !== -1){
                    // //console.log(pokeToken+' cannot breed at all\n-----');
                    continue;
                    }

                var baseEvolution = pokemonGetBaseEvolution(pokeToken, true, false);
                var baseEvolutionInfo = PokemonSpeciesIndex[baseEvolution];
                //console.log('pokeToken('+pokeToken+') | baseEvolution('+baseEvolution+')');

                // If this pokemon is currently prevented from breeding, continue now
                if (numRelatedPokemonCache[baseEvolution] >= zoneMaxColonySize){
                    //console.log(pokeToken+' cannot breed any '+baseEvolution+' due to overcrowding!');
                    //console.log('numRelatedPokemonCache['+baseEvolution+']('+numRelatedPokemonCache[baseEvolution]+') > zoneMaxColonySize('+zoneMaxColonySize+')\n-----');
                    continue;
                    }

                // Define new unit count at zero with an empty token
                var newUnits = 0;
                var newUnitsToken = pokeToken;

                // If this species has a defined egg species, overwrite new unit token
                if (typeof indexInfo.eggSpecies !== 'undefined'){
                    newUnitsToken = indexInfo.eggSpecies;
                    }

                // If this species is NOT single-gender, we can proceed normally, else there's more work
                if (!isLegendary && !indexInfo.hasOneGender){

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
                        var numCompatibleFemales = typeof pokeSpecies[pokeToken]['female'] !== 'undefined' ? pokeSpecies[pokeToken]['female'] : 0;
                        var numCompatibleMales = typeof pokeSpecies[pokeToken]['male'] !== 'undefined' ? pokeSpecies[pokeToken]['male'] : 0;
                        //console.log('|- initial: F=('+numCompatibleFemales+') && M=('+numCompatibleMales+')');
                        var eggPartners = [];
                        if (typeof indexInfo.eggPartner !== 'undefined'){ eggPartners.push(indexInfo.eggPartner); }
                        else if (typeof indexInfo.eggPartners !== 'undefined'){ eggPartners = indexInfo.eggPartners.slice(0); }
                        if (eggPartners.length){
                            for (i = 0; i < eggPartners.length; i++){
                                var partnerToken = eggPartners[i];
                                numCompatibleFemales += typeof pokeSpecies[partnerToken]['female'] !== 'undefined' ? pokeSpecies[partnerToken]['female'] : 0;
                                numCompatibleMales += typeof pokeSpecies[partnerToken]['male'] !== 'undefined' ? pokeSpecies[partnerToken]['male'] : 0;
                                }
                            //console.log('|- w/ eggPartners(', JSON.stringify(eggPartners), '):\n|-- F=('+numCompatibleFemales+') && M=('+numCompatibleMales+')');
                            }
                        if (numCompatibleFemales === numCompatibleMales){
                            var eggGenerators = numCompatibleFemales + numCompatibleMales + existingDitto;
                            var newUnits = Math.floor(eggGenerators / 2);
                            //console.log('|- F=M | eggGenerators('+pokeToken+'/'+eggGenerators+') | newUnits('+newUnits+')');
                        } else if (numCompatibleFemales < numCompatibleMales){
                            var eggGenerators = numCompatibleFemales + existingDitto;
                            var newUnits = Math.min(eggGenerators, numCompatibleMales);
                            //console.log('|- F<M | eggGenerators('+pokeToken+'/'+eggGenerators+') | newUnits('+newUnits+')');
                            //console.log('|- pokeSpecies['+pokeToken+'] = ', pokeSpecies[pokeToken]);
                            //console.log('|- existingDitto = ', existingDitto);
                            //console.log('|- eggGenerators = ', eggGenerators);
                            //console.log('|- newUnits = ', newUnits);
                            } else {
                            var eggGenerators = numCompatibleFemales;
                            var newUnits = Math.min(eggGenerators, numCompatibleMales + existingDitto);
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
                    var eggPartner = indexInfo.token;
                    if (typeof indexInfo['eggPartner'] !== 'undefined'){
                        eggPartner = indexInfo['eggPartner'];
                        //console.log('|- '+pokeToken+' has an egg partner in '+eggPartner+', check pairs');
                        } else if (typeof baseEvolutionInfo['eggPartner'] === 'undefined'){
                        eggPartner = baseEvolutionInfo['eggPartner'];
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

                    if (indexInfo.eggLimit === -1){ var baseToPartnerPairs = Math.max(baseUnits, partnerUnits); }
                    else if (typeof indexInfo.eggLimit !== 'undefined'){ var baseToPartnerPairs = Math.min((baseUnits * indexInfo.eggLimit), partnerUnits); }
                    else { var baseToPartnerPairs = Math.min(baseUnits, partnerUnits); }
                    var baseToPartnerPairs = Math.min(baseUnits, partnerUnits);
                    var leftOverBaseUnits = baseToPartnerPairs < baseUnits ? baseUnits - baseToPartnerPairs : 0;
                    var baseToDittoPairs = existingDitto > 0 ? Math.max(leftOverBaseUnits, existingDitto) : 0;
                    //console.log('|- baseToPartnerPairs('+baseToPartnerPairs+') | leftOverBaseUnits('+leftOverBaseUnits+') | baseToDittoPairs('+baseToDittoPairs+')');

                    newUnits = baseToPartnerPairs + baseToDittoPairs;
                    var currentEggs = baseEvolution !== eggPartner ? (baseEggs + partnerEggs) : baseEggs;
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
                    //console.log('---\nAdding (', newUnits, ') new units...');
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
                        // //console.log('undefined!!!');
                        // //console.log('pokeToken', typeof pokeToken, pokeToken);
                        // //console.log('pokeIndex', typeof pokeIndex, pokeIndex);
                        continue;
                        }
                    // //console.log('eggsToAddIndexTokens['+key+'] = ', pokeToken, pokeIndex);

                    // Check again to see if we're at overcrowded capacity
                    if (allowEgg){
                        zoneCapacityPercent = ((thisZoneData.currentPokemon.length / thisZoneData.capacity) * 100);
                        zoneIsOvercrowded = zoneCapacityPercent >= 99 ? true : false;
                        // //console.log('zoneCapacityPercent = ', zoneCapacityPercent);
                        // //console.log('zoneIsOvercrowded = ', zoneIsOvercrowded);
                        if (zoneIsOvercrowded){ allowEgg = false; }
                        }

                    // Check to see if this species is not appropriate for the current biome
                    if (allowEgg){
                        var appealPoints = 0;
                        var minAppealRequired = pokeIndex.eggCycles * -1;
                        // //console.log('\n-----');
                        // //console.log(pokeToken + ' | minAppealRequired = ' + minAppealRequired + ' | appealPoints = ' + appealPoints);
                        for (var i = 0; i < pokeIndex.types.length; i++){
                            var type = pokeIndex.types[i];
                            if (typeof currentTypeStats[type] !== 'undefined'){
                                // //console.log('appealPoints('+appealPoints+') += currentTypeStats['+type+']('+currentTypeStats[type]+');');
                                appealPoints += currentTypeStats[type];
                                }
                            }
                        // //console.log(pokeToken + ' | minAppealRequired = ' + minAppealRequired + ' | appealPoints = ' + appealPoints);
                        if (appealPoints < minAppealRequired){ allowEgg = false; }
                        }

                    // Delete eggs for this species if not allowed, else proceed with creation normally
                    if (!allowEgg){

                        // Delete the egg from the index completely
                        eggsToAddIndex[pokeToken] = 0;
                        delete eggsToAddIndex[pokeToken];

                        } else if (eggsToAddIndex[pokeToken] > 0){

                        // Check to Super Ditto reductions and then add new egg to the zone
                        if (existingSuperDitto > 0){ addPokemonToZone(pokeToken, true, existingSuperDitto); }
                        else { addPokemonToZone(pokeToken, true); }
                        numRelatedPokemonCache[pokeToken] += 1;

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
        // //console.log('updateBoxBiome()');

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

        // //console.log('currentTypes = ', currentTypes);

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
            // //console.log(fieldToken+' = ', fieldInfo);
            // //console.log('|-- typeVal = ', typeVal);
            // //console.log('|-- fieldChance = ', fieldChance);
            if (fieldChance > 0){
                possibleFields.push({
                    field: fieldToken,
                    chance: fieldChance
                    });
                }
            }

        // //console.log('possibleFields = ', possibleFields);

        // If there were no appropriate fields, do nothing for now
        if (possibleFields.length === 0){ return false; }

        // Otherwise, sort the fields by their chances and apply the first
        possibleFields.sort(function (fieldA, fieldB){
            if (fieldA.chance > fieldB.chance){ return -1; }
            else if (fieldA.chance < fieldB.chance){ return 1; }
            else { return 0; }
            });
        // //console.log('topFields = ', possibleFields[0]['field'], possibleFields[1]['field'], possibleFields[2]['field']);
        if (possibleFields[0].chance > 0
            && possibleFields[0]['field'] !== thisZoneData.field){
            var fieldToken = possibleFields[0]['field'];
            var fieldInfo = PokemonFieldsIndex[fieldToken];
            thisZoneData.field = fieldToken;
            thisZoneData.name = fieldInfo.name;
            // //console.log('change to field '+fieldToken);
            var newImage = 'images/fields/'+fieldToken+'-fullsize.png';
            $('.details.pokemon .field .bg', $panelMainOverview).css({backgroundImage:'url('+ newImage +')'});
            }

    }

    // Define a function for calculating visitor appeal values
    function recalculateVisitorAppeal(){
        // //console.log('recalculateVisitorAppeal()');

        // SPECIAL BOX EFFECT : Repel all visitor pokemon if the appropriate flag is active
        if (thisZoneData.currentEffects['repelAllVisitors'] === true){
            // Update the parent appeal index with the an empty array
            thisZoneData.currentStats['visitorAppeal'] = [];
            return;
        }

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

            // Count the number of special pokemon by category or species
            var currentMythicalNum = typeof zoneStats['class']['mythical'] !== 'undefined' ? zoneStats['class']['mythical'] : 0;
            var currentLegendaryNum = typeof zoneStats['class']['legendary'] !== 'undefined' ? zoneStats['class']['legendary'] : 0;
            var currentUltraBeastNum = typeof zoneStats['class']['ultra-beast'] !== 'undefined' ? zoneStats['class']['ultra-beast'] : 0;
            var currentGigantamaxNum = typeof zoneStats['class']['gigantamax'] !== 'undefined' ? zoneStats['class']['gigantamax'] : 0;
            var currentArceusNum = typeof zoneStats['species']['arceus'] !== 'undefined' ? zoneStats['species']['arceus'] : 0;

            // Check to see if certain kinds of pokemon are being repelled
            var repelBasicVisitors = thisZoneData.currentEffects['repelBasicVisitors'] ? true : false;
            var repelSpecialVisitors = thisZoneData.currentEffects['repelSpecialVisitors'] ? true : false;
            var naturalEncounterRates = repelBasicVisitors || repelSpecialVisitors ? false : true;
            var increaseSpecialVisitors = thisZoneData.currentEffects['increaseSpecialVisitors'] ? true : false;

            // //console.log('----------- = ');
            // //console.log('currentMythicalNum = ', currentMythicalNum);
            // //console.log('currentLegendaryNum = ', currentLegendaryNum);
            // //console.log('increaseSpecialVisitors = ', increaseSpecialVisitors);
            // //console.log('repelBasicVisitors = ', repelBasicVisitors);
            // //console.log('repelSpecialVisitors = ', repelSpecialVisitors);
            // //console.log('naturalEncounterRates = ', naturalEncounterRates);

            // If we're using NATURAL encounter rates, we do BASIC for most of the year and SPECIAL at the end
            if (naturalEncounterRates){

                // MYTHICAL pokemon appear more often near the end of the year, every three years
                var mythicalMonths = increaseSpecialVisitors ? [5,6,11,12] : [11,12];
                eventPokemonChanceBoosters['mythical'] = 0;
                if (mythicalYear
                    && (currentMythicalNum < (increaseSpecialVisitors ? 2 : 1)
                        && thisZoneData.date.year >= 3
                        && mythicalMonths.indexOf(thisZoneData.date.month) !== -1
                        )){
                    eventBoost = ((thisZoneData.date.month + 9) / 12) + ((thisZoneData.date.day + 9) / 30) / 10;
                    eventBase = 120 * eventBoost;
                    eventPokemonChanceBases['mythical'] = eventBase;
                    eventPokemonChanceBoosters['mythical'] = eventBoost;
                    }
                // Otherwise LEGENDARY pokemon appear more often near the end of the year, every other year
                var legendaryMonths = increaseSpecialVisitors ? [4,5,6,10,11,12] : [10,11,12];
                eventPokemonChanceBoosters['legendary'] = 0;
                if (!mythicalYear
                    && (currentLegendaryNum < (increaseSpecialVisitors ? 2 : 1)
                        && thisZoneData.date.year >= 1
                        && legendaryMonths.indexOf(thisZoneData.date.month) !== -1
                        )){
                    eventBoost = ((thisZoneData.date.month + 6) / 12) + ((thisZoneData.date.day + 6) / 30) / 10;
                    eventBase = 100 * eventBoost;
                    if (currentLegendaryNum > 0 && !increaseSpecialVisitors){ eventBoost /= (currentLegendaryNum + 1);  }
                    eventPokemonChanceBases['legendary'] = eventBase;
                    eventPokemonChanceBoosters['legendary'] = eventBoost;
                    }

                } else {

                // SPECIAL BOX EFFECT : Repel basic visitor pokemon if the appropriate flag is active
                if (repelBasicVisitors){
                    eventPokemonChanceBoosters['basic'] = 0;
                    }

                // SPECIAL BOX EFFECT : Repel special visitor pokemon if the appropriate flag is active
                if (repelSpecialVisitors){
                    eventPokemonChanceBoosters['special'] = 0;
                    } else {
                    eventPokemonChanceBoosters['mythical'] = mythicalYear ? 1 : 0;
                    eventPokemonChanceBoosters['legendary'] = !mythicalYear ? 1 : 0;
                    }

                }

            //console.log('eventPokemonChanceBases = ', eventPokemonChanceBases);
            //console.log('eventPokemonChanceBoosters = ', eventPokemonChanceBoosters);

            // (GEN 1+) DITTO appears more 6 months into the year when the box is nearly empty
            eventPokemonChanceBoosters['ditto'] = 0;
            if (thisZoneData.date.year > 1
                && thisZoneData.date.month >= 6
                && emptySpacePercent >= 90){
                eventBoost = 80 * (emptySpacePercent / 10);
                eventPokemonChanceBoosters['ditto'] = eventBoost;
                }

            // (GEN 7+) ZYGARDE cells and cores are summoned when type appeal conditions are too extreme
            eventPokemonChanceBoosters['zygarde-core'] = 0;
            eventPokemonChanceBoosters['zygarde-cell'] = 0;
            if (maxIndexKeyToLoad >= 7){

                // SPECIAL BOX EFFECT : Prevent special visitor pokemon if the appropriate flag is active
                if (thisZoneData.currentEffects['repelSpecialVisitors'] !== true){

                    // Check if type appeal is critical or extreme right now
                    var extremeTypeAppeal = zoneFlags.indexOf('extremeTypeAppeal') !== -1 ? true : false;
                    var criticalTypeAppeal = zoneFlags.indexOf('criticalTypeAppeal') !== -1 ? true : false;
                    // //console.log('extremeTypeAppeal = ', extremeTypeAppeal);
                    // //console.log('criticalTypeAppeal = ', criticalTypeAppeal);

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
                    // //console.log('numZygardeCells = ', numZygardeCells);
                    // //console.log('numZygardeCores = ', numZygardeCores);

                    // Summon cells only until there are a max of three in the box
                    if (numZygardeCores < 1
                        && numZygardeCells < 3
                        && (extremeTypeAppeal || criticalTypeAppeal)){
                        // //console.log('try to add a cell');
                        eventBase = 0 + (extremeTypeAppeal ? 100 : 0) + (criticalTypeAppeal ? 100 : 0);
                        eventBoost = 0 + (extremeTypeAppeal ? 2 : 0) + (criticalTypeAppeal ? 2 : 0);
                        eventPokemonChanceBases['zygarde-cell'] = eventBase;
                        eventPokemonChanceBoosters['zygarde-cell'] = eventBoost;
                        }

                    // Summon a single core when at least three cells are currently in the box
                    if (numZygardeCores < 1
                        && numZygardeCells >= 3){
                        // //console.log('try to add a core');
                        eventBase = 100 * numZygardeCells;
                        eventBoost = 2 * numZygardeCells;
                        eventPokemonChanceBases['zygarde-core'] = eventBase;
                        eventPokemonChanceBoosters['zygarde-core'] = eventBoost;
                        }

                    }

                }

            // (GEN 7+) NECROZMA is summoned to devour the light of Lunala or Solgaleo when they appear
            eventPokemonChanceBoosters['necrozma'] = 0;
            if (maxIndexKeyToLoad >= 7){
                var currentLunala = typeof zoneStats['species']['lunala'] !== 'undefined' ? zoneStats['species']['lunala'] : 0;
                var currentSolgaleo = typeof zoneStats['species']['solgaleo'] !== 'undefined' ? zoneStats['species']['solgaleo'] : 0;
                var necrozmaAdded = typeof addedSpecies['necrozma'] !== 'undefined' ? addedSpecies['necrozma'] : 0;
                // //console.log('currentLunala = ', currentLunala);
                // //console.log('currentSolgaleo = ', currentSolgaleo);
                // //console.log('necrozmaAdded = ', necrozmaAdded);
                if ((currentLunala + currentSolgaleo) > 0
                    && necrozmaAdded < 1){
                    eventBoost = ((thisZoneData.date.month + 1) / 12) + currentLunala + currentSolgaleo;
                    eventBase = 100 * eventBoost;
                    if (currentUltraBeastNum > 0){ eventBase *= (currentUltraBeastNum + 1); }
                    eventPokemonChanceBases['necrozma'] = eventBase;
                    eventPokemonChanceBoosters['necrozma'] = eventBoost;
                    // //console.log('eventBoost = ', eventBoost);
                    // //console.log('eventBase = ', eventBase);
                    }
                }

            // (GEN 7+) ULTRA BEASTS are summoned when the box has too much ultra energy (and no silvally)
            eventPokemonChanceBoosters['ultra-beast'] = 0;
            if (maxIndexKeyToLoad >= 7){
                var boxHasUltraEnergy = zoneFlags.indexOf('boxHasUltraEnergy') !== -1;
                var silvallyHasAppeared = zoneFlags.indexOf('silvallyHasAppeared') !== -1;
                var totalUltraEnergy = typeof zoneStats['totalUltraEnergy'] !== 'undefined' ? zoneStats['totalUltraEnergy'] : 0;
                var currentUltraEnergy = typeof zoneStats['currentUltraEnergy'] !== 'undefined' ? zoneStats['currentUltraEnergy'] : 0;
                // //console.log('totalUltraEnergy = ' + totalUltraEnergy + ' | currentUltraEnergy = ' + currentUltraEnergy);
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

            // (GEN 7+) TYPE: NULL is summoned when the box has too many ultra beasts (silvally eats them)
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

            // (GEN 7+) MELTAN are summoned in bulk as soon as a single one appears
            if (maxIndexKeyToLoad >= 7){
                if (typeof addedSpecies['meltan'] !== 'undefined'){
                    if (addedSpecies['meltan'] >= 1
                        && addedSpecies['meltan'] < 4){
                        eventBoost = 30 * addedSpecies['meltan'];
                        eventPokemonChanceBoosters['meltan'] = eventBoost;
                        PokemonSpeciesIndex['meltan']['visitorClass'] = '';
                        } else if (addedSpecies['meltan'] >= 4){
                        eventPokemonChanceBoosters['meltan'] = 0;
                        } else {
                        if (typeof eventPokemonChanceBoosters['meltan'] !== 'undefined'){ delete eventPokemonChanceBoosters['meltan']; }
                        if (typeof PokemonSpeciesIndex['meltan']['visitorClass'] !== 'undefined'){ delete PokemonSpeciesIndex['meltan']['visitorClass']; }
                        }
                    }
                }

            // (GEN 8+) ETERNATUS is summoned when the box has too much dynamax energy
            eventPokemonChanceBoosters['eternatus'] = 0;
            if (maxIndexKeyToLoad >= 8){
                var boxHasDynamaxEnergy = zoneFlags.indexOf('boxHasDynamaxEnergy') !== -1;
                var eternatusHasAppeared = zoneFlags.indexOf('eternatusHasAppeared') !== -1;
                var totalDynamaxEnergy = typeof zoneStats['totalDynamaxEnergy'] !== 'undefined' ? zoneStats['totalDynamaxEnergy'] : 0;
                var currentDynamaxEnergy = typeof zoneStats['currentDynamaxEnergy'] !== 'undefined' ? zoneStats['currentDynamaxEnergy'] : 0;
                //console.log('totalDynamaxEnergy = ' + totalDynamaxEnergy + ' | currentDynamaxEnergy = ' + currentDynamaxEnergy);
                if (boxHasDynamaxEnergy
                    && !eternatusHasAppeared
                    && totalDynamaxEnergy >= 3
                    && currentDynamaxEnergy === 0){
                    eventBoost = ((thisZoneData.date.month + 1) / 12) + totalDynamaxEnergy;
                    eventBase = 100 * eventBoost;
                    eventPokemonChanceBases['eternatus'] = eventBase;
                    eventPokemonChanceBoosters['eternatus'] = eventBoost;
                    }
                }

            // (GEN 8+) HYBRID FOSSILS may only appear when specific egg group ratios are present
            eventPokemonChanceBoosters['dracozolt'] = 0;
            eventPokemonChanceBoosters['arctozolt'] = 0;
            eventPokemonChanceBoosters['dracovish'] = 0;
            eventPokemonChanceBoosters['arctovish'] = 0;
            if (maxIndexKeyToLoad >= 8){
                var currentEggGroups = thisZoneData.currentStats.eggGroups;
                if (currentEggGroups['flying'] >= 1 && currentEggGroups['dragon'] >= 1){ delete eventPokemonChanceBoosters['dracozolt']; }
                if (currentEggGroups['flying'] >= 1 && currentEggGroups['monster'] >= 1){ delete eventPokemonChanceBoosters['arctozolt']; }
                if (currentEggGroups['water-2'] >= 1 && currentEggGroups['dragon'] >= 1){ delete eventPokemonChanceBoosters['dracovish']; }
                if (currentEggGroups['water-2'] >= 1 && currentEggGroups['monster'] >= 1){ delete eventPokemonChanceBoosters['arctovish']; }
                }

            // (GEN X+) Shadow and Shining are never summoned as visitors and can only be unlocked via events/passwords
            eventPokemonChanceBoosters['shadow-variant'] = 0;
            eventPokemonChanceBoosters['shining-variant'] = 0;

            }

        // //console.log(thisZoneData.date.year + ' / ' + thisZoneData.date.month + ' / ' + thisZoneData.date.day);
        // //console.log('eventPokemonChanceBases = ', eventPokemonChanceBases);
        // //console.log('eventPokemonChanceBoosters = ', eventPokemonChanceBoosters);
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
                            // //console.log('pokeToken = '+pokeToken+' | speciesToken = '+speciesToken+'');
                            // //console.log('thisZoneData.currentStats[\'species\']['+speciesToken+'] = ', thisZoneData.currentStats['species'][speciesToken]);
                            // //console.log('thisZoneData.currentStats[\'species\']['+pokeToken+'] = ', thisZoneData.currentStats['species'][pokeToken]);
                            speciesAppealIndex[pokeToken] = thisZoneData.currentStats['species'][speciesToken];
                            }
                        }
                    }
                }
            // //console.log('speciesAppealIndex = ', speciesAppealIndex);
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
        // //console.log('allowedVisitorTokens = ', allowedVisitorTokens);

        // Loop through basic pokemon and calculate chances of each
        var rankedZoneStats = Object.keys(currentTypeStats);
        var pokemonVisitorChances = [];
        var pokemonVisitorChanceTokens = [];
        for (var key = 0; key < allowedVisitorTokens.length; key++){
            var pokeToken = allowedVisitorTokens[key];
            var pokeInfo = PokemonSpeciesIndex[pokeToken];
            var pokeChance = 0;

            // Skip explicitly restricted and hidden or gift pokemon as they cannot appear as visitors
            if (typeof pokeInfo.eventOnlyPokemon !== 'undefined' && pokeInfo.eventOnlyPokemon === true){ continue; }
            else if (typeof pokeInfo.isHiddenPokemon !== 'undefined' && pokeInfo.isHiddenPokemon === true){ continue; }
            else if (typeof pokeInfo.isGiftPokemon !== 'undefined' && pokeInfo.isGiftPokemon === true){ continue; }

            // Check to see if this is a basic or a special pokemon
            var pokeClass = typeof pokeInfo.visitorClass !== 'undefined' ? pokeInfo.visitorClass : pokeInfo.class;
            var pokeFormClass = typeof pokeInfo.formClass !== 'undefined' ? pokeInfo.formClass : '';
            var isBasicPokemon = pokeClass === '' ? true : false;
            var isSpecialPokemon = typeof pokeInfo.isSpecialPokemon !== 'undefined' ? pokeInfo.isSpecialPokemon : false;
            if (pokeClass !== ''
                && (pokeClass === 'legendary'
                    || pokeClass === 'mythical'
                    || pokeClass === 'ultra-beast')){
                    isSpecialPokemon = true;
                }

            // Define a flag to see if this pokemon is even allowed as a visitor
            var allowAsVisitor = true;

            // Skip if this pokemon's class has been explicitly banned from appearing
            if (isBasicPokemon && eventPokemonChanceBoosters['basic'] === 0){ allowAsVisitor = false; }
            if (isSpecialPokemon && eventPokemonChanceBoosters['special'] === 0){ allowAsVisitor = false; }
            if (eventPokemonChanceBoosters[pokeClass] === 0){ allowAsVisitor = false; }
            if (eventPokemonChanceBoosters[pokeFormClass] === 0){ allowAsVisitor = false; }

            // Skip if this is a gift-only starter pokemon
            if (pokeInfo.isStarterPokemon === true){ allowAsVisitor = false; }

            // Skip if the pokemon is a cross-gen regional / ancient / box variant
            if (pokeInfo.gameGeneration !== pokeInfo.baseGameGeneration
                && (pokeFormClass === 'regional-variant'
                    || pokeFormClass === 'ancient-variant'
                    || pokeFormClass === 'box-variant')){
                allowAsVisitor = false
                }

            // If species has necessary flag, overwrite calc allowAsVisitor value
            if (typeof pokeInfo.allowAsVisitor !== 'undefined'){ allowAsVisitor = pokeInfo.allowAsVisitor; }

            // If not allowed as a visitor, break from loop immediately
            if (!allowAsVisitor){ continue; }

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
            // //console.log('relatedSpecies = ', pokeToken, pokeInfo.relatedSpecies);
            // //console.log('numAddedAlready = ', pokeToken, numAddedAlready);
            // //console.log('numAddedCurrently = ', pokeToken, numAddedCurrently);

            // Check to see if this is a persistent visitor (which is to say it can show up any number of times)
            var repeatVisitor = typeof pokeInfo.repeatVisitor !== 'undefined' ? pokeInfo.repeatVisitor : false;
            var oneTimeVisitor = typeof pokeInfo.oneTimeVisitor !== 'undefined' ? pokeInfo.oneTimeVisitor : false;

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
            var regionVal = 0.20;
            if (typeof thisZoneData.currentStats['gameRegion'][pokeInfo.gameRegion] !== 'undefined'
                && thisZoneData.currentStats['gameRegion'][pokeInfo.gameRegion] !== 0){
                pokeChance += thisZoneData.currentStats['gameRegion'][pokeInfo.gameRegion] * regionVal;
                }

            // Increase the chance of this pokemon appearing based on generation appeal
            var genAppeal = 0.10;
            if (typeof thisZoneData.currentStats['gameRegion'][pokeInfo.gameGeneration] !== 'undefined'
                && thisZoneData.currentStats['gameRegion'][pokeInfo.gameGeneration] !== 0){
                pokeChance += thisZoneData.currentStats['gameRegion'][pokeInfo.gameGeneration] * genAppeal;
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
                // //console.log('speciesAppealIndex['+pokeToken+'] = ', speciesAppealIndex[pokeToken]);
                if (pokeChance < 0){ pokeChance = 0; }
                pokeChance += 2;
                pokeChance *= speciesAppealIndex[pokeToken];
                // //console.log('pokeChance = ', pokeChance);
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
            // //console.log('repeatVisitor ', pokeToken, repeatVisitor);
            // //console.log('numAddedAlready ', pokeToken, numAddedAlready);
            if (!repeatVisitor && numAddedAlready > 0){
                if (numAddedAlready > 1){ pokeChance -= numAddedAlready; }
                // //console.log('pokeChance ', pokeToken, pokeChance);
                if (oneTimeVisitor){
                    if (numAddedCurrently >= 1){ pokeChance = 0; }
                    else if (numAddedAlready >= 1){ pokeChance = 0; }
                } else if (isSpecialPokemon){
                    if (numAddedCurrently >= 1){ pokeChance = 0; }
                    else if (numAddedAlready >= 3){ pokeChance = 0; }
                    // //console.log('pokeChance ', pokeToken, pokeChance);
                    } else {
                    if (numAddedCurrently === 1){ pokeChance *= 2.0; }
                    else if (numAddedCurrently >= 3){ pokeChance = 0; }
                    else if (numAddedAlready >= 6){ pokeChance = 0; }
                    // //console.log('pokeChance ', pokeToken, pokeChance);
                    }
                }

            // Apply any event-specific species or class boosters to the chance rating
            if (!isSpecialPokemon && typeof eventPokemonChanceBoosters['basic'] !== 'undefined'){ pokeChance = eventPokemonChanceBoosters['basic']; }
            if (isSpecialPokemon && typeof eventPokemonChanceBoosters['special'] !== 'undefined'){ pokeChance = eventPokemonChanceBoosters['special']; }
            if (typeof eventPokemonChanceBoosters[pokeFormClass] !== 'undefined'){ pokeChance *= eventPokemonChanceBoosters[pokeFormClass]; }
            if (typeof eventPokemonChanceBoosters[pokeClass] !== 'undefined'){ pokeChance *= eventPokemonChanceBoosters[pokeClass]; }
            if (typeof eventPokemonChanceBoosters[pokeToken] !== 'undefined'){ pokeChance *= eventPokemonChanceBoosters[pokeToken]; }
            if (typeof eventPokemonChanceBoosters['*'] !== 'undefined'){ pokeChance *= eventPokemonChanceBoosters['*']; }

            // Reduce chance slightly if this is a rare fossil pokemon
            if (pokeInfo.isFossilPokemon === true){ pokeChance -= (pokeChance * 0.20); }

            // If the chance was more than zero, push into the queue
            if (pokeChance > 0 && pokemonVisitorChanceTokens.indexOf(pokeToken) === -1){
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
        // //console.log('pokemonVisitorChances = ', pokemonVisitorChances);
        //console.log('pokemonVisitorChances(top20) = ', pokemonVisitorChances[0], pokemonVisitorChances[1], pokemonVisitorChances[2], pokemonVisitorChances.slice(0, 20));
        //console.log('pokemonVisitorChances(top100) = ', pokemonVisitorChances[0], pokemonVisitorChances[1], pokemonVisitorChances[2], pokemonVisitorChances.slice(0, 100));

        // Update the parent appeal index with the current sorted chances
        thisZoneData.currentStats['visitorAppeal'] = pokemonVisitorChances;
        // //console.log('thisZoneData.currentStats[\'visitorAppeal\'] = ', thisZoneData.currentStats['visitorAppeal']);

    }

    // Define a function for triggering a zone visitor
    function triggerZoneVisitor(visitorKind){
        // //console.log('triggerZoneVisitor(visitorKind)', visitorKind);
        if (typeof visitorKind !== 'string'){ visitorKind = 'auto'; }

        // If we're already at capacity, we cannot add any more pokemon
        if (thisZoneData.currentPokemon.length >= thisZoneData.capacity){ return false; }

        // Collect visitor appeal and sum all the chance values (return false if zero)
        var currentVisitorAppeal = thisZoneData.currentStats['visitorAppeal'];
        var currentVisitorAppealTotal = sumValuesByKey(currentVisitorAppeal, 'chance', true);
        // //console.log('currentVisitorAppealTotal = ', currentVisitorAppealTotal, currentVisitorAppeal);
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
        // //console.log('visitorToken = ', visitorToken);
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
        // //console.log('pokemonGetBasicEvolution(pokeToken('+pokeToken+'), includeBaby('+includeBaby+'))');
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
        // //console.log('pokemonGetBaseEvolution('+pokeToken+', '+includeBaby+', '+includeAlts+')');
        if (typeof pokeToken === 'undefined'){ return false; }
        if (typeof includeBaby !== 'boolean'){ includeBaby = true; }
        if (typeof includeAlts !== 'boolean'){ includeAlts = true; }
        var baseToken = pokeToken;
        var indexInfo = PokemonSpeciesIndex[baseToken];
        // //console.log('indexInfo = ', indexInfo);
        if (typeof indexInfo.prevEvolution !== 'undefined'){
            var prevInfo = PokemonSpeciesIndex[indexInfo.prevEvolution];
            if (!includeBaby && prevInfo.class === 'baby'){
                // //console.log('!includeBaby && prevInfo.class === \'baby\' | return baseToken', baseToken);
                return baseToken;
                } else {
                // //console.log('return indexInfo.prevEvolution', indexInfo.prevEvolution);
                return pokemonGetBaseEvolution(indexInfo.prevEvolution, includeBaby, includeAlts);
                }
            } else {
            // //console.log('return indexInfo.altBaseEvolutions', indexInfo.altBaseEvolutions);
            if (includeAlts && typeof indexInfo.altBaseEvolutions !== 'undefined'){
                 //console.log('\npokemonGetBaseEvolution('+pokeToken+', includeBaby:'+includeBaby+', includeAlts:'+includeAlts+')');
                 //console.log('| -- indexInfo.altBaseEvolutions =', indexInfo.altBaseEvolutions);

                // Collect refs to zone stats and special energy/power counters
                var zoneStats = thisZoneData.currentStats;
                var currentUltraEnergy = typeof zoneStats['currentUltraEnergy'] !== 'undefined' ? zoneStats['currentUltraEnergy'] : 0;
                var totalUltraEnergy = typeof zoneStats['totalUltraEnergy'] !== 'undefined' ? zoneStats['totalUltraEnergy'] : 0;
                var currentAncientPower = typeof zoneStats['currentAncientPower'] !== 'undefined' ? zoneStats['currentAncientPower'] : 0;
                var totalAncientPower = typeof zoneStats['totalAncientPower'] !== 'undefined' ? zoneStats['totalAncientPower'] : 0;

                // Define arrays to hold queued evolutions and then start looping
                var queuedBaseEvolutions = [];
                var queuedBaseEvolutionsTokens = [];
                for (var i = 0; i < indexInfo.altBaseEvolutions.length; i++){
                    var baseEvolution = indexInfo.altBaseEvolutions[i];
                    var baseEvolutionInfo = PokemonSpeciesIndex[baseEvolution.species];
                    // //console.log('baseEvolution['+ i +'] = ', baseEvolution);
                    // //console.log('zoneStats[\'types\'][baseEvolution.value] = ', zoneStats['types'][baseEvolution.value]);

                    var allowBaseEvolution = false;
                    var baseEvolutionSpecies = baseEvolution['species'];
                    var baseEvolutionChance = 0;
                    for (var j = 1; j < 10; j++){
                        var m = j > 1 ? j : '';

                        if (typeof baseEvolution['method'+m] === 'undefined'){ break; }
                        else if (typeof baseEvolution['value'+m] === 'undefined'){ break; }

                        var baseEvolutionMethod = baseEvolution['method'+m];
                        var baseEvolutionValue = baseEvolution['value'+m];
                         //console.log('checking '+pokeToken+' to '+baseEvolutionSpecies+' w/ ', baseEvolutionMethod, baseEvolutionValue, (baseEvolutionMethod.indexOf('type') !== -1 ? JSON.stringify(zoneStats['types']) : ''), '...');

                        // Calculate TYPE APPEAL & SURGE effects on base evolution
                        if ((baseEvolutionMethod === 'type-appeal'
                            && zoneStats['types'][baseEvolutionValue] >= 20)
                            || (baseEvolutionMethod === 'type-surge'
                            && zoneStats['types'][baseEvolutionValue] >= 40)){

                            allowBaseEvolution = true;
                            baseEvolutionChance += (baseEvolutionMethod === 'type-appeal' ? 2 : 3) + zoneStats['types'][baseEvolutionValue];

                            }
                        // Calculate TYPE WARNING & CRISIS effects on base evolution
                        else if ((baseEvolutionMethod === 'type-warning'
                            && zoneStats['types'][baseEvolutionValue] <= -5)
                            || baseEvolutionMethod === 'type-crisis'
                            && zoneStats['types'][baseEvolutionValue] <= -10){

                            allowBaseEvolution = true;
                            baseEvolutionChance += (baseEvolutionMethod === 'type-warning' ? 2 : 3) + ((zoneStats['types'][baseEvolutionValue] * -1)  * 2);

                            }
                        // Calculate TYPE VALUE effects on base evolution
                        else if (baseEvolutionMethod === 'type-value'){

                            allowBaseEvolution = true;
                            baseEvolutionChance += zoneStats['types'][baseEvolutionValue];

                            // Calculate TYPE VS TYPE effects on base evolution
                            } else if (baseEvolutionMethod === 'type-vs-type'
                                && zoneStats['types'][baseEvolutionValue[0]] > zoneStats['types'][baseEvolutionValue[1]]){

                            allowBaseEvolution = true;
                            baseEvolutionChance += 2 + (zoneStats['types'][baseEvolutionValue[0]] - zoneStats['types'][baseEvolutionValue[1]]);

                             //console.log(pokeToken+' to '+baseEvolutionSpecies+' w/ type-vs-type', baseEvolutionValue, (zoneStats['types'][baseEvolutionValue[0]] +' > '+ zoneStats['types'][baseEvolutionValue[1]]), 'allowBaseEvolution!, baseEvolutionChance =', baseEvolutionChance);

                            }
                        // Calculate ULTRA ENERGY effects on base evolution
                        else if (baseEvolutionMethod === 'ultra-energy'
                            && ((baseEvolutionValue === 'high' && currentUltraEnergy >= 6)
                                || (baseEvolutionValue === 'low' && currentUltraEnergy < 3)
                                || (baseEvolutionValue === 'none' && currentUltraEnergy === 0))){

                            allowBaseEvolution = true;
                            baseEvolutionChance += (currentUltraEnergy * totalUltraEnergy);

                            }
                        // Calculate CHANCE effects on base evolution
                        else if (baseEvolutionMethod === 'chance'
                            && (Math.seededRandomChance() < baseEvolutionValue)){

                            allowBaseEvolution = true;
                            baseEvolutionChance += 2 + zoneStats['types'][indexInfo.types[0]];

                            }
                        // Process ALWAYS conditions on base evolution
                        else if (baseEvolutionMethod === 'always'){

                            allowBaseEvolution = true;
                            baseEvolutionChance += 100 + i;

                            }
                        // Otherwise prevent this base evolution if no other conditions met
                        else {

                            allowBaseEvolution = false;
                            baseEvolutionChance = 0;
                             //console.log('...didn\'t pass any conditions!', baseEvolutionChance+'% chance');
                            break;

                            }

                        if (allowBaseEvolution
                            && baseEvolutionChance > 0){
                             //console.log('...passed all conditions!', baseEvolutionChance+'% chance');
                            } else {
                             //console.log('...didn\'t pass all conditions!', baseEvolutionChance+'% chance');
                            }

                        }

                    // Queue the base evolution if it matches all conditions
                    if (allowBaseEvolution
                        && baseEvolutionSpecies.length
                        && baseEvolutionChance > 0){
                         //console.log('allowBaseEvolution from '+pokeToken+' to '+baseEvolutionSpecies+' w/ '+baseEvolutionChance+'% chance!');
                        queuedBaseEvolutionsTokens.push(baseEvolutionSpecies);
                        queuedBaseEvolutions.push({
                            token: baseEvolutionSpecies,
                            chance: baseEvolutionChance
                            });
                        }

                    }

                // Automatically queue the normal base evo with the primary type as the weight vs others
                if (queuedBaseEvolutionsTokens.indexOf(indexInfo.token) === -1){
                    queuedBaseEvolutionsTokens.push(indexInfo.token);
                    queuedBaseEvolutions.push({
                        token: indexInfo.token,
                        chance: 1 + ((typeof indexInfo.types[1] !== 'undefined'
                            ? ((zoneStats['types'][indexInfo.types[0]] + zoneStats['types'][indexInfo.types[1]]) / 2)
                            : (zoneStats['types'][indexInfo.types[0]])
                            ) / (queuedBaseEvolutionsTokens.length >= 1 ? queuedBaseEvolutionsTokens.length : 1))
                        });
                    }

                // If eligable base evos were found, analyze and return one of 'em
                if (queuedBaseEvolutionsTokens.length > 0){
                     //console.log('queuedBaseEvolutions for '+indexInfo.token+' = ', queuedBaseEvolutions);
                    queuedBaseEvolutions.sort(function(a, b){
                        if (a.chance > b.chance){ return -1; }
                        else if (a.chance < b.chance){ return 1; }
                        else { return 0; }
                        });
                    var selectedBaseEvolution = queuedBaseEvolutions[0].token;
                     //console.log('selectedBaseEvolution = ', selectedBaseEvolution);
                     //console.log('return selectedBaseEvolution', selectedBaseEvolution, '\n----------');
                    return selectedBaseEvolution;
                    } else {
                     //console.log('return baseToken', baseToken, '\n----------');
                    return baseToken;
                    }

                } else {
                // //console.log('return baseToken', baseToken, '\n----------');
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

    // Define a function for sorting species token by index order
    function sortSpeciesTokensByAddedThenByOrder(speciesTokens, reverseOrder){
        var addedEvoLineNumbers = Object.keys(thisZoneData.addedPokemonByEvoLineNumber);
        speciesTokens.sort(function(tokenA, tokenB){
            var evoLineA = PokemonSpeciesIndex[tokenA].evoLineNumber;
            var evoLineB = PokemonSpeciesIndex[tokenB].evoLineNumber;
            var addedA = addedEvoLineNumbers.indexOf(evoLineA);
            var addedB = addedEvoLineNumbers.indexOf(evoLineB);
            var orderA = PokemonSpeciesDisplayOrder.indexOf(tokenA);
            var orderB = PokemonSpeciesDisplayOrder.indexOf(tokenB);
            var reverse = reverseOrder ? -1 : 1;
            if (addedA > addedB){ return -1 * reverse; }
            else if (addedA < addedB){ return 1 * reverse; }
            else if (orderA < orderB){ return -1 * reverse; }
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
        // //console.log('sortSpeciesTokensByLifePoints() = ', speciesTokens);
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
        // //console.log('sortSpeciesTokensByBreedPoints() = ', speciesTokens);
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
                // //console.log('(0)nextEvolutions = ', nextEvolutions);
                // //console.log('(0)nextEvolutions.length = ', nextEvolutions.length);
                for (var key = 0; key < nextEvolutions.length; key++){

                    // Add stage 2 and check for stage 3
                    var nextInfo = nextEvolutions[key];
                    var nextToken = nextInfo.species;
                    var nextEvolution = PokemonSpeciesIndex[nextToken];
                    relatedSpeciesTokens.push(nextToken);
                    nextEvolutions2 = pokemonGetNextEvolutions(nextToken);
                    if (nextEvolutions2.length > 0){
                        // //console.log('(1)nextEvolutions2 = ', nextEvolutions2);
                        // //console.log('(1)nextEvolutions2.length = ', nextEvolutions2.length);
                        for (var key2 = 0; key2 < nextEvolutions2.length; key2++){

                            // Add stage 3 and check for stage 4
                            var nextInfo = nextEvolutions2[key2];
                            var nextToken = nextInfo.species;
                            var nextEvolution = PokemonSpeciesIndex[nextToken];
                            relatedSpeciesTokens.push(nextToken);
                            nextEvolutions3 = pokemonGetNextEvolutions(nextToken);
                            if (nextEvolutions3.length > 0){
                                // //console.log('(2)nextEvolutions3 = ', nextEvolutions3);
                                // //console.log('(2)nextEvolutions3.length = ', nextEvolutions3.length);
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
        relatedSpeciesTokens = relatedSpeciesTokens.filter(function(value, index, self){ return self.indexOf(value) === index; });
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
        if (typeof indexInfo.formClasses !== 'undefined'){
            if (indexInfo.formClasses.indexOf('gigantamax-form') !== -1){ influencePoints = influencePoints * 100;  }
            else if (indexInfo.formClasses.indexOf('burst-evolution') !== -1){ influencePoints = influencePoints * 4;  }
            else if (indexInfo.formClasses.indexOf('mega-evolution') !== -1){ influencePoints = influencePoints * 6;  }
            else if (indexInfo.formClasses.indexOf('primal-reversion') !== -1){ influencePoints = influencePoints * 8;  }
            } else if (typeof indexInfo.formClass !== 'undefined'){
            if (indexInfo.formClass === 'gigantamax-form'){ influencePoints = influencePoints * 100;  }
            else if (indexInfo.formClass === 'burst-evolution'){ influencePoints = influencePoints * 4;  }
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
        // //console.log('seedString = ', seedString);
        var rawString = seedString;
        //var seedData = rawString.match(/^`?`?\[\s?PBS\s+\|\s+(.*)?\s+\|\s+(.*)?\s?\]`?`?$/i);
        rawString = rawString.replace(' ♂', '-m', rawString).replace(' ♀', '-f', rawString);
        rawString = rawString.replace(/×\s/g, '×1 ', rawString);
        // //console.log('rawString = ', rawString);
        var seedData = rawString.match(/^[`]{0,}\[?(?:PBS\s+\|\s+)?([^|]+)?(?:\s+\|\s+(?:v[0-9]+\.[0-9]+\.[0-9]+[a-z]?))?\]?[`]{0,}$/i);
        //var seedString = rawString.replace(/^[`]{0,}\[?(?:PBS\s+\|\s+)?([^|]+)?(?:\s+\|\s+(?:v[0-9]+\.[0-9]+\.[0-9]+[a-z]?))?\]?[`]{0,}$/i, '$1');
        // //console.log('seedData = ', seedData);
        // //console.log('seedString = ', seedString);
        if (seedData !== null){
            // //console.log('seed string was okay!');
            var rawList = seedData[1].match(/\s+\/\s+/) ? seedData[1].split(/\s+\/\s+/) : [seedData[1]];
            // //console.log('rawList = ', rawList);
            var pokeList = [];
            var genderTrans = {m:'male',f:'female',n:'none'};
            for (var i = 0; i < rawList.length; i++){
                var rawValue = rawList[i];
                if (!rawValue.match(/\s(?:×|x)?\s?([0-9mf×x\/]+)$/i)){ rawValue += ' ×1'; }
                var rawInfo = rawValue.match(/^(\S+)\s(?:×|x)?\s?([0-9mf×x\/]+)$/i);
                if (rawInfo === null){ rawInfo = rawValue.match(/^(\S+\s\S+)\s(?:×|x)?\s?([0-9mf×x\/]+)$/i); }
                // //console.log('rawValue = ', typeof rawValue, rawValue);
                // //console.log('rawInfo = ', typeof rawInfo, rawInfo);
                if (rawInfo !== null
                    && typeof rawInfo[1] !== 'undefined'){
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
                    // //console.log('\tpokeToken = ', pokeToken);
                    // //console.log('\tpokeCounts = ', pokeCounts);
                    // //console.log('\tpokeIndex = ', pokeIndex);
                    if (typeof pokeIndex === 'undefined'){ continue; }
                    for (var j = 0; j < pokeCounts.length; j++){
                        var raw = pokeCounts[j].match(/^([0-9]+)(f|m)?$/);
                        var count = parseInt(raw[1]);
                        var gender = genderTrans[raw[2] || 'n'];
                        // //console.log('count / gender = ', count, gender);
                        if (pokeIndex.hasNoGender && gender !== 'none'){ gender = 'none'; }
                        else if (pokeIndex.hasOneGender && gender !== pokeIndex.speciesGender){ gender = 'none'; }
                        for (var k = 0; k < count; k++){ pokeList.push(gender !== 'none' ? [pokeToken, gender] : [pokeToken]); }
                        }
                    }
                }
            // //console.log('pokeList ', pokeList);
            return pokeList;
            } else {
            // //console.log('seed string was invalid');
            return false;
            }
    }


    // Define the starter, shadow, and shining reward indexes so they can be populated later
    var starterRewardIndex = {};
    var shadowRewardIndex = {};
    var shiningRewardIndex = {};

    // Define a function for checking if certain unlocks have been earned
    function recheckPokeboxRewards(){

        // Count the number of species seen so far
        var seenSpeciesTokens = Object.keys(PokemonSpeciesSeen);

        // Unlock Ditto if the user has seen at least one other species
        if (seenSpeciesTokens.length >= 1 && PokeboxRewards.indexOf('ditto') === -1){ PokeboxRewards.push('ditto'); }

        // Unlock the starters from Gen 2+ automatically via dex completion (linked to nation dex count as-of prev gen)
        var starterRewardCount = Object.keys(starterRewardIndex).length;
        for (var i = 0; i < starterRewardCount; i++){
            var rewardInfo = starterRewardIndex[i];
            if (typeof rewardInfo === 'undefined'){ continue; }
            // //console.log('rewardInfo = ', i, rewardInfo);
            if (seenSpeciesTokens.length >= rewardInfo['count']
                && PokeboxRewards.indexOf('gen'+ rewardInfo['gen'] +'-starters') === -1){
                PokeboxRewards.push('gen'+ rewardInfo['gen'] +'-starters');
                }
            }

        // Unlock shadow pokemon automatically and via dex completion
        var shadowRewardCount = Object.keys(shadowRewardIndex).length;
        for (var i = 0; i < shadowRewardCount; i++){
            var rewardInfo = shadowRewardIndex[i];
            if (typeof rewardInfo === 'undefined'){ continue; }
            // //console.log('rewardInfo = ', i, rewardInfo);
            if (PokeboxDaysPassed >= rewardInfo['count']
                && PokeboxRewards.indexOf(rewardInfo['species']) === -1){
                PokeboxRewards.push(rewardInfo['species']);
                }
            }

        // Unlock shining pokemon automatically and via dex completion
        var shiningRewardCount = Object.keys(shiningRewardIndex).length;
        for (var i = 0; i < shiningRewardCount; i++){
            var rewardInfo = shiningRewardIndex[i];
            if (typeof rewardInfo === 'undefined'){ continue; }
            // //console.log('rewardInfo = ', i, rewardInfo);
            if (PokeboxDaysPassed >= rewardInfo['count']
                && PokeboxRewards.indexOf(rewardInfo['species']) === -1){
                PokeboxRewards.push(rewardInfo['species']);
                }
            }

        // Unlock special pokemon as starters if the user has encountered every non-special species
        if (hasUnlockedSpecialPokemon() && PokeboxRewards.indexOf('special-starters') === -1){ PokeboxRewards.push('special-starters'); }

        // Unlock the final pokemon Arceus if the user has encountered every other species
        if (hasUnlockedFinalPokemon() && PokeboxRewards.indexOf('arceus') === -1){ PokeboxRewards.push('arceus'); }

        // Unlock the final pokemon Arceus if the user has encountered every other species
        if (hasUnlockedAllPokemon() && PokeboxRewards.indexOf('pokedex-complete') === -1){ PokeboxRewards.push('pokedex-complete'); }

        // Save any changes to the pokebox rewards array
        savePokeboxRewards();

    }

    // Define a function for saving pokebox rewards to local storage
    function savePokeboxRewards(){

        // Return if we don't have access to local storage or we're not allowed to save
        if (appFreeMode){ return false; }
        if (typeof window.localStorage === 'undefined'){ return false; }

        // Collect saved global array and prepare to merge with local filtered
        var savedPokeboxRewards = window.localStorage.getItem('PokeboxRewards');
        if (typeof savedPokeboxRewards === 'string'){ savedPokeboxRewards = JSON.parse(savedPokeboxRewards); }
        else { savedPokeboxRewards = []; }
        // //console.log('currentPokeboxRewards = ', PokeboxRewards);
        // //console.log('savedPokeboxRewards = ', savedPokeboxRewards);

        // Merge the local array into the saved one, and then re-strinify it
        var mergedPokeboxRewards = JSON.stringify(savedPokeboxRewards.concat(PokeboxRewards).filter(function(v, i, s) { return s.indexOf(v) === i; }));
        window.localStorage.setItem('PokeboxRewards', mergedPokeboxRewards);
        // //console.log('mergedPokeboxRewards = ', mergedPokeboxRewards);

    }

    // Define a function for saving pokebox popups seen to local storage
    function savePokeboxPopupsSeen(){

        // Return if we don't have access to local storage or we're not allowed to save
        if (appFreeMode){ return false; }
        if (typeof window.localStorage === 'undefined'){ return false; }

        // Collect saved global array and prepare to merge with local filtered
        var savedPokeboxPopupsSeen = window.localStorage.getItem('PokeboxPopupsSeen');
        if (typeof savedPokeboxPopupsSeen === 'string'){ savedPokeboxPopupsSeen = JSON.parse(savedPokeboxPopupsSeen); }
        else { savedPokeboxPopupsSeen = []; }
        // //console.log('currentPokeboxPopupsSeen = ', PokeboxPopupsSeen);
        // //console.log('savedPokeboxPopupsSeen = ', savedPokeboxPopupsSeen);

        // Merge the local array into the saved one, and then re-strinify it
        var mergedPokeboxPopupsSeen = JSON.stringify(savedPokeboxPopupsSeen.concat(PokeboxPopupsSeen).filter(function(v, i, s) { return s.indexOf(v) === i; }));
        window.localStorage.setItem('PokeboxPopupsSeen', mergedPokeboxPopupsSeen);
        // //console.log('mergedPokeboxPopupsSeen = ', mergedPokeboxPopupsSeen);

    }

    // Define the keys that can be exported/imported to/from localStorage
    var cloudLockName = '';
    var cloudKeyCode = '';
    var cloudAutoSave = false;
    var lastCloudAutoSave = 0;
    var cloudCompatibleStorageKeys = [
        'PokeboxDaysPassed', 'PokeboxPopupsSeen',
        'PokeboxRewards', 'PokemonSpeciesSeen',
        'PokeboxLastStarterSeed',
        'CurrentPokedexFilters'
        ];
    var allowEmptyCloudStorageKeys = [
        'PokeboxLastStarterSeed',
        'CurrentPokedexFilters'
        ];

    // Define a function for triggering the sequence of events leading to a cloud save
    var saveToCloudTimeout = false;
    function triggerSaveToCloud(){
        //console.log('triggerSaveToCloud()');
        if (validateCloudFormInputs()){
            var $saveButton = $('a.save_to_cloud', $panelDiv);
            $saveButton.removeClass('success');
            var backupCloudAutoSave = cloudAutoSave;
            cloudAutoSave = false;
            exportPokeBoxSaveData(function(){
                closePopupWindow();
                $saveButton.addClass('success');
                if (saveToCloudTimeout !== false){ clearTimeout(saveToCloudTimeout); }
                saveToCloudTimeout = setTimeout(function(){
                    $saveButton.removeClass('success');
                    }, 2100);
                cloudAutoSave = backupCloudAutoSave;
                lastCloudAutoSave = PokeboxDaysPassed;
                });
            }
    }

    // Define a function for triggering the sequence of events leading to a cloud load
    var loadFromCloudTimeout = false;
    function triggerLoadFromCloud(){
        //console.log('triggerLoadFromCloud()');
        if (validateCloudFormInputs()){
            var $loadButton = $('a.load_from_cloud', $panelDiv);
            $loadButton.removeClass('success');
            //var backupCloudAutoSave = cloudAutoSave;
            cloudAutoSave = false;
            importPokeBoxSaveData(function(){
                closePopupWindow();
                $loadButton.addClass('success');
                if (loadFromCloudTimeout !== false){ clearTimeout(loadFromCloudTimeout); }
                loadFromCloudTimeout = setTimeout(function(){
                    $loadButton.removeClass('success');
                    }, 2100);
                //cloudAutoSave = backupCloudAutoSave;
                });
            }
    }

    // Define a function for validating the cloud form inputs from the popup window
    function validateCloudFormInputs(){

        // Return if we don't have access to local storage or we're not allowed to save
        if (appFreeMode){ return false; }
        if (typeof window.localStorage === 'undefined'){ return false; }

        // Collect the lock name and key code fields and collect their values
        $lockNameField = $popupWindow.find('input[name="lock_name"]');
        $keyCodeField = $popupWindow.find('input[name="key_code"]');
        cloudLockName = $lockNameField.val().trim();
        cloudKeyCode = $keyCodeField.val().trim();

        // Define a variable to hold the error state, default to false
        var formHasError = false;
        $lockNameField.removeClass('has_error');
        $lockNameField.removeClass('has_error');

        // Check to ensure the fields are not empty
        if (cloudLockName === false || !cloudLockName.length){ $lockNameField.addClass('has_error'); formHasError = true; }
        if (cloudKeyCode === false || !cloudKeyCode.length){ $keyCodeField.addClass('has_error'); formHasError = true; }
        if (formHasError){ return false; }

        // Check to ensure the fields are betwen min/max lengths
        if (cloudLockName.length < 8 || cloudLockName.length > 32){ $lockNameField.addClass('has_error'); formHasError = true; }
        if (cloudKeyCode.length < 8 || cloudKeyCode.length > 32){ $keyCodeField.addClass('has_error'); formHasError = true; }
        if (formHasError){ return false; }

        // Ensure the lock name is only alphanumeric
        if (!cloudLockName.match(/^[-_a-z0-9\.]+$/i)){ $lockNameField.addClass('has_error'); formHasError = true; }
        if (formHasError){ return false; }

        // Otherwise we can return true
        return true;

    }

    // Define a function for exporting PokeBox save data from localStorage to the cloud
    function exportPokeBoxSaveData(onComplete){

        // Return if we don't have access to local storage or we're not allowed to save
        if (appFreeMode){ return false; }
        if (typeof window.localStorage === 'undefined'){ return false; }

        // Loop through compatible storage keys and collect data for export file
        //console.log('window.localStorage =', window.localStorage);
        //console.log('cloudCompatibleStorageKeys =', cloudCompatibleStorageKeys);
        var localStorageExport = {};
        for (var i = 0; i < cloudCompatibleStorageKeys.length; i++){
            var storageKey = cloudCompatibleStorageKeys[i];
            localStorageExport[storageKey] = typeof window.localStorage[storageKey] !== 'undefined' ? window.localStorage[storageKey] : false;
            //console.log('localStorageExport['+storageKey+'] =', localStorageExport[storageKey]);
            if ((localStorageExport[storageKey] === false || !localStorageExport[storageKey].length)
                && allowEmptyCloudStorageKeys.indexOf(storageKey) === -1){
                //console.log('localStorageExport['+storageKey+'] is empty! \nUnable to export!');
                return false;
                }

            }

        // Collect the cloud save name and password, then send the data
        //var cloudLockName = 'Default';
        //var cloudKeyCode = 'Default';
        if (cloudLockName === false || !cloudLockName.length){ return false; }
        if (cloudKeyCode === false || !cloudKeyCode.length){ return false; }
        var cloudSaveData = JSON.stringify(localStorageExport);
        //console.log('cloudLockName = ', cloudLockName);
        //console.log('cloudKeyCode = ', cloudKeyCode);
        //console.log('cloudSaveData = ', cloudSaveData);
        $.ajax({
            type: "POST",
            url: 'scripts/cloudSave.php'+(appMigrateMode ? '?migrate=true' : ''),
            data: {'lock': cloudLockName, key: cloudKeyCode, data: cloudSaveData},
            success: function(data){
                if (data.length && data.match(/^success|error/)){
                    var response = data.split('\n');
                    var status = response.shift();
                    var messages = response.slice(0, response.length);
                    //console.log('status =', status);
                    //console.log('messages =', messages);
                    if (typeof onComplete === 'function'){ return onComplete(); }
                    else { return true; }
                    } else {
                    //console.log('data =', data);
                    return false;
                    }
                }
            });

    }


    // Define a function for importing PokeBox save data from the cloud to localStorage
    var importReloadTimeout = false;
    function importPokeBoxSaveData(onComplete){

        // Return if we don't have access to local storage or we're not allowed to save
        if (appFreeMode){ return false; }
        if (typeof window.localStorage === 'undefined'){ return false; }

        // Collect the lock name and key code fields for later
        $lockNameField = $popupWindow.find('input[name="lock_name"]');
        $keyCodeField = $popupWindow.find('input[name="key_code"]');

        // Collect the cloud save name and password, then send the data
        //var cloudLockName = 'Default';
        //var cloudKeyCode = 'Default';
        if (cloudLockName === false || !cloudLockName.length){ return false; }
        if (cloudKeyCode === false || !cloudKeyCode.length){ return false; }
        var cloudSaveData = false;
        //console.log('cloudLockName = ', cloudLockName);
        //console.log('cloudKeyCode = ', cloudKeyCode);
        //console.log('cloudSaveData = ', cloudSaveData);
        $.ajax({
            type: "POST",
            url: 'scripts/cloudLoad.php',
            data: {'lock': cloudLockName, key: cloudKeyCode},
            success: function(data){
                if (data.length && data.match(/^success|error/)){
                    var response = data.split('\n');
                    var status = response.shift().trim();
                    var savedata = '';
                    var messages = '';
                    if (response.length > 1){ savedata = response.pop().trim(); }
                    messages = response.slice(0, response.length);
                    //console.log('status =', status);
                    //console.log('messages =', messages);
                    //console.log('savedata =', savedata.length, savedata);
                    if (status === 'success' && savedata.length){
                        var localStorageImport = JSON.parse(savedata);
                        //console.log('localStorageImport =', localStorageImport);
                        for (var i = 0; i < cloudCompatibleStorageKeys.length; i++){
                            var storageKey = cloudCompatibleStorageKeys[i];
                            //console.log('checking localStorageImport['+storageKey+']:', localStorageImport[storageKey]);
                            if (typeof localStorageImport[storageKey] !== 'undefined'
                                && localStorageImport[storageKey].length){
                                //console.log('setting window.localStorage['+storageKey+'] to:', localStorageImport[storageKey]);
                                window.localStorage[storageKey] = localStorageImport[storageKey];
                                }
                            }
                        if (typeof onComplete === 'function'){ onComplete(); }
                        if (importReloadTimeout !== false){ clearTimeout(importReloadTimeout); }
                        importReloadTimeout = setTimeout(function(){ window.location = window.location.href; }, 2500);
                        return true;
                        } else {
                        alert('Error: '+messages);
                        $lockNameField.addClass('has_error');
                        $keyCodeField.addClass('has_error');
                        return false;
                        }
                    } else {
                    //console.log('data =', data);
                    $lockNameField.addClass('has_error');
                    $keyCodeField.addClass('has_error');
                    return false;
                    }
                }
            });

    }

    // Define a function for generating cloud save form markup
    var cloudSaveFormMarkup = '';
    function getCloudSaveFormMarkup(){
        if (cloudSaveFormMarkup === ''){
            cloudSaveFormMarkup =
                '<div class="cloud-form save">' +
                    '<div class="intro">' +
                        'Use the form below to save your data to the cloud!<br /> ' +
                        'Please enter a unique lock and key combination: ' +
                    '</div>' +
                    '<div class="fields">' +
                        '<div class="field"><strong>Lock Name:</strong> <input class="textbox" type="text" name="lock_name" value="{{cloud_lock_name}}" size="32" maxlength="32" /></div> ' +
                        '<div class="field"><strong>Key Code:</strong> <input class="textbox" type="password" name="key_code" value="{{cloud_key_code}}" size="32" maxlength=32"" /> <i class="eye">&#128065;</i></div> ' +
                    '</div>' +
                    '<div class="tip red">Please do not use personal info or passwords used on other websites!</div> ' +
                    '<div class="tip">Locks &amp; keys are between 8-32 chars in length. Keys are case-sensitive!</div> ' +
                    '<div class="tip">Lock &amp; key combinations cannot be retrieved or reset if lost!</div> ' +
                    '<label class="autosave" for="auto_save">' +
                        '<input class="checkbox" type="checkbox" name="auto_save" value="1" {{cloud_auto_save}} /> ' +
                        '<span class="label">Auto-save progress for the rest of this session?</span> ' +
                    '</label> ' +
                '</div>';
            }
        var cloudFormMarkup = cloudSaveFormMarkup;
        cloudFormMarkup = cloudFormMarkup.replace('{{cloud_lock_name}}', cloudLockName);
        cloudFormMarkup = cloudFormMarkup.replace('{{cloud_key_code}}', cloudKeyCode);
        cloudFormMarkup = cloudFormMarkup.replace('{{cloud_auto_save}}', (cloudAutoSave ? ' checked="checked"' : ''));
        return cloudFormMarkup;
    }


    // Define a function for generating cloud load form markup
    var cloudLoadFormMarkup = '';
    function getCloudLoadFormMarkup(){
        if (cloudLoadFormMarkup === ''){
            cloudLoadFormMarkup =
                '<div class="cloud-form load">' +
                    '<div class="intro">' +
                        'Use the form below to load your data from the cloud!<br /> ' +
                        'Please enter the unique lock and key combination: ' +
                    '</div>' +
                    '<div class="fields">' +
                        '<div class="field"><strong>Lock Name:</strong> <input class="textbox" type="text" name="lock_name" value="'+cloudLockName+'" placeholder="" size="32" maxlength="32" /></div> ' +
                        '<div class="field"><strong>Key Code:</strong> <input class="textbox" type="password" name="key_code" value="'+cloudKeyCode+'" placeholder="" size="32" maxlength=32"" /> <i class="eye">&#128065;</i></div> ' +
                    '</div>' +
                    '{{existing_progress_message}}' +
                    '<div class="tip">Locks &amp; keys are between 8-32 chars in length. Keys are case-sensitive!</div> ' +
                    '<div class="tip">Lock &amp; key combinations cannot be retrieved or reset if lost!</div> ' +
                '</div>';
            }
        var cloudFormMarkup = cloudLoadFormMarkup;
        cloudFormMarkup = cloudFormMarkup.replace('{{cloud_lock_name}}', cloudLockName);
        cloudFormMarkup = cloudFormMarkup.replace('{{cloud_key_code}}', cloudKeyCode);
        if (PokeboxDaysPassed > 0 && PokemonSpeciesSeen !== {}){
            //var numSeen = Object.keys(PokemonSpeciesSeen).length;
            var dexPercent = $('.counter.pokedex', $panelBanner).find('.percent').text();
            var numDays = PokeboxDaysPassed;
            cloudFormMarkup = cloudFormMarkup.replace('{{existing_progress_message}}',
                '<div class="tip red">Local progress <strong class="small">('+dexPercent+' in '+numDays+' days)</strong> will be overwritten by the loaded data!</div> '
                );
            } else {
            cloudFormMarkup = cloudFormMarkup.replace('{{existing_progress_message}}', '');
            }
        return cloudFormMarkup;
    }


    // Update the math object with a seeded random functon
    Math.seed = 1;
    // //console.log('\n Math.seed set to ', Math.seed);
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
    function sumValuesByKey( obj, key, skipNeg ) {
        if (typeof obj === 'undefined'){ return false; }
        if (typeof key === 'undefined'){ return false; }
        if (typeof skipNeg === 'undefined'){ skipNeg = false; }
        var sum = 0;
        var pKeys = Object.keys(obj);
        for (var i = 0; i < pKeys.length; i++){
            var sObj = obj[i];
            if (typeof sObj[key] === 'number'){
                if (skipNeg && sObj[key] < 0){ continue; }
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

    // Define a function to convert a given string into a password value for comparrison
    function stringToPassValue(ps){
        ps = ps.toUpperCase().replace(/[^a-z0-9]+/i, '');
        var pv = 0;
        for (var i = 0; i < ps.length; i++){
            pv += ps.charCodeAt(i) * i;
            }
        return pv;
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
        getPokedexTotals: function(){ return JSON.parse(JSON.stringify(currentPokedexTotals)); },
        getPokemonTotals: function(){ return {
            babyPokemon: totalBabyPokemon,
            specialPokemon: totalSpecialPokemon,
            legendaryPokemon: totalLegendaryPokemon,
            mythicalPokemon: totalMythicalPokemon,
            ultraBeasts: totalUltraBeasts,
            fossilPokemon: totalFossilPokemon,
            maxDexNumber: maxDexNumber,
            nationalDexNumbers: nationalDexNumbers.length,
            missingDexNumbers: missingDexNumbers.length
            }; },
        addStarterRewardToIndex: function(reward){ starterRewardIndex[Object.keys(starterRewardIndex).length] = reward; },
        addShadowRewardToIndex: function(reward){ shadowRewardIndex[Object.keys(shadowRewardIndex).length] = reward; },
        addShiningRewardToIndex: function(reward){ shiningRewardIndex[Object.keys(shiningRewardIndex).length] = reward; },
        getStarterRewardIndex: function(){ return JSON.parse(JSON.stringify(starterRewardIndex)); },
        getShadowRewardIndex: function(){ return JSON.parse(JSON.stringify(shadowRewardIndex)); },
        getShiningRewardIndex: function(){ return JSON.parse(JSON.stringify(shiningRewardIndex)); },
        getRewardIndexes: function(){ return JSON.parse(JSON.stringify({
            starterPokemon:starterRewardIndex,
            shadowPokemon:shadowRewardIndex,
            shiningPokemon:shiningRewardIndex
            })); }
        };

})();