<template>
    <div class="footer col-12 col-md-12 d-flex justify-content-center ">
        <div v-if="currentPage !== 'splash'">
            <p><a href="http://cooper.edu/welcome" target="_blank">The Cooper Union for the Advancement of Science and Art</a> Ⓒ 2021, All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'website-footer',

    props: {
      currentPage: String,
    },
  })
</script>

<style scoped>
    .footer{
        font-size: 12px;
        width: 80%;
        padding: 40px 0px 40px 0px;
        margin: auto;
        text-align: center;
    }
</style>
