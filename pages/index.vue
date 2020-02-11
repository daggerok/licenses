<template>
  <v-container>
    <License />
    <Raw />
  </v-container>
</template>

<script>
  import License from '../components/License';
  import Raw from '../components/Raw';

  export default {
    components: {
      Raw,
      License,
    },
  }
</script>

<style>

</style>
