<template>
    <h1>404</h1>
    <p>This page was not found. <router-link to="/">Return to the homepage?</router-link></p>
</template>

<script>
  import projectsJson from '../projects.json';
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'page-not-found',
    components: {
    },
    data() {
      return {};
    },
    created() { },
  });
</script>

<style scoped></style>
