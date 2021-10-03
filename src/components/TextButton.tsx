import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {showModal, closeModal} from '../navigation';
import {TopBarButtons} from '../topBarButtonsConstants';
import {ADD_POST} from '../screens/index';

interface TextButtonPropsInterface extends NavigationComponentProps {
  name: string;
  enabled?: boolean;
}

const TextButton = ({name, enabled}: TextButtonPropsInterface) => {
  const {ADD, SAVE, CANCEL} = TopBarButtons;

  const pressHandler = (): void | null => {
    switch (name) {
      case ADD:
        return showModal(ADD_POST);
      case CANCEL:
        return closeModal();
      case SAVE:
        return enabled ? console.log('SAVE') : null;
      default:
        return;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={!enabled && name === SAVE ? 1 : 0.5}
      style={styles.container}
      onPress={pressHandler}>
      <Text
        style={[
          styles.text,
          !enabled && name === SAVE
            ? styles.textColorDisabled
            : styles.textColorEnabled,
        ]}>
        {name}
      </Text>
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
    lineHeight: 60,
    textAlign: 'center',
  },
  textColorEnabled: {
    color: '#000',
  },
  textColorDisabled: {
    color: '#747474',
  },
});

export default TextButton;
