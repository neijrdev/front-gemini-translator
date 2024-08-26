import '@testing-library/jest-native/extend-expect';
import { runAppScreenTests } from '@sharedtest/screens/AppScreen/AppScreen.test';
import { sharedComponentsProps } from '@/components/index';
import { defaultHelpers, renderMobile } from '../../helpers';
import ButtonPicker from '@/screens/App/components/FilePickerButton';
import { Link } from '../../mockComponents/Link';

export const customSharedComponentsProps = {
	components: {
		...sharedComponentsProps.components,
		Link,
		ButtonPicker
	}
};

const setup = () => ({
	helpers: defaultHelpers,
	render: renderMobile,
	sharedComponentProps: customSharedComponentsProps,
	rootPath: '/'
});

runAppScreenTests(setup);
