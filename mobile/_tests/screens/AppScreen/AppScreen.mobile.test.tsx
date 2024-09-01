import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { runAppScreenTests } from '@sharedtest/screens/AppScreen/AppScreen.test';
import { defaultHelpers, renderMobile } from '../../helpers';
import { FileButtonPicker, MockPickerDocumentService } from '../../mockComponents/FilePickerButton';
import { FileContext, FileContextType, makeFileProvider } from '@shared/presentation/context/FileContext';
import { ReactInstance } from '@shared/types';
import { defaultScreenPropsMobile } from '../../helpers/index';
import { MockInputFilePros } from '@sharedtest/helpers';
import { FilePickerButtonProps } from '@/screens/App/components/FilePickerButton';

const customScreensPropsHelpers = () => {
	let fileContextSpy: FileContextType | null | undefined = null;
	const pickerDocumentService = new MockPickerDocumentService();
	const helpers = {
		...defaultHelpers,
		mockPickerFile: (props: MockInputFilePros) => {
			pickerDocumentService.mockPickPDF(props.mockInput as File);
		}
	};

	return {
		...defaultScreenPropsMobile,
		components: {
			...defaultScreenPropsMobile.components,
			ButtonPicker: (props: FilePickerButtonProps) => {
				fileContextSpy = screenProps.react.useContext(FileContext);

				return <FileButtonPicker {...props} pickerDocumentService={pickerDocumentService} />;
			}
		},
		helpers,
		fileContextSpy
	};
};

const screenProps = customScreensPropsHelpers();

const setup = () => ({
	helpers: screenProps.helpers,
	render: renderMobile,
	screenProps: screenProps,
	rootPath: '/',
	Provider: makeFileProvider(React as ReactInstance)
});

runAppScreenTests(setup);
