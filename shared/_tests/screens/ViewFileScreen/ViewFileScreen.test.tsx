import React from 'react';
import FileViewScreen from '../../../src/presentation/screens/FileViewScreen';
import { Helpers, RenderFunction, getMockedFile } from '../../helpers';
import { ScreenProps } from '@/types';
import { renderWithProvider } from '../../helpers/contexts';

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
			const providerProps = {
				file: getMockedFile(),
				setFile: () => {}
			};
			const { render, screenProps } = setup();
			const { getByText } = renderWithProvider(<FileViewScreen {...screenProps} />, {
				providerProps,
				render,
				react: screenProps.react
			});

			//THE - Title
			expect(getByText('File View')).toBeTruthy();
			//File name uploaded
			expect(getByText('arquivo.pdf')).toBeTruthy();
		});
	});
}
