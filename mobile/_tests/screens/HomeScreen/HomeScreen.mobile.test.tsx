import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { runHomeScreenTests } from '@sharedtest/screens/HomeScreen/HomeScreen.test';
import { render } from '@testing-library/react-native';
import { sharedComponentsProps } from '@/components/index';
import { Pressable, PressableProps } from 'react-native';

interface CustomPressableProps extends PressableProps {
	'data-testid'?: string;
}

export const customSharedComponentsProps = {
	components: {
		...sharedComponentsProps.components,
		Link: (props: CustomPressableProps) => {
			return (
				<>
					<Pressable {...props} testID={props['data-testid']}>
						{props.children}
					</Pressable>
				</>
			);
		}
	}
};

const setup = () => ({
	expectToHaveProp: (element: unknown, propName: string, propValue: unknown) => {
		expect(element).toHaveProp(propName, propValue);
	},
	render,
	sharedComponentProps: customSharedComponentsProps,
	rootPath: '/'
});

runHomeScreenTests(setup);
