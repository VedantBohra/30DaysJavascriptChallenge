//* Activity 1 Understanding Closures

//* Task 1

// Outer Function
function outerFunc(outerVariable){
    // declaring a variable in outer Function
    const outerValue = outerVariable

    // Inner Function
    function innerFunc(){
        // accessing the variable from outer function
        return `outerValue is : ${outerValue}`
    }
    // outer Function returns the inner function
    return innerFunc

}
// Create an instance of outer function by calling the outer function
const getInnerFunc = outerFunc('hello world')

// Calling the inner function and log the result
console.log(getInnerFunc())


//* Task 2

// create counter main function
function createCounter(){
    let counter = 0

//* increment public method inside main function    
    function increment(){
        counter += 1;
    }

//* gets current value public method inside main function
    function getCurrentValue(){
        return counter
    }

//! main counter returns a object with public methods
    return{
        increment, 
        getCurrentValue
    }
}

//* Create an instance of the create counter
const myCounter = new createCounter()

myCounter.increment()
myCounter.getCurrentValue()

console.log(myCounter.getCurrentValue())

