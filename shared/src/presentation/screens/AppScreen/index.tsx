import React from 'react';
import { GenericJSXElement, ScreenProps } from '@/types';
import Bottom from './components/Bottom';
import Middle from './components/Middle';
import { useFile } from '../../context/FileContext';

export interface AppScreenProps extends Omit<ScreenProps, 'components'> {
	components: ScreenProps['components'] & {
		ButtonPicker: React.ComponentType<{
			onPickerResult: (file: File | null) => void;
			className: string;
			children: GenericJSXElement | React.ReactElement | React.ReactNode;
		}>;
	};
}

export default function AppScreen(appScreenProps: AppScreenProps) {
	const navigation = appScreenProps.navigation;
	const { setFile } = useFile(appScreenProps.react);

	const onPickerResult = (file: File | null) => {
		setFile(file);
		navigation.navigate('viewfile');
	};

	const { components: Component } = appScreenProps;

	return (
		<Component.Container className="flex h-screen flex-1 items-center flex-col p-5 justify-between">
			<Middle {...appScreenProps} />
			<Bottom {...appScreenProps} onPickerResult={onPickerResult} />
		</Component.Container>
	);
}
