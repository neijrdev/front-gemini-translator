/* eslint-disable @typescript-eslint/no-explicit-any */
import { SpyNavigation } from '@sharedtest/helpers/index';

export class MockNavigationSpy implements SpyNavigation {
	page: string | null = null;
	params: any | null = null;
	callGoBackCount: number = 0;

	navigate(page: string, params?: any): void {
		this.page = page;
		this.params = params;
	}
	goBack(): void {
		this.callGoBackCount++;
	}
}
