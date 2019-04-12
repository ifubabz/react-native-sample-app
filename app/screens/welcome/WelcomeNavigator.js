import { createStackNavigator } from 'react-navigation';
import Welcome from 'screens/welcome/Welcome';

const WelcomeNavigator = createStackNavigator({
    welcome: {
        screen: Welcome,
        navigationOptions: () => ({
            header: null
        })
    }
}, {
    initialRouteName: 'welcome'
});
  
export default WelcomeNavigator;