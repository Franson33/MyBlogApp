import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Colors, Typography, TextField} from 'react-native-ui-lib';
import {NavigationComponentProps} from 'react-native-navigation';
import {TopBarButtons} from '../topBarButtonsConstants';
import {updateProps, mergeOptions} from '../navigation';
import {PostValueInterface} from '../store/store';
import {TEXT_BUTTON} from './index';

interface PostLocalValueInterface {
  title: string;
  text: string;
}

interface AddPostPropsInterface extends NavigationComponentProps {
  postToEdit?: PostValueInterface;
}

const AddPost = ({
  componentId,
  postToEdit,
}: AddPostPropsInterface): JSX.Element => {
  const screenTitle = postToEdit ? 'Edit Post' : 'Add Post';
  const [inputValue, setInputValue] = useState<PostLocalValueInterface>({
    title: postToEdit?.title ?? '',
    text: postToEdit?.text ?? '',
  });
  const {title, text} = inputValue;

  const inputValueHandler = (newText: string, field: string): void => {
    setInputValue({
      ...inputValue,
      [field]: newText,
    });
  };

  useEffect(() => {
    updateProps('addPost.save', {
      enabled: !!inputValue.text || !!inputValue.title ? true : false,
    });
  }, [inputValue]);

  useEffect(() => {
    updateProps('addPost.save', {
      newPost: {...postToEdit, title, text},
    });
  }, [postToEdit, title, text]);

  useEffect(() => {
    mergeOptions(componentId, {
      topBar: {
        title: {
          text: screenTitle,
        },
      },
    });
  }, [componentId, screenTitle]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{screenTitle}</Text>
      <TextField
        text70
        floatingPlaceholder
        floatOnFocus
        placeholder={'Add a Catchy Title!'}
        containerStyle={styles.inputTitle}
        value={inputValue.title}
        onChangeText={(newValue: string) =>
          inputValueHandler(newValue, 'title')
        }
      />
      <TextField
        text70
        floatingPlaceholder
        floatOnFocus
        placeholder={'This is the beginning of a great post!'}
        style={styles.inputContent}
        multiline={true}
        value={inputValue.text}
        onChangeText={(newValue: string) => inputValueHandler(newValue, 'text')}
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
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.green70,
  },
  title: {
    ...Typography.text40,
    color: Colors.purple10,
    marginBottom: 25,
  },
  inputTitle: {
    borderRadius: 5,
  },
  inputContent: {
    height: 150,
    textAlignVertical: 'top',
    borderRadius: 5,
  },
});

export default AddPost;
