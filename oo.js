function People(name, age) {
  this.name = name;
  this.age = age;
  if (isNaN(age)) {
    throw new Error(`Age: ${age}. Age must be a number`);
  }
}

function Adult(name, age, job) {
  this.job = job;

  People.call(this, name, age);
}

function Child(name, age, school) {
  this.school = school;

  People.call(this, name, age);
}

const adult1 = new Adult("Epaminondas", 83, "aposentado");
console.log(adult1);

const child1 = new Child("Enzo", 10, "Colegio 1");
console.log(child1);

const adult2 = new Adult("Joao Legado", 45, "digitador");
console.log(adult2);
