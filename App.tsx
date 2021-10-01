import React, {useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {pushToScreen} from './src/navigation';

interface AppPropsInterface extends NavigationComponentProps {}

const App = ({componentId}: AppPropsInterface): JSX.Element => {
  useEffect(() => {
    pushToScreen(componentId, 'PostsList');
  }, [componentId]);

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
