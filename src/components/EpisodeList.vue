<template>
  <div v-if="episodes">
      <ul>
          <episode-list-item v-for="(episode, index) in episodes" :episode="episode" :key="index"></episode-list-item>
      </ul>
  </div>
</template>

<script>
import EpisodeListItem from './EpisodeListItem'

export default {
    name:"episode-list",
    props:["episodes"],
    components:{
        "episode-list-item":EpisodeListItem
    }

}
</script>

<style>

</style>