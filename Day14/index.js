//* Activity 1 Class Definition 

//* Task 1

class Person {
    constructor(name,age){
        this.name = name  //! this refers to the instance object of the class
        this.age = age    //! 'this' refers to the instance being created
    }

    greet(){
       return `Hello my name is ${this.name} and I am ${this.age} years old`
    }
}

const stroreData = new Person("vedant",21)

console.log((stroreData))

console.log(stroreData.greet())

//* Task 2


class Person2{
    constructor(name,age){
        this.name = name  //! this refers to the instance object of the class
        this.age = age    //! 'this' refers to the instance being created
    }

    greet(){
       return `Hello my name is ${this.name} and I am ${this.age} years old`
    }

    updateAge(newAge){
        this.age = newAge
        console.log(`age updated to : ${this.age}`)
    }
}

const collectData = new Person2("vedant",21)

collectData.updateAge(23)
