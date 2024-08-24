import Link from 'next/link';
import { SharedComponentProps } from '@shared/types';
import Button from './Button';

export const sharedComponentsProps: SharedComponentProps = {
	components: {
		Container: 'div',
		Text: 'p',
		Link: Link,
		Button: Button
	}
};
