import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DetailsScreen from './src/components/About/AboutComponent';
import MainComponent from './src/components/MainScreen/MainComponent';
import ChatScreen from './src/components/ChatScreen/ChatComponent';
import LoginScreen from './src/components/LoginScreen/LoginComponent';

const MainStack = createStackNavigator({
  MainComponent: {screen: MainComponent},
  Details: {screen: DetailsScreen},
});

const ChatStack = createStackNavigator({
  Login: {screen: LoginScreen},
  Chat: {screen: ChatScreen},
});

const Bottom = createBottomTabNavigator(
  {
    MainScreen: MainStack,
    Chat: ChatStack,
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;

        if (routeName === 'MainScreen') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Chat') {
          iconName = `ios-chatboxes${focused ? '' : '-outline'}`;
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#f4511e',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(Bottom);
