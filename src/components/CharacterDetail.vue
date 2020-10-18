<template>
<div class="character-details" v-if="character">
    <h2>Character Details</h2>
    <p>Name: {{ character.name }}</p>
    <p>Alias: {{ character.nickname }}</p>
    <p>Occupation: {{ character.occupation }}</p>
    <!-- <p>{{ quotes.quote }}</p> -->
    <img class="image" :src="character.img">
</div>
  
</template>

<script>
export default {
    name: "character-details",
    props: ["character"],
}
</script>

<style>

</style>