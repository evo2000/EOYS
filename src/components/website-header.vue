<template>
    <div class="main-contain">
        <div class="menu">
            <!-- nav links -->
            <ul>
                <li :class="{act: currentPage === 'about'}">
                    <router-link to="/about">ABOUT</router-link>
                </li>
                <li :class="{act: currentPage === 'projects'}">
                    <router-link to="/projects">PROJECTS</router-link>
                </li>
            </ul>

            <!-- navbar logo (hide if splash page) -->
            <router-link v-if="currentPage !== 'splash'" to="/" title="Return to homepage">
                <img src="/images/logo.svg">
            </router-link>
        </div>

        <!-- curve (if not splash) -->
        <div class="curve" v-if="currentPage !== 'splash'">
            <img src="/images/bg-assets-22.svg">
        </div>
    </div>
</template>

<script>
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'website-header',

    components: {},

    created() {
      // TODO: use this to highlight "projects" or "about"
      // console.log(this.$route.path);
    },

    computed: {

      // will return one of ['splash', 'projects', 'about', 'other']
      currentPage() {
        // get route components, switch on first route component
        // should be a flexible-enough system
        const currentPath = this.$route.path
          .toLowerCase()
          .split('/')
          .filter(component => component.length);

        if (!currentPath.length) {
          return 'splash';
        } else if (currentPath[0] === 'about') {
          return 'about';
        } else if (currentPath[0] === 'projects') {
          return 'projects';
        } else {
          return 'other';
        }
      }
    }
  })
</script>

<style scoped>

    * {
        margin: 0px;
        padding: 0px;
    }

    .menu ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .act a {
        font-weight: bold;
    }

    .menu li {
        float: right;
    }

    .menu li a {
        display: block;
        color: #c14e0e;
        font-size: 18px;
        font-family: serif;
        text-align: center;
        margin: 40px 60px 0px 0px;
        text-decoration: none;
        border-bottom: 2px solid rgba(0, 0, 0, 0);
        transition: border-bottom 0.5s;
    }

    .menu li a:hover {
        border-bottom: 3px solid #c14e0e;
    }

    .menu li a:visited {
        color: #c14e0e;
    }

    .menu img {
        height: 60px;
        padding: 20px 0px 0px 20px;
    }

    .curve img {
        position: absolute;
        right: 0px;
        top: 0px;
        height: 80vh;
        z-index: -1;
    }

</style>
