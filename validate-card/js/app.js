var cardNumber = prompt("Escribe tu numero");

function isValidCard (cardNumber){
  if(cardNumber.lenght !== 16){
    return Error;
  } else {
  var inverseArr = [];
  for (var i = 0; i <= 16; i ++) {
       inverseArr.unshift(cardNumber[i]);{
  }
}return (inverseArr);
}
}
 // Multiplicar por dos los digitos de los numeros que ocupan posiciones pares
  var multiply = 0;
  for(var i = 0; i <= 16; i++) {
    if(i%2 === 0){
 console.log(i*2);
}
}
