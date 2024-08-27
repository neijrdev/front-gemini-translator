import React from 'react';
import ButtonPicker, { FilePickerButtonProps } from '@/screens/App/components/FilePickerButton';

export interface PickerDocumentServiceI {
	pickPDF(): Promise<File | null>;
}

class MockPickerDocumentService implements PickerDocumentServiceI {
	async pickPDF(): Promise<File | null> {
		return null;
	}
}

export const FileButtonPicker = (props: FilePickerButtonProps) => {
	return <ButtonPicker {...props} pickerDocumentService={new MockPickerDocumentService()} />;
};
