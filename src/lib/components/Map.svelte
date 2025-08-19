<script lang="ts">
	import { onMount } from 'svelte';

	import { PUBLIC_KAKAO_MAP_API_KEY } from '$env/static/public';
	import { config } from '$lib/config';
	import { isMobile } from '$lib/mobile';

	let mapElement: HTMLDivElement | null = null;
	let mobile = $state(false);

	onMount(() => {
		mobile = isMobile();
	});

	$effect(() => {
		if (!mapElement) return;

		const options = {
			center: new kakao.maps.LatLng(config.map.lagitude, config.map.longitude),
			level: 4,
		} satisfies kakao.maps.MapOptions;
		const map = new kakao.maps.Map(mapElement, options);

		const markerPosition = new kakao.maps.LatLng(config.map.lagitude, config.map.longitude);
		const marker = new kakao.maps.Marker({
			position: markerPosition,
		});
		marker.setMap(map);
	});
</script>

<svelte:head>
	<script
		type="text/javascript"
		src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${PUBLIC_KAKAO_MAP_API_KEY}`}
	></script>
</svelte:head>

<div>
	<div bind:this={mapElement} id="map" class="mx-auto h-[300px] w-full"></div>
	<div class="mt-2 flex justify-stretch divide-x">
		{#each config.map.links as link}
			<div class="flex flex-1 justify-center {!mobile && link.mobileOnly ? 'hidden' : ''}">
				<a href={link.href} target="_blank">
					<img alt="Map icon" src={link.image} class="inline-block h-6 w-6" />
					<span class="ml-1 inline-block text-sm text-gray-600">{link.text}</span>
				</a>
			</div>
		{/each}
	</div>
</div>
