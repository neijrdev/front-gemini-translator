import React from 'react';
import { ReactNode } from 'react';

type buttonTypeProps = {
	onPress: () => void;
	children: ReactNode;
};
export default function Button({ onPress, children, ...props }: buttonTypeProps) {
	return (
		<button onClick={onPress} {...props}>
			{children}
		</button>
	);
}
