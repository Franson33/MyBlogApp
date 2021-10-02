import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {pushToScreen} from '../navigation';

interface TextButtonPropsInterface extends NavigationComponentProps {
  parentId: string;
}

const TextButton = ({parentId}: TextButtonPropsInterface) => {
  const pressHandler = (): void => pushToScreen(parentId, 'AddPost');

  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <Text style={styles.text}>{'Add'}</Text>
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
