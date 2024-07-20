//* Rest and spread operator

//* Task 5

//* spread operator to spread the elements of an array and objects

const arr = [1,2,3,4,5]

const newArr = [...arr,6,7,8,9,10]

console.log(newArr)

const arr2 = [20,30,40,50]

//* we can use spread operator to merge arrays as well

const finalArr = [...newArr , ...arr2]

console.log(finalArr)


//* Task 6 

//* Rest operator to access the rest of the value from an array or an object
//* Rest operator also used when limited parameters more arguments for a function

 function sumFun(...args){
    
    return args.reduce( (curr,acc) => curr + acc )

}

console.log(sumFun(10,20,30,40,50,60,70,80,90,100));