<template>

	<!-- switching to bootstrap default styled container -->
	<div class="container">

		<h1>Message from The Dean</h1>
		<p class="pt-3">Welcome to the 2021 Albert Nerken School of Engineering End of Year Show. It has been an incredibly challenging academic year but both our faculty and students have risen to the occasion in true Cooper style. The End of Year Show exhibition showcases and celebrates the amazing collaborative work of our faculty and students. Some themes in this year’s show include projects at the intersection of engineering and healthcare, designs that improve sustainable solutions to local and global problems, and the applications of machine learning and artificial intelligence to benefit humanity and society, among others. I invite you to explore this year’s virtual exhibition and witness for yourself the exceptional results of our talented students.</p>
		<p>Special thanks to Dayi Novas, Evan Murphy, Jonathan Lam, Lionel Gilliar-Schoenenberger, Beth Slack and Nori Perez for the artistic design, curation and digital presentation of this year’s End of Year Show.</p>

		<img class="signature pt-3 me-5" src="/images/signature.png">
		
		<p class="pt-3">Barry L. Shoop, Dean of Engineering<br><a href="https://cooper.edu/engineering" target="_blank">Albert Nerken School of Engineering</a>, The Cooper Union</p>
		<p class="pt-5"><i><b><a href="https://cooper.edu/events-and-exhibitions/exhibitions/end-year-show-2021" target="_blank">The End of Year Show</a></b> is a Cooper Union campus-wide event. Please also visit shows for the <a href="http://endofyearshow2021.cooper.edu/" target="_blank"><b>School of Art</b></a> and <a href="https://archeoys2021.cooper.edu/" target="_blank"><b>School of Architecture</b></a>.</i></p>
		
		<h1 class="pt-5">The Design Team</h1>

		<div class="row pt-3">
			<div class="col-3 d-none d-md-block">
				<img src="/images/team/dayi.jpg" style="width: 100%; border: 2px solid #c14e0e;">
			</div>
			<div class="col">
				<h3>Dayi Novas</h3>
				<h5><i>Art Director</i></h5>
				<p>Dayi graduated from The Cooper Union in 2020 and has been designing books, typefaces, websites, branding & identity, etc. She has worked on projects for Alexandria Ocasio Cortez, HBO, Sacha Baron Cohen, Sean King, Mike Cloud, Julie Harris &mdash; but most of the time, thankfully, she works as a tattoo artist in her studio in Brooklyn. Find her work <a href="http://novasdayi.com/" target="_blank">here</a>.</p>
			</div>
		</div>

		<div class="row pt-3">
			<div class="col-3 d-none d-md-block">
				<img src="/images/team/evan.jpg" style="width: 100%; border: 2px solid #c14e0e;">
			</div>
			<div class="col">
				<h3>Evan Murphy</h3>
				<h5><i>Webmaster &mdash; Front-end</i></h5>
				<p>Evan currently studies Electrical Engineering at Cooper. He has been tinkering with electronics and building things for years, and is most interested in audio electronics and avionics design. He's also been setting up websites for his friends since high school.</p>
			</div>
		</div>

		<div class="row pt-3">
			<div class="col-3 d-none d-md-block">
				<img src="/images/team/jonathan.jpg" style="width: 100%; border: 2px solid #c14e0e;">
			</div>
			<div class="col">
				<h3>Jonathan Lam</h3>
				<h5><i>Webmaster &mdash; Infrastructure</i></h5>
				<p>Jon is a rising senior EE interested in compiler and OS design. He is currently interning at MathWorks and infatuated with Colemak, Emacs, and Lisp. <a href="https://lambdalambda.ninja" target="_blank">Website.</a></p>
			</div>
		</div>

		<div class="row pt-3">
			<div class="col-3 d-none d-md-block">
				<img src="/images/team/lionel.jpg" style="width: 100%; border: 2px solid #c14e0e;">
			</div>
			<div class="col">
				<h3>Lionel Gilliar-Schoenenberger</h3>
				<h5><i>Student Representative</i></h5>
				<p>Lionel Gilliar-Schoenenberger’s background consists of work as a flea market vendor, custom fabricator and endeavors to address climate change through waste management, in addition to studying Civil Engineering (‘23).</p>
			</div>
		</div>
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
		width: 220px;
		height: 85px;
	}
</style>
