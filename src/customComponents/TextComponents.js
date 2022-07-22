/* eslint-disable no-nested-ternary */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native';
import {
  useFonts, RobotoMono_400Regular, RobotoMono_700Bold, RobotoMono_600SemiBold,
  RobotoMono_400Regular_Italic,
} from '@expo-google-fonts/roboto-mono';

export function Title({ children }) {
  useFonts({
    RobotoMono_700Bold,
  });
  return (
    <Text
      style={{
        fontFamily: 'RobotoMono_700Bold',
        fontSize: 32,
        textAlign: 'center',
      }}
    >
      {children}
    </Text>
  );
}

export function SubTitle({ children }) {
  useFonts({
    RobotoMono_400Regular,
  });
  return (
    <Text
      style={{
        fontFamily: 'RobotoMono_400Regular',
        fontSize: 28,
      }}
    >
      {children}
    </Text>
  );
}

export function RegularText({
  children, style, italic, bold,
}) {
  useFonts({
    RobotoMono_400Regular,
    RobotoMono_400Regular_Italic,
    RobotoMono_700Bold,
  });
  const font = italic
    ? 'RobotoMono_400Regular_Italic'
    : bold ? 'RobotoMono_700Bold' : 'RobotoMono_400Regular';
  return (
    <Text
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

export function Linked({ children }) {
  useFonts({
    RobotoMono_700Bold,
  });
  return (
    <Text
      style={{
        fontFamily: 'RobotoMono_700Bold',
        fontSize: 22,
        color: '#2F7EC8',
      }}
    >
      {children}
    </Text>
  );
}

export function MiniText({ children }) {
  useFonts({
    RobotoMono_600SemiBold,
  });
  return (
    <Text
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
