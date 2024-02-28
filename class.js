class Person {
    constructor(name,age,job){
        this.name =name;
        this.age = age;
        this.job= job;

    }
    Play(){
        console.log(`${this.name} is Playing with his ${this.job} and ${this.age} years old`);
    }
}
const person1 = new Person('Sakib',35,'SE');
const person2 = new Person('Tamim',36,'NE');
person1.Play();
person2.Play();