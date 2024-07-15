//* Feature 4 Assign grades based on the score script

let score = 55

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
