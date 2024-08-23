import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SharedComponentProps } from '@shared/types';

export const sharedComponentsProps: SharedComponentProps = {
	Container: View,
	Text: Text,
	Link: Link,
	Button: Pressable
};
