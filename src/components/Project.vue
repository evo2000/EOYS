<template>

	<link href="../bootstrap.css" rel="stylesheet">
	<website-header/>

	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1>{{project.name}}</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<p>{{project.desc}}</p>
			</div>
			<div class="col-md-6">
				<img :src='project.img'/>
			</div>
		</div>
	</div>

	<!-- <HelloWorld msg='testing' /> -->

</template>

<script>
import projectsJson from '../projects.json';
// import HelloWorld from './HelloWorld.vue';
import WebsiteHeader from './website-header.vue';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'project',

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
		const projectid = parseInt(this.$route.params.projectid);
		this.project = projectsJson[projectid];
	},
})
</script>

<style scoped>

.container{
}

</style>
