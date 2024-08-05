<script lang="ts">
	import Header from '$lib/Header.svelte';
	import PageSection from '$lib/PageSection.svelte';
	import PageScroller from '$lib/PageScroller.svelte';
	import ContactBlock from '$lib/ContactBlock.svelte';
	import Footer from '$lib/Footer.svelte';
	import PartnerSection from '$lib/sections/PartnerSection.svelte';
	import TeamSection from '$lib/sections/TeamSection.svelte';

	import { logoImage } from '$assets/images';
</script>

<svelte:head>
	<title>Azubi Companion | Individuelle Ausbildungsbegleitung</title>
	<meta
		name="description"
		content="Individuelle Ausbildungsbegleitung für Azubis und Ausbildungsbetriebe. Gemeinsam schaffst du das!"
	/>

	<meta property="og:title" content="Azubi Companion | Individuelle Ausbildungsbegleitung" />
	<meta property="og:url" content="https://azubi-companion.de/" />
	<meta
		property="og:description"
		content="Individuelle Ausbildungsbegleitung für Azubis und Ausbildungsbetriebe."
	/>
	<meta property="og:image" content={logoImage} />
	<meta property="og:type" content="website" />

	<link rel="canonical" href="https://azubi-companion.de" />
</svelte:head>

<PageScroller>
	<Header />
	<section id="start" class="min-h-screen flex items-end bg-teal-200">
		<div class="p-5 xl:p-10 flex items-end justify-between w-full">
			<div>
				<div class="text-4xl xl:text-5xl mb-5 hl-font">
					Für<br />
					<br />
					<div class="font-semibold">
						MEHR<br />
						<span style="background-color: var(--mark-color)">ERFOLGREICHE</span>
						<br />
						AUSBILDUNGEN<br />
						IN HAMBURG
					</div>
				</div>

				<h1 class="text-lg leading-6">
					Individuelle Ausbildungsbegleitung<br />
					für Azubis und Ausbildungsbetriebe.
				</h1>
			</div>

			<div class="hidden lg:block">
				<svg
					width="115"
					height="60"
					viewBox="0 0 115 60"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0.999995 1.00001L57.4997 58L114 1.00001" stroke="#4A4A4A" stroke-width="2" />
				</svg>
			</div>
		</div>
	</section>

	<PageSection id="programm" class="py-32">
		<div class="container mx-auto px-5">
			<header class="text-center">
				<span class="material-symbols-outlined text-6xl">rocket_launch</span>
				<h1 class="main-headline mb-12 hl-font">
					Level<br />Up!
				</h1>
				<h2 class="text-xl mb-16 lead-font">
					Individuelle Ausbildungsbegleitung <br />
					für Azubis und Ausbildungsbetriebe.
				</h2>
			</header>

			<div class="flex flex-col xl:flex-row gap-5 mb-14">
				<div class="lg:basis-1/4 pt-8 border-neutral-300 border-t leading-5">
					<div class="sticky top-32">
						<span class="text-neutral-500">Für</span>
						<h3 class="text-3xl font-bold text-rose-500">Azubis</h3>
					</div>
				</div>
				<div class="lg:basis-3/4 xl:pt-8 border-neutral-300 xl:border-t">
					<div class="mb-7">
						<h4 class="font-bold mb-2">Wir starten mit dir in deine Ausbildung</h4>

						<p class="mb-4">
							Wir geben dir Rückenwind und helfen dir gerne. Von Anfang an.<br />
							Wir stellen einen Azubi Companion an deine Seite, der für DICH da ist und DICH vor und
							während deiner Ausbildung unterstützt:
						</p>
						<ul class="pl-4">
							<li>
								Wir helfen dir beim Onboarding: Noch kein Konto, die Sozialversicherungsnummer
								verlegt oder keine Steuer-ID? Gemeinsam bekommen wir das hin und den
								Personalfragebogen ausgefüllt.
							</li>
							<li>
								Ob schwieriger Schulstoff oder Hilfe bei einer Präsentation. Wir arbeiten mit dir
								und lernen für Klausuren.
							</li>
							<li>Wir helfen dir das Berichtsheft zu schreiben.</li>
							<li>Wir unterstützen dich bei Behördenangelegenheiten oder bei der Wohnungssuche.</li>
							<li>
								Zusätzliches Geld in der Ausbildung? Wir helfen dir bei der Beantragung von
								Ausbildungsförderung.
							</li>
							<li>
								Im Betrieb läuft`s grad nicht rund? Wir lösen mit dir Probleme und helfen bei
								Gesprächen.
							</li>
						</ul>
					</div>

					<h4 class="font-bold mb-2">Gemeinsam schaffst du das</h4>
					<ul class="list-outside pl-7 mb-5">
						<li>Treffe andere Azubis bei Pizzaabenden, Ausflügen oder beim gemeinsamen Kochen.</li>
						<li>Wir haben Spaß und feiern gemeinsam.</li>
						<li>
							Du möchtest mehr? Lerne mit uns Excel, Finanzen, Englisch, PowerPoint und vieles mehr.
						</li>
					</ul>

					<ContactBlock />
				</div>
			</div>

			<div class="flex flex-col xl:flex-row gap-5">
				<div class="lg:basis-1/4 pt-8 border-neutral-300 border-t leading-5">
					<div class="sticky top-32">
						<span class="text-neutral-500">Für</span>
						<h3 class="text-3xl font-bold text-teal-500">Betriebe</h3>
					</div>
				</div>
				<div class="lg:basis-3/4 xl:pt-8 border-neutral-300 xl:border-t">
					<div class="mb-7">
						<h4 class="font-bold mb-2">Ausbildungsabbrüche verhindern</h4>
						<p>
							Die Gründe für Ausbildungsabbrüche sind vielfältig und oftmals könnten sie verhindert
							werden, wenn rechtzeitig gegengesteuert wird. Genau hier kommt Azubi Companion ins
							Spiel. Wir sehen uns als „neutralen Dritten“ im Verhältnis zwischen Azubi und
							Ausbildungsbetrieb.
						</p>
					</div>

					<div class="mb-7">
						<h4 class="font-bold mb-2">Was wir machen</h4>
						<p>
							Wir bieten Ihnen und Ihren Azubis eine individuelle Ausbildungsbegleitung über alle
							Lehrjahre. Unser Schlüssel zum Erfolg: Eine Bezugsperson für den Azubi, die
							unterstützt und motiviert, aber auch Ansprechpartner für Sie ist. Die Unterstützung
							der Azubis steht dabei im Zentrum. Einmal wöchentlich treffen wir uns, um gemeinsam an
							Herausforderungen zu arbeiten, schulische Nachhilfe zu leisten oder einfach nur ein
							offenes Ohr für ihre Anliegen zu haben.
						</p>
					</div>

					<div class="mb-7">
						<h4 class="font-bold mb-2">Unser Ziel</h4>
						<p>
							Unser Ziel ist es, Sie als Ausbildungsbetrieb durch unsere Arbeit zu unterstützen,
							damit die Ausbildung für alle Beteiligten zum Erfolg wird. Dabei ist es uns wichtig,
							dass die Azubis im normalen Betrieb und Regelwerk der Unternehmen arbeiten und wir
							gemeinsam Lösungen suchen, wenn sie damit hadern oder zu scheitern drohen.
						</p>
					</div>

					<div class="mb-7">
						<h4 class="font-bold mb-2">Sie möchten gerne mitmachen?</h4>
						<p class="mb-4">Melden Sie sich einfach und wir lernen Sie und Ihren Azubi kennen.</p>

						<div class="bg-yellow-100 p-4 mb-4">
							<div class="grid grid-cols-2">
								<p>
									<span class="font-medium">E-Mail:</span><br /><a
										href="mailto:post@azubi-companion.de"
										class=" text-indigo-500 underline">post@azubi-companion.de</a
									>
								</p>
								<p>
									<span class="font-medium">Mobil:</span><br /><a
										href="tel:+491785333416"
										class=" text-indigo-500 underline">+49 (0)178-5333416</a
									>
								</p>
							</div>
						</div>

						<p>
							Wir helfen auch bei der Suche nach Azubis. Wir arbeiten mit Hamburger Initiativen
							zusammen, die in der Ausbildungsvorbereitung tätig sind oder Schüler*innen bei der
							Erreichung eines Schulabschlusses unterstützen. Gerne stellen wir Kontakt zu
							Partnerorganisationen her und können dann die jungen Menschen nahtlos weiter in die
							Ausbildung begleiten.
						</p>
					</div>
				</div>
			</div>
		</div>
	</PageSection>

	<PartnerSection />

	<PageSection id="spenden" class="flex items-center justify-center py-32">
		<div class="container mx-2">
			<header class="text-center">
				<h1 class="mb-12 main-headline hl-font">Unterstützen</h1>
				<h2 class="text-xl mb-12 lead-font mx-5">
					Gemeinsam packen wir das:<br />Für mehr gelingende Ausbildungen und Fachkräftesicherung
				</h2>
			</header>
			<hr class="my-10" />
			<div class="flex flex-col px-5 xl:px-0 xl:flex-row gap-5">
				<p class="xl:basis-1/2">
					Du möchtest unsere Arbeit unterstützen und dabei helfen, dass mehr junge Menschen
					erfolgreich ihre Ausbildung meistern? Wir sind eine gemeinnützige Organisation und unsere
					Arbeit ist nur durch Spenden möglich. Wir freuen uns über jede Unterstützung.
				</p>
				<div class="xl:basis-1/2">
					<div class="bg-yellow-100 p-2 sm:p-4">
						<p class="text-center">
							IBAN:<br /><span class="font-semibold">DE42 2005 0550 1505 2949 40</span><br /><br />
							BIC: HASPDEHHXXX<br />
							HASPA Hamburg<br /><br />
							Kontoinhaber:<br />Azubi Companion gGmbH
						</p>
					</div>
				</div>
			</div>
		</div>
	</PageSection>

	<TeamSection />

	<PageSection id="kontakt" class="flex items-center justify-center py-32">
		<div>
			<header class="text-center">
				<h1 class="mb-12 main-headline hl-font">Kontakt</h1>
				<h2 class="text-xl mb-12 lead-font mx-5">
					Azubi Companion gGmbH<br />
					Budnikowsky-Twiete 7<br />
					22041 Hamburg
				</h2>
			</header>

			<div class="grid gap-10 text-xl text-center lead-font">
				<dl>
					<dt class="font-semibold">Tel:</dt>
					<dd class="mb-5">+49 (0)178-5333416</dd>
					<dt class="font-semibold">E-Mail:</dt>
					<dd><a href="mailto:post@azubi-companion.de">post@azubi-companion.de</a></dd>
				</dl>
			</div>
		</div>
	</PageSection>
</PageScroller>

<Footer />
