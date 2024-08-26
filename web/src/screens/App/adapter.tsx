'use client';

import React from 'react';
import AppScreen from '@shared/presentation/screens/AppScreen';
import { sharedComponentsProps } from '@/components';
import ButtonPicker from './components/FilePickerButton';

const appScreenProps = {
	components: {
		...sharedComponentsProps.components,
		ButtonPicker
	}
};

export const AppScreenWeb = ({ ...props }) => {
	return <AppScreen {...appScreenProps} {...props}></AppScreen>;
};
