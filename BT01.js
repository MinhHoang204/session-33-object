let person = {
    name: "John",
    age: 30,
    address: "Hanoi"
};

console.log(person.name);
console.log(person.age);
console.log(person.address);
  
person.dateOfBirth = "01/01/1990";
delete person.age;
console.log(person);