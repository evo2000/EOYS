<template>

	<website-header/>

	<h1>{{project.name}}</h1>

	<img :src='project.img' />

	<p>{{project.desc}}</p>

	<!-- <HelloWorld msg='testing' /> -->

</template>

<script>
import projectsJson from '../projects.json';
// import HelloWorld from './HelloWorld.vue';
import WebsiteHeader from './website-header.vue';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'Project',

	components: {
		WebsiteHeader
	},

	data() {
		return {
			project: {
				desc: '',
				img: '',
				name: '',
			}
		};
	},

	created() {
		// const projectid = parseInt(this.$route.params.projectid);
		// this.project = projectsJson[projectid];
	},
})
</script>

<style scoped>
</style>
