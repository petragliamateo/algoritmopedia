/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  Home, Biblioteca, Copa, Categorias, AlgoritmoScreen,
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
        <Stack.Screen name="categorias" component={(props) => <Categorias props={props.route.params} />} />
        <Stack.Screen name="algoritmo" component={(props) => <AlgoritmoScreen props={props.route.params} />} />
        <Stack.Screen name="allAlgoritmos" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
