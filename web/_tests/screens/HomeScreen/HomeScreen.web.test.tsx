/* eslint-disable react/react-in-jsx-scope */
import { runHomeScreenTests } from '@sharedtest/screens/HomeScreen/HomeScreen.test';
import { sharedComponentsProps } from '@/components/index';
import { defaultHelpers, renderWeb } from '../../helpers';

const setup = () => ({
	helpers: defaultHelpers,
	render: renderWeb,
	sharedComponentProps: {
		...sharedComponentsProps
	},
	rootPath: 'http://localhost/'
});

runHomeScreenTests(setup);
