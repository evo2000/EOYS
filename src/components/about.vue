<template>

    <h1>about</h1>

</template>

<script>
//import WebsiteHeader from './website-header.vue';
//import bg from './bg.vue';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'About',

	components: {
        //WebsiteHeader,
        //bg
	},

	data() {
    return {
      projects: []
    };
	},

	created() {
		this.projects = projectsJson;

        // TODO: use this to highlight "projects" or "about"
        // console.log(this.$route.path);
	},
})
</script>

<style scoped>

</style>