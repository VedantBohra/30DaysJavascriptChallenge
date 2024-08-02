//* Activity 1 Understanding promises

//* Task 1

const promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("hey its been 2sec") //! promise is resolved with a value
    },2000)
})

promise.then(message =>{   //! .then() catches that resolved value
    console.log(message)
})


//* Task 2

const promise1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        reject("hey its been 2sec")  //! promise is rejected with a reason
    },2000)
})

promise1.
then(message =>{   //! .then() will not run as the promise is rejected
    console.log(message)
})
.catch(error=>{   //! handling the error
    console.log(error)
})


//* Task 3

const newPromise1 = new Promise((res,rej) =>{
    setTimeout(() =>{
        res("hey its been 1sec")
    },1000)
})

const newPromise2 = new Promise((res,rej) =>{
    setTimeout(() =>{
        res("hey its been 2sec")
    },2000)
})

const newPromise3 = new Promise((res,rej) =>{
    setTimeout(() =>{
        res("hey its been 3sec")
    },3000)
})

const newPromise4 = new Promise((res,rej) =>{
    setTimeout(() =>{
        res("hey its been 4sec")
    },4000)
})

//* .then() can return a promise 

newPromise1.then(message => {
    console.log(message)
    return newPromise2
})
.then(message =>{
    console.log(message)
    return newPromise3
})
.then(message =>{
    console.log(message)
    return newPromise4
})
.then(message =>{
    console.log(message)
})

//* Activity 3

//* Task 4

const promName = new Promise(resolve =>{   //! creating a new promise
    setTimeout(() => { 
        resolve('You have resolved the promise')
    },5000)
})

//! resolving promise in a synchronous manner

async function logData(){
    const respromise = await promName //! waits for promise to resolve and store the value in variable 
    console.log(respromise)
}

logData()

//* Task 5

function sendPromise(){
    return new Promise(reject =>{
        setTimeout(()=>{
            reject('the promise is rejected')
        },6000)
    })
}

async function rejectPromise(){
    try{
        const handlePromise = await sendPromise()
        console.log(handlePromise)    
    }
    catch(err){
        console.log(err)
    }
}

rejectPromise()


//* Activity 4 Fetching the data from API

//* Task 6

function randomuser(){
    fetch("https://randomuser.me/api/")
    .then(response =>{
        if(!response.ok){
            throw new Error('The response was not ok')
        }

        return response.json()
    })
    .then(data => {
        const username = data.results[0]
        console.log(`${username.name.title} ${username.name.first} ${username.name.last}`)
    })
}

randomuser()

//* Task 7

function randomuser2(){
    const p = fetch("https://randomuser.me/api/")
    return p
}

async function newHandle(){
    const dataHandle = await randomuser2()
    // Check if data and results array are defined
    try{
        const username2 = dataHandle.results[0];
        console.log(`${username2.name.title} ${username2.name.first} ${username2.name.last}`);
    } 
    catch(err) {
        console.log(`There is a error here ${err}`);
    }
}

newHandle()


//* Activity 5 Concurrent Promises

//* Task 8

const prom1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("The prom1 concurrent promise is resolved")
    },10000)
})

const prom2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("The prom2 concurrent promise is resolved")
    },12000)
})

const prom3 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("The prom3 concurrent promise is resolved")
    },14000)
})

//! returns an array when all the promises are resolved and logs their values
Promise.all([prom1,prom2,prom3]).then(values =>{
    console.log(values)
})

//* Task 9

//! among multiple promises resolve the promise first and access its value

Promise.race([prom1,prom2,prom3]).then(values =>{
    console.log(values)
})