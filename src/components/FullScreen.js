import { useWindowDimensions, View } from 'react-native';
import React from 'react';

function FullScreen({ children, bg, deltaHeight = 0 }) {
  let { height } = useWindowDimensions();
  height -= deltaHeight;
  const backgroundColor = bg;
  return (
    <View style={{ height, backgroundColor }}>
      {children}
    </View>
  );
}

export default FullScreen;
