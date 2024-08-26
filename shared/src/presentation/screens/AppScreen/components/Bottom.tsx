import React from 'react';
import { AppScreenProps } from '..';

interface BottomProps extends AppScreenProps {
	onPickerResult: (file: File | null) => void;
}

export default function Bottom(bottomProps: BottomProps) {
	const { components: Component, onPickerResult } = bottomProps;
	return (
		<Component.Container className="flex flex-col items-center w-[100%]">
			<Component.ButtonPicker
				className="text-blue-700 min-h-2 w-[100%] bg-blue-700 p-3 rounded-md"
				onPickerResult={onPickerResult}
				data-testid="buttonPicker"
			>
				<Component.Text className="text-white font-medium text-lg text-center">Inserir PDF</Component.Text>
			</Component.ButtonPicker>
		</Component.Container>
	);
}
