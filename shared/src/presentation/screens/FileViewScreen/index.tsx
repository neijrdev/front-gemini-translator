import React from 'react';
import { ScreenProps } from '../../../types';
import { useFile } from '../../context/FileContext';

export default function FileViewScreen(screenProps: ScreenProps) {
	const navigation = screenProps.navigation;
	const { file } = useFile(screenProps.react);
	const { components: Component } = screenProps;

	return (
		<Component.Container className="flex h-screen w-full flex-1 items-center justify-between flex-col p-2">
			<Component.Container className="flex p-4 w-full">
				<Component.Button className="text-dark" onPress={() => navigation.goBack()}>
					<Component.Text className="text-blue-700 font-medium">Voltar</Component.Text>
				</Component.Button>
			</Component.Container>

			<Component.Container className="flex flex-1 w-full flex-wrap justify-center items-center flex-col overflow-hidden p-10">
				<Component.Text className="text-dark mb-4 w-full text-center">File View</Component.Text>
				<Component.Text className="text-blue-800 break-words max-w-full text-center w-full leading-normal">
					{file?.name}
				</Component.Text>
			</Component.Container>
		</Component.Container>
	);
}
