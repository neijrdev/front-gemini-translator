/* eslint-disable react/react-in-jsx-scope */
import { runHomeScreenTests } from '@sharedtest/screens/HomeScreen/HomeScreen.test';
import { sharedComponentsProps } from '@/components/index';
import { expectToHaveProp, renderWeb } from '../../helpers';

const setup = () => ({
	expectToHaveProp,
	render: renderWeb,
	sharedComponentProps: {
		...sharedComponentsProps
	},
	rootPath: 'http://localhost/'
});

runHomeScreenTests(setup);
