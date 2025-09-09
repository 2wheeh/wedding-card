<script lang="ts">
	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';

	import ArrowIconThick from '$lib/assets/icons/ArrowIconThick.svelte';
	import CrossIconThick from '$lib/assets/icons/CrossIconThick.svelte';

	const thumbnails = Object.values(
		import.meta.glob<string>(`$lib/assets/gallery/thumbnail/*`, {
			eager: true,
			query: '?url',
			import: 'default',
		})
	);

	const fullImages = Object.values(
		import.meta.glob<string>(`$lib/assets/gallery/original/*`, {
			eager: true,
			query: '?url',
			import: 'default',
		})
	);

	if (thumbnails.length !== fullImages.length) {
		throw new Error('Thumbnails and full images count mismatch');
	}

	let swiper: Swiper;
	let swiperIndex: number = $state(0);
	let isPopupOpen = $state(false);
	let isFirstSlide = $derived(swiperIndex === 0);
	let isLastSlide = $derived(swiperIndex === thumbnails.length - 1);

	$effect(() => {
		const thumbnailSwiper = new Swiper('.thumbnail-swiper', {
			slidesPerView: 'auto',
			spaceBetween: 8,
			freeMode: true,
		});

		swiper = new Swiper('.popup-swiper', {
			modules: [Navigation, Pagination],
			on: {
				activeIndexChange: (swiper) => (swiperIndex = swiper.activeIndex),
			},
			spaceBetween: 30,
		});

		return () => {
			swiper.destroy();
			thumbnailSwiper.destroy();
		};
	});

	function openPopup(i: number) {
		swiper.slideToLoop(i, 0);
		isPopupOpen = true;
	}

	function onDocumentKeyup(
		event: KeyboardEvent & {
			currentTarget: EventTarget & Document;
		}
	) {
		if (isPopupOpen) {
			if (event.key === 'Escape') {
				isPopupOpen = false;
				return;
			}

			if (event.key === 'ArrowLeft') {
				swiper.slidePrev();
				return;
			}

			if (event.key === 'ArrowRight') {
				swiper.slideNext();
				return;
			}
		}
	}

	function onClickOverlay(event: MouseEvent) {
		if (event.target !== event.currentTarget) return;

		isPopupOpen = false;
	}

	function onClickNextButton() {
		swiper.slideNext();
	}

	function onClickPrevButton() {
		swiper.slidePrev();
	}

	function onClickCloseButton() {
		isPopupOpen = false;
	}
</script>

<svelte:head>
	{#each fullImages as fullImage}
		<link rel="prefetch" href={fullImage} />
	{/each}

	{#if isPopupOpen}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<svelte:document onkeyup={onDocumentKeyup} />

<div>
	<!-- Thumbnail view -->
	<div class="thumbnail-swiper w-full overflow-hidden pb-2">
		<div class="swiper-wrapper">
			{#each thumbnails as thumbnail, i}
				<div class="swiper-slide" style="width: auto;">
					<button onclick={() => openPopup(i)} class="block outline-none">
						<div class="flex items-center justify-center">
							<img
								alt="wedding couple shot"
								src={thumbnail}
								class="h-24 w-24 rounded object-cover sm:h-28 sm:w-28 md:h-32 md:w-32"
							/>
						</div>
					</button>
				</div>
			{/each}
		</div>
	</div>

	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		role="dialog"
		onclick={onClickOverlay}
		class="fixed left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-80"
		class:hidden={!isPopupOpen}
	>
		<div
			role="dialog"
			onclick={onClickOverlay}
			class="fixed left-1/2 top-1/2 flex h-full max-h-[80vh] w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-y-4 px-4 md:max-h-[90vh]"
		>
			<!-- Slider main container -->
			<div class="popup-swiper static h-full w-full">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					{#each fullImages as fullImage}
						<div class="swiper-slide">
							<img
								alt="detailed wedding shot"
								src={fullImage}
								class="block h-full w-full object-contain"
							/>
						</div>
					{/each}
				</div>
			</div>

			<div class="z-10 flex items-center justify-center gap-x-4 text-zinc-200 transition-colors">
				<button
					onclick={onClickPrevButton}
					class="outline-none"
					disabled={isFirstSlide}
					class:opacity-60={isFirstSlide}
				>
					<div
						class:hover:bg-zinc-600={!isFirstSlide}
						class:hover:text-zinc-50={!isFirstSlide}
						class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 md:h-11 md:w-11"
					>
						<div class="h-5 w-5 -translate-x-[2px]"><ArrowIconThick /></div>
					</div>
				</button>
				<button
					onclick={onClickNextButton}
					class="outline-none"
					disabled={isLastSlide}
					class:opacity-60={isLastSlide}
				>
					<div
						class:hover:bg-zinc-600={!isLastSlide}
						class:hover:text-zinc-50={!isLastSlide}
						class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 md:h-11 md:w-11"
					>
						<div class="h-5 w-5 translate-x-[2px] rotate-180">
							<ArrowIconThick />
						</div>
					</div>
				</button>
				<button onclick={onClickCloseButton}>
					<div
						class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 outline-none hover:bg-zinc-600 hover:text-zinc-50 md:h-11 md:w-11"
					>
						<div class="h-4 w-4"><CrossIconThick /></div>
					</div>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
</style>
