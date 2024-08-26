import { ComponentRenderFunction, RenderResultShared } from '@sharedtest/screens/HomeScreen/HomeScreen.test';
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

export function expectToHaveProp(element: unknown, propName: string, propValue: unknown) {
	// "@ts-expect-error"
	expect(element).toHaveProperty(propName, propValue);
}

export function renderWeb(component: ComponentRenderFunction, options?: unknown): RenderResultShared {
	const { getByText, getByTestId, debug } = render(component as ReactElement, options as RenderOptions);

	return {
		getByText: (value: string) => getByText(value),
		getByTestId: (value: string) => getByTestId(value),
		debug
	};
}
