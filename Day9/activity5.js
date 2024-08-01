const clickButton = document.querySelector('.change')
const divContent = document.querySelector('.text')
clickButton.addEventListener('click',()=>{
    divContent.style.backgroundColor = 'red'
})


divContent.addEventListener('mouseover', ()=>{
    divContent.style.border = "2px solid yellow"
})