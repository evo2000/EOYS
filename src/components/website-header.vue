<template>
    <div class="container-fluid mb-5">
        <div class="menu row">
            <!-- navbar logo (hide if splash page) -->
            <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
                <router-link class="d-inline-block p-3"
                             v-if="currentPage !== 'splash'"
                             to="/" title="Return to homepage">
                    <img class="logo" src="/images/logo.svg">
                </router-link>
            </div>

            <!-- nav links -->
            <nav class="col-12 col-md-6 d-flex flex-row justify-content-center justify-content-md-end">
                <div :class="{act: currentPage === 'projects' || currentPage === 'project'}">
                    <router-link class="d-block p-3" to="/projects">Projects</router-link>
                </div>
                <div :class="{act: currentPage === 'about'}">
                    <router-link class="d-block p-3" to="/about">About</router-link>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'website-header',

    props: {
      currentPage: String,
    },
  })
</script>

<style scoped>
    .logo {
        height: 3em;
    }

    nav a {
        font-family: inherit;
        color: inherit;
        text-decoration: none;
    }

    nav a:hover {
        text-decoration: underline;
    }

    nav .act a {
        font-weight: bold;
    }
</style>
