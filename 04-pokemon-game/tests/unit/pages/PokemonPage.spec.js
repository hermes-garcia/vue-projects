import {mount, shallowMount} from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import {pokemonListMock} from '../../mocks/pokemonList.mock';
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';

describe('PokemonPage component', function() {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('should call mixPokemonArray on mount', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    });

    test('should match snapshot after load pokemon', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonListMock,
                    selectedPokemon: pokemonListMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    });

    test('should show PokemonPicture and PokemonOptions components ', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonListMock,
                    selectedPokemon: pokemonListMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                }
            }
        })
        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')
        expect(picture.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()
        expect(picture.attributes('pokemonid')).toBe('5')
        expect(picture.attributes('showpokemon')).toBe('false')
        expect(options.attributes('pokemon')).toBeTruthy()
    });

    test('checkAnswer testing', async () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonListMock,
                    selectedPokemon: pokemonListMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                }
            }
        })

        await wrapper.vm.checkAnswer(pokemonListMock[0].id);

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Correct! It's ${pokemonListMock[0].name}`)
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.vm.showAnswer).toBe(true)

        await wrapper.vm.checkAnswer(pokemonListMock[1].id);

        expect(wrapper.find('h2').text()).toBe(`Oops! It was ${pokemonListMock[0].name}`)
    });
});