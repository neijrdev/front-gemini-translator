'use client';

import React from 'react';
import { FileViewScreenWeb } from './adapter';
import { ScreenProps } from '@shared/types';

export default function FileView({ ...props }: ScreenProps) {
	return <FileViewScreenWeb {...props} />;
}
