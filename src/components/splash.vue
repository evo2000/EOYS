<template>

  <div class="main-contain">
        
    <div class="menu">
      <ul>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/projects">PROJECTS</router-link></li>
      </ul>
    </div>
            
    <div class="logo">
      <img src="/images/logo-splash.svg">
    </div>
            
    <div class="curve">
      <img src="/images/bg-assets-20.svg">
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

.menu ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu li{
    float: right;
}

.menu li a{
    display: block;
    color: #c14e0e;
    font-size: 18px;
    text-align: center;
    margin: 40px 60px 0px 0px;
    text-decoration: none;
    border-bottom: 2px solid rgba(0,0,0,0);
    transition: border-bottom 0.5s;
}

.menu li a:hover{
    border-bottom: 2px solid #c14e0e;
}

.menu li a:visited{
    color: #c14e0e;
}

.logo img{
    display: block;
    margin: auto;
    padding-top: 14vh;
    width: 82vw;
}

.curve img{
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 40vh;
    z-index: -1;
}
</style>
