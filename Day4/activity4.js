//* Activity 4 Nested loops

//* Task 7

let rows = 5

for (let i = 1; i <= rows; i++) {

    let stars = ""
    
    for (let col = 1; col <= i; col++) {
    
        stars += "*"
        
    }
    console.log(stars)
}

