const title = 'Al usar esta aplicación, serás capaz de:';

export default {
  key: 'Objetivos',
  sections: [
    {
      showHeader: false,
      data: [
        { key: title },
      ],
    },
    {
      showHeader: false,
      isList: true,
      data: [
        {
          key: 'Comprender los beneficios de realizar el examen periodontal básico (EPB) a ' +
          'todo paciente que se atienda tanto en el sistema público como en el privado.'
        },
        {
          key: 'Realizar el examen periodontal básico, facilitando la toma de decisiones ' +
        'sobre la necesidad de tratamiento y de derivación al especialista en periodoncia. ' +
        'De esta forma contribuir a la detección precoz y tratamiento oportuno de ' +
        'problemas periodontales en la población.' },
      ],
    }
  ],
};
