import React from 'react';
import { SharedComponentProps } from '../../types';

export default function AppScreen(sharedComponentProps: SharedComponentProps) {
	const { components: Component } = sharedComponentProps;
	return (
		<Component.Container className="flex min-h-screen flex-1 items-center justify-center flex-col">
			<Component.Text className="text-dark">App</Component.Text>
			<Component.Link className="text-blue-700" href="/home">
				Home
			</Component.Link>
		</Component.Container>
	);
}
