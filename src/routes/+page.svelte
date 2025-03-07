<script lang="ts">
	import SiteMenu from '$lib/SiteMenu.svelte';
	import PageScroller from '$lib/PageScroller.svelte';
	import Footer from '$lib/Footer.svelte';
	import { logoImage } from '$assets/images';

	import LandingSection from '$lib/sections/LandingSection.svelte';
	import ServiceSection from '$lib/sections/ServiceSection.svelte';
	import SupportSection from '$lib/sections/SupportSection.svelte';
	import ContactSection from '$lib/sections/ContactSection.svelte';
	import PartnerSection from '$lib/sections/PartnerSection.svelte';
	import TeamSection from '$lib/sections/TeamSection.svelte';
</script>

<svelte:head>
	<title>Azubi Companion | Individuelle Ausbildungsbegleitung</title>
	<meta
		name="description"
		content="Individuelle Ausbildungsbegleitung für Azubis und Ausbildungsbetriebe in Hamburg. Gemeinsam schaffst du das!"
	/>

	<meta property="og:title" content="Azubi Companion | Individuelle Ausbildungsbegleitung" />
	<meta property="og:url" content="https://azubi-companion.de/" />
	<meta
		property="og:description"
		content="Individuelle Ausbildungsbegleitung für Azubis und Ausbildungsbetriebe in Hamburg."
	/>
	<meta property="og:image" content={logoImage} />
	<meta property="og:type" content="website" />

	<link rel="canonical" href="https://azubi-companion.de" />

	<style>
		html {
			scroll-behavior: smooth;
		}
	</style>
</svelte:head>

<header class="fixed w-full px-12 py-10 flex justify-between">
	<div class="flex justify-center">
		<img class="h-24" src="/logo.svg" alt="" />
	</div>

	<SiteMenu />
</header>

<PageScroller>
	<LandingSection />
	<ServiceSection />
	<PartnerSection />
	<SupportSection />
	<TeamSection />
	<ContactSection />
</PageScroller>

<Footer />
