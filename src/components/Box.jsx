import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Box() {
  return <View style={styles.box1}></View>;
}

const styles = StyleSheet.create({
  box1: {
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    marginTop: 20,
  },
});
