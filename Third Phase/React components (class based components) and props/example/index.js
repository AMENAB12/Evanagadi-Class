// var chala = {
// name: 'chala',
// age: 8,
// };
// console.log(chala)


class Persone{
    constructor(name,age){
        this.name = name;
        this.age = age;
        }
        student() {
                return `${this.name} is evangadi student in group ${this.age}`;
        }

        getName(){
return this.name;
    
        }
}
let abe = new Persone("abebe", 33);
console.log(abe);
console.log(abe.student());

class Student extends Persone {

    constructor(grade, dep, name, age){
        super(name, age);
        this.grade = grade;
        this.dep = dep;
    }

}
let student = new Student ("A", "CS", "Abebe", 65)
console.log(student)
console.log(student.getName())



// var abe = new Persone("abebe", 4)
// var abee = new Persone("chala", 8)

// console.log(abe)
// console.log(abee)
// Persone.prototype.batch = "Oct, 2022"
// Persone.prototype.studentInfo = function() {
//     return `${this.name} is ${this.batch} evangadi student in group ${this.age}`;
// }

// console.log(abe.studentInfo());