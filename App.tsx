import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import PostsList from './src/screens/PostsList';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.safe}>
      <PostsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default App;
