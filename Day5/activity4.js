//* Activity 4 Function parameters and default values

//* Task 7

const prodNum = (num1 , num2= 10) => { //* num2 default parameter but can be overwrite by arguments
      console.log(num1*num2)
}

prodNum(10)
prodNum(10,50)


//* Task 8 

const greetings = (personName,personAge=18) => {
    console.log(`hello ${personName} you are finally ${personAge} , Congratulations you are a adult now.`)
}

greetings("vedant")

