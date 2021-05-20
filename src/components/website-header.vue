<template>

    <div class="main-contain">

            <div class="menu">
                <ul>
                    <li><a href="#">ABOUT</a></li>
                    <li class="act"><router-link to="/projects">PROJECTS</router-link></li>
                </ul>
                <img src="/images/logo.svg">
            </div>

            <div class="curve">
                <img src="/images/bg-assets-22.svg">
            </div>

        </div>

</template>

<script>
import projectsJson from '../projects.json';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'website-header',

	components: {
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

.menu ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.act a{
    font-weight: bold;
}

.menu li{
    float: right;
}

.menu li a{
    display: block;
    color: #c14e0e;
    font-size: 18px;
    font-family: serif;
    text-align: center;
    margin: 40px 60px 0px 0px;
    text-decoration: none;
    border-bottom: 2px solid rgba(0,0,0,0);
    transition: border-bottom 0.5s;
}

.menu li a:hover{
    border-bottom: 3px solid #c14e0e;
}

.menu li a:visited{
    color: #c14e0e;
}

.menu img{
    height: 60px;
    padding: 20px 0px 0px 20px;
}

.curve img{
    position: absolute;
    right: 0px;
    top: 0px;
    height: 80vh;
    z-index: -1;
}

</style>
