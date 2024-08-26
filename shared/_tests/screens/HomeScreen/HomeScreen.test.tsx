/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { JSXElementConstructor } from 'react';
import HomeScreen from '../../../src/presentation/screens/HomeScreen';
import { ReactComponentTest, SharedComponentProps } from '../../../src/types';
import { Helpers } from '../../../helpers';

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
export type ExpectToHaveProp = (element: ReactComponentTest, propName: string, propValue: unknown) => void;

export function runHomeScreenTests(
	setup: () => {
		render: RenderFunction;
		helpers: Helpers;
		sharedComponentProps: SharedComponentProps;
		rootPath: string;
	}
) {
	describe('HomeScreen Component', () => {
		it('should render correctly', () => {
			//GIVEN
			const { render, helpers, sharedComponentProps, rootPath } = setup();
			const { expectToHaveProp } = helpers;
			const { getByText, getByTestId } = render(<HomeScreen components={sharedComponentProps.components} />);

			//THE
			expect(getByText('Home')).toBeTruthy();
			const linkElement = getByTestId('link');
			expect(linkElement).toBeTruthy();
			expectToHaveProp(linkElement, 'href', rootPath);
		});
	});
}
