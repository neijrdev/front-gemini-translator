import React from 'react';
import { Pressable, PressableProps } from 'react-native';

interface CustomPressableProps extends PressableProps {
	'data-testid'?: string;
}

export const Link = (props: CustomPressableProps) => {
	return (
		<>
			<Pressable {...props} testID={props['data-testid']}>
				{props.children}
			</Pressable>
		</>
	);
};
