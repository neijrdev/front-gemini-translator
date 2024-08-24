/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import HomeScreen from '../../../src/screens/HomeScreen';
import { SharedComponentProps } from '../../../src/types';

export function runHomeScreenTests(
	setup: () => { render: any; sharedComponentProps: SharedComponentProps; rootPath: string }
) {
	describe('HomeScreen Component', () => {
		it('should render correctly', () => {
			//GIVEN
			const { render, sharedComponentProps, rootPath } = setup();
			const { getByText, getByRole } = render(<HomeScreen components={sharedComponentProps.components} />);

			//THEN
			expect(getByText('Home')).toBeTruthy();
			const linkElement = getByRole('link', { name: 'App' });
			expect(linkElement).toBeTruthy();
			expect(linkElement).toHaveProperty('href', rootPath);
		});
	});
}
