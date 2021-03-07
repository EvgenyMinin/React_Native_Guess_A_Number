import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = ({rounds, guessNumber, onNewGame}) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Nubmer of Rounds: {rounds}</Text>
      <Text>Guess Number: {guessNumber}</Text>
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
});
