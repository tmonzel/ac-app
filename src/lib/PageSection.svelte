<script lang="ts">
	import type { Snippet } from 'svelte';
	import { appState } from './state.svelte';

	let {
		id,
		children,
		...props
	}: {
		id: string;
		children: Snippet<[any]>;
		[key: string]: any;
	} = $props();

	let active = $derived(appState.currentPage === id);
</script>

<section {id} class={`${props.class || ''} min-h-screen page-section`} class:active>
	{@render children({ active })}
</section>
