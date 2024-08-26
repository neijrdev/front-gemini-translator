/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactComponentTest } from '@/types';
import { JSXElementConstructor } from 'react';

//Helpers types
export type ExpectToHaveProp = (element: ReactComponentTest, propName: string, propValue: unknown) => void;
export type ExpectToHaveText = (element: ReactComponentTest, text: string) => void;
export type FireEvent = (element: ReactComponentTest) => {
	click: () => void;
};

export type MockInputFilePros = {
	inputTestId: string;
	mockInput: File;
	getByTestId: (testId: string) => ReactComponentTest;
};

export type Helpers = {
	expectToHaveProp: ExpectToHaveProp;
	expectToHaveText: ExpectToHaveText;
	fireEvent: FireEvent;
	mockPickerFile: (props: MockInputFilePros) => void;
};

export type RenderResultShared = {
	getByText: (value: string) => ReactComponentTest;
	getByTestId: (value: string) => ReactComponentTest;
	debug: () => void;
};

export type ComponentRenderFunction =
	| React.ReactNode
	| React.ReactElement<any, string | JSXElementConstructor<any>>
	| React.JSX.Element;

export type RenderFunction = (component: ComponentRenderFunction, options?: any) => RenderResultShared;
