import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {PostValueInterface} from '../store/store';
import {pushToScreen} from '../navigation';
import {VIEW_POST} from '../screens/index';

const PostListItem = (id: string, item: PostValueInterface) => {
  const {title, text, image} = item;

  const pressHandler = (): void =>
    pushToScreen(id, VIEW_POST, {
      somePropsToPass: text,
      screenTitle: title,
    });

  return (
    <Text style={styles.container} onPress={pressHandler}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
});

export default PostListItem;
