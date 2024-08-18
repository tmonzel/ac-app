<script lang="ts">
	let counter = 0;
	const backgrounds = ['bg-teal-200', 'bg-teal-200'];

	setInterval(() => {
		counter += 1;
	}, 5000);

	$: slideIndex = counter % 3;
	$: bgClass = backgrounds[slideIndex];
</script>

<section id="start" class="min-h-screen flex items-end transition-all duration-500 {bgClass}">
	<div class="p-5 xl:p-10 flex items-end justify-between w-full">
		<div>
			<div class="text-4xl xl:text-5xl mb-5 hl-font">
				<div class="relative font-semibold">
					<div class="absolute bottom-0 text-slide" class:active={slideIndex === 0}>
						<span class="font-normal">Für</span><br />
						<br />
						<span class="animated">MEHR</span><br />
						<span class="animated" style="background-color: var(--mark-color)">ERFOLGREICHE</span>
						<br />
						<span class="animated"
							>AUSBILDUNGEN<br />
							IN HAMBURG</span
						>
					</div>

					<div class="absolute bottom-0 text-slide" class:active={slideIndex === 1}>
						<span class="font-normal">Für</span><br />
						<br />
						<span class="animated">EINE BESSERE</span><br />
						<span class="animated" style="background-color: var(--mark-color)">ZUSAMMENARBEIT</span>
						<br />
						<span class="animated"
							>MIT DEN<br />
							BETRIEBEN</span
						>
					</div>

					<div class="absolute bottom-0 text-slide" class:active={slideIndex === 2}>
						<span class="font-normal">Für</span><br /><br />
						<br />
						<span class="animated">THE</span><br />
						<span class="animated" style="background-color: var(--mark-color)">WORLD</span>
						<br />
						<span class="animated">FRIEDEN</span>
					</div>
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

<style>
	.text-slide {
		transition: all 1s;
	}

	.text-slide .animated {
		display: inline-block;
		animation: 1s cubic-bezier(0.16, 1, 0.3, 1) fadeOut;
		animation-fill-mode: forwards;
	}

	.text-slide.active .animated {
		animation: 1s cubic-bezier(0.16, 1, 0.3, 1) fadeIn;
		animation-fill-mode: forwards;
	}

	@keyframes fadeIn {
		0% {
			transform: translateX(15px);
			opacity: 0;
		}

		100% {
			transform: translateX(0px);
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		0% {
			transform: translateX(0px);
			opacity: 1;
		}

		100% {
			transform: translateX(-15px);
			opacity: 0;
		}
	}
</style>
