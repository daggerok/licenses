<template>
  <v-footer
    absolute
    class="font-weight-medium"
  >
    <v-col
      class="text-center"
      cols="12"
    >
      MIT &copy; {{ new Date().getFullYear() }} <a target="_blank" href="https://github.com/daggerok/licenses"><strong>daggerok</strong></a> | Maksim Kostromin
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer'
  };
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
