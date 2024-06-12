<script lang="ts">
	import { appState } from './state';

  export let id: string;

  $: active = $appState.currentPage === id;
</script>

<section {id} class={`${$$props.class || ''} min-h-screen page-section`} class:active={active}>
  <slot {active}></slot>
</section>
