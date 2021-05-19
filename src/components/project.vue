<template>

	<link href="../bootstrap-grid.css" rel="stylesheet">
	<website-header/>

	<div class="container-fluid">
		<div class="row">
			<div class="col-3 leftline">
				<img src="/images/bg-assets-19.svg">
			</div>
			<div class="col-8">
				<h1>{{project.name}}</h1>
			</div>
			<div class="col-1"></div>
		</div>
		<div class="row">
			<div class="col-3"></div>
			<div class="col-5">
				<p>{{project.desc}}</p>
			</div>
			<div class="col-4 media">
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

.container-fluid{
	color: #c14e0e;
}

.leftline img{
	padding-top: 40px;
}

.media img{
	border: 2px solid #c14e0e;
}

</style>
