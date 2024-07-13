 //* Activity 1 : variable declaration

 var age = 21 
 console.log(age)

 let name1 = "vedant"
 console.log(name1)

 //* Activity 2 : Constant declaration

 const isAdult = true;
 console.log(isAdult)

 //* Activity 3 : Data Types

 const marks = 100
 console.log(typeof marks)

 const name2 = "Ram"
 console.log(typeof name2)

 const isGoodMarks = true
 console.log(typeof isGoodMarks)

 const student = {
     name3 : "Sohan",
     age : 22
 }
 console.log(typeof student)

 const items = ["eggs" , "drinks" , "bread" , "candy"]
 console.log(typeof items)

 //* Activity 4 : Reassigning Variables

 let schoolName = "MVM"
 console.log(schoolName)

 schoolName = "BVB"
 console.log(schoolName)

 //* Activity 6 : Understanding const

 //! const subject = "Maths"
 //! subject = "science"      

 //? error thrown : TypeError

 //*   Feature 1 : Write a script that declares variables of different data types  
 //*               and logs both the value and type of each variable to the console
 
 const a = 10 //* Number
 const b = "vedant" //* String
 const c = false //* boolean

 const d = ["item1" , "item2" , "item3" , "item4" , "item5"] //* Array
 console.log(Array.isArray(d)) //? To check the passed value d is an Array

 const e = { idName : "vedant" , idNum : 3456 } //* object

 const f = null //* null 
 let g //* undefined

 const h = Symbol("123") //* Symbol

 console.log(typeof a, `: data type of variable`, `and ${a} is the value`)
 console.log(typeof b, `: data type of variable`, `and ${b} is the value`)
 console.log(typeof c, `: data type of variable`, `and ${c} is the value`)
 console.log(typeof d, `: data type of variable`, `and ${d} is the value`)

 console.log(typeof e, `: data type of variable`,`and ${JSON.stringify(e)} is the value`) //* printing values of objects

 console.log(typeof f, `: data type of variable`, `and ${f} is the value`)
 console.log(typeof g, `: data type of variable`, `and ${g} is the value`)
 console.log(typeof h, `: data type of variable`,`and ${h.toString()} is the value`)
 
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

 
 




