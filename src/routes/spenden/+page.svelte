<script lang="ts">
	import { logoImage } from '$assets/images';
	import { loadStripe } from '@stripe/stripe-js';
	import Footer from '$lib/Footer.svelte';
	import { onMount } from 'svelte';
	import type { Stripe } from '@stripe/stripe-js';
	import DonationItem from '$lib/DonationItem.svelte';

	let { data } = $props();
	let stripe: Stripe | null = $state(null);

	onMount(async () => {
		stripe = await loadStripe(
			'pk_test_51QweuMI1DSZqNoNSIj10RGM5RRcGFMqjlaQMaEPVuhEYYS5il3dvrrRRFDroGmaGZ7qY8LiEqoHdsKxaaOD8G3ml00E5xQXdM2'
		);
	});
</script>

<svelte:head>
	<title>Spenden | Azubi Companion</title>
	<meta name="description" content="Unterstützen Sie junge Menschen bei ihrer Ausbildung" />
</svelte:head>

<div class="container mx-auto my-10 px-2 sm:px-0">
	<header class="text-center">
		<div class="flex justify-center mb-5">
			<img src={logoImage} alt="Azubi Companion Logo" class="h-20" />
		</div>
		<h1 class="text-7xl font-bold mb-12 hl-font tracking-tight">
			Bauen Sie unser<br />neues Büro mit auf
		</h1>
		<h2 class="text-3xl mb-12">
			Wählen Sie einen Gegenstand den Sie für das neue Büro beisteuern möchen...
		</h2>
	</header>

	<hr class="my-10" />

	{#if stripe}
		<div class="px-2 sm:px-20">
			<div class="flex justify-center">
				{#each data.items as item}
					<DonationItem {stripe} {item} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<Footer />
