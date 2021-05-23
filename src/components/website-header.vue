<template>
<!--    <div class="main-contain">-->
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

    nav .act a {
        font-weight: bold;
    }

/** {*/
/*    margin: 0px;*/
/*    padding: 0px;*/
/*}*/

/*.menu{*/
/*    width: 100vw;*/
/*    display: inline-block;*/
/*}*/

/*.menu ul {*/
/*    list-style-type: none;*/
/*}*/

/*.menu li {*/
/*    float: right;*/
/*}*/

/*.menu li a {*/
/*    display: block;*/
/*    font-family: 'Libre Baskerville', serif;*/
/*    color: #c14e0e;*/
/*    font-size: 14px;*/
/*    margin: 30px 60px 0px 0px;*/
/*    text-decoration: none;*/
/*    border-bottom: 2px solid rgba(0, 0, 0, 0);*/
/*    transition: border-bottom 0.5s;*/
/*}*/

/*.act a {*/
/*    font-weight: bold;*/
/*}*/

/*.menu li a:hover {*/
/*    border-bottom: 2px solid #c14e0e;*/
/*}*/

/*.menu li a:visited {*/
/*    color: #c14e0e;*/
/*}*/

/*.menu img {*/
/*    height: 60px;*/
/*    padding: 20px 0px 0px 40px;*/
/*}*/

/*.curve img {*/
/*    position: absolute;*/
/*    right: 0px;*/
/*    top: 0px;*/
/*    height: 80vh;*/
/*    z-index: -1;*/
/*}*/

</style>
