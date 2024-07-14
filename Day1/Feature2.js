//* Feature 2 : Reassignment Demo Create a script that demonstrates the difference
//*             in behavior between let and const when it comes to the reassignment

let myAge = 21
try{
    myAge = 20
    console.log(`my age is : ${myAge}`)
}
catch(error){
    console.log("Type error is seen")
}

//* typeError : Assignment to constant variable

 const myAge1 = 25

 try{
     myAge1 = 24
     console.log(`my age is : ${myAge1}`)
 }

 catch(error){
    console.log("TypeError : Assignment to constant variable")
 }