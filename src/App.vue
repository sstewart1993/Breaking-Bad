<template>
<div id="app">
<h1> BREAKING BAD</h1>  
  <div class='main-container'>
  <pokemons-list :pokemons='pokemons'></pokemons-list>

  </div>
</div>
</template>

<script>
import { eventBus } from './main.js'
import PokeList from './components/PokeList';


export default {
  name: 'App',
  data(){
    return{
    pokemons: [],
    pokemonSelected: null,
}
},

components: {
  "pokemons-list": PokeList,

},

mounted(){
  fetch('https://www.breakingbadapi.com/api/characters')
  .then(res => res.json(name))
  .then(pokemons => this.pokemons = pokemons)

  eventBus.$on('pokemon-selected', this.pokemon)

},
// methods(){
// },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
