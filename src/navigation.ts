import {Navigation} from 'react-native-navigation';

export const pushToScreen = (
  id: string,
  screen: string,
  passProps?: any,
  options?: any,
): void => {
  Navigation.push(id, {
    component: {
      name: screen,
      passProps: passProps,
      options: options,
    },
  });
};
