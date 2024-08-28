import React from 'react';
import { useEffect } from 'react';
import '../../global.css';
import * as SplashScreen from 'expo-splash-screen';
import { makeFileProvider } from '@shared/presentation/context/FileContext';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
	const FileProvider = makeFileProvider(React);

	useEffect(() => {
		SplashScreen.hideAsync();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FileProvider>
				<Slot />
			</FileProvider>
		</SafeAreaView>
	);
}
