/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import {
  Home, Categorias, AlgoritmoScreen, AllAlgoritmos, Configuration, AlgoritmosSaved,
} from '../screens';
import NavbarBottom from '../components/NavBarBottom';
import { HomeHeader } from '../components';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const bottomNavHeight = 45;
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
        <Stack.Screen name="Configuración" component={Configuration} />
        <Stack.Screen name="AlgoritmosSaved" options={{ headerTitle: 'Guardados' }}>
          {(props) => <AlgoritmosSaved props={props.route.params} />}
        </Stack.Screen>
      </Stack.Navigator>
      <View style={{ height: bottomNavHeight }} />
      <NavbarBottom height={bottomNavHeight} />
    </NavigationContainer>
  );
}
