var card = prompt("¿Cuál es el número de tu tarjeta?");
var isValidCard = [];

for (var i = 1; i <= card.length; i ++) {
  isValidCard.unshift(i);
}

var multiplyPosition = [];
 for(var i = 1; i <= isValidCard.length; i++) {
    if([i]%2 === 0) {
    multiplyPosition.push([i]*2);

    if (multiplyPosition >=10)
    multiplyPosition = (multiplyPosition % 10) + (multiplyPosition/10);

 var oddPosition = [];
   for(var i = 1; i <= isValidCard.length; i++) {
    if([i]%2 !== 0) {
    oddPosition.push(i);

var result = [];
     result = oddPosition + multiplyPosition;
    }
    }
 }
 }
 /* }if(result % 10 === 0){
 console.log("Válida");
} else {
  console.log("inválida");
}*/

 console.log(result);


//4213166063680734
