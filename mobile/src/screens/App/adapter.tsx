import React from 'react';
import AppScreen, { AppScreenProps } from '@shared/presentation/screens/AppScreen';

export const AppScreenMobile = ({ ...props }: AppScreenProps) => {
	return <AppScreen {...props}></AppScreen>;
};
