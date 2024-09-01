'use client';

import React, { useEffect, useRef, useState } from 'react';

type FilePickerButtonProps = {
	children: React.ReactNode;
	className: string;
	onPickerResult: (file: File | null) => void;
	['data-testid']: string;
};

export default function MockFilePickerButton({ children, onPickerResult, ...rest }: FilePickerButtonProps) {
	const [clickedInButtonInput, setClickedInButtonInput] = useState(false);
	const [filePicked, setFilePicked] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleButtonClick = () => {
		if (fileInputRef.current) {
			setClickedInButtonInput(true);
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] ?? null;
		setFilePicked(file);
		if (clickedInButtonInput) {
			onPickerResult(file);
		}
	};

	useEffect(() => {
		if (filePicked && clickedInButtonInput) {
			onPickerResult(filePicked);
		}
	}, [filePicked, clickedInButtonInput]);

	return (
		<>
			<button onClick={handleButtonClick} {...rest}>
				{children}
			</button>
			<input
				type="file"
				ref={fileInputRef}
				data-testid={rest['data-testid'] + '.input'}
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>
		</>
	);
}
