<template>

  <div v-if="selectedPokemon">
    <h1>Who is that Pokemon?</h1>

    <PokemonPicture
        :pokemonId="selectedPokemon.id"
        :showPokemon="showPokemon"
    />

    <PokemonOptions
        :pokemon="pokemonArr"
        @selection="checkAnswer"
    />

    <div class="answer" v-if="showAnswer">
      <h2 class="fade-in">{{message}}</h2>
      <button @click="newGame">New Game</button>
    </div>
  </div>

  <h1 v-else>Fetching pokemon...</h1>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';
import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  components: {PokemonOptions, PokemonPicture},
  data() {
    return {
      pokemonArr: [],
      selectedPokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.selectedPokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (selectedId === this.selectedPokemon.id) {
        this.message = `Correct! It's ${this.selectedPokemon.name}`
      } else {
        this.message = `Oops! It was ${this.selectedPokemon.name}`
      }
    },
    newGame() {
      this.pokemonArr = [];
      this.selectedPokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = '';
      this.mixPokemonArray();
    }
  },
  mounted() {
    this.mixPokemonArray();
  }
}
</script>

<style scoped>
.answer {
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
  }

  button {
    margin: 0 auto;
  }
}
</style>