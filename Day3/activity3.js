//* Activity 3

//* Task 4

let weekDay = 5

switch (weekDay) {

    case 1:
        console.log(`Number ${weekDay} so week day name is Monday`)
        break;

    case 2:
        console.log(`Number ${weekDay} so week day name is Tuesday`)
        break;

    case 3:
        console.log(`Number ${weekDay} so week day name is Wednesday`)
        break;

    case 4:
        console.log(`Number ${weekDay} so week day name is Thursday`)
        break;

    case 5:
        console.log(`Number ${weekDay} so week day name is Friday`)
        break;

    case 6:
        console.log(`Number ${weekDay} so week day name is Saturday`)
        break;

    case 7:
        console.log(`Number ${weekDay} so week day name is Sunday`)
        break;
                        
        default:
        console.log("Please enter a right number between 1-7")    
        break;
}

//* Task 4

let score = 84

//* The key value in switch (key) is used true rather than score becasue in
//* javascript we cant directly use expression in cases so we use if-else ladder way

switch (true) { 
        case  (score <= 100 && score >= 90) :
        console.log(`The score is ${score} so the grade is A`)
        break;

        case (score < 90 && score >= 80) :
        console.log(`The score is ${score} so the grade is B`)
        break;    

        case (score < 80 && score >= 70) :
        console.log(`The score is ${score} so the grade is C`)
        break;

        case (score < 70 && score >= 60) :
        console.log(`The score is ${score} so the grade is D`)
        break;

        case (score < 60 && score >= 50) :
        console.log(`The score is ${score} so the grade is E`)
        break;
   
        default: console.log("You have failed this class")
        break;
}

