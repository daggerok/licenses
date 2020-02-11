<template>
  <v-container>
    <License />
    <Raw />
  </v-container>
</template>

<script>
  import License from '../components/License';
  import Raw from '../components/Raw';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
      Raw,
      License,
    },
    computed: {
      ...mapGetters({
        getKnownLicenseKeys: 'licenses/getKnownLicenseKeys',
      })
    },
    methods: {
      ...mapActions({
        fetchLicenseByKey: 'licenses/fetchLicenseByKey',
      }),
    },
    mounted() {
      const router = this.$router;
      if (!router) return;
      const app = router.app;
      if (!app) return;
      const route = app.$route;
      if (!route) return;
      const query = route.query;
      if (!query) return;
      const key = query.key;
      if (!key) return;
      const licenseIsNotValid = this.getKnownLicenseKeys
        .find(k => k === key) === -1;
      if (licenseIsNotValid) return;
      this.fetchLicenseByKey(key);
    },
  }
</script>

<style>

</style>
