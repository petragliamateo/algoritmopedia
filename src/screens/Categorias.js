/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { ScrollView } from 'react-native';

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

      <Footer />
    </ScrollView>
  );
}

export default Categorias;
