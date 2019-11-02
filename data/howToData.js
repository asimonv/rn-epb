import React from 'react';
import {
  Dimensions, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FakeGridView from '../components/FakeGridView';
import { buttons } from '../styles/Button.style';

const window = Dimensions.get('window');
const { width, height } = window;
const aspect = width / height;

const styles = StyleSheet.create({
  image: {
    alignSelf: 'stretch',
    height: window.height * aspect,
    width,
    resizeMode: 'cover',
  },
  detail: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default [
  {
    title: 'Dividir la boca en sextantes',
    details: [
      { title: 'El 3er molar no se registra' },
      { title: 'Sextante con al menos 2 dientes' },
      { title: 'Se registra el mayor valor encontrado por sextante' },
    ],
    image: {
      uri:
        'https://www.dropbox.com/s/jmuzsptrnik7jmx/imagen-sextantes%28dientes-destacados%29.jpg?raw=1',
    },
  },
  {
    title: 'Sondaje periodontal',
    details: [
      {
        title:
          'Se comienza realizando el sondaje en el primer diente del sextante, examinando todos los dientes si es necesario.',
      },
      {
        title:
          'Examinar al menos 6 sitios periodontales por diente: distal, centro y mesial por vestibular y palatino o lingual.',
      },
    ],
    image: {
      uri: 'https://www.dropbox.com/s/csgznzka4zy1esy/imagen-oclusal.jpg?raw=1',
    },
  },
  {
    title: 'Registrar el mayor valor encontrado en el sextante',
    content: (
      <KeyboardAwareScrollView
        style={{ backgroundColor: 'white' }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            display: 'flex',
            height: '100%',
          }}
        >
          <FakeGridView inputsState={[3, 1, 1, 1, 1, 2]} />
          <Text style={styles.detail}>
            Si en el primer diente examinado de un sextante se encuentra el código 4, podemos pasar
            a examinar el siguiente sextante. Adicionalmente cada sextante puede tener el código *.
            {'\n'}
            El código del paciente será el mayor código encontrado.
          </Text>
          <FakeGridView inputsState={[3, 1, 1, 1, 1, 2]} stylesState={[1, 0, 0, 0, 0, 0]} />
          <TouchableOpacity disabled>
            <Text style={buttons.primary}>Ir a Código 3</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    ),
  },
];
