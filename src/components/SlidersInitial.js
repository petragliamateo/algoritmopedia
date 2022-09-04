/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-native/no-inline-styles */
import {
  View, useWindowDimensions, Pressable, Image,
} from 'react-native';
import React from 'react';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import mateo1 from '../../assets/sliders/mateo.png';
import mateo2 from '../../assets/sliders/mateo2.png';
import mateo3 from '../../assets/sliders/mateo3.png';
import Buttoncito from '../customComponents/Buttoncito';

function SlidersInitial({ setFirstTimeData }) {
  const isCarousel = React.useRef(null);
  const [cardIndex, setCardIndex] = React.useState(0);
  const { width } = useWindowDimensions();
  const cardWidth = width - 60;
  const imagenes = [mateo1, mateo2, mateo3];

  // eslint-disable-next-line no-unused-vars
  function renderCard({ item, index }) {
    const cardStyle = {
      width: cardWidth,
      borderRadius: 5,
      alignSelf: 'center',
    };
    return (
      <Pressable
        key={item.name}
        style={cardStyle}
      >
        <Image source={item} style={{ width: cardWidth, height: 450 }} />
      </Pressable>
    );
  }

  return (
    <Pressable
      style={{
        width: '100%', height: '100%', backgroundColor: '#2F7EC8', justifyContent: 'center',
      }}
    >
      <View>
        <Carousel
          layout="default"
          ref={isCarousel}
          data={imagenes}
          renderItem={renderCard}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(i) => setCardIndex(i)}
          slideStyle={{ justifyContent: 'center' }}
        />
        <Pagination
          dotsLength={imagenes.length}
          activeDotIndex={cardIndex}
          carouselRef={isCarousel}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 7.5,
            marginHorizontal: 0,
            backgroundColor: '#ccc',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots
        />
      </View>
      <View style={{ height: 45 }}>
        {cardIndex + 1 === imagenes.length && (
        <Buttoncito
          title="Comenzar!"
          onPress={() => {
            setFirstTimeData();
          }}
          color="#000"
          textColor="#35C82F"
        />
        )}
      </View>
    </Pressable>
  );
}

export default SlidersInitial;
