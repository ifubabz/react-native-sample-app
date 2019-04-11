import { createSwitchNavigator } from 'react-navigation';
import Splash from 'screens/intro/Splash';
import AuthNavigator from 'screens/intro/auth/AuthNavigator';

const IntroNavigator = createSwitchNavigator({
    splash: {
      screen: Splash,
      navigationOptions: () => ({
        header: null
      })
    },
    authNavi: {
        screen : AuthNavigator
    }
}, {
    initialRouteName: 'splash'
});
  
export default IntroNavigator;