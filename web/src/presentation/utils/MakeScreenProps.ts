import React from 'react';
import Link from 'next/link';
import { ReactInstance, ScreenProps } from '@shared/types';
import Button from '@/components/Button';
import { Navigation } from '@shared/presentation/navigation';
import { NextJsNavigation } from '../navigation/Navigation';

export const sharedComponentsProps: ScreenProps = {
	components: {
		Container: 'div',
		Text: 'p',
		Link: Link,
		Button: Button
	},
	react: React as ReactInstance,
	navigation: undefined
};

export function makeScreenPropsDefault(navigation: Navigation = new NextJsNavigation()) {
	const appScreenProps: ScreenProps = {
		...sharedComponentsProps,
		navigation
	};

	return appScreenProps;
}
