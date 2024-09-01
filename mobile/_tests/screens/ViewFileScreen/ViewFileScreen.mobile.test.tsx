import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { runViewFileScreenTests } from '@sharedtest/screens/ViewFileScreen/ViewFileScreen.test';
import { defaultHelpers, renderMobile } from '../../helpers';
import { makeFileProvider } from '@shared/presentation/context/FileContext';
import { ReactInstance } from '@shared/types';
import { defaultScreenPropsMobile } from '../../helpers/index';

const setup = () => ({
	helpers: defaultHelpers,
	render: renderMobile,
	screenProps: defaultScreenPropsMobile,
	rootPath: '/',
	Provider: makeFileProvider(React as ReactInstance)
});

runViewFileScreenTests(setup);
