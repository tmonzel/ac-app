<script lang="ts">
	import { onMount } from 'svelte';
	import { appState } from './state';

  let scrollContainer: HTMLElement;
  let sections: NodeListOf<HTMLElement>;
  let focusedSection: HTMLElement;

  function onScroll(e: Event) {
    const scrollTop = window.scrollY;

    let currentPage = null;

    if(sections) {
      for(const s of sections) {
        if(s === focusedSection) continue;

        const offsetTop = s.offsetTop - window.innerHeight / 2;

        if(offsetTop < scrollTop && (offsetTop + s.offsetHeight) > scrollTop) {
          currentPage = s.id;
        }
      }
    }
    
    appState.set({ scrollTop, currentPage });
  }

  onMount(() => {
    sections = scrollContainer.querySelectorAll('.page-section');
  });
</script>

<svelte:window on:scroll={onScroll}></svelte:window>

<div bind:this={scrollContainer}>
  <slot></slot>
</div>