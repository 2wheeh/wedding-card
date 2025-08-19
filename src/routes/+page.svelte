<script lang="ts">
	import { config } from '$lib/config';

	import BankAccount from '$lib/components/BankAccount.svelte';
	import Calendar from '$lib/components/Calendar.svelte';
	import CenterText from '$lib/components/CenterText.svelte';
	import CoupleName from '$lib/components/CoupleName.svelte';
	import Family from '$lib/components/Family.svelte';
	import FlowerBand from '$lib/components/FlowerBand.svelte';
	import Map from '$lib/components/Map.svelte';
	import PhotoFooter from '$lib/components/PhotoFooter.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
	import PhotoHeader from '$lib/components/PhotoHeader.svelte';

	// TODO: use assets/og-image instead of glob
	const ogImg = Object.values(
		import.meta.glob<string>(`$lib/assets/gallery/thumbnail/photo-*.jpg`, {
			eager: true,
			as: 'url',
		})
	)
		.toSorted()
		.at(-1);

	const openGraphData = {
		title: `${config.groom.name} ♥ ${config.bride.name} 결혼식 ✿'◡'✿`,
		description: config.openGraph.description,
		image: ogImg,
	};
</script>

<svelte:head>
	<title>{config.groom.name}•{config.bride.name} 청첩장</title>
	<meta
		property="description"
		content="{config.bride.fullName}•{config.groom.fullName} 의 결혼식에 초대합니다."
	/>
	<meta property="og:title" content={openGraphData.title} />
	<meta property="og:description" content={openGraphData.description} />
	<meta property="og:image" content={openGraphData.image} />
</svelte:head>

<div class="flex-col">
	<div>
		<PhotoHeader />
	</div>
	<div class="my-14">
		<CoupleName />
	</div>
	<div class="my-20">
		<FlowerBand />
	</div>
	<div class="mt-20">
		<CenterText textData={config.text.invitation} />
	</div>
	<div class="mt-24">
		<PhotoGallery />
	</div>
	<div class="mt-14">
		<Family />
	</div>
	<div class="mt-20">
		<CenterText textData={config.text.schedule} />
	</div>
	<div class="mt-24">
		<Calendar />
	</div>
	<div class="mt-20">
		<CenterText textData={config.text.location} />
	</div>
	<div class="mt-10">
		<Map />
	</div>
	<div class="mt-12">
		<CenterText textData={config.text.transportation} />
	</div>
	<div class="my-32">
		<FlowerBand />
	</div>
	<div class="my-10">
		<BankAccount />
	</div>
	<div class="my-24">
		<CenterText textData={config.text.wreath} />
	</div>
	<div class="my-24">
		<FlowerBand />
	</div>
	<div class="my-12">
		<CenterText textData={config.text.footer} />
	</div>
	<div>
		<PhotoFooter />
	</div>
</div>
