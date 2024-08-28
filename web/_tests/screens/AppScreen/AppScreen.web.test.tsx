/* eslint-disable react/react-in-jsx-scope */
import { runAppScreenTests } from '@sharedtest/screens/AppScreen/AppScreen.test';
import { defaultScreenPropsWeb, defaultSetupTestsWeb } from '../../helpers';
import FilePickerButton from '@/screens/App/components/FilePickerButton';

const appSetupTest = () => ({
	...defaultSetupTestsWeb(),
	sharedComponentProps: {
		...defaultSetupTestsWeb().sharedComponentProps,
		components: {
			...defaultScreenPropsWeb.components,
			ButtonPicker: FilePickerButton
		}
	}
});

runAppScreenTests(appSetupTest);
