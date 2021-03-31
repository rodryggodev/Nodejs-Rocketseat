// module e export module.exports = 'qualquer coisa'
/*
nada mais é que um aquivo que vai conter alguma coisa dentro, e quando eu quiser usar ele, em outro arquivo
basta eu colocar no aquivo que eu quero que ele seja chamando usando o require

aquivo1 que dentro tem ola mundo, mas eu preciso dele la no arquivo2

entro no arquivo2 e vou criar uma const ex:
const qualquer coisa = require('camino da pasta e o nome do aquivo que aqui é o aquivo1');


esse aquivo ta ligado ao require.sj
*/
module.exports = 'Do meu módulo esta ligado ao arquivo require.js esta sendo linkado a ele';
