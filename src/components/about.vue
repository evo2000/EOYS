<template>
	
	<div class="container-fluid">
		<div class="row">
			<div class="col-3"></div>
			<div class="col-7">
				<h1>Message from The Dean</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a molestie orci. Vestibulum ut tincidunt nisl, ac dignissim elit. Maecenas non nibh molestie, vehicula est et, pretium orci. Aliquam erat volutpat. Sed dictum lorem sed ligula fringilla dapibus. Donec sit amet metus ipsum. Suspendisse tempor malesuada eros in tincidunt. Praesent eleifend mollis tellus non tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus venenatis neque id lorem elementum, nec gravida libero facilisis. Nam nec nibh sodales, euismod lectus in, pharetra metus. Maecenas dignissim vulputate nisi. Suspendisse potenti. Morbi maximus turpis eget tortor semper sollicitudin. Curabitur tincidunt erat at interdum volutpat. Pellentesque commodo dui sem, quis maximus nibh ornare lacinia.</p>
			</div>
			<div class="col-2"></div>
		</div>
		<div class="row">
			<div class="col-7"></div>
			<div class="col-2">
				<img src="/images/signature.png">
			</div>
		</div>
		<div class="row">
			<div class="col-3 leftline">
				<img src="/images/bg-assets-19.svg">
			</div>
			<div class="col-7">
				<h1>The Graphics Team</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a molestie orci. Vestibulum ut tincidunt nisl, ac dignissim elit. Maecenas non nibh molestie, vehicula est et, pretium orci. Aliquam erat volutpat. Sed dictum lorem sed ligula fringilla dapibus. Donec sit amet metus ipsum. Suspendisse tempor malesuada eros in tincidunt. Praesent eleifend mollis tellus non tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus venenatis neque id lorem elementum, nec gravida libero facilisis. Nam nec nibh sodales, euismod lectus in, pharetra metus. Maecenas dignissim vulputate nisi. Suspendisse potenti. Morbi maximus turpis eget tortor semper sollicitudin. Curabitur tincidunt erat at interdum volutpat. Pellentesque commodo dui sem, quis maximus nibh ornare lacinia.</p>
			</div>
			<div class="col-2"></div>
		</div>
	</div>
	<div class="curve1">
        <img src="/images/bg-assets-22.svg">
    </div>
	<div class="curve2">
        <img src="/images/bg-assets-24.svg">
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

*{
	margin: 0px;
	padding: 0px;
}

.container-fluid{
	color: #c14e0e;
}

.container-fluid h1{
	padding: 40px 0px 0px 0px;
	font-family: 'DM Serif Text', serif;
}

.container-fluid p{
	margin: 20px 0px 0px 0px;
	font-family: 'Libre Baskerville', serif;
	font-size: 14px;
}

.container-fluid img{
	padding: 20px 0px;
	width: inherit;
}

.leftline img{
	width: inherit;
	padding: 64px 10px 0px 10px;
}

.curve1 img{
    position: absolute;
    right: 0px;
    top: 0px;
    width: 40vw;
    z-index: -1;
}

.curve2 img{
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 100vh;
    z-index: -1;
}

</style>