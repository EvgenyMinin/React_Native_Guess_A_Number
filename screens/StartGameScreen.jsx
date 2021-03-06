import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';

import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';

import { colors } from '../constants/colors';

import { getWidth } from './utils/getWidth';

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(getWidth() / 4);

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(getWidth() / 4);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

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
        <MainButton onPress={() => onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
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
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    color={colors.secondary}
                    onPress={resetInputHandler}
                  />
                </View>

                <View style={{ width: buttonWidth }}>
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
      </KeyboardAvoidingView>
    </ScrollView>
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
    width: '80%',
    minWidth: 300,
    maxWidth: '95%',
    alignItems: 'center',
  },

  buttonListContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
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
