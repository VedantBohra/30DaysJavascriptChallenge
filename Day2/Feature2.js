//* Feature 2 Comparison operator and logical operator

const num1 = 100
const num2 = 50

console.log((num1>num2)&&(num1<num2)) //* use of < > comparison operator and && logical operator
console.log((num1>num2)||(num1<num2)) //* use of < > comparison operator and || logical operator
console.log(!(num1>num2)) //* use of < > comparison operator and ! logical operator

const number1 = 50
const number2 = 50
const number3 = 100

console.log((number1 >= number2)&&(number2 >= number3)&&(number3 >= number1)) //* use of >= comparison operator and && logical operator
console.log((number1 >= number2)||(number2 >= number3)||(number3 >= number1)) //* use of >= comparison operator and || logical operator
console.log(!((number1 >= number2)&&(number2 >= number3)&&(number3 >= number1))) //* use of >= comparison operator and ! logical operator

console.log((number1 <= number2)&&(number2 <= number3)&&(number3 <= number1)) //* use of <= comparison operator and && logical operator
console.log((number1 <= number2)||(number2 <= number3)||(number3 <= number1)) //* use of <= comparison operator and || logical operator
console.log(!((number1 <= number2)&&(number2 <= number3)&&(number3 <= number1))) //* use of <= comparison operator and ! logical operator

const val1 = 500
const val2 = "500"

console.log(val1 == val2) //* equality check only values
console.log(val1 === val2) //* strict equality check values and data type
