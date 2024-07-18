//* Activity 3 Array methods intermediate

//* Task 7

const arr = [10,20,30,40,50]

const doubleArr = arr.map((val) => {
    const result = 2*val
    return result 
})

console.log(doubleArr)

//* (method) Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]
//* Calls a defined callback function on each element of an array, and returns an array that contains the results.

//* callbackfn — A function that accepts up to three arguments.  
//* The map method calls the callbackfn function one time for each element in the array.


//* Task 8

const arr1 = [11,21,31,41,50,100,200,400]

const evenArr = arr1.filter( (val) => val%2 == 0) //* returns a new array with results 

console.log(evenArr);

//* Task 9

//* read more about reduce method for arrays

const sumArr = arr1.reduce((curr,acc) => { 
    const sum = curr+acc
    return sum
})

console.log(sumArr)