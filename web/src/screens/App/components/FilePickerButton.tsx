'use client';

import React, { useRef } from 'react';

type FilePickerButtonProps = {
	children: React.ReactNode;
	className: string;
	onPickerResult: (file: File | null) => void;
	['data-testid']: string;
};

export default function FilePickerButton({ children, onPickerResult, ...rest }: FilePickerButtonProps) {
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleButtonClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] ?? null;
		onPickerResult(file);
	};

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
