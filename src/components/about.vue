<template>

    <div class="main-contain">
        <h1>test</h1>
    </div>

</template>

<script>
//import WebsiteHeader from './website-header.vue';
//import bg from './bg.vue';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'about',

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

*{
    margin: 0px;
    padding: 0px;
}

</style>