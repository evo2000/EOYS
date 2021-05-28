<template>

	<!-- switching to bootstrap default styled container -->
	<div class="container">

		<h1>Message from The Dean</h1>
		<p class="pt-3">Welcome to the 2021 Albert Nerken School of Engineering End of Year Show. It has been an incredibly challenging academic year but both our faculty and students have risen to the occasion in true Cooper style. The End of Year Show exhibition showcases and celebrates the amazing collaborative work of our faculty and students. Some themes in this year’s show include projects at the intersection of engineering and healthcare, designs that improve sustainable solutions to local and global problems, and the applications of machine learning and artificial intelligence to benefit humanity and society, among others. I invite you to explore this year’s virtual exhibition and witness for yourself the exceptional results of our talented students.</p>
		<p class="pt-3">Special thanks to Dayi Novas, Evan Murphy, Jonathan Lam, Lionel Gilliar-Schoenenberger, Beth Slack and Nori Perez for the artistic design, curation and digital presentation of this year’s End of Year Show.</p>
		<p class="pt-3">The End of Year Show is a Cooper Union campus-wide event. Please also visit the <a href="#"><b>Art School</b></a> and <a href="#"><b>Architecture School</b></a>’s virtual shows as well.</p>

		<!-- signature align right -->
		<div class="d-flex justify-content-end">
			<img class="signature pt-3 me-5" src="/images/signature.png">
		</div>
		<div class="d-flex justify-content-end">
			<p class="dean pt-3">Barry L. Shoop | Dean of Engineering | Albert Nerken School of Engineering</p>
		</div>

		<h1 class="pt-5">The Graphics Team</h1>
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
		width: 220px;
	}
</style>
