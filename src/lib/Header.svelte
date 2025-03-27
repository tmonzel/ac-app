<script lang="ts">
	import { appState } from './state.svelte';

	let mobileMenu: HTMLDialogElement;
	let menuOpen = $state(false);

	function openMenu(): void {
		mobileMenu.showModal();
		menuOpen = true;
	}

	function closeMenu(): void {
		mobileMenu.close();
		menuOpen = false;
	}

	let scrollMode = $derived(appState.scrollTop > 150);
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

<header class="fixed top-0 w-screen bg-stone-50/85 backdrop-blur-lg z-50">
	<div
		class="flex justify-between items-end site-header py-8 px-5 mx-auto max-w-7xl"
		style="--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.05)"
		class:is-scrolling={scrollMode}
	>
		<div>
			<a href="#start">
				<img src="images/ac-logo.svg" alt="Azubi Companion Logo" class="h-16 lg:h-22" />
			</a>
		</div>
		<div class="xl:me-5">
			<button class="flex xl:hidden mobile-menu-toggle" onclick={() => openMenu()}>
				<span class="material-symbols-outlined">menu</span>
			</button>

			{#snippet navLink(name: string, label: string, symbol: string, color: string)}
				<a
					href="#{name}"
					class="nav-link"
					class:active={appState.currentPage === name}
					style="--highlight-color: {color}"
				>
					<span class="material-symbols-outlined text-4xl mb-3"> {symbol} </span>
					<span class="text-2xl">{label}</span>
				</a>
			{/snippet}

			<nav class="hidden xl:flex gap-15">
				{@render navLink('programm', 'LevelUp!', 'rocket_launch', '#7433FF')}
				{@render navLink('partner', 'Partner', 'handshake', '#0d65f2')}
				{@render navLink('spenden', 'Unterstützen', 'favorite', '#FF007A')}
				{@render navLink('team', 'Team', 'group', '#FFD600')}
				{@render navLink('kontakt', 'Kontakt', 'mail', '#333')}
			</nav>
		</div>
	</div>
</header>

<dialog bind:this={mobileMenu} class="bg-neutral-50">
	<div class="flex flex-col h-screen py-4 px-5">
		<div class="flex justify-between mb-5 pb-5 border-b border-neutral-200">
			<div>
				<a href="#start" class="flex items-end text-lg" onclick={() => closeMenu()}>
					<img src="images/ac-logo.svg" alt="Azubi Companion Logo" class="h-16" />
				</a>
			</div>
			<button class="mobile-menu-toggle" onclick={() => closeMenu()}>
				<span class="material-symbols-outlined"> close </span>
			</button>
		</div>

		<nav class="flex flex-col flex-grow gap-y-1 py-2">
			<a
				href="#programm"
				class="nav-link mobile rounded-md"
				class:active={appState.currentPage === 'programm'}
				style="--highlight-color: #7433FF"
				onclick={() => closeMenu()}
			>
				<span class="material-symbols-outlined icon"> rocket_launch </span>
				LevelUp!
			</a>
			<a
				href="#partner"
				class="nav-link mobile rounded-md"
				class:active={appState.currentPage === 'partner'}
				style="--highlight-color: #0d65f2"
				onclick={() => closeMenu()}
			>
				<span class="material-symbols-outlined icon"> handshake </span>
				Partner
			</a>
			<a
				href="#spenden"
				class="nav-link mobile rounded-md"
				class:active={appState.currentPage === 'spenden'}
				style="--highlight-color: #FF007A"
				onclick={() => closeMenu()}
			>
				<span class="material-symbols-outlined icon"> favorite </span>
				Unterstützen
			</a>
			<a
				href="#team"
				class="nav-link mobile rounded-md"
				class:active={appState.currentPage === 'team'}
				style="--highlight-color: #FFD600"
				onclick={() => closeMenu()}
			>
				<span class="material-symbols-outlined icon"> group </span>
				Team
			</a>
			<a
				href="#kontakt"
				class="nav-link mobile rounded-md"
				class:active={appState.currentPage === 'kontakt'}
				style="--highlight-color: #333"
				onclick={() => closeMenu()}
			>
				<span class="material-symbols-outlined icon"> mail </span>
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
		font-size: 2.7em;
		user-select: none;

		font-variation-settings:
			'FILL' 1,
			'wght' 200,
			'GRAD' 0,
			'opsz' 24;
	}

	.nav-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: transform 0.1s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.nav-link.mobile {
		flex-direction: row;
		align-items: center;
		font-size: 1.4rem;
		padding: 1em;
		line-height: 1;
	}

	.nav-link .icon {
		transition:
			transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
			color 0.2s cubic-bezier(0.22, 1, 0.36, 1);
		font-size: 1.2em;
		margin-bottom: 0.07em;
	}

	.nav-link.mobile .icon {
		font-size: 1.3em;
		margin: 0 0.5em 0 0;
	}

	.nav-link:hover {
		color: var(--highlight-color);
		opacity: 1;
	}

	.nav-link:hover .icon {
		color: var(--highlight-color);
		transform: scale(1.2) translateY(-2px);

		font-variation-settings:
			'FILL' 1,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}

	.nav-link.active {
		color: var(--highlight-color);
		opacity: 1;
	}

	.nav-link.active.mobile {
		background-color: #eeeeee;
	}

	.nav-link.active .icon {
		color: var(--highlight-color);
		transform: scale(1.2) translateY(-2px);

		font-variation-settings:
			'FILL' 1,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}
</style>
