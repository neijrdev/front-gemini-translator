import React from 'react';
import FileViewScreen from '../../../src/presentation/screens/FileViewScreen';
import { Helpers, RenderFunction } from '../../helpers';
import { ScreenProps } from '@/types';

export function runViewFileScreenTests(
	setup: () => {
		render: RenderFunction;
		helpers: Helpers;
		screenProps: ScreenProps;
		rootPath: string;
		Provider: (props: React.PropsWithChildren) => React.JSX.Element;
	}
) {
	describe('ViewFile Component', () => {
		it('should render correctly', () => {
			//GIVEN
			const { render, screenProps, Provider } = setup();
			const { getByText } = render(
				<Provider>
					<FileViewScreen {...screenProps} />
				</Provider>
			);

			//THE
			expect(getByText('File View')).toBeTruthy();
		});
	});
}
