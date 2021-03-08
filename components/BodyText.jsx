import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = ({ children }) => {
  return <Text style={styles.bodyText}>{children}</Text>;
};

export default BodyText;

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'open-sans',
  },
});
