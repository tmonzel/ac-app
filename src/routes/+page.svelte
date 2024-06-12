<script lang="ts">
  import 'material-symbols/outlined.css';
  import "../app.css";
	import Header from '$lib/Header.svelte';
	import PageSection from '$lib/PageSection.svelte';
	import PageScroller from '$lib/PageScroller.svelte';
</script>



<PageScroller>
  <Header />
  <section id="start" class="min-h-screen flex items-end bg-zinc-50 animated-bg">
    <div class="p-5 md:p-10 lg:p-20 flex items-end justify-between w-full">
      <div>
        <h1 class="text-5xl md:text-7xl mb-14">Für<br>
          <br>
          <span class="font-semibold">MEHR<br>
          <mark>ERFOLGREICHE</mark><br>
          AUSBILDUNGEN<br>
          IN HAMBURG</span>
        </h1>
        
        <h2 class="text-2xl md:text-3xl">Individuelle Ausbildungsbegleitung<br> 
          für Azubis und Betriebe.</h2>
      </div>

      <div class="hidden lg:block">
        <svg width="115" height="60" viewBox="0 0 115 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999995 1.00001L57.4997 58L114 1.00001" stroke="#4A4A4A" stroke-width="2"/>
        </svg>
      </div> 
    </div>
  </section>

  <PageSection id="programm" class="py-64">
    <div class="container mx-auto px-5">
      <h1 class="text-8xl font-extrabold tracking-tighter mb-12 text-center" style="line-height: 0.85em;">Level<br>Up!</h1>
      <p class="text-center text-3xl mb-10">Individuelle Ausbildungsbegleitung <br>
        für Azubis und Betriebe. </p>
      <h2 class="text-center text-3xl mb-20 -rotate-6"><mark class="p-1">Gemeinsam schaffst du das!</mark></h2>

      <div class="flex flex-col gap-10 xl:flex-row xl:gap-15">
        <div class="basis-full lg:basis-1/2 border-t pt-8 border-zinc-500">
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

        <div class="basis-full lg:basis-1/2 border-t pt-8 border-zinc-500">
          <h2 class="text-2xl mb-8 font-bold">Rekrutierungsunterstützung</h2>
          <ul class="list-outside pl-7">
            <li>Wir unterstützen mit unserer Erfahrung bei der Auswahl potenzieller Azubis</li>
            <li>Wo möglich, vermitteln wir Azubis aus dem JOBLINGE-Programm oder unseren Schulprojekten</li>
          </ul>
        </div>
      </div>
    </div>
  </PageSection>

  <PageSection id="partner" class="py-64">
    <div class="container mx-auto px-5">
      <h1 class="text-8xl font-extrabold tracking-tighter mb-12 text-center" style="line-height: 0.85em;">Unsere<br>Partner</h1>
      <p class="text-center text-3xl mb-12">Wir werden von vielen<br>
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

      <hr class="my-20">

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
      </div>
    </div>
  </PageSection>

  <PageSection id="spenden" class="flex items-center justify-center">
    <div>
      <h1 class="text-5xl font-bold tracking-tight">Unterstützen Sie uns</h1>
    </div>
  </PageSection>

  <PageSection id="team" class="flex items-center justify-center">
    <div>
      <h1 class="text-5xl font-bold tracking-tight">Unser Team</h1>
    </div>
  </PageSection>

  <PageSection id="kontakt" class="flex items-center justify-center">
    <div>
      <h1 class="text-5xl font-bold tracking-tight">Kontakt</h1>
    </div>
  </PageSection>
</PageScroller>

<style>
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