import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import Card from '../components/Card';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>

      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>

        <TextInput />

        <View style={styles.buttonListContainer}>
          <Button title="Reset" style={styles.button} onPress={() => {}} />

          <Button title="Confirm" style={styles.button} onPress={() => {}} />
        </View>
      </Card>
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

  title: {
    fontSize: 20,
    marginVertical: 10,
    alignItems: 'center',
  },

  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  buttonListContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});
