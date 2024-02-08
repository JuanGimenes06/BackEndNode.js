const matematica = require("./moduleExport");

const resultadoSoma = matematica.soma(5, 3);
const resultadoSubtracao = matematica.subtracao(10, 4);

console.log(`Resultado da Soma é ${resultadoSoma}`)
console.log(`Resultado da Subtração é ${resultadoSubtracao}`)
