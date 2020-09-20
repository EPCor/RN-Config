import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { About } from '~/screens/About';
import { Home } from '~/screens/Home';

const Stack = createStackNavigator();

export const Screens = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" options={{ title: 'Title' }}>
        {props => <Home {...props} name={'Home Page'} />}
      </Stack.Screen>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
