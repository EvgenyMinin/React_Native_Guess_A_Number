import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import Card from './Card';

const NumberContainer = ({ children }) => {
  return (
    <Card style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </Card>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.secondary,
    borderWidth: 2,
    paddingVertical: 4,
    alignItems: 'center',
    marginVertical: 12,
  },

  number: {
    color: colors.secondary,
    fontSize: 24,
  },
});
