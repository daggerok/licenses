<template>
  <v-layout>
    <v-col>
      <v-row justify="center">
        <v-switch
          class="ma-1"
          v-model="isVisible"
          label="view raw license content"
        >
        </v-switch>
      </v-row>
      <v-row justify="center">
        <pre
          v-if="isVisible && getLicense != null"
          class="is-overflow-auto"
        >
          {{ getLicense.body }}
        </pre>
      </v-row>
    </v-col>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Raw',
    computed: {
      ...mapGetters({
        getLicense: 'licenses/getLicense',
      })
    },
    data() {
      return {
        isVisible: false,
      };
    },
  };
</script>

<style scoped>
  pre.is-overflow-auto {
    overflow: auto;
  }
</style>
