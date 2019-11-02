import { colors } from '../styles/common.style';

export default {
  key: 'Fortalezas y Limitaciones',
  facts: [
    {
      isList: true,
      showHeader: true,
      title: 'Fortalezas',
      style: {
        color: colors.warning,
      },
      data: [
        { key: 'Rápido y simple de realizar' },
        { key: 'Mejora la pertinencia de la derivación' },
        { key: 'Favorece el uso eficiente de recursos' },
        { key: 'Permite la detección precoz de signos' },
      ],
    },
    {
      isList: true,
      title: 'Limitaciones',
      showHeader: true,
      style: {
        color: colors.alert,
      },
      data: [{ key: 'No es diagnóstico' }, { key: 'No evalúa resultados a la terapia' }],
    },
  ],
};
