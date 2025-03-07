<script lang="ts">
	import { appState } from './state';
</script>

{#snippet navItem(name: string, label: string, icon?: string)}
	<a
		href="#{name}"
		class="nav-item flex gap-4 items-center"
		class:active={$appState.currentPage === name}
	>
		{#if icon}
			<img class="nav-item-icon" src={icon} alt="" />
		{/if}
		<span class="nav-item-label">{label}</span>
	</a>
{/snippet}

<nav class="hidden xl:flex flex-col gap-6">
	{@render navItem('programm', 'Level Up!', '/icons/rocket.svg')}
	{@render navItem('partner', 'Partner', '/icons/diamond.svg')}
	{@render navItem('spenden', 'Unterstützen', '/icons/heart.svg')}
	{@render navItem('team', 'Team', '/icons/user.svg')}
	{@render navItem('kontakt', 'Kontakt', '/icons/mail.svg')}
</nav>

<style type="scss">
	.nav-item {
		padding: 0.2em 1.5em;
		font-size: 1.8rem;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		background-size: 0%;
	}

	.nav-item-icon {
		height: 1.2em;
		transition: all 0.1s ease-out;
	}

	.nav-item-label {
		font-family: 'Comic Neue', sans-serif;
		font-weight: 400;
		transition: all 0.1s ease-out;
	}

	.nav-item.active,
	.nav-item:hover {
		background: url(/marker/pink-2.svg);
		background-repeat: no-repeat;
		background-size: 100%;

		.nav-item-label {
		}

		.nav-item-icon {
			transform: scale(1.1);
		}
	}

	@keyframes brush-in {
		from {
			background-size: 0%;
		}
		to {
			background-size: 100%;
		}
	}

	@keyframes brush-out {
		from {
			background-size: 100%;
		}
		to {
			background-size: 0%;
		}
	}
</style>
