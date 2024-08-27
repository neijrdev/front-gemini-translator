import React from 'react';
import { AppScreenMobile } from './adapter';
import { sharedComponentsProps } from '@/components';
import ButtonPicker, { FilePickerButtonProps } from './components/FilePickerButton';
import { ExpoPickerService } from '@/infrastructure/platform/ExpoPickerService';

export default function AppScreen() {
	const appScreenProps = {
		components: {
			...sharedComponentsProps.components,
			ButtonPicker: (props: FilePickerButtonProps) => (
				<ButtonPicker {...props} pickerDocumentService={new ExpoPickerService()} />
			)
		}
	};

	return <AppScreenMobile {...appScreenProps} />;
}
