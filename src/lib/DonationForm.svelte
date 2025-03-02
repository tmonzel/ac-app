<script lang="ts">
	import type { Stripe, StripeElementsOptions } from '@stripe/stripe-js';
	import { createEventDispatcher, onMount } from 'svelte';

	export let stripe: Stripe;

	const dispatch = createEventDispatcher();

	let payment: HTMLElement;
	let errorMessage: string;
	let loading = false;

	const options: StripeElementsOptions = {
		mode: 'payment',
		amount: 300,
		currency: 'eur',
		appearance: {
			theme: 'stripe'
		},
		paymentMethodTypes: ['card', 'paypal', 'giropay']
	};

	const elements = stripe.elements(options);

	async function submit() {
		if (loading) {
			return;
		}

		errorMessage = '';

		// Trigger form validation and wallet collection
		const { error: submitError } = await elements.submit();

		if (submitError) {
			//error = submitError.message!;
			return;
		}

		loading = true;

		// Create the PaymentIntent and obtain clientSecret
		const res = await fetch('/api/payment-intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ amount: 300 })
		});

		const { clientSecret } = await res.json();

		const { error } = await stripe.confirmPayment({
			elements,
			clientSecret,
			redirect: 'if_required'
		});

		if (error) {
			// This point is only reached if there's an immediate error when
			// confirming the payment. Show the error to your customer (for example, payment details incomplete)
			errorMessage = error.message!;
		} else {
			// Your customer is redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer is redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}

		loading = false;
		dispatch('success');
	}

	onMount(() => {
		const paymentElement = elements.create('payment', {
			layout: 'accordion'
		});
		paymentElement.mount(payment);
	});
</script>

<form on:submit|preventDefault={submit} class="text-center">
	<div bind:this={payment} class="mb-4"></div>
	{#if errorMessage}
		<div>{errorMessage}</div>
	{/if}
	<button
		disabled={loading}
		class="inline-flex shadow-lg items-center gap-2 justify-center w-full px-8 py-4 text-lg font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
		>{#if loading}
			Wird verarbeitet...
		{:else}
			Abschicken
		{/if}</button
	>
</form>
