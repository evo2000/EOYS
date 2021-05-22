<template>

    <!-- switching to bootstrap container -->
<!--  <div class="main-contain">-->
    <div class="container d-flex flex-column justify-content-center">
<!--        <div class="logo">-->
        <img class="logo" src="/images/logo-splash.svg">
<!--        </div>-->
<!--        <div class="curve">-->
<!--        </div>-->
    </div>
    <img class="curve" src="/images/HOME.svg">

    <bg/>

</template>

<script>
import projectsJson from '../projects.json';
import bg from './bg.vue';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'Splash',

	components: {
      bg
	},

	data() {
	},

	created() {
		this.projects = projectsJson;
	},
})
</script>

<style scoped>

/**{*/
/*    margin: 0px;*/
/*    padding: 0px;*/
/*}*/
/**/
/*.logo img{*/
/*    display: block;*/
/*    margin: auto;*/
/*    padding-top: 14vh;*/
/*    width: 80vw;*/
/*}*/

.container {
    /* estimate height of header */
    height: calc(100% - 40px);
}

.curve {
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 80vh;
    z-index: -1;
}
</style>
