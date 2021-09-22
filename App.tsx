import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import PostsList from './src/screens/PostsList';

interface AppPropsInterface {
  componentId: string;
}

const App = ({componentId}: AppPropsInterface): JSX.Element => {
  return (
    <SafeAreaView style={styles.safe}>
      <PostsList componentId={componentId} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default App;
