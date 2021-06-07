<template>
    <div class="container">
        <h1>404: You're lost</h1>
        <h3>... or we messed up.</h3>
        <p>If you think it's the latter, please contact one of the webmasters (found on the <router-link to="/about">About page</router-link>), and give them this path:</p>
        <p><code>{{$route.fullPath}}</code></p>
        <router-link to="/">Return to the homepage.</router-link>
    </div>
</template>

<script>
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'page-not-found',
  });
</script>

<style></style>
