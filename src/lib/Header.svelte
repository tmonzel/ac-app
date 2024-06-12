<script lang="ts">
	import { appState } from './state';

  $: scrollMode = $appState.scrollTop > 150;
</script>

<header>
  <div 
    class="fixed top-0 w-full bg-white flex justify-between items-center shadow site-header py-5 lg:py-8 px-8 xl:px-16 z-50" 
    style="--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.05)" 
    class:is-scrolling={scrollMode}>
    <div>
      <a href="#start" class="flex items-center">
        <img src="ac-sa-logo.svg" alt="Azubi Companion Logo" class="w-18">
        <span class="hl-font text-2xl leading-6 ms-5 brand-text">AZUBI<br>COMPANION</span>
      </a>
    </div>
    <div>
      <button class="block xl:hidden mobile-menu-toggle">
        <span class="material-symbols-outlined">
          menu
        </span>
      </button>

      <nav class="hidden xl:flex gap-14">
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

<style>
  .site-header {
    transition: all 0.1s ease-out;
    /* padding: 2.5em 4em; */
  }

  .site-header.is-scrolling {
    /* padding-top: 1.5em;
    padding-bottom: 1.5em; */
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
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    transition: transform 0.1s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nav-link .icon {
    transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s cubic-bezier(0.22, 1, 0.36, 1);
    font-size: 1.2em;
    margin-bottom: 0.07em;
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

  .nav-link:hover {
    
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
    font-size: 1.5em;
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