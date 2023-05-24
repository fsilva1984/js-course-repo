

/*

AINDA NAO TERMINADO 

COMO PEGAR  ITENS  DE UM ARRAY DE NIVEL
5 DE PROFUNDIDADE ?

*/





let nestedArray = [ // nivel 0

  [     // nivel 1
    'level 1',
    false,
    1,
    2,
    3,
    'complex',
    'nested',

    [  // nivel 2
      'level 2',
      'shift',
      6,
      7,
      1000,
      'method',

      [//  nivel 3
        'level 3',
        false,
        true,
        'spread',
        'array',
        'deep'

        [// nivel 4
        'level 4',
        1327.98,
        'splice',
        'slice',
        'push',
        'deeper'

        ['level 5', 1.3849, '8.487', 'arbitrary', 'depth']//nivel 5

        ],

      ],

    ],

  ],


];

const m = nestedArray;


for (let i = 0; i < m.length; i++) {
  console.log(m[i]);

  for (let j = 0; j < m[i].length; j++){

    console.log(m[j]);
  }
}
