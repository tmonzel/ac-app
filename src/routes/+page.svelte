<script lang="ts">
	import Header from '$lib/Header.svelte';
	import PageSection from '$lib/PageSection.svelte';
	import PageScroller from '$lib/PageScroller.svelte';
</script>

<PageScroller>
  <Header />
  <section id="start" class="min-h-screen flex items-end bg-zinc-50 animated-bg">
    <div class="p-5 md:p-10 lg:p-20 flex items-end justify-between w-full">
      <div>
        <h1 class="text-5xl md:text-5xl mb-14">Für<br>
          <br>
          <span class="font-semibold">MEHR<br>
          <mark>ERFOLGREICHE</mark><br>
          AUSBILDUNGEN<br>
          IN HAMBURG</span>
        </h1>
        
        <h2 class="text-xl md:text-2xl">Individuelle Ausbildungsbegleitung<br> 
          für Azubis und Betriebe.</h2>
      </div>

      <div class="hidden lg:block">
        <svg width="115" height="60" viewBox="0 0 115 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999995 1.00001L57.4997 58L114 1.00001" stroke="#4A4A4A" stroke-width="2"/>
        </svg>
      </div> 
    </div>
  </section>

  <PageSection id="programm" class="py-52">
    <div class="container mx-auto px-5">
      <h1 class="main-headline mb-12 text-center">Level<br>Up!</h1>
      <p class="text-center text-2xl mb-10">Individuelle Ausbildungsbegleitung <br>
        für Azubis und Betriebe. </p>
      <h2 class="text-center text-2xl mb-20 -rotate-6"><mark class="p-1">Gemeinsam schaffst du das!</mark></h2>

      <div class="flex flex-col gap-10 xl:flex-row xl:gap-15">
        <div class="lg:basis-1/2 border-t pt-8 border-zinc-500">
          <h2 class="text-2xl mb-8 font-bold text-balance">Starke Ausbildungsbegleitung</h2>
          <p class="mb-5">Individuelle Unterstützung von Azubis, um Schieflagen schnell begegnen zu können, z.B. </p>

          <ul class="mb-5 list-outside pl-7">
            <li>Hilfe bei Berufsschulthemen</li>
            <li>Unterstützung bei Alltagsproblemen</li>
            <li>Ansprechpartner für Sorgen in der Ausbildung</li>
            <li>Hilfe bei der Kommunikation zwischen Azubi und Betrieb</li>
            <li>Motivation</li>
          </ul>
          <p>Knotenpunkt zwischen Betrieb, Azubi und Berufsschule</p>
        </div>

        <div class="lg:basis-1/2 border-t pt-8 border-zinc-500">
          <h2 class="text-2xl mb-8 font-bold">Rekrutierungsunterstützung</h2>
          <ul class="list-outside pl-7">
            <li>Wir unterstützen mit unserer Erfahrung bei der Auswahl potenzieller Azubis</li>
            <li>Wo möglich, vermitteln wir Azubis aus dem JOBLINGE-Programm oder unseren Schulprojekten</li>
          </ul>
        </div>
      </div>
    </div>
  </PageSection>

  <PageSection id="partner" class="py-52">
    <div class="container mx-auto px-5">
      <h1 class="main-headline mb-12 text-center">Unsere<br>Partner</h1>
      <p class="text-center text-2xl mb-12">Wir werden von vielen<br>
        Förderern und Betrieben unterstützt.</p>
      
      <div class="grid gap-5 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 partner-grid">
        <div class="bg-zinc-100">
          <img src="partner/hws-logo.svg" alt="Hans Weisser Stiftung Logo">
        </div>
        <div class="bg-zinc-100">
          <img src="partner/hst-logo.png" alt="Homann Stiftung Logo">
        </div>
        <div class="bg-zinc-100">
          <img src="partner/budnianer-hilfe-logo.png" alt="Budnianer Hilfe Logo">
        </div>
        <div class="bg-zinc-100">
          <img src="partner/claussen-simon-st.svg" alt="Claussen Simon Stiftung Logo">
        </div>
      </div>

      <!--<hr class="my-20">

      <div class="grid gap-5 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 partner-grid">
        <div class="bg-zinc-100">
          <img src="partner/budni-logo.svg" alt="Budni Logo">
        </div>
        <div class="bg-zinc-100">
          <img src="partner/heinemann-logo.svg" alt="Gebr. Heinemann Logo">
        </div>
        <div class="bg-zinc-100">
          <img src="partner/hoeffner-logo.svg" alt="Möbel Höffner Logo">
        </div>
        <div class="bg-zinc-100">
          <img src="partner/europ-hof-logo.svg" alt="Europäischer Hof Hamburg Logo">
        </div>
        <div class="bg-zinc-100">
          <img src="partner/noerpel-logo.png" alt="Noerpel Logo">
        </div>
        <div class="bg-zinc-100">
          <img src="partner/rl-logo.svg" alt="Rieß & Lauenstein Logo">
        </div>
      </div>-->
    </div>
  </PageSection>

  <PageSection id="spenden" class="flex items-center justify-center">
    <div>
      <h1 class="mb-12 text-center main-headline">Unterstützen<br>Sie uns</h1>
      <p class="text-center text-2xl mb-12">Wir werden von vielen<br>
        Förderern und Betrieben unterstützt.</p>
    </div>
  </PageSection>

  <PageSection id="team" class="flex items-center justify-center py-52">
    <div>
      <h1 class="mb-12 text-center main-headline">Unser<br>Team</h1>
      <p class="text-center text-2xl mb-12">Klein aber fein.</p>

      <div class="flex justify-between flex-col lg:flex-row gap-20">
        <div class="sm:basis-1/2 text-center">
          <div class="flex justify-center mb-10">
            <div class="bg-zinc-200 w-64 h-64 rounded-full"></div>
          </div>
          <span class="font-medium">Melanie Steinhoff</span><br>
          Azubi Companion | Geschäftsführung<br>
          <br>
          m.steinhoff@azubi-companion.de<br>
          Mobil: 0111 22 57 44 91<br>
        </div>
        <div class="sm:basis-1/2 text-center">
          <div class="flex justify-center mb-10">
            <div class="bg-zinc-200 w-64 h-64 rounded-full"></div>
          </div>
          <span class="font-medium">Julia Wöhlke</span><br>
          Azubi Companion | Geschäftsführung<br>
          <br>
          j.woehlke@azubi-companion.de<br>
          Mobil: 0111 22 57 44 91<br>
        </div>
      </div>
    </div>
  </PageSection>

  <PageSection id="kontakt" class="flex items-center justify-center">
    <div>
      <h1 class="mb-12 text-center main-headline">Kontakt</h1>
      <!--<p class="text-center text-2xl mb-12">Hier kommen wir<br>
        zusammen:</p>-->

      <div class="grid gap-10 text-2xl text-center">
        <div class="text-2xl mb-8">
          Azubi Companion gGmbH<br> 
          Teststraße 12<br>
          22453 Hamburg
        </div>
        <div>
          <span class="font-semibold">Tel:</span><br>
          <span>+49 83 11223344</span><br><br>
          <span class="font-semibold">E-Mail:</span><br> 
          <a href="mailto:post@azubi-companion.de">post@azubi-companion.de</a>
        </div>
      </div>
        
    </div>
  </PageSection>
</PageScroller>

<footer class="bg-zinc-100 text-xl text-zinc-600 p-16 sm:px-10">
  <div class="flex justify-center mb-3">
    <img src="favicon.svg" class="w-8 saturate-0 opacity-50" alt="Azubi Companion Logo" />
  </div>
  <div class="flex justify-center gap-5">
    <a href="datenschutz" target="_blank">Datenschutz</a>
    <a href="impressum" target="_blank">Impressum</a>
  </div>
</footer>

<style>
  .main-headline {
    font-size: 4rem;
    letter-spacing: -0.05em;
    font-weight: 800;
    line-height: 0.85em;
  }

  .partner-grid div {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 280px;
  }

  .partner-grid img {
    max-width: 70%;
    max-height: 50%;
  }
</style>