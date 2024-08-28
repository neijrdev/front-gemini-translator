import React from 'react';
import { FileViewScreenMobile } from './adapter';
import { makeScreenPropsDefault } from '@/presentation/utils/MakeScreenProps';

export default function FileViewScreen() {
	return <FileViewScreenMobile {...makeScreenPropsDefault()} />;
}
