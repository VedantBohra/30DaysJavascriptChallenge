//* Activity 2 Practical Closures

//* Task 3

function generateID(){
   let id =  Math.floor((Math.random() * 1000)+1)

   function keepTrack(){
        id += 1
        return id
   }

   return keepTrack

}

const uniqueID = generateID()

console.log(uniqueID())


//* Task 4

function user(username){
    const  name = username

    function greet(){
        console.log(`Hello how are you ${name}`)
    }

    return greet
}

const greeting = new user("Vedant Bohra")

greeting()

//* Activity 3 Closures in loops

// Create an array of functions
const functions = [];

// Loop to create functions
for (let i = 0; i < 5; i++) {
    // Create a function that logs its index
    functions[i] = (function(index) {
        return function() {
            console.log(index);
        };
    })(i); // Immediately invoke the function with the current index
}

// Call each function to log its index
functions.forEach(fn => fn());