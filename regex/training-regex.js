
/* 
    Brincando com RegExp
*/

// Validar número de telefone
const validatePhone = new RegExp(/\d{2}[-]?\d{4,5}[-]?d{4}/g);

// Validar nome próprio
const validateName = new RegExp(/[A-Z][a-z]+/g);
// ou
const validateName2 = new RegExp(/[A-Z][a-z]{1,}/g);

// Validar e-mail
const validateEmail = new RegExp(/\w+\S\w+[@]\w+[.]\w{2,3}([.]\w{2})?/g);

