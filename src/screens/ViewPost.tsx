import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {popScreen} from '../navigation';

interface ViewPostPropsInterface extends NavigationComponentProps {
  somePropsToPass?: string;
  screenTitle?: string;
}

const VIewPost = ({
  componentId,
  somePropsToPass,
}: ViewPostPropsInterface): JSX.Element => {
  const deleteHandler = () => {
    popScreen(componentId);
    Alert.alert('The post was deleted!');
  };

  return (
    <View style={styles.container}>
      <Text>View Post</Text>
      <Text>{somePropsToPass}</Text>
      <Button title={'Delete'} onPress={deleteHandler} />
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
