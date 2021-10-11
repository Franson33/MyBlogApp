import React, {useEffect} from 'react';
import {NavigationComponentProps} from 'react-native-navigation';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text, Colors} from 'react-native-ui-lib';
import {useConnect} from 'remx';
import {updateProps, pushToScreen} from '../navigation';
import {TopBarButtons} from '../topBarButtonsConstants';
import * as postsActions from '../store/actions';
import {postsStore, PostValueInterface} from '../store/store';
import PostListItem from '../components/PostListItem';
import {TEXT_BUTTON, VIEW_POST} from './index';

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

  const renderItem = (parentComponentId: string, item: PostValueInterface) => {
    const {id, title, text, image} = item;

    const pressHandler = (): void =>
      pushToScreen(
        parentComponentId,
        VIEW_POST,
        {
          postId: id,
        },
        {
          animations: {
            push: {
              sharedElementTransitions: [
                {
                  fromId: `image${id}`,
                  toId: `image${id}Dest`,
                  interpolation: {type: 'linear'},
                },
              ],
            },
          },
        },
      );

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={pressHandler}>
        <Image
          nativeID={`image${id}`}
          style={styles.image}
          source={{uri: image}}
        />
        <View style={styles.textBox}>
          <Text text70>{title}</Text>
          <Text text90 numberOfLines={1} style={styles.content}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text text40 purple20 style={styles.text}>
        Posts List
      </Text>
      <FlatList
        style={styles.list}
        data={posts}
        renderItem={({item}) => renderItem(componentId, item)}
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
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  text: {
    lineHeight: 45,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: 65,
    paddingVertical: 5,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 5,
  },
  textBox: {
    justifyContent: 'space-evenly',
    width: '100%',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.purple50,
  },
  content: {
    width: '80%',
    paddingRight: 5,
  },
});

export default PostsList;
