/* eslint-disable @typescript-eslint/no-explicit-any */
import { FileContext, FileContextType, useFile } from '../../src/presentation/context/FileContext';
import { ReactInstance } from '@/types';
import React from 'react';
import { RenderFunction } from '.';

export function makeFileProviderTest(react: ReactInstance) {
	const FileProvider = (props: React.PropsWithChildren) => {
		const [file, setFile] = react.useState<File | null>(null);
		return <FileContext.Provider value={{ file, setFile }}>{props.children}</FileContext.Provider>;
	};

	return FileProvider;
}

export type SetFile = (file: File | null) => void;

export type ComponentToViewContextProps = {
	react: ReactInstance;
	setFile: SetFile;
};

export const ComponentToViewContext = ({ react, setFile }: ComponentToViewContextProps) => {
	const { file } = useFile(react);

	react.useEffect(() => {
		setFile(file);
	}, [file]);

	return null;
};

interface CustomRenderOptions {
	providerProps: FileContextType;
	react: ReactInstance;
	render: RenderFunction;
}

export const renderWithProvider = (
	ui: any,
	{ providerProps, react, render, ...renderOptions }: CustomRenderOptions
) => {
	return render(
		<FileContext.Provider value={providerProps}>
			<ComponentToViewContext react={react} setFile={providerProps.setFile} />
			{ui}
		</FileContext.Provider>,
		renderOptions
	);
};
