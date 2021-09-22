/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import {registerScreens} from './src/screens/index';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'PostsList',
            },
          },
        ],
      },
    },
  });
  Navigation.setDefaultOptions({
    statusBar: {
      style: 'dark',
    },
    topBar: {
      animate: true,
      title: {
        text: 'MyBlog',
        fontSize: 16,
        color: '#fff',
        fontStyle: 'italic',
        fontWeight: '600',
      },
      background: {
        color: '#000',
      },
    },
  });
});
