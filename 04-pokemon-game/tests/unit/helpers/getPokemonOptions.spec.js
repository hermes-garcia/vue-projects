import getPokemonOptions, {getPokemon, getPokemonNames} from '@/helpers/getPokemonOptions';

describe('getPokemonOptions helpers', function() {
    test('should return an array of numbers', () => {
        const pokemon = getPokemon();

        expect(pokemon.length).toBe(650)
        expect(pokemon[0]).toBe(1)
        expect(pokemon[500]).toBe(501)
        expect(pokemon[649]).toBe(650)
    });

    test('should return an array of 4 elements with pokemon names', async() => {
        const pokemon = await getPokemonNames([1,2,3,4]);
        expect(pokemon.length).toBe(4)
        expect(pokemon[0]).hasOwnProperty('name')
        expect(pokemon[0]).hasOwnProperty('id')
    });

    test('getPokemonOptions should return a mixed array', async() => {
        const pokemon = await getPokemonOptions()

        expect(pokemon.length).toBe(4)
        expect(pokemon).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number),
            },
            {
                name: expect.any(String),
                id: expect.any(Number),
            },
            {
                name: expect.any(String),
                id: expect.any(Number),
            },
            {
                name: expect.any(String),
                id: expect.any(Number),
            },
        ])
    });
});