//* This keyword

//* Task 7

const book = {
    title : "vandy bio",
    author : "vandy",
    year : 2003,

    bookInfo : function(){
        console.log(`The title of book is : ${this.title} and The author of the book is : ${this.author}`)
    }
} 

book.bookInfo()
