//* Activity 5 Enhanced Objects Literals

//* Task 8

const propname = 'age'

const student = {
    name : "vedant",
    [propname] : 21,  //* Computed property names used expression to define property names
    marks : 50,
    prod(Marks) {  //* defining a method inside an object
        this.marks += Marks 
        return Marks
    }
    
}

console.log(student.prod(100))
console.log(student)

//* Task 9

const umar = 'age'
const number = 'marks'
const naam = 'name'

const student2 = {
   [umar] : 10,        //* Computed property names
   [number] : 73,
   [naam] : "vedant"
}

console.log(student2)