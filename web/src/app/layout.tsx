'use client';
import React from 'react';
import './globals.css';
import { makeFileProvider } from '@shared/presentation/context/FileContext';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const FileProvider = makeFileProvider(React);

	return (
		<html lang="pt">
			<body>
				<FileProvider>{children}</FileProvider>
			</body>
		</html>
	);
}
