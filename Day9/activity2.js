//* Activity 2 Creating and appending elements

//* Task 3

const para1 = document.createElement('div')

para1.textContent = "my name is vedant" 

document.body.appendChild(para1)

//* Task 4

const list = document.querySelector('ul')

const listItem = document.createElement("li")

listItem.textContent = "Pomogreante"

list.appendChild(listItem)
