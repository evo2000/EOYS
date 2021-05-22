<template>

    <!-- switching to regular bootstrap -->
<!--  <link href="../bootstrap-grid.css" rel="stylesheet">-->

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

*{
    margin: 0px;
    padding: 0px;
}
</style>
