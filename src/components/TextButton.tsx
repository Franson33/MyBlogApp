import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {showModal, closeModal} from '../navigation';
import {TopBarButtons} from '../topBarButtonsConstants';
import {ADD_POST} from '../screens/index';

interface TextButtonPropsInterface extends NavigationComponentProps {
  name: string;
}

const TextButton = ({name}: TextButtonPropsInterface) => {
  const {ADD, SAVE, CANCEL} = TopBarButtons;

  const pressHandler = (): void => {
    switch (name) {
      case ADD:
        return showModal(ADD_POST);
      case CANCEL:
        return closeModal();
      case SAVE:
        return;
      default:
        return;
    }
  };

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
