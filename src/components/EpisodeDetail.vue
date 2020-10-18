<template>
  <div class="episode-details" v-if="episode">
  <h2>Episode Details</h2>
  <p>Season: {{ episode.season}}</p>
  <p>Episode: {{ episode.episode}}</p>
  <p>Release date: {{ episode.air_date}}</p>
  <p>Series: {{ episode.series}}</p>
  </div>
  
</template>

<script>
export default {
    name:"episode-details",
    props:["episode"],
}
</script>

<style>

</style>