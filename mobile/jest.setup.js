/* eslint-disable no-undef */
import { NativeModules } from 'react-native';
import React from 'react';

NativeModules.PlatformConstants = {
	forceTouchAvailable: false
};

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('expo-router', () => ({
	Link: jest.fn().mockImplementation(({ children, href, ...props }) => {
		return (
			<a {...props} href={href}>
				{children}
			</a>
		);
	})
}));
