import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import { colors } from '../constants/colors';

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
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text>&nbsp;
          rounds to guess the number&nbsp;
          <Text style={styles.highlight}>{guessNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={onNewGame}>NEW GAME</MainButton>
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

  resultContainer: {
    marginHorizontal: 60,
    marginVertical: 10,
  },

  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },

  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
});
