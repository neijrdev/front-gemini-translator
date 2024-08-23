import { SafeAreaView } from 'react-native-safe-area-context';
import { AppScreenMobile } from './adapter';

export default function AppScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppScreenMobile/>
    </SafeAreaView>
  );
}


