import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Text} from 'react-native-ui-lib';
import {PostValueInterface} from '../store/store';
import {pushToScreen} from '../navigation';
import {VIEW_POST} from '../screens/index';

const PostListItem = (parentComponentId: string, item: PostValueInterface) => {
  const {id, title, text, image} = item;

  const pressHandler = (): void =>
    pushToScreen(
      parentComponentId,
      VIEW_POST,
      {
        postId: id,
      },
      {
        animations: {
          push: {
            sharedElementTransitions: {
              fromId: `image${id}`,
              toId: `image${id}Dest`,
              interpolation: {type: 'linear'},
            },
          },
        },
      },
    );

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={pressHandler}>
      <Image
        nativeID={`image${id}`}
        style={styles.image}
        source={{uri: image}}
      />
      <View style={styles.textBox}>
        <Text text70>{title}</Text>
        <Text text90 numberOfLines={1} style={styles.content}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: 65,
    paddingVertical: 5,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 5,
  },
  textBox: {
    justifyContent: 'space-evenly',
    width: '100%',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.purple50,
  },
  content: {
    width: '80%',
    paddingRight: 5,
  },
});

export default PostListItem;
