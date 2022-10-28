let numberOne = Number(prompt("Digite o primeiro número: "));
let numberTwo = Number(prompt("Digite o segundo número: "));

const sum = numberOne + numberTwo;
const subtraction = numberOne - numberTwo;
const multiplication = numberOne * numberTwo;
const division = (numberOne / numberTwo).toFixed(1);
const restDivision = numberOne % numberTwo;


alert(`A soma entre ${numberOne} e ${numberTwo} é igual a: ${sum}`);
alert(`A subtração entre ${numberOne} e ${numberTwo} é igual a: ${subtraction}`);
alert(
  `A multiplicação entre ${numberOne} e ${numberTwo} é igual a: ${multiplication}`
);
alert(`A divisão entre ${numberOne} e ${numberTwo} é igual a: ${division}`);
alert(
  `O resto da divisão entre ${numberOne} e ${numberTwo} é igual a: ${restDivision}`
);

if ((sum % 2) === 0) {
  alert(`O resultado da soma entre ${numberOne} e ${numberTwo} é: PAR`)
} else {
  alert(`O resultado da soma entre ${numberOne} e ${numberTwo} é IMPAR`)
}

if(numberOne === numberTwo) {
  alert(`Os números ${numberOne} e ${numberTwo} são: IGUAIS`)
} else {
  alert(`Os números ${numberOne} e ${numberTwo} são: DIFERENTES`)
}