<template>

	<!-- switching to bootstrap default styled container -->
	<div class="container">

		<h1>Message from The Dean</h1>
		<p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a molestie orci. Vestibulum ut tincidunt nisl, ac dignissim elit. Maecenas non nibh molestie, vehicula est et, pretium orci. Aliquam erat volutpat. Sed dictum lorem sed ligula fringilla dapibus. Donec sit amet metus ipsum. Suspendisse tempor malesuada eros in tincidunt. Praesent eleifend mollis tellus non tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus venenatis neque id lorem elementum, nec gravida libero facilisis. Nam nec nibh sodales, euismod lectus in, pharetra metus. Maecenas dignissim vulputate nisi. Suspendisse potenti. Morbi maximus turpis eget tortor semper sollicitudin. Curabitur tincidunt erat at interdum volutpat. Pellentesque commodo dui sem, quis maximus nibh ornare lacinia.</p>

		<!-- signature align right -->
		<div class="d-flex justify-content-end">
			<img class="signature pt-3 me-5" src="/images/signature.png">
		</div>

		<h1>The Graphics Team</h1>
		<p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a molestie orci. Vestibulum ut tincidunt nisl, ac dignissim elit. Maecenas non nibh molestie, vehicula est et, pretium orci. Aliquam erat volutpat. Sed dictum lorem sed ligula fringilla dapibus. Donec sit amet metus ipsum. Suspendisse tempor malesuada eros in tincidunt. Praesent eleifend mollis tellus non tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus venenatis neque id lorem elementum, nec gravida libero facilisis. Nam nec nibh sodales, euismod lectus in, pharetra metus. Maecenas dignissim vulputate nisi. Suspendisse potenti. Morbi maximus turpis eget tortor semper sollicitudin. Curabitur tincidunt erat at interdum volutpat. Pellentesque commodo dui sem, quis maximus nibh ornare lacinia.</p>
	</div>

</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'About',
})
</script>

<style scoped>
	.signature {
		max-width: 100%;
		width: 180px;
	}
</style>
