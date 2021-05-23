<!-- this file is for background curves and the background color -->

<template>
    <!-- splash page -->
    <img class="curve splash"
         :class="{show: currentPage === 'splash'}"
         src="/images/HOME.svg">

    <!-- about page -->
    <img class="curve about1"
         :class="{show: currentPage === 'about'}"
         src="/images/ABOUT-top.svg">
    <img class="curve about2"
         :class="{show: currentPage === 'about'}"
         src="/images/ABOUT-bottom.svg">

    <!-- projects list page -->
    <img class="curve projects"
         :class="{show: currentPage === 'projects'}"
         src="/images/PROJECT.svg">

    <!-- project page -->
    <img class="curve project"
         :class="{show: currentPage === 'project'}"
         src="/images/STUDENT_PROJECT.svg">
</template>

<script>
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'Background',

    data() {
      return {
        initialLoad: true,
      };
    },

    props: {
      currentPage: String,
    },

    created() {
      this.updateBgColor();

      // 0 timeout to push this after current event buffer
      setTimeout(() => document.body.classList.add('animated-bg'), 0);
    },

    methods: {
      updateBgColor() {
        document.body.classList[this.currentPage === 'splash' ? 'add' : 'remove']('splash');
      }
    },

    watch: {
      /* update background color on route change */
      currentPage() {
        this.updateBgColor();
      }
    }
  });
</script>

<style>
    /* animate background color -- only want to set this after initial load */
    body.animated-bg {
        transition: background-color 0.5s;
    }

    /* background color on splash page only, white otherwise */
    body.splash {
        background-color: #eaded6 !important;
    }

    .curve {
        position: fixed;
        z-index: -1;

        transition: opacity 0.5s;
        opacity: 0;
    }

    .curve.show {
        opacity: 0.5;
    }

    .curve.splash {
        right: 0;
        bottom: 0;
        height: 80vh;
    }

    .curve.about1 {
        right: 0;
        top: 0;
        height: auto;
        width: 36vw;
    }

    .curve.about2 {
        left: 0;
        bottom: 0;
        width: 26vw;
    }

    .curve.projects {
        right: 0;
        top: 0;
        height: 100vh;
    }

    .curve.project {
        right: 0;
        top: 0;
        height: 130vh;
    }
</style>
