import React from 'react';
import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { ReactInstance, ScreenProps } from '@shared/types';
import { Navigation } from '@shared/presentation/navigation';
import { ExpoRouterNavigation } from '../navigation/Navigation';

export const sharedComponentsProps: ScreenProps = {
	components: {
		Container: View,
		Text: Text,
		Link,
		Button: Pressable
	},
	react: React as ReactInstance,
	navigation: undefined
};

export function makeScreenPropsDefault(navigation: Navigation = new ExpoRouterNavigation()) {
	const appScreenProps: ScreenProps = {
		...sharedComponentsProps,
		navigation
	};

	return appScreenProps;
}
