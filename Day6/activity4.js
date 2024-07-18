//* Activity 4 Array iteration

//* Task 10

const arr = [10,20,30,40,50,60,70,80,90,100]

for( i=0 ; i < arr.length ; i++){
    const arrElement = arr[i]
    console.log(`the value of ${i} element of the array is : ${arrElement}`)
}

//* Task 11

arr.forEach(element => {    //* traverse through each element of an array
    console.log(element)
});





