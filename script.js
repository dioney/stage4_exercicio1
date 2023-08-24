let number1 = prompt("Digite um número para o valor 1:");
let number2 = prompt("Digite um número para o valor 2:");
let sum = Number(number1) + Number(number2);

alert(`A soma de ${number1} e ${number2} é: ${Number(number1) + Number(number2)}`);
alert(`A subtração de ${number1} e ${number2} é: ${Number(number1) - Number(number2)}`);
alert(`A multiplicação de ${number1} e ${number2} é: ${Number(number1) * Number(number2)}`);
alert(`A divisão de ${number1} e ${number2} é: ${Number(number1) / Number(number2)}`);
alert(`O resto da divisão de ${number1} e ${number2} é: ${Number(number1) % Number(number2)}`);

if((Number(number1) % Number(number2) == 0)){
    alert(`A soma dos números é PAR: ${sum}`)
}else{
    alert(`A soma dos números é ÍMPAR: ${sum} `)
}

if(number1 != number2){
    alert(`Os números: ${number1} e ${number2} são diferentes!`)
}else{
    alert(`Os números: ${number1} e ${number2} são iguais!`)
}

