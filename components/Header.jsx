import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import TitleText from './TitleText';
import { colors } from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{title}</TitleText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerOS: {
    backgroundColor: 'white',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },

  headerAndroid: {
    backgroundColor: colors.primary,
  },

  title: {
    color: Platform.OS === 'ios' ? colors.primary : 'white',
  },
});
