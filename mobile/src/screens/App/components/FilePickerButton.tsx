import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';

type FilePickerButtonProps = {
	children: React.ReactNode;
	className: string;
	onPickerResult: (file: File | null) => void;
	['data-testid']: string;
};

export default function FilePickerButton({ children, onPickerResult, ...rest }: FilePickerButtonProps) {
	const handleButtonClick = (event: GestureResponderEvent) => {
		console.log(event);
		const mockFilePdf = new File(['conteúdo do arquivo'], 'arquivo.pdf', { type: 'application/pdf' });
		onPickerResult(mockFilePdf);
	};

	return (
		<Pressable onPress={handleButtonClick} {...rest} testID={rest['data-testid']}>
			{children}
		</Pressable>
	);
}
