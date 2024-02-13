<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { fetch, ResponseType, type HttpVerb } from '@tauri-apps/api/http';

	let method: HttpVerb;
	let url: string;
	let response: object;

	async function sendRequest() {
		// response = (
		// 	await fetch('https://tauri.app/v1/api/js/http/', {
		// 		method,
		// 		timeout: 30,
		// 		responseType: ResponseType.Text
		// 	})
		// ).data as string;
		response = {
			array: [1, 2, 3],
			bool: true,
			object: {
				foo: 'bar'
			}
		};
	}
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar spacing="space-y-0">
			<svelte:fragment slot="headline">
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] border-0">
					<select class="select appearance-none border-0 outline-none" bind:value={method}>
						<option value="GET">GET</option>
						<option value="POST">POST</option>
						<option value="PUT">PUT</option>
						<option value="DELETE">DELETE</option>
					</select>
					<input class="input border-0 p-2 outline-none" type="text" placeholder="request..." />
					<button class="variant-filled-secondary btn" on:click={sendRequest}>Send</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="grid size-full grid-cols-2 gap-2 p-2">
		<textarea class="textarea resize-none border-0 p-4 outline-none" />
		<span class="textarea p-4" bind:textContent={response} contenteditable="false" />
	</div>
</AppShell>
