const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person);

const person1 = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person1, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person1); // { name: 'Roberto', lastName: 'Silva' }

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person1.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Ferreira' }

const person2 = {
  name:'Roberto',
};

const lastName1 = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person2,lastName1);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person2);

