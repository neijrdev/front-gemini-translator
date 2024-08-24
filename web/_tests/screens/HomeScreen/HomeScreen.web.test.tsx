import { runHomeScreenTests } from '@sharedtest/screens/HomeScreen/HomeScreen.test';
import { render } from '@testing-library/react';
import { sharedComponentsProps } from '@/components/index';

const setup = () => ({
	expectToHaveProp: (element: unknown, propName: string, propValue: unknown) => {
		// "@ts-expect-error"
		expect(element).toHaveProperty(propName, propValue);
	},
	render,
	sharedComponentProps: {
		...sharedComponentsProps
	},
	rootPath: 'http://localhost/'
});

runHomeScreenTests(setup);
