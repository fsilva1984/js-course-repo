

import { readFile } from 'fs';

const pathFile =
 '/home/fs/Dev/Javascript/Objects/Class/test/text2.txt';


  readFile(pathFile, 'utf8', (err, data) => {
    try {
      
      if (!err) {
        console.log('Conteúdo do arquivo:', data);
        return;
      }
  
     throw err;
    } catch (error) {
      console.error(error);
    }
  
  });
  

const myPromise = () => {
  return new Promise((resolve, reject) => {

  readFile(pathFile, 'utf8', (err, data) => {
    if (data) {
      
     return resolve(data);
    } else {

     return reject(err)
    }

  });

});

}

myPromise()
  .then(data => console.log(data))
  .catch(erro => console.log(erro));