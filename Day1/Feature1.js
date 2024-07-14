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