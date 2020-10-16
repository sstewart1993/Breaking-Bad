<template>
  <div v-if="characters">
      <ul>
          <list-item v-for="(character, index) in characters" :character="character" :key="index"></list-item>
      </ul>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
    name: "character-list",
    props: ["characters"],
    components: {
        "list-item":ListItem
    }

}
</script>

<style>

</style>