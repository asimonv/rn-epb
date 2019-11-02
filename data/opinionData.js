import React from 'react';
import { StyleSheet, Text } from 'react-native';
import BoldText from '../components/BoldText';
import { colors } from '../styles/common.style';

const styles = StyleSheet.create({
  highlight: {
    color: 'red',
  },
});

export default {
  key: '¿Qué opinan los odontólogos?',
  facts: [
    {
      isList: true,
      showHeader: false,
      style: {
        color: colors.system,
      },
      data: [
        {
          key: (
            <Text>
              {''}
              <BoldText style={styles.highlight}>9 de cada 10</BoldText>
              {' '}
odontólogos considera que
              el EPB es una herramienta útil para realizar la derivación a especialista (1).
              {''}
            </Text>
          ),
        },
        {
          key: (
            <Text>
              <BoldText style={styles.highlight}>60% </BoldText>
              de odontólogos considera al EPB de dificultad baja y 30% moderada (1).
            </Text>
          ),
        },
        {
          key: (
            <Text>
              <BoldText style={styles.highlight}>49% </BoldText>
              de odontólogos considera que se demora poco tiempo en realizar el EPB (1).
            </Text>
          ),
        },
        {
          key: (
            <Text>
              <BoldText style={styles.highlight}>Sólo 2 de cada 100 </BoldText>
              odontólogos considera que debe usar mucho tiempo para realizar el EPB (1).
            </Text>
          ),
        },
      ],
    },
  ],
  sources: [{ key: 'Proyecto FONIS SA16I0052' }],
};
