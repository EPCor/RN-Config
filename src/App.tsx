import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <Text style={styles.title}>React Native Engineering Configuration</Text>
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
