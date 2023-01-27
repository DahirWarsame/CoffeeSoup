import React from 'react';
import { Text as RNText } from 'react-native';

const Text = ({ children, style, ...props }) => {
  return (
    <RNText
      {...props}
      style={[{ fontFamily: 'Avenir-Next', color: '#fff'}, style]}
    >
      {children}
    </RNText>
  );
};

export default Text;