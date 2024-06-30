<script lang="ts">
	import { appState } from './state';

  let mobileMenu: HTMLDialogElement;
  let menuOpen = false;

  function openMenu(): void {
    mobileMenu.showModal();
    menuOpen = true;
  }

  function closeMenu(): void {
    mobileMenu.close();
    menuOpen = false;
  }

  $: scrollMode = $appState.scrollTop > 150;
</script>

<svelte:head>
  {#if menuOpen}
  <style>
    body {
      overflow: hidden;
    }
  </style>
  {/if}
</svelte:head>

<header>
  <div 
    class="fixed top-0 w-screen bg-white flex justify-between items-center shadow site-header py-4 lg:py-6 px-7 xl:px-12 z-50" 
    style="--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.05)" 
    class:is-scrolling={scrollMode}>
    <div>
      <a href="#start" class="flex items-end">
        <img src="ac-sa-logo.svg" alt="Azubi Companion Logo" class="w-16 sm:w-18">
        <span class="hl-font text-2xl leading-6 ms-4 brand-text">AZUBI<br>COMPANION</span>
      </a>
    </div>
    <div>
      <button class="block xl:hidden mobile-menu-toggle" on:click={() => openMenu()}>
        <span class="material-symbols-outlined">
          menu
        </span>
      </button>

      <nav class="hidden xl:flex gap-12">
        <a href="#programm" class="nav-link rounded-md" class:active={$appState.currentPage === 'programm'} style="--highlight-color: #7433FF">
          <span class="material-symbols-outlined icon">
            rocket_launch
          </span>
          LevelUp!
        </a>
        <a href="#partner" class="nav-link rounded-md" class:active={$appState.currentPage === 'partner'} style="--highlight-color: #0d65f2">
          <span class="material-symbols-outlined icon">
            handshake
          </span>
          Partner
        </a>
        <a href="#spenden" class="nav-link rounded-md" class:active={$appState.currentPage === 'spenden'} style="--highlight-color: #FF007A">
          <span class="material-symbols-outlined icon">
            favorite
          </span>
          Unterstützen
        </a>
        <a href="#team" class="nav-link rounded-md" class:active={$appState.currentPage === 'team'} style="--highlight-color: #FFD600">
          <span class="material-symbols-outlined icon">
            group
          </span>
          Team
        </a>
        <a href="#kontakt" class="nav-link rounded-md" class:active={$appState.currentPage === 'kontakt'} style="--highlight-color: #333">
          <span class="material-symbols-outlined icon">
            mail
          </span>
          Kontakt
        </a>
      </nav>
    </div>
  </div>
</header>

<dialog bind:this={mobileMenu} class="bg-white">
  <div class="flex flex-col py-4 lg:py-6 px-7 xl:px-12 min-h-screen">
    <div class="flex justify-end mb-10">
      <button class="mobile-menu-toggle" on:click={() => closeMenu()}>
        <span class="material-symbols-outlined">
          close
        </span>
      </button>
    </div>

    <nav class="flex flex-col flex-grow gap-y-10 px-10">
      <a href="#programm" class="nav-link mobile rounded-md" class:active={$appState.currentPage === 'programm'} style="--highlight-color: #7433FF" on:click={() => closeMenu()}>
        <span class="material-symbols-outlined icon">
          rocket_launch
        </span>
        LevelUp!
      </a>
      <a href="#partner" class="nav-link mobile rounded-md" class:active={$appState.currentPage === 'partner'} style="--highlight-color: #0d65f2" on:click={() => closeMenu()}>
        <span class="material-symbols-outlined icon">
          handshake
        </span>
        Partner
      </a>
      <a href="#spenden" class="nav-link mobile rounded-md" class:active={$appState.currentPage === 'spenden'} style="--highlight-color: #FF007A" on:click={() => closeMenu()}>
        <span class="material-symbols-outlined icon">
          favorite
        </span>
        Unterstützen
      </a>
      <a href="#team" class="nav-link mobile rounded-md" class:active={$appState.currentPage === 'team'} style="--highlight-color: #FFD600" on:click={() => closeMenu()}>
        <span class="material-symbols-outlined icon">
          group
        </span>
        Team
      </a>
      <a href="#kontakt" class="nav-link mobile rounded-md" class:active={$appState.currentPage === 'kontakt'} style="--highlight-color: #333" on:click={() => closeMenu()}>
        <span class="material-symbols-outlined icon">
          mail
        </span>
        Kontakt
      </a>
    </nav>
  </div>
</dialog>

<style>
  .site-header {
    transition: all 0.1s ease-out;
    /* padding: 2.5em 4em; */
  }

  .mobile-menu-toggle span {
    font-size: 5em;

    font-variation-settings:
    'FILL' 1,
    'wght' 200,
    'GRAD' 0,
    'opsz' 24
  }

  .nav-link {
    font-family: "Urbanist", sans-serif;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    transition: transform 0.1s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nav-link.mobile {
    flex-direction: row;
    font-size: 1.7rem;
  }

  .nav-link .icon {
    transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s cubic-bezier(0.22, 1, 0.36, 1);
    font-size: 1.2em;
    margin-bottom: 0.07em;
  }

  .nav-link.mobile .icon {
    font-size: 1.4em;
    margin: 0 0.5em 0 0;
  }

  .nav-link:hover {
    color: var(--highlight-color); 
  }

  .nav-link:hover .icon {
    color: var(--highlight-color); 
    transform: scale(1.2) translateY(-2px);

    font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
  }

  .nav-link.active {
    color: var(--highlight-color); 
  }

  .nav-link.active .icon {
    color: var(--highlight-color); 
    transform: scale(1.2) translateY(-2px);

    font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
  }

  .brand-image {
    min-height: 110px;
  }

  .is-scrolling .nav-link {
    
  }

  .is-scrolling .nav-link .icon {
    /* display: none; */
  }

  .is-scrolling .brand-text {
    
  }

  .is-scrolling .brand-image {
    min-height: 50px;
  }
</style>