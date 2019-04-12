import { createSwitchNavigator } from 'react-navigation';
import Login from 'screens/auth/Login';
import WelcomeNavigator from 'screens/welcome/WelcomeNavigator';

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