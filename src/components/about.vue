<template>

<!--	<div class="container-fluid">-->
	<div class="container">

		<div class="row pt-5">
			<div class="col-0 col-sm-1 col-lg-3"></div>
			<div class="col-12 col-sm-10 col-lg-6">
				<h1>Message from The Dean</h1>
				<p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a molestie orci. Vestibulum ut tincidunt nisl, ac dignissim elit. Maecenas non nibh molestie, vehicula est et, pretium orci. Aliquam erat volutpat. Sed dictum lorem sed ligula fringilla dapibus. Donec sit amet metus ipsum. Suspendisse tempor malesuada eros in tincidunt. Praesent eleifend mollis tellus non tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus venenatis neque id lorem elementum, nec gravida libero facilisis. Nam nec nibh sodales, euismod lectus in, pharetra metus. Maecenas dignissim vulputate nisi. Suspendisse potenti. Morbi maximus turpis eget tortor semper sollicitudin. Curabitur tincidunt erat at interdum volutpat. Pellentesque commodo dui sem, quis maximus nibh ornare lacinia.</p>

                <!-- signature align right -->
				<div class="d-flex justify-content-end">
					<img class="signature pt-3 mr-5" src="/images/signature.png">
				</div>
			</div>
			<div class="col-0 col-sm-1 col-lg-3"></div>
		</div>

		<div class="row pt-5">
			<div class="col-0 col-sm-1 col-lg-3"></div>
			<div class="col-12 col-sm-10 col-lg-6">
				<h1>The Graphics Team</h1>
				<p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a molestie orci. Vestibulum ut tincidunt nisl, ac dignissim elit. Maecenas non nibh molestie, vehicula est et, pretium orci. Aliquam erat volutpat. Sed dictum lorem sed ligula fringilla dapibus. Donec sit amet metus ipsum. Suspendisse tempor malesuada eros in tincidunt. Praesent eleifend mollis tellus non tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus venenatis neque id lorem elementum, nec gravida libero facilisis. Nam nec nibh sodales, euismod lectus in, pharetra metus. Maecenas dignissim vulputate nisi. Suspendisse potenti. Morbi maximus turpis eget tortor semper sollicitudin. Curabitur tincidunt erat at interdum volutpat. Pellentesque commodo dui sem, quis maximus nibh ornare lacinia.</p>
			</div>
			<div class="col-0 col-sm-1 col-lg-3"></div>
		</div>
	</div>

    <!-- background graphics -->
	<div class="curve1">
        <img src="/images/ABOUT-top.svg">
    </div>
	<div class="curve2">
        <img src="/images/ABOUT-bottom.svg">
    </div>
	<bg/>

</template>

<script>
import bg from './bg.vue';
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'About',

	components: {
        bg
	},

	data() {
    return {
      projects: []
    };
	},

	created() {
	},
})
</script>

<style scoped>

    * {
		color: #c14e0e;
	}

    h1 {
		font-family: 'DM Serif Text', serif;
		font-weight: normal;
	}

    p {
		font-family: 'Libre Baskerville', serif;
	}

	.signature {
		max-width: 100%;
		width: 180px;
	}

/**{*/
/*	margin: 0px;*/
/*	padding: 0px;*/
/*}*/

/*.container-fluid{*/
/*	color: #c14e0e;*/
/*}*/

/*.container-fluid h1{*/
/*	padding: 70px 0px 0px 0px;*/
/*	font-family: 'DM Serif Text', serif;*/
/*	font-weight: normal;*/
/*}*/

/*.container-fluid p{*/
/*	margin: 20px 0px 0px 0px;*/
/*	font-family: 'Libre Baskerville', serif;*/
/*	font-size: 14px;*/
/*}*/

/*.container-fluid img{*/
/*	padding: 20px 0px;*/
/*	width: 180px;*/
/*}*/

.curve1 img{
    position: fixed;
    right: 0px;
    top: 0px;
    width: 36vw;
    z-index: -1;
}

.curve2 img{
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 26vw;
    z-index: -1;
}

</style>
