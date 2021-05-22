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
    body {
        /* need !important to override bootstrap default */
        background-color: #eaded6 !important;
        color: #c14e0e !important;

        /* default font for text */
        font-family: "Libre Baskerville", serif !important;
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
            width: 768px !important;
        }
    }

/** {*/
/*    margin: 0px;*/
/*    padding: 0px;*/
/*}*/

</style>
