<template>

    <!-- don't need this component -- just style background of index.html -->
<!--    <div class="main-contain"></div>-->

</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'bg',
});
</script>

<style scoped>

.main-contain{
    margin: 0px;
    padding: 0px;
    background-color: #eaded6;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
}

</style>
