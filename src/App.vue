<template>

    <!-- header -->
    <website-header :currentPage="currentPage" />

    <!-- body -->
    <router-view />

    <!-- footer TODO-->
    <website-footer :currentPage="currentPage" />

    <!-- background curves and color -->
    <background :currentPage="currentPage" />

</template>

<script>
  import {defineComponent} from 'vue';
  import WebsiteHeader from './components/website-header.vue';
  import WebsiteFooter from './components/website-footer.vue';
  import Background from './components/background.vue';
  export default defineComponent({
    name: 'App',
    components: {
      WebsiteHeader,
      WebsiteFooter,
      Background
    },

    data() {
      return {
        initialLoad: true,
      };
    },

    computed: {

      // will return one of ['splash', 'project', 'projects', 'about', 'other']
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
          // differentiate between projects list and a particular project
          return currentPath[1] ? 'project' : 'projects';
        } else {
          return 'other';
        }
      },

    }
  });
</script>

<!-- global(-ish) styles go here -->
<style>
    /* need !important to override bootstrap defaults */
    body {
        color: #c14e0e !important;

        /* default font for text */
        font-family: "Libre Baskerville", serif !important;
    }

    /* links should follow text color */
    a {
        font-family: inherit !important;
        color: inherit !important;
    }

    /* header font */
    h1, h2, h3, h4, h5, h6 {
        font-family: 'DM Serif Text', serif;
    }

    /* default bootstrap container is too wide */
    @media (min-width: 1200px) {
        .container {
            width: 1000px !important;
        }
    }

</style>
