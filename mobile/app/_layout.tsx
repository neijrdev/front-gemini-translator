import { useEffect } from 'react';
import "../global.css"
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App () {

  useEffect(() => {
      SplashScreen.hideAsync();
  }, []);


  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="home" options={{headerShown: false}}/>
    </Stack>
  );
}


