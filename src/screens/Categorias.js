/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { ScrollView, View } from 'react-native';

import { Title } from '../customComponents/TextComponents';
import { Footer } from '../components';
import AlgoritmoContainer from '../containers/AlgoritmoContainer';

function Categorias({ props }) {
  const { title } = props;
  return (
    <ScrollView>
      <Title>
        {`Categoria: ${title}`}
      </Title>

      <AlgoritmoContainer categoria={title} />

      <View style={{ backgroundColor: '#333333', borderTopWidth: 2 }}>
        <Footer />
      </View>
    </ScrollView>
  );
}

export default Categorias;
