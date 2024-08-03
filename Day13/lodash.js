//! Installed loadash library

//* Import the whole loadash library
 import _ from 'lodash' 

//* import {chunk} from 'lodash' //* Only import chunk function loadash

const arr = [1,2,3,4,5,6,7,8,9,10]

const newArr = _.chunk(arr,2)

console.log(newArr)
