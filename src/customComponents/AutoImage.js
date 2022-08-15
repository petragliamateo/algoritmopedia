/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, useWindowDimensions } from 'react-native';

export default function RemoteImage({ uri, desiredWidth = null }) {
  const [desiredHeight, setDesiredHeight] = React.useState(0);
  const windowWidth = useWindowDimensions().width;
  const finalWidth = desiredWidth || windowWidth;

  Image.getSize(uri, (width, height) => {
    setDesiredHeight((finalWidth / width) * height);
  });

  return (
    <Image
      source={{ uri }}
      style={{
        borderWidth: 1,
        width: finalWidth,
        height: desiredHeight,
      }}
    />
  );
}
