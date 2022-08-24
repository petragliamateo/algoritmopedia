/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RegularText, Title } from '../customComponents/TextComponents';
import { Footer } from '../components';
import AlgoritmoContainer from '../containers/AlgoritmoContainer';

function Categorias({ props }) {
  const navigation = useNavigation();
  const { category } = props;
  const commonStyle = {
    marginVertical: 10,
    textAlign: 'center',
  };
  navigation.setOptions({ title: category.name });

  return (
    <ScrollView>
      <Title style={commonStyle}>
        {`Categoria: ${category.name}`}
      </Title>

      <RegularText style={commonStyle}>{category.description}</RegularText>

      <AlgoritmoContainer algoritmoNames={category.childrenNames} />

      <Footer />
    </ScrollView>
  );
}

export default Categorias;
