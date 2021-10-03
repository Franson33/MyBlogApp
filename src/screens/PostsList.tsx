import React from 'react';
import {NavigationComponentProps} from 'react-native-navigation';
import {View, Text, StyleSheet} from 'react-native';
import {pushToScreen} from '../navigation';
import {TopBarButtons} from '../topBarButtonsConstants';
import {VIEW_POST} from './index';

interface PostsListPropsInterface extends NavigationComponentProps {}

const PostsList = ({componentId}: PostsListPropsInterface): JSX.Element => {
  const pressHandler = (): void =>
    pushToScreen(componentId, VIEW_POST, {
      somePropsToPass: 'Message',
      screenTitle: 'Post1',
    });

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={pressHandler}>
        Posts List
      </Text>
    </View>
  );
};

PostsList.options = () => {
  const {ADD} = TopBarButtons;
  return {
    topBar: {
      rightButtons: [
        {
          component: {
            id: 'app.addButton',
            name: 'TextButton',
            passProps: {
              name: ADD,
            },
          },
          enabled: false,
        },
      ],
    },
  };
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  text: {
    lineHeight: 45,
  },
});

export default PostsList;
