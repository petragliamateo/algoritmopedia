/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-native/no-inline-styles */
import {
  View, useWindowDimensions, Pressable,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { SubTitle, RegularText } from '../customComponents/TextComponents';

function CarouselCards({ categorias }) {
  const isCarousel = React.useRef(null);
  const [cardIndex, setCardIndex] = React.useState(0);
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const cardWidth = width - 60;
  // Largo de la targeta = windowWidth - marginX * 2 - paddingCont * 2.

  // eslint-disable-next-line no-unused-vars
  function renderCard({ item, index }) {
    const cardStyle = {
      width: cardWidth,
      padding: 20,
      borderWidth: 1,
      borderRadius: 5,
      alignSelf: 'center',
    };
    const commonTextCard = {
      color: '#ffffff',
      textAlign: 'center',
      marginVertical: 15,
    };
    return (
      <Pressable
        key={item.name}
        style={cardStyle}
        onPress={() => navigation.navigate('categorias', { category: item })}
      >
        <SubTitle style={commonTextCard}>{item.name}</SubTitle>
        <RegularText style={commonTextCard}>{item.description}</RegularText>
      </Pressable>
    );
  }

  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={categorias}
        renderItem={renderCard}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(i) => setCardIndex(i)}
        slideStyle={{ justifyContent: 'center' }}
      />
      <Pagination
        dotsLength={categorias.length}
        activeDotIndex={cardIndex}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#ccc',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots
      />
    </View>
  );
}

export default CarouselCards;
