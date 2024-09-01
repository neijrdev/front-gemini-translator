/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactComponentTest, ScreenProps } from '@/types';
import { JSXElementConstructor } from 'react';
import { Navigation } from '@presentation/navigation';
import { FileContextType } from '@/presentation/context/FileContext';

//Helpers types
export type ExpectToHaveProp = (element: ReactComponentTest, propName: string, propValue: unknown) => void;
export type ExpectToHaveText = (element: ReactComponentTest, text: string) => void;
export type FireEvent = (element: ReactComponentTest) => {
	click: () => void;
};

export type MockInputFilePros = {
	inputTestId: string;
	mockInput: File | null;
	getByTestId: (testId: string) => ReactComponentTest;
};

export interface SpyNavigation extends Navigation {
	page: string | null;
	params: any | null;
	callGoBackCount: number;
}

export type Spy = {
	navigation: SpyNavigation;
};

export type Helpers = {
	expectToHaveProp: ExpectToHaveProp;
	expectToHaveText: ExpectToHaveText;
	fireEvent: FireEvent;
	mockPickerFile: (props: MockInputFilePros) => void;
	spy: Spy;
	waitFor: <T>(expectation: () => T, options?: any) => Promise<T>;
	act: (callback: () => Promise<any>) => Promise<any>;
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

export type RenderFunction = <T>(component: React.ReactElement<T>, options?: any) => RenderResultShared;

export interface ScreenPropsTest extends Omit<ScreenProps, 'navigation'> {
	navigation: SpyNavigation;
	fileContextSpy: FileContextType | undefined | null;
}

export function getMockedFile() {
	return new File(['conteúdo do arquivo'], 'arquivo.pdf', { type: 'application/pdf' });
}
