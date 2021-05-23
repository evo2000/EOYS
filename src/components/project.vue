<template>

	<page-not-found v-if="projectNotFound" />

	<div class="container" v-if="!projectNotFound">

        <!-- project abstract and images -->
        <div class="row">
			<div class="pt-3 col-12 col-md-7">
				<!-- project title -->
				<h3><em>{{project.title}}</em></h3>
				<h5>{{project.authors}}</h5>
				<p>
					Tagged:
					<router-link v-for="tag of project.tags"
								 class="d-inline-block pe-2"
								 :to="'/projects?tags=' + tag">
						{{tag}}
					</router-link>
				</p>

				<h5>Abstract</h5>
				<p>{{project.abstract}}</p>
			</div>
			<div class="pt-3 col-12 col-md-5 pl-md-4">
				<a :href="project.img"
				   data-lightbox="project-image">
					<img :src="project.img"
						 class="project-image w-100">
				</a>
			</div>
		</div>

        <div class="row">
			<div class="pt-4 col-12 col-md-7">
				<h5 class="pt-4">Full Description</h5>
				<p>{{project.desc}}</p>
			</div>
		</div>

		<p class="pt-4 pb-5">
			<router-link to="/projects">Return to projects list.</router-link>
		</p>
	</div>

</template>

<script>
import projectsJson from '../projects.json';
import {defineComponent} from 'vue';
import PageNotFound from './page-not-found.vue';

export default defineComponent({
	name: 'project',

	components: {
		PageNotFound,
	},

	data() {
		return {
			projectNotFound: false,
			project: {
				authors: '',
				title: '',
				abstract: '',
				desc: '',
				img: '',
				tags: []
			}
		};
	},

	created() {
		const projectid = parseInt(this.$route.params.projectid);

		// error handling
		if (isNaN(projectid)
				|| projectid < 0
				|| projectid >= projectsJson.length) {
			this.projectNotFound = true;
		}

		this.project = projectsJson[projectid];
	},
})
</script>

<style scoped>
	.project-image {
		border: 2px solid #c14e0e;
	}
</style>
