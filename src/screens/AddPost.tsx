import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TopBarButtons} from '../topBarButtonsConstants';
import {updateProps} from '../navigation';

interface AddPostLocalStateInterface {
  title: string;
  content: string;
}

const AddPost = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<AddPostLocalStateInterface>({
    title: '',
    content: '',
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

  return (
    <View style={styles.container}>
      <Text>Add Post</Text>
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

AddPost.options = () => {
  const {CANCEL, SAVE} = TopBarButtons;
  return {
    topBar: {
      title: {
        text: 'Add post',
      },
      leftButtons: [
        {
          component: {
            name: 'TextButton',
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
            name: 'TextButton',
            passProps: {
              name: SAVE,
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
  inputTitle: {
    height: 35,
    marginTop: 10,
    borderTopWidth: 1,
    borderBottomColor: '#000',
  },
  inputContent: {
    height: 75,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    textAlignVertical: 'top',
  },
});

export default AddPost;
