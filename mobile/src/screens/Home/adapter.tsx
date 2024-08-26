import React from 'react';
import HomeScreen from '@shared/presentation/screens/HomeScreen';
import { sharedComponentsProps } from '@/components/index';

export const HomeScreenMobile = ({ ...props }) => {
	return <HomeScreen {...sharedComponentsProps} {...props}></HomeScreen>;
};
