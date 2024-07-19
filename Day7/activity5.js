//* Activity 5 Object iteration

//* Task 8

const book = {
    title : "abcd",
    author : "ramlal",
    year : 1900,
    origin : "INDIA",
    bestSeller : true

}

//* for in will traverse through all keys of an object and can have access to its values

for (const key in book) {

        const element = `${key} : ${book[key]}`;
        console.log(element)
}

//* Task 9

console.log(Object.keys(book));

console.log(Object.values(book));