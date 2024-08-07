//* Activity 2 Class Inheritance

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet(){
        return `Hello my name is ${this.name} and I am ${this.age} years old`
     }
}

class Student extends Person{
    constructor(name,age,studentId){
        super(name,age)
        this.studentId = studentId
    }

    stuId(){
        return this.studentId
    }
    //! The greet method is overriden
    greet(){
        return `Hello my name is ${this.name} , I am ${this.age} years old and my student ID is ${this.studentId}`
    }
}

const collectInfo = new Student("Vedant",21,6969)

console.log(collectInfo)

console.log(`So the student Id is : ${collectInfo.stuId()}`)

//! The greet overriden method is logged in console

console.log(collectInfo.greet())