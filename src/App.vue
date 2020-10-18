<template>
<div id="app">
<h1> BREAKING BAD</h1>  
  <div class='main-container'>
  <!-- <characters-list :characters='characters'></characters-list> -->
  <div class="drop-down">
  <h2>Select a Character:</h2>
  <label for="character_select"></label>
    <select id="character_select" v-model="characterSelected">
      <option disabled value="">Select a character</option>
      <option v-for="(character, index) in characters" :value="character" 
      :key="index">{{character.name}}</option>
    </select>
    </div>

    <button v-on:click="addToFavourites">Add Character</button>
 


  <character-detail :character="characterSelected"></character-detail>

  <favourite-characters :FavouriteCharacters='FavouriteCharacters'></favourite-characters>
  </div>

  <div class="episode-drop-down">
    <h2>Select an Episode: </h2>
    <label for="episode_select"></label>
    <select id="episode_select" v-model="episodeSelected">
      <option disabled value="">Select episode</option>
      <option v-for="(episode, index) in episodes" :value="episode"
      :key="index">{{episode.title}}</option>
    </select>
  </div>
  <episode-detail :episode="episodeSelected"></episode-detail>

</div>
</template>

<script>
import { eventBus } from './main.js'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import FavouriteCharacters from './components/FavouriteCharacters'
import EpisodeList from './components/EpisodeList'
import EpisodeDetail from './components/EpisodeDetail'


export default {
  name: 'App',
  data(){
    return{
    characters: [],
    characterSelected: null,
    FavouriteCharacters: [],
    episodeSelected: null,
    episodes: [],
}
},

components: {
  "characters-list": CharacterList,
  "character-detail": CharacterDetail,
  "favourite-characters": FavouriteCharacters,
  "episodes-list": EpisodeList,
  "episode-detail": EpisodeDetail

},

mounted(){
  // character list fetch
  fetch('https://www.breakingbadapi.com/api/characters')
  .then(res => res.json())
  .then(characters => this.characters = characters)

// episode list fetch
  fetch("https://www.breakingbadapi.com/api/episodes")
  .then(res => res.json())
  .then(episodes => this.episodes = episodes)

  // fetch('https://www.breakingbadapi.com/api/quotes')
  // .then(res => res.json())
  // .then(quotes => this.quotes = quotes)


  eventBus.$on('character-selected', (character) => {
    this.characterSelected = character
})
  eventBus.$on('episode-selected', (episode) => {
    this.episodeSelected = episode
  })
},

methods: {
  addToFavourites: function(){
    this.FavouriteCharacters.push(this.characterSelected)
  }
}
}
</script>

<style>
body{
  background-image: url('./static/background.jpg');

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  /* background-image: url('./static/background.jpg'); */
}
ul{
  list-style: none;
}
.main-container{
  display: flex;
  justify-content: space-between;
  padding: 60px;
}
.image{
  height:200px
}
.small-image{
  height:50px
}
#character_select{
position: absolute;
}
body>div>div>button{
  position: absolute;
}
.character-details{
  background-color: rgba(0, 0, 0, 0.5);
  /* position: absolute; */
  /* align-self: center; */
}
.drop-down{
  /* display: flex; */
  justify-content: space-between;
  align-self:auto;
}
.episode-drop-down{
  display: flex;
  /* justify-content: space-between; */
  align-self:left;
}
#episode_select{
position: absolute;
}
.episode-details{
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
