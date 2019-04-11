import { createSwitchNavigator } from 'react-navigation';
import Login from 'screens/intro/auth/Login';
import WelcomeNavigator from 'screens/intro/welcome/WelcomeNavigator';

const AuthNavigator = createSwitchNavigator({
    login: {
        screen: Login,
        navigationOptions: () => ({
            header: null
        })
    },
    welcomeNavi: {
        screen: WelcomeNavigator,
        navigationOptions: () => ({
            header: null
        })
    }
}, {
    initialRouteName: 'login'
});
  
export default AuthNavigator;