import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {showModal, closeModal} from '../navigation';
import {TopBarButtons} from '../topBarButtonsConstants';
import {ADD_POST} from '../screens/index';
import * as postsActions from '../store/actions';
import {AddPostLocalStateInterface} from '../screens/AddPost';
import {PostValueInterface} from '../store/store';

interface TextButtonPropsInterface extends NavigationComponentProps {
  name: string;
  enabled?: boolean;
  postsLength?: number;
  newPost?: AddPostLocalStateInterface;
  postToEdit?: PostValueInterface;
}

const TextButton = ({
  name,
  enabled,
  postsLength,
  newPost,
  postToEdit,
}: TextButtonPropsInterface) => {
  const {ADD, SAVE, CANCEL, EDIT} = TopBarButtons;

  const saveHandler = () => {
    const randomImageNumber = Math.floor(Math.random() * 500 + 1);
    !!postToEdit
      ? postsActions.updatePost(newPost)
      : postsActions.addPost({
          id: (postsLength ?? 0) + 1,
          title: newPost?.title ?? '',
          text: newPost?.text ?? '',
          image: `https://picsum.photos/200/200/?image=${randomImageNumber}`,
        });
    postsActions.fetchPosts();
    closeModal();
    Alert.alert(postToEdit ? 'The changes is saved!' : 'The post is saved!');
  };

  const pressHandler = (): void | null => {
    switch (name) {
      case ADD:
        return showModal(ADD_POST);
      case CANCEL:
        return closeModal();
      case SAVE:
        return enabled ? saveHandler() : null;
      case EDIT:
        return showModal(ADD_POST, {
          postToEdit: postToEdit,
        });
      default:
        return;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={!enabled && name === SAVE ? 1 : 0.5}
      style={styles.container}
      onPress={pressHandler}>
      <Text
        style={[
          styles.text,
          !enabled && name === SAVE
            ? styles.textColorDisabled
            : styles.textColorEnabled,
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    zIndex: 2,
  },
  text: {
    lineHeight: 60,
    textAlign: 'center',
  },
  textColorEnabled: {
    color: '#000',
  },
  textColorDisabled: {
    color: '#888787',
  },
});

export default TextButton;
