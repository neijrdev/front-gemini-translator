import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SharedComponentProps } from '@shared/types';

export const sharedComponentsProps: SharedComponentProps = {
	components: {
		Container: View,
		Text: Text,
		Link,
		Button: Pressable
	}
};
