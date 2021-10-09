import React, {useEffect} from 'react';
import {NavigationComponentProps} from 'react-native-navigation';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useConnect} from 'remx';
import {updateProps} from '../navigation';
import {TopBarButtons} from '../topBarButtonsConstants';
import * as postsActions from '../store/actions';
import {postsStore} from '../store/store';
import PostListItem from '../components/PostListItem';

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
      <Text style={styles.text}>Posts List</Text>
      <FlatList
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
    alignItems: 'center',
  },
  text: {
    lineHeight: 45,
  },
});

export default PostsList;
