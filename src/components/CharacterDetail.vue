<template>
<div class="character_details" v-if="character">
    <h3>{{ character.name }}</h3>
    <p>{{ character.nickname }}</p>
    <p>{{ character.occupation }}</p>

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