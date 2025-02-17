import '@testing-library/jest-native/extend-expect';
import { runHomeScreenTests } from '@sharedtest/screens/HomeScreen/HomeScreen.test';
import { sharedComponentsProps } from '@/components/index';
import { defaultHelpers, renderMobile } from '../../helpers';
import { Link } from '../../mockComponents/Link';

export const customSharedComponentsProps = {
	components: {
		...sharedComponentsProps.components,
		Link
	}
};

const setup = () => ({
	helpers: defaultHelpers,
	render: renderMobile,
	sharedComponentProps: customSharedComponentsProps,
	rootPath: '/'
});

runHomeScreenTests(setup);
