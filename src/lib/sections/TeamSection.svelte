<script lang="ts">
	import { logoImage } from '$assets/images';
	import PageSection from '$lib/PageSection.svelte';
	import melanieImage from '$assets/images/team/ac-steinhoff.webp';
	import juliaImage from '$assets/images/team/ac-woehlke.webp';
	import stielImage from '$assets/images/team/ac-stiel.webp';
</script>

<PageSection id="team" class="flex items-center justify-center py-32">
	<div class="container">
		<header class="text-center">
			<h1 class="mb-12 main-headline hl-font">Team</h1>
		</header>

		<div class="flex justify-center flex-col lg:flex-row gap-20 flex-wrap text-lg">
			<div itemscope itemtype="https://schema.org/Person" class="text-center">
				<div class="flex justify-center mb-10">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-center"
						style="background-image: url({melanieImage})"
					></div>
				</div>
				<span itemprop="name" class="font-semibold">Dr. Melanie Steinhoff</span><br />
				Companion und Geschäftsführerin<br />
				Mobil: +49 (0)178-5333416<br />
			</div>
			<div itemscope itemtype="https://schema.org/Person" class="text-center">
				<div class="flex justify-center mb-10">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-left"
						style="background-image: url({juliaImage})"
					></div>
				</div>
				<span itemprop="name" class="font-semibold">Julia Wöhlke</span><br />
				Geschäftsführerin
			</div>
			<div itemscope itemtype="https://schema.org/Person" class="basis-1/3">
				<div class="flex justify-center mb-10">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-left"
						style="background-image: url({stielImage}); background-position: 20%"
					></div>
				</div>
				<p class="text-center">
					<span itemprop="name" class="font-semibold">Susanne Stiel</span><br />Companion<br />
					Mobil: +49 (0)176-61986823
				</p>
			</div>
			<div class="basis-1/3">
				<div class="flex justify-center mb-10">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-left flex justify-center items-center"
					>
						<img
							src={logoImage}
							alt="Azubi Companion Logo"
							class="absolute h-28 grayscale opacity-10 me-4"
						/>
					</div>
				</div>
				<p class="text-center">
					<span class="font-semibold">Hier könnte dein Name stehen.</span><br />
					Voll-/Teilzeit Companion (m/w/d)<br />Bei Interesse, melde dich gerne per Mail.
				</p>
			</div>
		</div>
	</div>
</PageSection>
