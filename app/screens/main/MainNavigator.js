import { createBottomTabNavigator } from 'react-navigation';
import Home from 'screens/main/home/Home';

const MainNavigator = createBottomTabNavigator({
    home: { screen: Home }
}, {
    initialRouteName: 'home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
});
  
export default MainNavigator;