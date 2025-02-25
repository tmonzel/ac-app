<script lang="ts">
	import { logoImage } from '$assets/images';
	import PageSection from '$lib/PageSection.svelte';
	import melanieImage from '$assets/images/team/ac-steinhoff.webp';
	import juliaImage from '$assets/images/team/ac-woehlke.webp';
	import reegImage from '$assets/images/team/ac-reeg.jpg';
	import hoppImage from '$assets/images/team/ac-hopp.jpg';
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
				<span class="italic">Companion & Geschäftsführerin</span><br />
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

				<span class="italic">Geschäftsführerin</span><br />
				Mobil: +49 (0)176-61900760
			</div>
			<div itemscope itemtype="https://schema.org/Person" class="basis-1/3">
				<div class="flex justify-center mb-10">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-left flex justify-center items-center"
						style="background-image: url({reegImage})"
					></div>
				</div>
				<p class="text-center">
					<span class="font-semibold">Simon Reeg</span><br />
					<span class="italic">Companion & Koordinator für Ausbildungsnetzwerke</span><br />
					Mobil: 49 (0)176-66667414
				</p>
			</div>
			<div itemscope itemtype="https://schema.org/Person" class="basis-1/3">
				<div class="flex justify-center mb-10">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-left"
						style="background-image: url({hoppImage})"
					></div>
				</div>
				<p class="text-center">
					<span class="font-semibold">Chris Hopp</span><br />
					<span class="italic">Junior Companion & Projektassistentin</span><br />
					Mobil: 49 (0)176-80410113
				</p>
			</div>
			<div itemscope itemtype="https://schema.org/Person" class="basis-1/3">
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
					<span class="font-semibold">Thomas Monzel</span><br />
					<span class="italic">Kommunikationsdesign & IT Support (Ehrenamt)</span>
				</p>
			</div>
			<div itemscope itemtype="https://schema.org/Person" class="basis-1/3">
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
					<span class="italic">Voll-/Teilzeit Companion (m/w/d)</span><br /><a
						href="/jobs"
						class="underline"
					>
						Hier geht's zur Stellenausschreibung</a
					>
				</p>
			</div>
		</div>
	</div>
</PageSection>
