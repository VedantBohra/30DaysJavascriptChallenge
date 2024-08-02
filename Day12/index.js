//* Activity 1 Error Handling Basic try catch

//* Task 1

function reassign(){
    try{
        const hello = "how are you ?"
        hello = "i am fine"
    }
    catch(err){
        console.log(`this cant be done because of ${err}`)
    }
}

reassign()

//* Task 2

function divide(num1,num2){
  if(num2===0){
    throw new Error('cannot divide by zero') //! creates a new error object with a message
  }
    const results = num1/num2
    return results    
}

try{
    console.log(divide(10,0))
}
//! catch() catches the error object which have a message
catch(err){
    console.log(`Error : ${err.message}`)
}


//* Activity 2 

//* Task 3

try{
    console.log('you are the best')
}
catch(err){
    console.log(err)
}
finally{
    console.log('yes i am the best') //! finally block 
}

//* Activity 3 Custom Error Class

//* Task 4

//! custom error class

class DivisionByZeroError extends Error {
    constructor(message) {
        super(message); //! Call the parent class constructor with the message
        this.name = "DivisionByZeroError"; //! Set the name property to the name of the custom error class
    }
}

function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new DivisionByZeroError("Cannot divide by zero");
    }
    return numerator / denominator;
}

//! handle the custom error

try {
    const result = divideNumbers(10, 0); //! This will throw a DivisionByZeroError
    console.log(result);
} catch (err) {
    if (err instanceof DivisionByZeroError) {
        console.error(`Custom Error Caught: ${err.name} - ${err.message}`);
    } else {
        console.error(`Unexpected Error: ${err.message}`);
    }
}

//* Task 5

const func = function(user){
    if(user===''){
        throw new Error("User input is empty please write something") //! custom error object with a message
    }

    console.log(user)
    return user
}

//! Error handling

try{
    func("hello how are you")
}
catch(err){
    console.log(`${err.message}`)
}

//! Testing the custom error

try{
    func("")
}
catch(err){
    console.log(`${err.message}`)
}

//* Activity 4 Error handling with promises

//* Task 6

const promise = new Promise((res,rej)=>{
    function random(){
        const num = Math.floor(Math.random()*10)+1

        if(num >= 5){
            res("The promise have been resolved")
        }
        else{
            rej("The promise have been rejected")
        }    
    }
    random()
})

promise.then(value => console.log(value))
       .catch(err => console.log(err))

//* Task 7

const promise2 = new Promise((res,rej)=>{
    function random(){
        const num = Math.floor(Math.random()*10)+1
    
        if(num >= 5){
            res("The promise have been resolved")
        }
        else{
            rej("The promise have been rejected")
        }    
    }
    random()
})

//! Handling promise through async await

async function errorHandler(){
    try{
        const handlePromise = await promise2
        console.log(handlePromise)
    }
    catch(err){
        console.log(err)
    }
}

errorHandler() //! call the error handler to handle the error

//* Activity 5 Graceful Error Handling in fetch

//* Task 8

//! Using fetch to request data from an invalid URL

fetch("https://invalid-url-example.com/data")
    .then(response => {
        //! Check if the response is ok (status code is in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); //! Assuming the response is in JSON format
    })
    .then(data => {
        console.log(data); //! Handle the data if the fetch was successful
    })
    .catch(error => {
        //! This block will handle any errors that occur during the fetch
        console.error("Fetch error: ", error.message);
    });

//* Task 9

const lastProm = fetch("https://invalid-url-example.com/data")

async function lastErrHandler(){
    try{
        const lastErr = await lastProm
        console.log(lastErr)
    }
    catch(err){
        console.log(err.message)
    }
}

lastErrHandler()

