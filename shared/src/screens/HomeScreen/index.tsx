import React from 'react';
import { SharedComponentProps } from '../../types';

export default function HomeScreen(sharedComponentProps: SharedComponentProps) {
	const { components: Component } = sharedComponentProps;
	return (
		<Component.Container className="flex min-h-screen flex-1 items-center justify-center flex-col">
			<Component.Text className="text-dark">Home</Component.Text>
			<Component.Link className="text-blue-700" href="/">
				App
			</Component.Link>
		</Component.Container>
	);
}
