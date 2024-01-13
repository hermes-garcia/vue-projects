import pokemonApi from '@/api/pokemonApi';

export const getPokemon = () => {
    const pokemonArray = Array.from(Array(650));
    return pokemonArray.map((_, index) => index + 1)
}


const getPokemonOptions = () => {
    const mixedPokemon = getPokemon().sort(
        () => Math.random() - 0.5
    );
    return getPokemonNames(mixedPokemon.splice(0, 4))
}

export const getPokemonNames = async ([a, b, c, d]) => {

    const [p1, p2, p3, p4] = await Promise.all([
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]);

    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id },
    ];
}

export default getPokemonOptions;