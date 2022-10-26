/* 
    Crie uma função que recebe um parâmetro e retorna o tipo dele
*/

function getPharameterType(value) {
    return typeof (value);
}

console.log(getPharameterType(true));
console.log(getPharameterType('false'));
console.log(getPharameterType(5));
console.log(getPharameterType({}));
console.log(getPharameterType([ 'Hello World' ]));