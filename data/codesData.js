import React from 'react';
import { Text } from 'react-native';

const aps = 'Resolutividad de Atención Primaria por odontólogo general';
const sp = 'Considerar derivar a especialista en periodoncia';

export default [
  {
    key: 'Código 0',
    sections: [
      {
        title: 'alert',
        showHeader: false,
        isAlert: true,
        isWarning: true,
        data: [{ key: aps }],
      },
      {
        title: 'Información',
        isList: true,
        data: [
          { key: 'Profundidad de sondaje menor a 3.5/4mm' },
          { key: 'Banda negra de sonda OMS es visible' },
          { key: 'Sin cálculo dental ni otros factores locales' },
          {
            key: (
              <Text>
                <Text style={{ fontWeight: 'bold' }}>No hay sangrado</Text>
                {' '}
tras el sondaje
              </Text>
            ),
          },
        ],
        showHeader: true,
      },
      {
        title: 'Imágenes',
        isCarousel: true,
        showHeader: true,
        data: [
          {
            key: 'images',
            images: [
              {
                title: 'Código 0',
                subtitle: 'Código EPB 0, sonda OMS',
                illustration: 'https://www.dropbox.com/s/rga6n1lbax58ndv/EPB%200_fondo.tif?raw=1',
              },
              {
                title: 'Código 0',
                subtitle: 'Código EPB 0, sonda OMS (zoom)',
                illustration:
                  'https://www.dropbox.com/s/1r7icyf24kroigh/EPB%200_fondo%20zoom.tif?raw=1',
              },
              {
                title: 'Código 0',
                subtitle: 'Código EPB 0, sonda OMS',
                illustration: 'https://www.dropbox.com/s/eouopmf6zwri5tq/Cod%200%20OMS.JPG?raw=1',
              },
              {
                title: 'Código 0',
                subtitle: 'Código EPB 0, sonda UNC15',
                illustration: 'https://www.dropbox.com/s/u4r5nklu2b5yr3g/Cod%200%20UCN.JPG?raw=1',
              },
              {
                title: 'Código 0',
                subtitle: 'Código EPB 0, sonda UNC15 (zoom)',
                illustration:
                  'https://www.dropbox.com/s/xgzq1sof2xcvxt1/Cod%200%20UCN%20zoom.jpg?raw=1',
              },
            ],
          },
        ],
      },
      {
        title: 'Interpretación',
        data: [
          {
            key: (
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Si todos los sextantes están en código 0</Text>
                , el paciente tiene su periodonto estable, sin inflamación gingival. Puede tener
                diagnóstico de salud periodontal o periodontitis estable.
              </Text>
            ),
          },
        ],
        showHeader: true,
      },
      {
        title: 'Recomendaciones',
        isList: true,
        data: [
          { key: 'Reforzar medidas de prevención en salud oral' },
          { key: 'Control de factores de riesgo presentes' },
          { key: 'Estimular estilo de vida saludable' },
        ],
        showHeader: true,
      },
    ],
  },
  {
    key: 'Código 1',
    sections: [
      {
        title: 'alert',
        showHeader: false,
        isAlert: true,
        isWarning: true,
        data: [{ key: aps }],
      },
      {
        title: 'Información',
        isList: true,
        data: [
          { key: 'Profundidad de sondaje menor a 3.5/4mm' },
          { key: 'Banda negra de sonda OMS es visible' },
          { key: 'Sin cálculo dental ni otros factores locales' },
          {
            key: (
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Hay sangrado</Text>
                {' '}
tras el sondaje
              </Text>
            ),
          },
        ],
        showHeader: true,
      },
      {
        title: 'Imágenes',
        isCarousel: true,
        showHeader: true,
        data: [
          {
            key: 'images',
            images: [
              {
                title: 'Código 1',
                subtitle: 'Código EPB 1, sonda OMS',
                illustration: 'https://www.dropbox.com/s/oa3elfjaj0a3hrz/EPB%201_fondo.tif?raw=1',
              },
              {
                title: 'Código 1',
                subtitle: 'Código EPB 1, sonda OMS (zoom)',
                illustration: 'https://www.dropbox.com/s/wv2boqwlwd61hku/EPB%201%20zoom.jpg?raw=1',
              },
              {
                title: 'Código 1',
                subtitle: 'Código EPB 1, sonda OMS',
                illustration: 'https://www.dropbox.com/s/y7hjkrqwt7canlj/Cod%201%20OMS.JPG?raw=1',
              },
              {
                title: 'Código 1',
                subtitle: 'Código EPB 1, sonda UNC15',
                illustration: 'https://www.dropbox.com/s/lkqs6p7olc1erc8/Cod%201%20UCN.JPG?raw=1',
              },
            ],
          },
        ],
      },
      {
        title: 'Interpretación',
        data: [
          {
            key: (
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Si el valor máximo es código 1</Text>
, paciente
                presenta inflamación gingival. Puede tener diagnóstico de gingivitis (índice de
                sangrado >10%), peridontitis estable o en remisión.
              </Text>
            ),
          },
        ],
        showHeader: true,
      },
      {
        title: 'Recomendaciones',
        isList: true,
        data: [
          { key: 'Reforzar medidas de prevención en salud oral' },
          { key: 'Control de factores de riesgo presentes' },
          { key: 'Estimular estilo de vida saludable' },
          { key: 'Realizar índice de placa y sangrado' },
          { key: 'Instrucción de higiene oral' },
        ],
        showHeader: true,
      },
    ],
  },
  {
    key: 'Código 2',
    sections: [
      {
        title: 'alert',
        showHeader: false,
        isAlert: true,
        isWarning: true,
        data: [{ key: aps }],
      },
      {
        title: 'Información',
        isList: true,
        data: [
          { key: 'Profundidad de sondaje menor a 3.5/4mm.' },
          { key: 'Banda negra de sonda OMS es visible' },
          {
            key: (
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Hay cálculo dental</Text>
                {' '}
u otros factores
                locales
              </Text>
            ),
          },
          {
            key: (
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Hay sangrado</Text>
                {' '}
tras el sondaje
              </Text>
            ),
          },
        ],
        showHeader: true,
      },
      {
        title: 'Imágenes',
        isCarousel: true,
        showHeader: true,
        data: [
          {
            key: 'images',
            images: [
              {
                title: 'Código 2',
                subtitle: 'Código EPB 2, sonda OMS',
                illustration: 'https://www.dropbox.com/s/uicb5epfhicl7uu/EPB%202_fondo.tif?raw=1',
              },
              {
                title: 'Código 2',
                subtitle: 'Código EPB 2, sonda OMS (zoom)',
                illustration:
                  'https://www.dropbox.com/s/ttf4kan8wdtmsr4/EPB%202_fondo%20zoom.tif?raw=1',
              },
              {
                title: 'Código 2',
                subtitle: 'Restauración defectuosa',
                illustration:
                  'https://www.dropbox.com/s/c8zt5egewtsce4c/EPB%20_Restauraci%C3%B3n.tif?raw=1',
              },
              {
                title: 'Código 2',
                subtitle: 'Código EPB 2, sonda UNC15, restauración defectuosa',
                illustration:
                  'https://www.dropbox.com/s/56jw0h4b8rtrf5h/EPB%202%20_Restauraci%C3%B3n.tif?raw=1',
              },
              {
                title: 'Código 2',
                subtitle: 'Código EPB 2, sonda UNC15, presencia de factor local',
                illustration: 'https://www.dropbox.com/s/vdpqxb47msqshid/Cod%202%20UCN.jpg?raw=1',
              },
            ],
          },
        ],
      },
      {
        title: 'Interpretación',
        data: [
          {
            key: (
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Si el valor máximo es código 2</Text>
, paciente
                presenta inflamación gingival y factor local. Puede tener diagnóstico de gingivitis
                (índice de sangrado >10%), periodontitis estable o en remisión.
              </Text>
            ),
          },
        ],
        showHeader: true,
      },
      {
        title: 'Recomendaciones',
        isList: true,
        data: [
          { key: 'Reforzar medidas de prevención en salud oral' },
          { key: 'Control de factores de riesgo presentes' },
          { key: 'Estimular estilo de vida saludable' },
          { key: 'Realizar índice de placa y sangrado' },
          { key: 'Instrucción de higiene oral' },
          { key: 'Destartraje supra y subgingival/pulido coronario.' },
          { key: 'Eliminación y/o corrección del factor local.' },
          { key: 'Control' },
        ],
        showHeader: true,
      },
    ],
  },
  {
    key: 'Código 3',
    sections: [
      {
        title: 'alert',
        showHeader: false,
        isAlert: true,
        isWarning: true,
        data: [{ key: aps }],
      },
      {
        title: 'Información',
        isList: true,
        data: [
          { key: 'Profundidad de sondaje entre 3.5/4mm y 5.5/6mm' },
          { key: 'Banda negra de sonda OMS parcialmente visible' },
          {
            key: (
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Hay cálculo dental</Text>
                {' '}
u otros factores
                locales
              </Text>
            ),
          },
          {
            key: (
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Hay sangrado</Text>
                {' '}
tras el sondaje
              </Text>
            ),
          },
        ],
        showHeader: true,
      },
      {
        title: 'Imágenes',
        isCarousel: true,
        showHeader: true,
        data: [
          {
            key: 'images',
            images: [
              {
                title: 'Código 3',
                subtitle: 'Código EPB 3, sonda OMS',
                illustration: 'https://www.dropbox.com/s/r3wtuhae8vcvzk4/EPB%203_fondo.tif?raw=1',
              },
              {
                title: 'Código 3',
                subtitle: 'Código EPB 3, sonda OMS (zoom)',
                illustration: 'https://www.dropbox.com/s/r3wtuhae8vcvzk4/EPB%203_fondo.tif?raw=1',
              },
              {
                title: 'Código 3',
                subtitle: 'Código EPB 3, sonda OMS',
                illustration: 'https://www.dropbox.com/s/v0gjhbl2k6gf09e/Cod%203%20OMS.JPG?raw=1',
              },
              {
                title: 'Código 3',
                subtitle: 'Código EPB 3, sonda OMS (zoom)',
                illustration:
                  'https://www.dropbox.com/s/ouppptbxctmow7c/Cod%203%20OMS%20zoom.jpg?raw=1',
              },
              {
                title: 'Código 3',
                subtitle: 'Código EPB 3, sonda OMS y sonda UNC15',
                illustration:
                  'https://www.dropbox.com/s/77s2kfvaufj33og/c%C3%B3digo-3-frontal.jpg?raw=1',
              },
              {
                title: 'Código 3',
                subtitle: 'Código EPB 3, sonda UNC15',
                illustration:
                  'https://www.dropbox.com/s/p0arneqy3du2mxo/Cod%203_%20modelo%20UCN.JPG?raw=1',
              },
            ],
          },
        ],
      },
      {
        title: 'Interpretación',
        data: [
          {
            key: (
              <Text>
                Si el valor máximo del paciente es código 3, paciente presenta profundidad al
                sondaje aumentada. Puede tener diagnóstico de periodontitis estable, en remisión o
                inestable. También puede presentar gingivitis con presencia de agrandamiento
                gingival.
                {' '}
                <Text style={{ fontWeight: 'bold' }}>Es necesaria mayor valoración.</Text>
              </Text>
            ),
          },
        ],
        showHeader: true,
      },
      {
        title: 'Recomendaciones',
        isList: true,
        data: [
          { key: 'Reforzar medidas de prevención en salud oral' },
          { key: 'Control de factores de riesgo presentes' },
          { key: 'Estimular estilo de vida saludable' },
          { key: 'Realizar índice de placa y sangrado' },
          { key: 'Realizar mayor valoración periodontal' },
          { key: 'Evaluar solicitar radiografía' },
          { key: 'Instrucción de higiene oral' },
          { key: 'Destartraje supra y subgingival/pulido coronario' },
          { key: 'Eliminación y/o corrección del factor local' },
          {
            key: 'Pulido radicular si fuese necesario de acuerdo al diagnóstico',
          },
          { key: 'Control' },
        ],
        showHeader: true,
      },
    ],
  },
  {
    key: 'Código 4',
    sections: [
      {
        title: 'alert',
        showHeader: false,
        isAlert: true,
        data: [{ key: sp }],
      },
      {
        title: 'Información',
        isList: true,
        data: [
          { key: 'Profundidad de sondaje mayor a 5.5-6mm' },
          { key: 'Banda negra de sonda OMS no es visible' },
        ],
        showHeader: true,
      },
      {
        title: 'Imágenes',
        isCarousel: true,
        showHeader: true,
        data: [
          {
            key: 'images',
            images: [
              {
                title: 'Código 4',
                subtitle: 'Código EPB 4, sonda OMS',
                illustration: 'https://www.dropbox.com/s/yk9v4cfh8hu2kbg/EPB%204_fondo.tif?raw=1',
              },
              {
                title: 'Código 4',
                subtitle: 'Código EPB 4, sonda OMS (zoom)',
                illustration:
                  'https://www.dropbox.com/s/8zulp2pr8rwx3d6/EPB%204_fondo%20zoom.tif?raw=1',
              },
              {
                title: 'Código 4',
                subtitle: 'Código EPB 4, sonda OMS',
                illustration:
                  'https://www.dropbox.com/s/8gnq4dzif70w5yc/Cod%204%20modelo%20OMS.JPG?raw=1',
              },
              {
                title: 'Código 4',
                subtitle: 'Código EPB 4, sonda OMS y sonda UNC15',
                illustration:
                  'https://www.dropbox.com/s/wm4k3kuru5hbgqy/c%C3%B3digo-4-frontal.jpg?raw=1',
              },
              {
                title: 'Código 4',
                subtitle: 'Código EPB 4, sonda UNC15',
                illustration:
                  'https://www.dropbox.com/s/7rkni6pz6gs6v30/Cod%204%20modelo%20UCN.JPG?raw=1',
              },
            ],
          },
        ],
      },
      {
        title: 'Interpretación',
        data: [
          {
            key: (
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Si el valor máximo es código 4</Text>
,
                considerar derivar a paciente a especialista en periodoncia. Su tratamiento es más
                complejo y requiere mayor valoración.
              </Text>
            ),
          },
        ],
        showHeader: true,
      },
      {
        title: 'Recomendaciones en nivel primario',
        isList: true,
        data: [
          { key: 'Reforzar medidas de prevención en salud oral' },
          { key: 'Control de factores de riesgo presentes' },
          { key: 'Estimular estilo de vida saludable' },
          { key: 'Realizar índice de placa y sangrado' },
          { key: 'Instrucción de higiene oral' },
          { key: 'Destartraje supragingival/pulido coronario' },
        ],
        showHeader: true,
      },
      {
        title: 'Recomendaciones para especialista',
        isList: true,
        data: [
          { key: 'Realizar mayor valoración periodontal' },
          { key: 'Evaluar solicitar radiografía' },
          { key: 'Eliminación y/o corrección del factor local' },
          {
            key:
              'Destartraje subgingival y pulido radicular si fuese necesario de acuerdo al diagnóstico',
          },
          { key: 'Tratamiento adicional' },
          { key: 'Control' },
        ],
        showHeader: true,
      },
    ],
  },
  {
    key: 'Código *',
    sections: [
      {
        title: 'alert',
        showHeader: false,
        isAlert: true,
        data: [{ key: sp }],
      },
      {
        title: 'Información',
        isList: true,
        data: [
          { key: 'Complementario a los otros códigos' },
          { key: 'Compromiso de furcación grado II y III' },
          { key: 'Recesión gingival >5mm aislada' },
        ],
        showHeader: true,
      },
      {
        title: 'Imágenes',
        isCarousel: true,
        showHeader: true,
        data: [
          {
            key: 'images',
            images: [
              {
                title: 'Código *',
                subtitle: 'Código EPB * adicional, presencia de compromiso de furcación',
                illustration: 'https://www.dropbox.com/s/t9dngd8fzx1ljzb/c%C3%B3digo-_.jpg?raw=1',
              },
            ],
          },
        ],
      },
      {
        title: 'Recomendaciones',
        isList: true,
        data: [
          {
            key:
              'Evaluar necesidad de derivar a especialista, dependiendo de código de EPB y otras características individuales del paciente.',
          },
        ],
        showHeader: true,
      },
    ],
  },
];
