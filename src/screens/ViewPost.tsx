import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';

interface ViewPostPropsInterface extends NavigationComponentProps {
  somePropsToPass?: string;
  screenTitle?: string;
}

const VIewPost = ({somePropsToPass}: ViewPostPropsInterface): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>View Post</Text>
      <Text>{somePropsToPass}</Text>
    </View>
  );
};

VIewPost.options = ({screenTitle}: ViewPostPropsInterface) => {
  return {
    topBar: {
      title: {
        text: screenTitle,
      },
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
});

export default VIewPost;
