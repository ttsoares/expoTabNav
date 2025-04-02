import { Stack } from 'expo-router/stack';
import { StatusBar } from 'react-native';
import React from 'react';

export default function Layout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
