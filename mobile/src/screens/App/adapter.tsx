import React from 'react';
import AppScreen from '../../../../shared/src/screens/AppScreen';
import { sharedComponentsProps } from '@/src/components';

export const AppScreenMobile = ({ ...props }) => {
	return <AppScreen {...sharedComponentsProps} {...props}></AppScreen>;
};
