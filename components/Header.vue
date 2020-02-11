<template>
  <v-card>
    <v-app-bar>
      <v-container class="container">
        <slot></slot>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: 'Header'
  };
</script>

<style scoped>
  .container {
    padding-top: 2em;
  }
</style>
