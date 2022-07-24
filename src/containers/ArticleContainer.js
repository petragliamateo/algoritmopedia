/* eslint-disable react/no-array-index-key */
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SubTitle } from '../customComponents/TextComponents';
import Article from '../components/Article';

const styles = StyleSheet.create({
  items: {
    marginVertical: 15,
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 15,
    backgroundColor: '#ccc',
    padding: 12,
  },
});

function ArticleContainer({ lista }) {
  return (
    <View>
      {lista.map((item) => (
        <View key={item.id} style={styles.items}>
          <SubTitle style={styles.subtitle}>
            {item.title}
          </SubTitle>
          {item.content.map((art, i) => (
            <Article data={art} key={i} />
          ))}
        </View>
      ))}

    </View>
  );
}

export default ArticleContainer;
