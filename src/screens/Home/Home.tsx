import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import { RootScreenProps } from '../routeParams';

export const Home: React.FC<RootScreenProps<'Home'>> = props => {
  const goAbout = () => props.navigation.navigate('About');
  const selectSomeState = (state: RootState) => state.someState;
  const someState = useSelector(selectSomeState);

  console.log(someState);

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{props.route.name}</Text>
      <Button title="goto About Page" onPress={goAbout} />
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

export default Home;
