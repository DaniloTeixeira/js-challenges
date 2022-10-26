/* 
    Crie uma função que recebe dois parâmetros (text, flag)
    - Se o valor de "flag" for igual a string 'start', deve retornar os 3 primeiros caracteres do parâmetro "text"
    - Se o valor de "flag" for igual a string 'end', deve retornar os 3 últimos caracteres do parâmetro "text"
    - Se o parâmetro "text" tiver menos de 3 caracteres, apenas retorar o "text"
*/

function theFlagValueIsStart(flag) {
    return flag === 'start';
}

function getFirstThreeCharacters(text) {
    return String(text.slice(0, 3));
}

function getLastThreeCharacters(text) {
    return String(text.slice(-3));
}

function getFirstOrLastThree(text, flag) {
    const textLength = String(text.length);

    if (textLength < 3) {
        return text;
    }

    if (theFlagValueIsStart(flag)) {
        return getFirstThreeCharacters(text);
    }

    return getLastThreeCharacters(text);

}

console.log(getFirstOrLastThree('Javascript', 'start'));