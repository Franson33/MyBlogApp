import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TopBarButtons} from '../topBarButtonsConstants';
import {updateProps} from '../navigation';

const AddPost = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const inputValueHandler = (text: string): void => {
    setInputValue(text);
  };

  useEffect(() => {
    updateProps('addPost.save', {
      enabled: !!inputValue,
    });
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <Text>Add Post</Text>
      <TextInput
        placeholder={'Add your post!'}
        style={styles.input}
        multiline={true}
        value={inputValue}
        onChangeText={inputValueHandler}
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
  input: {
    height: 75,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    textAlignVertical: 'top',
  },
});

export default AddPost;
