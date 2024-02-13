import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';

type Request = {
	content: string;
	method: string;
};

export const requestStore: Writable<Request[]> = localStorageStore('requests', []);
