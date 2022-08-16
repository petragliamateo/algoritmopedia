/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { RegularText } from './TextComponents';

export default function Buttoncito({ onPress, title, color = '#2F7EC8' }) {
  const [loading, setLoading] = React.useState(false);
  const loadData = async () => {
    setLoading(true);
    await onPress();
    setLoading(false);
  };
  const contStyle = {
    display: 'flex',
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '100%',
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  };
  return (
    <TouchableOpacity style={contStyle} onPress={loadData} activeOpacity={0.4}>
      {loading ? (
        <ActivityIndicator animating={loading} size="large" />
      ) : (
        <RegularText style={{ color: '#fff', fontSize: 15 }} bold>
          {title}
        </RegularText>
      )}
    </TouchableOpacity>
  );
}
