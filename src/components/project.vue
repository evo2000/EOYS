<template>

<!--	<div class="container-fluid">-->
	<div class="container">
        <!-- project title -->
		<h3><em>{{project.title}}</em></h3>
		<h5>{{project.authors}}</h5>
		<p>
			Tagged:
			<router-link v-for="tag of project.tags"
                         class="d-inline-block pr-2"
						 :to="'/projects?tags=' + tag">
				{{tag}}
			</router-link>
		</p>

        <!-- project abstract and images -->
        <div class="row">
			<div class="pt-3 col-12 col-md-7">
				<h5>Abstract</h5>
				<p>{{project.abstract}}</p>
			</div>
			<div class="pt-3 col-12 col-md-5 pl-md-4">
				<img class="project-image w-100" :src='project.img'/>
			</div>
		</div>

		<h5 class="pt-4">Full Description</h5>
		<p>{{project.desc}}</p>

		<p class="pt-4 pb-5">
			<router-link to="/projects">Return to projects list.</router-link>
		</p>
	</div>

	<!-- moved to backgrounds -->
<!--	<div class="curve1">-->
<!--		<img src="/images/STUDENT_PROJECT.svg">-->
<!--	</div>-->
<!--	<div class="curve2">-->
<!--        <img src="/images/ABOUT-bottom.svg">-->
<!--    </div>-->

	<!-- don't need this anymore -->
<!--	<bg/>-->

</template>

<script>
import projectsJson from '../projects.json';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'project',

	data() {
		return {
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
		this.project = projectsJson[projectid];
	},
})
</script>

<style scoped>

	.project-image {
		border: 2px solid #c14e0e;
	}

/**{*/
/*	margin: 0px;*/
/*	padding: 0px;*/
/*}*/

/*.container-fluid{*/
/*	color: #c14e0e;*/
/*	margin: 0px 0px 80px 0px;*/
/*}*/

/*.container-fluid h1{*/
/*	font-family: 'DM Serif Text', serif;*/
/*	font-weight: normal;*/
/*	margin: 70px 0px 0px 0px;*/
/*}*/

/*.container-fluid p{*/
/*	font-family: 'Libre Baskerville', serif;*/
/*	font-size: 14px;*/
/*	weight:400;*/
/*	stretch:100;*/
/*	text-align: justify;*/
/*	text-justify: inter-word;*/
/*	margin: 40px 40px 0px 0px;*/
/*}*/

/*.media img{*/
/*	border: 2px solid #c14e0e;*/
/*	width: 100%;*/
/*	margin: 40px 0px 0px 0px;*/
/*}*/

    /* moved to background */
/*.curve1 img{*/
/*	margin: 0px;*/
/*	padding: 0px;*/
/*    position: fixed;*/
/*    right: 0px;*/
/*    top: 0px;*/
/*    height: 130vh;*/
/*    z-index: -1;*/
/*}*/

/*.curve2 img{*/
/*	margin: 0px;*/
/*	padding: 0px;*/
/*    position: fixed;*/
/*    left: 0px;*/
/*    bottom: 0px;*/
/*    width: 26vw;*/
/*    z-index: -1;*/
/*}*/

</style>
