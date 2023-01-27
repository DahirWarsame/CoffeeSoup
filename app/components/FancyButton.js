import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FancyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#ffc107',
    margin:12,
    padding: 20,
    borderRadius: 50,
    alignSelf: 'center',
    width: '80%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default FancyButton;
