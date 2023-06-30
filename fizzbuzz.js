function fizzbuzz(valor) {
    if (valor % 3 === 0 && valor % 5 === 0) {
      return 'fizzbuzz';
    } else if (valor % 3 === 0) {
      return 'fizz';
    } else if (valor % 5 === 0) {
      return 'buzz';
    } else {
      return valor.toString();
    }
}
   module.exports = fizzbuzz;
// export default fizzbuzz;