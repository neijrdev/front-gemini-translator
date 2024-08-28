/* eslint-disable no-undef */
module.exports = {
	preset: 'jest-expo',
	testMatch: ['**/_tests/**/*.test.tsx', '**/_tests/**/*.test.ts'],
	transform: {
		'^.+\\.[tj]sx?$': 'babel-jest'
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@shared/(.*)$': '<rootDir>/../shared/src/$1',
		'^@sharedtest/(.*)$': '<rootDir>/../shared/_tests/$1',
		'^react-native$': '<rootDir>/node_modules/react-native',
		'^react-native-css-interop/jsx-runtime$': '<rootDir>/node_modules/react-native-css-interop/jsx-runtime'
	},
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|@react-native|expo|@expo|@unimodules|unimodules|native-base)'
	],
	setupFiles: ['<rootDir>/jest.setup.js'],
	setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect']
};
