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

export const popScreen = (id: string) => {
  Navigation.pop(id);
};

export const setRootWithStack = (homeScreen: string): void => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: homeScreen,
            },
          },
        ],
      },
    },
  });
};

export const showModal = (screen: string) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: screen,
          },
        },
      ],
    },
  });
};

export const closeModal = () => {
  Navigation.dismissAllModals();
};

export const updateProps = (id: string, propsObj: any) => {
  Navigation.updateProps(id, propsObj);
};
