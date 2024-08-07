//* Activity 4 Getters and Setters

//* Task 7

class Person{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
        
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}` 
    }
}

const person = new Person("vedant" , "bohra")

//! getters are accessed through instances rather than classes itself

console.log(person.fullName);


//* Task 8

class Person2{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName

    }

    get fullName(){
        return `${this.firstName} ${this.lastName}` 
    }

    set fullName(updateName){

        //* array destructuring
        const [firstName , lastName] = updateName

        this.firstName = firstName
        this.lastName = lastName
    }
}

const person2 = new Person2("John","doe")

console.log(person2.fullName)

console.log(person2.firstName)