import React from 'react';
import HomeScreen from '../../../../shared/src/screens/HomeScreen';
import { sharedComponentsProps } from '@/src/components';

export const HomeScreenMobile = ({ ...props }) => {
	return <HomeScreen {...sharedComponentsProps} {...props}></HomeScreen>;
};
