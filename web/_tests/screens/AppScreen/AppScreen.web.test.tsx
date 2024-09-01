/* eslint-disable react/react-in-jsx-scope */
import { AppScreenSetup, runAppScreenTests } from '@sharedtest/screens/AppScreen/AppScreen.test';
import { defaultScreenPropsWeb, defaultSetupTestsWeb } from '../../helpers';
import MockFilePickerButton from '../../mockComponents/MockFilePickerButton';

const appSetupTest: AppScreenSetup = () => ({
	...defaultSetupTestsWeb(),
	screenProps: {
		...defaultSetupTestsWeb().screenProps,
		components: {
			...defaultScreenPropsWeb.components,
			ButtonPicker: MockFilePickerButton
		}
	}
});

runAppScreenTests(appSetupTest);
