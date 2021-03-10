import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import { colors } from '../constants/colors';

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const onDismiss = () => {
    Keyboard.dismiss();
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>
          <Text>{selectedNumber}</Text>
        </NumberContainer>
        <Button
          title="Start game"
          onPress={() => onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={onDismiss}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>

        <Card style={styles.inputContainer}>
          <BodyText>Select a Number</BodyText>

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
                onPress={resetInputHandler}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="Confirm"
                color={colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
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
    marginVertical: 10,
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
    marginVertical: 6,
  },

  input: {
    width: 100,
    fontSize: 20,
    textAlign: 'center',
  },

  summaryContainer: {
    marginTop: 20,
    paddingVertical: 12,
    fontSize: 18,
    alignItems: 'center',
  },
});
