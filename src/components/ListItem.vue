<template>
<li v-on:click="handleClick"> {{pokemon.name}} {{pokemon.nickname}}</li>
  
</template>

<script>
import {eventBus} from '../main.js'

export default {
    name:"list-item",
    props: ['pokemon'],
    methods:{
        handleClick(){
            eventBus.$emit('pokemon-selected', this.pokemon)
        }
    }

}
</script>

<style>

</style>