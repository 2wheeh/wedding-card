<script lang="ts">
	import type { AccountData } from '$lib/account';
	import { config } from '$lib/config';
	import { addToast } from '$lib/states/toast-state.svelte';

	const accounts = [
		[
			{
				ownerName: config.groom.fullName,
				bank: config.groom.bankName,
				number: config.groom.accountNumber,
			},
			{
				ownerName: config.groom.father.fullName,
				bank: config.groom.father.bankName,
				number: config.groom.father.accountNumber,
			},
			{
				ownerName: config.groom.mother.fullName,
				bank: config.groom.mother.bankName,
				number: config.groom.mother.accountNumber,
			},
		],
		[
			{
				ownerName: config.bride.fullName,
				bank: config.bride.bankName,
				number: config.bride.accountNumber,
			},
			{
				ownerName: config.bride.father.fullName,
				bank: config.bride.father.bankName,
				number: config.bride.father.accountNumber,
			},
			{
				ownerName: config.bride.mother.fullName,
				bank: config.bride.mother.bankName,
				number: config.bride.mother.accountNumber,
			},
		],
	] satisfies AccountData[][];

	function onClickCopyButton(name: string, account: string): () => void {
		return () => {
			navigator.clipboard.writeText(account).then(() => addCopyResultToast(name, account));
		};
	}

	function addCopyResultToast(name: string, account: string) {
		addToast(`${name}님의 계좌번호 ${account} 를 복사 했어요`, { timeout: 3_000 });
	}
</script>

<div>
	<span class="font-serif text-gray-600 md:text-xl">
		<p class="text-center font-bold tracking-wider">축하의 마음 전하기</p>
		<div class="mx-auto my-8 w-full max-w-md px-6">
			{#each accounts as group, i}
				<div class="space-y-4">
					{#each group as account}
						<div class="flex flex-auto items-center justify-between gap-x-1">
							<div class="space-y-1">
								<div class="font-bold">{account.ownerName}</div>
								<div class="flex justify-start gap-x-2">
									<div class="shrink-0">{account.bank}</div>
									<div>{account.number}</div>
								</div>
							</div>
							<div class="h-11 w-16 md:text-base">
								<button
									onclick={onClickCopyButton(account.ownerName, account.number)}
									class="h-full w-full rounded-md bg-zinc-200 font-bold outline-none transition-colors hover:bg-zinc-300"
									>복사</button
								>
							</div>
						</div>
					{/each}
				</div>
				{#if i != accounts.length - 1}
					<div class="my-5 h-0.5 w-full bg-zinc-200"></div>
				{/if}
			{/each}
		</div>
	</span>
</div>
