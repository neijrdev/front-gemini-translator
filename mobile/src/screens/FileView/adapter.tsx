import React from 'react';
import FileViewScreen from '@shared/presentation/screens/FileViewScreen';
import { sharedComponentsProps } from '@/presentation/utils/MakeScreenProps';
import { ScreenProps } from '@shared/types';

export const FileViewScreenMobile = ({ ...props }: ScreenProps) => {
	return <FileViewScreen {...sharedComponentsProps} {...props}></FileViewScreen>;
};
