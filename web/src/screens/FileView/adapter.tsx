'use client';

import React from 'react';
import FileViewScreen from '@shared/presentation/screens/FileViewScreen';
import { makeScreenPropsDefault } from '@/presentation/utils/MakeScreenProps';

export const FileViewScreenWeb = ({ ...props }) => {
	const screenProps = {
		...makeScreenPropsDefault()
	};

	return <FileViewScreen {...screenProps} {...props}></FileViewScreen>;
};
