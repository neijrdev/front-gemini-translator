import { render, RenderOptions, fireEvent as fireEventNative, waitFor, act } from '@testing-library/react-native';
import React from 'react';
import { Link } from 'expo-router';
import { ReactTestInstance } from 'react-test-renderer';
import { ComponentRenderFunction, Helpers, RenderResultShared } from '../../../shared/_tests/helpers';
import { sharedComponentsProps } from '@/presentation/utils/MakeScreenProps';
import { ReactInstance, ScreenProps } from '@shared/types';
import { MockNavigationSpy } from '../presentation/navigation/Navigation';

export function expectToHaveProp(element: unknown, propName: string, propValue: unknown) {
	expect(element).toHaveProp(propName, propValue);
}

export function expectToHaveText(element: unknown, text: string) {
	expect(element).toHaveTextContent(text);
}

export function fireEvent(element: ReactTestInstance) {
	return {
		click: () => fireEventNative.press(element)
	};
}

export function renderMobile(component: ComponentRenderFunction, options?: unknown): RenderResultShared {
	const { getByText, getByTestId, debug } = render(component as React.ReactElement, options as RenderOptions);

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

type MockInputFilePros = {
	inputTestId: string;
	mockInput: File | null;
	getByTestId: (testId: string) => Element;
};

export function mockInputFile({ getByTestId, inputTestId, mockInput }: MockInputFilePros) {
	console.log(getByTestId, inputTestId, mockInput);
}

export const defaultScreenPropsMobile: ScreenProps = {
	...sharedComponentsProps,
	components: {
		...sharedComponentsProps.components,
		Link
	},
	navigation: new MockNavigationSpy(),
	react: React as ReactInstance
};

export const defaultHelpers: Helpers = {
	expectToHaveProp,
	expectToHaveText,
	fireEvent,
	mockPickerFile: mockInputFile,
	spy: {
		navigation: new MockNavigationSpy()
	},
	waitFor,
	act
};
