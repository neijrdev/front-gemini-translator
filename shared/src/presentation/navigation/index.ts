/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Navigation {
	navigate: (page: string, params?: any) => void;
	goBack: () => void;
}
