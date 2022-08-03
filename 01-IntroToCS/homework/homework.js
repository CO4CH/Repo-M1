'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  num = String(num)
  binarioR = num.split('').reverse().join('');
  let Decimal = 0;
  for (let i = 0; i < num.length ; i++){
      Decimal = Decimal + binarioR.charAt(i) * Math.pow(2 , i);
  }
  return Decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let Binario = []
  while (num!==0){
      let residuo = parseInt(num%2)
      num = Math.floor(num/2);
      Binario.push(residuo);
  }
  return Binario.reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}