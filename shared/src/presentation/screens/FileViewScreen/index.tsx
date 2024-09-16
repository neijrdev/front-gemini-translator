import React from 'react';
import { ScreenProps } from '../../../types';
import { useFile } from '../../context/FileContext';
import { FileType } from '../../../domain';
import useProcessPdf from './hooks/useProcessPdf';

export default function FileViewScreen(screenProps: ScreenProps) {
	const navigation = screenProps.navigation;
	const { file } = useFile(screenProps.react);
	const { components: Component, react } = screenProps;
	const { loading, executeRequest } = useProcessPdf({
		react,
		onSuccess: (blob) => {
			console.log(blob);
		},
		onError: (error) => {
			console.log(error);
		}
	});

	function handleSendFilePDF() {
		const format: FileType = FileType.ANKI;
		const numberRankedWords = 10;
		if (!file) {
			return;
		}
		executeRequest(file, format, numberRankedWords);
	}

	return (
		<Component.Container className="flex h-screen w-full flex-1 items-center justify-between flex-col p-2">
			<Component.Container className="flex p-4 w-full">
				<Component.Button className="text-dark" onPress={() => navigation.goBack()}>
					<Component.Text className="text-blue-700 font-medium">Voltar</Component.Text>
				</Component.Button>
			</Component.Container>

			<Component.Container className="flex flex-1 w-full flex-wrap items-center flex-col overflow-hidden p-10">
				<Component.Container className="flex flex-1 flex-col justify-end w-full items-center">
					<Component.Text className="text-dark mb-4 w-full text-center">File View</Component.Text>
					<Component.Text className="text-blue-800 break-words max-w-full text-center w-full leading-normal">
						{file?.name}
					</Component.Text>
				</Component.Container>

				<Component.Container className="flex flex-1 items-end justify-end w-full">
					<Component.Button
						onPress={() => handleSendFilePDF()}
						className="text-blue-700 min-h-2 w-[100%] bg-blue-700 p-3 rounded-md"
						data-testid="buttonSendPdf"
					>
						{loading ? (
							<Component.Text className="text-white font-medium text-lg text-center">Loading...</Component.Text>
						) : (
							<Component.Text className="text-white font-medium text-lg text-center">Enviar PDF</Component.Text>
						)}
					</Component.Button>
				</Component.Container>
			</Component.Container>
		</Component.Container>
	);
}
