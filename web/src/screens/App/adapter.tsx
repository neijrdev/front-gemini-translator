'use client';

import React from 'react';
import AppScreen, { AppScreenProps } from '@shared/presentation/screens/AppScreen';
import { makeScreenPropsDefault } from '@/presentation/utils/MakeScreenProps';
import ButtonPicker from './components/FilePickerButton';

export const AppScreenWeb = ({ ...props }) => {
	const appScreenProps: AppScreenProps = {
		...makeScreenPropsDefault(),
		components: {
			...makeScreenPropsDefault().components,
			ButtonPicker
		}
	};

	return <AppScreen {...appScreenProps} {...props}></AppScreen>;
};
