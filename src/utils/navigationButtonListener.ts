import {Navigation} from 'react-native-navigation';

interface ListenNavigationButtonInterface {
  button: string;
  action: () => void;
  id: string;
}

export const listenNavigationButton = ({
  button,
  action,
  id,
}: ListenNavigationButtonInterface) => {
  const listener = {
    navigationButtonPressed({buttonId}: any) {
      if (buttonId === button) {
        action();
      }
    },
  };
  const unsubscribe = Navigation.events().registerComponentListener(
    listener,
    id,
  );

  return unsubscribe;
};
