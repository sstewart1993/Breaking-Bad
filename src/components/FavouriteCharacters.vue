<template>
<div id="favourite-characters">
    <h2>Favourite Characters</h2>
    <favourite-characters v-for="(character, index) in FavouriteCharacters" :key="index" >
    <p>{{character.name}}</p>
    <img class="small-image" :src="character.img">
    </favourite-characters>
</div>
  
</template>

<script>
export default {
    name: "favourite-characters",
    props: ["FavouriteCharacters"],

}
</script>

<style lang="css" scoped>

</style>