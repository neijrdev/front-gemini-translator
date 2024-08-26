import React from 'react';
import { GenericJSXElement, SharedComponentProps } from '@/types';
import Bottom from './components/Bottom';
import Middle from './components/Middle';

export interface AppScreenProps extends SharedComponentProps {
	components: SharedComponentProps['components'] & {
		ButtonPicker: React.ElementType<{
			onPickerResult: (file: File | null) => void;
			className: string;
			children: GenericJSXElement | React.ReactElement;
		}>;
	};
}

export default function AppScreen(sharedComponentProps: AppScreenProps) {
	const onPickerResult = (file: File | null) => {
		console.log('file recebida pickerFileResult');
		console.log(file?.name);
	};

	const { components: Component } = sharedComponentProps;

	return (
		<Component.Container className="flex min-h-screen flex-1 items-center flex-col p-5 pb-10 justify-between">
			<Middle {...sharedComponentProps} />
			<Bottom {...sharedComponentProps} onPickerResult={onPickerResult} />
		</Component.Container>
	);
}
