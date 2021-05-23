<!-- this file is for background curves -->
<!-- TODO: prefetch all of the background designs for load speed -->

<template>
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
</style>
