import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const fontSize = 40;
const superFontSize = Math.floor(fontSize * 0.4);
const superlineHeight = superFontSize * 1.1;

import { colors, BORDER_RADIUS } from '../styles/common.style';

export default function StatView(props) {
  return (
    <View style={[styles.wrapper, props.style]}>
      {props.stat.key &&
        <View style={styles.container}>
          <Text style={[styles.title, styles.regular]}>{props.stat.key}</Text>
          {props.showReference &&
            <Text style={styles.superStyle}>({props.stat.sourceIndex+1})</Text>
          }
        </View>
      }
      <Text style={styles.description}>{props.stat.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    borderRadius: BORDER_RADIUS*2,
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: fontSize,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    fontSize: fontSize/2,
    color: colors.white,
    fontWeight: '500',
  },
  superStyle: {
   textAlignVertical: 'top',
   fontSize: superFontSize,
   lineHeight: superlineHeight,
   fontWeight: 'bold',
   color: 'white',
 },
 regular:  {
   textAlignVertical: 'bottom',
 },
});
