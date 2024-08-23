import React from 'react';
import AppScreen from '../../../../shared/src/screens/AppScreen';
import { sharedComponentsProps } from '@/components';

export const AppScreenWeb = ({ ...props }) => {
	return <AppScreen {...sharedComponentsProps} {...props}></AppScreen>;
};
