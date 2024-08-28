import React from 'react';
import AppScreen, { AppScreenProps } from '../../../src/presentation/screens/AppScreen';
import { Helpers, RenderFunction } from '../../../helpers';

export function runAppScreenTests(
	setup: () => {
		render: RenderFunction;
		helpers: Helpers;
		sharedComponentProps: AppScreenProps;
		rootPath: string;
	}
) {
	describe('AppScreen Component', () => {
		it('should render correctly', () => {
			//GIVEN
			const { render, sharedComponentProps, helpers } = setup();
			const { expectToHaveText, fireEvent, mockPickerFile } = helpers;
			const { getByText, getByTestId } = render(<AppScreen {...sharedComponentProps} />);

			//THE -
			//TITLE
			expect(getByText('Selecione um arquivo pdf em inglês')).toBeTruthy();
			//SubTITLE
			expect(
				getByText(
					'Analisaremos as palavras mais frequentes do PDF, criando frases de exemplo e gerando um arquivo para download em PDF, CSV ou formato Anki.'
				)
			).toBeTruthy();
			//Button
			const buttonPicker = getByTestId('buttonPicker');
			expect(buttonPicker).toBeTruthy();
			expectToHaveText(buttonPicker, 'Inserir PDF');

			// Cria um arquivo mockado
			const mockFilePdf = new File(['conteúdo do arquivo'], 'arquivo.pdf', { type: 'application/pdf' });

			//WHEN - press button picker
			fireEvent(buttonPicker).click();
			mockPickerFile({ getByTestId, inputTestId: 'buttonPicker', mockInput: mockFilePdf });
		});
	});
}
