import React from 'react';
import { Pressable } from 'react-native';
import { PickerDocumentServiceI } from '@/domain/services/PickerDocumentService';

export type FilePickerButtonProps = {
	children: React.ReactNode;
	className: string;
	onPickerResult: (file: File | null) => void;
	['data-testid']: string;
	pickerDocumentService: PickerDocumentServiceI;
};

export default function FilePickerButton({
	children,
	onPickerResult,
	pickerDocumentService,
	...rest
}: FilePickerButtonProps) {
	const handleButtonClick = async () => {
		const documentFile = await pickerDocumentService.pickPDF();
		onPickerResult(documentFile);
	};

	return (
		<Pressable onPress={handleButtonClick} testID={rest['data-testid']} {...rest}>
			{children}
		</Pressable>
	);
}
