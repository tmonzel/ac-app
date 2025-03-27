export type AppState = {
	scrollTop: number;
	currentPage: string | null;
};

export const appState = $state<AppState>({
	scrollTop: 0,
	currentPage: null
});
