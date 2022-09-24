//Ex-1.dia-1
/*const myName = 'Edvan';
const birthCity = 'São Paulo';
let birthYear = 1980;

birthYear = 22;
//birthCity = 'Tokyo'; *é uma constante e seu valor não pode ser alterado.

console.log(myName);
console.log(birthCity);
console.log(birthYear);*/

//Ex-2.dia-1
/*const base = 5;
const heigth = 8;
const area = base * heigth;
const perimeter = base + heigth + base + heigth;

console.log(area);
console.log(perimeter);*/

//Ex-3.dia-1
/*const nota = 85;

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60){
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}*/

//Ex-4.dia-1
/*const currentHour = 23;
let message = '';

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22){
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18){
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14){
  message = 'Hora do almoço!!!';
} else {
  message = 'Hmmm, cheiro de café recém-passado';
}

console.log(message);*/

//Ex-5.dia-1
/*let weekDay = 'feriado';

if (weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D.');
} else if (weekDay == 'sábado' || weekDay == 'domingo') {
  console.log('FINALMENTE, descanso merecido UwU.');
} else {
  console.log('Dia da semana inválido!');
}*/

//Ex-6.dia-1
let statusCandidato = 'xablau';

switch (statusCandidato) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovada(o)!');
    break;

  case 'lista':
    console.log('Você está na nossa lista de espera.');
    break;

  case 'reprovada':
    console.log('Você foi reprovada(o).');
    break;

  default:
    console.log('Informação incorreta.');
}
