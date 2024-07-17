//* Activity 5 Higher Order Functions

//* Task 9

const highFunc = ( funName,num ) => {  //* call function num times use loop
    for (let i = 1; i <= num; i++) {
        funName()
    }
}

const callfun = () => console.log("hello how are you doing ?")


highFunc(callfun,3)


//* Task 10

const highOrderFun = (fun1 , fun2 , val) => {
    const result = fun1(val)
    const finalResult = fun2(result)
    return finalResult
}

const sum = (num1) => num1+3 

const mul = (val1) => val1 * 4

console.log(highOrderFun(sum,mul,10))



// // Activity 5 Higher Order Functions
// // Task 9 Making a Function that take a function , number as parameters and run the given function as many times as the given number
// // function declaration
// function runMultiplyTimes(func, num , ...args){
//     // creating an empty array to store the results if function returns a value
//     let results = []
//     // running the given function as many times as the given number
//     for(let i = 0; i < num; i++){
//         // calling the given function with each iteration and storing the result in a variable
//        let result = func(...args);
//        // if the function returns a value pushing the result into the results array
//        if(result !== undefined){
//            results.push(result);
//        }
//     }
//     // if the results array is not empty returning the results array
//     if(results.length > 0){
//         return results; 
//     }
//     // if the function don't return any value just console logging it and returning null
//     return null
// }
// // calling a function as a parameters that returns a value and console logging as a arr
// console.log(runMultiplyTimes(greet, 5, "John"))
// // calling a function as a parameters that just console.log the message and don't return anything 
// console.log(runMultiplyTimes(() => console.log("Hello World"), 5))

// // Task 10 Making a Function that take two function , value as parameters and run the given function as many times as the given number
// // function declaration
// function takeTwofunctions(func1, func2, num, ...args){
//     // storing the result of the first function in a variable
//     let result = func1(num, ...args);
//     // checking if the result is not undefined
//     if(result !== undefined){
//         // storing the result of the second function in a variable
//        let finalResult = func2(result);
//        // finally returning the final result
//        return finalResult;
//     }
//     // if the function don't return any value just console logging it and returning null
//     return 'function 1 does not return any value to give to the function 2'

// }
// // printing the result of the takeTwofunctions function
// console.log(takeTwofunctions(sum, square, 5,5))