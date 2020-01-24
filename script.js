function todosOsNumeros() {
  
  const numeros = [4,11,22,52,34]; /* criando uma array bagunçada*/
  const numeros2 = [4,11,12,22,52,34,10,,30,20,40,100];

  const numeros3 = numeros2.filter( a => !numeros.includes( a ) );
  
  function compararNumeros(a,b) {/* Função para  acolocar em ordem*/
    return  a - b;
  }
  numeros3.sort(compararNumeros);
  console.log(numeros3);
}


todosOsNumeros();












