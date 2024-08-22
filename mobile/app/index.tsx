import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function AppScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View  className="flex-1 items-center justify-center bg-white">
        <Text >App</Text>
        <Link className="text-blue-700" href="/home">Home</Link>
      </View>
    </SafeAreaView>
  );
}


