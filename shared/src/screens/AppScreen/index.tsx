import React from 'react';
import { SharedComponentProps } from '../../types';

export default function AppScreen(sharedComponentProps: SharedComponentProps) {
	const { Container, Text, Link } = sharedComponentProps;
	return (
		<Container className="flex min-h-screen flex-1 items-center justify-center flex-col">
			<Text className="text-dark">App</Text>
			<Link className="text-blue-700" href="/home">
				Home
			</Link>
		</Container>
	);
}
