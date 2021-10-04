import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens/index';
import {registerLoggerForDebug} from 'remx';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'App',
      },
    },
  });

  Navigation.setDefaultOptions({
    topBar: {
      animate: true,
      title: {
        text: 'MyBlog',
        fontSize: 16,
        color: '#000',
        alignment: 'center',
      },
      background: {
        color: '#fff',
      },
      backButton: {
        color: '#000',
      },
    },
    statusBar: {
      style: 'light',
    },
    layout: {
      backgroundColor: '#f0f0f0',
    },
  });
});

registerLoggerForDebug(console.log);
