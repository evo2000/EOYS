<template>

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
				<a :href='project.img' data-lightbox="img">
					<img :src='project.img'/>
				</a>
			</div>
			<div class="col-2"></div>
		</div>
	</div>

	<bg/>

</template>

<script>
import projectsJson from '../projects.json';
import bg from './bg.vue';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'project',

	components: {
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

*{
	margin: 0px;
	padding: 0px;
}

.container-fluid{
	color: #c14e0e;
	margin: 0px 0px 80px 0px;
}

.container-fluid h1{
	font-family: 'DM Serif Text', serif;
	font-weight: normal;
	margin: 40px 0px 0px 0px;
}

.container-fluid p{
	font-family: 'Libre Baskerville', serif;
	font-size: 14px;
	weight:400;
	stretch:100;
	text-align: justify;
	text-justify: inter-word;
	margin: 40px 40px 0px 0px;
}

.leftline img{
	width: inherit;
	padding: 60px 20px 0px 0px;
}

.media img{
	border: 2px solid #c14e0e;
	width: 100%;
	margin: 40px 0px 0px 0px;
}

</style>
