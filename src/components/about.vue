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
	},
})
</script>

<style scoped>

</style>