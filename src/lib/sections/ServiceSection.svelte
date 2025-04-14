<script lang="ts">
	import ContactBlock from '$lib/ContactBlock.svelte';
	import PageSection from '$lib/PageSection.svelte';
</script>

<PageSection id="programm" class="py-32">
	<div class="container">
		<header class="text-center">
			<span class="material-symbols-outlined text-6xl xl:text-9xl">rocket_launch</span>
			<h1 class="text-6xl xl:text-8xl font-extrabold tracking-tighter mb-5 xl:mb-13">
				Level<br />Up!
			</h1>
			<p class="lead text-xl xl:text-3xl mb-5 xl:mb-13">
				Individuelle Ausbildungsbegleitung <br />
				für Azubis und Ausbildungsbetriebe.
			</p>
		</header>

		<div class="flex flex-col xl:flex-row xl:gap-5 mb-14 mx-5">
			<div class="lg:basis-1/4 pt-8 border-neutral-300 border-t">
				<div class="xl:sticky top-42 z-0">
					<p class="mt-0">
						Für<br /><span class="font-bold text-3xl xl:text-4xl underline">Azubis</span>
					</p>
				</div>
			</div>
			<div class="lg:basis-3/4">
				<div class="prose xl:prose-xl xl:pt-14 border-neutral-300 xl:border-t !max-w-none">
					<h2>Wir starten mit dir in deine Ausbildung</h2>
					<p>
						Wir geben dir Rückenwind und helfen dir gerne. Von Anfang an. Wir stellen einen Azubi
						Companion an deine Seite, der für DICH da ist und DICH vor und während deiner Ausbildung
						unterstützt:
					</p>
					<ul>
						<li>
							Wir helfen dir beim Onboarding: Noch kein Konto, die Sozialversicherungsnummer verlegt
							oder keine Steuer-ID? Gemeinsam bekommen wir das hin und den Personalfragebogen
							ausgefüllt.
						</li>
						<li>
							Ob schwieriger Schulstoff oder Hilfe bei einer Präsentation. Wir arbeiten mit dir und
							lernen für Klausuren.
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

					<h2>Gemeinsam schaffst du das</h2>
					<ul>
						<li>Treffe andere Azubis bei Pizzaabenden, Ausflügen oder beim gemeinsamen Kochen.</li>
						<li>Wir haben Spaß und feiern gemeinsam.</li>
						<li>
							Du möchtest mehr? Lerne mit uns Excel, Finanzen, Englisch, PowerPoint und vieles mehr.
						</li>
					</ul>
				</div>
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
						Lehrjahre. Unser Schlüssel zum Erfolg: Eine Bezugsperson für den Azubi, die unterstützt
						und motiviert, aber auch Ansprechpartner für Sie ist. Die Unterstützung der Azubis steht
						dabei im Zentrum. Einmal wöchentlich treffen wir uns, um gemeinsam an Herausforderungen
						zu arbeiten, schulische Nachhilfe zu leisten oder einfach nur ein offenes Ohr für ihre
						Anliegen zu haben.
					</p>
				</div>

				<div class="mb-7">
					<h4 class="font-bold mb-2">Unser Ziel</h4>
					<p>
						Unser Ziel ist es, Sie als Ausbildungsbetrieb durch unsere Arbeit zu unterstützen, damit
						die Ausbildung für alle Beteiligten zum Erfolg wird. Dabei ist es uns wichtig, dass die
						Azubis im normalen Betrieb und Regelwerk der Unternehmen arbeiten und wir gemeinsam
						Lösungen suchen, wenn sie damit hadern oder zu scheitern drohen.
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
