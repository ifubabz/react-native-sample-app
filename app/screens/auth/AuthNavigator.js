import { createStackNavigator } from 'react-navigation';
import Login from 'screens/auth/Login';
import Terms from 'screens/auth/notice/Terms';
import Privacy from 'screens/auth/notice/Privacy';

const AuthNavigator = createStackNavigator({
    login: {
        screen: Login,
        navigationOptions: () => ({
            header: null
        })
    },
    terms: {
        screen: Terms,
    },
    privacy: {
        screen: Privacy, 
    },
}, {
    initialRouteName: 'login'
});
  
export default AuthNavigator;