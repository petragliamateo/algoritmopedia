/* eslint-disable react-native/no-inline-styles */
import {
  Text, View, StyleSheet, ScrollView, useWindowDimensions,
} from 'react-native';
import React from 'react';

import { SubTitle, Title } from '../customComponents/TextComponents';

import MainScreen from '../containers/MainScreen';

const styles = StyleSheet.create({
  horizontalScroller: {
    height: 80,
    backgroundColor: '#cccccc',
  },
});

function Home() {
  let { height } = useWindowDimensions();
  height -= 60;
  return (
    <ScrollView>
      <View style={{ height }}>
        <MainScreen />
      </View>

      <View style={{ height, backgroundColor: '#2F7EC8' }}>
        <Title><Text style={{ color: '#ffffff' }}>📝 Categorías</Text></Title>
      </View>

      <View>
        <SubTitle><Text>Últimos Algoritmos</Text></SubTitle>
        <ScrollView horizontal style={styles.horizontalScroller}>
          <View><SubTitle><Text>-Algoritmo 1-</Text></SubTitle></View>
          <View><SubTitle><Text>-Algoritmo 2-</Text></SubTitle></View>
          <View><SubTitle><Text>-Algoritmo 3-</Text></SubTitle></View>
          <View><SubTitle><Text>-Algoritmo 4-</Text></SubTitle></View>
          <View><SubTitle><Text>-Algoritmo 5-</Text></SubTitle></View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default Home;
