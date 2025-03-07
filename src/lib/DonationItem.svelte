<script lang="ts">
	import type { Stripe } from '@stripe/stripe-js';
	import DonationForm from './DonationForm.svelte';
	import type { FundItem } from './types';

	interface Props {
		stripe: Stripe;
		item: FundItem;
	}

	let { stripe, item }: Props = $props();

	let donationDialog: HTMLDialogElement;

	function openDonationDialog() {
		donationDialog.showModal();
	}

	const fundingCompleted = item.storageCount === item.storageMax;
</script>

<article class="flex flex-col items-center">
	<header class="text-center mb-5" class:opacity-25={fundingCompleted}>
		<span class="marker text-2xl mb-3 inline-block">{item.storageCount} / {item.storageMax}</span>
		<h4 class="text-3xl font-thin mb-2">
			{item.name}
		</h4>
		<p class="font-bold hl-font text-xl">
			{#if item.default_price && item.default_price.unit_amount}
				{item.default_price.unit_amount / 100}
				<span class="uppercase">{item.default_price.currency}</span>
			{/if}
		</p>
	</header>

	<p class="text-center text-lg max-w-sm mb-5" class:opacity-25={fundingCompleted}>
		{item.description}
	</p>

	<div class="mb-5">
		<img
			src={item.images[0]}
			alt=""
			class="h-72 mix-blend-darken"
			class:opacity-25={fundingCompleted}
		/>
	</div>

	{#if !fundingCompleted}
		<form action="/api/checkout" method="POST">
			{#if item.default_price}
				<input type="hidden" name="priceId" value={item.default_price.id} />
			{/if}
			<button
				type="submit"
				class="inline-flex hl-font shadow-lg items-center gap-2 justify-center w-full px-8 py-4 text-lg font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
				>Spenden <svg
					class="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="3"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					></path></svg
				></button
			>
		</form>
	{:else}
		<div class="text-xl hl-font text-center">
			Das Spendenziel wurde erreicht.<br />Danke!
		</div>
	{/if}
</article>

<dialog bind:this={donationDialog}>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button class="absolute w-screen h-screen" onclick={() => donationDialog.close()}></button>
	<div class="relative bg-white p-5 rounded-2xl max-w-2xl mx-auto mt-12">
		<div class="flex justify-end mb-3">
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button onclick={() => donationDialog.close()}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#1f1f1f"
					><path
						d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
					/></svg
				></button
			>
		</div>
		<DonationForm {stripe} on:success={() => donationDialog.close()} />
	</div>
</dialog>

<style>
	dialog {
		padding: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
