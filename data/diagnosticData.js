import React from 'react';
import { Text } from 'react-native';

const content = (
  <Text>
    Toda persona necesita una valoración de su periodonto para detectar de forma temprana la
    necesidad de tratamiento y evitar la progresión del daño.
    {'\n\n'}
    Es
    {' '}
    <Text style={{ fontWeight: 'bold' }}>responsabilidad de todo odontólogo</Text>
    {' '}
realizar a
    modo de tamizaje el
    {' '}
    <Text style={{ fontWeight: 'bold' }}>EPB (examen periodontal básico)</Text>
    {' '}
    para realizar las medidas terapéuticas, recomendaciones adecuadas e identificar si el paciente
    debe ser derivado al especialista.
    {'\n\n'}
    Una vez identificado el nivel de atención en el que el paciente debe ser tratado, según el
    código obtenido en el EPB,
    {' '}
    <Text style={{ fontWeight: 'bold' }}>es preciso realizar su diagnóstico periodontal</Text>
, de
    acuerdo a la Clasificación de las enfermedades periodontales 2017.
  </Text>
);

export default {
  key: 'Diagnóstico precoz y tratamiento oportuno',
  sections: [
    { title: '', showHeader: false, data: [{ key: content }] },
    {
      title: 'Links',
      showHeader: true,
      data: [
        {
          key: <Text>Clasificación de enfermedades periodontales</Text>,
          url: 'https://onlinelibrary.wiley.com/doi/epdf/10.1111/jcpe.12935',
        },
        {
          key: <Text>Diagnóstico periodontal en el contexto de la nueva clasificación</Text>,
          url: 'https://www.nature.com/articles/sj.bdj.2019.3',
        },
      ],
    },
  ],
};
