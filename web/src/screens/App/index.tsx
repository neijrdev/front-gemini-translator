'use client';

import React from 'react';
import { AppScreenWeb } from './adapter';
import { AppScreenProps } from '@shared/presentation/screens/AppScreen';

export default function App({ ...props }: AppScreenProps) {
	return <AppScreenWeb {...props} />;
}
