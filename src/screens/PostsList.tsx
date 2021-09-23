import React, {useEffect} from 'react';
import {
  Navigation,
  NavigationFunctionComponent,
  NavigationComponentProps,
} from 'react-native-navigation';
import {View, Text, StyleSheet} from 'react-native';
import {pushToScreen} from '../navigation';

interface PostsListPropsInterface extends NavigationComponentProps {}

const PostsList = ({
  componentId,
}: PostsListPropsInterface): NavigationFunctionComponent<PostsListPropsInterface> => {
  useEffect(() => {
    const unsubscribe =
      Navigation.events().registerNavigationButtonPressedListener(
        ({buttonId}) => console.log(buttonId),
      );

    return () => {
      unsubscribe.remove();
    };
  }, [componentId]);

  const pressHandler = (): void =>
    pushToScreen(
      componentId,
      'ViewPost',
      {
        somePropsToPass: 'Message',
      },
      {
        topBar: {
          title: {
            text: 'Post1',
          },
        },
      },
    );

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={pressHandler}>
        Posts List
      </Text>
    </View>
  );
};

PostsList.options = ({}) => {
  return {
    topBar: {
      rightButtons: [
        {
          id: 'posts_list.add',
          component: {
            name: 'TextButton',
            passProps: {
              name: 'Add',
            },
          },
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
