// src/mocks/pokemon-fixtures.js

// Response for: https://pokeapi.co/api/v2/pokemon/?limit=50
export const pokemonListResponse = {
  count: 1302,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=50&limit=50',
  previous: null,
  results: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
    { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
    { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
    { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
    { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
    { name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' },
    { name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/' },
    { name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/' },
    { name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/' },
    { name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/' },
    { name: 'kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/' },
    { name: 'beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/' },
    { name: 'pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/' },
    { name: 'pidgeotto', url: 'https://pokeapi.co/api/v2/pokemon/17/' },
    { name: 'pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/' },
    { name: 'rattata', url: 'https://pokeapi.co/api/v2/pokemon/19/' },
    { name: 'raticate', url: 'https://pokeapi.co/api/v2/pokemon/20/' },
    { name: 'spearow', url: 'https://pokeapi.co/api/v2/pokemon/21/' },
    { name: 'fearow', url: 'https://pokeapi.co/api/v2/pokemon/22/' },
    { name: 'ekans', url: 'https://pokeapi.co/api/v2/pokemon/23/' },
    { name: 'arbok', url: 'https://pokeapi.co/api/v2/pokemon/24/' },
    { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
    { name: 'raichu', url: 'https://pokeapi.co/api/v2/pokemon/26/' },
    { name: 'sandshrew', url: 'https://pokeapi.co/api/v2/pokemon/27/' },
    { name: 'sandslash', url: 'https://pokeapi.co/api/v2/pokemon/28/' },
    { name: 'nidoran-f', url: 'https://pokeapi.co/api/v2/pokemon/29/' },
    { name: 'nidorina', url: 'https://pokeapi.co/api/v2/pokemon/30/' },
    { name: 'nidoqueen', url: 'https://pokeapi.co/api/v2/pokemon/31/' },
    { name: 'nidoran-m', url: 'https://pokeapi.co/api/v2/pokemon/32/' },
    { name: 'nidorino', url: 'https://pokeapi.co/api/v2/pokemon/33/' },
    { name: 'nidoking', url: 'https://pokeapi.co/api/v2/pokemon/34/' },
    { name: 'clefairy', url: 'https://pokeapi.co/api/v2/pokemon/35/' },
    { name: 'clefable', url: 'https://pokeapi.co/api/v2/pokemon/36/' },
    { name: 'vulpix', url: 'https://pokeapi.co/api/v2/pokemon/37/' },
    { name: 'ninetales', url: 'https://pokeapi.co/api/v2/pokemon/38/' },
    { name: 'jigglypuff', url: 'https://pokeapi.co/api/v2/pokemon/39/' },
    { name: 'wigglytuff', url: 'https://pokeapi.co/api/v2/pokemon/40/' },
    { name: 'zubat', url: 'https://pokeapi.co/api/v2/pokemon/41/' },
    { name: 'golbat', url: 'https://pokeapi.co/api/v2/pokemon/42/' },
    { name: 'oddish', url: 'https://pokeapi.co/api/v2/pokemon/43/' },
    { name: 'gloom', url: 'https://pokeapi.co/api/v2/pokemon/44/' },
    { name: 'vileplume', url: 'https://pokeapi.co/api/v2/pokemon/45/' },
    { name: 'paras', url: 'https://pokeapi.co/api/v2/pokemon/46/' },
    { name: 'parasect', url: 'https://pokeapi.co/api/v2/pokemon/47/' },
    { name: 'venonat', url: 'https://pokeapi.co/api/v2/pokemon/48/' },
    { name: 'venomoth', url: 'https://pokeapi.co/api/v2/pokemon/49/' },
    { name: 'diglett', url: 'https://pokeapi.co/api/v2/pokemon/50/' },
  ],
}

// Helper: build a detail response for a single pokemon
// Real API returns a huge object — this is the shape most apps actually use.
// Add more fields if your component needs them.
const makePokemonDetail = (id, name, types, height, weight, baseStats) => ({
  id,
  name,
  height,
  weight,
  base_experience: 100 + id,
  order: id,
  is_default: true,
  sprites: {
    front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`,
    back_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
    other: {
      'official-artwork': {
        front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      },
    },
  },
  types: types.map((type, i) => ({
    slot: i + 1,
    type: { name: type, url: `https://pokeapi.co/api/v2/type/${type}/` },
  })),
  abilities: [
    { ability: { name: 'overgrow', url: '' }, is_hidden: false, slot: 1 },
    { ability: { name: 'chlorophyll', url: '' }, is_hidden: true, slot: 3 },
  ],
  stats: [
    { base_stat: baseStats[0], effort: 0, stat: { name: 'hp', url: '' } },
    { base_stat: baseStats[1], effort: 0, stat: { name: 'attack', url: '' } },
    { base_stat: baseStats[2], effort: 0, stat: { name: 'defense', url: '' } },
    {
      base_stat: baseStats[3],
      effort: 0,
      stat: { name: 'special-attack', url: '' },
    },
    {
      base_stat: baseStats[4],
      effort: 0,
      stat: { name: 'special-defense', url: '' },
    },
    { base_stat: baseStats[5], effort: 0, stat: { name: 'speed', url: '' } },
  ],
  species: { name, url: `https://pokeapi.co/api/v2/pokemon-species/${id}/` },
})

// Response for: https://pokeapi.co/api/v2/pokemon/${name}
// Detail data for the most commonly-fetched ones; others fall back to a generated stub.
export const pokemonDetailResponses = {
  bulbasaur: makePokemonDetail(
    1,
    'bulbasaur',
    ['grass', 'poison'],
    7,
    69,
    [45, 49, 49, 65, 65, 45],
  ),
  ivysaur: makePokemonDetail(
    2,
    'ivysaur',
    ['grass', 'poison'],
    10,
    130,
    [60, 62, 63, 80, 80, 60],
  ),
  venusaur: makePokemonDetail(
    3,
    'venusaur',
    ['grass', 'poison'],
    20,
    1000,
    [80, 82, 83, 100, 100, 80],
  ),
  charmander: makePokemonDetail(
    4,
    'charmander',
    ['fire'],
    6,
    85,
    [39, 52, 43, 60, 50, 65],
  ),
  charmeleon: makePokemonDetail(
    5,
    'charmeleon',
    ['fire'],
    11,
    190,
    [58, 64, 58, 80, 65, 80],
  ),
  charizard: makePokemonDetail(
    6,
    'charizard',
    ['fire', 'flying'],
    17,
    905,
    [78, 84, 78, 109, 85, 100],
  ),
  squirtle: makePokemonDetail(
    7,
    'squirtle',
    ['water'],
    5,
    90,
    [44, 48, 65, 50, 64, 43],
  ),
  wartortle: makePokemonDetail(
    8,
    'wartortle',
    ['water'],
    10,
    225,
    [59, 63, 80, 65, 80, 58],
  ),
  blastoise: makePokemonDetail(
    9,
    'blastoise',
    ['water'],
    16,
    855,
    [79, 83, 100, 85, 105, 78],
  ),
  pikachu: makePokemonDetail(
    25,
    'pikachu',
    ['electric'],
    4,
    60,
    [35, 55, 40, 50, 50, 90],
  ),
  raichu: makePokemonDetail(
    26,
    'raichu',
    ['electric'],
    8,
    300,
    [60, 90, 55, 90, 80, 110],
  ),
}

// Fallback for any name not in the map above — keeps your code working
// for all 50 list entries even though I only wrote details for 11.
export const getPokemonDetail = (name) => {
  if (pokemonDetailResponses[name]) return pokemonDetailResponses[name]

  const listEntry = pokemonListResponse.results.find((p) => p.name === name)
  if (!listEntry) return null

  const id = parseInt(listEntry.url.match(/\/(\d+)\/$/)[1], 10)
  return makePokemonDetail(
    id,
    name,
    ['normal'],
    10,
    100,
    [50, 50, 50, 50, 50, 50],
  )
}
