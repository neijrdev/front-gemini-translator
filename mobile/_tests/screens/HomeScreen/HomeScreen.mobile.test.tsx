import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { runViewFileScreenTests } from '@sharedtest/screens/ViewFileScreen/ViewFileScreen.test';
import { defaultHelpers, renderMobile } from '../../helpers';
import { Link } from '../../mockComponents/Link';
import { sharedComponentsProps } from '@/presentation/utils/MakeScreenProps';
import { makeFileProvider } from '@shared/presentation/context/FileContext';
import { ReactInstance, ScreenProps } from '@shared/types';
import { MockNavigationSpy } from '../../presentation/navigation/Navigation';

export const customSharedComponentsProps: ScreenProps = {
	...sharedComponentsProps,
	components: {
		...sharedComponentsProps.components,
		Link
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

runViewFileScreenTests(setup);
