//* Activity 4 Default parameters

//* Task 7

const funcProd = function(num1,num2=1){
    const product = num1*num2
    return product
}

console.log(funcProd(10,100))  //* arguments will overwrite the default parameter 

