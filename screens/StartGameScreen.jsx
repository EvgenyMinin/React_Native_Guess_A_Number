import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Start game screen!</Text>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
