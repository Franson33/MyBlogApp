import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {Colors} from 'react-native-ui-lib';
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
  };

  return (
    <>
      <View nativeID={'viewPostBackground'} style={styles.background} />
      <View style={styles.container}>
        <Image
          nativeID={`image${postId}Dest`}
          style={styles.image}
          source={{uri: image}}
        />
        <View style={styles.textBox}>
          <Text nativeID={`text${postId}Dest`}>{text}</Text>
        </View>
        <View style={styles.button}>
          <Button title={'Delete'} onPress={deleteHandler} />
        </View>
      </View>
    </>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  image: {
    width: '85%',
    height: '40%',
    borderRadius: 5,
    marginBottom: 25,
  },
  textBox: {
    height: '40%',
  },
  button: {
    width: '80%',
    color: Colors.blue60,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '25%',
    backgroundColor: Colors.blue70,
  },
});

export default VIewPost;
