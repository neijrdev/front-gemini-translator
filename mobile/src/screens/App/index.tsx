import React from 'react';
import { AppScreenMobile } from './adapter';
import { makeScreenPropsDefault, sharedComponentsProps } from '@/presentation/utils/MakeScreenProps';
import ButtonPicker, { FilePickerButtonProps } from './components/FilePickerButton';
import { ExpoPickerService } from '@/infrastructure/platform/ExpoPickerService';
import { AppScreenProps } from '@shared/presentation/screens/AppScreen';

export default function AppScreen() {
	const appScreenProps: AppScreenProps = {
		...makeScreenPropsDefault(),
		components: {
			...sharedComponentsProps.components,
			ButtonPicker: (props: FilePickerButtonProps) => (
				<ButtonPicker {...props} pickerDocumentService={new ExpoPickerService()} />
			)
		}
	};

	return <AppScreenMobile {...appScreenProps} />;
}
