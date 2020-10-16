<template>
  <div v-if="pokemons">
      <ul>
          <list-item v-for="(pokemon, index) in pokemons" :pokemon="pokemon" :key="index"></list-item>
      </ul>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
    name: "poke-list",
    props: ["pokemons"],
    components: {
        "list-item":ListItem
    }

}
</script>

<style>

</style>