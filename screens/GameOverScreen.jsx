import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

import img from '../assets/success.png';

const GameOverScreen = ({rounds, guessNumber, onNewGame}) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <Image source={img} style={styles.image} />
      <BodyText>Nubmer of Rounds: {rounds}</BodyText>
      <BodyText>Guess Number: {guessNumber}</BodyText>
      <Button title='New Game' onPress={onNewGame} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    marginVertical: 12,
  }
});
