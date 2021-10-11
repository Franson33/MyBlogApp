import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {PostValueInterface} from '../store/store';
import {pushToScreen} from '../navigation';
import {VIEW_POST} from '../screens/index';

const PostListItem = (parentComponentId: string, item: PostValueInterface) => {
  const {id, title, image} = item;

  const pressHandler = (): void =>
    pushToScreen(parentComponentId, VIEW_POST, {
      postId: id,
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
