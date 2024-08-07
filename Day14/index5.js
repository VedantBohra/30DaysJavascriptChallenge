//* Activity 5 Private Fields

//* Task 9

class Balance{
    //* Defining a private field

    #balance

    constructor(initialBalance){
        this.#balance = initialBalance
    }

    //! Method to deposit money

    deposit(amount){
        if(amount>0){
            this.#balance += amount
            console.log(amount)
        }
        else{
            console.log(`The amount is not positive please enter a positive number`)
        }
    }

    //! method to display balance
    getBalance(){
        return this.#balance
    }

}

const balance = new Balance(100)

console.log(balance.getBalance())

balance.deposit(1000)

console.log(balance.getBalance())


//! SyntaxError: Private field '#balance' must be declared in an enclosing class
// console.log(balance.#balance)

//* Task 10

class Balance2{

    //* Defining a private field
    #balance

    constructor(initialBalance){
        this.#balance = initialBalance
    }

    //! Method to deposit money
    deposit(amount){
        if(amount>0){
            this.#balance += amount
            console.log(`Amount to deposit : ${amount}`)
        }
        else{
            console.log(`The amount is not positive please enter a positive number`)
        }
    }

    //! Withdrawl method
    withdrawl(amount){
        this.#balance -= amount
        console.log(`Amount for withdrawl : ${amount}`)
    }

    //! method to display current balance
    getBalance(){
        return this.#balance
    }

}


const getAccountInfo = new Balance2(4000)

console.log(`Current Balance is : ${getAccountInfo.getBalance()}`)

getAccountInfo.deposit(5000)

console.log(`Current Balance is : ${getAccountInfo.getBalance()}`)

getAccountInfo.withdrawl(4000)

console.log(`Current Balance is : ${getAccountInfo.getBalance()}`)
