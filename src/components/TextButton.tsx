import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {showModal, closeModal} from '../navigation';

interface TextButtonPropsInterface extends NavigationComponentProps {
  name: string;
}

const TextButton = ({componentId, name}: TextButtonPropsInterface) => {
  console.log(componentId);

  const pressHandler = (): void => showModal('AddPost');

  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    zIndex: 2,
  },
  text: {
    color: '#000',
    lineHeight: 60,
    textAlign: 'center',
  },
});

export default TextButton;
