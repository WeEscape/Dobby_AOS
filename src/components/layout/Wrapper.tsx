import React from 'react';
import { View, StyleSheet } from 'react-native';

const Wrapper = ({ children }) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    justifyContent: 'flex-start',
  },
});

export default Wrapper;
