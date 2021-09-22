import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TextButtonPropsInterface {
  name: string;
}

const TextButton = ({name}: TextButtonPropsInterface) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
  },
});

export default TextButton;
