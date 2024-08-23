import React from 'react';
import AppScreen from '@shared/screens/AppScreen';
import { sharedComponentsProps } from '@/components/index';

export const AppScreenMobile = ({ ...props }) => {
	return <AppScreen {...sharedComponentsProps} {...props}></AppScreen>;
};
