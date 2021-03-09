import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = ({ rounds, guessNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              'https://tgr.scdn2.secure.raxcdn.com/images/wysiwyg/_article/istockphoto-485966046-612x612.jpg',
          }}
          style={styles.image}
        />
      </View>
      <BodyText>Nubmer of Rounds: {rounds}</BodyText>
      <BodyText>Guess Number: {guessNumber}</BodyText>
      <Button title="New Game" onPress={onNewGame} />
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

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    marginVertical: 30,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});
