import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />

      {!userNumber ? <StartGameScreen onStartGame={startGameHandler} /> : <GameScreen userChoice={userNumber} />}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
