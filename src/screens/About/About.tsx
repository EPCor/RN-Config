import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootScreenProps } from '../routeParams';

export type Props = RootScreenProps<'About'>;

export const About: React.FC<Props> = ({ route, navigation }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{route.name}</Text>
      <Button title="Go Back" onPress={navigation.goBack} />
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

export default About;
