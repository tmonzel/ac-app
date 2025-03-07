<script lang="ts">
	import { logoImage } from '$assets/images';
	import Footer from '$lib/Footer.svelte';
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
			Danke für Ihre<br />Unterstützung
		</h1>
		<h2 class="text-3xl mb-12">Ihre Spende wurde erfolgreich übermittelt.</h2>
		<!--<p class="italic mb-12">Eine Zahlung an Stripe wird auf Ihrer Abrechnung ausgewiesen.</p>-->
		<a
			href="/spenden"
			class="inline-flex cursor-pointer hl-font shadow-lg items-center gap-2 justify-center w-full px-8 py-4 text-lg font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
			>Zurück zur Spendenübersicht</a
		>
	</header>
</div>
