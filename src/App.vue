<template>

    <!-- switching to regular bootstrap -->
<!--  <link href="../bootstrap-grid.css" rel="stylesheet">-->

    <website-header :currentPage="currentPage" />
    <router-view />

    <!-- force triggering of background-color computed property -->
    {{bgColor}}
</template>

<script>
  import {defineComponent} from 'vue';
  import WebsiteHeader from './components/website-header.vue';
  export default defineComponent({
    name: 'App',
    components: {
      WebsiteHeader
    },

    data() {
      return {
        initialLoad: true,
      };
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
      },

      /* update background color on route change */
      bgColor() {
        if (this.currentPage === 'splash') {
          document.body.classList.add('splash');
        } else {
          document.body.classList.remove('splash');
        }

        // only animate bg after initial page load
        if (this.initialLoad) {
          setTimeout(() => {
            document.body.classList.add('animated-bg');
          }, 10);
          this.initialLoad = false;
        }

        return "";
      }
    }
  });
</script>

<style>
    body {
        /* need !important to override bootstrap default */
        /*background-color: #eaded6 !important;*/
        color: #c14e0e !important;

        /* default font for text */
        font-family: "Libre Baskerville", serif !important;

    }

    /* animate background color -- only want to set this after initial load */
    body.animated-bg {
        transition: background-color 0.5s;
    }

    /* only background color on splash page */
    body.splash {
        background-color: #eaded6 !important;
    }

    a {
        font-family: inherit !important;
        color: inherit !important;
    }

    /* header font */
    h1, h2, h3, h4, h5, h6 {
        font-family: 'DM Serif Text', serif;
    }

    @media (min-width: 1200px) {
        .container {
            width: 1000px !important;
        }
    }

/** {*/
/*    margin: 0px;*/
/*    padding: 0px;*/
/*}*/

</style>
