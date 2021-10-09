import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {TopBarButtons} from '../topBarButtonsConstants';
import {updateProps} from '../navigation';
import {PostValueInterface} from '../store/store';
import {TEXT_BUTTON} from './index';

export interface AddPostLocalStateInterface {
  title: string;
  content: string;
}

interface AddPostPropsInterface extends NavigationComponentProps {
  postToEdit?: PostValueInterface;
}

const AddPost = ({postToEdit}: AddPostPropsInterface): JSX.Element => {
  const [inputValue, setInputValue] = useState<AddPostLocalStateInterface>({
    title: postToEdit?.title ?? '',
    content: postToEdit?.text ?? '',
  });

  const inputValueHandler = (text: string, field: string): void => {
    setInputValue({
      ...inputValue,
      [field]: text,
    });
  };

  useEffect(() => {
    updateProps('addPost.save', {
      enabled: !!inputValue.content || !!inputValue.title ? true : false,
    });
  }, [inputValue]);

  useEffect(() => {
    updateProps('addPost.save', {
      newPost: inputValue,
    });
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Post</Text>
      <TextInput
        placeholder={'Add a Catchy Title!'}
        style={styles.inputTitle}
        value={inputValue.title}
        onChangeText={newValue => inputValueHandler(newValue, 'title')}
      />
      <TextInput
        placeholder={'This is the beginning of a great post!'}
        style={styles.inputContent}
        multiline={true}
        value={inputValue.content}
        onChangeText={newValue => inputValueHandler(newValue, 'content')}
      />
    </View>
  );
};

AddPost.options = ({postToEdit}: AddPostPropsInterface) => {
  const {CANCEL, SAVE} = TopBarButtons;
  return {
    topBar: {
      title: {
        text: 'Add post',
      },
      leftButtons: [
        {
          component: {
            name: TEXT_BUTTON,
            passProps: {
              name: CANCEL,
            },
          },
        },
      ],
      rightButtons: [
        {
          id: 'saveButton',
          component: {
            id: 'addPost.save',
            name: TEXT_BUTTON,
            passProps: {
              name: SAVE,
              postToEdit: postToEdit,
            },
          },
        },
      ],
    },
  };
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 10,
  },
  inputTitle: {
    height: 40,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  inputContent: {
    height: 150,
    marginTop: 10,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default AddPost;
