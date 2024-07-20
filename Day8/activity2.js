//* Activity 2 Destructuring

//* The destructuring assignment syntax is a JavaScript expression that makes possible 
//* to unpack values from arrays, or properties from objects, into distinct variables.


//* Task 3 Array destructuring

const numbers = [1,2,3,4,5,6,7,8,9,10]

const [x,y,...rest] = numbers

console.log(x,y)

//* Task 4 object destructuring

const book = {
    title : "vandy",
    author : "vohn",
    year : 2003

}

const {title , author} = book

console.log(title,author)
