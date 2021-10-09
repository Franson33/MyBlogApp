import React from 'react';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {popScreen} from '../navigation';
import {PostValueInterface} from '../store/store';
import {deletePost} from '../store/actions';
import {TEXT_BUTTON} from './index';
import {TopBarButtons} from '../topBarButtonsConstants';

interface ViewPostPropsInterface extends NavigationComponentProps {
  post: PostValueInterface;
  screenTitle?: string;
}

const VIewPost = ({componentId, post}: ViewPostPropsInterface): JSX.Element => {
  const {id, text, image} = post;

  const deleteHandler = () => {
    deletePost(id);
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

VIewPost.options = ({screenTitle, post}: ViewPostPropsInterface) => {
  const {EDIT} = TopBarButtons;
  return {
    topBar: {
      title: {
        text: screenTitle,
      },
      rightButtons: [
        {
          component: {
            id: 'viewPost.edit',
            name: TEXT_BUTTON,
            passProps: {
              name: EDIT,
              postToEdit: post,
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
