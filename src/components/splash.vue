<template>

  <div class="main-contain">
    <div class="logo">
      <img src="/images/logo-splash.svg">
    </div>    
    <div class="curve">
      <img src="/images/HOME.svg">
    </div>
  </div>

<bg/>

</template>

<script>
import projectsJson from '../projects.json';
import bg from './bg.vue';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'HelloWorld',

	components: {
    bg
	},

	data() {
    return {
      projects: []
    };
	},

	created() {
		this.projects = projectsJson;
	},
})
</script>

<style scoped>

*{
    margin: 0px;
    padding: 0px;
}

.logo img{
    display: block;
    margin: auto;
    padding-top: 14vh;
    width: 80vw;
}

.curve img{
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 80vh;
    z-index: -1;
}
</style>
