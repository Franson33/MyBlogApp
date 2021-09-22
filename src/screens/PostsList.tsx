import React, {useEffect} from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, StyleSheet} from 'react-native';
import {pushToScreen} from '../navigation';

interface PostsListPropsInterface {
  componentId: string;
}

const PostsList = ({componentId}: PostsListPropsInterface): JSX.Element => {
  useEffect(() => {
    const listener = {
      componentDidAppear: () => {
        console.log('RNN', `componentDidAppear`);
      },
      componentDidDisappear: () => {
        console.log('RNN', `componentDidDisappear`);
      },
    };
    const unsubscribe = Navigation.events().registerComponentListener(
      listener,
      componentId,
    );
    return () => {
      unsubscribe.remove();
    };
  }, [componentId]);

  const pressHandler = (): void =>
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
      <Text style={styles.text} onPress={pressHandler}>
        Posts List
      </Text>
    </View>
  );
};

PostsList.options = {
  topBar: {
    rightButtons: [
      {
        id: 'posts_list.add',
        component: {
          name: 'TextButton',
          passProps: {
            name: 'Add',
          },
        },
      },
    ],
  },
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
