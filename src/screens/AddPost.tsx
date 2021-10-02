import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddPost = (): JSX.Element => {
  return (
    <View>
      <Text>Add Post</Text>
    </View>
  );
};

AddPost.options = () => {
  return {
    topBar: {
      title: {
        text: 'Add post',
      },
      leftButtons: [
        {
          id: 'addPost.cancelButton',
          component: {
            name: 'TextButton',
            passProps: {
              name: 'Cancel',
            },
          },
          enabled: true,
        },
      ],
      rightButtons: [
        {
          id: 'addPost.saveButton',
          component: {
            name: 'TextButton',
            passProps: {
              name: 'Save',
            },
          },
          enabled: true,
        },
      ],
    },
  };
};

const styles = StyleSheet.create({});

export default AddPost;
