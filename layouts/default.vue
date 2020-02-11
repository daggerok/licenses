<template>
  <v-app
  >
    <Header />
    <nuxt/>
    <Fab />
    <Footer />
  </v-app>
</template>

<script>
  import Footer from '../components/Footer';
  import Header from '../components/Header';
  import Fab from '../components/Fab';

  export default {
    components: {
      Fab,
      Header,
      Footer,
    },
  };
</script>

<style scoped>

</style>
