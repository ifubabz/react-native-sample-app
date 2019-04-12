import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Loading from 'screens/Loading';
import AuthNavigator from 'screens/auth/AuthNavigator';
import MainNavigator from 'screens/main/MainNavigator';

const AppNavigator = createSwitchNavigator(
  {
      loading: Loading,
      auth: AuthNavigator,
      main: MainNavigator,
  },
  {
      initialRouteName: 'loading'
  }
);

export default createAppContainer(AppNavigator);