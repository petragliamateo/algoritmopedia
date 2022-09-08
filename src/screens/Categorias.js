/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RegularText, Title } from '../customComponents/TextComponents';
import AlgoritmoContainer from '../containers/AlgoritmoContainer';

function Categorias({ props }) {
  const navigation = useNavigation();
  const { category } = props;
  const commonStyle = {
    marginVertical: 10,
    textAlign: 'center',
  };

  useEffect(() => {
    const setOptions = () => {
      navigation.setOptions({ title: category.name });
    };
    setOptions();
    return () => setOptions();
  }, []);

  return (
    <ScrollView>
      <Title style={commonStyle}>
        {`Categoria: ${category.name}`}
      </Title>

      <RegularText style={commonStyle}>{category.description}</RegularText>

      <AlgoritmoContainer algoritmoNames={category.childrenNames} />
    </ScrollView>
  );
}

export default Categorias;
