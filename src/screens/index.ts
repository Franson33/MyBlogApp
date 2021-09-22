import {Navigation} from 'react-native-navigation';
import PostsList from './PostsList';
import AddPost from './AddPost';
import ViewPost from './ViewPost';

const POSTS_LIST = 'PostsList';
const ADD_POST = 'AddPost';
const VIEW_POST = 'ViewPost';

interface ScreenItemInterface {
  key: string;
  Screen: () => JSX.Element;
}

export const screens: ScreenItemInterface[] = new Array(
  {
    key: POSTS_LIST,
    Screen: PostsList,
  },
  {
    key: ADD_POST,
    Screen: AddPost,
  },
  {
    key: VIEW_POST,
    Screen: ViewPost,
  },
);

export const registerScreens = (): void => {
  screens.forEach(({key, Screen}) =>
    Navigation.registerComponent(key, () => Screen),
  );
};
