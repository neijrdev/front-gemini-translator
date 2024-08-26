import { fireEvent as fireEventReact, render, RenderOptions, within } from '@testing-library/react';
import { ReactElement } from 'react';
import '@testing-library/jest-dom';
import { ComponentRenderFunction, RenderResultShared } from '../../../shared/helpers';

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

export const defaultHelpers = {
	expectToHaveProp,
	expectToHaveText,
	fireEvent,
	mockPickerFile: mockInputFile
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
	mockInput: File;
	getByTestId: (testId: string) => Element;
};

export function mockInputFile({ getByTestId, inputTestId, mockInput }: MockInputFilePros) {
	fireEventReact.change(getByTestId(inputTestId + '.input'), { target: { files: [mockInput] } });
}
