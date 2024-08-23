import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 min-h-screen items-center justify-center bg-white">
        <Text className="text-red">Home</Text>
        <Link className="text-blue-700" href="/">Index</Link>
      </View>
    </SafeAreaView>
  );
}

