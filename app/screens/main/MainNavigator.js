import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Home from 'screens/main/home/Home';
import Diary from 'screens/main/diary/Diary';
import Calendar from 'screens/main/calendar/Calendar';
import Profile from 'screens/main/profile/Profile';
import Register from 'screens/main/register/Register';

const BottomNavigator = createBottomTabNavigator({
    home: { screen: Home }
    ,diary: { screen: Diary }
    ,register: { screen: Register,
        navigationOptions: ({ navigation }) => ({
            tabBarOnPress: ({ navigation }) => {
                navigation.navigate('registerModal');
            }
        }),
    }
    ,calendar: { screen: Calendar }
    ,profile: { screen: Profile }
}, {
    initialRouteName: 'home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
});

const MainNavigator = createStackNavigator({
    main: {screen: BottomNavigator},
    registerModal: { screen: Register }
}, {
    mode: 'modal',
});

export default MainNavigator;