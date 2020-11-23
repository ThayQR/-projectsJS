/* let repete = 1

while(repete <= 3){
  alert("Mensagem:" + repete)
  repete = repete + 1
} */

let numInicial = 2;
let numFinal = 10;
let todosPares = []

while(numInicial <= numFinal){
  todosPares = todosPares + numInicial
  numInicial = numInicial + 2
}
alert(todosPares)