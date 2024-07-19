//* Activity 3 Nested objects

//* Task 5 

const library = {
    name : "central library",

    books : [
        {
            title : "Greatest thief",
            author : "vohn",
            year : 2010
        },

        {
            title : "Greatest leaf",
            author : "cena",
            year : 2005
        },

        {
            title : "Greatest brief",
            author : "john",
            year : 2007
        }
    ]
}

console.log(library)

//* Task 6

console.log(library.name)

library.books.forEach(book => {
    console.log(`the title of the book is : ${book.title}`)
});

