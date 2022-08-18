/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  Home, Biblioteca, Categorias, AlgoritmoScreen, AllAlgoritmos, Configuration,
} from '../screens';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} options={{ header: () => null }} />
        <Stack.Screen name="biblioteca" component={Biblioteca} />
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
    </NavigationContainer>
  );
}
