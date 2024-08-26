import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { runHomeScreenTests } from '@sharedtest/screens/HomeScreen/HomeScreen.test';
import { sharedComponentsProps } from '@/components/index';
import { Pressable, PressableProps } from 'react-native';
import { expectToHaveProp, renderMobile } from '../../helpers';

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
	expectToHaveProp,
	render: renderMobile,
	sharedComponentProps: customSharedComponentsProps,
	rootPath: '/'
});

runHomeScreenTests(setup);
