/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigation } from '@/presentation/navigation';
import React, { JSXElementConstructor, ReactPortal } from 'react';
import type { ReactTestInstance } from 'react-test-renderer';

export type ReactComponent =
	| React.ReactElement<any, string | JSXElementConstructor<any>>
	| Iterable<React.ReactNode>
	| ReactPortal
	| boolean
	| null
	| undefined
	| JSXElementConstructor<any>
	| HTMLElement;

export type ReactComponentTest =
	| React.ReactElement<any, string | JSXElementConstructor<any>>
	| Iterable<React.ReactNode>
	| ReactPortal
	| boolean
	| null
	| undefined
	| JSXElementConstructor<any>
	| HTMLElement
	| ReactTestInstance;

export interface AuxProps {
	children: ReactComponent;
	component: ReactComponent;
	className: string | undefined;
}

export type GenericJSXElement = JSXElementConstructor<any> | string;

export type ReactInstance = typeof React;

export interface ScreenProps {
	components: {
		Container: GenericJSXElement;
		Text: GenericJSXElement;
		Link: GenericJSXElement;
		Button: GenericJSXElement;
	};
	react: ReactInstance;
	navigation: Navigation;
}
