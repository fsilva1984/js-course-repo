
/*
  A factory function e uma função que retorna um objeto
  e em javascript toda a função pode retonar um objeto 
*/

const myFactory = (name, age, gender) => ({
    //retorna um obj
    name,
    age,
    gender

})

console.log(myFactory('Roger', 34, 'MidleMale'));
/*
    Para retornar um objeto ela não precisou do this
    nem do construtor new
*/


// Essa função retorna um json dela mesma
function newFactory(name, age, gender) {
    //retorna um obj
    return {
        name,
        age,
        gender,
        dataJson: function() { return JSON.stringify(this) }
    }
}


console.log(newFactory('Roger', 34, 'MidleMale').dataJson());
