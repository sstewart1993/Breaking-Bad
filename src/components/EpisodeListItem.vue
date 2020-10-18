<template>
  <li v-on:click="handleClick"> Episode {{episode.title}}

  </li>
</template>

<script>
import {eventBus} from '../main.js'

export default {
    name:"episode-list-item",
    props: ["episode"],
    methods:{
        handleClick(){
            eventBus.$emit('episode-selected', this.episode)
        }
    }
}
</script>

<style>

</style>