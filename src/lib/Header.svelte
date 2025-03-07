<script lang="ts">
	import { appState } from './state';
	import { logoImage } from '$assets/images';

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

	let scrollMode = $derived($appState.scrollTop > 150);
</script>

{#snippet navItem(name: string, label: string, icon: string)}
	<a href="#{name}" class="flex gap-3 text-2xl" class:active={$appState.currentPage === name}>
		<span class="material-symbols-outlined icon"> {icon} </span>
		{label}
	</a>
{/snippet}

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
		class="fixed top-0 w-screen flex justify-between items-center site-header py-5 px-7 z-50"
		class:is-scrolling={scrollMode}
	>
		<div>
			<a href="#start" class="flex items-end">
				<img src={logoImage} alt="Azubi Companion Logo" class="h-24" />
				<span class="hl-font leading-6 ms-4 brand-text text-2xl">AZUBI<br />COMPANION</span>
			</a>
		</div>
		<div class="xl:me-5">
			<button class="flex xl:hidden mobile-menu-toggle" onclick={() => openMenu()}>
				<span class="material-symbols-outlined">menu</span>
			</button>

			<nav class="hidden xl:flex flex-col gap-8">
				{@render navItem('programm', 'Level Up!', 'rocket_launch')}
				{@render navItem('partner', 'Partner', 'handshake')}
				{@render navItem('spenden', 'Unterstützen', 'favorite')}
				{@render navItem('team', 'Team', 'group')}
				{@render navItem('kontakt', 'Kontakt', 'mail')}
			</nav>
		</div>
	</div>
</header>

<dialog bind:this={mobileMenu} class="bg-neutral-50">
	<div class="flex flex-col h-screen py-4 px-5">
		<div class="flex justify-between mb-5 pb-5 border-b border-neutral-200">
			<div>
				<a href="#start" class="flex items-end text-lg" onclick={() => closeMenu()}>
					<img src={logoImage} alt="Azubi Companion Logo" class="h-16" />
					<span class="hl-font leading-5 ms-4 brand-text">AZUBI<br />COMPANION</span>
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
				class:active={$appState.currentPage === 'programm'}
				style="--highlight-color: #7433FF"
				onclick={() => closeMenu()}
			>
				<span class="material-symbols-outlined icon"> rocket_launch </span>
				LevelUp!
			</a>
			<a
				href="#partner"
				class="nav-link mobile rounded-md"
				class:active={$appState.currentPage === 'partner'}
				style="--highlight-color: #0d65f2"
				onclick={() => closeMenu()}
			>
				<span class="material-symbols-outlined icon"> handshake </span>
				Partner
			</a>
			<a
				href="#spenden"
				class="nav-link mobile rounded-md"
				class:active={$appState.currentPage === 'spenden'}
				style="--highlight-color: #FF007A"
				onclick={() => closeMenu()}
			>
				<span class="material-symbols-outlined icon"> favorite </span>
				Unterstützen
			</a>
			<a
				href="#team"
				class="nav-link mobile rounded-md"
				class:active={$appState.currentPage === 'team'}
				style="--highlight-color: #FFD600"
				onclick={() => closeMenu()}
			>
				<span class="material-symbols-outlined icon"> group </span>
				Team
			</a>
			<a
				href="#kontakt"
				class="nav-link mobile rounded-md"
				class:active={$appState.currentPage === 'kontakt'}
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
	.mobile-menu-toggle span {
		font-size: 2.7em;
		user-select: none;

		font-variation-settings:
			'FILL' 1,
			'wght' 200,
			'GRAD' 0,
			'opsz' 24;
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
