//* Activity 4 Module pattern

//* Task 6

function collection(){
    
    const items = ["car","bus","tempo"]    
    
    function add(item1,item2, ...rest){
        items.push(item1,item2,...rest)
    }

    function remove(){
        items.pop()
    }

    function list(){
        items.forEach(value =>{
            console.log(value)
        })
    }

    return {
        add,
        remove,
        list
    }
}

const collectItems = collection()

collectItems.add("vedant","bohra","hello","world")
// collectItems.remove()
collectItems.list()