/* 
    Create a method that takes six parameters (a,b,c,d,e,f).
    - Add "a" to "b"
    - From the result, subtract the value of "c"
    - From the result of subtraction, multiply by "d" and do the division by "e"
    - And finally, make the result raised to the power of "f" 


    Crie uma função que recebe seis parâmetros, (a,b,c,d,e,f)
    - Some "a" e "b"
    - Do resultado, subtraia o valor de "c"
    - O resultado da subtração, multiplique por "d" e divida por "e"
    - E para finalizar, faça o resultado elevado a potência de "f"
*/

function arithmeticOperations(a, b, c, d, e, f) {
    return ((((a + b) - c) * d) / e) ** f;
}

console.log(arithmeticOperations(6, 2, 3, 4, 5, 2));