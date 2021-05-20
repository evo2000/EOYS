<template>

	<!-- <link href="/bootstrap-grid.css" rel="stylesheet"> -->
	<website-header/>

	<div class="container-fluid">
		<div class="row">
			<div class="col-3 leftline">
				<img src="/images/bg-assets-19.svg">
			</div>
			<div class="col-7">
				<h1>{{project.name}}</h1>
			</div>
			<div class="col-2"></div>
		</div>
		<div class="row">
			<div class="col-3"></div>
			<div class="col-4">
				<p>{{project.desc}}</p>
			</div>
			<div class="col-3 media">
				<img :src='project.img'/>
			</div>
			<div class="col-2"></div>
		</div>
	</div>

	<bg/>

</template>

<script>
import projectsJson from '../projects.json';
import WebsiteHeader from './website-header.vue';
import bg from './bg.vue';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'project',

	components: {
		WebsiteHeader,
		bg
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

.container-fluid p{
	text-align: justify;
	text-justify: inter-word;
	margin-top: 0px;
}

.leftline img{
	padding-top: 40px;
}

.media img{
	border: 2px solid #c14e0e;
	width: inherit;
}

</style>
