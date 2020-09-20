import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../routeParams';

export interface Props {
  name: string;
  navigation: StackNavigationProp<RootStackParams, 'Home'>;
}

export const Home: React.FC<Props> = props => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{props.name}</Text>
      <Button
        title="goto About Page"
        onPress={() => {
          props.navigation.navigate('About');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});
