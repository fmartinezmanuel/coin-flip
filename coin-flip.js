function flip() {
  return Math.random() >= 0.5;
}
function randomNumber(n) {
  if(n === undefined) {
    throw new Error("El input no debe estar vacio");
  }
  if(n <= 0){
    throw new Error("El input debe ser mayor a 0");
  }
  if(n > 1000000){
    throw new Error("El limite superir es: 1,000,000 mayor a eso no es aceptado, por favor corrige tu input");
  }
  if(n === 1){
    return 0;
  }
  function randomBinary(m){
    valueRandom = "";
    for (var i=0; i<m; i++) {
      valueRandom+= flip()? "1" : "0";
    }
    return valueRandom;
  }
  var maxValue = n-1;
  var result;
  do {
    result = parseInt(randomBinary( maxValue.toString(2).length ), 2);
  } while (result > maxValue);
  return result;
}
console.log(randomNumber());
