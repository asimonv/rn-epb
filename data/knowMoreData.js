import React from 'react';
import { Text } from 'react-native';

const content = (
  <Text>
    {' '}
    de evaluación utilizada para indicar el nivel de examen adicional necesario y proporcionar una
    guía básica sobre la toma de decisiones clínicas.
    {'\n\n'}
    Útil para
    {' '}
    <Text style={{ fontWeight: 'bold' }}>detectar</Text>
, durante el examen de salud
    bucal,
    {' '}
    <Text style={{ fontWeight: 'bold' }}>de forma oportuna</Text>
    la presencia de enfermedades periodontales, discriminando si estas deben ser resueltas en el
    nivel primario de atención por odontólogo general o bien ser referidas a un especialista en
    periodoncia (atención secundaria).
  </Text>
);

export default [
  {
    key: '¿Qué es el EPB?',
    sections: [
      {
        showHeader: false,
        showChevron: false,
        data: [
          {
            key: (
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Herramienta simple y rápida</Text>
                {content}
              </Text>
            ),
          },
          {
            image: { uri: 'https://www.dropbox.com/s/c7snt5e94azcgrd/Sondaje3.JPG?raw=1' },
          },
        ],
      },
    ],
  },
  { key: 'Instrumental' },
  { key: '¿A quiénes?' },
  { key: '¿Cómo se realiza?' },
  { key: 'Códigos del EPB' },
];
