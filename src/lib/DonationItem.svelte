<script lang="ts">
	import StripeBase from 'stripe';
	import type { Stripe } from '@stripe/stripe-js';
	import DonationForm from './DonationForm.svelte';

	interface Props {
		stripe: Stripe;
		product: StripeBase.Product & { default_price: StripeBase.Price };
	}

	let { stripe, product }: Props = $props();

	let donationDialog: HTMLDialogElement;

	function openDonationDialog() {
		donationDialog.showModal();
	}
</script>

<article class="flex flex-col items-center">
	<header class="text-center mb-5">
		<h4 class="text-3xl font-thin mb-2">
			{product.name}
		</h4>
		<p class="font-extrabold text-xl">
			{#if product.default_price && product.default_price.unit_amount}
				{product.default_price.unit_amount / 100}
				<span class="uppercase">{product.default_price.currency}</span>
			{/if}
		</p>
	</header>

	<p class="lead-font text-lg max-w-sm mb-5">{product.description}</p>

	<div class="mb-5">
		<img src={product.images[0]} alt="" class="mix-blend-darken" />
	</div>

	{#if product.default_price}
		<input type="hidden" name="priceId" value={product.default_price.id} />
	{/if}
	<button
		onclick={() => openDonationDialog()}
		class="inline-flex shadow-lg items-center gap-2 justify-center w-full px-8 py-4 text-lg font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
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
</article>

<dialog bind:this={donationDialog}>
	<button class="absolute w-screen h-screen" onclick={() => donationDialog.close()}></button>
	<div class="relative bg-white p-5 rounded-2xl max-w-2xl mx-auto mt-12">
		<div class="flex justify-end mb-3">
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
