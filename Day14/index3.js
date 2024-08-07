//* Activity 3 Static method and properties

//* Task 5

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    static greet(name,age){
         return `Hello my name is ${name} and I am ${age} years old`
     }
}

console.log(Person.greet("vedant",21))

//* Task 6

class Student extends Person{

    static studentCount = 0; //! variable for keeping the student Count

    constructor(name,age,studentId){
        super(name,age)
        this.studentId = studentId
        //* Increment the student Count property
        Student.studentCount++
    }

    stuId(){
        return this.studentId
    }
    //! The greet method is overriden
    greet(){
        return `Hello my name is ${this.name} , I am ${this.age} years old and my student ID is ${this.studentId}`
    }

    static logStudentCount(){
        console.log(`the total number of students made : ${this.studentCount}`)
    }
}

const person1 = new Student("vedant",21,6969)
const person2 = new Student("vedant2",22,7070)

Student.logStudentCount()