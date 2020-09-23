import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import About from '~/screens/About';
import Home from '~/screens/Home';
import { RootParamList } from './routeParams';

const Stack = createStackNavigator<RootParamList>();

export const Screens = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
