import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const onDismiss = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={onDismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>

        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>

          <Input
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="number-pad"
            autoCorrect={false}
            maxLength={2}
            style={styles.input}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonListContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={colors.secondary}
                onPress={() => {}}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="Confirm"
                color={colors.primary}
                onPress={() => {}}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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

  button: {
    width: 100,
  },

  input: {
    width: 100,
    fontSize: 20,
    textAlign: 'center',
  },
});
