import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './views/Home';
import Profile from './views/Profile';

let screen = Dimensions.get('window');

export const Tabs = TabNavigator({
  'Home': {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" type="entypo" size={28} color={tintColor} />
    },
  },
  'Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-person" type="ionicon" size={28} color={tintColor} />
    },
  },
});

// export const createRootNavigator = () => {
//   return StackNavigator(
//     {
//       Tabs: {
//         screen: Tabs,
//         navigationOptions: {
//           gesturesEnabled: false
//         }
//       }
//     },
//   );
// };