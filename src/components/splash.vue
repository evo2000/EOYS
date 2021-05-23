<template>

    <!-- switching to bootstrap container -->
<!--  <div class="main-contain">-->
    <div class="container-fluid">
<!--        <div class="logo">-->
        <img class="logo d-block mx-auto" src="/images/logo-splash.svg">
<!--        </div>-->
<!--        <div class="curve">-->
<!--        </div>-->
    </div>

    <!-- this will be moved into the background component -->
<!--    <img class="curve" src="/images/HOME.svg">-->

</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'Splash',
})
</script>

<style scoped>

/**{*/
/*    margin: 0px;*/
/*    padding: 0px;*/
/*}*/
/**/
/*.logo img{*/
/*    display: block;*/
/*    margin: auto;*/
/*    padding-top: 14vh;*/
/*    width: 80vw;*/
/*}*/

.logo {
    width: 100%;

    /* full width may be too wide on very large screens */
    max-width: 1600px;
}

/* this will be moved into the background component*/
/*.curve {*/
/*    position: absolute;*/
/*    right: 0px;*/
/*    bottom: 0px;*/
/*    height: 80vh;*/
/*    z-index: -1;*/
/*}*/
</style>
