<script lang="ts">
	interface Props {
		image: Promise<any>;
		alt: string;
		[key: string]: any
	}

	let { image, alt, ...rest }: Props = $props();
</script>

{#await image}
	Bild wird geladen...
{:then { default: src }}
	<img {src} {alt} class="asset-image {rest.class || ''}" />
{/await}
