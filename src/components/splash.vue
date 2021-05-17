<template>
  <!--
  <ul>
    <li v-for='(project, id) in projects' :key='project.name'>
      <router-link :to='"/projects/" + id'>
        {{project.name}}
      </router-link>
    </li>
  </ul>
  -->

  <div class="main-contain">
        
    <div class="menu">
      <ul>
        <li><a href="#">PROJECTS</a></li>
        <li><a href="#">ABOUT</a></li>
      </ul>
    </div>
            
    <div class="logo">
      <img src="/src/assets/ENG%20EOYS%202021_logo%20main.svg">
    </div>
            
    <div class="curve">
      <img src="/src/assets/ENG%20EOYS%202021_bg%20assets-20.svg">
    </div>
            
    </div>

</template>

<script>
import projectsJson from '../projects.json';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'HelloWorld',

	components: {
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
    /background-color: #eaded6;
}

.main-contain{
}

.menu{
    /padding: 20px 10px;
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
    margin: 20px 60px 0px 0px;
    text-decoration: none;
    font-weight: bold;
    border-bottom: 3px solid rgba(0,0,0,0);
    transition: border-bottom 0.5s;
}

.menu li a:hover{
    border-bottom: 3px solid #c14e0e;
}

.menu li a:visited{
    color: #c14e0e;
}

.logo{
}

.logo img{
    display: block;
    margin: auto;
    padding-top: 18vh;
    width: 90%;
}

.curve img{
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 40vh;
    z-index: -1;
}
</style>
