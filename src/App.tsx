import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { Screens } from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
};

export default App;
