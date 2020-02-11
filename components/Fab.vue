<template>
  <v-fab-transition>
    <v-btn
      aria-label="Scroll to top"
      title="Scroll to top"
      v-show="isFabVisible"
      v-scroll="onScroll"
      @click="toTop"
      class="grey darken-2"
      fixed
      right
      top
      fab
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
  export default {
    name: 'Fab',
    methods: {
      toTop() {
        const path = `?key=${this.$route.query.key}` || '';
        this.$router.push({ path });
        this.$vuetify.goTo(0);
      },
      onScroll(e) { // https://github.com/vuetifyjs/vuetify/blob/47847224a4a94fdbf39208932b1c631dd0b39b63/packages/docs/src/layouts/documentation/Fab.vue
        if (!!process.client || !!process.browser) {
          if (typeof window === 'undefined') return;
          const top = (
            window.pageYOffset ||
            document.documentElement.offsetTop ||
            0
          );
          this.isFabVisible = top > 300;
        }
      },
    },
    data() {
      return {
        isFabVisible: false,
      };
    }
  };
</script>

<style scoped>

</style>
