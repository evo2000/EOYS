<template>
    <div class="container-fluid">
        <img class="logo d-block mx-auto" src="/images/logo-splash.svg">
    </div>
</template>

<script>
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'Splash',
  })
</script>

<style scoped>
    .logo {
        width: 100%;

        /* full width may be too wide on very large screens */
        max-width: 1600px;
    }
</style>
