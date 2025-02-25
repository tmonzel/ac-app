<script lang="ts">
	import PageSection from '$lib/PageSection.svelte';

	import hwsLogo from '$assets/images/logos/hws-logo.svg';
	import fsLogo from '$assets/images/logos/finnern-stiftung.png';
	import cssLogo from '$assets/images/logos/claussen-simon-st.svg';
	import hsLogo from '$assets/images/logos/hst-logo.png';
	import mkkLogo from '$assets/images/logos/mkk-logo.svg';
	import bhLogo from '$assets/images/logos/budnianer-hilfe-logo.png';
	import hkAltonaLogo from '$assets/images/logos/hk-hamburg-altona-logo.png';
	import ifbLogo from '$assets/images/logos/ifb-hh-logo-resized.png';
	import snLogo from '$assets/images/logos/sisters-network-logo.png';
	import joblingeLogo from '$assets/images/logos/joblinge-logo.jpg';
	import jeaLogo from '$assets/images/logos/jea-logo.png';
</script>

<PageSection id="partner" class="py-32">
	<div class="container mx-auto px-5">
		<header class="text-center">
			<h1 class="main-headline mb-12 hl-font">Partner</h1>
			<h2 class="text-xl mb-12 lead-font">
				Herzlichen Dank unseren Unterstützer*innen<br />und allen Mitmacher*innen
			</h2>
		</header>

		<div class="grid gap-5 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 partner-grid">
			<div class="bg-zinc-100">
				<img class="partner-logo" src={hwsLogo} alt="Hans Weisser Stiftung Logo" />
			</div>
			<div class="bg-zinc-100">
				<img class="partner-logo" src={fsLogo} alt="Finnern Stiftung Logo" />
			</div>
			<div class="bg-zinc-100">
				<img class="partner-logo" src={cssLogo} alt="Claussen Simon Stiftung Logo" />
			</div>
			<div class="bg-zinc-100">
				<img class="partner-logo" src={hsLogo} alt="Homann Stiftung Logo" />
			</div>
			<div class="bg-zinc-100">
				<img class="partner-logo p-3" src={mkkLogo} alt="mkk meine krankenkasse Logo" />
			</div>

			<div class="bg-zinc-100">
				<img class="partner-logo" src={hkAltonaLogo} alt="HK Hamburg Altona Logo" />
			</div>

			<div class="bg-zinc-100">
				<img class="partner-logo" src={ifbLogo} alt="IFB Hamburg Logo" />
			</div>
		</div>
		<hr class="my-10" />
		<div class="grid gap-5 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 partner-grid">
			<div class="bg-zinc-100">
				<div>
					<img class="partner-logo" src={snLogo} alt="Sisters Network Logo" style="width: 65%" />
				</div>
			</div>

			<div class="bg-zinc-100">
				<img class="partner-logo" src={joblingeLogo} alt="Joblinge Logo" />
			</div>

			<div class="bg-zinc-100">
				<img class="partner-logo" src={jeaLogo} alt="JEA Logo" />
			</div>
		</div>
	</div>
</PageSection>

<style>
	.partner-grid div {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 280px;
	}

	.partner-logo {
		max-width: 70%;
		max-height: 50%;
		mix-blend-mode: darken;
	}
</style>
