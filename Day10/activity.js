//* Activity 1 Basic Event Handling

//* Task 1 

const content = document.querySelector('.content')

content.addEventListener('click',()=>{
    content.textContent = "Hello how are you my name is vedant bohra"
})

//* Task 2

const image = document.querySelector('.image')

image.addEventListener('dblclick',()=>{
    image.style.display = "none"
})


//* Activity 2 Mouse Events

//* Task 3

content.addEventListener('mouseover',()=>{
    content.style.backgroundColor = "red"
})

//* Task 4

content.addEventListener('mouseout',()=>{
    content.style.backgroundColor = "white"
})

//* Activity 3 Keboard Events

//* Task 5

const input = document.querySelector('.search')

input.addEventListener('keydown',(e)=>{
    console.log(e.key)
})

//* Task 6

const output = document.querySelector('.output')

input.addEventListener('keyup',()=>{
    output.textContent = input.value
})


//* Activity 4 Form Events

//* Task7 

const form = document.querySelector('.form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name = document.querySelector(".name")
    const password = document.querySelector('.password')
    console.log(`username : ${name.value}`)
    console.log(`password : ${password.value}`);
})

//* Task 8

const outputChange = document.querySelector('.outputChange')
const selected = document.getElementById('items')

//! change event fires when user modifies the value of the element
selected.addEventListener('change',(e)=>{
    outputChange.textContent = `I have ${e.target.value}`
})

//* Activity 5 Event Delegation

//* Task 9

//! Read about event bubbling and event delegation

const grabList = document.getElementsByTagName('ul')[0]

grabList.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
    
})

//* Task 10

const midChild = document.querySelector('.mid')
const createChild = document.createElement('div')

midChild.appendChild(createChild)

createChild.style.height = "100px"
createChild.style.width = "100px"
createChild.style.border = "2px solid black"

createChild.textContent = "hello how are you"
createChild.style.backgroundColor = "red"


//! applying event delegation on parent node 

const parentDiv = document.querySelector('.parent')

parentDiv.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
    e.target.style.backgroundColor = "yellow"

})
