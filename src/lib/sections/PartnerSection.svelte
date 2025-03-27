<script lang="ts">
	import PageSection from '$lib/PageSection.svelte';
</script>

<PageSection id="partner" class="py-32">
	<div class="container">
		<header class="text-center">
			<h1 class="text-5xl sm:text-6xl xl:text-8xl font-extrabold tracking-tighter mb-5 xl:mb-13">
				Partner
			</h1>
			<p class="lead text-xl sm:text-2xl xl:text-3xl mb-5 xl:mb-13">
				Herzlichen Dank unseren Unterstützer*innen<br />und allen Mitmacher*innen
			</p>
		</header>

		{#snippet logoBlock(src: string, alt: string)}
			<div class="bg-zinc-100 flex justify-center items-center min-h-60">
				<img class="mix-blend-darken max-w-60 max-h-40" {src} {alt} />
			</div>
		{/snippet}

		<div class="grid gap-5 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
			{@render logoBlock('images/logos/hws-logo.svg', 'Hans Weisser Stiftung Logo')}
			{@render logoBlock('images/logos/finnern-stiftung.png', 'Finnern Stiftung Logo')}
			{@render logoBlock('images/logos/claussen-simon-st.svg', 'Claussen Simon Stiftung Logo')}
			{@render logoBlock('images/logos/hst-logo.png', 'Homann Stiftung Logo')}
			{@render logoBlock('images/logos/mkk-logo.svg', 'mkk meine krankenkasse Logo')}

			{@render logoBlock('images/logos/hk-hamburg-altona-logo.png', 'HK Hamburg Altona Logo')}
			{@render logoBlock('images/logos/ifb-hh-logo-resized.png', 'IFB Hamburg Logo')}
		</div>

		<hr class="my-10" />

		<div class="grid gap-5 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 partner-grid">
			{@render logoBlock('images/logos/sisters-network-logo.png', 'Sisters Network Logo')}
			{@render logoBlock('images/logos/joblinge-logo.jpg', 'Joblinge Logo')}
			{@render logoBlock('images/logos/jea-logo.png', 'JEA Logo')}
		</div>
	</div>
</PageSection>
