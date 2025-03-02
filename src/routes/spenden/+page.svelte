<script lang="ts">
	import { logoImage } from '$assets/images';
	import { loadStripe } from '@stripe/stripe-js';
	import Footer from '$lib/Footer.svelte';
	import { onMount } from 'svelte';
	import type { Stripe } from '@stripe/stripe-js';
	import DonationItem from '$lib/DonationItem.svelte';

	export let data;

	let stripe: Stripe | null = null;

	onMount(async () => {
		stripe = await loadStripe(
			'pk_test_51QweuMI1DSZqNoNSIj10RGM5RRcGFMqjlaQMaEPVuhEYYS5il3dvrrRRFDroGmaGZ7qY8LiEqoHdsKxaaOD8G3ml00E5xQXdM2'
		);
	});
</script>

<svelte:head>
	<title>Spenden | Azubi Companion</title>
	<meta name="description" content="Unterstützen Sie junge Menschen bei ihrer Ausbildung" />
	<link rel="canonical" href="https://azubi-companion.de/jobs" />
</svelte:head>

<div class="container mx-auto my-10 px-2 sm:px-0">
	<header class="text-center">
		<div class="flex justify-center mb-5">
			<img src={logoImage} alt="Azubi Companion Logo" class="h-20" />
		</div>
		<h1 class="text-6xl font-bold mb-12 hl-font tracking-tight">
			Bauen Sie unser<br />neues Büro mit auf
		</h1>
		<h2 class="text-xl mb-12 lead-font">
			Wählen Sie einen Gegenstand den Sie für das neue Büro beisteuern möchen...
		</h2>
	</header>

	<hr class="my-10" />

	{#if stripe}
		<div class="px-2 sm:px-20">
			<div class="flex justify-center">
				{#each data.products as product}
					<DonationItem {stripe} {product} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<Footer />
