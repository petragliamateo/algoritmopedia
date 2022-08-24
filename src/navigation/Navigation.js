/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import {
  Home, Categorias, AlgoritmoScreen, AllAlgoritmos, Configuration,
} from '../screens';
import NavbarBottom from '../components/NavBarBottom';
import { HomeHeader } from '../components';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} options={{ header: () => <HomeHeader /> }} />
        <Stack.Screen name="categorias">
          {(props) => <Categorias props={props.route.params} />}
        </Stack.Screen>
        <Stack.Screen name="algoritmo">
          {(props) => <AlgoritmoScreen props={props.route.params} />}
        </Stack.Screen>
        <Stack.Screen name="allAlgoritmos" options={{ header: () => null }}>
          {(props) => <AllAlgoritmos props={props.route.params} />}
        </Stack.Screen>
        <Stack.Screen name="configuration" component={Configuration} />
      </Stack.Navigator>
      <View style={{ height: 60 }} />
      <NavbarBottom />
    </NavigationContainer>
  );
}
