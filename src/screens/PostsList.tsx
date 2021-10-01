import React, {useEffect} from 'react';
import {Navigation, NavigationComponentProps} from 'react-native-navigation';
import {View, Text, StyleSheet} from 'react-native';
import {pushToScreen} from '../navigation';

interface PostsListPropsInterface extends NavigationComponentProps {}

const PostsList = ({componentId}: PostsListPropsInterface): JSX.Element => {
  useEffect(() => {
    const listener = {
      navigationButtonPressed({buttonId}: any) {
        console.log(buttonId);
      },
    };

    const unsubscribe = Navigation.events().registerComponentListener(
      listener,
      componentId,
    );

    return () => {
      unsubscribe.remove();
    };
  }, [componentId]);

  const pressHandler = (): void =>
    pushToScreen(componentId, 'ViewPost', {
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

PostsList.options = {
  topBar: {
    rightButtons: [
      {
        component: {
          name: 'TextButton',
        },
        enabled: true,
      },
    ],
  },
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
