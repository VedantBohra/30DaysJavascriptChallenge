//* Activity 5 Memoization

//* Task 7

//! fibonacci series can be used as an example of memoization


// create a higher order function memozie()
function memoize(){
    // cache an empty object caches the results
    const cache = {}
    // checks on fibonacci function
    function fib(n){ // n is the value at certain position of fibonacci series
        if(n<2)
            return n
        if(cache[n]) return cache[n] // this checks if there is a value inside cache 
        // if n = 5 cache[5] = fib(4) + fib(3) so it goes back till fib(1) + fib(0) as we know this values 
        cache[n] = fib(n-1) + fib(n-2)
        return cache[n]
    }
    return fib
}

const fibo = memoize()

console.log(fibo(10));


//* Task 8

function memoize2(){
    const cache = {}

    function fact(n){
        if(n==0) return 1  // Base case: 0! = 1
        if(n<=2) return n // Return cached result if available
        if(n>2) 
            return cache[n] = n * fact(n-1) // Calculate factorial and store in cache
    }
    return fact
}

const facto = memoize2()

console.log(facto(5))