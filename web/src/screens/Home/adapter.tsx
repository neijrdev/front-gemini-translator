import React from 'react';
import HomeScreen from '@shared/presentation/screens/HomeScreen';
import { sharedComponentsProps } from '@/components';

export const HomeScreenWeb = ({ ...props }) => {
	return <HomeScreen {...sharedComponentsProps} {...props}></HomeScreen>;
};
