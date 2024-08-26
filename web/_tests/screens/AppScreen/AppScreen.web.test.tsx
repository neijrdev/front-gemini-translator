/* eslint-disable react/react-in-jsx-scope */
import { runAppScreenTests } from '@sharedtest/screens/AppScreen/AppScreen.test';
import { sharedComponentsProps } from '@/components/index';
import { defaultHelpers, renderWeb } from '../../helpers';
import FilePickerButton from '@/screens/App/components/FilePickerButton';

const appScreenProps = {
	components: {
		...sharedComponentsProps.components,
		ButtonPicker: FilePickerButton
	}
};

const setup = () => ({
	helpers: defaultHelpers,
	render: renderWeb,
	sharedComponentProps: {
		...appScreenProps
	},
	rootPath: 'http://localhost/'
});

runAppScreenTests(setup);
