
// api
const API = 'https://randomuser.me/api/?results=6'

// for leader
const overlay = document.getElementById('overlay')


const getData = async (api) => {
    loading(true)
    const req = await fetch(api)
    const data = await req.json()
    loading(false)
    return data.results
}

function reset(){

    getData(API).then((data) =>{upData(data)}) 
}
reset()


// loading func
function loading(arg){
    if (arg) {
        overlay.classList.remove("hidden")
    }else {
        overlay.classList.add("hidden")

    }
}

