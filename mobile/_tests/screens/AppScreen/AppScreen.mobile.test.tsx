import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { runAppScreenTests } from '@sharedtest/screens/AppScreen/AppScreen.test';
import { defaultHelpers, renderMobile } from '../../helpers';
import { FileButtonPicker } from '../../mockComponents/FilePickerButton';
import { makeFileProvider } from '@shared/presentation/context/FileContext';
import { ReactInstance } from '@shared/types';
import { AppScreenProps } from '@shared/presentation/screens/AppScreen';
import { defaultScreenPropsMobile } from '../../helpers/index';

export const customSharedComponentsProps: AppScreenProps = {
	...defaultScreenPropsMobile,
	components: {
		...defaultScreenPropsMobile.components,
		ButtonPicker: FileButtonPicker
	}
};

const setup = () => ({
	helpers: defaultHelpers,
	render: renderMobile,
	sharedComponentProps: customSharedComponentsProps,
	rootPath: '/',
	Provider: makeFileProvider(React as ReactInstance)
});

runAppScreenTests(setup);
