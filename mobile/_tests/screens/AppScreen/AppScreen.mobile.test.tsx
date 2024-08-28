import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { runAppScreenTests } from '@sharedtest/screens/AppScreen/AppScreen.test';
import { defaultHelpers, renderMobile } from '../../helpers';
import { Link } from '../../mockComponents/Link';
import { FileButtonPicker } from '../../mockComponents/FilePickerButton';
import { sharedComponentsProps } from '@/presentation/utils/MakeScreenProps';
import { makeFileProvider } from '@shared/presentation/context/FileContext';
import { ReactInstance } from '@shared/types';
import { MockNavigationSpy } from '../../presentation/navigation/Navigation';
import { AppScreenProps } from '@shared/presentation/screens/AppScreen';

export const customSharedComponentsProps: AppScreenProps = {
	...sharedComponentsProps,
	components: {
		...sharedComponentsProps.components,
		Link,
		ButtonPicker: FileButtonPicker
	},
	navigation: new MockNavigationSpy(),
	react: React as ReactInstance
};

const setup = () => ({
	helpers: defaultHelpers,
	render: renderMobile,
	sharedComponentProps: customSharedComponentsProps,
	rootPath: '/',
	Provider: makeFileProvider(React as ReactInstance)
});

runAppScreenTests(setup);
