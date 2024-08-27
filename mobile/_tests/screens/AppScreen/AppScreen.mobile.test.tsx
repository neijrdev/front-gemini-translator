import '@testing-library/jest-native/extend-expect';
import { runAppScreenTests } from '@sharedtest/screens/AppScreen/AppScreen.test';
import { sharedComponentsProps } from '@/components/index';
import { defaultHelpers, renderMobile } from '../../helpers';
import { Link } from '../../mockComponents/Link';
import { FileButtonPicker } from '../../mockComponents/FilePickerButton';

export const customSharedComponentsProps = {
	components: {
		...sharedComponentsProps.components,
		Link,
		ButtonPicker: FileButtonPicker
	}
};

const setup = () => ({
	helpers: defaultHelpers,
	render: renderMobile,
	sharedComponentProps: customSharedComponentsProps,
	rootPath: '/'
});

runAppScreenTests(setup);
