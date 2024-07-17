//* Activity 1 function declaration 

//* Task 1

function checkEven(checkNum){
    if(checkNum % 2 == 0){
        console.log(`The given number ${checkNum} is even`)
    }
    else{
        console.log(`The given number ${checkNum} is odd`)
    }
} 

checkEven(10)

//* Task 2

function squareNum(numSquare){

    const result = (numSquare * numSquare)
    return result
     
}

console.log(squareNum(20));

