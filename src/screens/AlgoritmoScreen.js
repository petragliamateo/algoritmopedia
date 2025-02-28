/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React, { useEffect } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Linked, Title } from '../customComponents/TextComponents';
import Algoritmo from '../components/Algoritmo';
import AlgoritmosContext from '../contexts/AlgoritmosContext';
import SaveButton from '../components/SaveButton';

function AlgoritmoScreen({ props }) {
  const { algoritmos } = React.useContext(AlgoritmosContext);
  const navigation = useNavigation();
  const { algoritmo } = props;
  const index = algoritmos.findIndex((a) => a.post_name === algoritmo.post_name);
  const alg = {
    next: algoritmos[index + 1], prev: algoritmos[index - 1],
  };

  useEffect(() => {
    const setOptions = () => {
      navigation.setOptions({ title: algoritmo.post_title });
    };
    setOptions();
    return () => setOptions();
  }, []);

  return (
    <ScrollView>
      <Title>{algoritmo.post_title}</Title>
      <SaveButton name={algoritmo.post_name} />

      <Algoritmo algoritmo={algoritmo.post_content} guid={algoritmo.guid} />

      {index !== -1 && (
        <View>
          {alg.next && (
          <Pressable
            style={{ marginHorizontal: 15, marginVertical: 10 }}
            onPress={() => navigation.navigate('algoritmo', { algoritmo: alg.next })}
          >
            <Linked>{`→ ${alg.next.post_title}`}</Linked>
          </Pressable>
          )}
          {alg.prev && (
          <Pressable
            style={{ marginHorizontal: 15, marginVertical: 10 }}
            onPress={() => navigation.navigate('algoritmo', { algoritmo: alg.prev })}
          >
            <Linked>{`← ${alg.prev.post_title}`}</Linked>
          </Pressable>
          )}
        </View>
      )}
    </ScrollView>
  );
}

export default AlgoritmoScreen;
