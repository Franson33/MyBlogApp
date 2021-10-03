import React, {useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {setRootWithStack} from './src/navigation';
import {POSTS_LIST} from './src/screens/index';

interface AppPropsInterface extends NavigationComponentProps {}

const App = (): JSX.Element => {
  useEffect(() => {
    setRootWithStack(POSTS_LIST);
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <View />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default App;
