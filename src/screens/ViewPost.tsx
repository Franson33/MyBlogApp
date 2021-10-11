import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {popScreen} from '../navigation';
import {PostValueInterface} from '../store/store';
import {useConnect} from 'remx';
import {postsStore} from '../store/store';
import {deletePost} from '../store/actions';
import {TEXT_BUTTON} from './index';
import {TopBarButtons} from '../topBarButtonsConstants';
import {updateProps, mergeOptions} from '../navigation';

interface ViewPostPropsInterface extends NavigationComponentProps {
  postId: number;
}

const VIewPost = ({
  componentId,
  postId,
}: ViewPostPropsInterface): JSX.Element => {
  const post: PostValueInterface = useConnect(postsStore.getPost, [postId]);

  const {text, image} = post;

  useEffect(() => {
    mergeOptions(componentId, {
      topBar: {
        title: {
          text: post.title,
        },
      },
    });
  }, [post, componentId]);

  useEffect(() => {
    updateProps('viewPost.edit', {
      postToEdit: post,
    });
  }, [post]);

  const deleteHandler = () => {
    deletePost(postId);
    popScreen(componentId);
    Alert.alert('The post was deleted!');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text>{text}</Text>
      <View style={styles.button}>
        <Button title={'Delete'} onPress={deleteHandler} />
      </View>
    </View>
  );
};

VIewPost.options = () => {
  const {EDIT} = TopBarButtons;
  return {
    topBar: {
      rightButtons: [
        {
          component: {
            id: 'viewPost.edit',
            name: TEXT_BUTTON,
            passProps: {
              name: EDIT,
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '80%',
    height: '30%',
  },
  button: {
    width: '80%',
  },
});

export default VIewPost;
