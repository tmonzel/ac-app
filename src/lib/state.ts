import { writable } from 'svelte/store';

export type AppState = {
  scrollTop: number;
  currentPage: string | null;
}

export const appState = writable<AppState>({
  scrollTop: 0,
  currentPage: null
});
