//* Activity 1 : Arithmetic Operations

//* Task 1

const num1 = 10
const num2 = 25
 
console.log(`The addition of two numbers is : `,num1+num2)
 
 //* Task 2
 
  
console.log(`The subtraction of two numbers is : `,num1-num2)
 
 //* Task 3
  
console.log(`The multiplication of two numbers is : `,num1*num2)

 //* Task 4
 
console.log(`The division of two numbers is : `,num1/num2)

 //* Task 5
  
console.log(`The remainder left after divison of two numbers is : `,num1%num2)
 
 
 //* Activity 2 : Assignment Operators
 
 //* Task 6
 
 let str1 = "hello" 
 console.log(str1 += " world") //* add string " world" in str1 and assign it to str1
 
 //* Task 7
 
 let str2 = "hello world" 
 console.log(str1 -= " world") //* output NaN
 
 let num = 40 
 console.log(num -= 20)
 
 
 //* Activity 3 : Comparison Operators
 
 //* Task 8 
 
 const marks1 = 20
 const marks2 = 55
 
 console.log(marks1>marks2) //* output boolean value false
 console.log(marks1<marks2) //* output boolean value true
 
 //* Task 9
 
 const marks3 = 55
 const marks4 = 55
 
 const marks5 = 56
 
 console.log(marks3>=marks4>=marks5) //* false 1 >= 56
 console.log(marks3<=marks4<=marks5) //* true 1 <=56
 
 //* Task 10
 
 const number1 = 100
 const number2 = "100"
 
 console.log(`The equality check of two numbers is : ${number1 == number2}`) //* equality check only check values 
 console.log(`The equality check of two numbers is : ${number1 === number2}`) //* strict equality checks both the value and data type
 
 
 //* Activity 4 : Logical Operators
 
 //* Task 11
 
 const val1 = 200
 const val2 = 400 
 const val3 = 500
 
 console.log((val1>val2)&&(val3>val2)&&(val3>val1)) //* any condition false results in whole expression value false
 
 //* Task 12
 
 console.log((val1>val2)||(val3>val2)||(val3>val1)) //* until all the conditions are false it will results true
 
 //* Task 13
 
 console.log(!((val1>val2)||(val3>val2)||(val3>val1))) //* negates the final value of whole expression
 
 
 //* Activity 5 : Ternary operator
 
 const checkNum = 100
 
 //* condition ? ifExpressionIsTrue : ifExpressionIsFalse
 
 checkNum > 0 ? console.log("the number is positive") : console.log("the number is negative") 