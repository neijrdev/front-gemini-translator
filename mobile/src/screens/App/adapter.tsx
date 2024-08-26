import React from 'react';
import AppScreen from '@shared/presentation/screens/AppScreen';
import { sharedComponentsProps } from '@/components/index';

import ButtonPicker from './components/FilePickerButton';

const appScreenProps = {
	components: {
		...sharedComponentsProps.components,
		ButtonPicker
	}
};

export const AppScreenMobile = ({ ...props }) => {
	return <AppScreen {...appScreenProps} {...props}></AppScreen>;
};
