import {Navigation} from 'react-native-navigation';
import App from '../../App';
import PostsList from './PostsList';
import AddPost from './AddPost';
import ViewPost from './ViewPost';
import TextButton from '../components/TextButton';

const APP = 'App';
const POSTS_LIST = 'PostsList';
const ADD_POST = 'AddPost';
const VIEW_POST = 'ViewPost';
const TEXT_BUTTON = 'TextButton';

interface ScreenItemInterface {
  key: string;
  Screen: () => JSX.Element;
}

export const screens: ScreenItemInterface[] = new Array(
  {
    key: APP,
    Screen: App,
  },
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
  {
    key: TEXT_BUTTON,
    Screen: TextButton,
  },
);

export const registerScreens = (): void => {
  screens.forEach(({key, Screen}) =>
    Navigation.registerComponent(key, () => Screen),
  );
};
