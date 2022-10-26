/* 
    Create a method that takes six parameters (a,b,c,d,e,f).
    - Add "a" to "b"
    - From the result, subtract the value of "c"
    - From the result of subtraction, multiply by "d" and do the division by "e"
    - And finally, make the result raised to the power of "f" 
*/

function mathOperators(a, b, c, d, e, f) {
    return ((((a + b) - c) * d) / e) ** f;
}

console.log(mathOperators(6, 2, 3, 4, 5, 2));