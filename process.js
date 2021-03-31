/*
processe ->vai trazer informações sobre o node, sistema operacional e outra coisas usando o (argv) ele meio que vai resumir
ex: console.log(process);

console.log(process.argv); -> resumido em formato de array


*/

console.log(process.argv);

// outra forma aceitavel, lembrando que no terminal tem que colocar o nome ex node nome do arquivo rodrigo costa martins
console.log('seu nome é ', process.argv[2] + '' + process.argv[3]);


// outra maneira é

const primeiroNome = process.argv[0];
const segundoNome = process.argv[1];

console.log(`seu nome é ${primeiroNome} ${segundoNome}`);

// PASSANDO FLAGS COM ARGUMENTO
// no terminal fazemo assim, segue abaixo o codigo node nome do aquivo aqui é process ex: node process.js --name "rodrigo" --saltacao"bem vindo" 
