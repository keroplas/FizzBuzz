 const fizzbuzz = require("./fizzbuzz")
// import fizzbuzz from './fizzbuzz.js';

describe("fizzbuzz", () => {

     test("test", () => {
         expect(true).toBe(true);
     });
     test('Devuelve fizz para múltiplos de 3', () => {
         expect('fizz').toBe(fizzbuzz(3));
         expect('fizz').toBe(fizzbuzz(9));
     });
    test('Devuelve fizzbuzz para múltiplos de 3 y 5', () => {     
        expect(fizzbuzz(15)).toBe('fizzbuzz'); });

     test('Devuelve Buzz para multiplos de 5', () => {
         expect(fizzbuzz(25)).toBe('buzz');
     });

     test('Devuelve un numero', () => {
         expect(fizzbuzz(32)).toBe("32");
     })
});

