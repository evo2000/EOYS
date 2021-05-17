<template>
  <ul>
    <li v-for='(project, id) in projects' :key='project.name'>
      <router-link :to='"/projects/" + id'>
        {{project.name}}
      </router-link>
    </li>
  </ul>
</template>

<script>
import projectsJson from '../projects.json';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'HelloWorld',

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

<style scoped>
</style>
