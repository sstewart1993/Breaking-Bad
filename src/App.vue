<template>
<div id="app">
<h1> BREAKING BAD</h1>  
  <div class='main-container'>
  <!-- <characters-list :characters='characters'></characters-list> -->
  <label for="character_select">Select a character:</label>
    <select id="character_select" v-model="characterSelected">
      <option disabled value="">Select a character</option>
      <option v-for="(character, index) in characters" :value="character" 
      :key="index">{{character.name}}</option>
    </select>
  <character-detail :character="characterSelected"></character-detail>

  </div>
</div>
</template>

<script>
import { eventBus } from './main.js'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import FavouriteCharacters from './components/FavouriteCharacters'


export default {
  name: 'App',
  data(){
    return{
    characters: [],
    characterSelected: null,
}
},

components: {
  "characters-list": CharacterList,
  "character-detail": CharacterDetail,
  "favourite-characters": FavouriteCharacters,

},

mounted(){
  fetch('https://www.breakingbadapi.com/api/characters')
  .then(res => res.json(name))
  .then(characters => this.characters = characters)

  eventBus.$on('character-selected', (character) => {
    this.characterSelected = character
})

// methods(){
// },
}
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
ul{
  list-style: none;
}

.image{
  height:200px
}
</style>
