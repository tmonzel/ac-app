<script lang="ts">
	export let image: Promise<any>;
	export let alt: string;
</script>

{#await image}
	Bild wird geladen...
{:then { default: src }}
	<img {src} {alt} class="asset-image {$$restProps.class || ''}" />
{/await}
