import { sharedComponentsProps } from '@/components';
import { ComponentRenderFunction, RenderResultShared } from '@sharedtest/screens/HomeScreen/HomeScreen.test';
import { render, RenderOptions } from '@testing-library/react-native';
import { Link } from 'expo-router';
import { ReactElement } from 'react';

export function expectToHaveProp(element: unknown, propName: string, propValue: unknown) {
	expect(element).toHaveProp(propName, propValue);
}

export function renderMobile(component: ComponentRenderFunction, options?: unknown): RenderResultShared {
	const { getByText, getByTestId, debug } = render(component as ReactElement, options as RenderOptions);

	return {
		getByText: (value: string) => getByText(value),
		getByTestId: (value: string) => getByTestId(value),
		debug
	};
}

export const customSharedComponentsProps = {
	components: {
		...sharedComponentsProps.components,
		Link
	}
};
