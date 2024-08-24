/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import HomeScreen from '../../../src/screens/HomeScreen';
import { SharedComponentProps } from '../../../src/types';

export function runHomeScreenTests(
	setup: () => {
		render: any;
		expectToHaveProp: (element: any, propName: string, propValue: any) => void;
		sharedComponentProps: SharedComponentProps;
		rootPath: string;
	}
) {
	describe('HomeScreen Component', () => {
		it('should render correctly', () => {
			//GIVEN
			const { render, expectToHaveProp, sharedComponentProps, rootPath } = setup();
			const { getByText, getByTestId } = render(<HomeScreen components={sharedComponentProps.components} />);

			//THE
			expect(getByText('Home')).toBeTruthy();
			const linkElement = getByTestId('link');
			expect(linkElement).toBeTruthy();
			expectToHaveProp(linkElement, 'href', rootPath);
		});
	});
}
