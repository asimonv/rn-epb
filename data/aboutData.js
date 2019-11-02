import React from 'react';
import {
  Text,
} from 'react-native';

const content = 'Esta App ha sido desarrollada por la Facultad de Odontología de la ' +
'Universidad de Chile con la colaboración del Fondo Nacional de '+
'Investigación y Desarrollo en Salud, CONICYT. Gobierno de Chile.\n\n';

export default {
  key: 'Acerca de',
  sections: [
    { title: '',
      showHeader: false,
      data: [
        { key: '',
          image: require('../static/images/logo-odonto-alt.jpg'),
        },
        { key: <Text>{content}<Text style={{fontWeight: 'bold'}}>Proyecto FONIS SA16I0052</Text></Text> },
      ],
    },
    {
      title: 'Contenido',
      showHeader: true,
      data: [
        {
          key: 'Paola Carvajal Pavez',
          description: 'Odontóloga, Especialista en Periodoncia, Mag. en Salud Pública\nDepto. Odontología Conservadora - FOUCH',
        },
        {
          key: 'Daniela Reinero Nuñez',
          description: 'Odontóloga, Programa Mag. en Ciencias Odontológicas\nDepto. Odontología Conservadora - FOUCH',
        },
        {
          key: 'Claudia Carvajal Pavez',
          description: 'Odontóloga, Especialista y Mag. en Salud Pública\nDepto. Salud Bucal, DIPRECE, Ministerio de Salud',
        },
        {
          key: 'Ignacio Cabrera',
          description: 'Licenciado en Odontología - FOUCH',
        },
        {
          key: 'Danae Quezada',
          description: 'Licenciada en Odontología - FOUCH',
        }
      ],
    },
    {
      title: 'Fotografías clínicas',
      showHeader: true,
      data: [
        {
          key: 'Karla Díaz Cavero',
          description: 'Odontóloga, Especialista en Implantología Oral Integral\nPrograma de Doctorado en Ciencias Odontológicas',
        },
        {
          key: 'Macarena Leyton',
          description: 'Licenciada en Odontología - FOUCH',
        }
      ],
    },
    {
      title: 'Ilustraciones',
      showHeader: true,
      data: [
        {
          key: 'Laura Medina'
        }
      ],
    },
    {
      title: 'Diseño del logo de la aplicación',
      showHeader: true,
      data: [
        {
          key: 'Valentina Vernal',
        }
      ],
    },
    {
      title: 'Software Engineer',
      showHeader: true,
      data: [
        {
          key: 'Andre Simon',
          description: 'Computer Scientist - Pontificia Universidad Católica de Chile',
          url: 'https://www.linkedin.com/in/asimonv/',
        }
      ],
    },
  ],
};
