/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
          <Text style={styles.title}>React Native</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default App;
