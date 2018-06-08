/*
    * GLOBAL POKEMON INDEX DATA (CUSTOM / GEN X)
    * This data was collected from Zarel for Pokemon Showdown
    * via: https://github.com/Zarel/Pokemon-Showdown/blob/master/data/pokedex.js
    * Modifications have been made to the data based on personal preference
    */

(function(){

    // Collect a reference to the global species index
    var thisIndex = window.PokemonSpeciesIndex;
    thisIndex.setGeneration(8);
    thisIndex.setRegion('custom');

    // Add the generation's list of base species to the index
    var indexOrder = thisIndex.indexOrder;
    thisIndex.addSpeciesIndex({

        // Base Pokedex

        'estrus-nidoqueen': {
            order: thisIndex.afterOrder('nidoqueen'),
            token: 'estrus-nidoqueen',
            name: 'Estrus Nidoqueen',
            formClass: 'burst-evolution',
            formToken: 'estrus',
            baseSpecies: 'nidoqueen',
            number: 31,
            types: ['poison', 'ground'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 90, phAttack: 117, phDefense: 87, spAttack: 100, spDefense: 85, speed: 126},
            abilities: {0: 'poison-point', 1: 'rivalry', hidden: 'sheer-force'},
            height: 0.2,
            weight: 0.9,
            colors: ['blue', 'pink'],
            eggCycles: 20,
            eggPartner: 'nidoking',
            eggGroups: ['monster', 'field'],
            prevEvolution: 'nidoqueen'
            },

        'burst-machamp': {
            order: thisIndex.afterOrder('machamp'),
            token: 'burst-machamp',
            name: 'Burst Machamp',
            formClass: 'burst-evolution',
            formToken: 'burst',
            baseSpecies: 'machamp',
            number: 68,
            types: ['fighting'],
            genderRatio: {male: 0.75, female: 0.25},
            baseStats: {hp: 90, phAttack: 130, phDefense: 80, spAttack: 65, spDefense: 85, speed: 55},
            abilities: {0: 'guts', 1: 'no-guard', hidden: 'steadfast'},
            height: 1.6,
            weight: 130,
            colors: ['red', 'black', 'yellow'],
            eggCycles: 20,
            eggGroups: ['human-like'],
            prevEvolution: 'machamp'
            },

        'baby-kangaskhan': {
            order: thisIndex.beforeOrder('kangaskhan'),
            token: 'baby-kangaskhan',
            name: 'Baby Kangaskhan',
            class: 'baby',
            formClass: 'baby-evolution',
            formToken: 'baby',
            number: 115,
            types: ['normal'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 26, phAttack: 24, phDefense: 20, spAttack: 10, spDefense: 20, speed: 23},
            abilities: {0: 'early-bird', 1: 'scrappy', hidden: 'inner-focus'},
            height: 0.55,
            weight: 20,
            colors: ['gray', 'yellow', 'brown'],
            eggCycles: 20,
            eggParent: 'kangaskhan',
            eggGroups: ['undiscovered'],
            nextEvolutions: [{
                species: 'kangaskhan',
                method: 'happiness',
                value: 'high',
                method2: 'affection',
                value2: 'high'
                }, {
                species: 'cubone',
                method: 'extinction',
                value: true
                }]
            },

        'ms-mime': {
            order: thisIndex.afterOrder('mr-mime'),
            token: 'ms-mime',
            name: 'Ms. Mime',
            formClass: 'gender-variant',
            formToken: 'female',
            number: 122,
            types: ['psychic', 'fairy'],
            genderRatio: {female: 1.0000},
            baseStats: {hp: 40, phAttack: 45, phDefense: 65, spAttack: 100, spDefense: 120, speed: 90},
            abilities: {0: 'soundproof', 1: 'filter', hidden: 'technician'},
            height: 1.3,
            weight: 54.5,
            colors: ['blue', 'pink', 'white', 'red'],
            eggCycles: 25,
            eggPartner: 'mr-mime',
            eggGroups: ['human-like'],
            prevEvolution: 'mime-jr'
            },

        'shiny-ditto': {
            order: thisIndex.afterOrder('ditto'),
            token: 'shiny-ditto',
            name: 'Shiny Ditto',
            formClass: 'shiny-variant',
            formToken: 'shiny',
            number: 132,
            types: ['normal'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 189, phAttack: 1, phDefense: 48, spAttack: 1, spDefense: 48, speed: 1},
            abilities: {0: 'limber', hidden: 'imposter'},
            height: 0.3,
            weight: 4,
            colors: ['blue', 'purple'],
            eggCycles: 20,
            eggGroups: ['ditto']
            },

        'ash-greninja': {
            order: thisIndex.afterOrder('greninja'),
            token: 'ash-greninja',
            name: 'Ash Greninja',
            formClass: 'burst-evolution',
            formToken: 'ash',
            baseSpecies: 'greninja',
            number: 658,
            types: ['water', 'dark'],
            genderRatio: {male: 1.000},
            baseStats: {hp: 72, phAttack: 145, phDefense: 67, spAttack: 153, spDefense: 71, speed: 132},
            abilities: {0: 'battle-bond'},
            height: 1.5,
            weight: 40,
            colors: ['blue', 'pink', 'black', 'white', 'red'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            prevEvolution: 'greninja'
            },

        'eternal-floette': {
            order: thisIndex.afterOrder('floette'),
            token: 'eternal-floette',
            name: 'Eternal Floette',
            formClass: 'burst-evolution',
            formToken: 'eternal',
            baseSpecies: 'floette',
            number: 670,
            types: ['fairy'],
            genderRatio: {female: 1.000},
            baseStats: {hp: 74, phAttack: 65, phDefense: 67, spAttack: 125, spDefense: 128, speed: 92},
            abilities: {0: 'flower-veil'},
            height: 0.2,
            weight: 0.9,
            colors: ['white', 'red', 'black'],
            eggCycles: 20,
            eggGroups: ['undiscovered'],
            prevEvolution: 'floette',
            },

        'blade-aegislash': {
            order: thisIndex.afterOrder('aegislash'),
            token: 'blade-aegislash',
            name: 'Blade Aegislash',
            formClass: 'burst-evolution',
            formToken: 'blade',
            baseSpecies: 'aegislash',
            number: 681,
            types: ['steel', 'ghost'],
            baseStats: {hp: 60, phAttack: 150, phDefense: 50, spAttack: 150, spDefense: 50, speed: 60},
            abilities: {0: 'stance-change'},
            height: 1.7,
            weight: 53,
            colors: ['yellow', 'brown', 'purple', 'black', 'white'],
            eggCycles: 20,
            eggGroups: ['mineral'],
            prevEvolution: 'aegislash'
            },

        'meteor-minior': {
            order: thisIndex.afterOrder('minior'),
            token: 'meteor-minior',
            name: 'Meteor Minior',
            number: 774,
            formClass: 'burst-evolution',
            formClass2: 'random-variant',
            possibleForms: ['orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
            randomizeForms: true,
            baseForm: 'orange',
            types: ['rock', 'flying'],
            genderRatio: {none: 1.000},
            baseStats: {hp: 60, phAttack: 100, phDefense: 60, spAttack: 100, spDefense: 60, speed: 120},
            abilities: {0: 'shields-down'},
            height: 0.3,
            weight: 40,
            colors: ['white'],
            eggGroups: ['mineral'],
            prevEvolution: 'minior'
            },

        });
    thisIndex.indexOrder = indexOrder;

    // Update previous gen pokemon with new prev evolution data
    thisIndex.addPrevEvolutions([
        {base: 'kangaskhan', species: 'baby-kangaskhan'},
        ]);

    // Update previous gen pokemon with new gender ratio data
    thisIndex.addGenderRatios([
        {base: 'mr-mime', ratio: {male: 1.0000}},
        ]);

    // Update previous gen pokemon with new gender ratio data
    thisIndex.addEggPartners([
        {base: 'mr-mime', species: 'ms-mime'},
        ]);

    // Update previous gen pokemon with new next evolution data
    thisIndex.addNextEvolutions([

        {base: 'mime-jr', species: 'mr-mime', method: 'affection', value: 'high', method2: 'gender', value2: 'male', replace: true},
        {base: 'mime-jr', species: 'ms-mime', method: 'affection', value: 'high', method2: 'gender', value2: 'female'},

        {base: 'machamp', species: 'burst-machamp', method: 'burst-evolution', value: 'fighting-spirit', method2: 'type-surge', value2: 'fighting'},
        {base: 'nidoqueen', species: 'estrus-nidoqueen', method: 'burst-evolution', value: 'burning-passion', method2: 'type-surge', value2: 'poison'},

        {base: 'greninja', species: 'ash-greninja', method: 'burst-evolution', value: 'battle-bond', method2: 'type-surge', value2: 'water'},
        {base: 'floette', species: 'eternal-floette', method: 'burst-evolution', value: 'ultimate-weapon', method2: 'extinction', value2: true},
        {base: 'aegislash', species: 'blade-aegislash', method: 'burst-evolution', value: 'stance-change'},

        {base: 'minior', species: 'meteor-minior', method: 'burst-evolution', value: 'shields-down'},

        ]);

    // Update previous gen pokemon with known species appeal data
    thisIndex.addSpeciesAppealValues([

        // Predator/prey relationships
        {base: 'pidgeotto', species: 'exeggcute'},
        {base: 'crabrawler', species: 'exeggcute'},
        {base: 'pidgeot', species: 'magikarp'},
        {base: 'ekans', species: 'pidgey'},
        {base: 'ekans', species: 'spearow'},
        {base: 'alolan-grimer', species: 'trubbish'},
        {base: 'alolan-muk', species: 'garbodor'},
        {base: 'kingler', species: 'shellder'},
        {base: 'kingler', species: 'cloyster'},
        {base: 'omastar', species: 'shellder'},
        {base: 'taillow', species: 'wurmple'},
        {base: 'swellow', species: 'wurmple'},
        {base: 'starly', species: 'wurmple'},
        {base: 'wingull', species: 'wishiwashi'},
        {base: 'pelipper', species: 'wishiwashi'},
        {base: 'wailmer', species: 'wishiwashi'},
        {base: 'wailord', species: 'wishiwashi'},
        {base: 'starly', species: 'cherubi'},
        {base: 'archeops', species: 'omanyte'},
        {base: 'mandibuzz', species: 'cubone'},
        {base: 'heatmor', species: 'durant'},
        {base: 'toucannon', species: 'bounsweet'},
        {base: 'mareanie', species: 'corsola'},
        {base: 'toxapex', species: 'corsola'},
        {base: 'fletchling', species: 'scatterbug'},
        {base: 'fletchinder', species: 'spewpa'},
        {base: 'fearow', species: 'bounsweet'},
        {base: 'pinsir', species: 'cherubi'},
        {base: 'lurantis', species: 'caterpie'},
        {base: 'scyther', species: 'wurmple'},
        {base: 'yungoos', species: 'rattata'},
        {base: 'gumshoos', species: 'raticate'},
        {base: 'spinarak', species: 'cutiefly'},
        {base: 'pineco', species: 'cutiefly'},
        {base: 'pineco', species: 'dwebble'},
        {base: 'sneasel', species: 'alolan-vulpix'},
        {base: 'weavile', species: 'alolan-sandshew'},
        {base: 'gabite', species: 'carbink'},
        {base: 'sableye', species: 'carbink'},
        {base: 'sableye', species: 'diancie'},
        {base: 'garchomp', species: 'diancie'},
        {base: 'pikipek', species: 'metapod'},

        // Symbiotic relationships
        {base: 'shellder', species: 'slowpoke'},
        {base: 'remoraid', species: 'mantyke'},
        {base: 'dusknoir', species: 'yamask'},
        {base: 'dusknoir', species: 'froslass'},
        {base: 'luvdisc', species: 'corsola'},
        {base: 'alomomola', species: 'luvdisc'},
        {base: 'plusle', species: 'minun'},
        {base: 'minun', species: 'plusle'},
        {base: 'heracross', species: 'pinsir'},
        {base: 'pinsir', species: 'heracross'},
        {base: 'karrablast', species: 'shelmet'},
        {base: 'shelmet', species: 'karrablast'},
        {base: 'solrock', species: 'lunatone'},
        {base: 'lunatone', species: 'solrock'},

        // Rival relationships
        {base: 'zangoose', species: 'seviper'},
        {base: 'seviper', species: 'zangoose'},
        {base: 'pinsir', species: 'vikavolt'},
        {base: 'mimikyu', species: 'pikachu'},
        {base: 'carvanha', species: 'basculin'},
        {base: 'parasect', species: 'shiinotic'},
        {base: 'shiinotic', species: 'parasect'},

        // Romantic relationships
        {base: 'tauros', species: 'miltank'},
        {base: 'volbeat', species: 'illumise'},

        // Feeding/pollination relationships
        {base: 'butterfree', species: 'venusaur'},
        {base: 'butterfree', species: 'meganium'},
        {base: 'beautifly', species: 'victreebel'},
        {base: 'beautifly', species: 'lilligant'},
        {base: 'vivillon', species: 'florges'},
        {base: 'vivillon', species: 'comfey'},
        {base: 'dustox', species: 'gloom'},
        {base: 'venomoth', species: 'vileplume'},
        {base: 'cutiefly', species: 'roselia'},
        {base: 'mothim', species: 'roserade'},
        {base: 'mothim', species: 'combee'},
        {base: 'beedrill', species: 'bayleef'},
        {base: 'combee', species: 'bellossom'},
        {base: 'ledyba', species: 'sunflora'},
        {base: 'vibrava', species: 'maractus'},
        {base: 'yanma', species: 'cacnea'},

        // One-sided (theft) relationships
        {base: 'heracross', species: 'bulbasaur'},
        {base: 'heracross', species: 'vespiquen'},
        {base: 'dewpider', species: 'surskit'},
        {base: 'murkrow', species: 'wimpod'},
        {base: 'meowth', species: 'wimpod'},
        {base: 'spoink', species: 'clamperl'},

        // Mistaken identify relationships
        {base: 'illumise', species: 'lanturn'},
        {base: 'kricketot', species: 'chatot'},

        // Legendary trigger relationships
        {base: 'mew', species: 'mewtwo'},
        {base: 'regirock', species: 'relicanth'},
        {base: 'regice', species: 'relicanth'},
        {base: 'registeel', species: 'relicanth'},
        {base: 'diancie', species: 'carbink'},

        ]);

})();
