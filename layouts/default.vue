<template>
  <v-app>
    <Header>
      <v-overflow-btn
        v-model="currentKey"
        :items="getKnownLicenseKeys"
        label="Select License"
        editable
        chips
        deletable-chips
        item-value="text"
        :cache-items="true"
        :allow-overflow="false"
      />
    </Header>

    <nuxt/>

    <Fab />
    <Footer />
  </v-app>
</template>

<script>
  import Footer from '../components/Footer';
  import Header from '../components/Header';
  import Fab from '../components/Fab';
  import { mapActions, mapGetters } from 'vuex';
  import Summary from '../components/Summary';

  export default {
    components: {
      Header,
      Summary,
      Fab,
      Footer,
    },
    methods: {
      ...mapActions({
        fetchLicenseByKey: 'licenses/fetchLicenseByKey',
        setCurrentKey: 'licenses/setCurrentKey',
      }),
    },
    computed: {
      ...mapGetters({
        getKnownLicenseKeys: 'licenses/getKnownLicenseKeys',
        getLicense: 'licenses/getLicense',
      }),
      currentKey: {
        get() {
          return this.getCurrentKey;
        },
        set(value) {
          if (!value) return;
          this.setCurrentKey(value);
          const licenseIsNotValid = this.getKnownLicenseKeys
            .find(key => key === value) === -1;
          if (licenseIsNotValid) return;
          this.$router.push({ path: `/?key=${value}` });
          this.fetchLicenseByKey(value);
        },
      },
    },
  };
</script>

<style scoped>
  .index {
    margin-bottom: 1em;
  }
</style>
