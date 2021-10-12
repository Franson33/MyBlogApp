import React, {useEffect} from 'react';
import {NavigationComponentProps} from 'react-native-navigation';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text, Colors} from 'react-native-ui-lib';
import {useConnect} from 'remx';
import {updateProps} from '../navigation';
import {TopBarButtons} from '../topBarButtonsConstants';
import * as postsActions from '../store/actions';
import {postsStore} from '../store/store';
import PostListItem from '../components/PostListItem';
import {TEXT_BUTTON} from './index';

interface PostsListPropsInterface extends NavigationComponentProps {}

const PostsList = ({componentId}: PostsListPropsInterface): JSX.Element => {
  const posts = useConnect(postsStore.getPosts, []);

  useEffect(() => {
    updateProps('addPost.save', {
      postsLength: posts?.length,
    });
  }, [posts]);

  useEffect(() => {
    postsActions.fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Text text40 purple20 style={styles.text}>
        Posts List
      </Text>
      <FlatList
        style={styles.list}
        data={posts}
        renderItem={({item}) => PostListItem(componentId, item)}
      />
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
            name: TEXT_BUTTON,
            passProps: {
              name: ADD,
            },
          },
        },
      ],
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: Colors.dark70,
  },
  list: {
    width: '100%',
  },
  text: {
    lineHeight: 45,
  },
});

export default PostsList;
