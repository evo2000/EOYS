<template>

    <!-- switching to bootstrap container -->
<!--  <div class="main-contain">-->
    <div class="container-fluid d-flex flex-column justify-content-center">
<!--        <div class="logo">-->
        <img class="logo d-block mx-auto" src="/images/logo-splash.svg">
<!--        </div>-->
<!--        <div class="curve">-->
<!--        </div>-->
    </div>
    <img class="curve" src="/images/HOME.svg">

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
    max-width: 1600px;
}

.curve {
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 80vh;
    z-index: -1;
}
</style>
