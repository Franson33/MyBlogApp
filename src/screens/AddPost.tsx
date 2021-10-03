import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TopBarButtons} from '../topBarButtonsConstants';

const AddPost = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Add Post</Text>
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
          enabled: true,
        },
      ],
      rightButtons: [
        {
          component: {
            name: 'TextButton',
            passProps: {
              name: SAVE,
            },
          },
          enabled: true,
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
});

export default AddPost;
