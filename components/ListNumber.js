import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../styles/common.style';

export default function ListNumber(props) {
  const styles = StyleSheet.create({
    number: {
      width: '100%',
      textAlign: 'center',
      fontWeight: 'bold',
      color: props.style && props.style.color ? props.style.color : colors.system,
    },
    wrapper: {
      marginRight: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: props.style && props.style.color ? props.style.color : colors.system,
      width: 24,
      height: 24,
      borderRadius: 12,
    },
  });

  return (
    <View style={styles.wrapper}>
      <Text style={[props.style, styles.number]}>{props.index + 1}</Text>
    </View>
  );
}
