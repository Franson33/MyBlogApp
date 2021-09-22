import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ViewPostPropsInterface {
  componentId: string;
  somePropsToPass?: string;
}

const VIewPost = ({
  componentId,
  somePropsToPass,
}: ViewPostPropsInterface): JSX.Element => {
  console.log(somePropsToPass);

  return (
    <View style={styles.container}>
      <Text>View Post</Text>
      <Text>{somePropsToPass}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
});

export default VIewPost;
