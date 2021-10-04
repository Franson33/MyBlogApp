import React, {useEffect} from 'react';
import {NavigationComponentProps} from 'react-native-navigation';
import {View, Text, StyleSheet} from 'react-native';
import {useConnect} from 'remx';
import {pushToScreen} from '../navigation';
import {TopBarButtons} from '../topBarButtonsConstants';
import {VIEW_POST} from './index';
import * as postsActions from '../store/actions';
import {postsStore} from '../store/store';

interface PostsListPropsInterface extends NavigationComponentProps {}

const PostsList = ({componentId}: PostsListPropsInterface): JSX.Element => {
  const pressHandler = (): void =>
    pushToScreen(componentId, VIEW_POST, {
      somePropsToPass: 'Message',
      screenTitle: 'Post1',
    });

  const posts = useConnect(postsStore.getPosts, []);

  useEffect(() => {
    postsActions.fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={pressHandler}>
        Posts List
      </Text>
      <Text>{JSON.stringify(posts)}</Text>
    </View>
  );
};

PostsList.options = () => {
  const {ADD} = TopBarButtons;
  return {
    topBar: {
      rightButtons: [
        {
          component: {
            id: 'app.addButton',
            name: 'TextButton',
            passProps: {
              name: ADD,
            },
          },
          enabled: false,
        },
      ],
    },
  };
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
