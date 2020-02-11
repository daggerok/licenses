<template>
  <v-container class="index">
    <v-layout>
      <v-flex>
        <v-overflow-btn
          v-model="currentKey"
          :items="getKnownLicenseKeys"
          label="Select license"
          editable
          clearable
          :cache-items="true"
          item-value="text"
        />
        <License />
        <Raw />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import License from '../components/License';
  import Raw from '../components/Raw';

  export default {
    components: {
      Raw,
      License,
    },
    computed: {
      ...mapGetters({
        getKnownLicenseKeys: 'licenses/getKnownLicenseKeys',
        getCurrentKey: 'licenses/getCurrentKey',
      }),
      currentKey: {
        get() {
          return this.getCurrentKey;
        },
        set(value) {
          if (!value) return;
          this.setCurrentKey(value);
          if (this.getKnownLicenseKeys.find(key => key === value) === -1) return;
          this.fetchLicenseByKey(value);
        }
      },
    },
    methods: {
      ...mapActions({
        fetchLicenseByKey: 'licenses/fetchLicenseByKey',
        setCurrentKey: 'licenses/setCurrentKey',
      }),
    },
  }
</script>

<style>
  .index {
    margin-bottom: 4em;
  }
</style>
