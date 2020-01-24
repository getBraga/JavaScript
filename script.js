const numeros = [4,11,22,52,34]; /* criando uma array bagunçada*/
const numeros2 = [4,11,22,52,34,10,,30,20,40,100];
const numeros3 = [];
function compararNumeros(a,b) {/* Função para  acolocar em ordem*/
  return  a - b;
}


numeros2.forEach((elemento) => {
  if(numeros.indexOf(elemento) === -1)
  numeros3.push(elemento)
}) 

numeros3.sort(compararNumeros)
console.log(numeros3);















