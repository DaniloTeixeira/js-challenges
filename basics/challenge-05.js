/* 
    Crie uma função que recebe dois parâmetros (fullname, flag)
    - Se o valor da "flag" for igual a string 'firstname', retornar apenas a primeira palavra do parâmetro "fullname"
    - Se o valor da "flag" for igual a string 'lastname', retornar todo o texto, excetoa primeira palavra do parâmetro "fullname"
    - Se o parâmetro "flag" for vazio ou "fullname" conter apenas uma palavra, retornar o conteúdo de "fullname"
*/

function isFirstName(flag) {
    return String(flag) === 'firstname';
}

function getFirstName(fullname) {
    return String(fullname).split(' ').at(0);
}

function getLastName(fullname) {
    const fullnameArrayLength = String(fullname).split(' ').length;

    return String(fullname).split(' ').slice(1, fullnameArrayLength).join(' ');
}

function getWordsAmount(fullname) {
    return String(fullname).split(' ').length;
}

function shouldReturnFullName(fullname, flag) {
    return getWordsAmount(fullname) < 1 || flag === '';
}

function getSlicedName(fullname, flag) {

    if (shouldReturnFullName(fullname, flag)) {
        return fullname;
    }

    if (isFirstName(flag)) {
        return getFirstName(fullname);
    }

    return getLastName(fullname);
}

const fullname = 'Danilo Rodrigues Teixeira';

console.log(getSlicedName(fullname, 'firstname'));

