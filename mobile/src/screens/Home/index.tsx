import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreenMobile } from './adapter';

export default function HomeScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<HomeScreenMobile />
		</SafeAreaView>
	);
}
