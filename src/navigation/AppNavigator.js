import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/Dashboard';
import ForgotPassword from '../screens/ForgotPassword';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import Profile from '../screens/Profile';
import Explore from '../screens/Explore';
import {View} from 'react-native';
/*
const Stack = createNativeStackNavigator();*/
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabScreen;
/*
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
*/
