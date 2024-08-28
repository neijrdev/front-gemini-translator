import React, { createContext } from 'react';
import { ReactInstance } from '@/types';

export interface FileContextType {
	file: File | null;
	setFile: (file: File | null) => void;
}

export const FileContext = createContext<FileContextType | undefined>(undefined);

export const useFile = (react: ReactInstance) => {
	const context = react.useContext(FileContext);
	if (!context) {
		throw new Error('useFile must be used within a FileProvider');
	}
	return context;
};

export function makeFileProvider(react: ReactInstance) {
	const FileProvider = (props: React.PropsWithChildren) => {
		const [file, setFile] = react.useState<File | null>(null);
		return <FileContext.Provider value={{ file, setFile }}>{props.children}</FileContext.Provider>;
	};

	return FileProvider;
}
