//* Activity 3 Arrow functions

//* Task 5

const sumNum = (num1 , num2 ) => {
    const result = num1 + num2
    return result
}

console.log(sumNum(100,200))

//* Task 6

const checkString = (str , char) => str.includes(char)

//* The includes() method returns true if a string contains a specified string.
//* Otherwise it returns false.

console.log(checkString("hello" , "e"));