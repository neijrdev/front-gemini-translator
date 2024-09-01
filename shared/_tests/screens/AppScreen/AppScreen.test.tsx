import React from 'react';
import AppScreen from '../../../src/presentation/screens/AppScreen';
import { Helpers, RenderFunction, ScreenPropsTest } from '../../helpers';
import { GenericJSXElement, ScreenProps } from '@/types';
import { renderWithProvider } from '../../helpers/contexts';
import { FileContextType } from '@/presentation/context/FileContext';
export interface AppScreenPropsTest extends Omit<ScreenPropsTest, 'components'> {
	components: ScreenProps['components'] & {
		ButtonPicker: React.ComponentType<{
			onPickerResult: (file: File | null) => void;
			className: string;
			children: GenericJSXElement | React.ReactElement | React.ReactNode;
		}>;
	};
}

class ProviderPropsValues implements FileContextType {
	file: File | null = null;
	setFile: (file: File | null) => void = (file: File | null) => {
		this.file = file;
	};
}

export type AppScreenSetup = () => {
	render: RenderFunction;
	helpers: Helpers;
	screenProps: AppScreenPropsTest;
	rootPath: string;
	Provider: (props: React.PropsWithChildren) => React.JSX.Element;
};

export function runAppScreenTests(setup: AppScreenSetup) {
	describe('AppScreen Component', () => {
		it('should render AppScreen correctly', async () => {
			//GIVEN
			const { getByTestId, getByText, expectToHaveText } = getSut(setup);

			//THEN
			expect(getByText('Selecione um arquivo pdf em inglês')).toBeTruthy();
			expect(
				getByText(
					'Analisaremos as palavras mais frequentes do PDF, criando frases de exemplo e gerando um arquivo para download em PDF, CSV ou formato Anki.'
				)
			).toBeTruthy();
			expectToHaveText(getByTestId('buttonPicker'), 'Inserir PDF');
		});

		it('should check navigation and file context with press button "Inserir PDF"', async () => {
			//GIVEN
			const { getByTestId, act, fireEvent, screenProps, providerProps, mockFile } = getSut(setup);

			//THEN - before action
			expect(screenProps.navigation.page).toBe(null);
			expect(providerProps.file).toEqual(null);

			//WHEN - action to press button picker
			await act(async () => {
				fireEvent(getByTestId('buttonPicker')).click();
			});

			//THEN - after action
			expect(screenProps.navigation.page).toBe('viewfile');
			expect(providerProps.file).toEqual(mockFile);
		});
	});
}

function getMockFile() {
	return new File(['conteúdo do arquivo'], 'arquivo.pdf', { type: 'application/pdf' });
}

function getSut(setup: AppScreenSetup, mockFile: File | null = getMockFile()) {
	const providerProps = new ProviderPropsValues();

	const { render, screenProps, helpers } = setup();
	const { expectToHaveText, fireEvent, mockPickerFile, act } = helpers;

	const { getByText, getByTestId } = renderWithProvider(<AppScreen {...screenProps} />, {
		providerProps: { file: providerProps.file, setFile: providerProps.setFile },
		react: screenProps.react,
		render
	});

	// Mock picker file
	mockPickerFile({ getByTestId, inputTestId: 'buttonPicker', mockInput: mockFile });

	return {
		expectToHaveText,
		fireEvent,
		mockPickerFile,
		act,
		getByText,
		getByTestId,
		screenProps,
		providerProps,
		mockFile
	};
}
