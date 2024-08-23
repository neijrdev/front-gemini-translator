import React from 'react';
import { useEffect } from 'react';
import '../../global.css';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Slot } from 'expo-router';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
	useEffect(() => {
		SplashScreen.hideAsync();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Slot />
		</SafeAreaView>
	);
}
