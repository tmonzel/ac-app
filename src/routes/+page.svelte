<script lang="ts">
  import 'material-symbols/outlined.css';
  import "../app.css";
	import { onMount } from 'svelte';

  let sections: NodeListOf<HTMLElement>;
  let focusedSection: HTMLElement;
  let mainNav: HTMLElement;

  function onScroll() {
    const scrollTop = window.scrollY;

    if(sections) {
      for(const s of sections) {
        if(s === focusedSection) continue;

        const offsetTop = s.offsetTop - window.innerHeight / 2;

        if(offsetTop < scrollTop && (offsetTop + s.offsetHeight) > scrollTop) {
          focusedSection = s;
        }
      }
    }
  }

  $: focusedId = focusedSection?.id;

  onMount(() => {
    sections = document.querySelectorAll('.page-section');

    onScroll();
  });
</script>

<svelte:window on:scroll={onScroll} />

<div class="flex">
  <div class="p-12">
    <div class="sticky top-12">
      <div class="text-5xl mb-4">
        <img src="/logo.svg" alt="Level Up Logo">
      </div>
  
      <nav bind:this={mainNav} class="flex flex-col gap-3 text-2xl">
        <a href="#start" class="nav-link" class:active={!focusedId || focusedId === 'start'} style="--highlight-color: #18C65D">Start</a>
        <a href="#programm" class="nav-link" class:active={focusedId === 'programm'} style="--highlight-color: #7433FF">LevelUp!</a>
        <a href="#team" class="nav-link" class:active={focusedId === 'team'} style="--highlight-color: #FFD600">Team</a>
        <a href="#partner" class="nav-link" class:active={focusedId === 'partner'} style="--highlight-color: #0d65f2">Partner</a>
        <a href="#spenden" class="nav-link" class:active={focusedId === 'spenden'} style="--highlight-color: #ff8c00">Unterstützen</a>
        <a href="#kontakt" class="nav-link" class:active={focusedId === 'kontakt'} style="--highlight-color: #333">Kontakt</a>
      </nav>
    </div>
    <!--  Find die Headlinermechanik nicht gänzlich bad und es verlangt einem ab das Spiel noch mal anders zu denken. Macht das Spiel im Ganzen auch anspruchsvoller .. musst eben noch mehr scouten. Ggf. stört mich einfach nur das man noch hecktischer spielen muss ;-)  -->
  </div>

  <div class="flex-1 flex flex-col items-center justify-center text-zinc-800 bg-stone-50">
    <section id="start" class="page-section h-screen w-full flex items-end justify-end p-16" style="background-image: url(/landing.jpg);">
      <h1 class="text-9xl  text-white p-16 leading-tight" style="font-family: 'Sedgwick Ave'">Level Up<br>Your Life!</h1>
    </section>

    <section id="programm" class="page-section">
      <div class="p-16 w-full">
        <h1 class="text-6xl font-bold tracking-tight mb-5">Unser Programm</h1>
        <p>Neben wöchentlichem Einzelaustausch, findet jeden Monat ein gemeinsamer Programmpunkt statt (beispielhaft; kann noch variieren)</p>
        <div class="py-12 bg-stone-100 flex justify-center">
          <ul class="list-decimal text-xl leading-10">
            <li>Austausch: Erster Monat in der Ausbildung</li>
            <li>Abendessen mit Impuls | Sport im Alltag</li>
            <li>Abendessen mit Impuls | Ernährung</li>
            <li>Abendessen mit Impuls | Sozialversicherung </li>
            <li>Azubievent Wintermarkt: Ende Probezeit </li>
            <li>Abendessen mit Impuls | Mit Geld umgehen</li>
            <li>Abendessen mit Impuls | Verträge lesen</li>
            <li>Azubi Event: Kunstprojekt</li>
            <li>Abendessen mit Impuls | Umgang mit Fake News</li>
            <li>Azubi Event: Wir programmieren eine App</li>
            <li>Abendessen mit Impuls | Umgang mit Stress und Angst</li>
            <li>Azubievent: Sommerfest</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="team" class="page-section">
      <div class="p-16">
        <h1 class="text-5xl font-bold tracking-tight">Das Team</h1>
      </div>
    </section>

    <section id="partner" class="page-section">
      <div class="p-16">
        <h1 class="text-5xl font-bold tracking-tight">Unsere Partner</h1>
      </div>
    </section>

    <section id="spenden" class="page-section">
      <div class="p-16">
        <h1 class="text-5xl font-bold tracking-tight">Spenden</h1>
      </div>
    </section>

    <section id="kontakt" class="page-section">
      <div class="p-16">
        <h1 class="text-5xl font-bold tracking-tight">Kontakt</h1>
      </div>
    </section>
  </div>
</div>

<style class="postcss">
  .nav-link {
    border-radius: 10px;
    padding: 0.5em 0.7em;
  }

  .nav-link:hover {
    background-color: #e5e5e5;
  }

  .nav-link.active {
    background-color: var(--highlight-color);
    color: white;
  }

  .page-section {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;

    width: 100%;
    min-height: 100vh;
  }
</style>