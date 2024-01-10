<template>
  <h1>Who is that Pokemon?</h1>
  <PokemonPicture />
  <PokemonOptions />
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';

export default {
  components: {PokemonOptions, PokemonPicture}
}
</script>