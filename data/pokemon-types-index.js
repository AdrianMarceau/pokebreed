/*
  * GLOBAL TYPE INDEX DATA
  * This data was collected from various sources online and cobbled together
  * Modifications have been made to the data based on personal preference
  */

(function(){

    // Define the global type index object if not already exists
    if (typeof window.PokemonTypesIndex === 'undefined'){ window.PokemonTypesIndex = {}; }

    // Define a local variable to hold the current order, starting at existing if set
    var indexOrder = typeof window.PokemonTypesIndexOrder !== 'undefined' ? window.PokemonTypesIndexOrder : 0;

    // Define the variable to hold the type index
    var thisIndex = {
        normal: {
            order: indexOrder++,
            token: 'normal',
            name: 'Normal',
            colour: 'A8A878',
            matchups: {
                strengths: [],
                handicaps: ['rock', 'steel'],
                futilities: ['ghost'],
                weaknesses: ['fighting'],
                resistances: [],
                immunities: ['ghost']
                }
            },
        fighting: {
            order: indexOrder++,
            token: 'fighting',
            name: 'Fighting',
            colour: 'C03028',
            matchups: {
                strengths: ['normal', 'rock', 'steel', 'ice', 'dark'],
                handicaps: ['flying', 'poison', 'bug', 'psychic', 'fairy'],
                futilities: ['ghost'],
                weaknesses: ['flying', 'psychic', 'fairy'],
                resistances: ['rock', 'bug', 'dark'],
                immunities: []
                }
            },
        flying: {
            order: indexOrder++,
            token: 'flying',
            name: 'Flying',
            colour: 'A890F0',
            matchups: {
                strengths: ['fighting', 'bug', 'grass'],
                handicaps: ['rock', 'steel', 'electric'],
                futilities: [],
                weaknesses: ['rock', 'electric', 'ice'],
                resistances: ['fighting', 'bug', 'grass'],
                immunities: ['ground']
                }
            },
        poison: {
            order: indexOrder++,
            token: 'poison',
            name: 'Poison',
            colour: 'A040A0',
            matchups: {
                strengths: ['grass', 'fairy'],
                handicaps: ['poison', 'ground', 'rock', 'ghost'],
                futilities: ['steel'],
                weaknesses: ['ground', 'psychic'],
                resistances: ['fighting', 'poison', 'bug', 'grass', 'fairy'],
                immunities: []
                }
            },
        ground: {
            order: indexOrder++,
            token: 'ground',
            name: 'Ground',
            colour: 'E0C068',
            matchups: {
                strengths: ['electric', 'fire', 'poison', 'rock', 'steel'],
                handicaps: ['bug', 'grass'],
                futilities: ['flying'],
                weaknesses: ['grass', 'ice', 'water'],
                resistances: ['poison', 'rock'],
                immunities: ['electric']
                }
            },
        rock: {
            order: indexOrder++,
            token: 'rock',
            name: 'Rock',
            colour: 'B8A038',
            matchups: {
                strengths: ['bug', 'fire', 'flying', 'ice'],
                handicaps: ['fighting', 'ground'],
                futilities: [],
                weaknesses: ['fighting', 'grass', 'ground', 'water'],
                resistances: ['fire', 'flying', 'normal', 'poison'],
                immunities: []
                }
            },
        bug: {
            order: indexOrder++,
            token: 'bug',
            name: 'Bug',
            colour: 'A8B820',
            matchups: {
                strengths: ['grass', 'poison', 'psychic'],
                handicaps: ['fighting', 'fire', 'flying', 'ghost'],
                futilities: [],
                weaknesses: ['fire', 'flying', 'poison', 'rock'],
                resistances: ['fighting', 'grass', 'ground'],
                immunities: []
                }
            },
        ghost: {
            order: indexOrder++,
            token: 'ghost',
            name: 'Ghost',
            colour: '705898',
            matchups: {
                strengths: ['ghost'],
                handicaps: [],
                futilities: ['normal', 'psychic'],
                weaknesses: ['ghost', 'dark'],
                resistances: ['bug', 'poison'],
                immunities: ['normal', 'fighting']
                }
            },
        steel: {
            order: indexOrder++,
            token: 'steel',
            name: 'Steel',
            colour: 'B8B8D0',
            matchups: {
                strengths: ['fairy', 'ice', 'rock'],
                handicaps: ['electric', 'fire', 'steel', 'water'],
                futilities: [],
                weaknesses: ['fighting', 'fire', 'ground'],
                resistances: ['bug', 'dragon', 'fairy', 'flying', 'grass', 'ice', 'normal', 'psychic', 'rock', 'steel'],
                immunities: ['poison']
                }
            },
        fire: {
            order: indexOrder++,
            token: 'fire',
            name: 'Fire',
            colour: 'F08030',
            matchups: {
                strengths: ['bug', 'grass', 'ice', 'steel'],
                handicaps: ['dragon', 'fire', 'rock', 'water'],
                futilities: [],
                weaknesses: ['ground', 'rock', 'water'],
                resistances: ['bug', 'fairy', 'fire', 'grass', 'ice', 'steel'],
                immunities: []
                }
            },
        water: {
            order: indexOrder++,
            token: 'water',
            name: 'Water',
            colour: '6890F0',
            matchups: {
                strengths: ['fire', 'ground', 'rock'],
                handicaps: ['dragon', 'grass', 'water'],
                futilities: [],
                weaknesses: ['electric', 'grass'],
                resistances: ['fire', 'ice', 'steel', 'water'],
                immunities: []
                }
            },
        grass: {
            order: indexOrder++,
            token: 'grass',
            name: 'Grass',
            colour: '78C850',
            matchups: {
                strengths: ['ground', 'rock', 'water'],
                handicaps: ['bug', 'dragon', 'fire', 'flying', 'grass', 'poison', 'steel'],
                futilities: [],
                weaknesses: ['bug', 'fire', 'flying', 'ice', 'poison'],
                resistances: ['electric', 'grass', 'ground', 'water'],
                immunities: []
                }
            },
        electric: {
            order: indexOrder++,
            token: 'electric',
            name: 'Electric',
            colour: 'F8D030',
            matchups: {
                strengths: ['flying', 'water'],
                handicaps: ['dragon', 'electric', 'grass'],
                futilities: ['ground'],
                weaknesses: ['ground'],
                resistances: ['electric', 'flying', 'steel'],
                immunities: []
                }
            },
        psychic: {
            order: indexOrder++,
            token: 'psychic',
            name: 'Psychic',
            colour: 'F85888',
            matchups: {
                strengths: ['fighting', 'poison'],
                handicaps: ['psychic', 'steel'],
                futilities: ['dark'],
                weaknesses: ['bug', 'dark', 'ghost'],
                resistances: ['fighting', 'psychic'],
                immunities: []
                }
            },
        ice: {
            order: indexOrder++,
            token: 'ice',
            name: 'Ice',
            colour: '98D8D8',
            matchups: {
                strengths: ['dragon', 'flying', 'grass', 'ground'],
                handicaps: ['fire', 'ice', 'steel', 'water'],
                futilities: [],
                weaknesses: ['fighting', 'fire', 'rock', 'steel'],
                resistances: ['ice'],
                immunities: []
                }
            },
        dragon: {
            order: indexOrder++,
            token: 'dragon',
            name: 'Dragon',
            colour: '7038F8',
            matchups: {
                strengths: ['dragon'],
                handicaps: ['steel'],
                futilities: ['fairy'],
                weaknesses: ['dragon', 'fairy', 'ice'],
                resistances: ['electric', 'fire', 'grass', 'water'],
                immunities: []
                }
            },
        dark: {
            order: indexOrder++,
            token: 'dark',
            name: 'Dark',
            colour: '705848',
            matchups: {
                strengths: ['ghost', 'psychic'],
                handicaps: ['dark', 'fairy', 'fighting'],
                futilities: [],
                weaknesses: ['bug', 'fairy', 'fighting'],
                resistances: ['dark', 'ghost'],
                immunities: ['psychic']
                }
            },
        fairy: {
            order: indexOrder++,
            token: 'fairy',
            name: 'Fairy',
            colour: 'EE99AC',
            matchups: {
                strengths: ['dark', 'dragon', 'fighting'],
                handicaps: ['fire', 'poison', 'steel'],
                futilities: [],
                weaknesses: ['poison', 'steel'],
                resistances: ['bug', 'dark', 'fighting'],
                immunities: ['dragon']
                }
            }
        };

    // Update the global index order with current value
    window.PokemonTypesIndexOrder = indexOrder;

    // Merge locally generated data with the global index
    Object.assign(window.PokemonTypesIndex, thisIndex);

})();