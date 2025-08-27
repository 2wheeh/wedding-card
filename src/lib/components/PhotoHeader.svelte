<script lang="ts">
	import { config } from '$lib/config';
	import headerImage from '$lib/assets/gallery/header.png';

	const { date } = config;

	const dateNums = [
		date.getFullYear().toString().split(''),
		(date.getMonth() + 1).toString().padStart(2, '0').split(''),
		date.getDate().toString().padStart(2, '0').split(''),
	];

	const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase().split('');
</script>

<div class="relative">
	<div class="">
		<div class="h-48 w-full bg-[#c6d0d2]"></div>
		<div class="absolute z-10 h-28 w-full bg-gradient-to-b from-[#c6d0d2] to-white/0"></div>
	</div>
	<span class="font-sans text-3xl md:text-4xl">
		<div
			class="absolute top-24 z-10 flex w-full flex-col content-center items-center justify-center"
		>
			<p class="space-x-8 font-bold">
				{#each dateNums as num}
					<span class="space-x-4">
						{#each num as digit}
							<span class="inline-block">{digit}</span>
						{/each}
					</span>
				{/each}
			</p>
			<p class="mt-12 space-x-3 text-2xl font-thin md:text-3xl">
				{#each dayOfWeek as c}
					<span class="inline-block">{c}</span>
				{/each}
			</p>
		</div>
	</span>
	<div class="relative w-full">
		<img alt="A bride and a groom" src={headerImage} class="w-full" />
		<div
			class="pointer-events-none absolute bottom-0 left-0 h-60 w-full bg-gradient-to-t from-white to-transparent"
		></div>
	</div>
</div>
