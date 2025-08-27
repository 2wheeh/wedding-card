<script lang="ts">
	const flowerImages = Object.values(
		import.meta.glob<string>('$lib/assets/misc/flower-*.png', {
			eager: true,
			query: '?url',
			import: 'default',
		})
	);
</script>

<div class="flex justify-between">
	{#each flowerImages as image}
		<img alt="A flower" src={image} class="inline-block h-24" />
	{/each}
</div>
