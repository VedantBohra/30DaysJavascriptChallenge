import axios from 'axios'

async function fetchData(){

    try{
        const response = await axios.get('https://randomuser.me/api/')
        console.log(response)
    }
    catch(err){
        console.log(`Error : ${err}`)
    }
}

fetchData()



