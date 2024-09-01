import { fireEvent as fireEventReact, render, RenderOptions, within, waitFor, act } from '@testing-library/react';
import React, { ReactElement } from 'react';
import '@testing-library/jest-dom';
import { ReactInstance, ScreenProps } from '@shared/types';
import { MockNavigationSpy } from '../presentation/navigation/Navigation';
import { sharedScreenProps } from '@/presentation/utils/MakeScreenProps';
import { makeFileProvider } from '@shared/presentation/context/FileContext';
import { ComponentRenderFunction, Helpers, RenderResultShared } from '@sharedtest/helpers';

export function expectToHaveProp(element: unknown, propName: string, propValue: unknown) {
	// "@ts-expect-error"
	expect(element).toHaveProperty(propName, propValue);
}

export function expectToHaveText(element: unknown, text: string) {
	expect(within(element as HTMLElement).getByText(text)).toBeInTheDocument();
}

export function fireEvent(element: Element) {
	return {
		click: () => fireEventReact.click(element)
	};
}

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

export function renderWeb(component: ComponentRenderFunction, options?: unknown): RenderResultShared {
	const { getByText, getByTestId, debug } = render(component as ReactElement, options as RenderOptions);

	return {
		getByText: (value: string) => getByText(value),
		getByTestId: (value: string) => getByTestId(value),
		debug
	};
}

type MockInputFilePros = {
	inputTestId: string;
	mockInput: File | null;
	getByTestId: (testId: string) => Element;
};

export function mockInputFile({ getByTestId, inputTestId, mockInput }: MockInputFilePros) {
	fireEventReact.change(getByTestId(inputTestId + '.input'), { target: { files: [mockInput] } });
}

export const defaultScreenPropsWeb: ScreenProps = {
	...sharedScreenProps,
	navigation: new MockNavigationSpy(),
	react: React as ReactInstance
};

export const defaultSetupTestsWeb = () => ({
	helpers: defaultHelpers,
	render: renderWeb,
	screenProps: defaultScreenPropsWeb,
	rootPath: 'http://localhost/',
	Provider: makeFileProvider(React as ReactInstance)
});
