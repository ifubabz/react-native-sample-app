import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import IntroNavigator from 'screens/intro/IntroNavigator';
import MainNavigator from 'screens/main/MainNavigator';

const AppNavigator = createSwitchNavigator(
  {
      intro: IntroNavigator,
      main: MainNavigator,
  },
  {
      initialRouteName: 'intro'
  }
);

export default createAppContainer(AppNavigator);