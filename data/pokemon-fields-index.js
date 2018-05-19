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
            baseTypes: ['grass', 'bug', 'fairy', 'poison']
            },
        'savanna': {
            order: indexOrder++,
            token: 'savanna',
            name: 'Savanna',
            baseTypes: ['normal']
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
            baseTypes: ['water', '', 'grass']
            },
        'seafloor': {
            order: indexOrder++,
            token: 'seafloor',
            name: 'seafloor',
            baseTypes: ['water']
            },
        'cave': {
            order: indexOrder++,
            token: 'cave',
            name: 'Cave',
            baseTypes: ['rock', 'ground', 'poison']
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
            baseTypes: ['fire', 'rock', 'dragon']
            },
        'snow': {
            order: indexOrder++,
            token: 'snow',
            name: 'Snow',
            baseTypes: ['ice', '', 'water']
            },
        'city': {
            order: indexOrder++,
            token: 'city',
            name: 'City',
            baseTypes: ['electric', 'steel', 'poison', 'fighting']
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
        };

    // Update the global index order with current value
    window.PokemonFieldsIndexOrder = indexOrder;

    // Merge locally generated data with the global index
    Object.assign(window.PokemonFieldsIndex, thisIndex);

})();