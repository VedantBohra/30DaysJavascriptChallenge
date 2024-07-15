//* Activity 5 Combining Conditions

//* Task 7

//* For a leap year we have to consider three conditions

//* condition 1 : If a year is evenly divisible by 4 then we check condition no.2
//* condition 2 : check if the number is evenly divisible by 100 if yes then check condition no.3 if no then it is a leap year
//* condition 3 : check if a year is evenly divisible by 400 if a year is evenly divisible by 4 , 100 , 400 it is a leap year


//* let checkLeapYear = 1900

//* if(checkLeapYear % 4 == 0){  //* condition 1

//*     if(checkLeapYear % 100 == 0){ //* condition 2

//*             console.log(`${checkLeapYear} is a leap year`)

//*         }
//*         else(console.log(`${checkLeapYear} is not a leap year`))
//*     }
//*     else(console.log(`${checkLeapYear} is a leap year`))
//* }
//* else(console.log(`${checkLeapYear} is not a leap year`))

let checkLeapYear = 1900

if( (checkLeapYear % 4 == 0 && checkLeapYear % 100 !== 0) || checkLeapYear % 400){
    console.log(`${checkLeapYear} is a leap year`)

} else {
    console.log(`${checkLeapYear} is not a leap year`)

}




