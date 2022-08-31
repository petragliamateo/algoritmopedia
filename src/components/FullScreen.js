import { useWindowDimensions, View } from 'react-native';
import React from 'react';

function FullScreen({ children, bg, deltaHeight = 0 }) {
  let { height } = useWindowDimensions();
  height -= (60 + 45 + deltaHeight);
  const backgroundColor = bg;
  return (
    <View style={{ height, backgroundColor }}>
      {children}
    </View>
  );
}

export default FullScreen;
