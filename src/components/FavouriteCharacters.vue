<template>
<div class="favourite-characters">
    
    <h2>Favourite Characters</h2>
    <ul class="favorite_list" v-for="(character, index) in FavouriteCharacters" :key="index" >
    <p>{{character.name}}</p>
    <img class="small-image" :src="character.img">
    <button v-on:click=handleDelete(character.name)>Delete</button>
    </ul>
</div>
  
</template>

<script>
import { eventBus } from '../main'
export default {
    name: "favourite-characters",
    props: ["FavouriteCharacters"],
    methods:{
    handleDelete: function(name){
        eventBus.$emit("deleteCharacter", name);
    }
}

}
</script>

<style lang="css" scoped>

</style>