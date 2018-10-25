/*
  * GLOBAL FIELD INDEX DATA
  * This data was custom generated specifically for the simulator and
  * is tied to box background images from Gen 4 (for the time being).
  */

(function(){

    // Define the global field index object if not already exists
    if (typeof window.PokemonFieldsIndex === 'undefined'){ window.PokemonFieldsIndex = {}; }

    // Define a local variable to hold the current order, starting at existing if set
    var indexOrder = typeof window.PokemonFieldsIndexOrder !== 'undefined' ? window.PokemonFieldsIndexOrder : 0;

    // Define the variable to hold the field index
    var thisIndex = {
        'forest': {
            order: indexOrder++,
            token: 'forest',
            name: 'Forest',
            baseTypes: ['grass', 'bug', 'fairy']
            },
        'savanna': {
            order: indexOrder++,
            token: 'savanna',
            name: 'Savanna',
            baseTypes: ['normal', '', 'electric']
            },
        'desert': {
            order: indexOrder++,
            token: 'desert',
            name: 'Desert',
            baseTypes: ['ground', 'grass', 'fire']
            },
        'beach': {
            order: indexOrder++,
            token: 'beach',
            name: 'Beach',
            baseTypes: ['water', 'ground', 'flying']
            },
        'river': {
            order: indexOrder++,
            token: 'river',
            name: 'River',
            baseTypes: ['water', '', 'grass', 'bug']
            },
        'seafloor': {
            order: indexOrder++,
            token: 'seafloor',
            name: 'Seafloor',
            baseTypes: ['water']
            },
        'cave': {
            order: indexOrder++,
            token: 'cave',
            name: 'Cave',
            baseTypes: ['ground', 'poison', 'rock']
            },
        'crag': {
            order: indexOrder++,
            token: 'crag',
            name: 'Crag',
            baseTypes: ['poison', 'fire', 'dark']
            },
        'volcano': {
            order: indexOrder++,
            token: 'volcano',
            name: 'Volcano',
            baseTypes: ['fire', '', 'rock']
            },
        'tundra': {
            order: indexOrder++,
            token: 'tundra',
            name: 'tundra',
            baseTypes: ['ice', '', 'water']
            },
        'city': {
            order: indexOrder++,
            token: 'city',
            name: 'City',
            baseTypes: ['poison', 'normal', 'fighting']
            },
        'sky': {
            order: indexOrder++,
            token: 'sky',
            name: 'Sky',
            baseTypes: ['flying', '', 'dragon']
            },
        'space': {
            order: indexOrder++,
            token: 'space',
            name: 'Space',
            baseTypes: ['psychic', '', 'dragon']
            },
        'graveyard': {
            order: indexOrder++,
            token: 'graveyard',
            name: 'Graveyard',
            baseTypes: ['ghost', 'dark', '', 'poison', 'grass']
            },
        'factory': {
            order: indexOrder++,
            token: 'factory',
            name: 'Factory',
            baseTypes: ['electric', 'steel']
            },
        'cliffside': {
            order: indexOrder++,
            token: 'cliffside',
            name: 'Cliffside',
            baseTypes: ['rock', '', 'ground', 'dragon']
            },
        'dojo': {
            order: indexOrder++,
            token: 'dojo',
            name: 'Dojo',
            baseTypes: ['fighting']
            },
        'dreamworld': {
            order: indexOrder++,
            token: 'dreamworld',
            name: 'Dreamworld',
            baseTypes: ['fairy', '', 'psychic']
            },
        'temple': {
            order: indexOrder++,
            token: 'temple',
            name: 'Temple',
            baseTypes: ['dragon', '', 'flying']
            },
        };

    // Update the global index order with current value
    window.PokemonFieldsIndexOrder = indexOrder;

    // Merge locally generated data with the global index
    Object.assign(window.PokemonFieldsIndex, thisIndex);

})();