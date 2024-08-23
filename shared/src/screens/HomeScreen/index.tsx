import React from 'react';
import { SharedComponentProps } from '../../types';

export default function HomeScreen(sharedComponentProps: SharedComponentProps) {
	const { Container, Text, Link } = sharedComponentProps;
	return (
		<Container className="flex min-h-screen flex-1 items-center justify-center flex-col">
			<Text className="text-dark">Home</Text>
			<Link className="text-blue-700" href="/">
				App
			</Link>
		</Container>
	);
}
