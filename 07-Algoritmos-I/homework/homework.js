'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [];
  let resto = num;

  function isPrime(numero){
    if(numero<2||(numero%2==0&&numero!=2))
       return false;
    for(let x=3; x*x<=numero; x+=2)
       if( numero%x==0 )
          return false;
    return true;
  } 
  
  for (let i = resto-1; i > 1; i--) {
    if (isPrime(i)){
      while (resto%i === 0){
        resto = resto/i;
        factores.unshift(i);
      }
    }
  }
  factores.unshift(1);
  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var orderArray = array.slice();
  for (let i = 0; i < orderArray.length; i++) {
    for (let n = 0; n < orderArray.length - i; n++) {
      if (orderArray[n] > orderArray[n+1]) {
        let temp = orderArray[n];
        orderArray[n] = orderArray[n+1];
        orderArray[n+1] = temp;
      }
    }
  }
  return orderArray;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var orderArray = array.slice();
  for (let i = 1; i < orderArray.length; i++) {
    let key = orderArray[i];
    let j = i - 1;

    while (j >= 0 && orderArray[j] > key) {
      orderArray[j + 1] = orderArray[j];
      j = j - 1;
    }
    orderArray[j + 1] = key;
  }
  return orderArray;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var orderArray = array.slice();
  for (let i = 0; i < orderArray.length - 1; i++) {
    let minIndex = i

    for (let n = i; n < orderArray.length; n++) {
      
      if (orderArray[n] < orderArray[minIndex]) {
        minIndex = n
      }
    }
    let temp = orderArray[i];
    orderArray[i] = orderArray[minIndex];
    orderArray[minIndex] = temp;
  }
  return orderArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
