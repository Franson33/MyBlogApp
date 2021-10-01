import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import PostsList from './src/screens/PostsList';

interface AppPropsInterface extends NavigationComponentProps {}

const App = ({componentId}: AppPropsInterface): JSX.Element => {
  return (
    <SafeAreaView style={styles.safe}>
      <PostsList componentId={componentId} />
    </SafeAreaView>
  );
};

App.options = ({componentId}: any) => {
  return {
    topBar: {
      rightButtons: [
        {
          id: 'app.addButton',
          component: {
            name: 'TextButton',
            passProps: {
              name: 'Add',
              parentId: componentId,
            },
          },
        },
      ],
    },
  };
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default App;
