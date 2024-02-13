<script lang="ts">
	import { AppShell, autoModeWatcher } from '@skeletonlabs/skeleton';
	import { appWindow } from '@tauri-apps/api/window';
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	import '../app.pcss';
	import '../theme.pcss';

	onMount(() => {
		autoModeWatcher();
	});

	onMount(async () => {
		await appWindow.setDecorations(true);
	});
</script>

<AppShell slotSidebarLeft="w-52 bg-surface-900 variant-glass">
	<svelte:fragment slot="sidebarLeft"><Navigation /></svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
