<script lang="ts">
	import { config } from '$lib/config';
	import { generateCalendar } from '$lib/date';

	const { date } = config;

	const year = date.getFullYear();
	const month = date.getMonth();
	const dateOfMonth = date.getDate();
	const weeks = generateCalendar(year, month + 1).map((dates) =>
		dates.map((date) => ({ date, isWeddingDay: date === dateOfMonth }))
	);
</script>

<div class="mx-auto w-full max-w-lg px-4">
	<span class="text-center font-serif md:text-lg">
		<p class="font-extrabold tracking-wider text-gray-600 md:text-xl">CALENDAR</p>
		<table class="mt-8 w-full table-fixed">
			<thead>
				<tr class="h-12">
					<th class="text-red-500">일</th>
					<th class="opacity-60">월</th>
					<th class="opacity-60">화</th>
					<th class="opacity-60">수</th>
					<th class="opacity-60">목</th>
					<th class="opacity-60">금</th>
					<th class="opacity-60">토</th>
				</tr>
			</thead>
			<tbody>
				{#each weeks as dates}
					<tr class="h-12">
						{#each dates as d}
							<td>
								<div
									class="mx-auto flex h-8 w-8 items-center justify-center rounded-full"
									class:opacity-50={!d.isWeddingDay}
									class:bg-red-100={d.isWeddingDay}
									class:font-bold={d.isWeddingDay}
									class:text-red-500={d.isWeddingDay}
								>
									<div class="h-min w-min">
										<span class="align-middle leading-none">
											{d.date}
										</span>
									</div>
								</div>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</span>
</div>
