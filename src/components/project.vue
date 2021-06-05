<template>

	<page-not-found v-if="projectNotFound" />

	<div class="container" v-if="!projectNotFound">

        <!-- project abstract and images -->
        <div class="row">
			<div class="pt-3 col-12 col-md-10">
				<!-- project title -->
				<h3>{{project.title}}</h3>
				<h5><em>{{project.authors_detail}}</em></h5>
				<div v-if="project.advisors">
					<h6>{{project.advisors}}</h6>
				</div>
				<p class="small">
					Tagged:
					<router-link v-for="tag of project.tags"
								 class="d-inline-block pe-2"
								 :to="'/projects?tags=' + tag">
						{{tag}}
					</router-link>
				</p>
			</div>
		</div>

		<div class="row mt-5">
			<div class="pt-3 col-12 col-md-7">

				<!-- on desktop, full description follows right after abstract -->
				<div class="d-none d-md-block">
					<h5>Abstract</h5>
					<p>{{project.abstract}}</p>
					<div v-if="project.website">
						<a :href="project.website">Project Website</a>
					</div>
				</div>
			</div>
			<div class="pt-3 col-12 col-md-5 pl-md-4">
				<div v-for="item in project.vid" class="vid">
					<iframe width="100%" height="300" :src="item" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<div v-for="item in project.pdf" class="pdf">
					<iframe :src="item" width="100%" height="300"></iframe>
					<p>Click <img src="/images/new-tab.svg" style="height: 1em;"> above to view in a new tab.</p>
				</div>
				<div v-for="item in project.img">
					<a :href="item" data-lightbox="project-image">
						<img :src="item" class="project-image w-100">
					</a>
				</div>
			</div>
		</div>

        <!-- on mobile, full description comes after images -->
        <div class="row d-md-none">
			<div class="pt-4 col-12 col-md-7">
				<h5 class="pt-4">Abstract</h5>
				<p>{{project.abstract}}</p>
				<div v-if="project.website">
					<a :href="project.website">Project Website</a>
				</div>
			</div>
		</div>

		<p class="pt-4 pb-5">
			<router-link to="/projects">&laquo; Back</router-link>
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
				title: '',
				authors: '',
				authors_detail: '',
				advisors: '',
				tags: [],
				abstract: '',
				desc: '',
				img: [],
				vid: [],
				pdf: [],
				website: ''
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
		margin-bottom: 40px;
	}

	.pdf p{
		font-size: 12px;
		font-style: italic;
	}
</style>
