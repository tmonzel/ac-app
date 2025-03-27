<script lang="ts">
	import { onMount } from 'svelte';
	import { appState } from './state.svelte';

	let { children } = $props();

	let scrollContainer: HTMLElement;
	let sections: NodeListOf<HTMLElement>;

	function onScroll(e: Event) {
		const scrollTop = window.scrollY;

		let currentPage = null;

		if (sections) {
			for (const s of sections) {
				const offsetTop = s.offsetTop - window.innerHeight / 2;

				if (offsetTop < scrollTop && offsetTop + s.offsetHeight > scrollTop) {
					currentPage = s.id;
				}
			}
		}

		appState.scrollTop = scrollTop;
		appState.currentPage = currentPage;
	}

	onMount(() => {
		sections = scrollContainer.querySelectorAll('.page-section');
	});
</script>

<svelte:window onscroll={onScroll} />

<div bind:this={scrollContainer}>
	{@render children()}
</div>
