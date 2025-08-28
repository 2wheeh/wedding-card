<script lang="ts">
	import { config } from '$lib/config';
</script>

{#snippet relationLine(father: string, mother: string, relation: string, name: string)}
	<p class="text-center font-serif text-lg leading-loose text-gray-600 md:text-xl md:leading-loose">
		<span class="font-bold">{father}</span> • <span class="font-bold">{mother}</span> 의 {relation}
		<span class="font-bold">{name}</span>
	</p>
{/snippet}

<div class="flex flex-col gap-y-2 px-2">
	{@render relationLine(
		config.groom.father.fullName,
		config.groom.mother.fullName,
		'외아들',
		config.groom.fullName
	)}
	{@render relationLine(
		config.bride.father.fullName,
		config.bride.mother.fullName,
		'딸',
		config.bride.fullName
	)}
</div>
