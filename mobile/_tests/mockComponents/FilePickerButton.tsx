import React from 'react';
import ButtonPicker, { FilePickerButtonProps } from '@/screens/App/components/FilePickerButton';

export interface PickerDocumentServiceI {
	pickPDF(): Promise<File | null>;
	mockPickPDF(file: File): void;
}

export class MockPickerDocumentService implements PickerDocumentServiceI {
	private mockFile: File | null = null;

	async pickPDF(): Promise<File | null> {
		return this.mockFile;
	}

	mockPickPDF(file: File) {
		this.mockFile = file;
	}
}

export const FileButtonPicker = ({ pickerDocumentService, ...rest }: FilePickerButtonProps) => {
	return <ButtonPicker {...rest} pickerDocumentService={pickerDocumentService} />;
};
