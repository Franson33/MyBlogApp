import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {pushToScreen} from '../navigation';

interface PostsListPropsInterface {
  componentId: string;
}

const PostsList = ({componentId}: PostsListPropsInterface): JSX.Element => {
  const buttonHandler = (): void =>
    pushToScreen(
      componentId,
      'ViewPost',
      {
        somePropsToPass: 'Message',
      },
      {
        topBar: {
          title: {
            text: 'Post1',
          },
        },
      },
    );

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={buttonHandler}>
        Posts List
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  text: {
    lineHeight: 45,
  },
});

export default PostsList;
