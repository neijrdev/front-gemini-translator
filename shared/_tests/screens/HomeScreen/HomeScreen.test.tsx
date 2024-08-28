import React from 'react';
import FileViewScreen from '../../../src/presentation/screens/FileViewScreen';
import { Helpers, RenderFunction } from '../../../helpers';
import { ScreenProps } from '@/types';

export function runHomeScreenTests(
	setup: () => {
		render: RenderFunction;
		helpers: Helpers;
		sharedComponentProps: ScreenProps;
		rootPath: string;
	}
) {
	describe('HomeScreen Component', () => {
		it('should render correctly', () => {
			//GIVEN
			const { render, helpers, sharedComponentProps, rootPath } = setup();
			const { expectToHaveProp } = helpers;
			const { getByText, getByTestId } = render(<FileViewScreen {...sharedComponentProps} />);

			//THE
			expect(getByText('Home')).toBeTruthy();
			const linkElement = getByTestId('link');
			expect(linkElement).toBeTruthy();
			expectToHaveProp(linkElement, 'href', rootPath);
		});
	});
}
