//* Activity 2 Object methods

//* Task 3

const book = {
    title : "vandy bio",
    author : "vandy",
    year : 2003,

    bookInfo : function(){
        console.log(`The title of book is : ${this.title} and The author of the book is : ${this.author}`)
    },

    bookYear : function(year){
    console.log(`The year of book is : ${book.year = year}`)       
       
  }

}

book.bookInfo()

//* Task 4

book.bookYear(2010)

