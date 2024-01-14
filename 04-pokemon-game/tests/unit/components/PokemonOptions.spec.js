import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemonListMock } from "../../mocks/pokemonList.mock";

describe("Pokemon Options", function () {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemon: pokemonListMock,
      },
    });
  });

  test("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should show 4 options', () => {
    const liTags = wrapper.findAll('li')
    expect(liTags.length).toBe(4)
    expect(liTags[0].text()).toBe('pikachu')
    expect(liTags[1].text()).toBe('charmander')
    expect(liTags[2].text()).toBe('mewtwo')
    expect(liTags[3].text()).toBe('bulbasaur')

  });

  test('should emit "selection" event with correct params after clicking', () => {
    const [li1, li2, li3, li4] = wrapper.findAll('li')

    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    expect(wrapper.emitted('selection').length).toBe(4)
    expect(wrapper.emitted('selection')[0]).toEqual([5])
    expect(wrapper.emitted('selection')[1]).toEqual([10])
    expect(wrapper.emitted('selection')[2]).toEqual([15])
    expect(wrapper.emitted('selection')[3]).toEqual([20])

  });
});
