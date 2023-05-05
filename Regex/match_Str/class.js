

// ^[A-Z]\w+\d+$ esse padrao diz que  a senha deve ter
// ao menos uma letra maiuscula no inicio segudo de letras
// manusculas e numeros no final


/*

Assim definimos uma classe de  caracteres 
o que queremos entre cochetes

ex: [aeiou]

ou usamos o circunflexo dentro dos cochetes para rejeitar
determinados caracteres

ex: [^aeiou]

*/




const pattern1 = /[eio]/gm// aqui pegamos so os eio

const pattern2 = /[^eio]/gm// deixamos os eio e pegamos os resto

const forTest1 = 'Coçeira'

if (forTest1.match(pattern1)) {

  console.log('C[o]ç[ei]ra');
}

if (forTest1.match(pattern2)) {

  console.log('[C]o[ç]ei[ra]');
}










