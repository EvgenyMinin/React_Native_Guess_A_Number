import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';
import BodyText from '../../components/BodyText';

export const renderGuessListItem = (listLength, itemData) => (
  <View style={styles.guessListItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const styles = StyleSheet.create({
  guessListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.border,
    borderWidth: 1,
    padding: 15,
    marginTop: 15,
    width: '100%',
  },
});
