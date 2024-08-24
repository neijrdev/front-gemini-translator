import { runHomeScreenTests } from '@sharedtest/screens/HomeScreen/HomeScreen.test';
import { render } from '@testing-library/react';
import { sharedComponentsProps } from '@/components/index';

const setup = () => ({
	render,
	sharedComponentProps: sharedComponentsProps,
	rootPath: 'http://localhost/'
});

runHomeScreenTests(setup);
