<template>
  <div v-if="license != null" class="summary">
    <div
      v-if="license.permissions != null && license.permissions.length > 0"
    >
      <v-alert
        outlined
        type="success"
      >
        Permissions:
      </v-alert>
      <ul v-for="(p, i) in license.permissions">
        <li :key="i">{{ p }}</li>
      </ul>
    </div>
    <div
      v-if="license.conditions != null && license.conditions.length > 0"
    >
      <v-alert
        outlined
        type="info"
      >
        Conditions:
      </v-alert>
      <ul v-for="(c, i) in license.conditions">
        <li :key="i">{{ c }}</li>
      </ul>
    </div>
    <div
      v-if="license.limitations != null && license.limitations.length > 0"
    >
      <v-alert
        outlined
        type="error"
      >
        Limitations:
      </v-alert>
      <ul v-for="(l, i) in license.limitations">
        <li :key="i">{{ l }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Summary',
    props: {
      license: {
        type: Object,
        required: false,
        default: null,
      }
    },
  };
</script>

<style scoped>
  .summary {
    display: flex;
    flex-wrap: wrap;
  }
  .summary > div {
    flex: 1;
    padding: 1em;
  }
</style>
