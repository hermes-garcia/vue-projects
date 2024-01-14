import pokemonApi from '@/api/pokemonApi';

describe('pokemonApi', () => {
    test('axios should have set the pokemon api', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    });
});