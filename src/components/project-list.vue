<template>

  <h1>project-list</h1>

</template>

<script>
  import projectsJson from '../projects.json';
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'ProjectList',

    components: {
    },

    data() {
      return {
        projects: []
      };
    },

    created() {
      this.projects = projectsJson;
    },
  })
</script>

<style scoped></style>
