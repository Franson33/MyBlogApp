import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {pushToScreen} from '../navigation';

interface PostsListPropsInterface {
  componentId: string;
}

const PostsList = ({componentId}: PostsListPropsInterface): JSX.Element => {
  const buttonHandler = (): void => pushToScreen(componentId, 'ViewPost');

  return (
    <View>
      <TouchableOpacity onPress={buttonHandler} style={styles.button}>
        <Text>Posts List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
  },
});

export default PostsList;
