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
    topBar: {
      animate: true,
      title: {
        text: 'MyBlog',
        fontSize: 16,
        color: '#fff',
        alignment: 'center',
      },
      background: {
        color: '#000',
      },
      backButton: {
        color: '#fff',
      },
    },
    statusBar: {
      style: 'light',
    },
    layout: {
      fitSystemWindows: 'true',
      backgroundColor: '#f0f0f0',
    },
  });
});
