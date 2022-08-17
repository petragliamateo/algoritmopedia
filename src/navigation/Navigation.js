/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  Home, Biblioteca, Copa, Categorias, AlgoritmoScreen, AllAlgoritmos,
} from '../screens';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{ header: () => <Header /> }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="biblioteca" component={Biblioteca} />
        <Stack.Screen name="copa" component={Copa} />
        <Stack.Screen name="categorias">
          {(props) => <Categorias props={props.route.params} />}
        </Stack.Screen>
        <Stack.Screen name="algoritmo">
          {(props) => <AlgoritmoScreen props={props.route.params} />}
        </Stack.Screen>
        <Stack.Screen name="allAlgoritmos">
          {(props) => <AllAlgoritmos props={props.route.params} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
