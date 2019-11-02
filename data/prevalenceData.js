import React from 'react';
import {
  Text,
} from 'react-native';

import { colors } from '../styles/common.style';

export default {
  key: 'Prevalencia',
  stats: [
    {
      key: '11%',
      description: 'de los adultos presenta periodontitis severa en el mundo.',
      color: colors.alert,
    },
    {
      key: '67%',
      description: 'de niños chilenos de 12 años tiene gingivitis',
      color: colors.alert,
    },
    {
      key: '39% y 69%',
      description: 'de adultos y de adultos mayores chilenos resspectivamente tienen pérdida de inserción severa.',
      color: colors.alert,
    },
    {
      key: 'Principal',
      description: 'Junto a la caries, es la principal causa de pérdida dentaria.',
      color: colors.alert,
    },
  ],
  sources: [
    { key: 'Kassebaum N, et al. J Dent Res 93(11):1045-1053, 2014.' },
    { key: 'Soto L, Tapia R y col. Minsal. Chile 2007.' },
    { key: 'Gamonal J, et al. J Periodontol. 2010 Oct;81(10):1403-10.' },
    { key: 'Arteaga O, et al. Rev Clin Periodoncia Implant Rehábil Oral. 2009;2(3):161-6.' },
  ],
  facts: [
    {
      isList: true,
      showHeader: true,
      title: <Text><Text style={{ fontWeight: 'bold' }}>Gingivitis</Text> y <Text style={{ fontWeight: 'bold' }}>Periodontitis</Text> son un importante problema de salud pública a nivel mundial por:</Text>,
      data: [
        { key: 'Alta prevalencia.' },
        { key: 'Alto costo de tratamiento.' },
        { key: 'Daño en la salud general.' },
        { key: 'Afecta la calidad de vida.' },
      ],
    },
  ],
  conclusion: {
    title: 'Por lo tanto es fundamental su detección temprana, tratamiento y prevención.',
  },
};
