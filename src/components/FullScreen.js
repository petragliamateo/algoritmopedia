import { useWindowDimensions, View } from 'react-native';
import React from 'react';

function FullScreen({ children, bg }) {
  let { height } = useWindowDimensions();
  height -= 120;
  const backgroundColor = bg;
  return (
    <View style={{ height, backgroundColor }}>
      {children}
    </View>
  );
}

export default FullScreen;
