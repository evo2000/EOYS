<template>
  <link href="../bootstrap-grid.css" rel="stylesheet">
  <website-header/>
  <router-view />
</template>

<script>
  import {defineComponent} from 'vue';
  import WebsiteHeader from './components/website-header.vue';
  export default defineComponent({
    name: 'App',
    components: {
      WebsiteHeader
    },
  });
</script>

<style>
  @font-face {
    font-family: bigcaslon;
    src: url('/fonts/bigcaslon.otf');
  }

  @font-face {
    font-family: bodoni;
    src: url('/fonts/bodoni72.ttc');
  }

  * {
    /*font-family: bigcaslon, serif;*/
    /*font-family: bodoni, serif;*/
  }
</style>
