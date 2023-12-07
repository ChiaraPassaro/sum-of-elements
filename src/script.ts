// 2. Gli array svolgono un ruolo importante nella programmazione. Vengono utilizzati per raggruppare tipi di dati simili.
// Un array ha un nome comune e ogni singolo elemento è accessibile tramite un indice.

// In questo esercizio lavoreremo con un array di 10 numeri interi, come segue: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]. 0 è il primo indice e 9 è l'ultimo indice dell'array.

// Scrivere una funzione che riceva due numeri interi come parametri. La funzione restituisce la somma degli elementi nell'array trovato tra questi due numeri interi.

// Ad esempio, se utilizziamo 30 e 60 come parametri, la funzione dovrebbe restituire 180.

// Alcuni requisiti aggiuntivi:
// I due numeri interi passati alla funzione dovrebbero essere positivi; in caso contrario, la funzione dovrebbe restituire -1.

// Convalidare che il primo numero intero sia inferiore al secondo numero intero. In caso contrario, la funzione dovrebbe restituire 0.

// Se il primo intero è nell'array e il secondo è superiore a 100, ad esempio 90 e 120, la funzione dovrebbe restituire la somma degli interi che si trovano all'interno dell'array e nell'intervallo indicato. In questo caso sarebbero 190.

// Se nell'array non vengono trovati entrambi i numeri interi, ad esempio 110 e 120, la funzione dovrebbe restituire 0.



const sumOfElements = function (min: number, max: number, array: number[]) {
  if (min < 0 || max < 0) return -1
  if (min > max) return 0
  let indexMin = array.indexOf(min)
  let indexMax = array.indexOf(max)
  if (indexMin === -1 && indexMax === -1) return 0;
  indexMax === -1 && (indexMax = array[array.length - 1])

  let sum = 0
  for (let i = indexMin; i <= indexMax; i++) {
      sum += array[i]
  }
  return sum
};

const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(sumOfElements(10, 100, array)); // 550
console.log(sumOfElements(30, 60, array)); // 180
console.log(sumOfElements(70, 40, array)); // 0
console.log(sumOfElements(90, 100, array)); // 190
console.log(sumOfElements(10, 10, array)); // 10
console.log(sumOfElements(100, 100, array)); // 100
console.log(sumOfElements(-10, 100, array)); // -1
console.log(sumOfElements(10, -100, array)); // -1





  
