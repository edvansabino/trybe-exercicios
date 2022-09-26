//Exercícios de Fixação
//Ex.fix.1
/*let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 }
};*/

//Ex.fix.2 For In
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let key in names) {
  console.log('Olá, ' + names[key] + '!');
}
