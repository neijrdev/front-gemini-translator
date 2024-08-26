import { sharedComponentsProps } from '@/components';
import { render, RenderOptions, fireEvent as fireEventNative } from '@testing-library/react-native';
import { Link } from 'expo-router';
import { ReactTestInstance } from 'react-test-renderer';
import { ComponentRenderFunction, RenderResultShared } from '../../../shared/helpers';

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

export const defaultHelpers = {
	expectToHaveProp,
	expectToHaveText,
	fireEvent,
	mockPickerFile: mockInputFile
};

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
	mockInput: File;
	getByTestId: (testId: string) => Element;
};

export function mockInputFile({ getByTestId, inputTestId, mockInput }: MockInputFilePros) {
	console.log(getByTestId, inputTestId, mockInput);
}
