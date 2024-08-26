import React from 'react';
import HomeScreen from '../../../src/presentation/screens/HomeScreen';
import { SharedComponentProps } from '../../../src/types';
import { Helpers, RenderFunction } from '../../../helpers';

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
