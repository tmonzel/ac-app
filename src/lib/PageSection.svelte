<script lang="ts">
	import { appState } from './state';

	interface Props {
		id: string;
		children?: import('svelte').Snippet<[any]>;
		[key: string]: any;
	}

	let { ...props }: Props = $props();

	let active = $derived($appState.currentPage === props.id);
</script>

<section id={props.id} class={`${props.class || ''} min-h-screen page-section`} class:active>
	{@render props.children?.({ active })}
</section>
