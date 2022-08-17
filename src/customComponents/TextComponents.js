/* eslint-disable no-nested-ternary */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native';
import {
  useFonts, RobotoMono_400Regular, RobotoMono_700Bold, RobotoMono_600SemiBold,
  RobotoMono_400Regular_Italic,
} from '@expo-google-fonts/roboto-mono';
import * as SplashScreen from 'expo-splash-screen';
import * as Linking from 'expo-linking';

SplashScreen.preventAutoHideAsync();

export function Title({ children, style }) {
  const [fontsLoaded] = useFonts({
    RobotoMono_700Bold,
  });
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text
      onLayout={onLayoutRootView}
      style={{
        fontFamily: 'RobotoMono_700Bold',
        fontSize: 32,
        textAlign: 'center',
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export function SubTitle({ children, style }) {
  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
  });
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text
      onLayout={onLayoutRootView}
      style={{
        fontFamily: 'RobotoMono_400Regular',
        fontSize: 28,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export function RegularText({
  children, style, italic, bold,
}) {
  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_400Regular_Italic,
    RobotoMono_700Bold,
  });
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const font = italic
    ? 'RobotoMono_400Regular_Italic'
    : bold ? 'RobotoMono_700Bold' : 'RobotoMono_400Regular';
  return (
    <Text
      onLayout={onLayoutRootView}
      style={{
        fontFamily: font,
        fontSize: 18,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export function Linked({ children, style, to }) {
  const [fontsLoaded] = useFonts({
    RobotoMono_700Bold,
  });
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (to) {
    return (
      <Text
        onLayout={onLayoutRootView}
        style={{
          fontFamily: 'RobotoMono_700Bold', fontSize: 22, color: '#2F7EC8', ...style,
        }}
        onPress={() => Linking.openURL(to)}
      >
        {children}
      </Text>
    );
  }

  return (
    <Text
      onLayout={onLayoutRootView}
      style={{
        fontFamily: 'RobotoMono_700Bold', fontSize: 22, color: '#2F7EC8', ...style,
      }}
    >
      {children}
    </Text>
  );
}

export function MiniText({ children }) {
  const [fontsLoaded] = useFonts({
    RobotoMono_600SemiBold,
  });
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text
      onLayout={onLayoutRootView}
      style={{
        fontFamily: 'RobotoMono_600SemiBold',
        fontSize: 10,
        color: '#6d6d6d',
      }}
    >
      {children}
    </Text>
  );
}
