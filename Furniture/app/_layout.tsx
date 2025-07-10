import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { useEffect } from 'react';

export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden');
    
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar hidden={true} />
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}