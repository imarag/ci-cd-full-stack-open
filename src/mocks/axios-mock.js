// src/mocks/axios-mock.js
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { pokemonListResponse, getPokemonDetail } from './pokemon-fixtures'

// install: npm i -D axios-mock-adapter
const mock = new MockAdapter(axios, { delayResponse: 200 }) // 200ms fake latency

mock
  .onGet('https://pokeapi.co/api/v2/pokemon/?limit=50')
  .reply(200, pokemonListResponse)

mock
  .onGet(/https:\/\/pokeapi\.co\/api\/v2\/pokemon\/[^/?]+$/)
  .reply((config) => {
    const name = config.url.split('/').filter(Boolean).pop()
    const detail = getPokemonDetail(name)
    return detail ? [200, detail] : [404, { detail: 'Not found.' }]
  })

export default mock
