<script lang="ts">
	import PageSection from '$lib/PageSection.svelte';
</script>

<PageSection id="team" class="flex items-center justify-center py-32">
	<div class="container max-w-5xl">
		<header class="text-center">
			<h1 class="text-5xl sm:text-6xl xl:text-8xl font-extrabold tracking-tighter mb-5 xl:mb-13">
				Team
			</h1>
		</header>

		<div class="flex justify-center flex-col lg:flex-row flex-wrap text-center gap-y-20 text-xl">
			<article itemscope itemtype="https://schema.org/Person" class="basis-1/2">
				<div class="flex justify-center mb-7">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-center"
						style="background-image: url(images/team/ac-steinhoff.webp)"
					></div>
				</div>
				<p>
					<span itemprop="name" class="font-semibold">Dr. Melanie Steinhoff</span><br />
					<span class="italic">Companion & Geschäftsführerin</span><br />
					Mobil: +49 (0)178-5333416<br />
				</p>
			</article>
			<article itemscope itemtype="https://schema.org/Person" class="basis-1/2">
				<div class="flex justify-center mb-7">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-left"
						style="background-image: url(images/team/ac-woehlke.webp)"
					></div>
				</div>
				<p>
					<span itemprop="name" class="font-semibold">Julia Wöhlke</span><br />
					<span class="italic">Geschäftsführerin</span><br />
					Mobil: +49 (0)176-61900760
				</p>
			</article>
			<article itemscope itemtype="https://schema.org/Person" class="basis-1/2">
				<div class="flex justify-center mb-7">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-left flex justify-center items-center"
						style="background-image: url(images/team/ac-reeg.jpg)"
					></div>
				</div>
				<p>
					<span itemprop="name" class="font-semibold">Simon Reeg</span><br />
					<span class="italic">Companion & Koordinator für Ausbildungsnetzwerke</span><br />
					Mobil: 49 (0)176-66667414
				</p>
			</article>
			<article itemscope itemtype="https://schema.org/Person" class="basis-1/2">
				<div class="flex justify-center mb-7">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-left"
						style="background-image: url(images/team/ac-hopp.jpg)"
					></div>
				</div>
				<p>
					<span itemprop="name" class="font-semibold">Chris Hopp</span><br />
					<span class="italic">Junior Companion & Projektassistentin</span><br />
					Mobil: 49 (0)176-80410113
				</p>
			</article>
			<article itemscope itemtype="https://schema.org/Person" class="basis-1/2">
				<div class="flex justify-center mb-7">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-left flex justify-center items-center"
					>
						<img
							src="images/ac-girl.svg"
							alt="Azubi Companion Logo"
							class="absolute h-28 grayscale opacity-10 me-4"
						/>
					</div>
				</div>
				<p>
					<span itemprop="name" class="font-semibold">Thomas Monzel</span><br />
					<span class="italic">Kommunikationsdesign & IT Support (Ehrenamt)</span>
				</p>
			</article>
			<article itemscope itemtype="https://schema.org/Person" class="basis-1/2">
				<div class="flex justify-center mb-7">
					<div
						class="bg-zinc-200 w-64 h-64 rounded-full bg-no-repeat bg-cover bg-left flex justify-center items-center"
					>
						<img
							src="images/ac-girl.svg"
							alt="Azubi Companion Logo"
							class="absolute h-28 grayscale opacity-10 me-4"
						/>
					</div>
				</div>
				<p>
					<span class="font-semibold">Hier könnte dein Name stehen.</span><br />
					<span class="italic">Voll-/Teilzeit Companion (m/w/d)</span><br /><a
						href="/jobs"
						class="underline"
					>
						Hier geht's zur Stellenausschreibung</a
					>
				</p>
			</article>
		</div>
	</div>
</PageSection>
