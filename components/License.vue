<template>
  <v-card
    v-if="getLicense != null"
    outlined
  >
    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4">
          License: <a target="_blank" class="clean" :href="getLicense.url">
            {{ getLicense.spdx_id }}
          </a>
        </div>
        <v-list-item-title class="headline mb-1">{{ getLicense.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      {{ getLicense.description }}
    </v-card-text>

    <Summary :license="getLicense" />

    <v-card-actions>
      <v-flex class="ma-1 pa-1 text-center">
        <v-btn
          text
          large
          outlined
          color="primary"
          min-width="15em"
          :href="getLicense.html_url"
        >
          Explore
        </v-btn>
      </v-flex>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Summary from './Summary';

  export default {
    name: 'License',
    components: {
      Summary
    },
    computed: {
      ...mapGetters({
        getLicense: 'licenses/getLicense',
      })
    },
  };
</script>

<style scoped>
  a.clean {
    /*color: white;*/
  }
</style>
