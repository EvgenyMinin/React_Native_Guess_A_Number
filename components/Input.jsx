import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  const {style} = props;
  return <TextInput {...props} style={{...styles.input, ...style}} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
      height: 30,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      marginVertical: 10,
  },
});
