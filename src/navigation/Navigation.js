/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

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
        <Stack.Screen name="categorias" options={{ header: () => null }}>
          {(props) => <Categorias props={props.route.params} />}
        </Stack.Screen>
        <Stack.Screen name="algoritmo" options={{ header: () => null }}>
          {(props) => <AlgoritmoScreen props={props.route.params} />}
        </Stack.Screen>
        <Stack.Screen name="allAlgoritmos" options={{ header: () => null }}>
          {(props) => <AllAlgoritmos props={props.route.params} />}
        </Stack.Screen>
        <Stack.Screen name="configuration" component={Configuration} />
      </Stack.Navigator>
      <NavbarBottom />
    </NavigationContainer>
  );
}
