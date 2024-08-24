/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { JSXElementConstructor, ReactPortal } from 'react';
import {} from 'tailwindcss'

export type ReactComponent =
	| React.ReactElement<any, string | JSXElementConstructor<any>>
	| Iterable<React.ReactNode>
	| ReactPortal
	| boolean
	| null
	| undefined
	| JSXElementConstructor<any>;

export interface AuxProps {
	children: ReactComponent;
	component: ReactComponent;
	className: string | undefined;
}

export type GenericJSXElement = JSXElementConstructor<any> | string;

export interface SharedComponentProps {
	components: {
		Container: GenericJSXElement;
		Text: GenericJSXElement;
		Link: GenericJSXElement;
		Button: GenericJSXElement;
	};
}
